exposure-landing-hero-heading = Find ud af, om dine personlige oplysninger er blevet kompromitteret.
exposure-landing-hero-email-label = Mailadresse
exposure-landing-hero-email-placeholder = Indtast en mailadresse
exposure-landing-hero-cta-label = Undersøg for datalæk
exposure-landing-result-loading = Henter, vent…
exposure-landing-result-error = Noget gik galt under søgning efter datalæk. Genindlæs siden og prøv igen.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Vi fandt <email>{ $email }</email> involveret i <count>1</count> datalæk.
       *[other] Vi fandt <email>{ $email }</email> involveret i <count>{ $count }</count> datalæk.
    }
exposure-landing-result-card-added = Datalæk tilføjet:
exposure-landing-result-card-data = Berørte data:
exposure-landing-result-card-nothing = Ingen datalæk fundet
exposure-landing-result-footer-attribution = Information om datalæk stammer fra <hibp-link>{ -brand-HIBP }</hibp-link>
exposure-landing-result-overflow-hero-cta-label = Log ind for at løse datalæk
exposure-landing-result-overflow-footer-cta-label = Log ind for at se alle
exposure-landing-result-some-hero-cta-label = Log ind for at løse datalæk
exposure-landing-result-some-footer-cta-label = Log ind for at løse datalæk
exposure-landing-result-none-hero-lead = Gode nyheder! Ingen kendte datalæk blev fundet. Vi fortsætter med at overvåge denne mailadresse og giver dig besked, hvis den optræder i en ny datalæk.
exposure-landing-result-none-hero-cta-label = Få advarsler om nye datalæk
exposure-landing-result-none-footer-cta-label = Tilmeld dig advarsler
