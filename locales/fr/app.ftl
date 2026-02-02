# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Fondation Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Cette adresse e-mail n’est pas inscrite aux alertes { -product-name }.
user-add-invalid-email = Adresse e-mail invalide
user-add-too-many-emails = Vous surveillez le nombre maximal d’adresses e-mail.
user-add-duplicate-email = Cette adresse e-mail a déjà été ajoutée à { -product-name }.
user-add-verification-email-just-sent = Un autre e-mail de vérification ne peut pas être envoyé aussi rapidement. Veuillez réessayer plus tard.
user-add-unknown-error = Une erreur s’est produite lors de l’ajout d’une autre adresse e-mail. Veuillez réessayer plus tard.
user-delete-unknown-error = Une erreur s’est produite lors de la suppression d’une adresse e-mail. Veuillez réessayer plus tard.
user-verify-token-error = Un jeton de vérification est nécessaire.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Données compromises :
# Link title
more-about-this-breach = Plus d’informations sur cette fuite
sensitive-sites = Comment { -product-name } traite-t-il les sites sensibles ?
sensitive-sites-copy = { -product-name } signale les comptes associés à ce type de fuite seulement si une adresse e-mail a été vérifiée. Cela signifie que vous êtes la seule personne qui puisse savoir si la fuite concerne vos données (sauf si quelqu’un d’autre a accès à votre compte e-mail).
what-data = Quelles données ont été compromises :
delayed-reporting-headline = Pourquoi a-t-il fallu autant de temps pour signaler cette fuite de données ?
delayed-reporting-copy = Cela peut parfois prendre des mois ou des années pour que des identifiants compromis dans une fuite de données apparaissent sur le darkweb. Les fuites sont ajoutées à notre base de données dès qu’elles ont été découvertes et vérifiées.

##

what-is-a-website-breach = Qu’est-ce qu’une fuite de données de site web ?
website-breach-blurb = Une fuite de données de site web se produit lorsque des cybercriminels volent, copient ou compromettent des informations à caractère personnel de comptes en ligne. Cela arrive généralement lorsque des pirates informatiques trouvent une faille dans la sécurité du site web. Des fuites peuvent également se produire lorsque des informations de compte sont divulguées par accident.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Vue d’ensemble
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Le { $breachDate }, { $breachTitle } a été victime d’une fuite de données. Une fois cette fuite découverte et vérifiée, elle a été ajoutée à notre base de données le { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Fuite ajoutée le :
# Section headline
rec-section-headline = Que faire pour cette fuite de données
rec-section-subhead = Nous vous recommandons de prendre ces mesures pour protéger vos informations personnelles ainsi que votre identité numérique.
# Section headline
rec-section-headline-no-pw = Que pouvez-vous faire pour protéger vos données personnelles
rec-section-subhead-no-pw = Bien que les mots de passe n’aient pas été exposés dans cette fuite de données, vous pouvez toujours prendre des mesures pour mieux protéger vos informations personnelles.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $capitalization ->
        [uppercase] Compte Mozilla
       *[lowercase] compte Mozilla
    }
open-in-new-tab-alt = Ouvrir le lien dans un nouvel onglet

## Search Engine Optimization

meta-desc-2 = Vérifiez avec { -brand-fx-monitor } si vous avez été victime d’une fuite de données. Nous vous aiderons à comprendre ce qu’il faut faire ensuite et à surveiller en permanence toute nouvelle fuite de données.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Se connecter
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu principal
main-nav-button-collapse-label = Réduire le menu
main-nav-button-collapse-tooltip = Réduire le menu
main-nav-button-expand-label = Développer le menu
main-nav-button-expand-tooltip = Développer le menu
main-nav-label = Navigation
main-nav-link-home-label = Accueil
main-nav-link-dashboard-label = Tableau de bord
main-nav-link-settings-label = Paramètres
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = Questions fréquentes

## User menu

user-menu-trigger-label = Ouvrir le menu utilisateur
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Gérer votre { -brand-mozilla-account }
user-menu-settings-label = Paramètres
user-menu-settings-tooltip = Configurer { -brand-mozilla-monitor }
user-menu-help-label = Aide et assistance
user-menu-help-tooltip = Obtenez de l’aide pour utiliser { -brand-mozilla-monitor }
user-menu-signout-label = Déconnexion
user-menu-signout-tooltip = Se déconnecter de { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Conditions d’utilisation
privacy-notice = Politique de confidentialité
github = { -brand-github }
footer-nav-recent-breaches = Fuites de données récentes
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = Questions fréquentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } - Page introuvable
error-page-error-404-copy = Nous sommes désolés, la page que vous recherchez n’existe plus.
error-page-error-404-cta-button = Retour

## Breach overview page

all-breaches-headline-3 = Base de données des fuites de données
all-breaches-lead = Nous surveillons toutes les fuites de données connues pour savoir si vos informations personnelles ont été compromises. Voici une liste complète de toutes les fuites de données qui ont été signalées depuis 2007.
search-breaches = Rechercher des fuites de données
# the kind of user data exposed to hackers in data breach.
exposed-data = Données ayant fuité :

## Public breach detail page

find-out-if-2 = Vérifiez si cette fuite de données vous concerne
find-out-if-description = Nous vous aiderons à vérifier rapidement si votre adresse e-mail a été compromise dans cette fuite de données et à comprendre ce qu’il faut faire ensuite.
breach-detail-cta-signup = Vérifier les fuites de données
loading-accessibility = Chargement…
