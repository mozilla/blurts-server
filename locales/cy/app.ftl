# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Cyfrif Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Rhwydwaith Preifat Firefox

##

GitHub-link-title = GitHub
error-scan-page-token = Rydych wedi ceisio sganio gormod o gyfeiriadau e-bost mewn cyfnod byr. Am resymau diogelwch, rydym wedi eich rhwystro dros dro rhag chwiliadau newydd. Fe gewch chi geisio eto yn ddiweddarach.
error-could-not-add-email = Methu ychwanegu cyfeiriad e-bost i gronfa ddata.
error-not-subscribed = Nid yw'r cyfeiriad e-bost hwn wedi'i danysgrifio i { -product-name }.
error-hibp-throttled = Gormod o gysylltiadau i { -brand-HIBP }.
error-hibp-connect = Gwall wrth gysylltu i { -brand-HIBP }.
error-hibp-load-breaches = Methu llwytho'r tor-data.
error-must-be-signed-in = Rhaid eich bod wedi eich mewngofnodi i'ch { -brand-fxa }.
error-to-finish-verifying = I orffen gwirio yr e-bost hwn ar gyfer { -product-name }, rhaid eich bod wedi eich mewngofnodi gyda'ch prif cyfrif e-bost.
home-title = { -product-name }
home-not-found = Heb ganfod tudalen.
oauth-invalid-session = Sesiwn annilys
scan-title = { -product-name } : Canlyniadau Sganio
user-add-invalid-email = E-bost Annilys
user-add-too-many-emails = Rydych yn monitro'r nifer mwyaf o gyfeiriadau e-byst.
user-add-email-verify-subject = Dilysu eich tanysgrifiad i { -product-name }.
user-add-duplicate-email = Mae'r e-bost hwn eisoes wedi'i ychwanegu at { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Ewch i'ch { $preferencesLink } i wirio statws { $userEmail }.
user-add-verification-email-just-sent = Nid oes modd anfon yr e-bost dilysu arall hwn mor fuan. Ceisiwch eto yn nes ymlaen.
user-add-unknown-error = Aeth rhywbeth o'i le wrth ychwanegu cyfeiriad e-bost arall. Ceisiwch eto yn nes ymlaen.
user-delete-unknown-error = Aeth rhywbeth o'i le wrth ddileu cyfeiriad e-bost. Ceisiwch eto yn nes ymlaen.
error-headline = Gwall
user-verify-token-error = Mae angen tocyn dilysu.
user-verify-email-report-subject = Eich adroddiad { -product-name }
user-unsubscribe-token-error = Mae tanysgrifio angen tocyn.
user-unsubscribe-token-email-error = Mae tanysgrifio angen tocyn a hashe-bost.
user-unsubscribe-title = { -product-name } : Dad-danysgrifio
pwt-section-headline = Cyfrineiriau Cryfach = Gwell Diogelwch
landing-headline = Mae eich hawl i fod yn ddiogel rhag hacwyr yn cychwyn yma.
scan-placeholder = Rhowch eich Cyfeiriad E-bost
scan-submit = Chwilio am eich E-bost
scan-error = Rhaid ei fod yn e-bost dilys.
download-firefox-banner-button = Llwytho { -brand-name } i Lawr
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Anfonwyd!
sign-up = Ymuno
form-signup-error = Rhaid ei fod yn e-bost dilys
# breach-date = the calendar date a particular data theft occurred.
breach-date = Dyddiad tor-data:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cyfrifon wedi eu cyfaddawdu:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data wedi ei gyfaddawdu:
unsub-headline = Dad-danysgrifio o { -product-name-nowrap }
unsub-blurb = Bydd hyn yn dileu'ch e-bost o'r rhestr { -product-name-nowrap } ac ni fyddwch yn derbyn rhybuddion pan fydd achosion o tor-data'n cael eu cyhoeddi.
unsub-button = Dad-danysgrifio
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Mae data tor-data wedi ei ddarparu gan { $hibp-link }
share-twitter = Mae gan y rhan fwyaf o bobl tua 100 o gyfrifon ar-lein. A oes unrhyw un o'ch rhai chi wedi dioddef tor-data? Dewch i ni gael gweld.
share-facebook-headline = Dewch i weld a ydych chi wedi bod yn rhan o dor-data
share-facebook-blurb = A yw eich cyfrifon ar-lein wedi bod yn agored i dor-data?
og-site-description = Dewch i weld a ydych chi wedi bod yn rhan o dor-data gyda { -product-name }. Cofrestrwch am rybuddion am dor-data'r dyfodol a chael awgrymiadau ar sut i gadw'ch cyfrifon yn ddiogel.
show-all = Dangos y cyfan
fxa-scan-another-email = Eisiau gwirio e-bost arall?
sign-out = Allgofnodi
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Rheoli { -brand-fxa }
have-an-account = Oes gennych chi gyfrif yn barod?
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
# Alerts is a noun
sign-up-for-alerts = Cofrestrwch am Rybuddion
# Link title
frequently-asked-questions = Cwestiynau Cyffredin
about-firefox-monitor = Ynghylch { -product-name }
# Link title
preferences = Dewisiadau
# Link title
home = Cartref
# Link title
security-tips = Awgrymiadau Diogelwch
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Agor llywio { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = DYMA'R TOR-DATA DIWEDDARAF
# Link title
more-about-this-breach = Rhagor am y tor-data hwn
take-control = Rheolwch eich data personol eich hun.
cant-stop-hackers = Does dim modd rhwystro hacwyr rhag hacio. Ond gallwch osgoi arferion drwg sy'n gwneud eu gwaith yn haws.
read-more-tips = Darllen Rhagor o Awgrymiadau Diogelwch
how-hackers-work = Deall sut mae hacwyr yn gweithio
monitor-your-online-accounts = Cofrestrwch ar gyfer monitro tor-data gyda { -brand-fxa }
stay-alert = Cadw'n effro am dor-data newydd
if-your-info = Os bydd eich manylion yn ymddangos mewn tor-data newydd, byddwn yn anfon rhybudd atoch.
search-all-emails = Chwiliwch am eich holl gyfeiriadau e-bost am dor-data a chael rhybudd am fygythiadau newydd.
monitor-several-emails = Monitro sawl cyfrif e-bost
take-action = Cymerwch gamau i ddiogelu eich cyfrifon
keep-your-data-safe = Darganfyddwch beth sydd angen i chi ei wneud i gadw'ch data yn ddiogel rhag seiber-droseddwyr.
website-breach = Tor-data Gwefan
sensitive-breach = Tor-data Gwefan Sensitif
data-aggregator-breach = Tor-data Casglwr Data
unverified-breach = Tor-Data Heb ei Gwirio
spam-list-breach = Tor-data Rhestr Sbam
website-breach-plural = Tor-data Gwefan
sensitive-breach-plural = Tor-data Sensitif
data-aggregator-breach-plural = Tor-data Casglwr Data
unverified-breach-plural = Tor-data heb eu Gwirio
spam-list-breach-plural = Tor-data Rhestr Sbam
what-data = Pa ddata a gyfaddawdwyd:
sensitive-sites = Sut mae { -product-name } yn trin gwefannau sensitif?
sensitive-sites-copy = Dim ond ar ôl gwirio cyfeiriad e-bost y mae { -product-name } yn datgelu cyfrifon sy'n gysylltiedig â'r mathau yma o dor-data. Mae hyn yn golygu mai chi yw'r unig berson a all weld a oedd eich manylion yn y tor-data hwn (oni bai bod gan rywun arall fynediad arall i'ch cyfrif e-bost.)
delayed-reporting-headline = Pam y cymerodd gymaint o amser i adrodd ar y tor-data hwn?
delayed-reporting-copy =
    Weithiau gall gymryd rhai misoedd neu flynyddoedd i fanylion gafodd eu datgelu mewn tor-data i ymddangos ar y we dywyll. Caiff tori-data eu hychwanegu at ein cronfa ddata 
    cyn gynted ag y byddant yn cael eu darganfod a'u dilysu.
about-fxm-headline = Ynghylch { -product-name }
about-fxm-blurb = Mae { -product-name } yn rhybuddio os yw eich cyfrifon ar-lein wedi eu cysylltu â thor-data. Gallwch ddarganfod os ydych wedi bod mewn tor-data, derbyn rhybuddion am dor-data newydd a chymryd camau i ddiogelu eich cyfrifon ar-lein. Mae { -product-name }yn cael ei ddarparu gan { -brand-Mozilla }
fxm-warns-you =
    Mae { -product-name } yn eich rhybuddio os yw eich cyfeiriad e-bost wedi'i ddatgelu
    mewn tor-data ar-lein. Edrychwch a yw eich manylion wedi cael eu datgelu, dysgwch sut
    i ddiogelu eich cyfrifon ar-lein yn well, a chael gwybod os yw eich cyfeiriad e-bost
    yn ymddangos mewn tor-data newydd.
# How Firefox Monitor works
how-fxm-works = Sut mae { -product-name } yn gweithio
how-fxm-1-headline = Chwilio cychwynnol
how-fxm-1-blurb =
    Chwiliwch am eich cyfeiriad e-bost mewn achosion o dor-data cyhoeddus
    yn ôl i 2007. Bydd y chwiliad cychwynnol hwn yn chwilio'r rhan fwyaf o achosion o dor-data, ond nid rhai sy'n cynnwys gwybodaeth bersonol sensitif.
how-fxm-2-headline = Cofrestrwch ar gyfer monitro toriadau
how-fxm-2-blurb =
    Creu { -brand-fxa } i fonitro eich e-bost am dor-data parhaus.
    Unwaith y byddwch wedi dilysu eich e-bost, byddwch yn derbyn adroddiad llawn o dor-data'r gorffennol, gan gynnwys tor-data sensitif.
how-fxm-3-headline = Derbyn hysbysiadau i'ch porwr
how-fxm-3-blurb = Os ydych yn defnyddio { -brand-name }, byddwch yn derbyn hysbysiad os byddwch yn ymweld â gwefan wedi ei thorri. Gallwch ganfod ar unwaith os oeddech chi'n rhan o'r tor-data hwnnw a'r hyn gallwch ei wneud yn ei gylch.
wtd-after-website = Beth i'w wneud ar ôl tor-data gwefan
wtd-after-data-agg = Beth i'w wneud ar ôl tor-data casglwr data
what-is-data-agg = Beth yw gasglwr data?
what-is-data-agg-blurb = Mae casglwyr data, neu froceriaid data, yn casglu gwybodaeth o gofnodion cyhoeddus ac y ei brynu gan gwmnïau eraill. Maen nhw'n crynhoi'r data hwn i'w werthu i gwmnïau at ddibenion marchnata. Mae dioddefwyr yr achosion hyn o tor-data yn llai tebygol o brofi twyll ariannol, ond gall hacwyr ddefnyddio'r data hwn i'w dynwared neu'u proffilio.
protect-your-privacy = Diogelu eich preifatrwydd ar-lein
no-pw-to-change = Yn wahanol i dor-data gwefan, nid oes cyfrinair i'w newid.
avoid-personal-info = Peidiwch â defnyddio gwybodaeth bersonol mewn cyfrineiriau
avoid-personal-info-blurb = Mae'n hawdd dod o hyd i ben-blwyddi, cyfeiriadau ac enwau aelodau'r teulu ar-lein. Cadwch y geiriau hyn allan o'ch cyfrineiriau.

## What to do after data breach tips

change-pw = Newidiwch eich cyfrinair
change-pw-site = Newid cyfrinair y wefan hon
even-for-old = Hyd yn oed ar gyfer hen gyfrifon, mae'n bwysig diweddaru eich cyfrinair.
make-new-pw-unique = Gwnewch y cyfrinair newydd yn wahanol ac yn unigryw
strength-of-your-pw = Mae cryfder eich cyfrineiriau yn effeithio'n uniongyrchol ar eich diogelwch ar-lein.
create-strong-passwords = Dewis cyfrineiriau cryf
stop-reusing-pw = Peidiwch ailddefnyddio'r un cyfrineiriau
create-unique-pw = Crëwch gyfrineiriau unigryw a'u cadw yn rhywle diogel, mewn rheolwr cyfrinair.
five-myths = 5 coel am reolwyr cyfrinair
create-a-fxa = Crëwch { -brand-fxa } ar gyfer eich adroddiad llawn o tor-data ac i dderbyn rhybuddion.
feat-security-tips = Awgrymiadau diogelwch i ddiogelu eich cyfrifon
feat-sensitive = Chwilio uwch mewn tor-data sensitif
feat-enroll-multiple = Cofrestru nifer o e-byst ar gyfer monitro tor-data
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [zero] Nid yw'n ymddangos mewn unrhyw dor-data.
        [one] Yn ymddangos mewn { $breachCount } tor-data.
        [two] Yn ymddangos mewn { $breachCount } tor-data.
        [few] Yn ymddangos mewn { $breachCount } tor-data.
        [many] Yn ymddangos mewn { $breachCount } tor-data.
       *[other] Yn ymddangos mewn { $breachCount } tor-data.
    }
check-for-breaches = Gwirio am Dor-data
find-out-what-hackers-know = Dyma beth mae hacwyr eisoes yn ei wybod amdanoch chi. Dysgwch sut i aros un cam o'u blaen.
get-email-alerts = Cadwch yn ddiogel: Sicrhewch rybuddion e-bost pan fydd eich manylion yn ymddangos mewn tor-data hysbys
search-for-your-email = Chwiliwch am eich cyfeiriad e-bost mewn tor-data cyhoeddus sy'n mynd yn ôl i 2007.
back-to-top = Nôl i'r Brig
comm-opt-0 = E-bostiwch fi os yw un o'm cyfeiriadau e-bost isod yn ymddangos mewn achos o dor-data.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Anfonwch yr holl rybuddion tor-data i { $primaryEmail }.
stop-monitoring-this = Peidio monitro'r e-bost hwn.
resend-verification = Ail-anfon yr e-bost dilysu
add-new-email = Ychwanegu cyfeiriad e-bost newydd
send-verification = Anfon Dolen Dilysu
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Crynodeb o'r Tor-data
show-breaches-for-this-email = Dangos bob achos o dor-data'r e-bost hwn.
link-change-primary = Newid Cyfeiriad yr E-bost Cynradd
remove-fxm = Tynnu { -product-name }
remove-fxm-blurb = Diffodd rybuddion { -product-name }. Bydd eich { -brand-fxa } yn parhau i fod yn weithredol, ac efallai y cewch chi gyfathrebiadau eraill sy'n gysylltiedig â'ch cyfrifon.
# Button title
manage-email-addresses = Rheoli Cyfeiriadau E-bost
# Link title
latest-breach-link = Gweld os oeddech yn rhan o'r tor-data hyn

## Variables:
##   $userName (String) - Username

welcome-back = Croeso nôl, { $userName }!
welcome-user = Croeso, { $userName }!

##

breach-alert-subject = Mae { -product-name } wedi canfod eich e-bost mewn tor-data newydd.
your-info-was-discovered-headline = Cafodd eich manylion eu darganfod mewn tor-data newydd.
your-info-was-discovered-blurb =
    Rydych wedi cofrestru i dderbyn rhybuddion { -product-name }
    pan fydd eich e-bost yn ymddangos mewn achos o dor-data. Dyma beth rydym yn ei wybod am y tor-data hwn.
what-to-do-after-breach = Beth i'w wneud ar ôl tor-data
ba-next-step-1 = Newidiwch eich cyfrinair i gyfrinair cryf, unigryw.
ba-next-step-blurb-1 =
    Mae cyfrinair cryf yn defnyddio cyfuniad o lythrennau mawr a bach,
    nodau arbennig, a rhifau. Nid yw'n cynnwys manylion personol fel
    eich cyfeiriad, pen-blwydd neu enw teuluol.
ba-next-step-2 = Peidiwch a defnyddio'r cyfrinair hwn o gwbl.
ba-next-step-blurb-2 =
    Bydd troseddwyr seibr yn gallu ddod o hyd i'ch cyfrinair ar y we dywyll a'i ddefnyddio
    i fewngofnodi i'ch cyfrifon eraill. Y ffordd orau o ddiogelu eich cyfrifon
    yw defnyddio cyfrineiriau unigryw ar gyfer pob un.
ba-next-step-3 = Derbyniwch gymorth i greu gwell cyfrineiriau a'u cadw'n ddiogel.
ba-next-step-blurb-3 = Defnyddiwch reolwr cyfrinair i greu cyfrineiriau cryf ac unigryw. Mae rheolwyr cyfrineiriau yn cadw'ch holl fewngofnodion  yn ddiogel fel y gallwch eu cyrchu ar draws eich holl ddyfeisiau.
faq1 = Dw i ddim yn adnabod y cwmni neu'r wefan hon. Pam ydw i yn y tor-data hwn?
faq2 = Pam y cymerodd gymaint o amser i mi gael gwybod am y tor-data hwn?
faq3 = Sut ydw i'n gwybod bod hwn yn e-bost dilys o { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [zero] HEB GANFOD UNRHYW DOR-DATA
        [one] WEDI CANFOD { $breachCount } TOR-DATA NEWYDD
        [two] WEDI CANFOD { $breachCount } TOR-DATA NEWYDD
        [few] WEDI CANFOD { $breachCount } TOR-DATA NEWYDD
        [many] WEDI CANFOD { $breachCount } TOR-DATA NEWYDD
       *[other] WEDI CANFOD { $breachCount } TOR-DATA NEWYDD
    }
sign-up-headline-1 = Derbyn rhybuddion parhaus gyda { -brand-fxa }.
account-not-required = Nid oes angen porwr { -brand-name } ar gyfer { -brand-fxa }. Efallai y cewch wybodaeth am wasanaethau { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = A oedd eich manylion wedi'i datgelu yn y tor-data { $breachName }
fb-not-comp = Nid yw'r e-bost hwn wedi ymddangos yn y tor-data { $breachName }
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [zero] Nid yw wedi ymddangos mewn unrhyw dor-data.
        [one] Er hynny, mae wedi ymddangos mewn { $breachCount } tor-data arall.
        [two] Er hynny, mae wedi ymddangos mewn { $breachCount } tor-data arall.
        [few] Er hynny, mae wedi ymddangos mewn { $breachCount } tor-data arall.
        [many] Er hynny, mae wedi ymddangos mewn { $breachCount } tor-data arall.
       *[other] Er hynny, mae wedi ymddangos mewn { $breachCount } tor-data arall.
    }
fb-comp-only = Ymddangosodd yr e-bost hwn yn y tor-data { $breachName }
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [zero] Nid yw'r e-bost wedi ymddangos mewn unrhyw dor-data.
        [one] Ymddangosodd yr e-bost mewn { $breachCount } tor-data hysbys, gan gynnwys { $breachName }.
        [two] Ymddangosodd yr e-bost mewn { $breachCount } tor-data hysbys, gan gynnwys { $breachName }.
        [few] Ymddangosodd yr e-bost mewn { $breachCount } tor-data hysbys, gan gynnwys { $breachName }.
        [many] Ymddangosodd yr e-bost mewn { $breachCount } tor-data hysbys, gan gynnwys { $breachName }.
       *[other] Ymddangosodd yr e-bost mewn { $breachCount } tor-data hysbys, gan gynnwys { $breachName }.
    }

##

no-other-breaches-found = Heb ddarganfod  unrhyw dor-data arall o'r chwilio cychwynnol.
no-results-blurb = Ymddiheuriadau, nid yw'r tor-data hwnnw yn ein cronfa ddata.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Nid yw'ch e-bost yn ymddangos yn y gollyngiad hwn,
    ond gall eich rhif ffôn fod yn agored i niwed o hyd.</span> Mae rhai o'r cyfrifon
    gafodd eu cyfaddawdu yn y gollyngiad Facebook yn cynnwys rhifau ffôn a
    manylion personol eraill ond nid cyfeiriadau e-bost. Os ydych chi erioed wedi
    creu cyfrif Facebook — hyd yn oed os nad ydych yn ei ddefnyddio nawr — 
    rydym yn argymell eich bod yn cymryd y camau hyn i ddiogelu eich hun
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Gosodwch eich manylion i “Fi yn unig” neu osodiad arall nad yw'n gyhoeddusyn <a>eich proffil Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Yn ystod y gollyngiad hwn, cymerodd hacwyr fanylion proffil a osodwyd fel gwybodaeth “agored i'r cyhoedd” neu “wedi'i rannu gyda ffrindiau.”
    Mae modd cyfuno'r manylion hyn â data arall i gael mynediad at fwy fyth o'ch manylion personol a'ch cyfrifon.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span> Newidiwch y cyfrinair, PIN, neu fanylion diogelwch eraill ar eich <a>cyfrifon
     darparwyr ffôn symudol</a> i atal cyfnewid SIM</span>.
facebook-breach-what-to-do-2-copy =
    Mae cyfnewid SIM, sydd hefyd yn cael ei alw'n
    SIM-jacking, yn digwydd pan fydd haciwr yn defnyddio rhifau ffôn, dyddiad geni a
    data arall i gymryd drosodd rhif ffôn cell unigolyn ac yna hacio i mewn i'w e-bost, cyfryngau cymdeithasol a hyd yn oed cyfrifon ariannol.
facebook-breach-what-to-do-3 = Gweld yr holl argymhellion ar ein tudalen gollyngiad Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Yn dangos:

## Updated error messages

error-bot-headline = Chwilio wedi'u hatal dros dro
error-bot-blurb = Rydym yn poeni y gallech chi fod yn bot oherwydd i chi chwilio sawl cyfeiriad e-bost mewn cyfnod byr. Am nawr, rydych wedi eich rhwystro rhag chwilio o'r newydd. Gallwch geisio eto yn nes ymlaen.
error-csrf-headline = Daeth y sesiwn i ben
error-csrf-blurb = Dewiswch fotwm nól eich porwr, ail-lwytho'r dudalen, a cheisio eto.
error-invalid-unsub = Sut i ddad-danysgrifio o rybuddion { -product-name }
error-invalid-unsub-blurb = Bydd angen i chi ddad-danysgrifio o un o'r e-byst anfonodd { -product-name } atoch chi. Gwiriwch eich blwch derbyn am negeseuon o { -brand-team-email }. Dewiswch y ddolen dad-danysgrifio ar waelod yr e-bost.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [zero] Cyfeiriadau e-byst yn cael eu monitro
        [one] Cyfeiriad e-bost yn cael ei fonitro
        [two] Cyfeiriad e-bost yn cael eu monitro
        [few] Cyfeiriad e-bost yn cael eu monitro
        [many] Cyfeiriad e-bost yn cael eu monitro
       *[other] Cyfeiriad e-bost yn cael eu monitro
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [zero] Cyfrineiriau wedi'u hamlygu
        [one] Cyfrinair wedi'i amlygu ym mhob tor-data
        [two] Gyfrinair wedi'u hamlygu ym mhob tor-data
        [few] Cyfrinair wedi'u hamlygu ym mhob tor-data
        [many] Chyfrinair wedi'u hamlygu ym mhob tor-data
       *[other] Cyfrinair wedi'u hamlygu ym mhob tor-data
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [zero] Tor-data hysbys wedi datgelu eich manylion
        [one] Tor-data hysbys wedi datgelu eich manylion
        [two] Tor-data hysbys wedi datgelu eich manylion
        [few] Tor-data hysbys wedi datgelu eich manylion
        [many] Tor-data hysbys wedi datgelu eich manylion
       *[other] Tor-data hysbys wedi datgelu eich manylion
    }
# Button
see-additional-breaches = Gweld Tor-data Ychwanegol
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [zero] Nid yw'r e-bost wedi ymddangos mewn tor-data.
        [one] Ymddangosodd yr e-bost mewn 1 tor-data.
        [two] Ymddangosodd yr e-bost mewn { $breachCount } tor-data.
        [few] Ymddangosodd yr e-bost mewn { $breachCount } tor-data.
        [many] Ymddangosodd yr e-bost mewn { $breachCount } tor-data.
       *[other] Ymddangosodd yr e-bost mewn { $breachCount } tor-data.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Canlyniadau ar gyfer:{ $userEmail }
other-monitored-emails = E-byst eraill sy'n Cael eu Monitro
email-verification-required = Mae Angen Dilysu
fxa-primary-email = E-bost { -brand-fxa } - Cynradd
what-is-a-website-breach = Beth yw tor-data gwefan?
website-breach-blurb = Mae tor-data gwefan yn digwydd pan fydd troseddwyr seibr yn dwyn, copïo neu ddatgelu manylion personol o gyfrifon ar-lein. Mae fel arfer yn ganlyniad i hacwyr yn dod o hyd i fan gwan ym maes diogelwch y wefan. Gall achosion o dor-data ddigwydd hefyd pan fydd manylion cyfrifon yn cael eu datgelu'n ddamweiniol.
security-tips-headline = Awgrymiadau diogelwch i ddiogelu eich hun rhag hacwyr
steps-to-protect = Camau i'w cymryd i ddiogelu eich hunaniaeth ar-lein
take-further-steps = Cymrwch gamau pellach i ddiogelu eich hunaniaeth
alert-about-new-breaches = Rhowch wybod i mi am dor-data newydd
see-if-youve-been-part = Ydych chi wedi bod yn rhan o dor-data ar-lein?
get-ongoing-breach-monitoring = Derbyn monitro tor-data parhaus ar gyfeiriadau e-bost lluosog.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Canfod
new-unsub-error = Bydd angen i chi ddad-danysgrifio o un o'r e-byst { -product-name } a anfonwyd.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [zero] Nid yw wedi ymddangos mewn unrhyw dor-data hysbys.
        [one] Fodd bynnag, ymddangosodd mewn toriadau hysbys eraill yn $ $ torriCount.
        [two] Fodd bynnag, ymddangosodd mewn tor-data hysbys eraill yn { $breachCount }
        [few] Fodd bynnag, ymddangosodd mewn tor-data hysbys eraill yn { $breachCount }
        [many] Fodd bynnag, ymddangosodd mewn tor-data hysbys eraill yn { $breachCount }
       *[other] Fodd bynnag, ymddangosodd mewn tor-data hysbys eraill yn { $breachCount }
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Gwybodaeth ychwanegol, gan gynnwys:
# Title
email-addresses-title = Cyfeiriadau E-bost
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Trosolwg
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Ar { $breachDate }, profodd { $breachTitle } dor-data. Unwaith y cafodd y tor-data ei ddarganfod a'i ddilysu, cafodd ei ychwanegu at ein cronfa ddata ar { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Dewisiadau { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Mewngofnodwyd fel: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Hidlo yn ôl Categori:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Dewislen
to-affected-email = Anfon rhybuddion tor-data at y cyfeiriadau e-bost sydd wedi'i effeithio
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Mae yna ffordd o ddiogelu eich preifatrwydd. Ymunwch â { -brand-name }.
# Link title
learn-more-link = Dysgu rhagor.
email-sent = E-bost wedi ei Anfon!
# Form title
want-to-add = Eisiau ychwanegu e-bost arall?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Gwiriwch y ddolen a anfonwyd at { $userEmail } i'w hychwanegu at { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-bost Wedi'i Wirio'n Llwyddiannus!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Byddwn yn eich hysbysu os yw { $email } yn ymddangos mewn tor-data newydd.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = I weld a rheoli pob e-bost rydych wedi cofrestru ar gyfer monitro tor-data, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = mewngofnodi

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Rheoli pob cyfeiriad e-bost yn { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Hysbysiadau Rhybudd Tor-data
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Ychwanegwyd y tor-data:
how-hackers-work-desc = Diogelwch eich cyfrineiriau gan seiber droseddwyr, gan mai dyna beth maen nhw'n poeni amdano fwyaf.
what-to-do-after-breach-desc = Clowch eich cyfrifon i gadw'ch manylion allan o'r dwylo anghywir.
create-strong-passwords-desc = Gwnewch eich cyfrineiriau'n gryf, yn ddiogel ac yn anodd eu dyfalu.
steps-to-protect-desc = Deallwch y bygythiadau mwyaf cyffredin a gwybod beth i edrych amdano.
five-myths-desc = Dysgwch sut i osgoi arferion cyfrinair gwael sy'n gwneud gwaith hacwyr yn hawdd.
take-further-steps-desc = Darganfyddwch sut i leihau risgiau dwyn hunaniaeth er mwyn rhwystro colledion ariannol.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Newidiadau wedi'u cadw!
# Section headline
rec-section-headline = Beth i'w wneud am y tor-data hwn
rec-section-subhead = Rydym yn argymell eich bod yn cymryd y camau hyn i gadw'ch manylion personol yn ddiogel ac amddiffyn eich hunaniaeth ddigidol.
# Section headline
rec-section-headline-no-pw = Beth i'w wneud i ddiogelu eich manylion personol
rec-section-subhead-no-pw = Er nad oedd cyfrineiriau wedi'u hamlygu yn y tor-data hwn, mae yna gamau y gallwch eu cymryd o hyd i ddiogelu eich manylion personol yn well.
# Button
see-additional-recs = Gweler yr Argymhellion Ychwanegol

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = Ymddangosodd { $affectedEmail } yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [zero] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
        [one] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
        [two] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
        [few] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
        [many] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
       *[other] Ymddangosodd { $numAffectedEmails } o'ch cyfeiriadau e-bost yn y tor-data hwn. <a>Beth i'w wneud nesaf</a>
    }

##

marking-this-subhead = Nodi'r tor-data hwn fel wedi'i ddatrys
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Ar ôl i chi gymryd y camau y gallwch i fynd i'r afael â'r tor-data hwn</span>,
    gallwch ei nodi fel wedi'i ddatrys. Gallwch ddal i gael gafael ar fanylion am y tor-data
    o'ch bwrdd gwaith ar unrhyw adeg.
mark-as-resolve-button = Nodi wedi'i Ddatrys
marked-as-resolved-label = Nodi wedi'i Ddatrys
undo-button = Dadwneud
confirmation-1-subhead = Da! Rydych newydd ddatrys eich tor-data cyntaf.
confirmation-1-body = Cadwch fynd. Gwiriwch eich bwrdd gwaith i weld os oes mwy i'w wneud.
confirmation-2-subhead = Dyna un i chi, hacwyr!
confirmation-2-body = Rydych yn cymryd camau pwysig tuag at ddiogelu eich cyfrifon ar-lein.
confirmation-3-subhead = Un arall wedi mynd. Gwaith da!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = A yw'ch cyfrinair newydd yn unigryw, yn gryf, ac yn anodd ei ddyfalu? <a>Gweld</a>
generic-confirmation-subhead = Mae'r tor-data hwn wedi'i nodi fel wedi'i ddatrys
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [zero] I weld yr holl dor-data sy'n weddill, ewch i'ch bwrdd gwaith.
        [one] I weld y tor-data hwn, ewch i'ch bwrdd gwaith.
        [two] I weld yr holl dor-data sy'n weddill, ewch i'ch bwrdd gwaith.
        [few] I weld yr holl dor-data sy'n weddill, ewch i'ch bwrdd gwaith.
        [many] I weld yr holl dor-data sy'n weddill, ewch i'ch bwrdd gwaith.
       *[other] I weld yr holl dor-data sy'n weddill, ewch i'ch bwrdd gwaith.
    }
return-to-breach-details-link = Nol i fanylion y tor-data
go-to-dashboard-link = Mynd i'r Bwrdd Gwaith
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% wedi'i gwblhau
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [zero] { $numResolvedBreaches } Wedi'u Datrys
        [one] { $numResolvedBreaches } Wedi'i Ddatrys
        [two] { $numResolvedBreaches } Wedi'u Datrys
        [few] { $numResolvedBreaches } Wedi'u Datrys
        [many] { $numResolvedBreaches } Wedi'u Datrys
       *[other] { $numResolvedBreaches } Wedi'u Datrys
    }
progress-intro-subhead = Newydd yn { -product-name }: Nodi datrys tor-data
progress-intro-message =
    Ar ôl adolygu'r manylion am dor-data a chymryd camau i ddiogelu
    eich manylion personol, gallwch nodi eich bod wedi datrys y tor-data.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [zero] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'u nodi eu bod wedi'u datrys
        [one] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'i farcio fel wedi'i ddatrys
        [two] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'u marcio fel wedi'u datrys
        [few] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'u marcio fel wedi'u datrys
        [many] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'u marcio fel wedi'u datrys
       *[other] { $numResolvedBreaches } allan o { $numTotalBreaches } wedi'u marcio fel wedi'u datrys
    }
progress-complete = Mae'r holl dor-data hysbys wedi'u nodi fel rhai wedi'u datrys

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Cychwyn da!</span> Edrychwch ar y tor-data eraill i weld
    pa gamau sydd angen
    eu cymryd.
progress-message-2 =
    <span>Daliwch ati!</span> Mae newidiadau bach fel diweddaru cyfrineiriau yn cael effaith fawr
    ar gadw'ch manylion personol yn ddiogel.
progress-message-3 = <span>Gwaith da wrth ddatrys y tor-data hyn!</span> Daliwch ati. Mae'na ragor i'w wneud.
progress-message-4 = <span>Bron wedi gorffen!</span> Rydych chi bron â chyrraedd y diwedd.
progress-complete-message =
    <span>Teimlo'n dda, ydy?</span> Os ydych chi am ddal ati, mae hwn yn amser da i
    diweddaru mewngofnodion eraill gyda chyfrineiriau cryfach.

##

resolve-this-breach-link = Datrys y tor-data hwn
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Nodi wedi'u Datrys:
hide-resolved-button = Cuddio wedi'u Datrys
show-resolved-button = Dangos wedi'u Datrys
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [zero] Cyfrineiriau wedi'u hamlygu mewn tor-data heb eu datrys
        [one] Cyfrinair wedi'i amlygu mewn tor-data heb eu datrys
        [two] Cyfrineiriau wedi'u hamlygu mewn tor-data heb eu datrys
        [few] Cyfrineiriau wedi'u hamlygu mewn tor-data heb eu datrys
        [many] Cyfrineiriau wedi'u hamlygu mewn tor-data heb eu datrys
       *[other] Cyfrineiriau wedi'u hamlygu mewn tor-data heb eu datrys
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [zero] Tor-data hysbys wedi'u nodi fel wedi'u datrys
        [one] Tor-data hysbys wedi'i nodi fel wedi'i ddatrys
        [two] Tor-data hysbys wedi'u nodi fel wedi'u datrys
        [few] Tor-data hysbys wedi'u nodi fel wedi'u datrys
        [many] Tor-data hysbys wedi'u nodi fel wedi'u datrys
       *[other] Tor-data hysbys wedi'u nodi fel wedi'u datrys
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Newydd
mobile-promo-headline = Dewch â { -brand-name } i'ch ffôn a'ch tabled
mobile-promo-body = Pori cyflym, preifat a diogel ym mhob man yr ewch chi. Mae { -brand-name } ar gael yn Google Play a'r App Store.
mobile-promo-cta = Estyn { -brand-name } ar Android ac iOS
promo-lockwise-headline = Ewch â'ch cyfrineiriau i bob man
lockwise-promo-body = Cadwch olwg ar eich mewngofnodi ar draws pob dyfais. Cewch fynediad diogel iddyn nhw o'ch cyfrifiadur, ffôn neu dabled.
promo-lockwise-cta = Estyn { -brand-lockwise }
fpn-promo-headline = Cuddiwch eich lleoliad rhag gwefannau a thracwyr
promo-fpn-body = Mae { -brand-fpn } yn drysu'r gwefannau a'r casglwyr data sy'n eich proffilio gyda hysbysebion trwy guddio'ch cyfeiriad IP go iawn.
promo-fpn-cta = Estyn { -brand-fpn }
monitor-promo-headline = Dysgwch ragor am dor-data newydd
monitor-promo-body = Derbyniwch neges y tro nesaf y bydd eich manylion personol yn cael ei datgelu mewn tor-data hysbys.
ecosystem-promo-headline = Diogelwch eich bywyd ar-lein gyda chynnyrch preifatrwydd-yn-gyntaf
ecosystem-promo-body = Mae pob un o gynnyrch { -brand-name } yn anrhydeddu ein Addewid Data Personol: Cymryd llai. Cadw nhw'n ddiogel. Dim cyfrinachau.
promo-ecosystem-cta = Gweld yr Holl Gynnyrch
steps-to-resolve-headline = Camau i ddatrys y tor-data hwn
vpn-promo-headline = Nawr yw'r amser i gynyddu'ch diogelwch ar-lein.
vpn-promo-copy = Mae Rhwydwaith Preifat Rhithwir { -brand-Mozilla } yn helpu i ddiogelu eich cysylltiad rhyngrwyd rhag hacwyr ac ysbïwyr.
vpn-promo-cta = Rhowch gynnig ar { -brand-mozilla-vpn }
vpn-promo-headline-new = Arbedwch 50% gyda thanysgrifiad blwyddyn lawn
vpn-promo-copy-new = Diogelwch eich data ar-lein - a dewis cynllun tanysgrifio VPN sy'n gweithio i chi.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Eich lleoliad: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Diogelwch eich hun</em> gyda { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Diogelwyd</em> gan { -brand-mozilla-vpn }.
vpn-banner-title-1 = Rydych wedi'ch diogelu - diolch am ddefnyddio { -brand-mozilla-vpn }.
vpn-banner-title-2 = Mae modd olrhain eich lleoliad os nad ydych yn defnyddio VPN.
vpn-banner-subtitle-2 = Diogelwch eich lleoliad a phori'n ddiogel mewn 3 cham
vpn-banner-status-protected = Statws cyfredol: <em>Diogelwyd ✓</em>
vpn-banner-status-not-protected = Statws cyfredol: <em>Heb ei ddiogelu ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Cyfeiriad IP: { $ip-address }
vpn-banner-step-1 = Tanysgrifiwch i { -brand-mozilla-vpn }
vpn-banner-step-2 = Dewiswch leoliad i'r VPN
vpn-banner-step-3 = Cychwyn y VPN a phori'n ddiogel
vpn-banner-cta = Cael { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Ehangu
# button to close panel
vpn-banner-cta-close = Cau

## Relay and VPN educational/ad units

ad-unit-relay-cta = Dysgu rhagor am { -brand-relay }
ad-unit-vpn-cta = Dysgu rhagor am { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Sut mae cadw'ch cyfeiriad e-bost yn gyfrinach?
# ad 2 heading
ad-unit-2-do-you-worry = Ydych chi'n poeni am ddiogelwch ar Wi-Fi cyhoeddus?
# ad 3 heading
ad-unit-3-stay-in-the-game = Cadw yn y gêm!
ad-unit-3-lets-you-keep = Mae { -brand-mozilla-vpn } yn gadael i chi gadw cysylltiad sefydlog yn ddiogel tra byddwch yn chwarae gemau neu ffrydio ffilmiau.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Atal cyfyngu
# ad 3 list item 2
ad-unit-3-be-anywhere = Byddwch unrhyw le yn y byd
# ad 3 list item 3
ad-unit-3-access-more = Mwy o fynediad
# ad 4 heading
ad-unit-4-shopping-with = Siopa gyda Arallenwau E-bost
ad-unit-4-want-to-buy = Eisiau prynu rhywbeth ar-lein a ddim yn gyfarwydd nac yn ymddiried yn llwyr yn y siop?
ad-unit-4-shop-online = Defnyddiwch arallenw e-bost pryd bynnag y byddwch chi'n siopa ar-lein. Anfonwch y cadarnhad i'ch e-bost go iawn, gallwch ddiffodd yr arallenw yn hawdd unrhyw bryd yn y dyfodol.
# ad 5 heading
ad-unit-5-on-the-go = Ar Daith gyda { -brand-relay }
ad-unit-5-instantly-make = Gwnewch arallenw e-bost personol yn syth yn unrhyw le ac ym mhobman!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Cysylltu wrth fynd
ad-unit-5-privately-sign-in = Defnyddiwch eich arallenw e-bost pan fyddwch chi eisiau mewngofnodi'n breifat i'ch hoff siop goffi neu Wi-Fi cyhoeddus
# ad 5 subheading 2
ad-unit-5-email-receipts = Cael derbynebau e-bost
ad-unit-5-share-custom-email = Rhannwch arallenw e-bost personol ar gyfer derbynebau siopa yn y siop a pheidio rhannu'ch e-bost go iawn
# ad 5 subheading 3
ad-unit-5-use-on-phone = Ei ddefnyddio ar eich ffôn
ad-unit-5-no-matter-where = Does dim gwahaniaeth lle rydych chi, crëwch arllenw e-bost personol mewn eiliadau ar gyfer unrhyw beth rydych chi am ei wneud
# ad 6 heading
ad-unit-6-worry-free = Cofrestriadau Di-bryder
ad-unit-6-want-to-start = Eisiau cychwyn tanysgrifiad newydd, ymateb i wahoddiad, neu gael cod hyrwyddo bargen heb gael sbam yn gorlifo'ch blwch derbyn?
ad-unit-6-before-you-complete = Cyn i chi gwblhau'r cofrestriad nesaf hwnnw, defnyddiwch arallenw e-bost yn lle'ch un go iawn i ddiogelu eich manylion a chadw rheolaeth dros eich blwch derbyn

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premiwm
-brand-monitor-premium = Monitro Premiwm
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cyfrif Mozilla
open-in-new-tab-alt = Agorwch y ddolen mewn tab newydd

## Search Engine Optimization

meta-desc-2 = Darganfyddwch os ydych wedi bod yn rhan o dor-data gyda { -brand-fx-monitor }. Byddwn yn eich helpu i wybod beth i'w wneud nesaf ac yn monitro am unrhyw dor-data newydd ar ôl hynny.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Mewngofnodi
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Datrys Tor-data
site-nav-settings-link = Gosodiadau
site-nav-help-link = Cymorth a Chefnogaeth
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Rhowch gynnig ar ein hoffer diogelwch eraill:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Prif ddewislen
main-nav-button-collapse-label = Cau'r ddewislen
main-nav-button-collapse-tooltip = Cau'r ddewislen
main-nav-button-expand-label = Ehangu'r ddewislen
main-nav-button-expand-tooltip = Ehangu'r ddewislen
main-nav-label = Llywio
main-nav-link-home-label = Cartref
main-nav-link-dashboard-label = Bwrdd Gwaith
main-nav-link-settings-label = Gosodiadau
main-nav-link-faq-label = Cwestiynau Cyffredin
main-nav-link-faq-tooltip = Cwestiynau cyffredin

## User menu

# Obsolete
menu-button-title = Dewislen defnyddiwr
# Obsolete
menu-button-alt = Agor dewislen defnyddiwr
# Obsolete
menu-list-accessible-label = Dewislen cyfrif
# Obsolete
menu-item-fxa-2 = Rheoli eich cyfrif { -brand-mozilla-account }
# Obsolete
menu-item-settings = Gosodiadau
# Obsolete
menu-item-help = Cymorth a chefnogaeth
# Obsolete
menu-item-logout = Allgofnodi
user-menu-trigger-label = Agor dewislen defnyddiwr
user-menu-trigger-tooltip = Proffil
user-menu-manage-fxa-label = Rheoli eich cyfrif { -brand-mozilla-account }
user-menu-settings-label = Gosodiadau
user-menu-settings-tooltip = Ffurfweddu { -brand-mozilla-monitor }
user-menu-help-label = Cymorth a chefnogaeth
user-menu-help-tooltip = Cael cymorth wrth ddefnyddio { -brand-mozilla-monitor }
user-menu-signout-label = Allgofnodi
user-menu-signout-tooltip = Allgofnodi o { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Amodau Gwasanaeth
privacy-notice = Hysbysiad Preifatrwydd
github = { -brand-github }
footer-nav-all-breaches = Pob Tor-data
footer-external-link-faq-label = Cwestiynau Cyffredin
footer-external-link-faq-tooltip = Cwestiynau cyffredin

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Tudalen heb ei chanfod
error-page-error-404-copy = Ymddiheuriadau, nid yw'r dudalen rydych yn chwilio amdani yn bodoli bellach.
error-page-error-404-cta-button = Nôl
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Aeth rhywbeth o'i le
error-page-error-other-copy = Ceisiwch eto neu dewch yn ôl yn nes ymlaen

## Breach overview page

all-breaches-headline-2 = Pob tor-data wedi'i ganfod gan { -brand-fx-monitor }
all-breaches-lead = Rydym yn monitro'r holl achosion hysbys o dor-data i ganfod a gafodd eich manylion personol eu peryglu. Dyma restr lawn o’r holl dor-data sydd wedi’u hadrodd ers 2007.
search-breaches = Chwilio am Dor-data
# the kind of user data exposed to hackers in data breach.
exposed-data = Data datgeledig:

## Public breach detail page

find-out-if-2 = Darganfyddwch a oeddech yn gysylltiedig â'r tor-data hwn
find-out-if-description = Byddwn yn eich helpu i weld yn gyflym a oedd eich cyfeiriad e-bost wedi'i ddatgelu drwy'r tor-data hwn, a gwybod beth i'w wneud nesaf.
breach-detail-cta-signup = Gwiriwch am dor-data

## Floating banner

floating-banner-text = Rhowch hwb i'ch diogelwch ar-lein gyda newyddion, awgrymiadau a diweddariadau gan { -brand-Mozilla }.
floating-banner-link-label = Ymuno
floating-banner-dismiss-button-label = Dim diolch

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Enw, golwg newydd a rhagor o ffyrdd i <b>adennill eich preifatrwydd</b>.
banner-monitor-rebrand-dismiss-button-label = Iawn
banner-monitor-rebrand-dismiss-button-tooltip = Cau
loading-accessibility = Yn llwytho
