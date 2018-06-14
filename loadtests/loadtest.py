from molotov import scenario


HOMEPAGE = 'https://fx-breach-alerts.herokuapp.com'
SCAN = 'https://fx-breach-alerts.herokuapp.com/scan'
# This hash is for test@example.com
TEST_EMAIL_HASH = 'b84c4c03b2af4050ac2d3b105e58adf83fa5af05'


@scenario(weight=50)
async def scenario_one(session):
    async with session.get(HOMEPAGE) as resp:
        assert resp.status == 200


@scenario(weight=50)
async def scenario_two(session):
    async with session.post(SCAN, data={'emailHash': TEST_EMAIL_HASH}) as resp:
        assert resp.status == 200
