#!/bin/bash

# Ensure the emulator host is set
PUBSUB_HOST=$1
PUBSUB_PORT=$2
PROJECT_ID=$3

PUBSUB_EMULATOR_HOST="${PUBSUB_HOST}:${PUBSUB_PORT}"

# Start PubSub emulator in the background
gcloud beta emulators pubsub start --host-port=0.0.0.0:${PUBSUB_PORT} --project=${PROJECT_ID} &
echo "Waiting for Pub/Sub emulator to be ready..."
until curl -s "http://${PUBSUB_EMULATOR_HOST}/v1/projects/${PROJECT_ID}/schemas" > /dev/null; do
    echo "Pub/Sub emulator not ready yet..."
    sleep 2
done
echo "Pub/Sub emulator is ready!"
echo "Initializing Pub/Sub emulator..."

create_topic_and_subscription  () {
    if [ $# -ne 2 ]; then 
        echo "create_topic_and_subscription takes 2 arguments"
        exit 1
    fi
    if [ -z "$1" ]; then
        echo "create_topic_and_subscription requires non-empty topic"
        exit 1
    fi
    if [ -z "$2" ]; then 
        echo "create_topic_and_subscription requires non-empty subscription"
        exit 1
    fi

    topic=$1
    subscription=$2
    echo "Creating topic '$topic' with subscription '$subscription'..."

    # Create the topic using REST API instead of gcloud
    curl -s -X PUT "${PUBSUB_EMULATOR_HOST}/v1/projects/${PROJECT_ID}/topics/${topic}"

    # Create the subscription using REST API instead of gcloud
    curl -s -X PUT "${PUBSUB_EMULATOR_HOST}/v1/projects/${PROJECT_ID}/subscriptions/${subscription}" \
        -H "Content-Type: application/json" \
        -d "{\"topic\": \"projects/${PROJECT_ID}/topics/${topic}\"}"
}

create_topic_and_subscription hibp-breaches hibp-cron

echo "Pub/Sub initialization completed."
touch /tmp/startup.done

# Keep emulator running
wait
