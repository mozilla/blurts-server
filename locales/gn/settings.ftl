# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Ñemboheko
settings-page-title = { -product-short-name } Ñemboheko

## Breach alert preferences

settings-alert-preferences-title = Kyhyjerã ñembogua erohoryvéva
settings-alert-preferences-option-one = Emondo ñembogua kyhyjerã ñanduti veve imarãkuapavape
settings-alert-preferences-option-two = Emondopaite kyhyjerã ñembogua ñanduti veve kundaharape ñepyrũguápe

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (ñepyrũha)
settings-email-list-title = Ñanduti veve kundaharape ojehechameméva
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
        [many] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
       *[other] Ne mba’etépe oike jehechameme { $limit } peve ñanduti veve.
    }
settings-email-verification-callout = Ñanduti veve jehechajey jerurepyre
settings-resend-email-verification-link = Emondojey ñanduti veve jehechajeyrã
settings-add-email-button = Embojuaju ñanduti veve kundaharape
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
        [many] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
       *[other] Ojekuaa { $breachCount }-pe ñembyaikuéra ojehecháva.
    }

## Cancel Premium subscription


## Deactivate account

settings-deactivate-account-title = Emboguete mba’ete
settings-deactivate-account-info = Eipe’aitekuaa { -product-short-name } emboguévo nde { -brand-fx-account }.
settings-fxa-link-label = Eho { -brand-firefox } poravorãme

## Add email dialog

settings-email-dialog-title = Emoĩve ambue ñanduti veve kundaharape
settings-add-email-text = Emoĩve ñanduti veve kundaharape pyahu ehecha hag̃ua eimépa ñemboguápe.
settings-email-input-label = Ñanduti veve
settings-send-email-verification-button = Emondo juajuha jehechajeyrã

## Unsubscribe Dialog Survey

