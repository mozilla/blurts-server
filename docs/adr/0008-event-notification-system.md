# Event Notification System

- Status: proposed
- Deciders: Monitor team
- Date: 2023-08-31

Technical Story: TBD

## Context and Problem Statement

With integrating more complex UX flows that are depending on asynchronous processes and events from third parties we would like to be able to send event from the backend to the client.

## Decision Drivers <!-- optional -->

- We are currently not able to get real-time updates from from the backend in on the client.
- We are starting to see restrictions in the form of not being able to support UX flows that are depending on being able to listen to server-side events.
- There are very likely more features and UX flows that will benefit by us being able to have an event notification system in place.

## Considered Options

- Server-Sent Events (SSE)
- WebSockets
- Polling
- Long Polling

## Decision Outcome

Chosen option: TBD

### Positive Consequences <!-- optional -->

- With us being able to notify the client about the status of backend processes and events we can enhance the UX flow.
- We can make sure that the client UI and backend are not getting out of sync.

### Negative Consequences <!-- optional -->

- Implementation and maintenance of an additional service.
- It takes some time to implement a flexible and reliable event system.

## Pros and Cons of the Options <!-- optional -->

### Server-Sent Events (SSE)

### WebSockets

### Polling

### Long Polling

## Links <!-- optional -->

- [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
- … <!-- numbers of links can vary -->
