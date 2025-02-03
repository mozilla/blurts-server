# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Fuites de données à haut risque
fix-flow-nav-leaked-passwords = Mots de passe divulgués
fix-flow-nav-security-recommendations = Recommandations de sécurité
guided-resolution-flow-exit = Retourner au tableau de bord
guided-resolution-flow-next-arrow = Passer à l’étape suivante
guided-resolution-flow-next-arrow-sub-step = Aller au résultat suivant
guided-resolution-flow-step-navigation-label = Étapes guidées

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Continuons
fix-flow-celebration-next-recommendations-label = Voir les recommandations
fix-flow-celebration-next-dashboard-label = Accédez au tableau de bord

## High-risk flow

fix-flow-celebration-high-risk-title = Vous avez résolu les fuites à haut risque !
fix-flow-celebration-high-risk-description-in-progress = Ces tâches peuvent sembler rébarbatives, mais elles sont cruciales pour assurer votre sécurité. Continuez, vous êtes sur la bonne voie !
fix-flow-celebration-high-risk-description-done = Ces tâches peuvent sembler rébarbatives, mais elles sont cruciales pour assurer votre sécurité.
fix-flow-celebration-high-risk-description-next-passwords = Occupons-nous à présent de vos mots de passe compromis.
fix-flow-celebration-high-risk-description-next-security-questions = Occupons-nous à présent de vos questions de sécurité compromises.
fix-flow-celebration-high-risk-description-next-security-recommendations = Ensuite, nous vous proposerons des recommandations de sécurité personnalisées en fonction des données qui ont été divulguées.
fix-flow-celebration-high-risk-description-next-dashboard = Vous avez atteint la dernière étape. Vous pouvez visualiser les actions à accomplir et suivre vos progrès sur votre tableau de bord.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vos mots de passe sont désormais protégés !
fix-flow-celebration-security-questions-title = Vos questions de sécurité sont protégées !
fix-flow-celebration-leaked-passwords-description-next-security-questions = Occupons-nous à présent de vérifier et mettre à jour vos questions de sécurité compromises.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Ensuite, nous vous proposerons des recommandations de sécurité personnalisées en fonction des données qui ont été divulguées.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bien joué ! Vous avez atteint la dernière étape. Vous pouvez visualiser les actions à accomplir et suivre vos progrès sur votre tableau de bord.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Vous avez appliqué toutes vos recommandations.
fix-flow-celebration-security-recommendations-description-next-dashboard = Bien joué ! Vous avez atteint la dernière étape. Vous pouvez visualiser les actions à accomplir et suivre vos progrès sur votre tableau de bord.

# High Risk Data Breaches

high-risk-breach-heading = Voici la marche à suivre
high-risk-breach-subheading = Ce problème nécessite d’accéder à vos informations sensibles, vous devrez donc le résoudre manuellement.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Elles apparaissent dans { $num_breaches } fuite de données :
       *[other] Elles apparaissent dans { $num_breaches } fuites de données :
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>du { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marquer comme résolue
high-risk-breach-skip = Ignorer pour l’instant
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time = Temps estimé : plus de { $estimated_time } minutes

# Credit Card Breaches

high-risk-breach-credit-card-title = Votre numéro de carte bancaire a été compromis
high-risk-breach-credit-card-description = Toute personne qui obtient ces informations peut effectuer des achats non autorisés pour lesquels vous pouvez être tenu·e responsable. Agissez maintenant pour éviter toute perte financière.
high-risk-breach-credit-card-step-one = Si vous avez toujours cette carte, contactez l’émetteur pour signaler qu’elle a été volée.
high-risk-breach-credit-card-step-two = Demandez une nouvelle carte avec un nouveau numéro.
high-risk-breach-credit-card-step-three = Surveillez vos comptes pour détecter les transactions non autorisées.

# Bank Account Breaches

high-risk-breach-bank-account-title = Votre compte bancaire a été compromis
high-risk-breach-bank-account-description = Agir dès que possible pourrait vous donner plus de protections juridiques pour vous aider à récupérer les pertes éventuelles.
high-risk-breach-bank-account-step-one = Informez immédiatement votre banque que votre numéro de compte a été compromis.
high-risk-breach-bank-account-step-two = Changer votre numéro de compte.
high-risk-breach-bank-account-step-three = Surveillez vos comptes pour détecter les transactions non autorisées.

# Social Security Number Breaches

high-risk-breach-social-security-title = Votre numéro de sécurité sociale a été compromis
high-risk-breach-social-security-description = Les fraudeurs peuvent négocier de nouveaux prêts ou cartes de crédit avec votre numéro de sécurité sociale. Agissez rapidement pour éviter les préjudices financiers.
high-risk-breach-social-security-step-one = Protégez-vous en <link_to_info>créant une alerte de fraude ou en gelant votre crédit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Vérifiez la présence de comptes inconnus dans votre rapport de crédit</link_to_info>.

# Social Security Number Modal

ssn-modal-title = À propos des alertes de fraude et du gel du crédit
ssn-modal-description-fraud-part-one = <b>Une alerte à la fraude</b> demande aux entreprises de vérifier votre identité avant d’attribuer un nouveau crédit en votre nom. C’est gratuit, dure un an et n’affectera pas négativement votre score de crédit.
ssn-modal-description-fraud-part-two = Pour en créer une, contactez l’une des trois agences d’évaluation du crédit. Vous n’êtes pas obligé·e de contacter les trois.
ssn-modal-description-freeze-credit-part-one = <b>Le gel de votre crédit</b> empêche quiconque d’ouvrir un nouveau compte à votre nom. C’est gratuit et ça n’affectera pas négativement votre score de crédit, mais vous devrez le débloquer avant d’ouvrir de nouveaux comptes.
ssn-modal-description-freeze-credit-part-two = Pour geler votre crédit, contactez chacune des trois agences d’évaluation du crédit : <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> et <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = En savoir plus sur les alertes à la fraude et le gel du crédit
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Votre code PIN a fuité
high-risk-breach-pin-description = Agir dès que possible pourrait vous donner plus de protections juridiques pour vous aider à récupérer les pertes éventuelles.
high-risk-breach-pin-step-one = Informez immédiatement votre banque que votre code PIN a été compromis.
high-risk-breach-pin-step-two = Changez votre code PIN partout où vous l’avez réutilisé.
high-risk-breach-pin-step-three = Surveillez vos comptes pour détecter les transactions non autorisées.

# No high risk breaches found

high-risk-breach-none-title = Bonne nouvelle, nous n’avons trouvé aucune fuite de données à haut risque
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Nous détectons les fuites de données d’après votre adresse e-mail, et nous n’avons trouvé aucune fuite de données à haut risque pour { $email_list }.
high-risk-breach-none-sub-description-part-one = Les fuites de données à haut risque incluent :
high-risk-breach-none-sub-description-ssn = Le numéro de sécurité sociale
high-risk-breach-none-sub-description-bank-account = Les coordonnées bancaires
high-risk-breach-none-sub-description-cc-number = Les numéros de cartes bancaires
high-risk-breach-none-sub-description-pin = Les codes PIN
high-risk-breach-none-continue = Continuer

# Security recommendations

security-recommendation-steps-label = Recommandations de sécurité
security-recommendation-steps-title = Voici nos conseils :
security-recommendation-steps-cta-label = J’ai compris

# Phone security recommendation

security-recommendation-phone-title = Protégez votre numéro de téléphone
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Votre numéro de téléphone figure dans { $num_breaches } fuite de données :
       *[other] Votre numéro de téléphone figure dans { $num_breaches } fuites de données :
    }
security-recommendation-phone-description = Malheureusement, vous ne pouvez pas le retirer. Cependant, vous pouvez prendre certaines mesures pour assurer votre sécurité.
security-recommendation-phone-step-one = Bloquez les numéros indésirables pour empêcher davantage d’appels indésirables
security-recommendation-phone-step-two = Ne cliquez pas sur les liens dans les SMS d’expéditeurs inconnus. Si le SMS semble provenir de source digne de confiance, appelez directement pour confirmer

# Email security recommendation

security-recommendation-email-title = Protégez votre adresse e-mail
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Votre adresse e-mail figure dans { $num_breaches } fuite de données :
       *[other] Votre adresse e-mail figure dans { $num_breaches } fuites de données :
    }
security-recommendation-email-description = Malheureusement, vous ne pouvez pas résoudre ce problème. Cependant, vous pouvez prendre certaines mesures pour vous protéger.
security-recommendation-email-step-one = Ne cliquez pas sur les liens dans les e-mails d’expéditeurs inconnus. Si l’e-mail semble provenir de source digne de confiance, appelez directement pour confirmer
security-recommendation-email-step-two = Méfiez-vous des <link_to_info>escroqueries par hameçonnage</link_to_info>
security-recommendation-email-step-three = Marquez les e-mails suspects comme spam et bloquez l’expéditeur
security-recommendation-email-step-four = Utilisez les <link_to_info>alias de messagerie de { -brand-relay }</link_to_info> pour protéger votre adresse e-mail à l’avenir

# IP security recommendation

security-recommendation-ip-title = Utilisez un VPN pour plus de confidentialité
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Votre adresse IP figure dans { $num_breaches } fuite de données :
       *[other] Votre adresse IP figure dans { $num_breaches } fuites de données :
    }
security-recommendation-ip-description = Votre adresse IP identifie votre emplacement et votre fournisseur d’accès à Internet. Des pirates pourraient utiliser ces informations pour trouver votre emplacement ou essayer de se connecter à vos appareils.
security-recommendation-ip-step-one = Utilisez un VPN (tel que <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) pour masquer votre véritable adresse IP et utiliser Internet en privé.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Votre mot de passe { $breach_name } a été compromis
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Il apparaît dans une fuite de données du { $breach_date }.
leaked-passwords-description = Les fraudeurs peuvent accéder à votre compte et vont probablement essayer de l’utiliser sur d’autres comptes pour voir si vous avez utilisé le même mot de passe. Changez-le partout où vous l’avez réutilisé pour vous protéger.
leaked-passwords-steps-title = Voici la marche à suivre
leaked-passwords-steps-subtitle = Ce problème nécessite d’accéder à votre compte, vous devrez donc le résoudre manuellement.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Modifiez votre mot de passe pour <b>{ $emails_affected }</b> sur <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Modifiez-le partout où vous l’avez réutilisé.
leaked-passwords-mark-as-fixed = Marquer comme résolu
leaked-passwords-skip = Ignorer pour le moment
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time = Temps estimé : { $estimated_time } minutes par site

# Leaked Security Questions

leaked-security-questions-title = Vos questions de sécurité ont été compromises
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Elles figurent dans une fuite de données sur { $breach_name } le { $breach_date }.
leaked-security-questions-description = Les fraudeurs peuvent les utiliser pour accéder à vos comptes et à tout autre site où vous avez posé les mêmes questions de sécurité. Mettez-les à jour maintenant pour protéger vos comptes.
leaked-security-questions-steps-title = Voici la marche à suivre
leaked-security-questions-steps-subtitle = Ce problème nécessite d’accéder à votre compte, vous devrez donc le résoudre manuellement.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Mettez à jour vos questions de sécurité pour <b>{ $email_affected }</b> sur <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Mettez-les à jour sur tout autre site où vous avez utilisé les mêmes questions de sécurité. Assurez-vous d’utiliser des questions de sécurité différentes pour chaque compte.
