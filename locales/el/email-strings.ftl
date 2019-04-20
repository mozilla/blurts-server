# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Ορίστε η πλήρης αναφορά { -product-name } σας, η οποία περιλαμβάνει όλες τις γνωστές παραβιάσεις δεδομένων που περιέχουν αυτή τη διεύθυνση email.
report-no-breaches =
    Η διεύθυνση email σας δεν εμφανίστηκε στη βάση δεδομένων μας με γνωστές παραβιάσεις. 
    Αλλά παραβιάσεις μπορούν να συμβούν ανά πάσα στιγμή. Λάβετε αυτά τα μέτρα για να προστατέψετε τα προσωπικά σας δεδομένα στο διαδίκτυο.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Τι να κάνετε μετά
report-headline =
    { $breachCount ->
        [0] Μέχρι στιγμής, όλα καλά.
        [one] Ο λογαριασμός σας εμφανίστηκε σε { $breachCount } παραβίαση.
       *[other] Οι λογαριασμοί σας εμφανίστηκαν σε { $breachCount } παραβιάσεις.
    }
breach-alert-headline = Ο λογαριασμός σας ενεπλάκη σε παραβίαση δεδομένων.
breach-alert-subhead = Μια παραβίαση δεδομένων, που αναφέρθηκε πρόσφατα, περιέχει το email σας και τα εξής δεδομένα
report-pwt-headline-1 = Χρήση διαφορετικού κωδικού για κάθε λογαριασμό
report-pwt-headline-2 = Δημιουργία ισχυρών, μοναδικών κωδικών
report-pwt-summary-2 =
    Οι χάκερς χρησιμοποιούν λίστες κοινών κωδικών για να μαντέψουν το δικό σας. 
    Όσο πιο μεγάλος και τυχαίος είναι ο κώδικός σας, τόσο πιο δύσκολα θα κλαπεί.
report-pwt-headline-3 = Οι ερωτήσεις ασφαλείας είναι επιπλέον κωδικοί πρόσβασης
report-pwt-summary-3 =
    Οι ιστοσελίδες δεν ελέγχουν αν οι απαντήσεις είναι ακριβείς, ελέγχουν απλά αν ταιριάζουν. 
    Δημιουργήστε μεγάλες, τυχαίες απαντήσεις και αποθηκεύστε τις σε ασφαλές μέρος.
report-pwt-headline-4 = Χρήση εφαρμογής διαχείρισης κωδικών
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
