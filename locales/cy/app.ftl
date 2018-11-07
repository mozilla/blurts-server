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
layout-support = Cefnogaeth
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Rhoi Adborth
terms-and-privacy = Telerau a Phreifatrwydd
error-not-subscribed = Nid yw'r cyfeiriad e-bost hwn wedi'i danysgrifio i { -product-name }.
error-hibp-throttled = Gormod o gysylltiadau i { -brand-HIBP }.
error-hibp-connect = Gwall wrth gysylltu i { -brand-HIBP }.
error-hibp-load-breaches = Methu llwytho'r tor-data.
hibp-notify-email-subject = Rhybudd { -product-name }: Mae eich cyfrif wedi ei gynnwys mewn tor-data.
home-title = { -product-name }
home-not-found = Heb ganfod tudalen.
oauth-invalid-session = Sesiwn annilys
oauth-confirmed-title = { -product-name } : Wedi tanysgrifio
scan-title = { -product-name } : Canlyniadau Sganio
user-add-invalid-email = E-bost Annilys
user-add-email-verify-subject = Dilysu eich tanysgrifiad i { -product-name }.
user-add-title = { -product-name } : Cadarnhau E-bost
user-verify-token-error = Mae angen tocyn dilysu.
user-verify-email-report-subject = Eich adroddiad { -product-name }
user-verify-title = { -product-name } : Tanysgrifiwyd
user-unsubscribe-token-error = Mae tanysgrifio angen tocyn.
user-unsubscribe-token-email-error = Mae tanysgrifio angen tocyn a hashe-bost.
user-unsubscribe-title = { -product-name } : Dad-danysgrifio
user-unsubscribe-survey-title = { -product-name } : Dad-danysgrifio o'r Arolwg
user-unsubscribed-title = { -product-name } : Wedi Dad-danyscrifio

## Password Tips

pwt-section-headline = Cyfrineiriau Cryfach = Gwell Diogelwch
pwt-section-subhead = Mae eich manylion preifat ond mor ddiogel â'ch cyfrineiriau.
pwt-section-blurb =
    Mae eich cyfrineiriau'n gwarchod mwy na'ch cyfrifon. Maen nhw'n diogelu pob darn o wybodaeth bersonol sy'n bod o'u mewn.
    Ac mae hacwyr yn dibynnu ar arferion drwg, fel defnyddio'r un cyfrinair ym mhobman neu ddefnyddio ymadroddion cyffredin (p@ssw0rd??) felly,
    os byddan nhw'n hacio un cyfrif, mae modd iddyn nhw hacio llwyth. Dyma sut i amddiffyn eich cyfrifon yn well.
pwt-headline-1 = Defnyddio cyfrinair gwahanol ar gyfer pob cyfrif
pwt-summary-1 = Mae ailddefnyddio'r un cyfrinair ym mhobman yn agor y drws lled y pen ar gyfer dwyn hunaniaeth. Gall unrhyw un sydd â'r cyfrinair hwnnw fewngofnodi i'ch holl gyfrifon.
pwt-headline-2 = Creu cyfrineiriau cryf, anodd eu dyfalu
pwt-summary-2 = Mae hacwyr yn defnyddio miloedd o gyfrineiriau cyffredin i geisio dyfalu eich un chi. Yr hiraf a mwyaf annisgwyl ydyw, yr anoddaf fydd i'w ddyfalu.
pwt-headline-3 = Rhaid trin cwestiynnau diogelwch fel cyfrineiriau ychwanegol
pwt-summary-3 = Nid yw gwefannau yn gwirio bod eich atebion yn gywir, dim ond eu bod yn cyfateb bob tro. Crewch atebion hir, ar hap a'u storio yn rhywle diogel.
pwt-headline-4 = Helpu eich hun i gofio eich cyfrineiriau
pwt-summary-4 = Mae rheolwyr cyfrinair fel 1Password, LastPass, Dashlane, a Bitwarden yn creu cyfrineiriau cryf, unigryw. Maen nhw hefyd yn storio cyfrineiriau'n ddiogel a'u llanw ar wefannau i chi
pwt-headline-5 = Ychwanegu diogelwch pellach gyda dilysu dau gam
pwt-summary-5 = Mae dilysu dau gam yn gofyn am ddarn ychwanegol o wybodaeth (fel cod un-amser a anfonir trwy neges destun) i fewngofnodi i'ch cyfrif. Hyd yn oed os oes gan rywun eich cyfrinair, does dim modd iddyn nhw gael mynediad.
pwt-headline-6 = Cofrestru ar gyfer rhybuddion { -product-name-nowrap }
pwt-summary-6 = Mae tor-data gwefanau ar gynnydd. Cyn gynted ag y bydd tor-data newydd yn cael ei ychwanegu at ein cronfa ddata, mae { -product-name-nowrap } yn anfon rhybudd i chi - fel y gallwch chi weithredu a diogelu'ch cyfrif.
landing-headline = Mae eich hawl i fod yn ddiogel rhag hacwyr yn cychwyn yma.
landing-blurb = Mae { -product-name-nowrap } yn darparu offer i gadw'ch manylion personol yn ddiogel. Dewch i weld beth mae hacwyr eisoes yn ei wybod amdanoch chi, a dysgu sut i gadw un cam ar y blaen.
scan-label = Gweld os ydych wedi bod yn rhan o dor-data.
scan-placeholder = Rhowch eich Cyfeiriad E-bost
scan-privacy = Ni fydd eich e-bost yn cael ei gadw.
scan-submit = Chwilio'ch E-bost
scan-another-email = Sganio Cyfeiriad E-bost Arall
scan-featuredbreach-label = Gweld os yw eich cyfrif <span class="bold"> { $featuredBreach } </span> wedi ei gyfaddawdu.
scan-error = Rhaid ei fod yn e-bost dilys.
signup-banner-headline = Mae { -product-name-nowrap } yn canfod bygythiadau i'ch cyfrifon ar-lein.
signup-banner-blurb =
    Mae eich adroddiad { -product-name-nowrap } manwl yn dangos os yw manylion o'ch cyfrifon ar-lein wedi cael ei ryddhau neu ei ddwyn.
    Byddwn hefyd yn eich hysbysu os bydd eich cyfrifon yn ymddangos mewn achosion o dor-data gwefannau newydd.
download-firefox-bar-blurb = Mae { -product-name-nowrap } yn cael ei gyflwyno i chi gan y <span class="nowrap">{ -brand-name } newydd sbon</span>.
download-firefox-bar-link = Llwytho { -brand-name } i lawr nawr
download-firefox-banner-blurb = Cymerwch reolaeth o'ch porwr
download-firefox-banner-button = Llwytho { -brand-name } i Lawr
signup-modal-headline = Cofrestru ar gyfer { -product-name-nowrap }
signup-modal-blurb = Cofrestrwch am eich adroddiad llawn, rhybuddion pan fo toriadau newydd yn digwydd, ac awgrymiadau diogelwch o { -product-name-nowrap }.
signup-modal-close = Cau
get-your-report = Derbyn eich Adroddiad
signup-modal-verify-headline = Dilysu eich tanysgrifiad
signup-modal-verify-blurb = Rydym wedi anfon cyswllt dilysu at <span id="submitted-email" class="medium"></span> .
signup-modal-verify-expiration = Daw'r ddolen hon i ben ymhen 24 awr.
signup-modal-verify-resend = Ddim yn y blwch derbyn na'r sbam? Ailanfon
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Anfonwyd!
signup-with-fxa = Cofrestrwch gyda Chyfrif { -brand-name }
form-signup-placeholder = Rhowch eich e-bost
form-signup-checkbox = Cael y diweddaraf o { -brand-Mozilla } a { -brand-name }.
sign-up = Ymuno
form-signup-error = Rhaid ei fod yn e-bost dilys
no-breaches-headline = Go lew, hyd yma.
found-breaches-headline = Mae eich manylion wedi bod yn rhan o dor-data.
no-breaches =
    Nid oedd eich cyfeiriad e-bost yn ymddangos yn ein sgan sylfaenol.
    Mae hynny'n newyddion da, ond gall tor-ddata ddigwydd ar unrhyw adeg ac mae mwy y gallwch chi ei wneud.
    Tanysgrifiwch i { -product-name-nowrap } am adroddiad llawn, rhybuddion pan fo tor-ddata newydd yn digwydd, ac awgrymiadau ar ddiogelu eich cyfrineiriau.
featured-breach-results =
    { $breachCount ->
        [zero] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, ond nid yw'n ymddangos mewn unrhyw achosion o dor-ddata eraill.
        [one] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal ag un tor-data arall.
        [two] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal a { $breachCount } tor-data arall.
        [few] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
        [many] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
       *[other] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [zero] { no-breaches }
        [one] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn un tor-data arall.
        [two] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
        [few] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
        [many] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
       *[other] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
    }
scan-results =
    { $breachCount ->
        [zero] { no-breaches }
        [one] Ymddangosodd eich cyfrif mewn { $breachCount } tor-data.
        [two] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
        [few] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
        [many] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
       *[other] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
    }
show-more-breaches = Dangos Rhagor
what-to-do-headline = Beth i'w Wneud pan mae eich Manylion wedi'i Amlygu mewn Tor-data
what-to-do-subhead-1 = Newidiwch eich cyfrineiriau, hyd yn oed ar gyfer hen gyfrifon
what-to-do-blurb-1 = Os na allwch chi fewngofnodi, cysylltwch â'r wefan i ofyn sut y gallwch chi ei gael yn ôl  neu gau'r cyfrif. Gweld cyfrif nad ydych yn ei adnabod? Efallai bod y wefan wedi newid enw neu fod rhywun wedi creu cyfrif ar eich rhan.
what-to-do-subhead-2 = Os ydych yn ailddefnyddio cyfrinair hysbys, mae'n amser ei newid
what-to-do-blurb-2 = Gall hacwyr geisio ailddefnyddio'ch cyfrinair hysbys i fynd i mewn i gyfrifon eraill. Crëwch gyfrinair gwahanol ar gyfer pob gwefan, yn enwedig ar gyfer eich cyfrif banc, e-bost a gwefannau eraill lle rydych yn cadw manylion personol.
what-to-do-subhead-3 = Cymerwch gamau ychwanegol i ddiogelu eich cyfrifon ariannol
what-to-do-blurb-3 = Mae'r rhan fwyaf o achosion o dor-data dim ond yn datgelu e-byst a chyfrineiriau, ond mae rhai yn cynnwys manylion ariannol sensitif. Os cafodd eich cyfrif banc neu rifau cerdyn credyd eu cynnwys mewn tor-data, rhowch wybod i'ch banc am dwyll posibl, a monitro datganiadau am daliadau nad ydych yn gyfarwydd â nhw.
what-to-do-subhead-4 = Cael help i greu cyfrineiriau da a'u cadw'n ddiogel.
what-to-do-blurb-4 = Mae rheolwyr cyfrinair fel 1Password, LastPass, Dashlane, a Bitwarden yn creu cyfrineiriau cryf, yn eu storio'n ddiogel, a'u llenwi i mewn i wefannau i chi.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dyddiad tor-data:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cyfrifon wedi eu cyfaddawdu:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data wedi ei gyfaddawdu:
confirmed = Iawn! <br /> Rydych wedi Tanysgrifio!
confirmed-blurb = Bydd { -product-name-nowrap } yn e-bostio adroddiad llawn i chi yn fuan, a bydd yn anfon rhybudd e-bost os bydd eich cyfrif yn ymddangos mewn tor-data hysbys newydd.
confirmed-social-blurb = Os ydych wedi cael tor-data, mae'n bosib fod eich ffrindiau, teulu, neu gysylltiadau ar-lein wedi dioddef un hefyd. Gadewch iddyn nhw wybod am { -product-name-nowrap }.
unsub-headline = Dad-danysgrifio o { -product-name-nowrap }
unsub-blurb = Bydd hyn yn dileu'ch e-bost o'r rhestr { -product-name-nowrap } ac ni fyddwch yn derbyn rhybuddion pan fydd achosion o tor-data'n cael eu cyhoeddi.
unsub-button = Dad-danysgrifio
unsub-survey-headline = Nid ydych yn tanysgrifio bellach.
unsub-survey-blurb = Mae eich e-bost wedi'i ddad-danysgrifio { -product-name-nowrap }. Diolch am ddefnyddio'r gwasanaeth hwn. A wnewch chi gymryd munud i ateb un cwestiwn am eich profiad?
unsub-survey-form-label = Pam ydych chin dad-danysgrifio rhag rybuddion { -product-name-nowrap }}?
unsub-reason-1 = Rwy'n credu nad yw rhybuddion yn gwneud fy data yn fwy diogel
unsub-reason-2 = Rwy'n cael gormod o negeseuon e-bost gan { -product-name-nowrap }
unsub-reason-3 = Nid yw'r gwasanaeth yn werthfawr i mi
unsub-reason-4 = Rwyf eisoes wedi cymryd camau i ddiogelu fy nghyfrifon
unsub-reason-5 = Rwy'n defnyddio gwasanaeth arall i fonitro fy nghyfrifon
unsub-reason-6 = Dim un o'r uchod
unsub-survey-thankyou = Diolch am eich adborth.
unsub-survey-error = Dewiswch un.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Rhannu
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Trydar
download-firefox-quantum = Lleytho { -brand-Quantum } i Lawr
download-firefox-mobile = Llwytho { -brand-name } Symudol i Lawr
# Features here refers to Firefox browser features. 
features = nodweddion
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = Mae darnau o'r cynnwys hwn yn Ⓒ 1998-2018 gan gyfranwyr mozilla.org unigol. <br /> Mae cynnwys ar gael o dan <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">drwydded Creative Commons</a> .
# Breach data provided by Have I Been Pwned.
hibp-attribution = Mae data tor-data wedi ei ddarparu gan { $hibp-link }
site-description = A gafodd eich cyfrifon eu ryddhau neu eu dwyn mewn tor-data? Gallwch weld yn { -product-name }. Chwiliwch ein cronfa ddata a chofrestru am rybuddion.
