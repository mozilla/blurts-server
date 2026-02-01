# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Gosodiadau { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Dewisiadau e-bost
settings-alert-email-preferences-subtitle = Dywedwch wrthym pa negeseuon e-bost yr hoffech chi eu derbyn.
settings-alert-preferences-allow-breach-alerts-title = Rhybuddion tor-data byw
settings-alert-preferences-allow-breach-alerts-subtitle = Bydd y rhybuddion hyn yn cael eu hanfon yn syth ar ôl canfod tor-data
settings-alert-preferences-option-one = Anfon rhybuddion tor-data at y cyfeiriadau e-bost sydd wedi'u heffeithio
settings-alert-preferences-option-two = Anfon yr holl rybuddion tor-data at fy mhrif gyfeiriad e-bost.

## Monitored email addresses

settings-email-verification-callout = Mae angen gwirio'r e-bost
settings-remove-email-button-label = Tynnu
settings-email-addresses-header = Cyfeiriadau e-bost
settings-email-addresses-description = Bydd { -brand-monitor } yn eich rhybuddio os bydd yr e-byst hyn yn ymddangos mewn dor-data hysbys.
settings-email-addresses-add-email-button = Ychwanegu cyfeiriad e-bost
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Ychwanegu hyd at { $limit }
settings-email-addresses-add-email-resend-button-label = Ail-anfon y ddolen ddilysu
input-error-alt = Gwall

## Email address dialog

settings-email-addresses-initial-dialog-header = Ychwanegu cyfeiriad e-bost
settings-email-addresses-initial-dialog-description = Byddwn yn anfon dolen ddilysu i chi gadarnhau yr hoffech ei chynnwys mewn sgan { -brand-monitor } yn y dyfodol.
settings-email-addresses-initial-dialog-add-email-input-label = Rhowch eich cyfeiriad e-bost
settings-email-addresses-initial-dialog-add-email-button-label = Anfon dolen dilysu
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Dolen dilysu wedi'i hanfon at <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Agorwch y ddolen i'w ychwanegu at y cyfrif hwn ar gyfer sganiau { -brand-monitor }  yn y dyfodol.
settings-email-addresses-confirmation-dialog-close-button = Cau

## Delete Monitor account

settings-delete-monitor-free-account-title = Dileu'r cyfrif { -brand-monitor }
settings-delete-monitor-free-account-description = Bydd hyn yn dileu eich cyfrif { -brand-monitor } yn barhaol ac yn diffodd pob hysbysiad.
settings-delete-monitor-free-account-cta-label = Dileu'r cyfrif
settings-delete-monitor-free-account-dialog-title = Bydd eich cyfrif { -brand-monitor } yn cael ei ddileu'n barhaol
settings-delete-monitor-free-account-dialog-lead-v2 = Bydd holl fanylion eich cyfrif { -brand-monitor } yn cael ei ddileu a fyddwn ni ddim  bellach yn monitro am dor-data newydd. Fydd hyn ddim yn dileu eich cyfrif { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Dileu'r cyfrif
settings-delete-monitor-free-account-dialog-cancel-button-label = Dim gwahaniaeth, mynd â fi yn ôl
settings-delete-monitor-account-confirmation-toast-label-2 = Mae eich cyfrif { -brand-monitor } bellach wedi'i ddileu'n barhaol.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Cau

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Diweddaru manylion sgan
settings-tab-label-edit-info = Golygu eich manylion
settings-tab-label-notifications = Gosod hysbysiadau
settings-tab-label-manage-account = Rheoli cyfrif
settings-tab-subtitle-manage-account = Rheoli eich cyfrif { -product-name }.
settings-tab-notifications-marketing-title = Cyfathrebu marchnata
settings-tab-notifications-marketing-text = Newyddion o bryd i'w gilydd am { -brand-monitor }, { -brand-mozilla }, a'n cynnyrch diogelwch eraill.
settings-tab-notifications-marketing-link-label = Ewch i osodiadau e-bost { -brand-mozilla }
