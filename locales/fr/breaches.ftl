# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Base de données des fuites de données — { -brand-fx-monitor }
breach-all-meta-social-title = Toutes les fuites de données détectées par { -brand-fx-monitor }
breach-all-meta-social-description = Parcourez la liste complète des fuites de données connues détectées par { -brand-fx-monitor }, puis découvrez si vos informations ont été compromises.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Fuite de données { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = La fuite de données de { $company } vous concerne-t-elle ?
breach-detail-meta-social-description = Utilisez { -brand-fx-monitor } pour savoir si vos informations personnelles ont été compromises dans cette fuite et que faire ensuite.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestionnaire de mots de passe de { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Mettez à jour vos mots de passe et activez l’authentification à deux facteurs (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Dans la plupart des cas, nous vous recommandons de changer votre mot de passe sur le site web de l’entreprise. Cependant, <b>leur site web peut ne pas fonctionner correctement ou contenir du contenu malveillant</b>, faites donc attention si vous <breached-company-link>visitez ce site</breached-company-link>. Pour une protection renforcée, assurez-vous d’utiliser des mots de passe uniques pour tous les comptes, afin que les mots de passe divulgués ne puissent pas être utilisés pour accéder à d’autres comptes. { $passwordManagerLink } peut vous aider à garder une trace de tous vos mots de passe en toute sécurité.

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
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
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

breach-checklist-sq-header-text = Mettez à jour vos questions de sécurité.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Dans la plupart des cas, nous vous recommandons de mettre à jour vos questions de sécurité sur le site de l’entreprise. Cependant, <b>leur site web peut ne pas fonctionner correctement ou contenir du contenu malveillant</b>, faites donc attention si vous <breached-company-link>visitez ce site</breached-company-link>. Pour une protection renforcée, mettez à jour ces questions de sécurité pour tous les comptes importants où vous les avez utilisées, et créez des mots de passe uniques pour tous les comptes.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Créez des mots de passe uniques et forts pour tout compte où vous avez réutilisé des mots de passe.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un gestionnaire de mots de passe comme le { $passwordManagerLink } (qui est gratuit et intégré au navigateur { -brand-firefox }) peut vous aider à garder une trace de tous vos mots de passe et à y accéder en toute sécurité depuis tous vos appareils.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Contactez { $companyName } pour les informer de cette fuite et demander quelles mesures spécifiques vous pouvez prendre.
