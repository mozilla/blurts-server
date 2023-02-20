# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Gosodiadau { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Dewisiadau rhybuddion tor-data
settings-alert-preferences-option-one = Anfon rhybuddion tor-data at y cyfeiriadau e-bost sydd wedi'u heffeithio
settings-alert-preferences-option-two = Anfon yr holl rybuddion tor-data at fy mhrif gyfeiriad e-bost.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } ( prif)
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [zero] Yn ymddangos mewn { $breachCount } tor-data.
        [one] Yn ymddangos mewn { $breachCount } tor-data.
        [two] Yn ymddangos mewn { $breachCount } dor-data.
        [few] Yn ymddangos mewn { $breachCount } tor-data.
        [many] Yn ymddangos mewn { $breachCount } thor-data.
       *[other] Yn ymddangos mewn { $breachCount } tor-data.
    }

## Deactivate account

settings-deactivate-account-title = Analluogi cyfrif
settings-deactivate-account-info = Gallwch ddadalluogi { -product-short-name } drwy ddileu eich { -brand-fx-account }.
settings-fxa-link-label = Ewch i Gosodiadau { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Ychwanegwch gyfeiriad e-bost arall
settings-add-email-text = Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
settings-email-input-label = Cyfeiriad e-bost
settings-send-email-verification-button = Anfon dolen gwirio
