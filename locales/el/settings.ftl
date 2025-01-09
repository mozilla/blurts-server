# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Ρυθμίσεις { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Προτιμήσεις email
settings-alert-email-preferences-subtitle = Πείτε μας ποια email θέλετε να λαμβάνετε.
settings-alert-preferences-allow-breach-alerts-title = Άμεσες ειδοποιήσεις παραβιάσεων
settings-alert-preferences-allow-breach-alerts-subtitle = Αποστέλλονται αμέσως μόλις ανιχνευθεί παραβίαση δεδομένων
settings-alert-preferences-option-one = Αποστολή ειδοποιήσεων παραβιάσεων στην επηρεασμένη διεύθυνση email
settings-alert-preferences-option-two = Αποστολή όλων των ειδοποιήσεων παραβιάσεων στην κύρια διεύθυνση email

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Διευθύνσεις email υπό εποπτεία
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ο λογαριασμός σας παρέχει εποπτεία για έως και { $limit } διεύθυνση email.
       *[other] Ο λογαριασμός σας παρέχει εποπτεία για έως και { $limit } διευθύνσεις email.
    }
settings-email-verification-callout = Απαιτείται επαλήθευση email
settings-resend-email-verification-link = Εκ νέου αποστολή email επαλήθευσης
settings-add-email-button = Προσθήκη διεύθυνσης email
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

## Delete Monitor account

settings-delete-monitor-free-account-title = Διαγραφή λογαριασμού { -brand-monitor }
settings-delete-monitor-free-account-description = Αυτή η ενέργεια θα διαγράψει οριστικά τον λογαριασμό σας στο { -brand-monitor } και θα απενεργοποιήσει όλες τις ειδοποιήσεις.
settings-delete-monitor-free-account-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-free-account-dialog-title = Ο λογαριασμός σας στο { -brand-monitor } θα διαγραφεί οριστικά
settings-delete-monitor-free-account-dialog-lead-v2 = Όλες οι πληροφορίες του λογαριασμού σας στο { -brand-monitor } θα διαγραφούν και δεν θα γίνεται πλέον εποπτεία για νέες παραβιάσεις δεδομένων. Αυτή η ενέργεια δεν θα διαγράψει τον { -brand-mozilla-account(case: "acc", capitalization: "lower") } σας.
settings-delete-monitor-free-account-dialog-cta-label = Διαγραφή λογαριασμού
settings-delete-monitor-free-account-dialog-cancel-button-label = Άλλαξα γνώμη, θέλω να επιστρέψω
settings-delete-monitor-account-confirmation-toast-label-2 = Ο λογαριασμός σας στο { -brand-monitor } έχει πλέον διαγραφεί.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Απόρριψη

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Μηνιαία αναφορά { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Μια μηνιαία ενημέρωση για τις νέες εκθέσεις, το τι έχει διορθωθεί και τι χρειάζεται την προσοχή σας.

## Settings page redesign

settings-tab-label-edit-info = Επεξεργασία πληροφοριών
settings-tab-label-notifications = Ορισμός ειδοποιήσεων
settings-tab-label-manage-account = Διαχείριση λογαριασμού
settings-tab-subtitle-manage-account = Διαχειριστείτε τον λογαριασμό { -product-name } σας.
settings-tab-notifications-marketing-title = Επικοινωνία μάρκετινγκ
settings-tab-notifications-marketing-text = Περιοδικές ενημερώσεις σχετικά με το { -brand-monitor }, τη { -brand-mozilla } και τα άλλα προϊόντα ασφαλείας μας.
settings-tab-notifications-marketing-link-label = Μεταβείτε στις ρυθμίσεις email της { -brand-mozilla }
