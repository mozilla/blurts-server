# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } woktzijob'al
report-date = Rajilab'alil q'ij rech woktzijob'al
email-address = Kemriqonib'al rech taqoqxa'nib'al:

# A link to legal information about mozilla products.
legal = Rech taqanik

# Unsubscribe link in email.
email-unsub-link = Uchupik utz'ib'axik ib'

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Xul we taqoqxa'nib'al awuk' rumal xatz'ib'aj awib' pa taq na'b'anem { -product-name }. ¿Man kawaj ta chi we taq taqoqxa'nib'al? { $unsubLink }. Wa' jun taqoqxa'nib'al pa utukelam. Chech toq'ab'al, chasolij { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Xul we taqoqxa'nib'al awuk' rumal xatz'ib'aj awib' pa taq na'b'anem { -product-name }. Wa' jun taqoqxa'nib'al pa utukelam. Chech toq'ab'al, chasolij { $faqLink }.

# Button text
verify-email-cta = Rilawachixik taqoqxa'nib'al

# Button text
see-all-breaches = Chawila' ronojel taq retztaqan

# Headline of verification email
email-link-expires = We taq kemwiqb'al kq'ax uq'ijol pa 24 ramaj
email-verify-blurb = Chaq'atuj le ataqoqxa'nib'al chech uya'ik pa { -product-name } chi'l chatz'ib'aj awib' chech jun retztaqan

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-no-breaches = { -product-name }chariqa' taq retztaqan le man eta'matal taj

# Subject line of email
email-subject-verify = Chaq'atuj le akemtaqoqxa'nib'al cheh { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Chaweta'maj nik'aj chik chi rij { $fxmLink }

email-sensitive-disclaimer = Ruma nim ucholajil we retztaqan, le nik'aj chi taq taqoqxa'nib'al man utz taj keq'alajisax chi kiwach uk'iyal. xopan we na'b'anen awuk' rumal qas xqilo chi at at ajchoq'e we taqoqxa'nib'al

fxm-warns-you-no-breaches = { -product-name } kuya' ub'ixik chi awech we k'o taq retztaqan chi rij le awinaqilal q'alajisanem. Chech we chanim man k'o retztaqan riqom. Kqataqn ju na'b'anem awuk' we kq'alajin le ataqoqxa'nib'al pa jun k'ak' retztaqan.

fxm-warns-you-found-breaches = { -product-name } kuya' ub'ixik chi awech chi rij taq retztaqan le k'o chi rij le awinaqilal q'alajisanem. Attz'ib'atalik are chi kopan na'b'anem awuk' we kq'alajin le akemriqonib'al pa jun k'ak' retztaqan.

email-breach-alert-blurb = { -product-name } kuya' ub'ixik chi awech we k'o retztaqan chi rij le awinaqilal q'alalajisam. K'ate xul taq ucholajil quk' chi rij jun k'ak' retztaqan rech juq'attzij rech k'aywoka.j

# Section headline
monitor-another-email = Kawaj kawilawachij jun chi taqoqxa'nib'al?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Ktajin kopan we taqoqxa'nib'al pa utukelam awuk' rech utz'ib'axik ib' pa { -product-name }<br>Chak'exa' le ajawatal taqoqxa'nib'al we kawaj xaq jampa' aq'anoq <a { $unsubscribe-link-attr }>waral</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Retztaqan rech juq'attzij ya'om rumal <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = K'o taq retztaqan k'a maja' kawutzirisaj
email-unresolved-subhead = Le ataqoqxa'nib'al xlik'ib'axik.  <br>Chawutzirisaj ruk' { -product-name }.
email-is-affected = Le ataqoqxa'nib'al, { $email-address }, b'anom k'ax chech rumal jun on nik'aj chi retztaqan rech juq'attzij.
email-more-detail = Chamajij chak pa { -product-name } chanim chech rilik nik'aj chi ucholajil chi rij taq retztaqan (rachi'l are taq xajtajik chi'l jachike juq'attzij xlik'ib'axik), chaweta'maj jas rajawaxik kab'ano are taq klik'ib'ax le ataqoqxa'nib'al pa jun retztaqan rech juq'attzij.
email-breach-status = kemub'antajik retztaqan chanim
# table row 1 label
email-monitored = Chi ronojel taqoqxa'nib'al ilawachim:
# table row 2 label
email-breach-total = Chi ronojel rajilab'alil retztaqan:
# table row 3 label
email-resolved = Taq retztaqan utzirisam:
# table row 4 label
email-unresolved = Taq retztaqan k'a maja' kutzirisaxik:
email-resolve-cta = Taq retztaqan xutzirisaxik

## Verification email

email-verify-heading = Chachajij le ajuq'attzij, chamajij chanim
email-verify-subhead = Chawilawachij le ataqoqxa'nib'al chech umajixik uchajixik le ajuq'attzij are taq kxajtaj jun retztaqan.
email-verify-simply-click = Xew chapitz'a' le kemwiqb'al chi uxe' chech uk'isik ronojel le akemb'i'aj.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Are wa' nitz'irisanem chi rij le retztaqan rech juq'attzij
email-breach-detected = Chatzukuj taq uwachinem { $email-address } xriqitaj rumal le akemb'i'aj chi xlik'ib'ax le ataqoqxa'nib'al. Kqaya' utz na'oj chi awech chi kawutzirisaj chanim.
email-no-breach-detected = Utz ub'ixkil! Man k'o ta retztaqan qariqom le kub'an k'ax chech ataqoqxa'nib'al, { $email-address }
email-dashboard-cta = Utz katb'e pa k'olwokaj rech rilawachixik

## Breach alert

email-may-have-been-exposed = Wene xlik'ib'ax le ataqoqxa'nib'al pa jun retztaqan rech juq'attzij
email-spotted-new-breach = Xqariq jun k'ak' retztaqan rech juq'attzij
