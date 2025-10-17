# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Base de datos de violation del datos, { -brand-fx-monitor }
breach-all-meta-social-title = Tote le violationes disvelate per { -brand-fx-monitor }
breach-all-meta-social-description = Navigar per le lista complete de violationes note disvelate per { -brand-fx-monitor }, pois discoperi si tu informationes era exponite.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = { $company } Violation de datos – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Era tu afficite per le violation de datos de { $company }?
breach-detail-meta-social-description = Usa { -brand-fx-monitor } pro discoperir si tu informationes personal era exponite in iste violation, e comprender que facer postea.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestor de contrasigno de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Actualisa tu contrasignos e activa le authentication a duo factores (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = In le major parte del casos, nos consilia que tu cambia tu contrasigno sur le sito web del compania. Ma <b>lor sito web pote esser inactive o haber contento maligne</b>, assi usa attention si tu <breached-company-link>visita le sito</breached-company-link>. Pro ulterior protection, verifica que tu usa contrasignos unic pro tote le contos, assi que ulle contrasignos revelate non pote esser usate pro acceder altere contos. { $passwordManagerLink } pote adjutar te con securitate a tener tracia de tote tu contrasignos.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Protege tu email con un servicio de mascas de email como { $firefoxRelayLink }.
breach-checklist-email-body = Isto pote celar tu ver adresse de e-mail, reinviante le messages a tu ver cassa de entrata.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Survelia tu reporto de credito pro contos, prestos, o cartas de credito que tu non recognosce.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Tu alsi pote considerar de gelar tu credito sur { $equifaxLink }, { $experianLink } e { $transUnionLink } pro stoppar scammers de aperir nove contos in tu nomine.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Reporta iste violation al emissor de tu carta de credito e requesta un nove carta con un nove numero.
breach-checklist-cc-body = Tu deberea alsi revider le transactiones de tu carta de credito pro cargas non recognoscite.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifica tu banca immediatemente que tu numero de conto ha essite compromittite.
breach-checklist-bank-body = Facer lo plus velocemente poterea dar te plus protectiones legal pro adjutar te a recuperar ulle perdita. Tu alsi deberea verificar tu contos pro ulle debitos incognite.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifica tu emissor de carta e cambia tu PIN immediatemente.
breach-checklist-pin-body = Verifica que tu nove PIN, o omne altere PIN, non include numeros facilemente divinabile, tal como tu data de nascentia o adresse.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Usa internet privatemente con un VPN, como { $mozillaVpnLink }.
breach-checklist-ip-body = Tu adresse IP (adresse de Protocollo Internet) indica tu position e tu fornitor del servicio internet. Un VPN pote celar tu real adresse IP assi que tu pote usar internet reservatemente.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambia ulle contrasignos o PINs que include ulle parte de tu adresse.
breach-checklist-address-body = Le adresses es facile a trovar in le registros public e pote render facile divinar ille contrasignos e PINs.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambia ulle contrasignos o PINs que include tu data de nascentia.
breach-checklist-dob-body = Le datas de nascentia es facile a trovar in registros public, e illes qui lo trova poterea facilemente divinar tu PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Protege tu numero de telephono con un servicio mascante como { $firefoxRelayLink }, que cela tu ver numero de telephono.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Actualisa tu demandas de securitate.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = In le major parte del casos, nos consilia que tu actualisa tu demandas de securitate sur le sito web del compania. Ma <b>lor sito web pote esser inactive o haber contento maligne</b>, assi usa attention si tu <breached-company-link>visita le sito</breached-company-link>. Pro ulterior protection, actualisa iste demandas de securitate sur ulle contos importante ubi tu los ha usate, e crea contrasignos unic pro totes contos.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea unic, contrasignos forte pro ulle conto ubi tu ha re-usate contrasignos.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un gestor de contrasignos como { $passwordManagerLink } (que es gratuite e integrate al navigator { -brand-firefox }) pote adjutar te a tener tracia de tote tu contrasignos e acceder los con securitate ab tote tu apparatos.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Contacta { $companyName } pro informar les de iste violation e demandar qual mesuras specific tu pote prender.
