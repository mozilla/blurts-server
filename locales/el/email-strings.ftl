# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Σύνδεση

## Email footers

email-footer-support-heading = Έχετε απορίες για το { -brand-mozilla-monitor };
email-footer-support-content = Επισκεφτείτε το <support-link>Κέντρο υποστήριξης</support-link> για βοήθεια
email-footer-trigger-transactional = Λαμβάνετε αυτό το email ως συνδρομητής του { -brand-mozilla-monitor }.
email-footer-source-hibp = Τα δεδομένα παραβιάσεων παρέχονται από το <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Απόρρητο
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Νομικά
# Button text
verify-email-cta = Επαλήθευση email
# Headline of verification email
email-link-expires = Αυτός ο σύνδεσμος λήγει σε 24 ώρες

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

## Verification email

email-verify-heading = Προστατέψτε τα δεδομένα σας, ξεκινώντας από τώρα
email-verify-subhead = Επαληθεύστε το email σας για να αρχίσετε να προστατεύετε τα δεδομένα σας μετά από παραβίαση.
email-verify-simply-click = Κάντε απλώς κλικ στον παρακάτω σύνδεσμο για να ολοκληρώσετε την επαλήθευση του λογαριασμού σας.

## Breach report

email-breach-summary = Ακολουθεί η σύνοψη παραβίασης δεδομένων σας
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Τα αποτελέσματα αναζήτησης για το { $email-address } δείχνουν ότι το email σας μπορεί να έχει εκτεθεί. Σας συνιστούμε να ενεργήσετε τώρα για να επιλύσετε αυτήν την παραβίαση.
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Τα αποτελέσματα αναζήτησης για το <b>{ $email-address }</b> δείχνουν ότι το email σας μπορεί να έχει εκτεθεί. Σας συνιστούμε να ενεργήσετε τώρα για να επιλύσετε αυτήν την παραβίαση.
email-dashboard-cta = Μετάβαση στον πίνακα ελέγχου

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = Εντοπίσαμε μια νέα παραβίαση δεδομένων

## Redesigned breach alert email

email-breach-alert-all-subject = Εντοπίστηκε νέα παραβίαση δεδομένων
email-breach-alert-all-preview = Θα σας καθοδηγήσουμε στα βήματα για την επίλυσή της.
email-breach-alert-all-hero-heading = Έχετε εμφανιστεί σε μια νέα παραβίαση δεδομένων
email-breach-alert-all-hero-subheading = Μην ανησυχείτε, μπορούμε να σας βοηθήσουμε να επιλύσετε αυτήν την έκθεση
email-breach-alert-all-lead = Το { -brand-mozilla-monitor } ανακάλυψε την ακόλουθη παραβίαση δεδομένων, που περιλαμβάνει προσωπικά σας στοιχεία:
email-breach-alert-all-source-title = Πηγή παραβίασης:
email-breach-alert-all-data-points-title = Τα εκτεθειμένα δεδομένα σας:
email-breach-alert-all-next-steps-lead = Θα σας καθοδηγήσουμε βήμα προς βήμα για την επίλυση αυτής της παραβίασης δεδομένων.
email-breach-alert-all-next-steps-cta-label = Ας αρχίσουμε
email-breach-alert-all-next-steps-button-dashboard = Μετάβαση στον πίνακα ελέγχου
