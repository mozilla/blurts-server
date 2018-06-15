from os import getenv
from molotov import scenario


SERVER_URL = getenv('SERVER_URL', 'https://fx-breach-alerts.herokuapp.com')
HOMEPAGE_URL = SERVER_URL
SCAN_URL = '{}/scan'.format(SERVER_URL)
# This hash is for test@example.com (via `node scripts/make-sha1-hashes.js`)
TEST_EMAIL_HASH = '567159d622ffbb50b11b0efd307be358624a26ee'

WEIGHT_HOMEPAGE = int(getenv('WEIGHT_HOMEPAGE', 0))
WEIGHT_SCAN = int(getenv('WEIGHT_SCAN', 0))


@scenario(weight=WEIGHT_HOMEPAGE)
async def homepage_test(session):
    async with session.get(HOMEPAGE_URL) as resp:
        assert resp.status == 200


@scenario(weight=WEIGHT_SCAN)
async def scan_test(session):
    async with session.post(SCAN_URL, data={'emailHash': TEST_EMAIL_HASH}) as resp:
        assert resp.status == 200
