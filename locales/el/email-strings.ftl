# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = Νομικά

# Unsubscribe link in email.
email-unsub-link = Κατάργηση εγγραφής

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Λαμβάνετε αυτό το email επειδή έχετε εγγραφεί στις ειδοποιήσεις του { -product-name }.
    Δεν θέλετε πλέον αυτά τα email; { $unsubLink }. Αυτό είναι ένα αυτοματοποιημένο email. Για υποστήριξη, επισκεφθείτε τις { $faqLink }.

# Button text
verify-email-cta = Επαλήθευση email

# Headline of verification email
email-link-expires = Αυτός ο σύνδεσμος λήγει σε 24 ώρες

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = Το { -product-name } βρήκε τις πληροφορίες σας σε αυτές τις παραβιάσεις

# Subject line of email
email-subject-no-breaches = Το { -product-name } δεν βρήκε γνωστές παραβιάσεις

# Subject line of email
email-subject-verify = Επαλήθευση email για το { -product-name }

fxm-warns-you-no-breaches =
    Το { -product-name } σας προειδοποιεί σχετικά με παραβιάσεις που αφορούν προσωπικά σας δεδομένα. 
    Μέχρι στιγμής, δεν έχουν βρεθεί διαρροές. Θα σας ειδοποιήσουμε αν εμφανιστεί η διεύθυνση email σας σε κάποια νέα παραβίαση.

email-breach-alert-blurb =
    Το { -product-name } σας προειδοποιεί σχετικά με παραβιάσεις που αφορούν προσωπικά σας δεδομένα. 
    Μόλις λάβαμε στοιχεία σχετικά με παραβίαση δεδομένων άλλης εταιρείας.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Τα δεδομένα παραβιάσεων παρέχονται από το <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Έχετε μη επιλυμένες παραβιάσεις
email-unresolved-subhead = Το email σας έχει εκτεθεί. <br>Διορθώστε το αμέσως με το { -product-name }.
email-is-affected = Το email σας, { $email-address }, επηρεάζεται από τουλάχιστον μία παραβίαση δεδομένων
email-more-detail = Συνδεθείτε τώρα στο { -product-name } για να δείτε περισσότερες λεπτομέρειες σχετικά με τις παραβιάσεις σας (όπως την ημερομηνία που σημειώθηκαν και τα δεδομένα που διέρρευσαν) και για να μάθετε τι πρέπει να κάνετε εάν εκτεθεί το email σας σε κάποια παραβίαση δεδομένων.
email-breach-status = Τρέχουσα κατάσταση παραβίασης
# table row 1 label
email-monitored = Σύνολο email υπό εποπτεία:
# table row 2 label
email-breach-total = Συνολικός αριθμός παραβιάσεων:
# table row 3 label
email-resolved = Επιλυμένες παραβιάσεις:
# table row 4 label
email-unresolved = Μη επιλυμένες παραβιάσεις:
email-resolve-cta = Επίλυση παραβιάσεων

## Verification email

email-verify-heading = Προστατέψτε τα δεδομένα σας, ξεκινώντας από τώρα
email-verify-subhead = Επαληθεύστε το email σας για να αρχίσετε να προστατεύετε τα δεδομένα σας μετά από παραβίαση.
email-verify-simply-click = Κάντε απλώς κλικ στον παρακάτω σύνδεσμο για να ολοκληρώσετε την επαλήθευση του λογαριασμού σας.

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Ακολουθεί η σύνοψη παραβίασης δεδομένων σας
email-breach-detected = Τα αποτελέσματα αναζήτησης για το { $email-address } δείχνουν ότι το email σας μπορεί να έχει εκτεθεί. Σας συνιστούμε να ενεργήσετε τώρα για να επιλύσετε αυτήν την παραβίαση.
email-dashboard-cta = Μετάβαση στον πίνακα ελέγχου

## Breach alert

email-spotted-new-breach = Εντοπίσαμε μια νέα παραβίαση δεδομένων
