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
# Deprecated
settings-delete-email-button = Διαγραφή διεύθυνσης email
settings-remove-email-button-label = Αφαίρεση
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Διακοπή εποπτείας του { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Εμφανίζεται σε { $breachCount } γνωστή παραβίαση.
       *[other] Εμφανίζεται σε { $breachCount } γνωστές παραβιάσεις.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Ακύρωση συνδρομής { -brand-premium }
settings-cancel-premium-subscription-info = Η συνδρομή σας θα μετατραπεί σε δωρεάν λογαριασμό μετά το πέρας του τρέχοντος κύκλου χρέωσης. Τα αποτελέσματα της σάρωσης προστασίας απορρήτου θα διαγραφούν οριστικά και θα έχετε την εποπτεία μόνο 1 διεύθυνσης email για παραβιάσεις δεδομένων.

## Deactivate account

settings-deactivate-account-title = Απενεργοποίηση λογαριασμού
settings-deactivate-account-info-2 = Μπορείτε να απενεργοποιήσετε το { -product-short-name } διαγράφοντας τον { -brand-mozilla-account(case: "acc", capitalization: "lower") } σας.
settings-fxa-link-label-3 = Μετάβαση στις ρυθμίσεις { -brand-mozilla-account(case: "gen", capitalization: "lower") }

## Delete Monitor account

settings-delete-monitor-free-account-title = Διαγραφή λογαριασμού { -brand-monitor }
settings-delete-monitor-free-account-description = Αυτή η ενέργεια θα διαγράψει οριστικά τον λογαριασμό σας στο { -brand-monitor } και θα απενεργοποιήσει όλες τις ειδοποιήσεις.
settings-delete-monitor-free-account-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-free-account-dialog-title = Ο λογαριασμός σας στο { -brand-monitor } θα διαγραφεί οριστικά
settings-delete-monitor-free-account-dialog-lead = Όλες οι πληροφορίες του λογαριασμού σας στο { -brand-monitor } θα διαγραφούν και δεν θα εποπτεύουμε πλέον για νέες παραβιάσεις δεδομένων. Αυτή η ενέργεια δεν θα διαγράψει τον λογαριασμό σας στη { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-free-account-dialog-cancel-button-label = Άλλαξα γνώμη, θέλω να επιστρέψω
settings-delete-monitor-plus-account-title = Διαγραφή λογαριασμού { -brand-monitor }
settings-delete-monitor-plus-account-description = Αυτή η ενέργεια θα διαγράψει οριστικά τον λογαριασμό σας στο { -brand-monitor } και θα τερματίσει άμεσα την επί πληρωμή συνδρομή σας στο { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-plus-account-dialog-title = Ο λογαριασμός σας στο { -brand-monitor } θα διαγραφεί οριστικά
settings-delete-monitor-plus-account-dialog-lead-p1 = Όλες οι πληροφορίες του λογαριασμού σας στο { -brand-monitor } θα διαγραφούν και δεν θα εποπτεύουμε πλέον για νέες παραβιάσεις δεδομένων ή εκθέσεις σε εμπόρους δεδομένων. Αυτή η ενέργεια δεν θα διαγράψει τον λογαριασμό σας στη { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Η επί πληρωμή συνδρομή σας θα λήξει σήμερα και δεν θα λάβετε αναλογική επιστροφή χρημάτων για το υπόλοιπο της συνδρομής σας.
settings-delete-monitor-plus-account-dialog-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-plus-account-dialog-cancel-button-label = Άλλαξα γνώμη, θέλω να επιστρέψω
settings-delete-monitor-account-confirmation-toast-label = Ο λογαριασμός σας στο { -brand-monitor } έχει πλέον διαγραφεί οριστικά.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Απόρριψη

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
