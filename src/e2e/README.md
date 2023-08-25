# How to Run e2e Test

###

#### Install npm packages error will show if node 18.12.0^ is not installed, `nvm install 18.12.0` should fix this.

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

`E2E_TEST_ACCOUNT_EMAIL=`

`E2E_TEST_ACCOUNT_PASSWORD=`

`E2E_TEST_BASE_URL=`

`E2E_TEST_ENV=` if this is not set, stage will be used

#### Verify helpers.js to make sure correct urls are being used

#### e2e runs on localhost:6060 by default, inorder to run against other envs, provide the end in command

`Update the E2E_TEST_ENV in .env file`

#### In a scenario where the baseline screenshots need to be updated in case of design change etc.

```sh
npm run e2e:update
```

#### To debug a test run

```sh
npm run e2e:debug
```
