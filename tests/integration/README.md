# Firefox Monitor Integration tests

### Prerequisites
- Docker
- Docker-Compose
- [geckodriver]
- [npm]
- [nodejs]

## Firefox Setup

Make sure Firefox is in your system path if you want to watch the tests run inside your browser.

1. Follow setup instructions [here](https://github.com/mozilla/blurts-server#install).
2. Set appropriate ENV variables, HIBP_API_TOKEN, HIBP_KANON_API_TOKEN, MALINATOR_PASSWORD
2. Build and start the containers: ```docker-compose -f tests/integration/docker-compose.yml up --build -d```.
3. Run the tests: ```npm run test:integration```.
   They can also be run headlessly: ```npm run test:integration-headless```, and inside docker: ```npm run test:integration-docker```.

[geckodriver]: https://github.com/mozilla/geckodriver/releases
[npm]: https://docs.npmjs.com/
[nodejs]: https://nodejs.org/en/