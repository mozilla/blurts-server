# How to get to 100% test coverage

We have set up a very strict test coverage threshold: 100% branch coverage. How can you achieve that?

The first thing to realise is: we don't actually have 100% coverage. Not all code needs unit tests, however, we want it to be a conscious choice not to test a particular code branch. Thus, we make liberal use of [ignore comments](https://github.com/istanbuljs/v8-to-istanbul/blob/fca5e6a9e6ef38a9cdc3a178d5a6cf9ef82e6cab/README.md#ignoring-uncovered-lines), but those should be accompanied by a comment explaining why that code is OK to ignore. And maybe this is all too much of a hassle, and we disable these thresholds again.

## The coverage report

One very important tool in your toolchain is the coverage report. After running `npm test` locally, you'll be able to find a graphical coverage report inside `/coverage/lcov-report/index.html`. Open that in a web browser, and you'll be able to see which code paths you forgot to cover in a test. Or alternatively, which code paths should be marked with an ignore comment.

## How to write tests for UI

For tests concerning the UI in particular, you can get the most bang for your buck by simulating user actions, resisting the urge to drop down to the component level and mocking out individual props. [Think integration tests, not unit tests](https://kentcdodds.com/blog/write-tests), in so far as there's a clear distinction in the first place. Make your tests [reason about the UI like users do](https://testing-library.com/docs/queries/about#priority) (for example, by finding a button with a particular label to click on, rather than the fifth child of an element with class name `navigation`).

Both of those measures ensure we won't have to update a whole bunch of unit tests unless we actually meaningfully change the behaviour for users, while still verifying the behaviour of a whole slew of components in one go.

The easiest way to do so is usually by mock rendering a Storybook story in your test, and simulating user actions that you'd also run inside Storybook. To find examples of tests that do so, search the codebase for `composeStory`.

If a page cannot be wrapped in a Storybook story (for example, because it calls [server actions](https://react.dev/reference/react/use-server), which Storybook [cannot ergonomically mock](https://storybook.js.org/blog/storybook-react-server-components/#mocked-and-loaded) at the time of writing), then you might need to render it directly inside your test. To ensure it doesn't trip over missing React Context variables while rendering, you'll probably want to wrap it in a `<TestComponentWrapper>` — again, search the codebase for it to find existing tests as examples.

## When is it OK not to add a test?

What follows is a list of some reasons not to write a unit test - your ignore comments can refer to these reasons. However, this list is not exhaustive! If you come across another valid reason not to test a bit of code, feel free to add that to this list and then reference it in your code.

### Mock-heavy

If most of the code under test would be interacting with mocks, writing the test would be a lot of work, would require lots of maintenance to keep the mocks up-to-date, while not being very likely to actually catch bugs. This is particularly likely for code that has lots of side effects, e.g. because it executes database queries or sends HTTP requests.

Feel free to mark such code as skipped for coverage. However, do consider extracting code that is side-effect-free into a separate, testable, function. For example, if you have code that sends an HTTP request, then parses the response, that parsing code can be extracted into a separate function that takes the response body and converts it into parsed data.

### Trivial

Some code is exceptionally trivial, such that it is unlikely to contain bugs. When you're in the habit of writing unit tests, it might still be easy enough to set up a quick unit test because why not, but sometimes the effort probably won't pay off.
