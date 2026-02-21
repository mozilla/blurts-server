# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
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
-brand-solo-ai = Solo AI

##

error-not-subscribed = Αυτή η διεύθυνση email δεν έχει εγγραφεί στο { -product-name }.
user-add-invalid-email = Άκυρο email
user-add-too-many-emails = Παρακολουθείτε τον μέγιστο αριθμό διευθύνσεων email.
user-add-duplicate-email = Αυτό το email έχει ήδη προστεθεί στο { -product-name }.
user-add-verification-email-just-sent = Δεν μπορεί να αποσταλεί άλλο email επαλήθευσης τόσο γρήγορα. Δοκιμάστε ξανά αργότερα.
user-add-unknown-error = Κάτι πήγε στραβά με την προσθήκη της άλλης διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
user-delete-unknown-error = Κάτι πήγε στραβά κατά την αφαίρεση μιας διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
user-verify-token-error = Απαιτείται διακριτικό επαλήθευσης.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Παραβιασμένα δεδομένα:
# Link title
more-about-this-breach = Περισσότερα για αυτήν την παραβίαση
sensitive-sites = Πώς αντιμετωπίζει το { -product-name } τους ευαίσθητους ιστοτόπους;
sensitive-sites-copy =
    Το { -product-name } αποκαλύπτει τους λογαριασμούς που σχετίζονται με αυτού του τύπου
    τις παραβιάσεις μόνο αφού επαληθευτεί μια διεύθυνση email. Αυτό σημαίνει ότι εσείς είστε
    το μόνο άτομο που μπορεί να δει αν παραβιάστηκαν τα στοιχεία σας (εκτός αν κάποιος άλλος
    έχει πρόσβαση στον λογαριασμό email σας).
what-data = Ποια δεδομένα παραβιάστηκαν:
delayed-reporting-headline = Γιατί πέρασε τόσος καιρός πριν αναφερθεί αυτή η διαρροή;
delayed-reporting-copy =
    Μερικές φορές μπορεί να περάσουν μήνες ή χρόνια μέχρι να εμφανιστούν τα 
    εκτεθειμένα διαπιστευτήρια στο Dark Web. Οι παραβιάσεις προστίθενται στη βάση δεδομένων 
    μας μόλις ανακαλυφθούν και επαληθευτούν.

##

what-is-a-website-breach = Τι είναι μια παραβίαση ιστοτόπου;
website-breach-blurb = Μια παραβίαση δεδομένων ιστοτόπου συμβαίνει όταν οι κυβερνοεγκληματίες υποκλέπτουν, αντιγράφουν ή εξάγουν προσωπικά στοιχεία από διαδικτυακούς λογαριασμούς. Προκύπτει συνήθως όταν οι hacker βρίσκουν ένα τρωτό σημείο στην ασφάλεια του ιστοτόπου. Παραβιάσεις συμβαίνουν επίσης όταν οι πληροφορίες των λογαριασμών διαρρέουν κατά λάθος.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Επισκόπηση
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Στις { $breachDate }, το { $breachTitle } παραβιάστηκε. Μόλις ανακαλύφθηκε και επαληθεύτηκε η παραβίαση, προστέθηκε στη βάση δεδομένων μας στις { $addedDate }.

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
loading-accessibility = Φόρτωση
