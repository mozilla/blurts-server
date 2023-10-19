# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Ρυθμίσεις
settings-page-title = Ρυθμίσεις { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Προτιμήσεις ειδοποιήσεων παραβιάσεων
settings-alert-preferences-option-one = Αποστολή ειδοποιήσεων παραβίασης στην επηρεασμένη διεύθυνση email
settings-alert-preferences-option-two = Αποστολή όλων των ειδοποιήσεων παραβιάσεων στην κύρια διεύθυνση email

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (κύριο)
settings-email-list-title = Διευθύνσεις email σε εποπτεία
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ο λογαριασμός σας περιλαμβάνει εποπτεία έως και { $limit } email.
       *[other] Ο λογαριασμός σας περιλαμβάνει εποπτεία έως και { $limit } email.
    }
settings-email-verification-callout = Απαιτείται επαλήθευση email
settings-resend-email-verification-link = Εκ νέου αποστολή email επαλήθευσης
settings-add-email-button = Προσθήκη διεύθυνσης email
settings-delete-email-button = Διαγραφή διεύθυνσης email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Εμφανίζεται σε { $breachCount } γνωστή παραβίαση.
       *[other] Εμφανίζεται σε { $breachCount } γνωστές παραβιάσεις.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Ακύρωση συνδρομής { -brand-premium }
settings-cancel-premium-subscription-info = Η συνδρομή σας θα μετατραπεί σε δωρεάν λογαριασμό μετά το πέρας του τρέχοντος κύκλου χρέωσης. Τα αποτελέσματα της σάρωσης προστασίας απορρήτου θα διαγραφούν οριστικά και θα έχετε την εποπτεία μόνο 1 διεύθυνσης email για παραβιάσεις δεδομένων.
settings-cancel-premium-subscription-link-label = Κάντε ακύρωση από τον { -brand-fx-account(case: "acc", capitalization: "lower") } σας

## Deactivate account

settings-deactivate-account-title = Απενεργοποίηση λογαριασμού
# Deprecated
settings-deactivate-account-info = Μπορείτε να απενεργοποιήσετε το { -product-short-name } διαγράφοντας τον { -brand-fx-account(case: "acc", capitalization: "lower") } σας.
settings-deactivate-account-info-2 = Μπορείτε να απενεργοποιήσετε το { -product-short-name } διαγράφοντας τον { -brand-mozilla-account(case: "acc", capitalization: "lower") } σας.
# Deprecated
settings-fxa-link-label = Μεταβείτε στις ρυθμίσεις του { -brand-firefox }
settings-fxa-link-label-2 = Μετάβαση στις ρυθμίσεις { -brand-mozilla }

## Add email dialog

settings-email-dialog-title = Προσθήκη άλλης διεύθυνσης email
settings-add-email-text = Προσθέστε μια νέα διεύθυνση email για να δείτε εάν έχει εμπλακεί σε παραβίαση.
settings-email-input-label = Διεύθυνση email
settings-send-email-verification-button = Αποστολή συνδέσμου επαλήθευσης

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Λυπούμαστε που φεύγετε. <br /> Θέλετε να μας πείτε γιατί φεύγετε;
settings-unsubscribe-dialog-info = Η εμπειρία σας είναι σημαντική για εμάς. Διαβάζουμε κάθε απάντηση και τη λαμβάνουμε υπόψη.
settings-unsubscribe-dialog-message-placeholder = Τι θα μπορούσε να είχε πάει καλύτερα;
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Παρακαλούμε σημειώστε ότι όλες οι υπηρεσίες σας στο { -brand-monitor-premium } <a { $faq_href }>θα διαγραφούν οριστικά</a> μετά το πέρας του τρέχοντος κύκλου χρέωσής σας.
settings-unsubscribe-dialog-continue = Συνέχεια στην ακύρωση
settings-unsubscribe-dialog-cancel = Άλλαξα γνώμη, θέλω να επιστρέψω
