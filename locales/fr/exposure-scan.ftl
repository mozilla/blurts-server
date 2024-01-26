# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

exposure-landing-hero-heading = Découvrez si vos informations personnelles ont été compromises
exposure-landing-hero-lead = Conçus par l’équipe de { -brand-firefox }, les outils de protection de la vie privée vous protègent contre les cybercriminels et les entreprises qui publient et vendent vos données personnelles. Nous vous alerterons de toutes les fuites de données connues, trouverons et supprimerons les informations divulguées et surveillerons en permanence toute nouvelle fuite.
exposure-landing-hero-email-label = Adresse e-mail
exposure-landing-hero-email-placeholder = Saisissez votre adresse e-mail
exposure-landing-hero-cta-label = Vérifier les fuites de données
exposure-landing-result-loading = Chargement, veuillez patienter…
exposure-landing-result-error = Une erreur s’est produite lors de la vérification d’éventuelles fuites de données. Veuillez actualiser la page et réessayer.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Nous avons détecté <email>{ $email }</email> dans <count>{ $count }</count> fuite de données.
       *[other] Nous avons détecté <email>{ $email }</email> dans <count>{ $count }</count> fuites de données.
    }
exposure-landing-result-card-added = Fuite de données ajoutée le :
exposure-landing-result-card-data = Données ayant fuité :
exposure-landing-result-card-nothing = Aucune fuite de données trouvée
exposure-landing-result-footer-attribution = Les informations sur les fuites de données sont fournies par <hibp-link>{ -brand-HIBP }</hibp-link>
exposure-landing-result-overflow-hero-lead = Connectez-vous pour obtenir des étapes claires sur la façon de résoudre ces fuites de données, afficher toutes les fuites de données et surveiller en permanence toute nouvelle fuite de données connue.
exposure-landing-result-overflow-hero-cta-label = Connectez-vous pour résoudre les fuites de données
exposure-landing-result-overflow-footer-cta-label = Connectez-vous pour tout afficher
exposure-landing-result-some-hero-lead = Connectez-vous pour obtenir des étapes claires sur la façon de résoudre ces fuites de données, afficher toutes les fuites de données et surveiller en permanence toute nouvelle fuite de données connue.
exposure-landing-result-some-hero-cta-label = Connectez-vous pour résoudre les fuites de données
exposure-landing-result-some-footer-cta-label = Connectez-vous pour résoudre les fuites de données
exposure-landing-result-none-hero-lead = Bonne nouvelle ! Aucune fuite de données connue n’a été trouvée. Restez en sécurité en vous inscrivant aux alertes lors de nouvelles fuites de données. Nous continuerons à surveiller cette adresse e-mail et vous informerons si elle apparaît dans une nouvelle fuite de données.
exposure-landing-result-none-hero-cta-label = Recevez des alertes lors de nouvelles fuites de données
exposure-landing-result-none-footer-cta-label = S’inscrire pour recevoir des alertes
