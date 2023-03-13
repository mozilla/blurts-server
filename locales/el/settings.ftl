# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Εμφανίζεται σε { $breachCount } γνωστή παραβίαση.
       *[other] Εμφανίζεται σε { $breachCount } γνωστές παραβιάσεις.
    }

## Deactivate account

settings-deactivate-account-title = Απενεργοποίηση λογαριασμού
settings-deactivate-account-info = Μπορείτε να απενεργοποιήσετε το { -product-short-name } διαγράφοντας τον { -brand-fx-account(case: "acc", capitalization: "lower") } σας.
settings-fxa-link-label = Μεταβείτε στις ρυθμίσεις του { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Προσθήκη άλλης διεύθυνσης email
settings-add-email-text = Προσθέστε μια νέα διεύθυνση email για να δείτε εάν έχει εμπλακεί σε παραβίαση.
settings-email-input-label = Διεύθυνση email
settings-send-email-verification-button = Αποστολή συνδέσμου επαλήθευσης
