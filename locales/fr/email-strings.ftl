# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Connexion

## Email footers

email-footer-support-heading = Des questions sur { -brand-mozilla-monitor } ?
email-footer-support-content = Consultez notre <support-link>Centre d’assistance</support-link> pour obtenir de l’aide
email-footer-trigger-transactional = Vous recevez ce message en tant qu’abonné·e à { -brand-mozilla-monitor }.
email-footer-source-hibp = Les informations sur les fuites de données sont fournies par <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Vie privée
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Mentions légales
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
email-breach-alert-blurb =
    { -product-name } vous avertit des fuites de données impliquant vos informations personnelles.
    Nous venons de recevoir des informations à propos d’une fuite de données concernant une autre entreprise.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Les informations sur les fuites de données sont fournies par <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Protégez vos données dès maintenant
email-verify-subhead = Vérifiez votre adresse e-mail pour commencer à protéger vos données après une fuite de données.
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
