# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Oversyn
breach-all-meta-title = { -brand-fx-monitor } - Alle datalekkasjar
breach-all-meta-social-title = Alle datalekkasjar oppdaga av { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - datalekkasjar hos { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Vart du påverka av datalekkasjen hos { $company } ?

## Breaches header

# Data classes pie chart title
breach-chart-title = Lekne data
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalekkasjar for { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } av { $total } e-postadresse overvaka
       *[other] { $count } of { $total } e-postadresser overvaka
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Handsam e-postadresser

## Breaches resolved filter

filter-label-unresolved = Uløyste datalekkasjar
filter-label-resolved = Løyste datalekkasjar

## Breaches table

column-company = VERKSEMD
column-breached-data = Lekne data
column-detected = OPPDAGA
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Løyst
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktiv
breaches-resolve-heading = Løys denne datalekkasjen:
breaches-none-headline = Fann ingen datalekkasjar
breaches-none-cta-button = Legg til e-postadresse
breaches-all-resolved-headline = Alle datalekkasjar løyste
breaches-all-resolved-cta-blurb = Vil du overvake ei anna e-postadresse?
breaches-all-resolved-cta-button = Legg til e-postadresse

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } passordhandsamar
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email


## Prompts the user for changes when there is a breach detected of social security number


## Prompts the user for changes when there is a breach detected of credit card


## Prompts the user for changes when there is a breach detected of bank account


## Prompts the user for changes when there is a breach detected of pin


## Prompts the user for changes when there is a breach detected of IP address


## Prompts the user for changes when there is a breach detected of physical address


## Prompts the user for changes when there is a breach detected of date of birth


## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Oppdater sikkerheitsspørsmåla dine.

## Prompts the user for changes when there is a breach detected of historical password


## Prompts the user for changes when there is a breach detected of other types

