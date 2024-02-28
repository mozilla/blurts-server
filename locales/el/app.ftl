# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
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
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Προσπαθήσατε να σαρώσετε πάρα πολλές διευθύνσεις email σε μικρό χρονικό διάστημα. Για λόγους ασφαλείας, σας έχουμε αποκλείσει προσωρινά από νέες αναζητήσεις. Θα μπορέσετε να δοκιμάσετε ξανά αργότερα.
error-could-not-add-email = Αδυναμία προσθήκης διεύθυνσης email στη βάση δεδομένων.
error-not-subscribed = Αυτή η διεύθυνση email δεν έχει εγγραφεί στο { -product-name }.
error-hibp-throttled = Πάρα πολλές συνδέσεις στο { -brand-HIBP }.
error-hibp-connect = Σφάλμα σύνδεσης στο { -brand-HIBP }.
error-hibp-load-breaches = Αδυναμία φόρτωσης διαρροών.
error-must-be-signed-in = Πρέπει να συνδεθείτε στον { -brand-fxa(case: "acc", capitalization: "lower") } σας.
error-to-finish-verifying = Για να ολοκληρώσετε την επαλήθευση αυτού του email για το { -product-name }, θα πρέπει να έχετε συνδεθεί με το κύριο email του λογαριασμού σας.
home-title = { -product-name }
home-not-found = Η σελίδα δεν βρέθηκε.
oauth-invalid-session = Άκυρη συνεδρία
scan-title = { -product-name } : Αποτελέσματα σάρωσης
user-add-invalid-email = Άκυρο email
user-add-too-many-emails = Παρακολουθείτε τον μέγιστο αριθμό διευθύνσεων email.
user-add-email-verify-subject = Επαληθεύστε τη συνδρομή σας στο { -product-name }.
user-add-duplicate-email = Αυτό το email έχει ήδη προστεθεί στο { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Επισκεφθείτε τις { $preferencesLink } σας για να ελέγξετε την κατάσταση του { $userEmail }.
user-add-verification-email-just-sent = Δεν μπορεί να αποσταλεί άλλο email επαλήθευσης τόσο γρήγορα. Δοκιμάστε ξανά αργότερα.
user-add-unknown-error = Κάτι πήγε στραβά με την προσθήκη της άλλης διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
user-delete-unknown-error = Κάτι πήγε στραβά κατά την αφαίρεση μιας διεύθυνσης email. Δοκιμάστε ξανά αργότερα.
error-headline = Σφάλμα
user-verify-token-error = Απαιτείται διακριτικό επαλήθευσης.
user-verify-email-report-subject = Η αναφορά σας για το { -product-name }
user-unsubscribe-token-error = Η κατάργηση εγγραφής απαιτεί διακριτικό.
user-unsubscribe-token-email-error = Η κατάργηση εγγραφής απαιτεί διακριτικό και emailHash.
user-unsubscribe-title = { -product-name } : Κατάργηση εγγραφής
pwt-section-headline = Ισχυρότεροι κωδικοί πρόσβασης = Καλύτερη προστασία
landing-headline = Το δικαίωμά σας για προστασία από hackers ξεκινά εδώ.
scan-placeholder = Εισαγάγετε διεύθυνση email
scan-submit = Αναζήτηση email
scan-error = Πρέπει να είναι ένα έγκυρο email.
download-firefox-banner-button = Λήψη του { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Απεστάλη!
sign-up = Εγγραφή
form-signup-error = Πρέπει να είναι ένα έγκυρο email
# breach-date = the calendar date a particular data theft occurred.
breach-date = Ημερομηνία παραβίασης:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Παραβιασμένοι λογαριασμοί:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Παραβιασμένα δεδομένα:
unsub-headline = Κατάργησης εγγραφής από το { -product-name-nowrap }
unsub-blurb = Το email σας θα αφαιρεθεί από τη λίστα του { -product-name-nowrap } και δεν θα λαμβάνετε πλέον ειδοποιήσεις όταν ανακοινώνονται νέες παραβιάσεις.
unsub-button = Κατάργηση εγγραφής
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Τα δεδομένα παραβιάσεων παρέχονται από το { $hibp-link }
share-twitter = Οι περισσότεροι άνθρωποι έχουν περίπου 100 διαδικτυακούς λογαριασμούς. Έχει εκτεθεί κάποιος από τους δικούς σας σε παραβίαση δεδομένων; Μάθετε.
share-facebook-headline = Μάθετε αν υπήρξατε θύμα της παραβίασης δεδομένων
share-facebook-blurb = Έχουν εκτεθεί οι διαδικτυακοί σας λογαριασμοί σε παραβίαση δεδομένων;
og-site-description = Μάθετε αν υπήρξατε θύμα παραβίασης δεδομένων με το { -product-name }. Εγγραφείτε για ειδοποιήσεις σχετικά με μελλοντικές παραβιάσεις και λάβετε συμβουλές για να προστατέψετε τους λογαριασμούς σας.
show-all = Προβολή όλων
fxa-scan-another-email = Θέλετε να ελέγξετε άλλο email;
sign-out = Αποσύνδεση
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Διαχείριση { -brand-fxa(case: "gen", capitalization: "lower") }
have-an-account = Έχετε ήδη λογαριασμό;
fxa-pwt-summary-2 =
    Οι σύντομοι, μονολεκτικοί κωδικοί πρόσβασης μαντεύονται εύκολα από τους hackers.
    Χρησιμοποιήστε τουλάχιστον δύο λέξεις και ένα συνδυασμό γραμμάτων, ψηφίων και ειδικών χαρακτήρων.
fxa-pwt-summary-4 =
    Οι εφαρμογές διαχείρισης κωδικών πρόσβασης, όπως τα 1Password, LastPass, Dashlane και Bitwarden αποθηκεύουν τους 
    κωδικούς πρόσβασής σας και τους συμπληρώνουν στις ιστοσελίδες. Ακόμη, θα σας βοηθήσουν να δημιουργήσετε πιο ισχυρούς κωδικούς πρόσβασης.
fxa-pwt-summary-6 =
    Οι παραβιάσεις δεδομένων αυξάνονται. Αν οι προσωπικές σας πληροφορίες εμφανίζονται σε μια νέα παραβίαση δεδομένων,
    το { -product-name } σάς στέλνει ειδοποίηση - ώστε να ενεργήσετε και να προστατεύσετε τους λογαριασμούς σας.
fxa-what-to-do-blurb-1 =
    Αν δεν μπορείτε να συνδεθείτε, επικοινωνήστε με την ιστοσελίδα για να ρωτήσετε τον τρόπο ενημέρωσης.
    Βλέπετε ένα λογαριασμό που δεν αναγνωρίζετε; Τα δεδομένα σας ίσως έχουν πωληθεί
    ή αναδιανεμηθεί. Ίσως είναι ένας λογαριασμός που ξεχάσατε ότι έχετε
    δημιουργήσει ή μια εταιρεία που άλλαξε ονόματα.
fxa-what-to-do-subhead-2 = Σταματήστε να χρησιμοποιείτε τον εκτεθειμένο κωδικό πρόσβασης και αλλάξτε τον όπου τον έχετε χρησιμοποιήσει.
fxa-wtd-blurb-2 =
    Οι hackers ίσως χρησιμοποιήσουν τον ίδιο κωδικό πρόσβασης και το email σας για να εισβάλλουν σε άλλους λογαριασμούς. 
    Δημιουργήστε ένα διαφορετικό και μοναδικό κωδικό πρόσβασης για κάθε λογαριασμό, ειδικά τον τραπεζικό σας λογαριασμό, 
    το email σας και άλλες ιστοσελίδες όπου αποθηκεύετε προσωπικές πληροφορίες.
fxa-what-to-do-blurb-3 =
    Οι περισσότερες παραβιάσεις εκθέτουν μόνο email και κωδικούς πρόσβασης, αλλά μερικές περιλαμβάνουν ευαίσθητες οικονομικές πληροφορίες. 
    Αν ο τραπεζικός σας λογαριασμός ή οι αριθμοί πιστωτικών καρτών εκτέθηκαν, ενημερώστε την τράπεζά σας για πιθανή απάτη.
    Παρακολουθήστε τις χρεώσεις που δεν αναγνωρίζετε.
fxa-what-to-do-subhead-4 = Λάβετε βοήθεια με την απομνημόνευση και την προστασία όλων των κωδικών πρόσβασής σας.
fxa-what-to-do-blurb-4 =
    Οι εφαρμογές διαχείρισης κωδικών πρόσβασης, όπως τα 1Password, LastPass, Dashlane και Bitwarden αποθηκεύουν τους 
    κωδικούς πρόσβασής σας με ασφάλεια και τους συμπληρώνουν στις ιστοσελίδες. Χρησιμοποιήστε μια εφαρμογή διαχείρισης κωδικών πρόσβασης 
    στο τηλέφωνο και τον υπολογιστή σας έτσι, ώστε να μη χρειάζεται να τους θυμάστε όλους.
# Alerts is a noun
sign-up-for-alerts = Εγγραφή για ειδοποιήσεις
# Link title
frequently-asked-questions = Συχνές ερωτήσεις
about-firefox-monitor = Σχετικά με το { -product-name }
# Link title
preferences = Προτιμήσεις
# Link title
home = Αρχική
# Link title
security-tips = Συμβουλές ασφαλείας
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Άνοιγμα πλοήγησης { -brand-fxa(case: "gen", capitalization: "lower") }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ΠΡΟΣΦΑΤΗ ΠΡΟΣΘΗΚΗ
# Link title
more-about-this-breach = Περισσότερα για αυτήν την παραβίαση
take-control = Ανακτήστε τον έλεγχο των προσωπικών σας δεδομένων.
cant-stop-hackers = Δεν μπορείτε να εμποδίσετε τους χάκερ από το να χακάρουν. Αλλά μπορείτε να αποφύγετε τις κακές συνήθειες που κάνουν τη δουλειά τους εύκολη.
read-more-tips = Διαβάστε περισσότερες συμβουλές ασφαλείας
how-hackers-work = Κατανοήστε πώς δρουν οι hackers
monitor-your-online-accounts = Εγγραφείτε για παρακολούθηση παραβιάσεων με έναν { -brand-fxa(case: "acc", capitalization: "lower") }.
stay-alert = Ενημέρωση για νέες παραβιάσεις
if-your-info = Αν οι πληροφορίες σας εμφανιστούν σε νέα παραβίαση δεδομένων, θα σας ειδοποιήσουμε.
search-all-emails = Αναζητήστε όλες τις διευθύνσεις email σας για παραβιάσεις και λάβετε ειδοποιήσεις σχετικά με νέες απειλές.
monitor-several-emails = Εποπτεία πολλών email
take-action = Λάβετε μέτρα για την προστασία των λογαριασμών σας
keep-your-data-safe = Μάθετε τι πρέπει να κάνετε για να διατηρήσετε τα δεδομένα σας ασφαλή από εγκληματίες του κυβερνοχώρου.
website-breach = Παραβίαση ιστοσελίδας
sensitive-breach = Παραβίαση ευαίσθητης ιστοσελίδας
data-aggregator-breach = Παραβίαση συγκέντρωσης δεδομένων
unverified-breach = Μη επαληθευμένη παραβίαση
spam-list-breach = Παραβίαση λίστας ανεπιθύμητων
website-breach-plural = Διαρροές ιστοσελίδας
sensitive-breach-plural = Ευαίσθητες παραβιάσεις
data-aggregator-breach-plural = Παραβιάσεις συγκέντρωσης δεδομένων
unverified-breach-plural = Μη επαληθευμένες παραβιάσεις
spam-list-breach-plural = Παραβιάσεις λίστας ανεπιθύμητων
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
about-fxm-headline = Σχετικά με το { -product-name }
about-fxm-blurb =
    Το { -product-name } σας προειδοποιεί αν εμφανιστούν οι διαδικτυακοί σας λογαριασμοί 
    σε κάποιο παραβίαση δεδομένων. Μάθετε αν έχετε επηρεαστεί, λάβετε ειδοποιήσεις για νέες διαρροές 
    και λάβετε μέτρα για την προστασία των λογαριασμών σας. Το { -product-name } παρέχεται 
    από τη { -brand-Mozilla }.
fxm-warns-you =
    Το { -product-name } σάς προειδοποιεί αν έχει εκτεθεί η διεύθυνση email σας 
    σε παραβίαση δεδομένων. Δείτε αν έχουν διαρρεύσει τα στοιχεία σας, μάθετε πώς 
    να προστατέψετε τους λογαριασμούς σας και ειδοποιηθείτε αν εμφανιστεί η 
    διεύθυνση email σας σε νέα παραβίαση.
# How Firefox Monitor works
how-fxm-works = Πώς λειτουργεί το { -product-name }
how-fxm-1-headline = Πραγματοποίηση βασικής αναζήτησης
how-fxm-1-blurb =
    Αναζητήστε τη διεύθυνση email σας σε δημόσιες παραβιάσεις δεδομένων από το 2007.
    Αυτή η βασική αναζήτηση θα ανασύρει τις περισσότερες παραβιάσεις δεδομένων, αλλά όχι
    αυτά που περιέχουν ευαίσθητες προσωπικές πληροφορίες.
how-fxm-2-headline = Εγγραφή για εποπτεία παραβιάσεων
how-fxm-2-blurb =
    Δημιουργήστε έναν { -brand-fxa(case: "acc", capitalization: "lower") } ώστε να εποπτεύετε συνεχώς το email σας για παραβιάσεις. 
    Μόλις επαληθεύσετε το email σας, θα λάβετε επίσης μια πλήρη αναφορά παλαιών παραβιάσεων, 
    καθώς και παραβιάσεων ευαίσθητων δεδομένων.
how-fxm-3-headline = Eιδοποιήσεις στο πρόγραμμα περιήγησής σας
how-fxm-3-blurb =
    Με το { -brand-name }, θα λάβετε μια ειδοποίηση αν επισκεφθείτε 
    κάποια παραβιασμένη ιστοσελίδα. Μάθετε άμεσα αν επηρεαστήκατε από τη διαρροή, 
    καθώς και τι μπορείτε να κάνετε γι' αυτό.
wtd-after-website = Τι να κάνετε μετά από μια παραβίαση ιστοσελίδας:
wtd-after-data-agg = Τι πρέπει να κάνετε μετά από μια παραβίαση συγκέντρωσης δεδομένων:
what-is-data-agg = Τι είναι ο συναθροιστής δεδομένων;
what-is-data-agg-blurb =
    Οι συναθροιστές δεδομένων, ή data brokers, συλλέγουν πληροφορίες από δημόσια αρχεία 
    και τις αγοράζουν από άλλες εταιρείες. Συνδυάζουν αυτά τα δεδομένα για να τα πουλήσουν 
    σε εταιρείες για σκοπούς μάρκετινγκ. Τα θύματα αυτών των παραβιάσεων δεν εξαπατώνται 
    συνήθως, αλλά οι hacker μπορούν να τους πλαστοπροσωπήσουν.
protect-your-privacy = Προστατέψτε το διαδικτυακό σας απόρρητο
no-pw-to-change = Σε αντίθεση με μια παραβίαση ιστοσελίδας, δεν υπάρχει κάποιος κωδικός πρόσβασης για να αλλάξετε.
avoid-personal-info = Αποφύγετε τη χρήση προσωπικών πληροφοριών σε κωδικούς πρόσβασης
avoid-personal-info-blurb = Είναι εύκολο να βρει κανείς γενέθλια, διευθύνσεις και ονόματα συγγενών στο διαδίκτυο. Μη χρησιμοποιείτε αυτές τις λέξεις στους κωδικούς πρόσβασής σας.

## What to do after data breach tips

change-pw = Αλλαγή κωδικού πρόσβασης
change-pw-site = Αλλαγή κωδικού πρόσβασης στον ιστότοπο
even-for-old = Ακόμη και για παλιούς λογαριασμούς, είναι σημαντικό να ενημερώσετε τον κωδικό πρόσβασής σας.
make-new-pw-unique = Κάντε το νέο κωδικό πρόσβασης διαφορετικό και μοναδικό
strength-of-your-pw = Η ισχύς των κωδικών πρόσβασής σας επηρεάζει άμεσα την διαδικτυακή σας ασφάλεια.
create-strong-passwords = Πώς να δημιουργήσετε ισχυρούς κωδικούς πρόσβασης
stop-reusing-pw = Σταματήστε να χρησιμοποιείτε ξανά τους ίδιους κωδικούς πρόσβασης
create-unique-pw = Δημιουργήστε μοναδικούς κωδικούς πρόσβασης και αποθηκεύστε τους κάπου με ασφάλεια, όπως σε μια εφαρμογή διαχείρισης κωδικών πρόσβασης.
five-myths = 5 μύθοι για τις εφαρμογές διαχείρισης κωδικών πρόσβασης
create-a-fxa = Δημιουργήστε έναν { -brand-fxa(case: "acc", capitalization: "lower") } για αποστολή πλήρους αναφοράς παραβιάσεων και λήψη ειδοποιήσεων.
feat-security-tips = Συμβουλές ασφάλειας για την προστασία των λογαριασμών σας
feat-sensitive = Σύνθετη αναζήτηση σε ευαίσθητες διαρροές
feat-enroll-multiple = Καταχωρήστε πολλαπλά email για εποπτεία παραβιάσεων
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Εμφανίζεται σε { $breachCount } γνωστή παραβίαση.
       *[other] Εμφανίζεται σε { $breachCount } γνωστές παραβιάσεις.
    }
check-for-breaches = Έλεγχος για παραβιάσεις
find-out-what-hackers-know = Ανακαλύψτε τι γνωρίζουν ήδη οι hackers για εσάς. Μάθετε πώς να είστε πάντα ένα βήμα μπροστά.
get-email-alerts = Μείνετε ασφαλείς: Λάβετε ειδοποιήσεις μέσω email, σε περίπτωση που εμφανιστούν οι πληροφορίες σας σε γνωστή παραβίαση δεδομένων
search-for-your-email = Αναζητήστε τη διεύθυνση email σας σε παραβιάσεις δημόσιων δεδομένων από το 2007.
back-to-top = Πίσω στην κορυφή
comm-opt-0 = Να ειδοποιηθώ σε περίπτωση που κάποια από τις εξής διευθύνσεις email εμφανιστεί σε παραβίαση δεδομένων.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Αποστολή όλων των ειδοποιήσεων παραβιάσεων στο { $primaryEmail }.
stop-monitoring-this = Διακοπή εποπτείας αυτού του email.
resend-verification = Εκ νέου αποστολή email επαλήθευσης
add-new-email = Προσθήκη νέας διεύθυνσης email
send-verification = Αποστολή συνδέσμου επαλήθευσης
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Περίληψη παραβίασης
show-breaches-for-this-email = Εμφάνιση όλων των παραβιάσεων για αυτό το email.
link-change-primary = Αλλαγή κύριας διεύθυνσης email
remove-fxm = Αφαίρεση του { -product-name }
remove-fxm-blurb =
    Απενεργοποίηση των ειδοποιήσεων του { -product-name }. Ο { -brand-fxa(case: "nom", capitalization: "lower") } σας θα παραμείνει ενεργός και ίσως 
    λάβετε και άλλες ειδοποιήσεις σχετικά αυτόν.
# Button title
manage-email-addresses = Διαχείριση διευθύνσεων email
# Link title
latest-breach-link = Δείτε αν επηρεαστήκατε από αυτήν την παραβίαση

## Variables:
##   $userName (String) - Username

welcome-back = Καλώς ορίσατε και πάλι, { $userName }!
welcome-user = Καλώς ορίσατε, { $userName }!

##

breach-alert-subject = Το { -product-name } βρήκε το email σας σε νέα παραβίαση δεδομένων
your-info-was-discovered-headline = Οι πληροφορίες σας ανακαλύφθηκαν σε μια νέα παραβίαση δεδομένων.
your-info-was-discovered-blurb =
    Έχετε εγγραφεί στις ειδοποιήσεις του { -product-name } 
    όταν το email σας εμφανιστεί σε παραβίαση δεδομένων. Δείτε τι γνωρίζουμε για αυτήν την παραβίαση.
what-to-do-after-breach = Ενέργειες μετά από μια παραβίαση δεδομένων
ba-next-step-1 = Αλλάξτε τον κωδικό πρόσβασής σας με έναν ισχυρό και μοναδικό κωδικό.
ba-next-step-blurb-1 =
    Ένας ισχυρός κωδικός πρόσβασης χρησιμοποιεί έναν συνδυασμό κεφαλαίων και πεζών γραμμάτων,
    ειδικούς χαρακτήρες και αριθμούς. Δεν περιέχει προσωπικές πληροφορίες όπως
    τη διεύθυνσή σας, τα γενέθλιά σας ή οικογενειακά ονόματα.
ba-next-step-2 = Σταματήστε τη χρήση του εκτεθειμένου κωδικό πρόσβασης.
ba-next-step-blurb-2 =
    Οι κυβερνοεγκληματίες μπορούν να βρουν τον κωδικό πρόσβασής σας στο dark web 
    για να συνδεθούν σε άλλους λογαριασμούς σας. Ο καλύτερος τρόπος προστασίας 
    είναι να χρησιμοποιείτε μοναδικό κωδικό πρόσβασης για κάθε λογαριασμό.
ba-next-step-3 = Μάθετε πώς να δημιουργήσετε καλύτερους κωδικούς πρόσβασης και πώς να τους προστατέψετε.
ba-next-step-blurb-3 =
    Δημιουργήστε ισχυρούς κωδικούς πρόσβασης με ένα εργαλείο διαχείρισης κωδικών. Αυτά τα πρόσθετα αποθηκεύουν με ασφάλεια όλες τις 
    συνδέσεις σας για πρόσβαση από όλες τις συσκευές σας.
faq1 = Δεν αναγνωρίζω αυτήν την εταιρεία ή τον ιστότοπο. Γιατί είμαι σε αυτήν την παραβίαση;
faq2 = Γιατί πέρασε τόσος καιρός μέχρι να ενημερωθώ για αυτήν την παραβίαση;
faq3 = Πώς ξέρω αν αυτό είναι ένα γνήσιο email από το { -product-name };
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] ΒΡΕΘΗΚΕ { $breachCount } ΝΕΑ ΠΑΡΑΒΙΑΣΗ
       *[other] ΒΡΕΘΗΚΑΝ { $breachCount } ΝΕΕΣ ΠΑΡΑΒΙΑΣΕΙΣ
    }
sign-up-headline-1 = Λάβετε συνεχείς ειδοποιήσεις με έναν { -brand-fxa(case: "acc", capitalization: "lower") }.
account-not-required = Δεν απαιτείται το { -brand-name } για ένα { -brand-fxa }. Μπορείτε να λάβετε πληροφορίες σχετικά με τις υπηρεσίες { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Εκτέθηκαν οι πληροοφορίες σας στην παραβίαση δεδομένων { $breachName };
fb-not-comp = Αυτό το email δεν εμφανίστηκε στην παραβίαση { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Ωστόσο, εμφανίστηκε σε άλλη { $breachCount } παραβίαση.
       *[other] Ωστόσο, εμφανίστηκε σε άλλες { $breachCount } παραβιάσεις.
    }
fb-comp-only = Αυτό το email εμφανίστηκε στην παραβίαση { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Αυτό το email εμφανίστηκε σε { $breachCount } γνωστές παραβιάσεις δεδομένων, όπως το { $breachName }.
       *[other] Αυτά τα email εμφανίστηκαν σε { $breachCount } γνωστές παραβιάσεις δεδομένων, όπως το { $breachName }.
    }

##

no-other-breaches-found = Δεν βρέθηκαν άλλες παραβιάσεις με τη βασική αναζήτηση.
no-results-blurb = Λυπούμαστε, αυτή η παραβίαση δεν είναι στη βάση δεδομένων μας.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Το email σας δεν εμφανίζεται σε αυτή τη διαρροή,
    αλλά ο αριθμός τηλεφώνου σας ενδέχεται να παραμένει ευάλωτος.</span> Κάποιοι από τους λογαριασμούς
    που παραβιάστηκαν στη διαρροή του Facebook περιείχαν αριθμούς τηλεφώνων και άλλα
    προσωπικά δεδομένα, αλλά όχι διευθύνσεις email. Αν έχετε δημιουργήσει ποτέ
    λογαριασμό στο Facebook — ακόμα κι αν δεν τον χρησιμοποιείτε πλέον — προτείνουμε
    να λάβετε αυτά τα μέτρα για να προστατευτείτε
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Ορίστε τις πληροφορίες σας σε “Μόνο εγώ” ή κάποια άλλη ιδιωτική ρύθμιση στο <a>προφίλ σας στο Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Κατά τη διαρροή αυτή, οι hacker πήραν πληροφορίες 
    που είχαν οριστεί ως “δημόσιες” ή “κοινόχρηστες με φίλους”.
    Αυτές οι πληροφορίες μπορούν να συνδυαστούν με άλλα δεδομένα για πρόσβαση σε ακόμα
    περισσότερες προσωπικές πληροφορίες και λογαριασμούς σας.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Αλλάξτε τον κωδικό πρόσβασης, το PIN, ή άλλα διαπιστευτήρια ασφαλείας στους <a>λογαριασμούς
    του παρόχου κινητής τηλεφωνίας σας</a> για να αποφύγετε την αντικατάσταση SIM (SIM Swapping)</span>.
facebook-breach-what-to-do-2-copy =
    Η αντικατάσταση SIM (SIM Swapping), γνωστή κι ως κατάληψη SIM,
    συμβαίνει όταν ένας hacker χρησιμοποιεί τον αριθμό τηλεφώνου, την ημερομηνία γέννησης και άλλα δεδομένα
    για να πάρει τον έλεγχο του αριθμού τηλεφώνου ενός ατόμου και έπειτα, να εισβάλλει το email, τα κοινωνικά δίκτυα, ακόμα και τους τραπεζικούς του λογαριασμούς.
facebook-breach-what-to-do-3 = Δείτε όλες τις προτάσεις στη σελίδα μας σχετικά με τη διαρροή του Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Εμφάνιση:

## Updated error messages

error-bot-headline = Προσωρινή αναστολή αναζητήσεων
error-bot-blurb =
    Ανησυχούμε ότι μάλλον είστε bot επειδή αναζητήσατε πολλές 
    διευθύνσεις email σε μικρό χρονικό διάστημα. Δεν μπορείτε προς το παρόν 
    να κάνετε νέες αναζητήσεις. Μπορείτε να δοκιμάσετε ξανά αργότερα.
error-csrf-headline = Ο χρόνος συνεδρίας έληξε
error-csrf-blurb = Πατήστε το κουμπί "Πίσω" του προγράμματος περιήγησής σας, κάντε ανανέωση της σελίδας και δοκιμάστε ξανά.
error-invalid-unsub = Κατάργηση εγγραφής από τις ειδοποιήσεις του { -product-name }
error-invalid-unsub-blurb =
    Θα πρέπει να καταργήσετε τη συνδρομή σας σε κάποιο από τα email του
    { -product-name }. Ελέγξτε τα εισερχόμενά σας για μηνύματα από το 
    { -brand-team-email }. Επιλέξτε τον σύνδεσμο κατάργησης εγγραφής στο κάτω μέρος.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] διεύθυνση email υπό εποπτεία
       *[other] διευθύνσεις email υπό εποπτεία
    }
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
# Button
see-additional-breaches = Προβολή επιπρόσθετων παραβιάσεων
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Αυτό το email εμφανίστηκε σε 1 γνωστή παραβίαση δεδομένων.
       *[other] Αυτό το email εμφανίστηκε σε { $breachCount } γνωστές παραβιάσεις δεδομένων.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Αποτελέσματα για: { $userEmail }
other-monitored-emails = Άλλα εποπτευμένα email
email-verification-required = Απαιτείται επαλήθευση email
fxa-primary-email = Email του { -brand-fxa(case: "gen", capitalization: "lower") } - Κύριο
what-is-a-website-breach = Τι είναι μια παραβίαση ιστοσελίδας;
website-breach-blurb = Μια παραβίαση δεδομένων ιστοσελίδας συμβαίνει όταν οι κυβερνοεγκληματίες υποκλέπτουν, αντιγράφουν ή εξάγουν προσωπικά στοιχεία από διαδικτυακούς λογαριασμούς. Προκύπτει συνήθως όταν οι hackers βρίσκουν ένα τρωτό σημείο στην ασφάλεια της ιστοσελίδας. Παραβιάσεις συμβαίνουν επίσης όταν οι πληροφορίες λογαριασμού διαρρέουν κατά λάθος.
security-tips-headline = Συμβουλές για προστασία από τους hackers
steps-to-protect = Βήματα για την προστασία της διαδικτυακής σας ταυτότητας
take-further-steps = Λάβετε περαιτέρω μέτρα προστασίας για την ταυτότητά σας
alert-about-new-breaches = Ειδοποίηση σχετικά με νέες παραβιάσεις
see-if-youve-been-part = Δείτε αν έχετε εμπλακεί σε παραβίαση δεδομένων.
get-ongoing-breach-monitoring = Λάβετε συνεχή εποπτεία παραβίασης για πολλαπλές διευθύνσεις email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Μάθετε
new-unsub-error = Θα πρέπει να καταργήσετε την εγγραφή σας από ένα από τα email που έστειλε το { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Ωστόσο, εμφανίστηκε σε άλλη { $breachCount } γνωστή παραβίαση.
       *[other] Ωστόσο, εμφανίστηκε σε άλλες { $breachCount } γνωστές παραβιάσεις.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Πρόσθετες πληροφορίες, όπως:
# Title
email-addresses-title = Διευθύνσεις email
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Επισκόπηση
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Στις { $breachDate }, το { $breachTitle } παραβιάστηκε. Μόλις ανακαλύφθηκε και επαληθεύτηκε η παραβίαση, προστέθηκε στη βάση δεδομένων μας στις { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Προτιμήσεις { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Σε σύνδεση ως: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Φιλτράρισμα κατά κατηγορία:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Μενού
to-affected-email = Αποστολή ειδοποιήσεων παραβίασης στην επηρεασμένη διεύθυνση email
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Υπάρχει τρόπος να προστατέψετε το απόρρητό σας. Γίνετε μέλος του { -brand-name }.
# Link title
learn-more-link = Μάθετε περισσότερα.
email-sent = Απεστάλη email!
# Form title
want-to-add = Θέλετε να προσθέσετε ένα άλλο email;
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Επαληθεύστε τον σύνδεσμο που απεστάλη στο { $userEmail } για να το προσθέσετε στο { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Επιτυχής επαλήθευση email!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Θα σας ειδοποιήσουμε αν το { $email } εμφανιστεί σε νέα διαρροή δεδομένων.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Για να δείτε και να διαχειριστείτε όλα τα email που έχετε καταχωρήσει για εποπτεία παραβιάσεων, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = σύνδεση

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Διαχείριση όλων των διευθύνσεων email στις { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Ειδοποιήσεις παραβιάσεων
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Ημερομηνία προσθήκης:
how-hackers-work-desc = Προστατέψτε τους κωδικούς πρόσβασής σας από κυβερνοεγκληματίες, καθώς αυτοί τους ενδιαφέρουν περισσότερο.
what-to-do-after-breach-desc = Κλειδώστε τους λογαριασμούς σας για να μην πέσουν τα στοιχεία σας σε λάθος χέρια.
create-strong-passwords-desc = Δημιουργήστε ισχυρούς κωδικούς πρόσβασης που δεν μαντεύονται εύκολα.
steps-to-protect-desc = Ενημερωθείτε για τις πιο κοινές απειλές και μάθετε τι να προσέξετε περισσότερο
five-myths-desc = Μάθετε πώς να αποφεύγετε συχνά λάθη κωδικών πρόσβασης που διευκολύνουν έναν hacker.
take-further-steps-desc = Μάθετε πώς μπορείτε να μετριάσετε τους κινδύνους κλοπής ταυτότητας, για να αποφύγετε τυχόν οικονομικές απώλειες.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Οι αλλαγές αποθηκεύτηκαν!
# Section headline
rec-section-headline = Τι να κάνετε για αυτήν την παραβίαση
rec-section-subhead = Σας συνιστούμε να ακολουθήσετε τα παρακάτω βήματα για την προστασία των προσωπικών στοιχείων και της ψηφιακής σας ταυτότητας.
# Section headline
rec-section-headline-no-pw = Τι πρέπει να κάνετε για να προστατέψετε τα προσωπικά σας δεδομένα
rec-section-subhead-no-pw = Αν και δεν εκτέθηκαν κωδικοί πρόσβασης σε αυτήν την παραβίαση, υπάρχουν επιπλέον μέτρα για την προστασία των προσωπικών σας πληροφοριών.
# Button
see-additional-recs = Προβολή επιπρόσθετων προτάσεων

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = Το { $affectedEmail } εμφανίστηκε σε αυτήν την παραβίαση. <a>Τι να κάνετε στη συνέχεια</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } από τις διευθύνσεις email σας εμφανίστηκαν σε αυτήν την παραβίαση. <a>Τι να κάνετε στη συνέχεια</a>
    }

##

marking-this-subhead = Επισήμανση αυτής της παραβίασης ως επιλυμμένης
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Μόλις ολοκληρώσετε τα βήματα για τη διευθέτηση αυτής της παραβίασης</span>,
    μπορείτε να την επισημάνετε ως επιλυμένη. Μπορείτε να δείτε ακόμη τα στοιχεία της 
    παραβίασης από τον πίνακα ελέγχου σας, ανά πάσα στιγμή.
mark-as-resolve-button = Επισήμανση ως λυμένη
marked-as-resolved-label = Επισημάνθηκε ως λυμένη
undo-button = Αναίρεση
confirmation-1-subhead = Ωραία! Μόλις επιλύσατε την πρώτη σας παραβίαση.
confirmation-1-body = Συνεχίστε ακάθεκτα. Ελέγξτε τον πίνακα ελέγχου σας για να δείτε αν υπάρχουν περισσότερες εργασίες.
confirmation-2-subhead = Άλλη μια νίκη εναντίον των hackers!
confirmation-2-body = Λαμβάνετε σημαντικά βήματα για την προστασία των διαδικτυακών λογαριασμών σας.
confirmation-3-subhead = Αντιμετωπίστηκε ακόμη ένα. Καλή δουλειά!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Είναι ο νέος σας κωδικός πρόσβασης μοναδικός, ισχυρός και δύσκολος; <a>Μάθετε εδώ</a>
generic-confirmation-subhead = Αυτή η παραβίαση έχει επισημανθεί ως επιλυμένη
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Για να δείτε την εναπομείνουσα διαρροή, μεταβείτε στον πίνακα ελέγχου.
       *[other] Για να δείτε τις εναπομείνουσες διαρροές, μεταβείτε στον πίνακα ελέγχου.
    }
return-to-breach-details-link = Επιστροφή στις λεπτομέρειες παραβίασης
go-to-dashboard-link = Μετάβαση στον πίνακα ελέγχου
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% ολοκλήρωση
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] Επιλύθηκαν { $numResolvedBreaches }
    }
progress-intro-subhead = Νέο στο { -product-name }: Επισήμανση παραβιάσεων ως επιλυμένων
progress-intro-message =
    Αφού ελέγξετε τα στοιχεία μιας παραβίασης και λάβετε μέτρα για την προστασία 
    των δεδομένων σας, μπορείτε να επισημάνετε τις παραβιάσεις ως επιλυμένες.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } από { $numTotalBreaches } παραβιάσεις έχουν επισημανθεί ως επιλυμένες
    }
progress-complete = Όλες οι γνωστές παραβιάσεις έχουν επισημανθεί ως επιλυμένες

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Κάνατε μια εξαιρετική αρχή!</span> Δείτε τις υπόλοιπες παραβιάσεις για να μάθετε 
    ποια μέτρα πρέπει να πάρετε.
progress-message-2 =
    <span>Συνεχίστε!</span> Μικρές αλλαγές, όπως η ενημέρωση κωδικών πρόσβασης, μπορεί να επηρεάσουν 
    σημαντικά την προστασία των προσωπικών σας δεδομένων.
progress-message-3 = <span>Καλή δουλειά με την επίλυση διαρροών!</span> Συνεχίστε έτσι. Απομένουν λίγες ακόμα.
progress-message-4 = <span>Σχεδόν τελειώσατε!</span> Είστε κοντά στη γραμμή τερματισμού.
progress-complete-message =
    <span>Ωραίο δεν είναι;</span> Αν θέλετε να συνεχίσετε, είναι η κατάλληλη στιγμή να 
    ενημερώσετε άλλες συνδέσεις με ισχυρότερους κωδικούς πρόσβασης.

##

resolve-this-breach-link = Επίλυση παραβίασης
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Επισημασμένα ως επιλυμένα:
hide-resolved-button = Απόκρυψη επιλυμένων
show-resolved-button = Εμφάνιση επιλυμένων
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Εκτεθειμένος κωδικός πρόσβασης σε μη επιλυμένες παραβιάσεις
       *[other] Εκτεθειμένοι κωδικοί πρόσβασης σε μη επιλυμένες παραβιάσεις
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Γνωστή παραβίαση δεδομένων επισημάνθηκε ως επιλυμένη
       *[other] Γνωστές παραβιάσεις δεδομένων επισημάνθηκαν ως επιλυμένες
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Νέο
mobile-promo-headline = Φέρτε το { -brand-name } στο τηλέφωνο και το tablet σας
mobile-promo-body = Γρήγορη, ιδιωτική και ασφαλής περιήγηση όπου κι αν βρίσκεστε. Βρείτε το { -brand-name } στο Google Play και το App Store.
mobile-promo-cta = Λήψη { -brand-name } σε Android και iOS
promo-lockwise-headline = Πάρτε τους κωδικούς πρόσβασής σας παντού
lockwise-promo-body = Παρακολουθήστε τις συνδέσεις σας σε όλες τις συσκευές σας. Ασφαλής πρόσβαση από υπολογιστή, τηλέφωνο ή tablet.
promo-lockwise-cta = Λήψη { -brand-lockwise }
fpn-promo-headline = Καλύψτε την τοποθεσία σας από ιστοσελίδες και ιχνηλάτες
promo-fpn-body = Το { -brand-fpn } αποπροσανατολίζει τις ιστοσελίδες και τα στοιχεία συλλογής δεδομένων που δημιουργούν διαφημιστικά προφίλ για εσάς, αποκρύπτοντας την πραγματική διεύθυνση IP σας.
promo-fpn-cta = Λήψη { -brand-fpn }
monitor-promo-headline = Μάθετε για νέες παραβιάσεις δεδομένων
monitor-promo-body = Λάβετε ειδοποίηση την επόμενη φορά που θα διαρρεύσουν τα προσωπικά στοιχεία σας σε μια γνωστή παραβίαση.
ecosystem-promo-headline = Προστατέψτε τη ζωή σας στο διαδίκτυο με προϊόντα που σέβονται το απόρρητο
ecosystem-promo-body = Όλα τα προϊόντα { -brand-name } τιμούν την υπόσχεση μας σχετικά με τα προσωπικά δεδομένα: Λιγότερα δεδομένα. Με ασφάλεια. Χωρίς μυστικά.
promo-ecosystem-cta = Προβολή όλων των προϊόντων
steps-to-resolve-headline = Βήματα επίλυσης για αυτή τη διαρροή
vpn-promo-headline = Ήρθε η ώρα για περισσότερη ασφάλειά στο Διαδίκτυο.
vpn-promo-copy = Το εικονικό ιδιωτικό δίκτυο της { -brand-Mozilla } προστατεύει τη σύνδεσή σας στο Διαδίκτυο από hacker και κατασκόπους.
vpn-promo-cta = Λήψη του { -brand-mozilla-vpn }
vpn-promo-headline-new = Εξοικονομήστε 50% με συνδρομή ενός έτους
vpn-promo-copy-new = Προστατέψτε τα διαδικτυακά σας δεδομένα — επιλέξτε το πακέτο συνδρομής VPN που σας ταιριάζει.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Η τοποθεσία σας: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Προστατευτείτε</em> με το { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Προστατεύεστε</em> με το { -brand-mozilla-vpn }.
vpn-banner-title-1 = Προστατεύεστε — ευχαριστούμε που χρησιμοποιείτε το { -brand-mozilla-vpn }.
vpn-banner-title-2 = Η τοποθεσία σας μπορεί να καταγραφεί εάν δεν χρησιμοποιείτε VPN.
vpn-banner-subtitle-2 = Προστατεύστε την τοποθεσία σας και περιηγηθείτε με ασφάλεια σε 3 βήματα.
vpn-banner-status-protected = Τρέχουσα κατάσταση: <em>Υπό προστασία ✓</em>
vpn-banner-status-not-protected = Τρέχουσα κατάσταση: <em>Χωρίς προστασία ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Διεύθυνση IP: { $ip-address }
vpn-banner-step-1 = Εγγραφείτε στο { -brand-mozilla-vpn }
vpn-banner-step-2 = Επιλέξτε μια τοποθεσία VPN
vpn-banner-step-3 = Ενεργοποιήστε το VPN και περιηγηθείτε με ασφάλεια
vpn-banner-cta = Λήψη του { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Ανάπτυξη
# button to close panel
vpn-banner-cta-close = Κλείσιμο

## Relay and VPN educational/ad units

ad-unit-relay-cta = Μάθετε περισσότερα για το { -brand-relay }
ad-unit-vpn-cta = Μάθετε περισσότερα για το { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Πώς κρατάτε μυστική τη διεύθυνση email σας;
# ad 2 heading
ad-unit-2-do-you-worry = Ανησυχείτε για την ασφάλεια των δημόσιων Wi-Fi;
# ad 3 heading
ad-unit-3-stay-in-the-game = Μείνετε στο παιχνίδι!
ad-unit-3-lets-you-keep = Το { -brand-mozilla-vpn } σάς επιτρέπει να προστατεύετε μια σταθερή σύνδεση ενώ παίζετε παιχνίδια ή παρακολουθείτε ταινίες.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Εμποδίστε τους περιορισμούς
# ad 3 list item 2
ad-unit-3-be-anywhere = Βρεθείτε οπουδήποτε στον κόσμο
# ad 3 list item 3
ad-unit-3-access-more = Πρόσβαση σε περισσότερα
# ad 4 heading
ad-unit-4-shopping-with = Αγορές με τις μάσκες email
ad-unit-4-want-to-buy = Θέλετε να αγοράσετε κάτι στο διαδίκτυο και δεν γνωρίζετε ή δεν εμπιστεύεστε απόλυτα το κατάστημα;
ad-unit-4-shop-online = Χρησιμοποιήστε μια μάσκα email κάθε φορά που κάνετε αγορές στο διαδίκτυο. Λάβετε την επιβεβαίωση στο πραγματικό σας email και απενεργοποιήστε εύκολα τη μάσκα ανά πάσα στιγμή αργότερα.
# ad 5 heading
ad-unit-5-on-the-go = Εν κινήσει με το { -brand-relay }
ad-unit-5-instantly-make = Δημιουργήστε μια προσαρμοσμένη μάσκα email στη στιγμή, όπου κι αν πάτε!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Σύνδεση εν κινήσει
ad-unit-5-privately-sign-in = Χρησιμοποιήστε τη μάσκα email σας όταν θέλετε να συνδεθείτε ιδιωτικά στην αγαπημένη σας καφετέρια ή σε ένα δημόσιο Wi-Fi
# ad 5 subheading 2
ad-unit-5-email-receipts = Λήψη αποδείξεων email
ad-unit-5-share-custom-email = Μοιραστείτε μια προσαρμοσμένη μάσκα email για τις αποδείξεις αγορών σε καταστήματα, χωρίς να γνωστοποιήσετε το πραγματικό σας email
# ad 5 subheading 3
ad-unit-5-use-on-phone = Χρήση στο τηλέφωνό σας
ad-unit-5-no-matter-where = Όπου κι αν βρίσκεστε, δημιουργήστε μια προσαρμοσμένη μάσκα email σε δευτερόλεπτα για οποιαδήποτε χρήση
# ad 6 heading
ad-unit-6-worry-free = Εγγραφές χωρίς ανησυχία
ad-unit-6-want-to-start = Θέλετε να ξεκινήσετε μια νέα συνδρομή, να απαντήσετε σε μια πρόσκληση ή να λάβετε έναν εκπτωτικό κωδικό, χωρίς να «πλημμυρίσουν» τα εισερχόμενά σας με ανεπιθύμητα μηνύματα;
ad-unit-6-before-you-complete = Πριν ολοκληρώσετε την επόμενη εγγραφή, χρησιμοποιήστε μια μάσκα email αντί του πραγματικού σας, ώστε να προστατέψετε τις πληροφορίες σας και να διατηρήσετε τον έλεγχο των εισερχομένων σας

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = Επίλυση παραβιάσεων δεδομένων
site-nav-settings-link = Ρυθμίσεις
site-nav-help-link = Βοήθεια και υποστήριξη
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Δοκιμάστε τα άλλα εργαλεία ασφαλείας μας:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
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

# Obsolete
menu-button-title = Μενού χρήστη
# Obsolete
menu-button-alt = Άνοιγμα μενού χρήστη
# Obsolete
menu-list-accessible-label = Μενού λογαριασμού
# Obsolete
menu-item-fxa-2 = Διαχείριση { -brand-mozilla-account(case: "gen", capitalization: "lower") }
# Obsolete
menu-item-settings = Ρυθμίσεις
# Obsolete
menu-item-help = Βοήθεια και υποστήριξη
# Obsolete
menu-item-logout = Αποσύνδεση
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

mozilla = { -brand-Mozilla }
terms-of-service = Όροι υπηρεσίας
privacy-notice = Σημείωση απορρήτου
github = { -brand-github }
footer-nav-all-breaches = Όλες οι παραβιάσεις
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
error-page-error-other-copy = Παρακαλούμε δοκιμάστε ξανά ή επιστρέψτε αργότερα

## Breach overview page

all-breaches-headline-2 = Όλες οι παραβιάσεις που εντοπίστηκαν από το { -brand-fx-monitor }
all-breaches-lead = Παρακολουθούμε όλες τις γνωστές παραβιάσεις δεδομένων για να διαπιστώσουμε εάν τα προσωπικά σας στοιχεία παραβιάστηκαν. Ακολουθεί μια πλήρης λίστα με όλες τις παραβιάσεις που έχουν αναφερθεί από το 2007.
search-breaches = Αναζήτηση παραβιάσεων
# the kind of user data exposed to hackers in data breach.
exposed-data = Εκτεθειμένα δεδομένα:

## Public breach detail page

find-out-if-2 = Μάθετε εάν εμπλακήκατε σε αυτήν την παραβίαση
find-out-if-description = Θα σας βοηθήσουμε να δείτε γρήγορα εάν η διεύθυνση email σας αποκαλύφθηκε σε αυτήν την παραβίαση και να κατανοήσετε τι πρέπει να κάνετε στη συνέχεια.
breach-detail-cta-signup = Έλεγχος για παραβιάσεις

## Floating banner

floating-banner-text = Ενισχύστε την ασφάλειά σας στο διαδίκτυο με νέα, συμβουλές και ενημερώσεις από τη { -brand-Mozilla }.
floating-banner-link-label = Εγγραφή
floating-banner-dismiss-button-label = Όχι, ευχαριστώ

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Νέο όνομα, εμφάνιση και ακόμα περισσότεροι τρόποι <b>διεκδίκησης του απορρήτου σας</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Απόρριψη
loading-accessibility = Φόρτωση
