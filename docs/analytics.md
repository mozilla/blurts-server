
_Last updated: Feb 25, 2019_


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

Events are reported using the [Google Analytics Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/).

We collect data for the following events:

- When the page loads (or reloads).
  * `hitType` : pageView
  * `page` : location.pathName


### Forms:

**`Email Scan Form`** &nbsp; **`Scan Another Email Form`** &nbsp; **`Sign Up Form`**

- When a form appears on the page.
  * `hitType` : event
  * `eventCategory` : Form ID
  * `eventAction` : View
  * `eventLabel` : Page location ID.


- When a user focuses inside a form input.
  * `hitType` : event
  * `eventCategory` : Form ID
  * `eventAction` : Engage
  * `eventLabel` : Page location ID.


- When a user submits a form.
  * `hitType` : event
  * `eventCategory` : Form ID
  * `eventAction` : Submit
  * `eventLabel` : Page location ID.


- When a user submits an invalid email.
  * `hitType` : event
  * `eventCategory` : Form ID
  * `eventAction` : Failure
  * `eventLabel` : Page location ID.


- When a user submits a valid email.
  * `hitType` : event
  * `eventCategory` : Form ID
  * `eventAction` : Success
  * `eventLabel` : Page location ID.


### Buttons:

**`Download Firefox Button`** &nbsp; **`Sign Up Button`** &nbsp; **`See Full Report Button`** &nbsp;
**`Sign up to Check Button`** &nbsp; **`Show All Breaches Button`**


- When a button appears on the page
  * `hitType` : event
  * `eventCategory` : Button ID
  * `eventAction` : View
  * `eventLabel` : Page location ID.


- When a user clicks a link or button.
  * `hitType` : event
  * `eventCategory` : Button or Link ID
  * `eventAction` : Engage
  * `eventLabel` : Page location ID.




### Links:

**`Outbound & Utility Links`** &nbsp; **`Internal Links`**

- When a user clicks a link
  * `hitType` : event
  * `eventCategory` : Type of Link (Outbound or Internal)
  * `eventAction` : Click
  * `eventLabel` : Link ID // Page location ID.


## Opt Out of Google Analytics Tracking

**Firefox Monitor respects user privacy and honors DNT headers.**

Before initializing Google Analytics, we check the user's browser settings for a **DNT** signal. If the **DNT** header is enabled, Analytics is never initialized and is not used to collect data for that session.


>[How Firefox Monitor detects DNT.](https://github.com/schalkneethling/dnt-helper)

>[How do I turn on the Do Not Track feature?](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)


