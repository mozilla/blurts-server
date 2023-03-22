_Last updated: Mar 21, 2021_

# Firefox Monitor Analytics Plan

This is the Analytics plan for Firefox Monitor. It documents our use of Google Analytics and what we do with the information we collect.

## Analysis

**Firefox Monitor uses Google Analytics to collect and organize data. We do this to get a better understanding of what is working, and where we still have work to do.**

**Captured data also helps provide answers to the following questions:**

**Demographic:**

>From which country does the majority of our traffic originate?

>In which language does the majority of our traffic view the site?

>Which browsers are most commonly used to access Firefox Monitor?

>Which devices are most commonly used to access Firefox Monitor?

**User Behavior:**

>Do users scan their email?

>Do users scan multiple email addresses?

>What percentage of users sign up receive alerts from Firefox Monitor?

>Are users more likely to sign up for alerts before or after scanning their email?


## Collection

Events are reported using the [Google Analytics 4 Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4).

We collect data for the following events:

- [Enhanced measurement events](https://support.google.com/analytics/answer/9216061):
### Scan and Add Email Forms

**`Email Scan Form`**  &nbsp;  **`Scan Another Email Form`**  &nbsp;  **`Add Another Email Form`**

- When a form appears on the page.
  * `eventCategory` : Form ID
  * `eventAction` : View
  * `eventLabel` : Page location ID.


- When a user focuses inside a form input.
  * `eventCategory` : Form ID
  * `eventAction` : Engage
  * `eventLabel` : Page location ID.


- When a user submits a form.
  * `eventCategory` : Form ID
  * `eventAction` : Submit
  * `eventLabel` : Page location ID.

- When a user submits an invalid email.
  * `eventCategory` : Form ID
  * `eventAction` : Failure
  * `eventLabel` : Page location ID.

- When a user submits a valid email.
  * `eventCategory` : Form ID
  * `eventAction` : Success
  * `eventLabel` : Page location ID.
  

### Sign Up Buttons & Links (FxA Entrypoints)

**`Sign In Button`** -&nbsp;  **`Sign Up Button`**  &nbsp;  **`Sign In Link`**&nbsp;  **`About page SignUp Button`**  &nbsp;  **`Alert Me About New Breaches`**  &nbsp;  **`Alert Me About New Breaches - Banner`**  &nbsp;

- When a button appears on the page
  * `eventCategory` : Button ID
  * `eventAction` : View
  * `eventLabel` : Page location ID.

- When a user clicks a link or button.
  * `eventCategory` : Button or Link ID
  * `eventAction` : Engage
  * `eventLabel` : Page location ID.

### Miscellaneous

**`All Breaches: Fuzzy Finder`** &nbsp; **`All Breaches: Show All Button`** &nbsp; **`About Page: Download Firefox`** &nbsp; **`About Page: Search Your Email`** &nbsp; **`Breach Detail: Change Password Button`** &nbsp; **`Breach Detail: Website URL Link`** &nbsp; **`Remove Email Form`** &nbsp; **`Show All Breaches Button`**


- When a user clicks a triggering element
  * `eventCategory` : Type of Link (Outbound or Internal)
  * `eventAction` : Click / Engage
  * `eventLabel` : Link ID
  

### Links

**`Outbound & Utility Links`**  &nbsp;  **`Internal Links`** 

- When a user clicks a link.
  * `eventCategory` :Button or Link ID
  * `eventAction` : Click
  * `eventLabel` : Page location ID.


### User menu

- When a user opens the User menu
  * `eventCategory` : bento
  * `eventAction` : bento-opened
  * `eventLabel` : fx-monitor

- When a user closes the User menu
  * `eventCategory` : bento
  * `eventAction` : bento-closed
  * `eventLabel` : fx-monitor

- When a user clicks on one of the Bento menu links
  * `eventCategory` : bento
  * `eventAction` : bento-app-link-click
  * `eventLabel` : link identifier


## Opt Out of Google Analytics Tracking

**Firefox Monitor respects user privacy and honors DNT headers.**

Before initializing Google Analytics, we check the user's browser settings for a **DNT** signal. If the **DNT** header is enabled, Analytics is never initialized and is not used to collect data for that session.

>[How Firefox Monitor detects DNT.](https://github.com/schalkneethling/dnt-helper)

>[How do I turn on the Do Not Track feature?](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
