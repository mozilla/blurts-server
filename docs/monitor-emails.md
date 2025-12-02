# Monitor emails

## Email types

The different types of templates for emails are located in `src/views/emails`. Data for populating the templates is passed by the respective controllers they are used in.

### Email verification

We send this email to users in order to verify that is indeed them that are adding their email address to be monitored.

- User adds a new email address to be monitored
- We send the user an email with a link to verify and add their email

### Breach notification

The breach notification alerts users if we detected that their email address was involved in a breach. Depending on the user's preferences that they can choose on the settings page: This email is sent either to the email address that has been involved in the breach or to the primary address they signed up with.

- HIBP received a new breach that is associated with one of the user's email addresses
- `/notify` endpoint is called by HIBP
- We send out an email to the user listing details on the breach.

### Sign-up report

Upon sign up, we scan the user's primary email for breaches and send them a report of the test result.

- When a user signs up for Monitor we scan their primary email address for breaches
- We send out a report using one of two templates:
  - No breaches found
  - Report of breaches involved

## Email previewer

For viewing, developing, and sending Monitor email templates we added an email previewer. There are two versions:

- Non-auth preview `/preview/emails`: It aims to be accessible by people outside of our team and does not require authentication.
- Admin `/admin/emails`: This version is not only to authenticate into Monitor but also is restricted to team members that have admin rights. This version lets admins send emails for testing purposes.

Both are currently only available for `dev` and `stage` environments.

### Non-auth preview

The _non-auth preview_ is reachable under `/preview/emails`. This is a view-only version of the email templates.

### Admin preview

The _admin preview_ is reachable under `/admin/emails`. It has one addition to the _non-auth preview_ and comes with the ability to send emails. For more info see [Sending emails](#sending-emails).

### Templates

You can switch between the [email templates](#email-types) using the dropdown select.

Except for the `Breach notification` email, all of the templates are populated with dummy data. The breaches for the notification email template are populated by the breaches data that we use for the Mailintor address.

### Sending test emails

From the admin version, you have the ability to send emails. Admins can send emails to their primary email address or to the [public Mailinator address](https://www.mailinator.com/v4/public/inboxes.jsp?to=localmonitor20200827#) that we can use for testing.
