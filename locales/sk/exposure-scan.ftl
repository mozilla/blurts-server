exposure-landing-hero-heading = Zistite, či vaše osobné údaje neboli zneužité
exposure-landing-hero-lead = Zostaňte v bezpečí s nástrojmi na ochranu osobných údajov od tvorcov { -brand-firefox(case: "gen") }, ktoré vás chránia pred hackermi a spoločnosťami, ktoré zverejňujú a predávajú vaše osobné údaje. Upozorníme vás na všetky známe úniky údajov, nájdeme a odstránime vaše odhalené informácie a budeme neustále sledovať nové odhalenia.
exposure-landing-hero-email-label = E‑mailová adresa
exposure-landing-hero-email-placeholder = Zadajte e‑mailovú adresu
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

exposure-landing-result-card-added = Pridaný únik:
exposure-landing-result-card-data = Odhalené údaje:
exposure-landing-result-card-nothing = Neboli nájdené žiadne úniky údajov

exposure-landing-result-footer-attribution = Údaje o úniku poskytuje <hibp-link>{ -brand-HIBP }</hibp-link>

exposure-landing-result-overflow-hero-lead = Prihláste sa a získajte jasné kroky na vyriešenie týchto únikov, zobrazenie všetkých únikov a nepretržité monitorovanie akýchkoľvek nových známych únikov údajov.
exposure-landing-result-overflow-hero-cta-label = Prihláste sa a vyriešte úniky
exposure-landing-result-overflow-footer-cta-label = Ak chcete zobraziť všetky, prihláste sa

exposure-landing-result-some-hero-lead = Prihláste sa a získajte jasné kroky na vyriešenie týchto únikov, zobrazenie všetkých únikov a nepretržité monitorovanie akýchkoľvek nových známych únikov údajov.
exposure-landing-result-some-hero-cta-label = Prihláste sa a vyriešte úniky
exposure-landing-result-some-footer-cta-label = Prihláste sa a vyriešte úniky

exposure-landing-result-none-hero-lead = Dobré správy! Neboli zistené žiadne známe úniky. Zostaňte v bezpečí tým, že sa prihlásite na odber upozornení na nové úniky. Tento e‑mail budeme naďalej monitorovať a ak sa objaví v novom úniku dajov, dáme vám vedieť.
exposure-landing-result-none-hero-cta-label = Získajte upozornenia na nové úniky
exposure-landing-result-none-footer-cta-label = Prihláste sa na odber upozornení
