"use strict";

const readline = require("readline");

const AppConstants = require("../app-constants");
const EmailUtils = require("../email-utils");
const hibp = require("../controllers/hibp");
const { LocaleUtils } = require("../locale-utils");
const sha1 = require("../sha1-utils");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const app = { locals: { breaches: [], AVAILABLE_LANGUAGES: ["en"] } };


LocaleUtils.init();
LocaleUtils.loadLanguagesIntoApp(app);

(async () => {
    await EmailUtils.init();
    let emailAddress,
        breachName;
    const resp = {
        // FIXME: no op
        // eslint-disable-next-line no-empty-function
        status: () => {},
        json: (arg) => {
            console.log(JSON.stringify(arg));
        },
    };
    rl.question("What email address? ", (answer) => {
        emailAddress = answer;
        const hash = sha1(emailAddress);
        const hashPrefix = hash.slice(0, 6).toUpperCase();
        const hashSuffix = hash.slice(6).toUpperCase();
        rl.question("What breach name? ", async (answer) => {
            breachName = answer;
            const req = {
                token: AppConstants.HIBP_NOTIFY_TOKEN,
                app: app,
                body: { hashPrefix, hashSuffixes: [hashSuffix], breachName },
            };

            await hibp.notify(req, resp);

            console.log(JSON.stringify(resp));

            rl.close();

            process.exit();
        });
    });
})();
