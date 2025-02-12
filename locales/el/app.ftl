# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
       *[nom]
            { $capitalization ->
               *[upper] Λογαριασμός Firefox
                [lower] λογαριασμός Firefox
            }
        [gen]
            { $capitalization ->
               *[upper] Λογαριασμού Firefox
                [lower] λογαριασμού Firefox
            }
        [acc]
            { $capitalization ->
               *[upper] Λογαριασμό Firefox
                [lower] λογαριασμό Firefox
            }
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Αυτή η διεύθυνση email δεν έχει εγγραφεί στο { -product-name }.
error-hibp-throttled = Πάρα πολλές συνδέσεις στο { -brand-HIBP }.
error-hibp-connect = Σφάλμα σύνδεσης στο { -brand-HIBP }.
user-add-invalid-email = Άκυρο email
user-add-too-many-emails = Παρακολουθείτε τον μέγιστο αριθμό διευθύνσεων email.
user-add-duplicate-email = Αυτό το email έχει ήδη προστεθεί στο { -product-name }.
user-add-verification-email-just-sent = Δεν μπορεί να αποσταλεί άλλο email επαλήθευσης τόσο γρήγορα. Δοκιμάστε ξανά αργότερα.
user-add-unknown-error = Κάτι πήγε στραβά με την προσθήκη της άλλης διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
user-delete-unknown-error = Κάτι πήγε στραβά κατά την αφαίρεση μιας διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
user-verify-token-error = Απαιτείται διακριτικό επαλήθευσης.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Παραβιασμένα δεδομένα:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Τα δεδομένα παραβιάσεων παρέχονται από το { $hibp-link }
show-all = Προβολή όλων
sign-out = Αποσύνδεση
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Διαχείριση { -brand-fxa(case: "gen", capitalization: "lower") }
# Link title
preferences = Προτιμήσεις
# Link title
home = Αρχική
# Link title
security-tips = Συμβουλές ασφαλείας
# Link title
more-about-this-breach = Περισσότερα για αυτήν την παραβίαση
monitor-several-emails = Εποπτεία πολλών email
website-breach = Παραβίαση ιστοσελίδας
sensitive-breach = Παραβίαση ευαίσθητης ιστοσελίδας
data-aggregator-breach = Παραβίαση συγκέντρωσης δεδομένων
what-data = Ποια δεδομένα παραβιάστηκαν:
sensitive-sites = Πώς αντιμετωπίζει το { -product-name } τις ευαίσθητες ιστοσελίδες;
sensitive-sites-copy =
    Το { -product-name } αποκαλύπτει τους λογαριασμούς που εμπλέκονται με αυτούς 
    τους τύπους παραβιάσεων αφού επαληθευτεί η διεύθυνση email σας. Επομένως, 
    μόνο εσείς μπορείτε να δείτε αν παραβιάστηκαν τα στοιχεία σας (εκτός αν κάποιος 
    άλλος έχει πρόσβαση στα email σας).
delayed-reporting-headline = Γιατί πέρασε τόσος καιρός πριν αναφερθεί αυτή η διαρροή;
delayed-reporting-copy =
    Μερικές φορές μπορεί να περάσουν μήνες ή χρόνια μέχρι να εμφανιστούν τα 
    εκτεθειμένα διαπιστευτήρια στο Dark Web. Οι παραβιάσεις προστίθενται στη βάση δεδομένων 
    μας μόλις ανακαλυφθούν και επαληθευτούν.
fxm-warns-you =
    Το { -product-name } σάς προειδοποιεί αν έχει εκτεθεί η διεύθυνση email σας 
    σε παραβίαση δεδομένων. Δείτε αν έχουν διαρρεύσει τα στοιχεία σας, μάθετε πώς 
    να προστατέψετε τους λογαριασμούς σας και ειδοποιηθείτε αν εμφανιστεί η 
    διεύθυνση email σας σε νέα παραβίαση.
what-is-data-agg = Τι είναι ο συναθροιστής δεδομένων;
what-is-data-agg-blurb =
    Οι συναθροιστές δεδομένων, ή data brokers, συλλέγουν πληροφορίες από δημόσια αρχεία 
    και τις αγοράζουν από άλλες εταιρείες. Συνδυάζουν αυτά τα δεδομένα για να τα πουλήσουν 
    σε εταιρείες για σκοπούς μάρκετινγκ. Τα θύματα αυτών των παραβιάσεων δεν εξαπατώνται 
    συνήθως, αλλά οι hacker μπορούν να τους πλαστοπροσωπήσουν.
avoid-personal-info = Αποφύγετε τη χρήση προσωπικών πληροφοριών σε κωδικούς πρόσβασης
send-verification = Αποστολή συνδέσμου επαλήθευσης
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Περίληψη παραβίασης

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Εκτεθειμένος κωδικός πρόσβασης σε όλες τις παραβιάσεις
       *[other] Εκτεθειμένοι κωδικοί πρόσβασης σε όλες τις παραβιάσεις
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] γνωστή παραβίαση δεδομένων έχει εκθέσει τις πληροφορίες σας
       *[other] γνωστές παραβιάσεις δεδομένων έχουν εκθέσει τις πληροφορίες σας
    }
what-is-a-website-breach = Τι είναι μια παραβίαση ιστοσελίδας;
website-breach-blurb = Μια παραβίαση δεδομένων ιστοσελίδας συμβαίνει όταν οι κυβερνοεγκληματίες υποκλέπτουν, αντιγράφουν ή εξάγουν προσωπικά στοιχεία από διαδικτυακούς λογαριασμούς. Προκύπτει συνήθως όταν οι hackers βρίσκουν ένα τρωτό σημείο στην ασφάλεια της ιστοσελίδας. Παραβιάσεις συμβαίνουν επίσης όταν οι πληροφορίες λογαριασμού διαρρέουν κατά λάθος.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Επισκόπηση
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Στις { $breachDate }, το { $breachTitle } παραβιάστηκε. Μόλις ανακαλύφθηκε και επαληθεύτηκε η παραβίαση, προστέθηκε στη βάση δεδομένων μας στις { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Μενού
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Επαληθεύστε τον σύνδεσμο που απεστάλη στο { $userEmail } για να το προσθέσετε στο { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Ημερομηνία προσθήκης:
# Section headline
rec-section-headline = Τι να κάνετε για αυτήν την παραβίαση
rec-section-subhead = Σας συνιστούμε να ακολουθήσετε τα παρακάτω βήματα για την προστασία των προσωπικών στοιχείων και της ψηφιακής σας ταυτότητας.
# Section headline
rec-section-headline-no-pw = Τι πρέπει να κάνετε για να προστατέψετε τα προσωπικά σας δεδομένα
rec-section-subhead-no-pw = Αν και δεν εκτέθηκαν κωδικοί πρόσβασης σε αυτήν την παραβίαση, υπάρχουν επιπλέον μέτρα για την προστασία των προσωπικών σας πληροφοριών.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Νέο

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] λογαριασμού Mozilla
               *[upper] Λογαριασμού Mozilla
            }
        [acc]
            { $capitalization ->
                [lower] λογαριασμό Mozilla
               *[upper] Λογαριασμό Mozilla
            }
       *[nom]
            { $capitalization ->
                [lower] λογαριασμός Mozilla
               *[upper] Λογαριασμός Mozilla
            }
    }
open-in-new-tab-alt = Άνοιγμα συνδέσμου σε νέα καρτέλα

## Search Engine Optimization

meta-desc-2 = Μάθετε εάν έχετε εμπλακεί σε παραβίαση δεδομένων με το { -brand-fx-monitor }. Θα σας βοηθήσουμε να κατανοήσετε τι πρέπει να κάνετε στη συνέχεια και θα είμαστε συνεχώς σε επιφυλακή για τυχόν νέες παραβιάσεις.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Σύνδεση
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Κύριο μενού
main-nav-button-collapse-label = Σύμπτυξη μενού
main-nav-button-collapse-tooltip = Σύμπτυξη μενού
main-nav-button-expand-label = Ανάπτυξη μενού
main-nav-button-expand-tooltip = Ανάπτυξη μενού
main-nav-label = Πλοήγηση
main-nav-link-home-label = Αρχική
main-nav-link-dashboard-label = Πίνακας ελέγχου
main-nav-link-settings-label = Ρυθμίσεις
main-nav-link-faq-label = Συχνές ερωτήσεις
main-nav-link-faq-tooltip = Συχνές ερωτήσεις

## User menu

user-menu-trigger-label = Άνοιγμα μενού χρήστη
user-menu-trigger-tooltip = Προφίλ
user-menu-manage-fxa-label = Διαχείριση { -brand-mozilla-account(case: "gen", capitalization: "lower") }
user-menu-settings-label = Ρυθμίσεις
user-menu-settings-tooltip = Ρύθμιση του { -brand-mozilla-monitor }
user-menu-help-label = Βοήθεια και υποστήριξη
user-menu-help-tooltip = Λήψη βοήθειας με το { -brand-mozilla-monitor }
user-menu-signout-label = Αποσύνδεση
user-menu-signout-tooltip = Αποσύνδεση από το { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Όροι υπηρεσίας
privacy-notice = Σημείωση απορρήτου
github = { -brand-github }
footer-nav-recent-breaches = Πρόσφατες παραβιάσεις δεδομένων
footer-external-link-faq-label = Συχνές ερωτήσεις
footer-external-link-faq-tooltip = Συχνές ερωτήσεις

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode }: Η σελίδα δεν βρέθηκε
error-page-error-404-copy = Δυστυχώς, η σελίδα που ψάχνετε δεν υπάρχει πλέον.
error-page-error-404-cta-button = Επιστροφή
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode }: Κάτι πήγε στραβά

## Breach overview page

all-breaches-headline-3 = Βάση δεδομένων παραβιάσεων
all-breaches-lead = Παρακολουθούμε όλες τις γνωστές παραβιάσεις δεδομένων για να διαπιστώσουμε εάν τα προσωπικά σας στοιχεία παραβιάστηκαν. Ακολουθεί μια πλήρης λίστα με όλες τις παραβιάσεις που έχουν αναφερθεί από το 2007.
search-breaches = Αναζήτηση παραβιάσεων
# the kind of user data exposed to hackers in data breach.
exposed-data = Εκτεθειμένα δεδομένα:

## Public breach detail page

find-out-if-2 = Μάθετε εάν εμπλακήκατε σε αυτήν την παραβίαση
find-out-if-description = Θα σας βοηθήσουμε να δείτε γρήγορα εάν η διεύθυνση email σας αποκαλύφθηκε σε αυτήν την παραβίαση και να κατανοήσετε τι πρέπει να κάνετε στη συνέχεια.
breach-detail-cta-signup = Έλεγχος για παραβιάσεις

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Νέο όνομα, εμφάνιση και ακόμα περισσότεροι τρόποι <b>διεκδίκησης του απορρήτου σας</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Απόρριψη
loading-accessibility = Φόρτωση
