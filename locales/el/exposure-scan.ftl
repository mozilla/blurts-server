# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Βρήκαμε το <email>{ $email }</email> σε <count>1</count> παραβίαση δεδομένων.
       *[other] Βρήκαμε το <email>{ $email }</email> σε <count>{ $count }</count> παραβιάσεις δεδομένων.
    }
exposure-landing-result-none-footer-cta-label = Εγγραφή για ειδοποιήσεις
