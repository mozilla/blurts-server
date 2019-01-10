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
layout-support = Assistentia
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = A proposito del avisos de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Inviar opinion
terms-and-privacy = Conditiones de uso e confidentialitate
error-could-not-add-email = impossibile adder le adresse email al base de datos
error-not-subscribed = Iste adresse email non es inscribite a { -product-name }
error-hibp-throttled = Trop connexiones a { -brand-HIBP }.
error-hibp-connect = Error durante le connexion a { -brand-HIBP }.
error-hibp-load-breaches = Impossibile cargar datos ex violationes.
hibp-notify-email-subject = Alerta de { -product-name }: tu conto ha essite compromittite per un violation de securitate.
home-title = { -product-name }
home-not-found = Pagina non trovate.
oauth-invalid-session = Session non valide
oauth-confirmed-title = { -product-name } : Subscribite
scan-title = { -product-name } : Resultatos del scansion
user-add-invalid-email = Email non valide
user-add-email-verify-subject = Verifica tu subscription a { -product-name }.
user-add-title = { -product-name } : Confirmar le adresse email
error-headline = Error
user-verify-token-error = Un jeton de verification es necesse.
user-verify-email-report-subject = Tu reporto de { -product-name }
user-verify-title = { -product-name } : subscribite
user-unsubscribe-token-error = Remover se del inscription require un jeton.
user-unsubscribe-token-email-error = Remover se del inscription require un jeton e un emailHash.
user-unsubscribe-title = { -product-name } : remover le inscription
user-unsubscribe-survey-title = { -product-name } : questionario de remotion de inscription
user-unsubscribed-title = { -product-name } : inscription removite

## Password Tips

pwt-section-headline = Contrasignos plu forte = Melior protection
pwt-section-subhead = Tu informationes private es tam secur que tu contrasignos.
pwt-section-blurb =
    Tu contrasignos protege plus de tu contos. Illos protege cata bit de informationes personal que demora in illos.
    E le hackers fide sur le mal habitos, como usar un identic contrasigno ubique o phrases commun (p@ssw0rd, quicunque?) assi
    que si illos viola un conto, illos pote violar multos. Ecce como melio proteger tu contos.
pwt-headline-1 = Usa un differente contrasigno pro cata conto
pwt-summary-1 =
    Reusar identic contrasigno ubique lassa le porta large aperte al furto de identitate.
    Quicunque con ille contrasigno pote acceder a tote tu contos.
pwt-headline-2 = Crea forte contrasignos, difficile a divinar
pwt-summary-2 =
    Le hackers usa milles de commun contrasignos pro provar a divinar illos tue.
    Plus longe e plus aleatori tu contrasigno es, plus difficile illo sera a divinar.
pwt-headline-3 = Tracta questiones de securitate como extra contrasignos
pwt-summary-3 =
    Le sitos web non verifica que tu responsas es accurate, ma solo que illos concorda sempre.
    Crea responsas longe, aleatori e reserva los in qualque loco secur.
pwt-headline-4 = Recipe adjuta a rememorar tu contrasignos
pwt-summary-4 =
    Le gestores de contrasignos como 1Password, LastPass, Dashlane, e Bitwarden genera contrasignos forte, unic.
    Illos alsi reserva le contrasignos con securitate e stipa los in sitos web pro te
pwt-headline-5 = Adder extra securitate con le authentication a duo factores
pwt-summary-5 =
    Le Le authentication a duo factores require un altere pecia de informationes (inviate, como le codification a un-vice, via message de texto) pro acceder a tu conto.
    Mesmo si alcuno ha tu contrasigno, ille non potera acceder.
pwt-headline-6 = Registra te pro le alertas de { -product-name-nowrap }
pwt-summary-6 =
    Le violationes de datos del sitos web es in accrescimento. A pena un nove brecha es addite a nostre base de datos, 
    { -product-name-nowrap } te inviara un alerta — assi que tu pote interprender actiones e proteger tu conto.
landing-headline = Tu derecto de ser secur del hackers initia ci.
landing-blurb =
    { -product-name-nowrap } te muni con applicationes pro mantener tu informationes personal secur.
    Discoperi lo que hackers jam sape re te e apprende como star un grado supra illes.
scan-label = Vide si tu ha essite implicate in un violation de datos.
scan-placeholder = Insere le adresse email
scan-privacy = Tu adresse email non essera reservate.
scan-submit = Cerca tu adresse email
scan-another-email = Scande un altere adresse de email
scan-featuredbreach-label = Discoperi si tu <span class="hardite"> { $featuredBreach } </span> conto ha essite compromittite.
sensitive-breach-email-required = Le violation contine informationes sensibile. Verification del email obligatori.
scan-error = Debe ser un adresse email valide
signup-banner-headline = { -product-name-nowrap } revela menacias contra tu contos online.
signup-banner-blurb =
    Tu reporto detaliate de { -product-name-nowrap } monstra si le informationes ex tu contos online ha essite revelate o robate.
    Nos alsi allertara te si tu contos pare in le nove violationes de sitos web.
download-firefox-bar-blurb = { -product-name-nowrap } es offerite a te per <span class="nowrap">all-new { -brand-name }</span>.
download-firefox-bar-link = Discarga subito { -brand-name }
download-firefox-banner-blurb = Prende controlo de tu navigator
download-firefox-banner-button = Discarga { -brand-name }
signup-modal-headline = Registra te pro { -product-name-nowrap }
signup-modal-blurb = Registra te pro tu plen reporto, alertas quando nove violationes eveni e suggestiones de securitate de { -product-name-nowrap }.
signup-modal-close = Clauder
get-your-report = Obtene tu reporto
signup-modal-verify-headline = Verifica tu subscription
signup-modal-verify-blurb = Nos ha inviate un ligamine de verification a  <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Iste ligamine expira in 24 horas.
signup-modal-verify-resend = Non es illo in le cassa de entrata, ni in le plica de spam? Reinvia lo.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Inviate!
signup-with-fxa = Registra te per un conto { -brand-name }
form-signup-placeholder = Insere tu adresse email
form-signup-checkbox = Recipe le ultime novas per { -brand-Mozilla } e { -brand-name }.
sign-up = Acceder
form-signup-error = Debe esser un adresse email valide
no-breaches-headline = Fin a aqui, toto ben.
found-breaches-headline = Tu informationes ha essite parte de un violation de datos.
no-breaches =
    Tu adresse de email non pareva in nostre scansion basic.
    Isto es bon novas, ma le violationes de datos pote evenir a ulle tempore e il ha ancora plus que tu pote facer.
    Inscribe te a un plen reporto de { -product-name-nowrap } pro reciper alertas quando nove violationes eveni e suggestiones re como proteger tu contrasignos.
featured-breach-results =
    { $breachCount ->
        [0] Tu conto appare in le <span class="bold">{ $featuredBreach }</span> violationes, ma illo non appare in ulle altere note violationes de datos.
        [one] Tu conto appareva in le <span class="bold"> { $featuredBreach } </span> violation, tam ben como uno altere.
       *[other] Tu conto appareva in le violation, tam ben como <span class="bold">{ $featuredBreach }</span> altere violationes.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu conto non appareva in le violation de <span class="bold">{ $featuredBreach }</span>, ma appareva in uno altere.
       *[other] Tu conto non appareva in le violation de <span class="bold">{ $featuredBreach }</span>, ma appareva in { $breachCount } altere.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu conto appareva in { $breachCount } violation.
       *[other] Le contos associate con tu adresse email appareva in le sequente { $breachCount } violationes.
    }
show-more-breaches = Monstrar plus
what-to-do-headline = Que facer quando tu Informationes es exponite in un violation de datos
what-to-do-subhead-1 = Cambia tu contrasignos, alsi pro le contos vetere
what-to-do-blurb-1 =
    Si tu non pote acceder, continge le sito web a demanda como tu pote recuperar o clauder le conto.
    Vide un conto que tu non recognosce? Le sito pote haber cambiate nomines o alcuno pote haber create un conto pro te.
what-to-do-subhead-2 = Si tu reusar un contrasigno exponite, cambia illo
what-to-do-blurb-2 = Le hackers pote provar a reusar tu contrasigno exponite pro acceder in altere contos. Crea un differente contrasigno pro cata sito web, specialmente pro tu conto bancari, email e altere sitos web ubi tu salva informationes personal.
what-to-do-subhead-3 = Prende extra grados pro tener secur tu contos financiari
what-to-do-blurb-3 =
    Le major parte del violationes expone solo emails e contrasignos, ma alcunos include sensibile informationes financiari.
    Si tu numeros de conto bancari o carta de credito era in un violation de datos, alerta tu banca pro le possibile fraude e verifica declarationes de cargas tu non recognosce.
what-to-do-subhead-4 = Recipe adjuta pro le creation de bon contrasignos e mantenente los secur.
what-to-do-blurb-4 = Le gestores de contrasignos, como 1Password, LastPass, Dashlane, e Bitwarden, genera contrasignos forte, reserva los con securitate e stipa los in sitos web pro te.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data del violation de securitate:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contos compromittite:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos compromittite:
confirmed = Confirmate!<br />Tu es subscribite!
confirmed-blurb = { -product-name-nowrap } te inviara per email un reporto plen tra breve, e un email de alerta si tu conto appare reportate in un nove violation.
confirmed-social-blurb = Si tu ha essite violate, il ha riscos que tu amicos, familia o connexiones online ha essite alsi. Face les saper re { -product-name-nowrap }.
unsub-headline = Remover le subscription de { -product-name-nowrap }
unsub-blurb = Isto removera tu email ab le lista de { -product-name-nowrap } e tu non recipera plus alertas quando nove violationes es annunciate.
unsub-button = Remover le subscription
unsub-survey-headline = Tu non es plus subscribite.
unsub-survey-blurb =
    Tu email es removite ex le inscription a { -product-name-nowrap }. Gratias pro usar iste servicio. 
    Prendera tu un momento pro responder a un question re tu experientia?
unsub-survey-form-label = Proque tu remove tu subscription del avisos de { -product-name-nowrap }?
unsub-reason-1 = Io crede que le avisos non rende mi datos plus secur
unsub-reason-2 = Io recipe trop emails de { -product-name-nowrap }
unsub-reason-3 = Io trova inutile le servicio
unsub-reason-4 = Io ha jam facite lo que es necesse pro proteger mi contos
unsub-reason-5 = Io usa un altere servicio pro controlar mi contos
unsub-reason-6 = Nihil del previe unos
unsub-survey-thankyou = Gratias pro tu commentario.
unsub-survey-error = Per favor elige uno.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartir
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Invia un tweet
download-firefox-quantum = Discargar { -brand-Quantum }
download-firefox-mobile = Discargar { -brand-name } Mobile
# Features here refers to Firefox browser features. 
features = Functionalitates
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Edition pro disveloppatores
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Portiones de iste contento es &#x24B8; 1998-2018 per collaboratores individual de mozilla.org. <br />
    Contento disponibile sub  <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">licentia Creative Commons </a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Datos re le violation fornite per { $hibp-link }
site-description = Ha tu contos essite revelate o robate in un violation de datos? Discoperi lo in { -product-name }. Cerca in nostre base de datos e registra te pro le alertas.
confirmation-headline = Tu reporto de { -product-name } es sur su via.
confirmation-blurb = Le violation de datos pote afficer quicunque. Diffunde le parola assi tu amicos e familiares pote verificar si lor contos online es secur.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Altero
share-twitter = Le major parte del personas ha circa 100 contos online. Ha essite exponite ullos del tue a un violation de datos?
share-facebook-headline = Discoperi si tu ha essite parte de un violation de datos
share-facebook-blurb = Ha tu contos online essite exponite a un violation de datos?
og-site-description = Discoperi si tu ha essite parte de un violation de datos con { -product-name }. Registra te pro alertas re futur violationes e obtener suggestiones pro mantener tu contos secur.
