# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Support
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Om advarsler i Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Giv feedback
error-hibp-connect = Kan ikke forbinde til { -brand-HIBP }.
home-title = { -product-name }
home-not-found = Side ikke fundet.
oauth-invalid-session = Ugyldig session
oauth-confirmed-title = { -product-name } : Tilmeldt
scan-title = { -product-name } : Skanningsresultater
error-headline = Fejl
user-verify-email-report-subject = Din { -product-name }-rapport
user-verify-title = { -product-name } : Tilmeldt
user-unsubscribe-title = { -product-name } : Afmeld
user-unsubscribed-title = { -product-name } : Afmeldt

## Password Tips

pwt-section-headline = Stærkere adgangskoder = Bedre beskyttelse
pwt-headline-2 = Brug stærke adgangskoder, der er svære at gætte
pwt-summary-2 =
    Hackere prøver tusindvis af almindelige adgangskoder for at gætte din.
    Jo længere og mere tilfældigt din et, desto sværere vil den være at gætte.
pwt-headline-4 = Få hjælp til at huske dine adgangskoder
pwt-headline-6 = Tilmeld dig { -product-name-nowrap }-advarsler
landing-headline = Din beskyttelse mod hackere begynder her.
scan-placeholder = Indtast en mailadresse
scan-submit = Søg efter din mailadresse
scan-another-email = Skan en anden mailadresse
scan-error = Mailadressen skal være gyldig.
download-firefox-bar-blurb = { -product-name-nowrap } præsenteres af den <span class="nowrap">nye { -brand-name }</span>.
download-firefox-bar-link = Hent { -brand-name } nu
download-firefox-banner-blurb = Tag kontrollen over din browser
download-firefox-banner-button = Hent { -brand-name }
signup-modal-headline = Tilmeld dig { -product-name-nowrap }
signup-modal-blurb = Tilmeld dig for at se den fulde rapport, få advarsler om nye data-lækager og for at få tips om sikkerhed fra { -product-name-nowrap }.
signup-modal-close = Luk
signup-modal-verify-headline = Bekræft din tilmelding
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sendt!
form-signup-placeholder = Indtast en mailadresse
sign-up = Tilmeld dig
no-breaches-headline = Så langt, så godt.
featured-breach-results =
    { $breachCount ->
        [0] Din konto optræder i datalækagen <span class="bold">{ $featuredBreach }</span>, men ikke i andre kendte datalækager.
        [one] Din konto optræder i datalækagen <span class="bold">{ $featuredBreach }</span> samt en anden datalækage.
       *[other] Din konto optræder i datalækagen <span class="bold">{ $featuredBreach }</span> samt i { $breachCount } andre datalækager.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Din konto optræder ikke i datalækagen <span class="bold">{ $featuredBreach }</span>, men findes i en anden datalækage.
       *[other] Din konto optræder ikke i datalækagen <span class="bold">{ $featuredBreach }</span>, men findes i { $breachCount } andre datalækager.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Din konto optræder i { $breachCount } datalækage.
       *[other] Konti associeret med din mailadresse optræder i de følgende { $breachCount } datalækager.
    }
show-more-breaches = Vis flere
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dato for datalækage:
confirmed = Bekræftet!<br />Du er nu tilmeldt!
confirmed-blurb = { -product-name-nowrap } sender dig snart en mail med en fuldstændig rapport. Du får også tilsendt en mail, hvis din konto optræder i nye datalækager.
confirmed-social-blurb = Hvis din konto har været involveret i en datalækage, så er der stor risiko for, at dine venner, net-bekendtskaber og din familie også er blevet ramt. Fortæl dem om { -product-name-nowrap }.
unsub-headline = Afmeld { -product-name-nowrap }
unsub-blurb = Dette vil fjerne din mailadresse fra { -product-name-nowrap }s database, og du vil ikke længere modtage advarsler, når nye datalækager opdages.
unsub-button = Stop abonnement
unsub-survey-headline = Du er ikke længere tilmeldt.
unsub-survey-blurb =
    Din mailadresse er nu frameldt { -product-name-nowrap }. Mange tak for at du brugte tjenesten. 
    Har du tid og lyst til at besvare et enkelt spørgsmål om din oplevelse?
unsub-survey-form-label = Hvorfor har du frameldt dig advarsler fra { -product-name-nowrap }?
unsub-reason-1 = Jeg tror ikke, at advarslerne gør mine data sikrere
unsub-reason-3 = Jeg synes ikke, at tjenesten er nyttig
unsub-reason-5 = Jeg bruger en anden tjeneste til at holde øje med mine konti
unsub-reason-6 = Intet af det ovenstående
unsub-survey-thankyou = Tak for din feedback
unsub-survey-error = Vælg venligst en.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Del
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Hent { -brand-Quantum }
download-firefox-mobile = Hent mobil-versionen af { -brand-name }
# Features here refers to Firefox browser features. 
features = Funktioner
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
share-email = Mailadresse
