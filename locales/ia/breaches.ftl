# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Datos de violation de securitate
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Violationes de datos pro { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } email surveliate
       *[other] { $count } de { $total } emails surveliate
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Gerer emails

## Breaches resolved filter

filter-label-unresolved = Violationes non resolvite
filter-label-resolved = Violationes resolvite

## Breaches table

column-company = COMPANIA
column-breached-data = DATOS VIOLATE
column-detected = DISCOPERITE
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Resolvite
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Active
breaches-resolve-heading = Resolver iste violation:
breaches-none-headline = Nulle violationes trovate
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Nulle violationes note era signalate pro { $email }. Nos continuara a surveliar iste email e te facera saper si ulle nove violationes eveni.
breaches-none-cta-blurb = Vole tu surveliar un altere adresse email?
breaches-none-cta-button = Adder adresse email
breaches-all-resolved-headline = Tote le violationes resolvite
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Ben facite! Tu ha resolvite tote le violationes pro { $email }. Nos continuara a surveliar iste email e te facera saper si ulle nove violationes eveni.
breaches-all-resolved-cta-blurb = Vole tu surveliar un altere adresse email?
breaches-all-resolved-cta-button = Adder adresse email
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Le { $breachDate }, { $companyName } era violate. Post le discoperta e verification de iste violation, nos lo ha addite a nostre base de datos le { $addedDate }. Iste violation include: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestor de contrasigno de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-2 = Cura que tu contrasigno es unic e difficile a divinar. Si iste contrasigno es usate con altere contos, non oblida de cambiar lo in illos tamben. { $passwordManagerLink } pote adjutar te a tener tracia de tote tu contrasignos in securitate.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-body = Isto pote celar tu ver adresse de e-mail, reinviante le messages a tu ver cassa de entrata.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Survelia tu reporto de credito pro contos, prestos, o cartas de credito que tu non recognosce.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Reporta iste violation al emissor de tu carta de credito e requesta un nove carta con un nove numero.
breach-checklist-cc-body = Tu deberea alsi revider le transactiones de tu carta de credito pro cargas non recognoscite.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Notifica tu banca immediatemente que tu numero de conto ha essite compromittite.
breach-checklist-bank-body = Facer lo plus velocemente poterea dar te plus protectiones legal pro adjutar te a recuperar ulle perditas.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifica tu emissor de carta e cambia tu PIN immediatemente.
breach-checklist-pin-body = Verifica que tu nove PIN, o omne altere PIN, non include numeros facilemente divinabile, tal como tu data de nascentia o adresse.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-body = Tu adresse IP (adresse de Protocollo Internet) indica tu position e tu fornitor del servicio internet. Un VPN pote celar tu real adresse IP assi que tu pote usar internet reservatemente.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambia ulle contrasignos o PINs que include ulle parte de tu adresse.
breach-checklist-address-body = Le adresses es facile a trovar in le registros public e pote render facile divinar ille contrasignos e PINs.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambia ulle contrasignos o PINs que include tu data de nascentia.
breach-checklist-dob-body = Le datas de nascentia es facile a trovar in registros public, e illes qui lo trova poterea facilemente divinar tu PIN.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-body = Usa longe, aleatori responsas, e conserva los in un loco secur. Face lo ubique tu ha usate le mesme demandas de securitate.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea unic, contrasignos forte pro ulle conto ubi tu ha re-usate contrasignos.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un gestor de contrasignos como { $passwordManagerLink } (que es gratuite e integrate al navigator { -brand-firefox }) pote adjutar te a tener tracia de tote tu contrasignos e acceder los con securitate ab tote tu apparatos.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Contacta { $companyName } pro informar les re iste violation e querer specific passos que tu pote facer.
