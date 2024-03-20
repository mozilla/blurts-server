# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Ynstellingen
settings-page-title = { -product-short-name }-ynstellingen

## Breach alert preferences

settings-alert-preferences-title = Foarkarren foar datalekmeldingen
settings-alert-preferences-option-one = Warskôgingen oer datalekken nei it troffen e-mailadres stjoere
settings-alert-preferences-option-two = Alle warskôgingen oer datalekken nei it primêre e-mailadres stjoere

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primêr)
settings-email-list-title = Kontrolearre e-mailadressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Jo account omfettet it monitoaren fan maksimaal { $limit } e-mailadres.
       *[other] Jo account omfettet it monitoaren fan maksimaal { $limit } e-mailadressen.
    }
settings-email-verification-callout = E-mailferifikaasje fereaske
settings-resend-email-verification-link = Ferifikaasje-e-mailberjocht opnij ferstjoere
settings-add-email-button = E-mailadres tafoegje
# Deprecated
settings-delete-email-button = E-mailadres fuortsmite
settings-remove-email-button-label = Fuortsmite
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Kontrolearjen fan { $emailAddress } stopje
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Komt foar yn { $breachCount } bekend datalek.
       *[other] Komt foar yn { $breachCount } bekende datalekken.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Abonnemint op { -brand-premium } opsizze
settings-cancel-premium-subscription-info = Jo abonnemint wurdt weromset nei in fergees account neidat de aktuele fakturearingssyklus ôfrûn is. De resultaten fan jo privacybeskermingsscan wurde permanint fuortsmiten en jo hawwe datalekmonitoring foar mar ien e-mailadres.

## Deactivate account

settings-deactivate-account-title = Account de-aktivearje
settings-deactivate-account-info-2 = Jo kinne { -product-short-name } de-aktivearje troch jo { -brand-mozilla-account } fuort te smiten.
settings-fxa-link-label-3 = Nei { -brand-mozilla-account }-ynstellingen

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor }-account fuortsmite
settings-delete-monitor-free-account-description = Dit sil jo { -brand-monitor }-account permanint fuortsmite en alle notifikaasjes útskeakelje.
settings-delete-monitor-free-account-cta-label = Account fuortsmite
settings-delete-monitor-free-account-dialog-title = Jo { -brand-monitor }-account wurdt permanint fuortsmiten
settings-delete-monitor-free-account-dialog-lead = Al jo { -brand-monitor }-accountgegevens wurde fuortsmiten en wy kontrolearje net mear op nije datalekken. Dit sil jo { -brand-mozilla }-account net fuortsmite.
settings-delete-monitor-free-account-dialog-cta-label = Account fuortsmite
settings-delete-monitor-free-account-dialog-cancel-button-label = Lit mar, bring my werom
settings-delete-monitor-plus-account-title = { -brand-monitor }-account fuortsmite
settings-delete-monitor-plus-account-description = Hjirmei wurdt jo { -brand-monitor }-account permanint fuortsmiten en wurdt jo betelle { -brand-monitor-plus }-abonnemint daliks beëinige.
settings-delete-monitor-plus-account-cta-label = Account fuortsmite
settings-delete-monitor-plus-account-dialog-title = Jo { -brand-monitor }-account wurdt permanint fuortsmiten
settings-delete-monitor-plus-account-dialog-lead-p1 = Al jo { -brand-monitor }-accountgegevens wurde fuortsmiten en wy kontrolearje net mear op nije datalekken of lekken nei gegevenshannelers. Dit sil jo { -brand-mozilla }-account net fuortsmite.
settings-delete-monitor-plus-account-dialog-lead-p2 = Jo betelle abonnemint einiget hjoed en de rest fan jo abonnemint wurdt net nei rato fakturearre.
settings-delete-monitor-plus-account-dialog-cta-label = Account fuortsmite
settings-delete-monitor-plus-account-dialog-cancel-button-label = Lit mar, bring my werom
settings-delete-monitor-account-confirmation-toast-label = Jo { -brand-monitor }-account is no permanint fuortsmiten
settings-delete-monitor-account-confirmation-toast-dismiss-label = Slute

## Add email dialog

settings-email-dialog-title = In oar e-mailadres tafoegje
settings-add-email-text = Foegje in nij e-mailadres ta om te sjen oft it troffen is troch in datalek.
settings-email-input-label = E-mailadres
settings-send-email-verification-button = Ferifikaasjekeppeling ferstjoere

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = It spyt ús dat jo geane. <br /> Kinne jo ús fertelle wêrom?
settings-unsubscribe-dialog-info = Jo ûnderfining is wichtich foar ús. Wy lêze elke reaksje en nimme it yn oerweging.
settings-unsubscribe-dialog-message-placeholder = Wat hie better gean kinnen?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Hâld der rekkening mei dat al jo { -brand-monitor-premium }-services <a { $faq_href }>permanint fuortsmiten wurde</a> neidat jo aktuele fakturearingssyklus ôfrûn is.
settings-unsubscribe-dialog-continue = Trochgean mei opsizzen
settings-unsubscribe-dialog-cancel = Lit mar, bring my werom
