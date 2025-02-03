# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Rregullime { -product-short-name }-i

## Breach alert preferences

settings-alert-email-preferences-title = Parapëlqime email-i
settings-alert-email-preferences-subtitle = Na thoni cilët email-e do të donit të merrnit.
settings-alert-preferences-allow-breach-alerts-title = Sinjalizime të menjëhershme cenimesh
settings-alert-preferences-allow-breach-alerts-subtitle = Këto sinjalizime dërgohen menjëherë, sapo të jetë pikasur një cenim të dhënash
settings-alert-preferences-option-one = Dërgo sinjalizime shkeljesh te adresa email e prekur
settings-alert-preferences-option-two = Dërgoji krejt sinjalizimet mbi cenime te adresa parësore email

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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
settings-remove-email-button-label = Hiqe
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Ndale mbikëqyrjen për { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Shfaqet në { $breachCount } cenim të ditur.
       *[other] Shfaqet në { $breachCount } cenime të ditura.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Fshije llogarinë { -brand-monitor }
settings-delete-monitor-free-account-description = Kjo do të fshijë përgjithnjë llogarinë tuaj { -brand-monitor } dhe do të çaktivizojë krejt njoftimet.
settings-delete-monitor-free-account-cta-label = Fshije llogarinë
settings-delete-monitor-free-account-dialog-title = Llogaria juaj { -brand-monitor } do të fshihet përgjithnjë
settings-delete-monitor-free-account-dialog-lead-v2 = Krejt informacioni i llogarisë tuaj { -brand-monitor } do të fshihet dhe s’do të mbikëqyrim më për cenime të reja të dhënash. Kjo s’do të fshijë llogarinë tuaj { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Fshije llogarinë
settings-delete-monitor-free-account-dialog-cancel-button-label = S’prish punë, kthemëni
settings-delete-monitor-account-confirmation-toast-label-2 = Llogaria juaj { -brand-monitor } tani është fshirë.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Hidhe tej

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Raport mujor { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Një përditësim mujor rreth ekspozimesh të reja, ç’është ndrequr dhe ç’lyp vëmendjen tuaj.

## Settings page redesign

settings-tab-label-edit-info = Përpunoni hollësitë tuaja
settings-tab-label-notifications = Ujdisni njoftime
settings-tab-label-manage-account = Administroni llogarinë
settings-tab-subtitle-manage-account = Administroni llogarinë tuaj { -product-name }.
settings-tab-notifications-marketing-title = Komunikime marketingu
settings-tab-notifications-marketing-text = Përditësime periodike rreth { -brand-monitor }, { -brand-mozilla }-s dhe të tjera produktesh tona për sigurinë.
settings-tab-notifications-marketing-link-label = Kaloni te rregullime { -brand-mozilla } email-i
