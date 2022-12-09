# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Allez sur le site de <a>{ $breachedCompanyUrl }</a> pour changer votre mot de passe et activer l’authentification à deux facteurs (2FA).
breach-checklist-pw-body = Assurez-vous que votre mot de passe est unique et difficile à deviner. S’il est utilisé avec d’autres comptes, veillez à le modifier également pour ceux-ci. <a>Le gestionnaire de mots de passe de { -brand-firefox }</a> peut vous aider à garder une trace de tous vos mots de passe en toute sécurité.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Protégez votre adresse e-mail avec un service d’alias de messagerie comme <a>{ -brand-relay }</a>.
breach-checklist-email-body = Cela masquera votre véritable adresse e-mail tout en transférant vos e-mails vers votre boîte de réception réelle.

## Prompts the user for changes when there is a breach detected of social security number


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

breach-checklist-ip-header = Utilisez Internet en privé avec un VPN, tel que <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Votre adresse IP (adresse de protocole Internet) identifie votre emplacement et votre fournisseur d’accès à Internet. Un VPN peut masquer votre véritable adresse IP afin que vous puissiez utiliser Internet en privé.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Changez tout mot de passe ou code PIN qui inclut une partie de votre adresse.
breach-checklist-address-body = Les adresses sont faciles à trouver dans les archives publiques et peuvent rendre ces mots de passe et codes PIN faciles à deviner.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Changez tout mot de passe ou code PIN qui inclut votre date de naissance.
breach-checklist-dob-body = Les dates de naissance sont faciles à trouver dans les archives publiques, et les personnes qui les trouvent pourraient facilement deviner votre code PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Protégez votre numéro de téléphone avec un service d’alias comme <a>{ -brand-relay }</a>, qui masque votre véritable numéro de téléphone.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Mettez à jour vos questions de sécurité sur <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Utilisez des réponses longues et aléatoires et conservez-les en lieu sûr. Faites-le partout où vous avez utilisé les mêmes questions de sécurité.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Créez des mots de passe uniques et forts pour tout compte où vous avez réutilisé des mots de passe.
breach-checklist-hp-body = Un gestionnaire de mots de passe comme <a>le gestionnaire de mot de passe de { -brand-firefox }</a> (qui est gratuit et intégré au navigateur { -brand-firefox }) peut vous aider à garder une trace de tous vos mots de passe et à y accéder en toute sécurité depuis tous vos appareils.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Contactez { $companyName } pour les informer de cette fuite et demander quelles mesures spécifiques vous pouvez prendre.
