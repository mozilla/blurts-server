# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Baza de date cu încălcări ale securității datelor —  { -brand-fx-monitor }
breach-all-meta-social-title = Toate încălcările securității datelor detectate de { -brand-fx-monitor }
breach-all-meta-social-description = Răsfoiește lista completă a încălcărilor cunoscute ale securității datelor detectate de { -brand-fx-monitor }, apoi afli dacă au fost expuse și informațiile tale.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Încălcare a securității datelor la { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Ai fost afectat(ă) de încălcarea securității datelor de la { $company }?
breach-detail-meta-social-description = Folosește { -brand-fx-monitor } ca să afli dacă datele tale cu caracter personal au fost expuse în această încălcare a securității datelor și ca să înțelegi ce să faci în continuare.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Manager de parole { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Actualizează-ți parolele și activează autentificarea în doi pași (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = În cele mai multe cazuri, îți recomandăm să îți schimbați parola pe site-ul web al companiei. Dar <b>site-ul lor web poate fi nefuncțional sau poate avea conținut rău intenționat</b>, așa că ai grijă dacă <breached-company-link>intri pe site-ul</breached-company-link>. Pentru o protecție suplimentară, asigură-te că utilizezi parole unice pentru toate conturile, astfel încât parolele expuse să nu poată fi folosite pentru acces la alte conturi. { $passwordManagerLink } te poate ajuta să urmărești în siguranță toate parolele.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Protejează-ți adresa de e-mail cu un serviciu de mascare a adreselor de e-mail, cum ar fi { $firefoxRelayLink }.
breach-checklist-email-body = Îți poate ascunde adresa adevărată de e-mail în timp ce redirecționezi mesajele de e-mail către căsuța ta de e-mail reală.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Monitorizează-ți raportul de credit pentru conturi, împrumuturi sau carduri de credit pe care nu le recunoști.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Poți lua în calcul și blocarea creditului pe { $equifaxLink }, { $experianLink } și { $transUnionLink } ca să împiedici escrocii să deschidă conturi noi în numele tău. E gratuit și nu îți va afecta scorul de credit.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Raportează această încălcare a securității către emitentul cardului de credit și solicită un card nou cu un număr nou.
breach-checklist-cc-body = De asemenea, ar trebui să verifici extrasele cardului de credit pentru debitări nerecunoscute.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Anunță imediat banca despre compromiterea numărului de cont.
breach-checklist-bank-body = Cu cât o faci mai rapid, cu atât vei putea beneficia de mai multe protecții legale care să te ajute să recuperezi orice pierderi. De asemenea, trebuie să îți verifici și conturile pentru orice debitări nerecunoscute.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifică emitentul cardului și schimbă imediat codul PIN.
breach-checklist-pin-body = Asigură-te că noul PIN sau orice alt PIN nu include numere ușor de ghicit, cum ar fi data nașterii sau adresa.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Folosește internetul în mod privat cu un VPN, cum ar fi { $mozillaVpnLink }.
breach-checklist-ip-body = Adresa ta IP (Internet Protocol) indică locația ta și furnizorul de servicii de internet. Un VPN poate ascunde adresa IP reală, astfel încât să poți utiliza internetul în mod privat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Schimbă orice parole sau coduri PIN care includ orice parte a adresei tale.
breach-checklist-address-body = Adresele sunt ușor de găsit în registrele publice și pot face acele parole și coduri PIN ușor de ghicit.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Schimbă orice parole sau coduri PIN care includ data ta de naștere.
breach-checklist-dob-body = Datele de naștere sunt ușor de găsit în registrele publice, iar cei care le găsesc ar putea ghici cu ușurință codul PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Protejează-ți numărul de telefon cu un serviciu de mascare precum { $firefoxRelayLink }, care îți ascunde numărul real de telefon.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Actualizează-ți întrebările de securitate.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = În cele mai multe cazuri, îți recomandăm să îți actualizezi întrebările de securitate pe site-ul web al companiei. Dar <b>site-ul lor web poate fi nefuncționat sau poate avea conținut rău intenționat</b>, așa că ai grijă dacă <breached-company-link>intri pe site-ul</breached-company-link>. Pentru o protecție suplimentară, actualizează-ți aceste întrebări de securitate pentru orice cont important în care le-ai folosit și creează-ți parole unice pentru toate conturile.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creează parole unice și puternice pentru orice cont în care ai reutilizat parolele.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un manager de parole precum { $passwordManagerLink } (care este gratuit și încorporat în browserul { -brand-firefox }) te poate ajuta să îți urmărești toate parolele și să le accesezi în siguranță de pe toate dispozitivele tale.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Ia legătura cu { $companyName } și informează-i despre această încălcare a securității datelor și întreabă-i ce măsuri specifice poți lua.
