# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Rregullime
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
settings-delete-email-button = Fshije adresën email

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Shfaqet në { $breachCount } cenim të ditur.
       *[other] Shfaqet në { $breachCount } cenime të ditura.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Anuloni pajtim { -brand-premium }
settings-cancel-premium-subscription-info = Pajtimi juaj do të rikthehet në një llogari falas, pasi të përfundojë cikli i tanishëm i faturimeve. Përfundimet e kontrolleve për mbrojtje e privatësisë tuaj do të fshihen përgjithmonë dhe do të keni mbikëqyrje cenimesh të dhënash vetëm për 1 adresë email.

## Deactivate account

settings-deactivate-account-title = Çaktivizoje llogarinë
settings-deactivate-account-info-2 = { -product-short-name } mund ta çaktivizoni duke fshirë { -brand-mozilla-account } tuaj.
settings-fxa-link-label-3 = Kaloni te rregullime { -brand-mozilla-account }

## Add email dialog

settings-email-dialog-title = Shtoni adresë tjetër email
settings-add-email-text = Shtoni një adresë të re email, që të shihni nëse është përfshirë në ndonjë cenim.
settings-email-input-label = Adresë email
settings-send-email-verification-button = Dërgo lidhje verifikimi

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Na vjen keq t’ju shohim të ikni. <br /> Do të na tregoni pse po largoheni?
settings-unsubscribe-dialog-info = Përvoja juaj është e rëndësishme për ne. Lexojmë çdo përgjigje dhe e marrim në konsideratë.
settings-unsubscribe-dialog-message-placeholder = Ç’mund të kishte ecur më mirë?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Ju lutemi, kini parasysh se krejt shërbimet tuaja { -brand-monitor-premium } do të <a { $faq_href }>fshihen përgjithnjë</a>, pasi të përfundojë cikli i tanishëm i faturimit.
settings-unsubscribe-dialog-continue = Vazhdo me anulimin
settings-unsubscribe-dialog-cancel = S’prish punë, kthemëni
