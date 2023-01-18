import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const data = {
    partial: settings,
    // TODO: The entries below are for testing only and should be removed.
    csrfToken: 'csrf123',
    emails: [
      {
        email: 'test+primary@mozilla.com',
        id: 'id123',
        primary: true,
        subscriber_id: 'sub123',
        verified: true
      },
      {
        email: 'test+verified@mozilla.com',
        id: 'id123',
        primary: false,
        subscriber_id: 'sub123',
        verified: true
      },
      {
        email: 'test+uverified@mozilla.com',
        id: 'id123',
        primary: false,
        subscriber_id: 'sub123',
        verified: false
      }
    ],
    limit: 5,
    breachCounts: {
      get: () => 123
    }
  }

  res.send(mainLayout(data))
}

export { settingsPage }
