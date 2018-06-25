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

To run the exquisite load tests, simply run <kbd>$ ./run.sh</kbd>.
To modify the default settings, tweak the settings in ./molotov.env.

By default, the load tests will run for 180s (3 minutes), with 20 processes (each w/ 10 workers, for a total of 200 workers).

```ini
DURATION=180
PROCESSES=20
WORKERS=10
```
