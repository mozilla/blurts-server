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

# Variables:
#   $email (string) - Email address
settings-email-list-title = Cyfeiriadau e-bost yn cael eu monitro
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [zero] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-byst.
        [one] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-bost.
        [two] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-bost.
        [few] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-bost.
        [many] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-bost.
       *[other] Mae eich cyfrif yn cynnwys monitro hyd at { $limit } e-bost.
    }
settings-email-verification-callout = Mae angen gwirio'r e-bost
settings-resend-email-verification-link = Ail-anfon yr e-bost gwirio
settings-add-email-button = Ychwanegu cyfeiriad e-bost
settings-remove-email-button-label = Tynnu
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Rhoi'r gorau i fonitro { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [zero] Yn ymddangos mewn { $breachCount } tor-data.
        [one] Yn ymddangos mewn { $breachCount } tor-data.
        [two] Yn ymddangos mewn { $breachCount } dor-data.
        [few] Yn ymddangos mewn { $breachCount } tor-data.
        [many] Yn ymddangos mewn { $breachCount } thor-data.
       *[other] Yn ymddangos mewn { $breachCount } tor-data.
    }

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

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Adroddiad misol { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Diweddariad misol o ddatguddiadau newydd, beth sydd wedi'i drwsio, a beth sydd angen eich sylw.

## Settings page redesign

settings-tab-label-edit-info = Golygu eich manylion
settings-tab-label-notifications = Gosod hysbysiadau
settings-tab-label-manage-account = Rheoli cyfrif
settings-tab-subtitle-manage-account = Rheoli eich cyfrif { -product-name }.
settings-tab-notifications-marketing-title = Cyfathrebu marchnata
settings-tab-notifications-marketing-text = Newyddion o bryd i'w gilydd am { -brand-monitor }, { -brand-mozilla }, a'n cynnyrch diogelwch eraill.
settings-tab-notifications-marketing-link-label = Ewch i osodiadau e-bost { -brand-mozilla }
