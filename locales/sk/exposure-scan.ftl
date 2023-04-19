exposure-landing-hero-email-label = E-mailová adresa
exposure-landing-hero-email-placeholder = Zadajte e-mailovú adresu
exposure-landing-hero-cta-label = Skontrolovať úniky
exposure-landing-result-loading = Čakajte, prebieha načítavanie…
exposure-landing-result-error = Pri kontrole únikov údajov sa vyskytla chyba. Obnovte stránku a skúste to znova.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Zistili sme, že adresa <email>{ $email }</email> bola odhalená pri <count>{ $count }</count> úniku údajov.
        [few] Zistili sme, že adresa <email>{ $email }</email> bola odhalená pri <count>{ $count }</count> únikoch údajov.
        [many] Zistili sme, že adresa <email>{ $email }</email> bola odhalená pri <count>{ $count }</count> únikoch údajov.
       *[other] Zistili sme, že adresa <email>{ $email }</email> bola odhalená pri <count>{ $count }</count> únikoch údajov.
    }
exposure-landing-result-none-footer-cta-label = Prihláste sa na odber upozornení
