# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Επιλέξτε το κουμπί "Επαλήθευση email" μέσα σε 24 ώρες για επιβεβαίωση του λογαριασμού σας στο Firefox Monitor. 
    Τότε, θα ετοιμαστεί και θα αποσταλεί η αναφορά σας.
verify-my-email = Επαλήθευση email
report-scan-another-email = Σάρωση άλλου email στο { -product-name }
automated-message = Αυτό είναι ένα αυτοματοποιημένο email· αν το λάβατε κατά λάθος, δεν απαιτείται καμία ενέργεια.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Στείλαμε αυτό το μήνυμα στο { $userEmail }, επειδή έγινε εγγραφή της διεύθυνσης email στις ειδοποιήσεις από το { -product-name }.
unsubscribe-email-link = Αν δεν επιθυμείτε πλέον ειδοποιήσεις από το { -product-name }, καταργήστε την εγγραφή σας.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Αναφορά { -product-name }
report-date = Ημερομηνία αναφοράς:
email-address = Διεύθυνση email:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Τι να κάνετε μετά
report-headline =
    { $breachCount ->
        [0] Μέχρι στιγμής, όλα καλά.
        [one] Ο λογαριασμός σας εμφανίστηκε σε { $breachCount } παραβίαση.
       *[other] Οι λογαριασμοί σας εμφανίστηκαν σε { $breachCount } παραβιάσεις.
    }
report-subhead-no-breaches =
    Ο λογαριασμό σας δεν εμφανίζεται στην πλήρη αναφορά παραβιάσεών μας. 
    Αυτά είναι καλά νέα, αλλά μπορείτε να κάνετε περισσότερα. 
    Παραβιάσεις δεδομένων μπορούν να συμβούν ανά πάσα στιγμή, γι' αυτό διαβάστε για να μάθετε πώς να προστατέψετε τους κωδικούς πρόσβασής σας.
report-subhead-found-breaches = Ορίστε η πλήρης αναφορά σας από το Firefox Monitor, η οποία συμπεριλαμβάνει όλες τις γνωστές παραβιάσεις δεδομένων που περιέχουν αυτή τη διεύθυνση email.
report-pwt-blurb =
    Οι κωδικοί πρόσβασης είναι τόσο πολύτιμοι, που χιλιάδες υποκλέπτονται κάθε μέρα και ανταλλάσσονται ή πωλούνται στη μαύρη αγορά. 
    Οι ισχυρότεροι κωδικοί πρόσβασης προστατεύουν τους λογαριασμούς σας και όλες τις προσωπικές σας πληροφορίες που περιέχουν.
report-pwt-headline-1 = Χρήση διαφορετικού κωδικού για κάθε λογαριασμό
report-pwt-summary-1 =
    Η εκ νέου χρήση του ίδιου κωδικού πρόσβασης παντού ανοίγει την πόρτα για τους hackers. 
    Μπορούν να χρησιμοποιήσουν αυτό τον κωδικό πρόσβασης για να συνδεθούν στους άλλους λογαριασμούς σας.
report-pwt-headline-2 = Δημιουργία ισχυρών, μοναδικών κωδικών
report-pwt-summary-2 =
    Οι χάκερς χρησιμοποιούν λίστες κοινών κωδικών για να μαντέψουν το δικό σας. 
    Όσο πιο μεγάλος και τυχαίος είναι ο κώδικός σας, τόσο πιο δύσκολα θα κλαπεί.
report-pwt-headline-3 = Οι ερωτήσεις ασφαλείας είναι επιπλέον κωδικοί πρόσβασης
report-pwt-summary-3 =
    Οι ιστοσελίδες δεν ελέγχουν αν οι απαντήσεις είναι ακριβείς, ελέγχουν απλά αν ταιριάζουν. 
    Δημιουργήστε μεγάλες, τυχαίες απαντήσεις και αποθηκεύστε τις σε ασφαλές μέρος.
report-pwt-headline-4 = Χρήση εφαρμογής διαχείρισης κωδικών
report-pwt-summary-4 =
    Υπηρεσίες, όπως τα 1Password, LastPass, Dashlane και Bitwarden δημιουργούν ισχυρούς κωδικούς πρόσβασης, τους αποθηκεύουν με ασφάλεια 
    και τους συμπληρώνουν στις ιστοσελίδες έτσι, ώστε να μην χρειάζεται να τους θυμάστε.
# A link to legal information about mozilla products.
legal = Νομικά
# Share Firefox Monitor by email subject line
share-by-email-subject = Δείτε αν έχετε επηρεαστεί από τη διαρροή δεδομένων.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Γεια,
    Το { -brand-name } παρέχει μια δωρεάν υπηρεσία, όπου μπορείς να ελέγξεις αν έχεις επηρεαστεί από κάποια διαρροή δεδομένων. Ορίστε πώς λειτουργεί:
    1. Πήγαινε στο { "https://monitor.firefox.com" } και αναζήτησε το email σου.
    2. Δες αν οι διαδικτυακοί σου λογαριασμοί έχουν εκτεθεί σε κάποια παραβίαση δεδομένων.
    3. Λάβε συμβουλές από το { -product-name } σχετικά με το τι να κάνεις μετά.
# Unsubscribe link in email.
email-unsub-link = Κατάργηση εγγραφής
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Προβολή πίνακα ελέγχου
# Button text
verify-email-cta = Επαλήθευση email
# Button text
see-all-breaches = Προβολή όλων των παραβιάσεων
# Headline of verification email
email-link-expires = Αυτός ο σύνδεσμος λήγει σε 24 ώρες
# Email headline
email-breach-summary-for-email = Περίληψη παραβίασης για το { $userEmail }
# Email headline
email-no-breaches-hl = Το { $userEmail } δεν εμφανίστηκε σε καμία παραβίαση δεδομένων
# Email headline
email-alert-hl = Το { $userEmail } εμφανίστηκε σε νέα παραβίαση δεδομένων
# Subject line of email
email-subject-found-breaches = Το { -product-name } βρήκε τις πληροφορίες σας σε αυτές τις παραβιάσεις
# Subject line of email
email-subject-no-breaches = Το { -product-name } δεν βρήκε γνωστές παραβιάσεις
# Subject line of email
email-subject-verify = Επαλήθευση email για το { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Μάθετε περισσότερα σχετικά με το { $fxmLink }
# List headline
faq-list-headline = Συχνές ερωτήσεις
# Link Title
faq-v2-4 = Πώς αντιμετωπίζει το { -product-name } τις ευαίσθητες ιστοσελίδες;
