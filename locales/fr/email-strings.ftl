# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Connexion

## Email footers

email-footer-support-heading = Des questions sur { -brand-mozilla-monitor } ?
email-footer-support-content = Consultez notre <support-link>Centre d’assistance</support-link> pour obtenir de l’aide
email-footer-trigger-transactional = Vous recevez ce message en tant qu’abonné·e à { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Vous recevez cet e-mail automatique en tant qu’abonné·e de { -brand-mozilla-monitor }. Si vous l’avez reçu par erreur, aucune action n’est requise. Pour davantage d’informations, veuillez consulter <support-link>l’assistance de { -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Vous avez reçu cet e-mail automatique unique, car vous êtes abonné·e à { -brand-monitor-plus }. Vous ne recevrez plus d’e-mails similaires. Pour davantage d’informations, veuillez consulter <support-link>l’assistance de { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Consultez notre centre d’assistance pour obtenir de l’aide :
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Les informations sur les fuites de données sont fournies par { -brand-HIBP } : { $hibp_link }
email-footer-source-hibp = Les informations sur les fuites de données sont fournies par <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Vie privée
email-unsubscribe-link = <link_to_unsub>Désinscription</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Désinscription : { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Vérifier l’adresse e-mail
# Headline of verification email
email-link-expires = Ce lien expire dans 24 heures

##

# Subject line of email
email-subject-found-breaches = { -product-name } a détecté vos informations dans ces fuites de données
# Subject line of email
email-subject-no-breaches = { -product-name } n’a trouvé aucune fuite de données connue
# Subject line of email
email-subject-verify = Vérifiez votre adresse e-mail pour { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } vous avertit des fuites de données impliquant vos informations personnelles.
    Jusqu’à présent, aucune fuite n’a été détectée. Nous vous enverrons une alerte si votre adresse e-mail apparaît dans une nouvelle fuite.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Les informations sur les fuites de données sont fournies par <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protégez vos données dès maintenant
email-verify-simply-click = Cliquez simplement sur le lien ci-dessous pour terminer la vérification de votre compte.

## Breach report

email-breach-summary = Voici le résumé de vos fuites de données
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Les résultats de la recherche pour votre compte { $email-address } indiquent que votre adresse e-mail a peut-être été divulguée. Nous vous recommandons d’agir maintenant pour résoudre cette fuite de données.
email-dashboard-cta = Accéder au tableau de bord

## Breach alert email

email-breach-alert-all-subject = Nouvelle fuite de données détectée
email-breach-alert-all-preview = Nous allons vous guider pas à pas pour résoudre le problème.
email-breach-alert-all-hero-heading = Une nouvelle fuite de données vous concerne
email-breach-alert-all-hero-subheading = Ne vous inquiétez pas, nous pouvons vous aider à résoudre ce problème
email-breach-alert-all-lead = { -brand-mozilla-monitor } a détecté la fuite de données suivante qui comprend vos informations personnelles :
email-breach-alert-all-source-title = Source de la fuite :
email-breach-alert-all-data-points-title = Vos données qui ont fuité :
email-breach-alert-all-next-steps-lead = Nous vous guiderons pas à pas sur la façon de résoudre cette fuite de données.
email-breach-alert-all-next-steps-cta-label = Voyons tout ça de plus près
email-breach-alert-all-next-steps-button-dashboard = Accéder au tableau de bord

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Détails de la fuite de données de { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } a détecté vos informations dans une fuite de données de { $company-name } le { $breach-date }. Vous recevez cette alerte car vous vous êtes abonné·e aux <link_to_settings>notifications de fuites de données</link_to_settings>.
email-breach-alert-all-source-title-1 = Détails de la fuite
email-breach-alert-company = Entreprise :
email-breach-alert-date-of-breach = Date de la fuite de données :
email-breach-alert-info-exposed = Vos informations qui ont fuité :
email-breach-alert-next-steps = Prochaines étapes
email-breach-alert-next-steps-description = <sign_in_link>Connectez-vous</sign_in_link> à votre tableau de bord { -brand-mozilla-monitor }. Nous vous accompagnerons dans les démarches à suivre pour résoudre la fuite.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Résoudre la fuite de données sur le tableau de bord
email-breach-alert-faqs-title = FAQ
email-breach-alert-faq-qn-1 = Pourquoi reçois-je ceci ?
email-breach-alert-faq-ans-1 = Vous vous êtes abonné·e aux alertes pour les fuites de données. <link_to_settings>Modifiez vos préférences</link_to_settings> depuis les paramètres.
email-breach-alert-faq-qn-2 = Pourquoi est-ce que je ne reconnais pas cette entreprise ou ce site ?
email-breach-alert-faq-ans-2 = Il peut avoir changé de propriétaire ou de nom, s’agir d’un compte ancien ou qui a été créé pour vous, ou encore provenir d’une liste d’informations personnelles compromises achetée.
email-breach-alert-faq-qn-3 = Qu’est-ce qu’une alerte de fuite de données ?
email-breach-alert-faq-ans-3 = Une notification { -brand-mozilla-monitor } est envoyée lorsque des informations personnelles que vous surveillez sont exposées, volées ou copiées sans autorisation.
email-breach-alert-faq-qn-4 = { -brand-mozilla-monitor }, qu’est-ce que c’est ?
email-breach-alert-faq-ans-4 = Un service gratuit de notification de fuite de données qui vous alerte si l’un de vos comptes en ligne a été compromis lors d’une fuite de données.
