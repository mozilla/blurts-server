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
-brand-fxa = Cyfrif Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Cefnogaeth
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Ynghylch Rhybuddion Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Rhoi Adborth
terms-and-privacy = Telerau a Phreifatrwydd
error-scan-page-token = Rydych wedi ceisio sganio gormod o gyfeiriadau e-bost mewn cyfnod byr. Am resymau diogelwch, rydym wedi eich rhwystro dros dro rhag chwiliadau newydd. Fe gewch chi geisio eto yn ddiweddarach.
error-could-not-add-email = Methu ychwanegu cyfeiriad e-bost i gronfa ddata.
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
error-headline = Gwall
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
pwt-section-subhead = Cryfder eich cyfrineiriau sy'n diogelu eich manylion preifat.
pwt-section-blurb =
    Mae eich cyfrineiriau'n gwarchod mwy na'ch cyfrifon. Maen nhw'n diogelu pob darn o fanylion personol sy'n bod o'u mewn.
    Mae hacwyr yn dibynnu ar arferion gwael, fel defnyddio'r un cyfrinair ym mhobman neu ddefnyddio ymadroddion cyffredin (p@ssw0rd??) felly,
    os byddan nhw'n hacio un cyfrif, mae modd iddyn nhw hacio llwythi. Dyma sut mae amddiffyn eich cyfrifon yn well.
pwt-headline-1 = Defnyddio cyfrinair gwahanol ar gyfer pob cyfrif
pwt-summary-1 = Mae ail ddefnyddio'r un cyfrinair ym mhobman yn agor y drws lled y pen ar gyfer dwyn hunaniaeth. Gall unrhyw un sydd â'r cyfrinair hwnnw fewngofnodi i'ch holl gyfrifon.
pwt-headline-2 = Creu cyfrineiriau cryf, anodd eu dyfalu
pwt-summary-2 = Mae hacwyr yn defnyddio miloedd o gyfrineiriau cyffredin i geisio dyfalu'ch un chi. Yr hiraf a mwyaf annisgwyl ydyw, yr anoddaf fydd i'w ddyfalu.
pwt-headline-3 = Rhaid trin cwestiynau diogelwch fel cyfrineiriau ychwanegol
pwt-summary-3 = Nid yw gwefannau yn gwirio bod eich atebion yn gywir, dim ond eu bod yn cyfateb bob tro. Crëwch atebion hir, ar hap a'u storio mewn man diogel.
pwt-headline-4 = Helpu eich hun i gofio eich cyfrineiriau
pwt-summary-4 = Mae rheolwyr cyfrinair fel 1Password, LastPass, Dashlane, a Bitwarden yn creu cyfrineiriau cryf, unigryw. Maen nhw hefyd yn cadw cyfrineiriau'n ddiogel a'u llanw ar wefannau i chi
pwt-headline-5 = Ychwanegu diogelwch pellach gyda dilysu dau gam
pwt-summary-5 = Mae dilysu dau gam yn gofyn am ddarn ychwanegol o wybodaeth (fel cod un-tro a anfonir trwy neges destun) i fewngofnodi i'ch cyfrif. Hyd yn oed os oes gan rywun eich cyfrinair, does dim modd iddyn nhw gael mynediad.
pwt-headline-6 = Cofrestru ar gyfer rhybuddion { -product-name-nowrap }
pwt-summary-6 = Mae tor-data gwefanau ar gynnydd. Cyn gynted ag y bydd tor-data newydd yn cael ei ychwanegu at ein cronfa ddata, mae { -product-name-nowrap } yn anfon rhybudd i chi - fel y gallwch chi weithredu a diogelu'ch cyfrif.
landing-headline = Mae eich hawl i fod yn ddiogel rhag hacwyr yn cychwyn yma.
landing-blurb = Mae { -product-name-nowrap } yn darparu offer i gadw'ch manylion personol yn ddiogel. Dewch i weld beth mae hacwyr eisoes yn ei wybod amdanoch chi, a dysgu sut i gadw un cam ar y blaen.
scan-label = Gweld os ydych chi wedi bod yn rhan o dor-data.
scan-placeholder = Rhowch eich Cyfeiriad E-bost
scan-privacy = Ni fydd eich e-bost yn cael ei gadw.
scan-submit = Chwilio am eich E-bost
scan-another-email = Sganio Cyfeiriad E-bost Arall
scan-featuredbreach-label = Gweld os yw eich cyfrif <span class="bold"> { $featuredBreach } </span> wedi ei gyfaddawdu.
sensitive-breach-email-required = Mae'r tor-data'n cynnwys manylion sensitif. Mae angen dilysu'r e-bost.
scan-error = Rhaid ei fod yn e-bost dilys.
signup-banner-headline = Mae { -product-name-nowrap } yn canfod bygythiadau i'ch cyfrifon ar-lein.
signup-banner-blurb =
    Mae eich adroddiad { -product-name-nowrap } manwl yn dangos os yw manylion o'ch cyfrifon ar-lein wedi cael ei ryddhau neu ei ddwyn.
    Byddwn hefyd yn eich hysbysu os bydd eich cyfrifon yn ymddangos mewn achosion o dor-data gwefannau newydd.
download-firefox-bar-blurb = Mae { -product-name-nowrap } yn cael ei gyflwyno i chi gan y <span class="nowrap">{ -brand-name } newydd sbon</span>.
download-firefox-bar-link = Llwytho { -brand-name } i lawr nawr
download-firefox-banner-blurb = Bod â rheolaeth o'ch porwr
download-firefox-banner-button = Llwytho { -brand-name } i Lawr
signup-modal-headline = Cofrestru ar gyfer { -product-name-nowrap }
signup-modal-blurb = Cofrestrwch am eich adroddiad llawn, rhybuddion pan fo toriadau newydd yn digwydd, ac awgrymiadau diogelwch o { -product-name-nowrap }.
signup-modal-close = Cau
get-your-report = Derbyn eich Adroddiad
signup-modal-verify-headline = Dilysu eich Tanysgrifiad
signup-modal-verify-blurb = Rydym wedi anfon dolen dilysu at <span id="submitted-email" class="medium"></span> .
signup-modal-verify-expiration = Daw'r ddolen hon i ben ymhen 24 awr.
signup-modal-verify-resend = Ddim yn y blwch derbyn na'r sbam? Ail anfon.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Anfonwyd!
signup-with-fxa = Cofrestrwch gyda Chyfrif { -brand-name }
form-signup-placeholder = Rhowch eich e-bost
form-signup-checkbox = Derbyn y diweddaraf gan { -brand-Mozilla } a { -brand-name }.
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
        [zero] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, ond nid yw'n ymddangos mewn unrhyw achosion o dor-ddata eraill.
        [one] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, yn ogystal ag un tor-data arall.
        [two] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, yn ogystal a { $breachCount } tor-data arall.
        [few] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
        [many] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
       *[other] Mae eich cyfrif yn ymddangos yn nhor-data <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
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
what-to-do-headline = Beth i'w wneud pan mae eich manylion wedi'i amlygu mewn tor-data
what-to-do-subhead-1 = Newid eich cyfrineiriau, hyd yn oed ar gyfer hen gyfrifon
what-to-do-blurb-1 = Os na allwch chi fewngofnodi, cysylltwch â'r wefan i ofyn sut y gallwch chi ei gael yn ôl  neu gau'r cyfrif. Gweld cyfrif nad ydych yn ei adnabod? Efallai bod y wefan wedi newid enw neu fod rhywun wedi creu cyfrif ar eich rhan.
what-to-do-subhead-2 = Os ydych yn ailddefnyddio cyfrinair hysbys, mae'n amser ei newid
what-to-do-blurb-2 = Gall hacwyr geisio ailddefnyddio'ch cyfrinair hysbys i fynd i mewn i gyfrifon eraill. Crëwch gyfrinair gwahanol ar gyfer pob gwefan, yn enwedig ar gyfer eich cyfrif banc, e-bost a gwefannau eraill lle rydych yn cadw manylion personol.
what-to-do-subhead-3 = Cymryd camau ychwanegol i ddiogelu eich cyfrifon ariannol
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
fxa-unsub-headline = Dad-danysgrifio o rybuddion { -product-name }.
fxa-unsub-blurb =
    Fyddwch chi ddim yn derbyn rhybuddion { -product-name } mwyach.
    Bydd eich { -brand-fxa } yn parhau i fod yn weithredol, ac efallai y byddwch
    yn derbyn negeseuon sy'n gysylltiedig â'r cyfrif.
unsub-survey-form-label = Pam ydych chi'n dad-danysgrifio rhag rybuddion { -product-name-nowrap }?
unsub-reason-1 = Rwy'n credu nad yw rhybuddion yn gwneud fy data yn fwy diogel
unsub-reason-2 = Rwy'n cael gormod o negeseuon e-bost gan { -product-name-nowrap }
unsub-reason-3 = Nid yw'r gwasanaeth yn werthfawr i mi
unsub-reason-4 = Rwyf eisoes wedi cymryd camau i ddiogelu fy nghyfrifon
unsub-reason-5 = Rwy'n defnyddio gwasanaeth arall i fonitro fy nghyfrifon
unsub-reason-6 = Dim un o'r uchod
unsub-survey-thankyou = Diolch am eich adborth.
unsub-survey-error = Dewiswch un.
unsub-survey-headline-v2 = Rydych wedi eich dad-danysgrifio.
unsub-survey-blurb-v2 =
    Fyddwch chi ddim yn derbyn rhybuddion { -product-name } mwyach.
    A wnewch chi gymryd munud i ateb un cwestiwn am eich profiad?
unsub-survey-button = Cyflwyno Ymateb
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Rhannu
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Trydar
download-firefox-quantum = Llwytho { -brand-Quantum } i Lawr
download-firefox-mobile = Llwytho { -brand-name } Symudol i Lawr
# Features here refers to Firefox browser features. 
features = nodweddion
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Mae data tor-data wedi ei ddarparu gan { $hibp-link }
site-description = A gafodd eich cyfrifon eu ryddhau neu eu dwyn mewn tor-data? Gallwch weld yn { -product-name }. Chwiliwch ein cronfa ddata a chofrestru am rybuddion.
confirmation-headline = Mae eich adroddiad { -product-name } ar ei ffordd.
confirmation-blurb = Gall tor-data effeithio ar unrhyw un. Dwedwch wrth eich ffrindiau a theulu fel eu bod nhw'n gallu gweld os yw eu cyfrifon ar-lein yn ddiogel.
share-email = E-bost
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Arall
share-twitter = Mae gan y rhan fwyaf o bobl tua 100 o gyfrifon ar-lein. A oes unrhyw un o'ch rhai chi wedi dioddef tor-data? Dewch i ni gael gweld.
share-facebook-headline = Dewch i weld a ydych chi wedi bod yn rhan o dor-data
share-facebook-blurb = A yw eich cyfrifon ar-lein wedi bod yn agored i dor-data?
og-site-description = Dewch i weld a ydych chi wedi bod yn rhan o dor-data gyda { -product-name }. Cofrestrwch am rybuddion am dor-data'r dyfodol a chael awgrymiadau ar sut i gadw'ch cyfrifon yn ddiogel.
mozilla-security-blog = Blog Diogelwch { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Cymdeithasol
show-all = Dangos y cyfan
fxa-landing-blurb =
    Darganfod beth mae hacwyr eisoes yn ei wybod amdanoch chi,
    a dysgu sut i gadw un cam ar y blaen.
fxa-scan-label = Gweld a ydych wedi ymddangos mewn tor-data.
fxa-welcome-headline = Croeso i { -product-name }.
fxa-welcome-blurb = Rydych nawr yn barod i dderbyn rhybuddion os yw { $userEmail } yn ymddangos mewn tor-data.
fxa-scan-another-email = Eisiau gwirio e-bost arall?
# Search Firefox Monitor
fxa-scan-submit = Chwilio { -product-name }
sign-up-to-check = Cofrestrwch am Wiriad
sign-in = Mewngofnodi
sign-out = Allgofnodi
full-report-headline = Eich Adroddiad { -product-name }
see-full-report = Gweld fy Adroddiad Llawn
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Rheoli { -brand-fxa }
fxa-download-firefox-bar-blurb = Wedi'i gyflwyno i chi gan { -brand-name }. 2x yn gynt. Yn defnyddio 30% yn llai o gof na { -brand-Chrome }.
fxa-download-firefox-bar-link = Llwytho i lawr nawr
fxa-download-firefox-banner-blurb = Llwytho tudalen gwell a chynt, ac yn defnyddio llai o gof cyfrifiadurol.
user-fb-compromised-headline = Ymddangosodd { $userEmail } yn y tor-data { $breachName }.
guest-fb-compromised-headline = Ymddangosodd yr e-bost hwn yn y tor-data { $breachName }.
user-zero-breaches-headline = Nid yw { $userEmail } wedi ymddangos mewn unrhyw dor-data.
guest-zero-breaches-headline = Nid yw'r e-bost yma wedi ymddangos mewn unrhyw dor-data.
user-scan-results-headline =
    { $breachCount ->
        [zero] Ymddangosodd { $userEmail } mewn 0 tor-data.
        [one] Ymddangosodd { $userEmail } mewn 1 tor-data.
        [two] Ymddangosodd { $userEmail } mewn { $breachCount } tor-data.
        [few] Ymddangosodd { $userEmail } mewn { $breachCount } tor-data.
        [many] Ymddangosodd { $userEmail } mewn { $breachCount } tor-data.
       *[other] Ymddangosodd { $userEmail } mewn { $breachCount } tor-data.
    }
guest-scan-results-headline =
    { $breachCount ->
        [zero] Ymddangosodd yr e-bost hwn mewn 0 tordata.
        [one] Ymddangosodd yr e-bost hwn mewn 1 tordata.
        [two] Ymddangosodd yr e-bost hwn mewn { $breachCount } tor-data.
        [few] Ymddangosodd yr e-bost hwn mewn { $breachCount } tor-data.
        [many] Ymddangosodd yr e-bost hwn mewn { $breachCount } tor-data.
       *[other] Ymddangosodd yr e-bost hwn mewn { $breachCount } tor-data.
    }
user-no-breaches-blurb = Byddwn yn eich hysbysu os yw'r cyfeiriad e-bost hwn yn ymddangos mewn tor-data newydd.
guest-no-breaches-blurb =
    I weld a yw'r e-bost hwn yn ymddangos mewn tor-data sensitif, crëwch { -brand-fxa }.
    Byddwn hefyd yn eich hysbysu os yw'r cyfeiriad hwn yn ymddangos mewn tor-data newydd.
user-one-breach-blurb = Mae'r tor-data hwn wedi amlygu'r manylion personol canlynol.
user-fb-compromised-blurb =
    { $breachCount ->
        [zero] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
        [one] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
        [two] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
        [few] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
        [many] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
       *[other] Ymddangosodd eich e-bost hefyd mewn { $breachCount } tor-data arall.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [zero] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
        [one] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
        [two] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
        [few] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
        [many] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
       *[other] Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall.
    }
user-fb-compromised-single =
    Amlygodd y tor-data'r manylion personol canlynol. Os nad ydych eisoes wedi gwneud,
    newidiwch eich cyfrineiriau.
user-generic-fb-compromised-single = Amlygodd y tor-data'r manylion personol canlyno.
guest-fb-compromised-single-v2 =
    Roedd y tor-data hwn yn amlygu'r wybodaeth bersonol ganlynol.
    Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data yn y gorffennol, rhybuddion tor-data newydd,
    a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [zero]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [one]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [two]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [few]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [many]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
       *[other]
            Ymddangosodd yr e-bost hwn hefyd mewn { $breachCount } tor-data arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, 
            rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [zero] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn un arall.
        [one] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn rhai eraill.
        [two] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn rhai eraill.
        [few] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn rhai eraill.
        [many] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn rhai eraill.
       *[other] Nid oeddech ar dor-data { $breachName }, ond rydym wedi canfod y cyfeiriad e-bost mewn rhai eraill.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [zero] Nid oedd yr e-bost hwn yn y tor-data { $breachName }.
        [one] Nid oedd yr e-bost hwn yn y tor-data { $breachName }, ond fe'i cafwyd mewn 1 arall.
        [two] Nid oedd yr e-bost hwn yn y tor-data { $breachName }, ond fe'i cafwyd mewn rhai eraill.
        [few] Nid oedd yr e-bost hwn yn y tor-data { $breachName }, ond fe'i cafwyd mewn rhai eraill.
        [many] Nid oedd yr e-bost hwn yn y tor-data { $breachName }, ond fe'i cafwyd mewn rhai eraill.
       *[other] Nid oedd yr e-bost hwn yn y tor-data { $breachName }, ond fe'i cafwyd mewn rhai eraill.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [zero] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn un arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [one] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn un arall. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [two] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn rhai eraill. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [few] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn rhai eraill. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
        [many] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn rhai eraill. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
       *[other] Nid oedd yr e-bost hwn yn nhor-datar { $breachName }, ond fe'i canfuwyd mewn rhai eraill. Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol, rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [zero] Mae'r tor-data hwn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
        [one] Mae'r tor-data hwn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
        [two] Mae'r tor-data hyn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
        [few] Mae'r tor-data hyn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
        [many] Mae'r tor-data hyn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
       *[other] Mae'r tor-data hyn wedi amlygu manylion personol. Os nad ydych eisoes wedi gwneud, newidiwch eich cyfrinair
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [zero] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
        [one] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
        [two] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
        [few] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
        [many] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
       *[other] Mae'r tor-data wedi amlygu'r manylion personol canlynol.
    }
have-an-account = Oes gennych chi gyfrif yn barod?
signup-banner-sensitive-blurb =
    Darganfod beth mae hacwyr eisoes yn ei wybod amdanoch chi, a dysgu sut i
    aros un cam ar y blaen. Cewch wybod os fydd eich cyfrif yn ymddangos
    mewn unrhyw dor-data newydd.
fxa-pwt-section-blurb =
    Cyfrineiriau sy'n diogelu'r holl fanylion personol yn eich cyfrifon ar-lein. Mae hacwyr yn dibynnu ar arferion gwael, fel defnyddio'r un cyfrinair ym mhobman neu ddefnyddio
    ymadroddion cyffredin (@p@ssw0rd, ?) felly os mae nhw'n hacio un cyfrif, maen nhw
    gall hacio llawer.
fxa-pwt-summary-2 =
    Mae cyfrineiriau byr, un-gair yn hawdd i hacwyr eu dyfalu.
    Defnyddiwch o leiaf ddau air a chyfuniad o lythrennau, digidau a nodau arbennig.
fxa-pwt-summary-4 =
    Mae rheolwyr cyfrineiriau fel 1Password, LastPass, Dashlane, a Bitwarden yn cadw eich
    cyfrineiriau a'u llenwi i wefannau drosto chi. Mae nhw hefyd yn gallu eich helpu i greu cyfrineiriau cryf.
fxa-pwt-summary-6 =
    Mae tordata ar gynnydd. Os yw eich manylion personol yn ymddangos mewn tor-data newydd, bydd 
    { -product-name } yn anfon rhybudd i chi - fel y gallwch chi weithredu a diogelu'ch cyfrifon.
fxa-what-to-do-blurb-1 =
    Os nad oes modd i chi fewngofnodi, cysylltwch â'r wefan i ofyn sut i'w ddiweddaru.
    Gweld cyfrif nad ydych chi'n ei adnabod? Gall fod eich data wedi cael ei werthu neu ei ailddosbarthu. Gall hyn hefyd fod am gyfrif rydych wedi'i anghofio roeddech wedi ei greu neu gwmni sydd wedi newid ei enw.
fxa-what-to-do-subhead-2 = Peidio ddefnyddio'r cyfrinair hysbys a'i newid lle bynnag rydych wedi ei ddefnyddio.
fxa-wtd-blurb-2 =
    Gall hacwyr geisio ailddefnyddio'ch cyfrinair hysbys i fynd i mewn i gyfrifon ac e-byst eraill. 
    Crëwch gyfrinair gwahanol ac unigryw ar gyfer pob gwefan, yn enwedig ar gyfer eich cyfrif banc,
    e-bost a gwefannau eraill lle rydych yn cadw manylion personol.
fxa-what-to-do-blurb-3 = Mae'r rhan fwyaf o achosion o dor-data yn datgelu e-byst a chyfrineiriau yn unig ond mae rhai yn cynnwys manylion ariannol sensitif. Os cafodd eich cyfrif banc neu rifau cerdyn credyd eu cynnwys mewn tor-data, rhowch wybod i'ch banc am dwyll posibl, a monitro datganiadau am daliadau nad ydych yn gyfarwydd â nhw.
fxa-what-to-do-subhead-4 = Derbyn cymorth i gofio'ch cyfrineiriau a'u cadw'n ddiogel.
fxa-what-to-do-blurb-4 =
    Mae rheolwyr cyfrineiriau fel 1Password, LastPass, Dashlane, a Bitwarden yn cadw eich
    cyfrineiriau'n ddiogel a'u cyflwyno i wefannau ar eich cyfer. Defnyddiwch reolwr cyfrinair
    ar eich ffôn a'ch cyfrifiadur fel does dim rhaid i chi gofio nhw i gyd.
fb-landing-headline = A gafodd eich manylion eu hamlygu yn nhor-data { $breachName }?
copyright = Mae darnau o'r cynnwys hwn yn © 1999-{ $year } gan gyfranwyr mozilla.org unigol.
content-available = Cynnwys ar gael o dan drwydded Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Cofrestrwch am Rybuddion
sign-up-for-fxa-alerts = Cofrestrwch am rybuddion { -product-name }.
create-free-account =
    Crëwch { -brand-fxa } am ddim ar gyfer eich adroddiad llawn o dor-data'r gorffennol,
    rhybuddion tor-data newydd, a gwybodaeth am wasanaethau { -brand-Mozilla } eraill.
get-your-report-and-sign-up = Estynnwch eich adroddiad a chofrestru am rybuddion.
