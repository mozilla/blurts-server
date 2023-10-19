# Use queues for more resilient backend services

- Status: Accepted
- Deciders: @mansaj, @csadilek
- Date: 2023-10-10

## Context and Problem Statement

Monitor has had occasional service problems when traffic spikes, which impact user availability of the service. This
proposal separates the user-facing parts of the system from the data ingestion, so one failing does not impact the other.

- When users add an email address to Monitor, the user is registered with the breach provider (HIBP)
  - NOTE: this uses ranges of sha256 hash sums to provide k-anonymity, so PII like raw email addresses is not sent to HIBP
- HIBP calls Monitor's `/hibp` API for each hash range, which (for large breaches) can cause substantial database write activity
- Monitor sends email to user to notify them of breaches, which causes more users to click through to the site

The primary problem in the past few outages have been from unhandled exceptions in handling the incoming data, which cause
the app server(s) to restart. k8s notices that the pods are unhealthy and restarts them, which prolongs the downtime. Restarting
servers will help in many cases, but in this specific failure mode, there is an enourmous amount of incoming breach data over a
prolonged period of time.

This means that opportunites to serve and convert users are lost because the result is Monitor being inoperable when
there are large "spikes" of users visiting all at once.

### Architectural changes proposed

To implement this, we will split the API route and controller for the email and HIBP APIs up
such that there are separate "publisher" and "consumer" functions.

When run in dev mode, these functions will call each other directly.

When used in production, these functions will publish a payload describing an action to perform,
and a separate process will consume and work on that payload.

Before:

![image](https://user-images.githubusercontent.com/61412/231534048-c4111363-adb6-45b6-90ee-22f300535694.png)

After:

![image](https://user-images.githubusercontent.com/61412/231534170-5eb8847d-2cd8-4ee1-92d8-6d156822550b.png)

## Decision Drivers

- deliver information about newly-reported breaches to users as soon as possible
- availability, security, and performance must be provided simultaneously
- local development workflow impact should be as minimial as possible

## Considered Options

- GCP Cloud Tasks
  - Cloud Tasks is a fully managed service that allows you to manage the execution, dispatch, and delivery of a large number of distributed tasks. Using Cloud Tasks, you can perform work asynchronously outside of a user or service-to-service request.
- GCP Pub/Sub
  - Google Cloud Pub/Sub provides messaging between applications. Cloud Pub/Sub is designed to provide reliable, many-to-many, asynchronous messaging between applications. Publisher applications can send messages to a "topic" and other applications can subscribe to that topic to receive the messages.
- AWS SQS
  - Amazon SQS is a message queue service used by distributed applications to exchange messages through a polling model, and can be used to decouple sending and receiving components.
- RabbitMQ
  - RabbitMQ is a messaging broker - an intermediary for messaging. It gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.

## Decision Outcome

Chosen option: "GCP Pub/Sub", because Monitor services already run in GCP, and it is relatively
simple to scale. In all cases, some level of monitoring and tuning is necessary to provide sufficiently
capacity to ensure that tasks are not lost.

### Phase 1

- Separate out the data ingestion parts of the system, and host these separately from the user-facing APIs and pages.
- Introduce a queue between external providers and the data ingestion parts of the system.
- Introduce an Kubernetes job that runs in parallel every 5 minutes to act as the worker which ingests messages and performs the task
  - An example task would be looking up impacted users in Postgres and sending breach alerts using AWS SES.

Kubernetes jobs are documented here: https://kubernetes.io/docs/concepts/workloads/controllers/job, Monitor is specifically implementing
the "Parallel Jobs with a work queue" task type.

### A note on PostgreSQL performance

Postgres is required for the normal function of the Monitor site, and so is a single point of failure.
This proposal focuses on queueing to be able to control the flow of tasks, but there are also some
further improvements that have been identified that would make Postgres itself more resilient to spikes in
demand:

- Use read replica(s)
  - Right now, Monitor uses the same Postgres instance for reads and writes
  - The GCP Cloud SQL managed service makes this pretty straightforward to set up, but Monitor will need to be modified to always send writes to the main server and reads to the replica(s).
- Examine Postgres statistics and adjust indexes as necessary.

There are likely schema changes that would improve performance as well, but we need to be careful to
maintain backwards compatibility during migrations.

## Pros and Cons of the Options

### [GCP Cloud Tasks](https://cloud.google.com/tasks)

- Pros:
  - Supports option of using cloud functions vs. having to host workers in k8s
  - Relatively simple to set up and use compared to other options
  - Mozilla is already using this cloud vendor
  - Access and management of individual tasks in a queue
  - Cloud Tasks has explicit rate controls while Pub/Sub requires using a Polling worker (vs. HTTP Push) to implement flow control.
- Cons:
  - Locked in to GCP ecosystem
  - Hard to test locally/offline
    - No official emulator, unofficial open-source emulators exist
  - Might be more difficult for external users of open-source
  - No support for strict ordering (which is not a requirement for Monitor at this time)
    - https://cloud.google.com/tasks/docs/common-pitfalls

### [GCP Pub/Sub](https://cloud.google.com/pubsub/docs/overview)

- Pros:
  - Mozilla is already using this cloud vendor
  - Official emulator available to test locally/offline
  - Configurable support for ordered delivery
- Cons:
  - Locked in to GCP ecosystem
  - Might be more difficult for external users of open-source

### [AWS SQS](https://aws.amazon.com/sqs/)

- Pros:
  - Mozilla is already using this cloud vendor
  - Configurable support for ordered delivery
- Cons:
  - Locked in to AWS ecosystem
  - Hard to test locally/offline
    - No official emulator, unofficial open-source emulators exist
  - Might be more difficult for external users of open-source

### [RabbitMQ](https://www.rabbitmq.com/)

- Pros:
  - Self-hosted
  - Easy to run locally/offline
  - Might be easier for external users of open-source
  - Support for strict in-order delivery
- Cons:
  - Self-hosted, need to host and manage our own RabbitMQ cluster
