exposure-landing-hero-heading = Μάθετε εάν έχουν παραβιαστεί οι προσωπικές σας πληροφορίες
exposure-landing-hero-email-label = Διεύθυνση email
exposure-landing-hero-email-placeholder = Εισαγάγετε διεύθυνση email
exposure-landing-hero-cta-label = Έλεγχος για παραβιάσεις
exposure-landing-result-loading = Φόρτωση, παρακαλώ περιμένετε…
exposure-landing-result-error = Κάτι πήγε στραβά κατά τον έλεγχο για παραβιάσεις. Παρακαλούμε ανανεώστε τη σελίδα και δοκιμάστε ξανά.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Βρήκαμε το <email>{ $email }</email> σε <count>1</count> παραβίαση δεδομένων.
       *[other] Βρήκαμε το <email>{ $email }</email> σε <count>{ $count }</count> παραβιάσεις δεδομένων.
    }
exposure-landing-result-card-data = Εκτεθειμένα δεδομένα:
exposure-landing-result-card-nothing = Δεν βρέθηκαν παραβιάσεις
exposure-landing-result-footer-attribution = Τα δεδομένα παραβιάσεων παρέχονται από το <hibp-link>{ -brand-HIBP }</hibp-link>
exposure-landing-result-overflow-hero-cta-label = Συνδεθείτε για επίλυση παραβιάσεων
exposure-landing-result-overflow-footer-cta-label = Συνδεθείτε για προβολή όλων
exposure-landing-result-some-hero-cta-label = Συνδεθείτε για επίλυση παραβιάσεων
exposure-landing-result-some-footer-cta-label = Συνδεθείτε για επίλυση παραβιάσεων
exposure-landing-result-none-hero-cta-label = Λάβετε ειδοποιήσεις για νέες παραβιάσεις
exposure-landing-result-none-footer-cta-label = Εγγραφή για ειδοποιήσεις
