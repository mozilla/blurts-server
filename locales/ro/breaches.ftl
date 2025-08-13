# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-social-title = Toate încălcările securității datelor detectate de { -brand-fx-monitor }
breach-all-meta-social-description = Răsfoiește lista completă a încălcărilor cunoscute ale securității datelor detectate de { -brand-fx-monitor }, apoi afli dacă au fost expuse și informațiile tale.
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

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Actualizează-ți întrebările de securitate.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = În cele mai multe cazuri, îți recomandăm să îți actualizezi întrebările de securitate pe site-ul web al companiei. Dar <b>site-ul lor web poate fi nefuncționat sau poate avea conținut rău intenționat</b>, așa că ai grijă dacă <breached-company-link>intri pe site-ul</breached-company-link>. Pentru o protecție suplimentară, actualizează-ți aceste întrebări de securitate pentru orice cont important în care le-ai folosit și creează-ți parole unice pentru toate conturile.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creează parole unice și puternice pentru orice cont în care ai reutilizat parolele.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Ia legătura cu { $companyName } și informează-i despre această încălcare a securității datelor și întreabă-i ce măsuri specifice poți lua.
