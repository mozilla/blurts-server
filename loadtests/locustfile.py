from itertools import takewhile
import hashlib
import random
import string

from locust import HttpLocust, TaskSet, task


TEST_SIGNUP_ADDRESSES = [
    'success@simulator.amazonses.com',
    'bounce@simulator.amazonses.com',
    'ooto@simulator.amazonses.com',
    'complaint@simulator.amazonses.com',
    'suppressionlist@simulator.amazonses.com',
]

TEST_SIGNUP_ADDRESSES_WEIGHTS = [
    0.9,
    0.06,
    0.02,
    0.01,
    0.01
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
    l.client.get("/user/verify?token=5a66c262-9bed-4893-b53d-3759cbe3d564")


class WebsiteBounce(TaskSet):
    tasks = {visit_home: 1}


class Scan(TaskSet):
    tasks = {visit_home: 1, scan: 1}


class Signup(TaskSet):
    tasks = {visit_home: 1, scan: 1, sign_up: 1}


class Verify(TaskSet):
    tasks = {visit_home: 1, scan: 1, sign_up: 1, verify: 1}


class WebsiteBouncer(HttpLocust):

    task_set = WebsiteBounce
    min_wait = 2000
    max_wait = 15000


class Scanner(HttpLocust):
    task_set = Scan
    min_wait = 2000
    max_wait = 15000


class Subscriber(HttpLocust):
    task_set = Signup
    min_wait = 2000
    max_wait = 15000


class Verifier(HttpLocust):
    task_set = Verify
    min_wait = 2000
    max_wait = 15000
