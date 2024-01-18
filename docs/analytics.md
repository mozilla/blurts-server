_This document is aimed at Mozilla Monitor developers. For more information about what data we collect and how we protect it, see [our Privacy Policy](https://www.mozilla.org/privacy/firefox-monitor/). Also note that we respect your browser's DoNotTrack signal._

Telemetry is collected on the frontend. We currently use both [Glean](https://mozilla.github.io/glean/book/index.html) and Google Analytics, with the ambition to transition fully to Glean once it matures more for web usage. We have a `useTelemetry` hook that abstracts over both — though in a limited number of exceptions, Glean will not support our use case, in which case the hook supports sending the data to just GA.

The data we collect is defined in [`metrics.yml`](../metrics.yml). Events added to that file on our `main` branch are picked up by Glean, and thus need to pass the [data review](https://wiki.mozilla.org/Data_Collection) before being added.

Telemetry code is generated from `metrics.yml` by running `npm run build-glean`, so make sure to re-run that command locally whenever `metrics.yml` is updated.

## Debugging

Make sure you are testing in a browser that does not set DoNotTrack, and that the value of `APP_ENV` in your `.env` file is `local`.

### Glean

You can debug Glean events using the [Glean debug dashboard](https://debug-ping-preview.firebaseapp.com/), where our application ID is `fx-monitor-local-dev`. You can view [an event stream](https://debug-ping-preview.firebaseapp.com/stream/fx-monitor-local-dev) and the [raw ping payloads](https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev).

### GA

We use GA4. There is a [debug dashboard](https://analytics.google.com/analytics/web/#/a36116321p314430969/admin/debugview/overview?params=_u..nav%3Dmaui%26_u.dateOption%3Dlast28Days&collectionId=4770438668), and [a Chrome extension](https://chromewebstore.google.com/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?pli=1) that logs events to the console.
