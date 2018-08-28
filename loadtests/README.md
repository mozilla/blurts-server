# Firefox Monitor Loadtests

## Requirements

- Python 3.6
- pip
- virtualenv

## Setup

```sh
$ virtualenv venv -p python3
$ source ./venv/bin/activate
$ pip install -r requirements.txt
```

## Running the load tests

Dev server:
```sh
locust --host=https://fx-breach-alerts.herokuapp.com
```

Stage server (Note: ask breach-alerts@mozilla.com first): 
```sh
locust --host=https://blurts-server.stage.mozaws.net/
```
