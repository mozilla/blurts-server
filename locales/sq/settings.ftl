# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Rregullime { -product-short-name }-i

## Breach alert preferences

settings-alert-preferences-title = Parapëlqime mbi sinjalizim cenimesh
settings-alert-preferences-option-one = Dërgo sinjalizime shkeljesh te adresa email e prekur
settings-alert-preferences-option-two = Dërgoji krejt sinjalizimet mbi cenime te adresa parësore email

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (parësor)
settings-email-list-title = Adresë email e mbikëqyrur
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Llogaria juaj përfshin mbikëqyrjen e deri { $limit } email-i.
       *[other] Llogaria juaj përfshin mbikëqyrjen e deri { $limit } email-eve.
    }
settings-email-verification-callout = Lypset verifikim email-i
settings-resend-email-verification-link = Ridërgo email verifikimi
settings-add-email-button = Shtoni adresë email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Shfaqet në { $breachCount } cenim të ditur.
       *[other] Shfaqet në { $breachCount } cenime të ditura.
    }

## Deactivate account

settings-deactivate-account-title = Çaktivizoje llogarinë
settings-deactivate-account-info = { -product-short-name } mund ta çaktivizoni duke fshirë { -brand-fx-account } tuaj.
settings-fxa-link-label = Kaloni te Rregullime { -brand-firefox }-i

## Add email dialog

settings-email-dialog-title = Shtoni adresë tjetër email
settings-add-email-text = Shtoni një adresë të re email, që të shihni nëse është përfshirë në ndonjë cenim.
settings-email-input-label = Adresë email
settings-send-email-verification-button = Dërgo lidhje verifikimi
