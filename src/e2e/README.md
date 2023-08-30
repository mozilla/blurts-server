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

#### Generate .env from .env-dist

```sh
cp .env-dist .env
```

#### Add some additional values to the .env file

`E2E_TEST_ENV=<'local' | 'dev' | 'stage'>` stage is default, for prod please use GA

`E2E_TEST_ACCOUNT_EMAIL=`

`E2E_TEST_ACCOUNT_PASSWORD=`

#### Verify helpers.js to make sure correct urls are being used

#### e2e runs on localhost:6060 by default, in order to run against other envs, update the `E2E_TEST_ENV` variable in the .env file

#### To debug a test run

```sh
npm run e2e:debug
```
