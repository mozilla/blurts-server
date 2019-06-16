# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Λογαριασμός Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Υποστήριξη
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Σχετικά με τις ειδοποιήσεις του Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Αποστολή σχολίων
terms-and-privacy = Όροι και απόρρητο
error-scan-page-token = Προσπαθήσατε να σαρώσετε πάρα πολλές διευθύνσεις email σε μικρό χρονικό διάστημα. Για λόγους ασφαλείας, σάς έχουμε αποκλείσει προσωρινά από νέες αναζητήσεις. Θα μπορέσετε να δοκιμάσετε ξανά αργότερα.
error-could-not-add-email = Αδυναμία προσθήκης διεύθυνσης email στη βάση δεδομένων.
error-not-subscribed = Αυτή η διεύθυνση email δεν έχει εγγραφεί στο { -product-name }.
error-hibp-throttled = Πάρα πολλές συνδέσεις στο { -brand-HIBP }.
error-hibp-connect = Σφάλμα σύνδεσης στο { -brand-HIBP }.
error-hibp-load-breaches = Αδυναμία φόρτωσης διαρροών.
error-must-be-signed-in = Πρέπει να συνδεθείτε στο { -brand-fxa } σας.
home-title = { -product-name }
home-not-found = Η σελίδα δεν βρέθηκε.
oauth-invalid-session = Άκυρη συνεδρία
oauth-confirmed-title = { -product-name } : Έχετε εγγραφεί
scan-title = { -product-name } : Αποτελέσματα σάρωσης
user-add-invalid-email = Άκυρο email
user-add-email-verify-subject = Επαληθεύστε τη συνδρομή σας στο { -product-name }.
user-add-title = { -product-name } : Επιβεβαίωση email
error-headline = Σφάλμα
user-verify-token-error = Απαιτείται διακριτικό επαλήθευσης.
user-verify-email-report-subject = Η αναφορά σας για το { -product-name }
user-verify-title = { -product-name } : Έχετε εγγραφεί
user-unsubscribe-token-error = Η κατάργηση εγγραφής απαιτεί token.
user-unsubscribe-token-email-error = Η κατάργηση εγγραφής απαιτεί token και emailHash.
user-unsubscribe-title = { -product-name } : Κατάργηση εγγραφής
user-unsubscribe-survey-title = { -product-name }: Έρευνα κατάργησης εγγραφής
user-unsubscribed-title = { -product-name } : Έγινε κατάργηση εγγραφής

## Password Tips

pwt-section-headline = Ισχυρότεροι κωδικοί πρόσβασης = Καλύτερη προστασία
pwt-section-subhead = Οι ιδιωτικές σας πληροφορίες είναι ασφαλείς όσο και ο κωδικός πρόσβασής σας.
pwt-section-blurb =
    Οι κωδικοί πρόσβασής σας προστατεύουν περισσότερα πέρα από τους λογαριασμούς σας. Προστατεύουν κάθε bit προσωπικής πληροφορίας μέσα σε αυτούς. 
    Και οι hackers βασίζονται σε κακές συνήθειες, όπως η χρήση του ίδιου κωδικού πρόσβασης παντού ή η χρήση κοινών φράσεων (όπως kwd!k0$) έτσι, 
    ώστε να παραβιάσουν περισσότερους λογαριασμούς, αν τυχόν διαρρήξουν έναν. Ορίστε πώς να προστατέψετε καλύτερα τους λογαριασμούς σας.
pwt-headline-1 = Χρήση διαφορετικού κωδικού για κάθε λογαριασμό
pwt-summary-1 =
    Η χρήση του ίδιου κωδικού παντού, αφήνει ανοικτή την πόρτα στην κλοπή ταυτότητας. 
    Όποιος έχει τον κωδικό σας μπορεί να συνδεθεί σε όλους τους λογαριασμούς σας.
pwt-headline-2 = Δημιουργία ισχυρών κωδικών που δεν μαντεύονται εύκολα
pwt-summary-2 =
    Οι χάκερς χρησιμοποιούν χιλιάδες κοινούς κωδικούς για να μαντέψουν το δικό σας. 
    Όσο πιο μεγάλος και τυχαίος είναι ο κώδικός σας, τόσο πιο δύσκολα θα μαντευθεί.
pwt-headline-3 = Οι ερωτήσεις ασφαλείας είναι επιπλέον κωδικοί πρόσβασης
pwt-summary-3 =
    Οι ιστοσελίδες δεν ελέγχουν αν οι απαντήσεις είναι ακριβείς, ελέγχουν απλά αν ταιριάζουν. 
    Δημιουργήστε μεγάλες, τυχαίες απαντήσεις και αποθηκεύστε τις σε ασφαλές μέρος.
pwt-headline-4 = Λήψη βοήθειας για την απομνημόνευση κωδικών
pwt-summary-4 = Εφαρμογές όπως τα 1Password, LastPass, Dashlane & Bitwarden παράγουν ισχυρούς, μοναδικούς κωδικούς, που αποθηκεύουν με ασφάλεια και συμπληρώνουν για εσάς.
pwt-headline-5 = Επιπρόσθετη ασφάλεια με ταυτοποίηση δύο παραγόντων
pwt-summary-5 =
    Η μέθοδος αυτή απαιτεί επιπλέον πληροφορίες (όπως κωδικός μιας χρήσης μέσω μηνύματος) για σύνδεση. 
    Ακόμη κι αν έχει κάποιος τον κωδικό σας, δεν μπορεί να συνδεθεί.
pwt-headline-6 = Συνδρομή στις ειδοποιήσεις του { -product-name-nowrap }
pwt-summary-6 =
    Οι παραβιάσεις δεδομένων αυξάνονται. Όταν ανανεώνεται η βάση δεδομένων μας, 
    το { -product-name-nowrap } σάς ειδοποιεί ώστε να προστατέψετε το λογαριασμό σας.
landing-headline = Το δικαίωμά σας για προστασία από χάκερς ξεκινά εδώ.
landing-blurb =
    Το { -product-name-nowrap } σάς οπλίζει με εργαλεία για να προστατέψετε τις προσωπικές σας πληροφορίες. 
    Μάθετε τι ξέρουν ήδη για εσάς οι χάκερς και μάθετε πώς να είστε ένα βήμα πιο μπροστά από αυτούς.
scan-label = Δείτε αν έχουν παραβιαστεί τα δεδομένα σας.
scan-placeholder = Εισάγετε διεύθυνση email
scan-privacy = Το email σας δεν θα αποθηκευτεί.
scan-submit = Αναζήτηση email
scan-another-email = Σάρωση άλλης διεύθυνσης email
scan-featuredbreach-label = Μάθετε αν ο λογαριασμός <span class="bold"> { $featuredBreach } </span> σας έχει παραβιαστεί.
sensitive-breach-email-required = Η παραβίαση περιέχει ευαίσθητες πληροφορίες. Απαιτείται επαλήθευση email.
scan-error = Πρέπει να είναι ένα έγκυρο email.
signup-banner-headline = Το { -product-name-nowrap } ανιχνεύει απειλές ενάντια στους διαδικτυακούς σας λογαριασμούς.
signup-banner-blurb =
    Η λεπτομερής σας αναφορά από το { -product-name-nowrap } δείχνει αν οι πληροφορίες των διαδικτυακών σας λογαριασμών έχουν διαρρεύσει ή κλαπεί. 
    Επίσης, θα σάς ειδοποιήσουμε αν οι λογαριασμοί σας εμφανιστούν σε νέες διαρροές ιστοσελίδων.
download-firefox-bar-blurb = Το { -product-name-nowrap } προσφέρεται σε εσάς από το <span class="nowrap">ολοκαίνουριο { -brand-name }</span>.
download-firefox-bar-link = Λήψη του { -brand-name } τώρα
download-firefox-banner-blurb = Ελέγξτε το πρόγραμμα περιήγησής σας
download-firefox-banner-button = Λήψη του { -brand-name }
signup-modal-headline = Εγγραφή στο { -product-name-nowrap }
signup-modal-blurb = Εγγραφείτε για να λαμβάνετε τις πλήρεις αναφορές σας, ειδοποιήσεις όταν συμβαίνουν νέες παραβιάσεις και συμβουλές ασφαλείας από το { -product-name-nowrap }.
signup-modal-close = Κλείσιμο
get-your-report = Λήψη αναφοράς
signup-modal-verify-headline = Επαλήθευση συνδρομής
signup-modal-verify-blurb = Έχουμε στείλει ένα σύνδεσμο επαλήθευσης στο <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Αυτός ο σύνδεσμος λήγει σε 24 ώρες.
signup-modal-verify-resend = Δεν είναι στα εισερχόμενα ή στα ανεπιθύμητα; Νέα αποστολή.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Απεστάλη!
signup-with-fxa = Εγγραφή με Λογαριασμό { -brand-name }
form-signup-placeholder = Εισάγετε email
form-signup-checkbox = Λήψη ειδήσεων από τη { -brand-Mozilla } και το { -brand-name }.
sign-up = Εγγραφή
form-signup-error = Πρέπει να είναι ένα έγκυρο email
no-breaches-headline = Μέχρι στιγμής, όλα καλά.
found-breaches-headline = Οι πληροφορίες σας έχουν παραβιαστεί.
no-breaches =
    Η διεύθυνση email σας δεν εμφανίστηκε στη βασική σάρωση. 
    Αυτό είναι καλό, αλλά παραβιάσεις δεδομένων μπορούν να συμβούν οποτεδήποτε. Εσείς μπορείτε να κάνετε πολλά ακόμη. 
    Εγγραφείτε στο { -product-name-nowrap } για αναφορές, ειδοποιήσεις νέων διαρροών και συμβουλές προστασίας κωδικών.
featured-breach-results =
    { $breachCount ->
        [0] Ο λογαριασμός σας εμφανίστηκε στην παραβίαση <span class="bold">{ $featuredBreach }</span>, αλλά δεν εμφανίστηκε σε καμία άλλη γνωστή παραβίαση δεδομένων.
        [one] Ο λογαριασμός σας εμφανίστηκε στην παραβίαση <span class="bold">{ $featuredBreach }</span>, καθώς και σε μία ακόμη παραβίαση.
       *[other] Ο λογαριασμός σας εμφανίστηκε στην παραβίαση <span class="bold">{ $featuredBreach }</span>, καθώς και άλλες { $breachCount } παραβιάσεις.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Ο λογαριασμός σας δεν εμφανίστηκε στην παραβίαση <span class="bold">{ $featuredBreach }</span>, αλλά εμφανίστηκε σε κάποια άλλη παραβίαση.
       *[other] Ο λογαριασμός σας δεν εμφανίστηκε στην παραβίαση <span class="bold">{ $featuredBreach }</span>, αλλά εμφανίστηκε σε άλλες { $breachCount } παραβιάσεις.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Ο λογαριασμός σας εμφανίστηκε σε { $breachCount } παραβίαση.
       *[other] Λογαριασμοί που σχετίζονται με τη διεύθυνση email σας εμφανίστηκαν στις εξής { $breachCount } παραβιάσεις.
    }
show-more-breaches = Εμφάνιση περισσότερων
what-to-do-headline = Τι να κάνετε όταν εκτεθούν οι πληροφορίες σας σε μια παραβίαση δεδομένων
what-to-do-subhead-1 = Αλλάξτε τους κωδικούς πρόσβασής σας, ακόμη και για παλαιούς λογαριασμούς
what-to-do-blurb-1 =
    Αν δεν μπορείτε να συνδεθείτε, επικοινωνήστε με την ιστοσελίδα για να ρωτήσετε πώς μπορείτε να ανακτήσετε ή να καταργήσετε το λογαριασμό. 
    Βλέπετε έναν άγνωστο λογαριασμό; Η ιστοσελίδα ίσως έχει αλλάξει τα ονόματα ή κάποιος ίσως έχει δημιουργήσει ένα λογαριασμό για εσάς.
what-to-do-subhead-2 = Αν χρησιμοποιείτε έναν κωδικό πρόσβασης κάπου αλλού, αλλάξτε τον
what-to-do-blurb-2 =
    Οι hackers ίσως προσπαθήσουν να χρησιμοποιήσουν τον εκτεθειμένο κωδικό πρόσβασής σας για να εισβάλλουν σε άλλους λογαριασμούς. 
    Δημιουργήστε διαφορετικούς κωδικούς πρόσβασης για κάθε ιστοσελίδα, ειδικά τον τραπεζικό σας λογαριασμό, 
    το email σας και άλλες ιστοσελίδες όπου αποθηκεύετε προσωπικές πληροφορίες.
what-to-do-subhead-3 = Λάβετε επιπρόσθετα μέτρα ασφάλισης των οικονομικών σας λογαριασμών
what-to-do-blurb-3 =
    Οι περισσότερες παραβιάσεις εκθέτουν μόνο emails και κωδικούς πρόσβασης, αλλά μερικές περιλαμβάνουν ευαίσθητες οικονομικές πληροφορίες. 
    Αν ο τραπεζικός σας λογαριασμός ή οι αριθμοί πιστωτικών καρτών συμπεριληφθούν σε μια παραβίαση, ενημερώστε την τράπεζά σας για πιθανή απάτη 
    και παρακολουθήστε τις χρεώσεις που δεν αναγνωρίζετε.
what-to-do-subhead-4 = Λάβετε βοήθεια για τη δημιουργία και την προστασία καλών κωδικών πρόσβασης.
what-to-do-blurb-4 =
    Οι εφαρμογές διαχείρισης κωδικών πρόσβασης, όπως τα 1Password, LastPass, Dashlane και Bitwarden δημιουργούν ισχυρούς κωδικούς πρόσβασης, 
    τους αποθηκεύουν με ασφάλεια και τους συμπληρώνουν στις ιστοσελίδες.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Ημερομηνία παραβίασης:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Παραβιασμένοι λογαριασμοί:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Παραβιασμένα δεδομένα:
confirmed = Επιβεβαιώθηκε!<br />Έχετε εγγραφεί!
confirmed-blurb = Το { -product-name-nowrap } θα σάς στείλει σύντομα μια πλήρη αναφορά μέσω email και θα σάς ειδοποιήσει αν ο λογαριασμός σας εμφανιστεί σε μια νέα παραβίαση.
confirmed-social-blurb = Αν έχει παραβιαστεί ο λογαριασμός σας, είναι πολύ πιθανό να έχει συμβεί το ίδιο και στους φίλους, τους συγγενείς ή τις διαδικτυακές συνδέσεις σας. Ενημερώστε τους σχετικά με το { -product-name-nowrap }.
unsub-headline = Κατάργησης εγγραφής από το { -product-name-nowrap }
unsub-blurb = Το email σας θα αφαιρεθεί από τη λίστα του { -product-name-nowrap } και δεν θα λαμβάνετε πλέον ειδοποιήσεις όταν ανακοινώνονται νέες παραβιάσεις.
unsub-button = Κατάργηση εγγραφής
fxa-unsub-headline = Κατάργηση εγγραφής από τις ειδοποιήσεις του { -product-name }.
fxa-unsub-blurb =
    Δεν θα λαμβάνετε πλέον ειδοποιήσεις του { -product-name }. 
    Ο { -brand-fxa } σας θα παραμείνει ενεργός και θα λαμβάνετε άλλα 
    μηνύματα σχετικά με το λογαριασμό σας.
unsub-survey-form-label = Γιατί κάνετε κατάργηση εγγραφής από τις ειδοποιήσεις του { -product-name-nowrap };
unsub-reason-1 = Νομίζω ότι οι ειδοποιήσεις δεν κάνουν τα δεδομένα μου πιο ασφαλή
unsub-reason-2 = Λαμβάνω πάρα πολλά emails από το { -product-name-nowrap }
unsub-reason-3 = Δεν βρίσκω χρήσιμη αυτή την υπηρεσία
unsub-reason-4 = Έχω ήδη λάβει μέτρα για να προστατεύσω τους λογαριασμούς μου
unsub-reason-5 = Χρησιμοποιώ άλλη υπηρεσία για την εποπτεία των λογαριασμών μου
unsub-reason-6 = Κανένα από τα παραπάνω
unsub-survey-thankyou = Ευχαριστούμε για τα σχόλιά σας.
unsub-survey-error = Παρακαλούμε επιλέξτε ένα.
unsub-survey-headline-v2 = Έχετε καταργήσει την εγγραφή σας.
unsub-survey-blurb-v2 =
    Δεν θα λαμβάνετε πλέον ειδοποιήσεις του { -product-name }. 
    Θα αφιερώσετε λίγο χρόνο για να απαντήσετε μια ερώτηση σχετικά με την εμπειρία σας;
unsub-survey-button = Υποβολή απάντησης
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Κοινοποίηση
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Λήψη του { -brand-Quantum }
download-firefox-mobile = Λήψη του { -brand-name } για κινητά
# Features here refers to Firefox browser features. 
features = Χαρακτηριστικά
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Δεδομένα παραβίασης από το { $hibp-link }
site-description = Έχουν διαρρεύσει ή κλαπεί οι λογαριασμοί σας σε κάποια παραβίαση δεδομένων; Μάθετε στο { -product-name }. Αναζητήστε τη βάση δεδομένων μας και εγγραφείτε για ειδοποιήσεις.
confirmation-headline = Η αναφορά σας από το { -product-name } έρχεται.
confirmation-blurb = Οι παραβιάσεις δεδομένων μπορούν να επηρεάσουν οποιονδήποτε. Διαδώστε τα νέα, ώστε οι φίλοι και οι συγγενείς σας να μπορέσουν να ελέγξουν αν είναι ασφαλείς οι διαδικτυακοί τους λογαριασμοί.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Άλλο
share-twitter = Οι περισσότεροι άνθρωποι έχουν περίπου 100 διαδικτυακούς λογαριασμούς. Έχει εκτεθεί κάποιος από τους δικούς σας σε παραβίαση δεδομένων; Μάθετε.
share-facebook-headline = Μάθετε αν υπήρξατε θύμα της παραβίασης δεδομένων
share-facebook-blurb = Έχουν εκτεθεί οι διαδικτυακοί σας λογαριασμοί σε παραβίαση δεδομένων;
og-site-description = Μάθετε αν υπήρξατε θύμα παραβίασης δεδομένων με το { -product-name }. Εγγραφείτε για ειδοποιήσεις σχετικά με μελλοντικές παραβιάσεις και λάβετε συμβουλές για να προστατέψετε τους λογαριασμούς σας.
mozilla-security-blog = Ιστολόγιο ασφαλείας { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Κοινωνικά δίκτυα
show-all = Προβολή όλων
fxa-landing-blurb =
    Ανακαλύψτε τι γνωρίζουν ήδη οι hackers για εσάς
    και μάθετε πώς να είστε πάντα ένα βήμα μπροστά τους.
fxa-scan-label = Δείτε αν έχετε εμφανιστεί σε κάποια διαρροή δεδομένων.
fxa-welcome-headline = Καλώς ορίσατε στο { -product-name }.
fxa-welcome-blurb = Όλα έτοιμα. Θα λάβετε ειδοποιήσεις αν το { $userEmail } εμφανιστεί σε παραβίαση δεδομένων.
fxa-scan-another-email = Θέλετε να ελέγξετε άλλο email;
# Search Firefox Monitor
fxa-scan-submit = Αναζήτηση { -product-name }
sign-up-to-check = Εγγραφείτε για έλεγχο
sign-in = Σύνδεση
sign-out = Αποσύνδεση
full-report-headline = Η αναφορά { -product-name } σας
see-full-report = Προβολή πλήρους αναφοράς
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Διαχείριση { -brand-fxa }
fxa-download-firefox-bar-blurb = Προσφέρεται από το { -brand-name }. 2x ταχύτερο. Χρησιμοποιεί 30% λιγότερη μνήμη από το { -brand-Chrome }.
fxa-download-firefox-bar-link = Λήψη τώρα
fxa-download-firefox-banner-blurb = Καλύτερη, ταχύτερη φόρτωση σελίδων που χρησιμοποιεί λιγότερη μνήμη υπολογιστή.
user-fb-compromised-headline = Το { $userEmail } εμφανίστηκε στην παραβίαση δεδομένων { $breachName }.
guest-fb-compromised-headline = Αυτό το email εμφανίστηκε στην παραβίαση δεδομένων { $breachName }.
user-zero-breaches-headline = Το { $userEmail } δεν εμφανίστηκε σε καμία παραβίαση δεδομένων.
guest-zero-breaches-headline = Αυτό το email δεν εμφανίστηκε σε καμία παραβίαση δεδομένων.
user-scan-results-headline =
    { $breachCount ->
        [one] Το { $userEmail } εμφανίστηκε σε 1 παραβίαση δεδομένων.
       *[other] Το { $userEmail } εμφανίστηκε σε { $breachCount } παραβιάσεις δεδομένων.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Αυτό το email εμφανίστηκε σε 1 παραβίαση δεδομένων.
       *[other] Αυτό το email εμφανίστηκε σε { $breachCount } παραβιάσεις δεδομένων.
    }
user-no-breaches-blurb = Θα σάς ειδοποιήσουμε αν αυτή η διεύθυνση email εμφανιστεί σε νέα διαρροή.
guest-no-breaches-blurb =
    Για να δείτε αν αυτό το email εμφανίζεται σε ευαίσθητες παραβιάσεις, δημιουργήστε ένα { -brand-fxa }.
    Θα σάς ειδοποιήσουμε αν αυτή η διεύθυνση εμφανιστεί σε νέες παραβιάσεις δεδομένων.
user-one-breach-blurb = Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Το email σας εμφανίστηκε επίσης σε { $breachCount } ακόμη παραβίαση.
       *[other] Το email σας εμφανίστηκε επίσης σε { $breachCount } ακόμη παραβιάσεις.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Αυτό το email εμφανίστηκε επίσης σε { $breachCount } ακόμη παραβίαση.
       *[other] Αυτό το email εμφανίστηκε επίσης σε { $breachCount } ακόμη παραβιάσεις.
    }
user-fb-compromised-single =
    Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες. Αν δεν το έχετε κάνει ήδη, 
    αλλάξτε τους κωδικούς πρόσβασής σας.
user-generic-fb-compromised-single = Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες.
guest-fb-compromised-single-v2 =
    Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες. 
    Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων παραβιάσεων 
    και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Αυτό το email εμφανίστηκε επίσης σε άλλη { $breachCount } παραβίαση. Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων παραβιάσεων 
            και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
       *[other]
            Αυτό το email εμφανίστηκε επίσης σε άλλες { $breachCount } παραβιάσεις. Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων παραβιάσεων 
            και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Δεν ήσασταν στην παραβίαση { $breachName }, αλλά βρήκαμε αυτή τη διεύθυνση email σε κάποια άλλη.
       *[other] Δεν ήσασταν στην παραβίαση { $breachName }, αλλά βρήκαμε αυτή τη διεύθυνση email σε άλλες.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Αυτό το email δεν ήταν στην παραβίαση { $breachName }, αλλά βρέθηκε σε μια άλλη.
       *[other] Αυτό το email δεν ήταν στην παραβίαση { $breachName }, αλλά βρέθηκε σε άλλες.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Αυτό το email δεν ήταν στην παραβίαση { $breachName }, αλλά βρέθηκε σε κάποια άλλη. 
            Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων 
            παραβιάσεων και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
       *[other]
            Αυτό το email δεν ήταν στην παραβίαση { $breachName }, αλλά βρέθηκε σε άλλες. 
            Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων 
            παραβιάσεων και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες. Αν δεν το έχετε κάνει ήδη, αλλάξτε τον κωδικό πρόσβασής σας.
       *[other] Αυτές οι παραβιάσεις εξέθεσαν τις εξής προσωπικές πληροφορίες. Αν δεν το έχετε κάνει ήδη, αλλάξτε τους κωδικούς πρόσβασής σας.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Αυτή η παραβίαση εξέθεσε τις εξής προσωπικές πληροφορίες.
       *[other] Αυτές οι παραβιάσεις εξέθεσαν τις εξής προσωπικές πληροφορίες.
    }
have-an-account = Έχετε ήδη λογαριασμό;
signup-banner-sensitive-blurb =
    Μάθετε τι γνωρίζουν ήδη οι hackers για εσάς και μάθετε πώς να 
    βρίσκεστε πάντα ένα βήμα μπροστά τους. Ειδοποιηθείτε αν ο λογαριασμός σας εμφανίζεται 
    σε νέες παραβιάσεις δεδομένων.
fxa-pwt-section-blurb =
    Οι κωδικοί πρόσβασης προστατεύουν όλες τις προσωπικές σας πληροφορίες στους διαδικτυακούς λογαριασμούς σας. 
    Και οι hackers βασίζονται σε κακές συνήθειες, όπως η χρήση του ίδιου κωδικού πρόσβασης παντού ή η χρήση κοινών φράσεων (όπως kwd!k0$) έτσι, ώστε να παραβιάσουν περισσότερους λογαριασμούς, 
    αν τυχόν διαρρήξουν έναν.
fxa-pwt-summary-2 =
    Οι σύντομοι, μονολεκτικοί κωδικοί πρόσβασης μαντεύονται εύκολα από τους hackers.
    Χρησιμοποιήστε τουλάχιστον δύο λέξεις και ένα συνδυασμό γραμμάτων, ψηφίων και ειδικών χαρακτήρων.
fxa-pwt-summary-4 =
    Οι εφαρμογές διαχείρισης κωδικών πρόσβασης, όπως τα 1Password, LastPass, Dashlane και Bitwarden αποθηκεύουν τους 
    κωδικούς πρόσβασής σας και τους συμπληρώνουν στις ιστοσελίδες. Ακόμη, θα σάς βοηθήσουν να δημιουργήσετε πιο ισχυρούς κωδικούς πρόσβασης.
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
    Οι περισσότερες παραβιάσεις εκθέτουν μόνο emails και κωδικούς πρόσβασης, αλλά μερικές περιλαμβάνουν ευαίσθητες οικονομικές πληροφορίες. 
    Αν ο τραπεζικός σας λογαριασμός ή οι αριθμοί πιστωτικών καρτών εκτέθηκαν, ενημερώστε την τράπεζά σας για πιθανή απάτη.
    Παρακολουθήστε τις χρεώσεις που δεν αναγνωρίζετε.
fxa-what-to-do-subhead-4 = Λάβετε βοήθεια με την απομνημόνευση και την προστασία όλων των κωδικών πρόσβασής σας.
fxa-what-to-do-blurb-4 =
    Οι εφαρμογές διαχείρισης κωδικών πρόσβασης, όπως τα 1Password, LastPass, Dashlane και Bitwarden αποθηκεύουν τους 
    κωδικούς πρόσβασής σας με ασφάλεια και τους συμπληρώνουν στις ιστοσελίδες. Χρησιμοποιήστε μια εφαρμογή διαχείρισης κωδικών πρόσβασης 
    στο τηλέφωνο και τον υπολογιστή σας έτσι, ώστε να μην χρειάζεται να τους θυμάστε όλους.
fb-landing-headline = Εκτέθηκαν οι πληροφορίες σας στη διαρροή δεδομένων { $breachName };
copyright = Μέρη αυτού του περιεχομένου υπόκεινται σε πνευματικά δικαιώματα © 1999-{ $year } από εθελοντές του mozilla.org.
content-available = Περιεχόμενο διαθέσιμο υπό την άδεια Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Εγγραφή για ειδοποιήσεις
sign-up-for-fxa-alerts = Εγγραφή για ειδοποιήσεις του { -product-name }.
create-free-account =
    Δημιουργήστε ένα δωρεάν { -brand-fxa } για μια πλήρη αναφορά προηγούμενων παραβιάσεων, ειδοποιήσεις νέων 
    παραβιάσεων και πληροφορίες σχετικά με άλλες υπηρεσίες της { -brand-Mozilla }.
get-your-report-and-sign-up = Λάβετε την αναφορά σας και εγγραφείτε για ειδοποιήσεις.
# Link title
frequently-asked-questions = Συχνές ερωτήσεις
about-firefox-monitor = Σχετικά με το { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Προτιμήσεις
# Link title.
home = Αρχική
# Link title
breaches = Παραβιάσεις
# Link title
security-tips = Συμβουλές ασφαλείας
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Άνοιγμα πλοήγησης { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ΠΡΟΣΤΕΘΗΚΕ Η ΤΕΛΕΥΤΑΙΑ ΔΙΑΡΡΟΗ
# Link title
more-about-this-breach = Σχετικά με αυτή τη διαρροή
take-control = Ανακτήστε τον έλεγχο των προσωπικών σας δεδομένων.
read-more-tips = Διαβάστε περισσότερες συμβουλές ασφαλείας
monitor-several-emails = Εποπτεία πολλών emails
website-breach = Διαρροή ιστοσελίδας
website-breach-plural = Διαρροές ιστοσελίδας
sensitive-breach-plural = Ευαίσθητες διαρροές
what-data = Ποια δεδομένα παραβιάστηκαν:
sensitive-sites = Πώς αντιμετωπίζει το { -product-name } τις ευαίσθητες ιστοσελίδες;
about-fxm-headline = Σχετικά με το { -product-name }
# How Firefox Monitor works
how-fxm-works = Πώς λειτουργεί το { -product-name }

## What to do after data breach tips

change-pw = Αλλαγή κωδικού πρόσβασης
sign-up-for-fxa = Δημιουργία { -brand-fxa }
check-for-breaches = Έλεγχος για παραβιάσεις
back-to-top = Πίσω στην κορυφή
stop-monitoring-this = Διακοπή εποπτείας αυτού του email.
add-new-email = Προσθήκη νέας διεύθυνσης email
send-verification = Αποστολή συνδέσμου επαλήθευσης
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Περίληψη παραβίασης
link-change-primary = Αλλαγή πρωτεύουσας διεύθυνσης email
remove-fxm = Αφαίρεση { -product-name }
manage-email-addresses = Διαχείριση διευθύνσεων email
latest-breach-link = Δείτε αν εμπλέκεστε σε αυτή τη διαρροή
welcome-back = Καλώς ορίσατε και πάλι, { $userName }!
welcome-user = Καλώς ορίσατε, { $userName }!
faq1 = Δεν αναγνωρίζω αυτή την εταιρεία ή ιστοσελίδα. Γιατί είμαι σε αυτή την παραβίαση;
faq2 = Γιατί πέρασε τόσος καιρός μέχρι να ενημερωθώ για αυτή την παραβίαση;
faq3 = Πώς ξέρω αν αυτό είναι ένα γνήσιο email από το { -product-name };
new-breaches-found =
    { $breachCount ->
        [one] ΒΡΕΘΗΚΕ { $breachCount } ΝΕΑ ΠΑΡΑΒΙΑΣΗ
       *[other] ΒΡΕΘΗΚΑΝ { $breachCount } ΝΕΕΣ ΠΑΡΑΒΙΑΣΕΙΣ
    }
fb-not-comp = Αυτό το email δεν εμφανίστηκε στην παραβίαση { $breachName }.
fb-comp-only = Αυτό το email εμφανίστηκε στην παραβίαση { $breachName }.
no-results-blurb = Λυπούμαστε, αυτή η παραβίαση δεν είναι στη βάση δεδομένων μας.
all-breaches-headline = Όλες οι παραβιάσεις στο { -product-name }
search-breaches = Αναζήτηση παραβιάσεων
# "Appears in-page as: Showing: All Breaches"
currently-showing = Εμφάνιση:
all-breaches = Όλες οι παραβιάσεις

## Updated error messages

login-link-pre = Έχετε λογαριασμό;
login-link = Σύνδεση
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Αποτελέσματα για: { $userEmail }
other-monitored-emails = Άλλα εποπτευμένα emails
email-verification-required = Απαιτείται επαλήθευση email
fxa-primary-email = Email του { -brand-fxa } - Πρωτεύον
see-if-youve-been-part = Δείτε αν έχετε εμπλακεί σε διαρροή δεδομένων στο διαδίκτυο.
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Πρόσθετες πληροφορίες, όπως:
# Title
email-addresses-title = Διευθύνσεις email
# Title appearing on the Preferences dashboard. 
monitor-preferences = Προτιμήσεις { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Σε σύνδεση ως: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Φιλτράρισμα κατά κατηγορία:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Μενού
# Link title
learn-more-link = Μάθετε περισσότερα.
email-sent = Απεστάλη email!
# Form title
want-to-add = Θέλετε να προσθέσετε ένα άλλο email;
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Διαχείριση όλων των διευθύνσεων email στις { $preferencesLink }.
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Προστέθηκε διαρροή:
