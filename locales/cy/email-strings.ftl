# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Cliciwch y botwm Gwirio fy E-bost o fewn 24 awr i gadarnhau eich cyfrif Firefox Monitor. Yna bydd eich adroddiad yn cael ei anfon atoch.
verify-my-email = Gwirio fy E-bost
report-scan-another-email = Sganio E-bost arall gyda { -product-name }
automated-message = E-bost awtomatig yw hwn; os ydych wedi derbyn yr e-bost hwn ar gam, nid oes angen gweithredu.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Rydym wedi anfon y neges hon at { $userEmail } oherwydd dewisodd y cyfeiriad e-bost rybuddion gan { -product-name }.
unsubscribe-email-link = Os nad oes angen rhybuddion { -product-name } arnoch chi, dad-danysgrifwch.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Adroddiad { -product-name }
report-date = Dyddiad yr Adroddiad:
email-address = Cyfeiriad E-bost:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Beth i'w Wneud Nesaf
report-headline =
    { $breachCount ->
        [zero] Go lew, hyd yma
        [one] Ymddangosodd eich cyfrif mewn { $breachCount } tor-data.
        [two] Ymddangosodd eich cyfrifon mewn { $breachCount } tor-data.
        [few] Ymddangosodd eich cyfrifon mewn { $breachCount } tor-data.
        [many] Ymddangosodd eich cyfrifon mewn { $breachCount } tor-data.
       *[other] Ymddangosodd eich cyfrifon mewn { $breachCount } tor-data.
    }
report-subhead-no-breaches =
    Nid yw'ch cyfrif yn ymddangos yn ein hadroddiad llawn o doriadau.
    Mae hynny'n newyddion da, ond mae mwy y gallwch chi ei wneud.
    Mae tor-data yn digwydd ar unrhyw adeg, felly parhewch i ddarllenwch i wybod sut y gallwch ddiogelu eich cyfrineiriau.
report-subhead-found-breaches = Hwn yw eich adroddiad Firefox Monitor llawn, sy'n cynnwys yr holl dor-data sy'n hysbys am y cyfeiriad e-bost hwn.
report-pwt-blurb =
    Mae cyfrineiriau mor werthfawr, mae miloedd ohonyn nhw'n cael eu dwyn bob dydd a'u masnachu neu eu gwerthu ar y farchnad ddu.
    Mae cyfrineiriau cryfach yn diogelu'ch cyfrifon a'r holl fanylion personol sy'n bodoli o'u mewn.
report-pwt-headline-1 = Defnyddio cyfrinair gwahanol ar gyfer pob cyfrif
report-pwt-summary-1 =
    Mae ailddefnyddio'r un cyfrinair ym mhobman yn agor y drws i hacwyr.
    Maen nhw'n gallu defnyddio'r cyfrinair hwnnw i fewngofnodi i'ch cyfrifon eraill.
report-pwt-headline-2 = Creu cyfrineiriau cryf, unigryw
report-pwt-summary-2 =
    Mae hacwyr yn defnyddio rhestrau o filoedd o gyfrineiriau cyffredin i geisio dyfalu eich un chi.
    Yr hiraf a mwyaf annisgwyl ydyw, yr anoddaf fydd i'w ddyfalu.
report-pwt-headline-3 = Rhaid trin cwestiynau diogelwch fel cyfrineiriau ychwanegol
report-pwt-summary-3 = Nid yw gwefannau yn gwirio bod eich atebion yn gywir, dim ond eu bod yn cyfateb bob tro. Crëwch atebion hir, ar hap a'u storio yn rhywle diogel.
report-pwt-headline-4 = Defnyddio rheolwr cyfrinair
report-pwt-summary-4 = Mae gwasanaethau fel 1Password, LastPass, Dashlane, a Bitwarden yn creu cyfrineiriau cryf, yn eu storio'n ddiogel, a'u llenwi i mewn i wefannau felly does dim rhaid i chi gofio pob un.
# A link to legal information about mozilla products.
legal = Cyfreithiol
# Share Firefox Monitor by email subject line
share-by-email-subject = Gweld os ydych chi wedi bod yn rhan o dor-data.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Helo,
    Mae gan { -brand-name } wasanaeth am ddim lle gallwch wirio i weld a ydych wedi bod yn rhan o dor- data. Dyma sut mae'n gweithio:
    1. Ewch i { "https://monitor.firefox.com" } a chwiliwch am eich e-bost.
    2. Edrychwch i weld os yw eich cyfrifon ar-lein wedi'u datgelu mewn tor-data.
    3. Derbyn awgrymiadau gan { -product-name } am yr hyn i'w wneud nesaf.
# Unsubscribe link in email.
email-unsub-link = Dad-danysgrifio
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Rydych yn derbyn yr e-bost hwn oherwydd eich bod wedi cofrestru ar gyfer rhybuddion { -product-name }. Dim eisiau'r e-byst hyn bellach? { $unsubLink }. Mae hwn yn e-bost awtomataidd. Am gymorth, ewch i { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Rydych yn derbyn yr e-bost hwn oherwydd eich bod wedi cofrestru ar gyfer rhybuddion { -product-name }. Mae hwn yn e-bost awtomataidd. Am gymorth, ewch i { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Gweld Fy Mwrdd Gwaith
# Button text
verify-email-cta = Dilysu E-bost
# Headline of verification email
email-link-expires = Daw'r ddolen hon i ben mewn 24 awr
email-verify-blurb = Gwirio eich e-bost i'w ychwanegu at { -product-name } a chofrestru ar gyfer rhybuddion am dor-data.
# Email headline
email-found-breaches-hl = Dyma'ch crynodeb o achosion o dor-data yn y gorffennol
# Email headline
email-breach-summary-for-email = Crynodeb o dor-data ar { $userEmail }
# Email headline
email-no-breaches-hl = Ymddangosodd { $userEmail } mewn 0 tor-data hysbys
# Email headline
email-alert-hl = Ymddangosodd { $userEmail } mewn tor-data newydd
# Subject line of email
email-subject-found-breaches = Mae { -product-name } wedi canfod gwybodaeth amdanoch yn y tor-data yma
# Subject line of email
email-subject-no-breaches = Nid yw { -product-name } wedi canfod unrhyw dor-data hysbys
# Subject line of email
email-subject-verify = Gwirio eich e-bost ar gyfer { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Dysgu rhagor am { $fxmLink }
email-sensitive-disclaimer =
    Oherwydd natur sensitif y tor-data hwn, nid oes modd canfod yr e-byst hyn.
    Rydych yn derbyn y rhybudd hwn oherwydd eich bod wedi eich gwirio fel perchennog y cyfeiriad e-bost hwn.
fxm-warns-you-no-breaches = Mae { -product-name } yn eich rhybuddio am dor-data sy'n cynnwys eich manylion personol. Hyd yn hyn, nid ydym wedi darganfod unrhyw dor-data. Byddwn yn anfon rhybudd atoch os bydd eich cyfeiriad e-bost yn ymddangos mewn tor-data newydd.
fxm-warns-you-found-breaches = Mae { -product-name } yn eich rhybuddio am dor-data sy'n cynnwys eich manylion personol. Rydych chi hefyd wedi cofrestru i dderbyn rhybuddion os bydd eich cyfeiriad e-bost yn ymddangos mewn tor-data newydd.
email-breach-alert-blurb = Mae { -product-name } yn eich rhybuddio am dor-data sy'n cynnwys eich manylion personol. Rydym newydd dderbyn fanylion am dor-data cwmni arall.
# List headline
faq-list-headline = Cwestiynau cyffredin
# Link Title
faq-v2-1 = Nid wy'n adnabod y cwmni neu'r wefan hon. Pam ydw i yn y tor-data hwn?
# Link Title
faq-v2-2 = A oes angen i mi wneud unrhyw beth os digwydd tor-data flynyddoedd yn ôl neu os yw hwn yn hen gyfrif?
# Link Title
faq-v2-3 = Rwyf newydd ddeall fy mod i mewn tor-data. Beth ddylwn i ei wneud nesaf?
# Link Title
faq-v2-4 = Sut mae { -product-name } yn trin gwefannau sensitif?
