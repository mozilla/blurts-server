"use strict";

const got = require("got");

const AppConstants = require("../app-constants");
const hibp = require("../hibp");

const { testBreaches } = require("./test-breaches");


jest.mock("got");

test("req adds hibp api root, token, and standard options", async() => {
  hibp.req("/some-path");

  const gotCalls = got.mock.calls;
  expect(gotCalls.length).toEqual(1);
  const gotCallArgs = gotCalls[0];
  expect(gotCallArgs[0]).toContain(`${AppConstants.HIBP_API_ROOT}/some-path`);
  expect(gotCallArgs[0]).toContain(`?code=${encodeURIComponent(AppConstants.HIBP_API_TOKEN)}`);
  expect(gotCallArgs[1].headers["User-Agent"]).toContain("blurts-server");
  expect(gotCallArgs[1].json).toBe(true);
});


test("loadBreachesIntoApp adds app.locals.breaches|breachesLoadedDateTime|mostRecentBreachDateTime", async() => {
  got.mockClear();
  got.mockResolvedValue( { body: testBreaches });
  const app = { locals: {} };

  await hibp.loadBreachesIntoApp(app);

  const gotCalls = got.mock.calls;
  expect(gotCalls.length).toEqual(1);
  const gotCallArgs = gotCalls[0];
  expect(gotCallArgs[0]).toContain(`${AppConstants.HIBP_API_ROOT}/breaches`);
  expect(app.locals.breaches).toEqual(testBreaches);
  expect(app.locals.mostRecentBreachDateTime).toEqual(hibp.getLatestBreachDateTime(testBreaches));
});


test("filterOutUnsafeBreaches removes sensitive breaches", async() => {
  let foundSensitive = false;
  for (const breach of testBreaches) {
    if (breach.IsSensitive) {
      foundSensitive = true;
      break;
    }
  }
  expect(foundSensitive).toBe(true);


  const safeBreaches = hibp.filterOutUnsafeBreaches(testBreaches);

  for (const breach of safeBreaches) {
    expect(breach.IsSensitive).toBe(false);
    expect(breach.IsSpamList).toBe(false);
    expect(breach.IsRetired).toBe(false);
    expect(breach.IsVerified).toBe(true);
  }
});
