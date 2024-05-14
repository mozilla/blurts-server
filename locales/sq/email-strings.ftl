# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = Ligjore

# Unsubscribe link in email.
email-unsub-link = Shpajtohuni

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Këtë email po e merrni ngaqë jeni regjistruar për sinjalizime { -product-name }. S’i doni më këto email-e? { $unsubLink }. Ky është një email i automatizuar. Për asistencë vizitoni { $faqLink }.

# Button text
verify-email-cta = Verifikoni Email

# Headline of verification email
email-link-expires = Kjo lidhje skadon pas 24 orësh

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } i gjeti të dhënat tuaja në këto cenime

# Subject line of email
email-subject-no-breaches = { -product-name } s’gjeti cenime të ditura

# Subject line of email
email-subject-verify = Verifikoni email-in tuaj për { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } ju sinjalizon rreth shkeljesh të dhënash që prekin të dhëna tuajat personale. 
    Deri këtu, s’janë gjetur shkelje. Do t’ju dërgojmë një sinjalizim, nëse një adresat tuaja email shfaqet në një shkelje të re.

email-breach-alert-blurb =
    { -product-name } ju sinjalizon rreth shkeljesh të dhënash që prekin të dhëna tuajat personale. 
    Sapo morëm hollësi rreth një shkelje tjetër të të dhënave të shoqërisë.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = Të dhëna cenimesh sjellë nga <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Keni cenime të pazgjidhura
email-unresolved-subhead = Email-i juaj është ekspozuar. <br>Ndreqeni që tani me { -product-name }.
email-is-affected = Email-i juaj, { $email-address }, është prekur të paktën nga një cenim të dhënash
email-more-detail = Bëni hyrjen në llogarinë tuaj { -product-name } tani që të shihni më tepër hollësi rreth cenimeve që ju prekin (përfshi kur ndodhën dhe ç’të dhëna u ekspozuan) dhe mësoni se ç’duhet të bëni, kur email-i juaj është ekspozuar në një cenim të dhënash.
email-breach-status = Gjendje e tanishme cenimi
# table row 1 label
email-monitored = Email-e të mbikëqyrur gjithsej:
# table row 2 label
email-breach-total = Numër cenimesh gjithsej:
# table row 3 label
email-resolved = Cenime të zgjidhura:
# table row 4 label
email-unresolved = Cenime të pazgjidhura:
email-resolve-cta = Zgjidhni cenime

## Verification email

email-verify-heading = Ruani të dhënat tuaja, duke filluar që tani
email-verify-subhead = Që të filloni të mbroni të dhënat tuaja pas një cenimi, verifikoni email-in tuaj.
email-verify-simply-click = Thjesht klikoni mbi lidhjen më poshtë që të përfundojë verifikimi i llogarisë tuaj.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Ja përmbledhja për cenimin e të dhënave tuaja
email-breach-detected = Përfundime kërkimesh për llogarinë tuaj { $email-address } kanë pikasur se email-i juaj mund të jetë ekspozuar. Rekomandojmë që të veproni që tani për ta zgjidhur këtë cenim.
email-dashboard-cta = Kaloni te Pulti

## Breach alert

email-spotted-new-breach = Vumë re një cenim të ri të dhënash
