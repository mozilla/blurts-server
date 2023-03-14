# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Données qui ont fuité
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Fuites de données pour { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $count ->
        [one] { $count } adresse e-mail surveillée sur { $total }
       *[other] { $count } adresses e-mail surveillées sur { $total }
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Gérer les adresses e-mail

## Breaches resolved filter

filter-label-unresolved = Fuites de données non résolues
filter-label-resolved = Fuites de données résolues

## Breaches table

column-company = SOCIÉTÉ
column-breached-data = DONNÉES AYANT FUITÉ
column-detected = DÉTECTÉE
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Résolue
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Active
breaches-none-headline = Aucune fuite de données trouvée
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Bonne nouvelle ! Aucune fuite de données connue n’a été signalée pour { $email }. Nous continuerons à surveiller cette adresse e-mail et vous informerons si de nouvelles fuites ont lieu.
breaches-none-cta-blurb = Souhaitez-vous surveiller une autre adresse e-mail ?
breaches-none-cta-button = Ajouter une adresse e-mail
breaches-all-resolved-headline = Toutes les fuites de données résolues
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Bien joué ! Vous avez résolu toutes les fuites de données pour { $email }. Nous continuerons à surveiller cette adresse e-mail et vous informerons si de nouvelles fuites ont lieu.
breaches-all-resolved-cta-blurb = Souhaitez-vous surveiller une autre adresse e-mail ?
breaches-all-resolved-cta-button = Ajouter une adresse e-mail
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Le { $breachDate }, { $companyName } a été victime d’une fuite de données. Une fois cette fuite découverte et vérifiée, elle a été ajoutée à notre base de données le { $addedDate }. Cette fuite inclut : { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestionnaire de mots de passe de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

# { $breachedCompanyLink } will link to the website of the company where the breach occurred
breach-checklist-pw-header-2 = Allez sur le site de l’entreprise pour changer votre mot de passe et activer l’authentification à deux facteurs (2FA).
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-2 = Assurez-vous que votre mot de passe est unique et difficile à deviner. S’il est utilisé avec d’autres comptes, veillez à le modifier également pour ceux-ci. Le { $passwordManagerLink } peut vous aider à garder une trace de tous vos mots de passe en toute sécurité.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Protégez votre adresse e-mail avec un service d’alias de messagerie comme { $firefoxRelayLink }.
breach-checklist-email-body = Cela masquera votre véritable adresse e-mail tout en transférant vos e-mails vers votre boîte de réception réelle.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Surveillez votre rapport de crédit et vérifiez tout compte, prêt ou carte de crédit que vous ne reconnaitriez pas.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website, with { -breach-checklist-link-equifax } as the label
#   $experianLink (string) - a link to the Experian website, with { -breach-checklist-link-experian } as the label
#   $transUnionLink (string) - a link to the TransUnion website, with { -breach-checklist-link-transunion } as the label
breach-checklist-ssn-body-2 = Vous pouvez également envisager de geler votre crédit sur { $equifaxLink }, { $experianLink } et { $transUnionLink } pour empêcher les escrocs d’ouvrir de nouveaux comptes à votre nom. C’est gratuit et n’affectera pas votre score de crédit.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Signalez cette fuite à l’émetteur de votre carte bancaire et demandez une nouvelle carte avec un nouveau numéro.
breach-checklist-cc-body = Vous devriez également examiner vos relevés de carte bancaire pour repérer des opérations non autorisées.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Informez immédiatement votre banque que votre numéro de compte a été compromis.
breach-checklist-bank-body = Le faire plus rapidement pourrait vous donner plus de protections juridiques pour vous aider à récupérer les pertes éventuelles. Vérifiez également la présence de toute opération non autorisée sur vos comptes.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Informez l’émetteur de votre carte et changez immédiatement votre code PIN.
breach-checklist-pin-body = Assurez-vous que votre nouveau code PIN, ou tout autre code PIN, n’inclut pas de numéros pouvant être facilement devinés, tels que votre date de naissance ou votre adresse.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Utilisez Internet en privé avec un VPN, tel que { $mozillaVpnLink }.
breach-checklist-ip-body = Votre adresse IP (adresse de protocole Internet) identifie votre emplacement et votre fournisseur d’accès à Internet. Un VPN peut masquer votre véritable adresse IP afin que vous puissiez utiliser Internet en privé.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Changez tout mot de passe ou code PIN qui inclut une partie de votre adresse.
breach-checklist-address-body = Les adresses sont faciles à trouver dans les archives publiques et peuvent rendre ces mots de passe et codes PIN faciles à deviner.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Changez tout mot de passe ou code PIN qui inclut votre date de naissance.
breach-checklist-dob-body = Les dates de naissance sont faciles à trouver dans les archives publiques, et les personnes qui les trouvent pourraient facilement deviner votre code PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Protégez votre numéro de téléphone avec un service d’alias comme { $firefoxRelayLink }, qui masque votre véritable numéro de téléphone.

## Prompts the user for changes when there is a breach detected of security questions

# { $breachedCompanyLink } will link to the website of the company where the breach occurred
breach-checklist-sq-header-2 = Mettez à jour vos questions de sécurité sur le site de l’entreprise.
breach-checklist-sq-body = Utilisez des réponses longues et aléatoires et conservez-les en lieu sûr. Faites-le partout où vous avez utilisé les mêmes questions de sécurité.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Créez des mots de passe uniques et forts pour tout compte où vous avez réutilisé des mots de passe.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un gestionnaire de mots de passe comme le { $passwordManagerLink } (qui est gratuit et intégré au navigateur { -brand-firefox }) peut vous aider à garder une trace de tous vos mots de passe et à y accéder en toute sécurité depuis tous vos appareils.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Contactez { $companyName } pour les informer de cette fuite et demander quelles mesures spécifiques vous pouvez prendre.
