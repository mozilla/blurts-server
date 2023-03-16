# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Παραβιασμένα δεδομένα
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Παραβιάσεις δεδομένων για το { $email-select }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Διαχείριση email

## Breaches resolved filter

filter-label-unresolved = Μη επιλυμένες παραβιάσεις
filter-label-resolved = Επιλυμένες παραβιάσεις

## Breaches table

column-company = ΕΤΑΙΡΕΙΑ
column-breached-data = ΠΑΡΑΒΙΑΣΜΕΝΑ ΔΕΔΟΜΕΝΑ
column-detected = ΑΝΙΧΝΕΥΣΗ
breaches-none-headline = Δεν βρέθηκαν παραβιάσεις
breaches-none-cta-blurb = Θέλετε να παρακολουθήσετε κάποιο άλλο email;
breaches-none-cta-button = Προσθήκη διεύθυνσης email
breaches-all-resolved-cta-blurb = Θέλετε να παρακολουθήσετε κάποιο άλλο email;
breaches-all-resolved-cta-button = Προσθήκη διεύθυνσης email
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Στις { $breachDate }, η { $companyName } παραβιάστηκε. Μόλις ανακαλύφθηκε και επαληθεύτηκε η παραβίαση, προστέθηκε στη βάση δεδομένων μας στις { $addedDate }. Αυτή η παραβίαση περιλάμβανε: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Διαχείριση κωδικών πρόσβασης { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email


## Prompts the user for changes when there is a breach detected of social security number


## Prompts the user for changes when there is a breach detected of credit card


## Prompts the user for changes when there is a breach detected of bank account


## Prompts the user for changes when there is a breach detected of pin


## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Χρησιμοποιήστε το διαδίκτυο ιδιωτικά με ένα VPN, όπως το { $mozillaVpnLink }.

## Prompts the user for changes when there is a breach detected of physical address


## Prompts the user for changes when there is a breach detected of date of birth


## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions


## Prompts the user for changes when there is a breach detected of historical password


## Prompts the user for changes when there is a breach detected of other types

