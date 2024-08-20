# How to Run e2e Test

#### Install npm packages

###### Error will show if node 18.12.0^ is not installed --- [volta.sh](https://volta.sh/) is the recommended tool for this situation.

```sh
npm install
```

#### Install playwright along with necessary browser agents

```sh
npx playwright install
```

#### Generate .env.local from .env.local.example

```sh
cp .env.local.example .env.local
```

#### Add some additional values to the .env.local file

`E2E_TEST_ENV=<'local' | 'dev' | 'stage'>` stage is default, for prod please use GA

`E2E_TEST_ACCOUNT_EMAIL=`

`E2E_TEST_ACCOUNT_PASSWORD=`

`E2E_TEST_PAYPAL_LOGIN=`

`E2E_TEST_PAYPAL_PASSWORD=`

Reach out to @mansaj for the paypal login. The e2e test email and password should be the details of an existing account.

#### Verify helpers.js to make sure correct urls are being used

#### e2e runs on localhost:6060 by default, in order to run against other envs, update the `E2E_TEST_ENV` variable in the .env.local file

#### To debug a test run

```sh
npm run e2e:debug
```
