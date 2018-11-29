from itertools import takewhile
import hashlib
import random
import string

from locust import HttpLocust, TaskSet, task
import requests


BREACHES_URL = 'https://haveibeenpwned.com/api/v2/breaches'
HEADERS = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; '
           'rv:65.0) Gecko/20100101 Firefox/65.0'}


breaches = requests.get(BREACHES_URL, headers=HEADERS).json()
test_breach_names = [breach['Name'] for breach in breaches]


TEST_SIGNUP_ADDRESSES = [
    'success@simulator.amazonses.com',
    'bounce@simulator.amazonses.com',
    'ooto@simulator.amazonses.com',
    # 'complaint@simulator.amazonses.com',
    # 'suppressionlist@simulator.amazonses.com',
]

TEST_SIGNUP_ADDRESSES_WEIGHTS = [
    0.9,
    0.06,
    0.02,
    # 0.01,
    # 0.01
]


def accumulate(iterator):
    current = 0
    for value in iterator:
        current += value
        yield current


def weightedChoice(weights, objects):
    limit = random.random()
    return objects[
        sum(takewhile(bool, (value < limit for value in accumulate(weights))))
    ]


def get_test_signup_email_address():
    return weightedChoice(TEST_SIGNUP_ADDRESSES_WEIGHTS, TEST_SIGNUP_ADDRESSES)


def generate_random_email_address():
    name = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
    host = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
    tld = ''.join(random.choice(['com', 'org', 'edu']))
    email_string = "%s@%s.%s" % (name, host, tld)
    return email_string


@task
def visit_home(l):
    l.client.get("/")


@task
def visit_breach_landing(l):
    l.client.get("/?breach=%s" % random.choice(test_breach_names))


@task
def scan(l):
    email_address = generate_random_email_address()
    email_hash = hashlib.sha1(email_address.encode('utf-8')).hexdigest()
    l.client.post("/scan", {"emailHash": email_hash})


@task
def sign_up(l):
    email = get_test_signup_email_address()
    l.client.post("/user/add", json={"email": email})


@task
def verify(l):
    l.client.get("/user/verify?token=235f9df4-7936-4a9e-848f-0a89cf10e6ef")


@task
def check_breaches(l):
    l.client.get("/hibp/breaches", headers={["If-Modified-Since"]: ""})


class WebsiteBounce(TaskSet):
    tasks = {visit_home: 1}


class FirefoxPopupLander(TaskSet):
    tasks = {visit_breach_landing: 5}


class Scan(TaskSet):
    tasks = {scan: 1}


class Signup(TaskSet):
    tasks = {scan: 1, sign_up: 1}


class Verify(TaskSet):
    tasks = {scan: 1, verify: 1}


class Scanner(HttpLocust):
    task_set = Scan
    min_wait = 2000
    max_wait = 5000


class WebsiteBouncer(HttpLocust):
    task_set = WebsiteBounce
    min_wait = 2000
    max_wait = 5000


class FirefoxPopupLander(HttpLocust):
    task_set = FirefoxPopupLander
    min_wait = 2000
    max_wait = 5000


class Subscriber(HttpLocust):
    task_set = Signup
    min_wait = 2000
    max_wait = 5000


class Verifier(HttpLocust):
    task_set = Verify
    min_wait = 2000
    max_wait = 5000
