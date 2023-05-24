# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Gosodiadau
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
settings-delete-email-button = Dileu cyfeiriad e-bost
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Canslo tanysgrifiad { -brand-premium }
settings-cancel-premium-subscription-info = Bydd eich tanysgrifiad yn dychwelyd i gyfrif am ddim ar ôl i'r cylch bilio cyfredol ddod i ben. Bydd canlyniadau eich sgan diogelu preifatrwydd yn cael eu dileu'n barhaol, a dim ond ar gyfer 1 cyfeiriad e-bost y bydd gennych fonitro torri data.
settings-cancel-premium-subscription-link-label = Canslo o'ch { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Analluogi cyfrif
settings-deactivate-account-info = Gallwch ddadalluogi { -product-short-name } drwy ddileu eich { -brand-fx-account }.
settings-fxa-link-label = Ewch i Gosodiadau { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Ychwanegwch gyfeiriad e-bost arall
settings-add-email-text = Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
settings-email-input-label = Cyfeiriad e-bost
settings-send-email-verification-button = Anfon dolen gwirio

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Mae'n ddrwg gennym eich gweld yn mynd. <br /> A wnewch chi ddweud wrthym pam eich bod yn gadael?
settings-unsubscribe-dialog-info = Mae eich profiad yn bwysig i ni. Rydym yn darllen pob ymateb ac yn ei gymryd i ystyriaeth.
settings-unsubscribe-dialog-message-placeholder = Beth allai fod wedi mynd yn well?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Sylwch, bydd eich holl wasanaethau { -brand-monitor-premium } <a { $faq_href }>yn cael eu dileu yn barhaol</a> ar ôl i'ch cylch bilio presennol ddod i ben.
settings-unsubscribe-dialog-continue = Parhau i ganslo
settings-unsubscribe-dialog-cancel = Peidiwch byth â meddwl, mynd â fi yn ôl
