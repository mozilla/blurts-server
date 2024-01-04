# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Adroddiad { -product-name }
report-date = Dyddiad yr Adroddiad:
email-address = Cyfeiriad E-bost:

# A link to legal information about mozilla products.
legal = Cyfreithiol

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

# Button text
verify-email-cta = Dilysu E-bost

# Button text
see-all-breaches = Gweld Pob Tor-data

# Headline of verification email
email-link-expires = Daw'r ddolen hon i ben mewn 24 awr
email-verify-blurb = Gwirio eich e-bost i'w ychwanegu at { -product-name } a chofrestru ar gyfer rhybuddion am dor-data.

# Email headline
email-found-breaches-hl = Dyma'ch crynodeb o achosion o dor-data yn y gorffennol

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Crynodeb o dor-data ar { $userEmail }

# Email headline
email-no-breaches-hl = Ymddangosodd { $userEmail } mewn 0 tor-data hysbys

# Email headline
email-alert-hl = Ymddangosodd { $userEmail } mewn tor-data newydd

##

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

# Section headline
monitor-another-email = Am fonitro e-bost arall?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Rydych chi'n derbyn yr e-bost awtomataidd hwn fel tanysgrifiwr { -product-name }. <br>Mae croeso i chi newid eich dewisiadau e-bost unrhyw bryd <a { $unsubscribe-link-attr }>yma</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Data tor-data wedi'i ddarparu gan <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Mae gennych dor-data heb eu datrys
email-unresolved-subhead = Mae eich e-bost wedi'i amlygu. <br>Trwsiwch ef ar unwaith gyda { -product-name }.
email-is-affected = Mae eich e-bost, { $email-address }, yn cael ei effeithio gan o leiaf un tor-data
email-more-detail = Mewngofnodwch i { -product-name } nawr i weld mwy o fanylion am eich tor-data (gan gynnwys pryd y digwyddodd hyn a pha ddata a ddatgelwyd), a dysgwch beth ddylech chi ei wneud pan fydd eich e-bost wedi'i ddatgelu mewn tor-data.
email-breach-status = Statws tor-data presennol
# table row 1 label
email-monitored = Cyfanswm yr e-byst a gafodd eu monitro:
# table row 2 label
email-breach-total = Cyfanswm y nifer yr achosion o dor-data:
# table row 3 label
email-resolved = Tor-data a ddatryswyd:
# table row 4 label
email-unresolved = Tor-data heb eu datrys:
email-resolve-cta = Datrys tor-data

## Verification email

email-verify-heading = Diogelwch eich data, gan ddechrau nawr
email-verify-subhead = Dilyswch eich e-bost i ddechrau diogelu eich data ar ôl tor-data.
email-verify-simply-click = Cliciwch ar y ddolen isod i orffen dilysu'ch cyfrif.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Dyma eich crynodeb tor-data
email-breach-detected = Mae canlyniadau chwilio eich cyfrif { $email-address } wedi canfod y gallai eich e-bost fod wedi'i ddatgelu. Rydym yn argymell eich bod yn gweithredu nawr i ddatrys y tor-data hwn.
email-no-breach-detected = Newyddion da! Nid ydym wedi canfod unrhyw doriadau data sy'n effeithio ar eich e-bost, { $email-address }.
email-dashboard-cta = Mynd i'r Bwrdd Gwaith

## Breach alert

email-may-have-been-exposed = Mae'n bosibl bod eich e-bost wedi'i ddatgelu mewn tor-data
email-spotted-new-breach = Rydym wedi gweld tor-data newydd
