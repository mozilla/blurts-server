# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $capitalization ->
       *[lowercase] compte Firefox
        [uppercase] Compte Firefox
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Vous avez essayé d’analyser trop d’adresses e-mail en peu de temps. Pour des raisons de sécurité, nous avons temporairement bloqué vos nouvelles recherches. Vous pourrez réessayer plus tard.
error-could-not-add-email = Impossible d’ajouter l’adresse e-mail à la base de données.
error-not-subscribed = Cette adresse e-mail n’est pas inscrite aux alertes { -product-name }.
error-hibp-throttled = Connexions trop nombreuses à { -brand-HIBP }.
error-hibp-connect = Erreur de connexion à { -brand-HIBP }.
error-hibp-load-breaches = Impossible de charger les failles de sécurité.
error-must-be-signed-in = Vous devez vous connecter à votre { -brand-fxa }.
error-to-finish-verifying = Pour terminer la vérification de cette adresse e-mail pour { -product-name }, vous devez vous connecter à l’aide de l’adresse e-mail principale de votre compte.
home-title = { -product-name }
home-not-found = Page non trouvée
oauth-invalid-session = Session invalide
scan-title = { -product-name } : résultats de l’analyse
user-add-invalid-email = Adresse e-mail invalide
user-add-too-many-emails = Vous surveillez le nombre maximal d’adresses e-mail.
user-add-email-verify-subject = Vérifiez votre inscription à { -product-name }.
user-add-duplicate-email = Cette adresse e-mail a déjà été ajoutée à { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Consultez les { $preferencesLink } pour vérifier l’état de { $userEmail }.
user-add-verification-email-just-sent = Un autre e-mail de vérification ne peut pas être envoyé aussi rapidement. Veuillez réessayer plus tard.
user-add-unknown-error = Une erreur s’est produite lors de l’ajout d’une autre adresse e-mail. Veuillez réessayer plus tard.
user-delete-unknown-error = Une erreur s’est produite lors de la suppression d’une adresse e-mail. Veuillez réessayer plus tard.
error-headline = Erreur
user-verify-token-error = Un jeton de vérification est nécessaire.
user-verify-email-report-subject = Votre rapport { -product-name }
user-unsubscribe-token-error = La désinscription nécessite un jeton.
user-unsubscribe-token-email-error = La désinscription nécessite un jeton ainsi qu’une empreinte issue de la valeur de l’e-mail.
user-unsubscribe-title = { -product-name } : désinscription
pwt-section-headline = Mots de passe robustes = protection renforcée
landing-headline = C’est maintenant que commence votre droit d’être à l’abri du piratage informatique.
scan-placeholder = Saisissez votre adresse e-mail
scan-submit = Vérifier votre adresse e-mail
scan-error = L’adresse e-mail doit être valide.
download-firefox-banner-button = Télécharger { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Envoyé !
sign-up = S’inscrire
form-signup-error = L’adresse e-mail doit être valide
# breach-date = the calendar date a particular data theft occurred.
breach-date = Date de la fuite de données :
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Comptes compromis :
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Données compromises :
unsub-headline = Se désabonner de { -product-name-nowrap }
unsub-blurb = Cela supprimera votre adresse e-mail de la liste { -product-name-nowrap } et vous ne recevrez plus d’alertes lorsque de nouvelles fuites de données seront annoncées.
unsub-button = Se désabonner
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Données des différentes fuites fournies par { $hibp-link }
share-twitter = La plupart des gens possèdent des dizaines de comptes en ligne. L’un des vôtres a-t-il été compromis suite à une fuite de données ? Vérifiez par vous-même.
share-facebook-headline = Vérifiez si vous êtes concerné·e par une fuite de données
share-facebook-blurb = Vos comptes en ligne ont-ils été compromis suite à une fuite de données ?
og-site-description = Vérifiez avec { -product-name } si vous avez été victime d’une fuite de données. Inscrivez-vous pour recevoir des alertes lors de futures fuites de données et des conseils pour renforcer la sécurité de vos comptes.
show-all = Tout afficher
fxa-scan-another-email = Souhaitez-vous vérifier une autre adresse e-mail ?
sign-out = Se déconnecter
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gérer le { -brand-fxa }
have-an-account = Vous possédez déjà un compte ?
fxa-pwt-summary-2 =
    Les mots de passe courts et constitués d’un seul mot sont faciles à deviner pour les pirates informatiques.
    Utilisez au moins deux mots et une combinaison de lettres, de chiffres et de caractères spéciaux.
fxa-pwt-summary-4 = Les gestionnaires de mots de passe tels que 1Password, LastPass, Dashlane et Bitwarden conservent vos mots de passe en toute sécurité et les remplissent dans les sites web pour vous. Ils vous aideront aussi à générer des mots de passe robustes.
fxa-pwt-summary-6 = Les fuites de données sont de plus en plus fréquentes. Si vos informations personnelles apparaissent dans une nouvelle fuite de données, { -product-name } vous enverra une alerte afin que vous puissiez prendre des mesures et protéger vos comptes.
fxa-what-to-do-blurb-1 =
    Si vous ne parvenez pas à vous connecter, contactez le site web pour savoir comment changer vos identifiants.
    Vous apercevez un compte que vous ne reconnaissez pas ? Vos données ont pu être vendues ou redistribuées. Cela pourrait aussi être un compte que vous avez oublié avoir créé ou une entreprise qui a changé de nom.
fxa-what-to-do-subhead-2 = Arrêtez d’utiliser le mot de passe compromis et changez-le partout où vous l’avez utilisé.
fxa-wtd-blurb-2 = Des pirates peuvent essayer de réutiliser ce même mot de passe et votre adresse e-mail pour accéder à d’autres comptes. Créez un mot de passe unique pour chaque site web, en particulier pour votre compte bancaire, votre messagerie en ligne et les autres sites web où sont enregistrées vos données personnelles.
fxa-what-to-do-blurb-3 = La plupart des fuites de données compromettent les adresses e-mail et les mots de passe, mais certaines impliquent des informations financières sensibles. Si vos numéros de compte bancaire ou de carte bancaire ont été compromis, prévenez votre banque de toute fraude éventuelle. Assurez-vous qu’aucun paiement frauduleux n’ait lieu en surveillant vos relevés de comptes.
fxa-what-to-do-subhead-4 = Obtenez de l’aide pour retenir tous vos mots de passe et les protéger.
fxa-what-to-do-blurb-4 = Les gestionnaires de mots de passe tels que 1Password, LastPass, Dashlane et Bitwarden conservent vos mots de passe en toute sécurité et les remplissent dans les sites web pour vous. Utilisez un gestionnaire de mots de passe sur votre téléphone et votre ordinateur pour ne pas avoir à tous les retenir.
# Alerts is a noun
sign-up-for-alerts = S’abonner aux alertes
# Link title
frequently-asked-questions = Foire aux questions
about-firefox-monitor = À propos de { -product-name }
# Link title
preferences = Préférences
# Link title
home = Accueil
# Link title
security-tips = Conseils de sécurité
fxa-account = { -brand-fxa(capitalization: "uppercase") }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Naviguer sur { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = DERNIÈRE FUITE DE DONNÉES AJOUTÉE
# Link title
more-about-this-breach = Plus d’informations sur cette fuite
take-control = Reprenez le contrôle de vos données personnelles.
cant-stop-hackers = Vous n’empêcherez pas les pirates de pirater. Mais vous pouvez éviter les mauvaises pratiques qui leur facilitent la tâche.
read-more-tips = Découvrir davantage de conseils pour votre sécurité
how-hackers-work = Comprendre le mode opératoire des pirates
monitor-your-online-accounts = Créez un { -brand-fxa } pour garder un œil sur les fuites de données.
stay-alert = Tenez-vous au courant des dernières fuites de données
if-your-info = Si vos informations apparaissent dans une nouvelle fuite de données, nous vous enverrons une alerte.
search-all-emails = Vérifiez si vos adresses e-mail apparaissent dans des fuites de données et recevez des alertes lors de nouvelles menaces.
monitor-several-emails = Surveillez plusieurs adresses e-mail
take-action = Prenez des mesures pour protéger vos comptes
keep-your-data-safe = Apprenez ce que vous devez faire pour protéger vos données des cybercriminels.
website-breach = Fuite de site web
sensitive-breach = Fuite de site web sensible
data-aggregator-breach = Fuite d’agrégateur de données
unverified-breach = Fuite non vérifiée
spam-list-breach = Fuite de liste de courriers indésirables
website-breach-plural = Fuites de sites web
sensitive-breach-plural = Fuites de données sensibles
data-aggregator-breach-plural = Fuites d’agrégateurs de données
unverified-breach-plural = Fuites non vérifiées
spam-list-breach-plural = Fuites de listes de courriers indésirables
what-data = Quelles données ont été compromises :
sensitive-sites = Comment { -product-name } traite-t-il les sites sensibles ?
sensitive-sites-copy = { -product-name } signale les comptes associés à ce type de fuite seulement si une adresse e-mail a été vérifiée. Cela signifie que vous êtes la seule personne qui puisse savoir si vos données étaient impactées par la fuite (sauf si quelqu’un d’autre a accès à votre compte e-mail).
delayed-reporting-headline = Pourquoi a-t-il fallu autant de temps pour signaler cette fuite de données ?
delayed-reporting-copy = Cela peut parfois prendre des mois ou des années pour que des identifiants compromis dans une fuite de données apparaissent sur le darkweb. Les fuites sont ajoutées à notre base de données dès qu’elles ont été découvertes et vérifiées.
about-fxm-headline = À propos de { -product-name }
about-fxm-blurb = { -product-name } vous avertit si vos comptes en ligne ont été compromis dans une fuite de données. Découvrez si vous en êtes victime, recevez des alertes sur les nouvelles fuites de données, et prenez des mesures pour protéger vos comptes en ligne. { -product-name } est fourni par { -brand-Mozilla }.
fxm-warns-you = { -product-name } vous avertit si votre adresse e-mail a été compromise dans une fuite de données. Découvrez si vous en êtes victime, apprenez comment mieux protéger vos comptes et recevez une alerte si votre adresse e-mail apparaît dans une nouvelle fuite de données.
# How Firefox Monitor works
how-fxm-works = Fonctionnement de { -product-name }
how-fxm-1-headline = Effectuez une recherche basique
how-fxm-1-blurb = Recherchez votre adresse e-mail parmi les fuites de données publiques remontant jusqu’à 2007. Une recherche basique fera apparaître la plupart des fuites de données, à l’exception de celles qui contiennent des données personnelles sensibles.
how-fxm-2-headline = Inscrivez-vous pour surveiller les fuites de données
how-fxm-2-blurb =
    Créez un { -brand-fxa } pour surveiller en continu les fuites de données qui concernent votre adresse e-mail.
    Après avoir confirmé votre adresse e-mail, vous recevrez un rapport complet des précédentes fuites, y compris les fuites de données sensibles.
how-fxm-3-headline = Recevez des notifications dans votre navigateur
how-fxm-3-blurb = Si vous utilisez { -brand-name }, vous recevrez une notification lorsque vous visiterez un site qui a été victime d’une fuite de données. Découvrez immédiatement si cette fuite vous concerne et ce que vous pouvez faire.
wtd-after-website = Que faire après une fuite de données de site web
wtd-after-data-agg = Que faire après une fuite de données d’un agrégateur de données
what-is-data-agg = Qu’est-ce qu’un agrégateur de données ?
what-is-data-agg-blurb = Les agrégateurs de données, ou courtiers en données, collectent des données publiques ou en achètent auprès d’entreprises. Ils compilent ces données pour les revendre à des entreprises dans le but de les utiliser à des fins marketing. Les victimes de ces fuites de données sont moins susceptibles d’être victimes d’escroqueries financières, mais les pirates pourraient utiliser ces données pour usurper leur identité ou les profiler.
protect-your-privacy = Protégez votre vie privée en ligne
no-pw-to-change = Contrairement à une fuite de données de site web, il n’y a pas de mot de passe à changer.
avoid-personal-info = Évitez d’utiliser des informations personnelles dans les mots de passe
avoid-personal-info-blurb = Il est facile de trouver en ligne les dates d’anniversaire, les adresses et les noms des membres de la famille. N’utilisez pas ces informations dans vos mots de passe.

## What to do after data breach tips

change-pw = Changez votre mot de passe
change-pw-site = Changer le mot de passe pour ce site
even-for-old = Même pour les anciens comptes, il est important de mettre à jour votre mot de passe.
make-new-pw-unique = Choisissez un mot de passe différent et unique
strength-of-your-pw = La force de vos mots de passe a un impact direct sur votre sécurité en ligne.
create-strong-passwords = Comment créer des mots de passe robustes
stop-reusing-pw = Arrêtez de réutiliser les mêmes mots de passe
create-unique-pw = Créez des mots de passe uniques et conservez-les en lieu sûr, par exemple dans un gestionnaire de mots de passe.
five-myths = 5 idées reçues sur les gestionnaires de mots de passe
create-a-fxa = Créez un { -brand-fxa } pour recevoir votre rapport complet sur les fuites de données et pour recevoir des alertes.
feat-security-tips = Conseils de sécurité pour protéger vos comptes
feat-sensitive = Recherche avancée dans les fuites de données sensibles
feat-enroll-multiple = Surveillance des fuites de données pour plusieurs adresses e-mail
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Apparaît dans { $breachCount } fuite de données connue.
       *[other] Apparaît dans { $breachCount } fuites de données connues.
    }
check-for-breaches = Vérifiez les fuites de données
find-out-what-hackers-know = Découvrez ce que les pirates informatiques savent déjà de vous, et apprenez à garder une longueur d’avance sur eux.
get-email-alerts = Restez en sécurité : recevez des alertes par e-mail lorsque vos informations apparaissent dans une fuite de données connue
search-for-your-email = Recherchez votre adresse e-mail parmi les fuites de données publiques remontant jusqu’à 2007.
back-to-top = Haut de la page
comm-opt-0 = M’envoyer un e-mail si l’une de mes adresses e-mail ci-dessous apparaît dans une fuite de données.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Envoyer toutes les alertes de fuites de données à { $primaryEmail }.
stop-monitoring-this = Arrêter de surveiller cette adresse e-mail.
resend-verification = Renvoyer l’e-mail de vérification
add-new-email = Ajouter une nouvelle adresse e-mail
send-verification = Envoyer le lien de vérification
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Récapitulatif des fuites de données
show-breaches-for-this-email = Afficher toutes les fuites de données pour cette adresse e-mail.
link-change-primary = Modifier l’adresse e-mail principale
remove-fxm = Supprimer { -product-name }
remove-fxm-blurb = Désactive les alertes { -product-name }. Votre { -brand-fxa } restera actif, et vous pourrez recevoir d’autres messages liés à votre compte.
# Button title
manage-email-addresses = Gérer les adresses e-mail
# Link title
latest-breach-link = Vérifiez si cette fuite de données vous concerne

## Variables:
##   $userName (String) - Username

welcome-back = Heureux de vous revoir, { $userName } !
welcome-user = Bienvenue, { $userName } !

##

breach-alert-subject = { -product-name } a détecté votre adresse e-mail dans une nouvelle fuite de données.
your-info-was-discovered-headline = Vos données ont été découvertes dans une nouvelle fuite.
your-info-was-discovered-blurb = Vous êtes abonné·e aux alertes { -product-name } et en recevez lorsque votre adresse e-mail apparaît dans des fuites de données. Voici ce que nous savons de cette fuite.
what-to-do-after-breach = Que faire après une fuite de données ?
ba-next-step-1 = Remplacez votre mot de passe par un mot de passe unique et robuste.
ba-next-step-blurb-1 =
    Un mot de passe fort utilise une combinaison de lettres majuscules et minuscules,
    de caractères spéciaux et de chiffres. Il ne contient pas d’informations personnelles telles que
    votre adresse, votre anniversaire ou les noms des membres de votre famille.
ba-next-step-2 = Arrêtez d’utiliser ce mot de passe compromis.
ba-next-step-blurb-2 =
    Les cybercriminels pourraient trouver votre mot de passe sur le darkweb et l’utiliser
    pour se connecter à vos autres comptes. Le meilleur moyen de protéger vos comptes
    est d’utiliser des mots de passe uniques pour chacun.
ba-next-step-3 = Obtenez de l’aide pour créer de meilleurs mots de passe et les protéger.
ba-next-step-blurb-3 = Utilisez un gestionnaire de mots de passe pour créer des mots de passe forts et uniques. Les gestionnaires de mots de passe conservent en toute sécurité l’ensemble de vos identifiants afin que vous puissiez y accéder sur tous vos appareils.
faq1 = Je ne reconnais pas cette société ou ce site web. Pourquoi cette fuite me concerne-t-elle ?
faq2 = Pourquoi a-t-il fallu si longtemps pour me prévenir de cette fuite de données ?
faq3 = Comment puis-je savoir si cet e-mail de { -product-name } est authentique ?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NOUVELLE FUITE DE DONNÉES DÉCOUVERTE
       *[other] { $breachCount } NOUVELLES FUITES DE DONNÉES DÉCOUVERTES
    }
sign-up-headline-1 = Recevez des alertes en continu avec un { -brand-fxa }.
account-not-required = Le navigateur { -brand-name } n’est pas requis pour créer un { -brand-fxa }. Vous pourrez recevoir des informations à propos des services de { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Vos informations ont-elles été compromises dans la fuite de données { $breachName } ?
fb-not-comp = Cette adresse e-mail n’apparaît pas dans la fuite de données { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Cependant, elle apparaît dans une autre fuite.
       *[other] Cependant, elle apparaît dans { $breachCount } autres fuites.
    }
fb-comp-only = Cette adresse e-mail apparaît dans la fuite de données { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others = Cette adresse e-mail apparaît dans { $breachCount } fuites de données connues, fuite { $breachName } comprise.

##

no-other-breaches-found = Aucune autre fuite trouvée via une recherche basique.
no-results-blurb = Désolé, cette fuite ne figure pas dans notre base de données.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Votre adresse e-mail n’apparait pas dans cette fuite de données, mais votre numéro de téléphone, lui, peut toujours être vulnérable.</span> Certains des comptes compromis dans la fuite de Facebook incluaient les numéros de téléphone et d’autres
    informations personnelles mais pas d’adresses e-mail. Si vous avez déjà ouvert un compte Facebook — même si vous ne l’utilisez pas actuellement — nous vous recommandons de prendre les mesures suivantes pour vous protéger
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Définissez vos informations personnelles sur « Moi uniquement » ou tout autre paramètre non public dans <a>votre profil Facebook</a>.</span>
facebook-breach-what-to-do-1-copy = Lors de cette fuite, les pirates se sont emparés des informations de profil qui étaient définies comme « ouvertes au public » ou « partagées avec des amis ». Ces informations peuvent être combinées avec d’autres données pour accéder à encore plus d’informations personnelles et de comptes.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Changez le mot de passe, le code PIN ou d’autres identifiants de sécurité sur vos <a>comptes
    d’opérateur mobile</a> pour empêcher l’échange de cartes SIM</span>.
facebook-breach-what-to-do-2-copy =
    L’échange de carte SIM, également appelé détournement de SIM,
    se produit lorsqu’un pirate utilise les numéros de téléphone, la date de naissance et d’autres données d’une personne
    pour prendre le contrôle de son numéro de téléphone mobile, et ensuite pirater son adresse e-mail, ses comptes de médias sociaux ou même d’institutions financières.
facebook-breach-what-to-do-3 = Voir toutes les recommandations sur notre page consacrée aux fuites de Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Fuites visibles :

## Updated error messages

error-bot-headline = Recherches temporairement suspendues
error-bot-blurb =
    Nous pensons que vous pourriez être un robot parce que vous avez recherché
    plusieurs adresses e-mail dans un court laps de temps. Pour l’instant, vous ne pouvez plus effectuer
    de nouvelles recherches. Vous pourrez réessayer plus tard.
error-csrf-headline = Session expirée
error-csrf-blurb = Cliquez sur le bouton Précédent de votre navigateur, actualisez la page et réessayez.
error-invalid-unsub = Comment se désabonner des alertes de { -product-name }
error-invalid-unsub-blurb = Vous devrez vous désabonner depuis l’un des messages { -product-name } qui vous ont été envoyés. Recherchez les messages de { -brand-team-email } dans votre boîte de réception. Cliquez sur le lien de désabonnement en bas du message.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] adresse e-mail surveillée
       *[other] adresses e-mail surveillées
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] mot de passe compromis parmi toutes les fuites de données
       *[other] mots de passe compromis parmi toutes les fuites de données
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] fuite de données connue a compromis vos informations
       *[other] fuites de données connues ont compromis vos informations
    }
# Button
see-additional-breaches = Voir les fuites supplémentaires
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [0] Cette adresse e-mail n’apparaît dans aucune fuite de données connue.
        [one] Cette adresse e-mail apparaît dans une fuite de données connue.
       *[other] Cette adresse e-mail apparaît dans { $breachCount } fuites de données connues.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Résultats pour : { $userEmail }
other-monitored-emails = Autres adresses e-mail surveillées
email-verification-required = Vérification de l’adresse e-mail nécessaire
fxa-primary-email = Adresse e-mail du { -brand-fxa } (principale)
what-is-a-website-breach = Qu’est-ce qu’une fuite de données de site web ?
website-breach-blurb = Une fuite de données de site web se produit lorsque des cybercriminels volent, copient ou compromettent des informations à caractère personnel de comptes en ligne. Cela arrive généralement lorsque des pirates informatiques trouvent une faille dans la sécurité du site web. Des fuites peuvent également se produire lorsque des informations de compte sont divulguées par accident.
security-tips-headline = Conseils de sécurité pour vous protéger des pirates informatiques
steps-to-protect = Mesures à prendre pour protéger votre identité en ligne
take-further-steps = Prenez des mesures supplémentaires pour protéger votre identité
alert-about-new-breaches = M’alerter lors de nouvelles fuites de données
see-if-youve-been-part = Vérifiez si une fuite de données en ligne vous concerne.
get-ongoing-breach-monitoring = Surveillez en continu les fuites de données pour plusieurs adresses e-mail.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Vérifier
new-unsub-error = Vous devrez vous désabonner depuis l’un des e-mail envoyés par { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Cependant, elle apparaît dans une autre fuite connue.
       *[other] Cependant, elle apparaît dans { $breachCount } autres fuites connues.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informations supplémentaires, notamment :
# Title
email-addresses-title = Adresses e-mail
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Vue d’ensemble
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Le { $breachDate }, { $breachTitle } a été victime d’une fuite de données. Une fois cette fuite découverte et vérifiée, elle a été ajoutée à notre base de données le { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Préférences de { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Connecté·e en tant que : { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrer par catégorie :
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Envoyer les alertes à l’adresse e-mail concernée
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Il existe un moyen de protéger votre vie privée. Rejoignez { -brand-name }.
# Link title
learn-more-link = En savoir plus.
email-sent = E-mail envoyé !
# Form title
want-to-add = Voulez-vous ajouter une autre adresse e-mail ?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Vérifiez le lien envoyé à { $userEmail } pour l’ajouter à { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Adresse e-mail vérifiée !
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Nous vous préviendrons si { $email } apparaît dans une fuite de données.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Pour consulter et gérer toutes les adresses e-mail que vous avez inscrites pour la surveillance des fuites de données, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = connectez-vous

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Gérez toutes les adresses e-mail dans les { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notifications en cas de fuites de données
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Fuite ajoutée le :
how-hackers-work-desc = Protégez vos mots de passe des cybercriminels, car c’est à cela qu’ils s’intéressent le plus.
what-to-do-after-breach-desc = Verrouillez vos comptes pour que vos informations ne tombent pas entre de mauvaises mains.
create-strong-passwords-desc = Créez des mots de passe robustes, sûrs et difficiles à deviner.
steps-to-protect-desc = Comprendre les menaces les plus courantes et savoir quoi rechercher.
five-myths-desc = Apprendre à éviter les mauvaises habitudes de mots de passe qui facilitent le travail d’un pirate informatique.
take-further-steps-desc = Découvrir comment atténuer les risques de vol d’identité afin de prévenir les pertes financières.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Modifications enregistrées.
# Section headline
rec-section-headline = Que faire pour cette fuite de données
rec-section-subhead = Nous vous recommandons de prendre ces mesures pour protéger vos informations personnelles ainsi que votre identité numérique.
# Section headline
rec-section-headline-no-pw = Que pouvez-vous faire pour protéger vos données personnelles
rec-section-subhead-no-pw = Bien que les mots de passe n’aient pas été exposés dans cette fuite de données, vous pouvez toujours prendre des mesures pour mieux protéger vos informations personnelles.
# Button
see-additional-recs = Voir les recommandations supplémentaires

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } est apparu dans cette fuite de données. <a>Que faire ?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] Une de vos adresses e-mail est apparue dans cette fuite de données. <a>Que faire ?</a>
       *[other] { $numAffectedEmails } de vos adresses e-mail sont apparues dans cette fuite de données. <a>Que faire ?</a>
    }

##

marking-this-subhead = Marquer cette fuite de données comme réglée
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body = <span>Une fois que vous aurez pris les mesures nécessaires pour remédier à cette fuite de données</span>, vous pouvez la marquer comme réglée. Vous pouvez toujours accéder aux détails de la fuite depuis votre tableau de bord à tout moment.
mark-as-resolve-button = Marquer comme réglée
marked-as-resolved-label = Marquée comme réglée
undo-button = Annuler
confirmation-1-subhead = Parfait, vous venez de régler votre première fuite de données.
confirmation-1-body = Continuez sur votre lancée. Jetez un coup d’œil à votre tableau de bord pour voir s’il n’y a pas autre chose à faire.
confirmation-2-subhead = Et une de plus !
confirmation-2-body = Vous franchissez une étape importante dans la protection vos comptes en ligne.
confirmation-3-subhead = Encore un problème réglé. Bien joué !
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Votre nouveau mot de passe est-il unique, fort et compliqué à deviner ? <a>Vérifier que c’est bien le cas</a>
generic-confirmation-subhead = Cette fuite a été marquée comme réglée
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Pour voir la fuite restante, accédez à votre tableau de bord.
       *[other] Pour voir les fuites restantes, accédez à votre tableau de bord.
    }
return-to-breach-details-link = Revenir aux détails de la fuite
go-to-dashboard-link = Accéder au tableau de bord
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = Terminé à { $percentComplete } %
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } fuite réglée
       *[other] { $numResolvedBreaches } fuites réglées
    }
progress-intro-subhead = Nouveauté sur { -product-name } : marquer les fuites comme réglées
progress-intro-message = Après avoir examiné les détails d’une fuite de données et pris des mesures pour protéger vos informations personnelles, vous pouvez marquer les fuites comme réglées.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } fuite sur { $numTotalBreaches } marquée comme réglée
       *[other] { $numResolvedBreaches } fuites sur { $numTotalBreaches } marquées comme réglées
    }
progress-complete = Toutes les fuites connues ont été marquées comme réglées

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>C’est un bon début !</span> Consultez les fuites restantes pour en savoir plus
    sur les mesures à prendre.
progress-message-2 = <span>Continuez comme ça !</span> De simples changements comme la modification de mots de passe peuvent jouer un rôle majeur dans la protection de vos informations personnelles.
progress-message-3 = <span>Beau travail, ces fuites sont réglées !</span> Continuez comme ça. Il y en a encore quelques-unes.
progress-message-4 = <span>Encore un dernier effort !</span> Vous y êtes presque.
progress-complete-message = <span>Il semblerait que vous y preniez goût !</span> Si vous souhaitez aller plus loin, c’est le bon moment pour définir des mots de passe robustes pour tous les autres identifiants.

##

resolve-this-breach-link = Régler cette fuite
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Marquée comme réglée le :
hide-resolved-button = Masquer les fuites réglées
show-resolved-button = Afficher les fuites réglées
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] mot de passe compromis parmi les fuites de données non réglées
       *[other] mots de passe compromis parmi les fuites de données non réglées
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] fuite de données connue marquée comme réglée
       *[other] fuites de données connues marquées comme réglées
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Fuite récente
mobile-promo-headline = Installez { -brand-name } sur votre téléphone et votre tablette
mobile-promo-body = Une navigation rapide, privée et sûre partout où vous allez. Recherchez { -brand-name } sur Google Play et dans l’App Store.
mobile-promo-cta = Obtenir { -brand-name } sur Android et iOS
promo-lockwise-headline = Emportez vos mots de passe partout
lockwise-promo-body = Gérez vos identifiants sur tous vos appareils. Accédez-y en toute sécurité depuis votre ordinateur, votre téléphone ou votre tablette.
promo-lockwise-cta = Installer { -brand-lockwise }
fpn-promo-headline = Empêchez les sites web et les traqueurs de connaître votre position
promo-fpn-body = { -brand-fpn } tient à distance les sites et collecteurs de données qui vous profilent avec leurs annonces, en masquant votre véritable adresse IP.
promo-fpn-cta = Obtenir { -brand-fpn }
monitor-promo-headline = Surveillez les nouvelles fuites de données
monitor-promo-body = Recevez une alerte la prochaine fois que vos informations personnelles figurent dans une fuite de données connue.
ecosystem-promo-headline = Tout une gamme de produits qui protègent votre vie privée
ecosystem-promo-body = Tous les produits { -brand-name } respectent notre « Garantie en matière de données personnelles » : collecter moins de données, les protéger, ne rien cacher.
promo-ecosystem-cta = Voir tous les produits
steps-to-resolve-headline = Mesures à prendre pour résoudre cette fuite
vpn-promo-headline = Le moment est venu de renforcer votre sécurité en ligne.
vpn-promo-copy = Le réseau privé virtuel de { -brand-Mozilla } protège votre connexion Internet contre les pirates et les espions.
vpn-promo-cta = Installer { -brand-mozilla-vpn }
vpn-promo-headline-new = Économisez 50 % en vous abonnant pour un an
vpn-promo-copy-new = Protégez vos données en ligne et choisissez le forfait d’abonnement VPN qui vous convient le mieux.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Votre emplacement : { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Protégez-vous</em> avec { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protégé·e</em> avec { -brand-mozilla-vpn }.
vpn-banner-title-1 = Vous êtes protégé·e — merci d’utiliser { -brand-mozilla-vpn }.
vpn-banner-title-2 = Votre position peut être pistée si vous n’utilisez pas de VPN.
vpn-banner-subtitle-2 = Protégez votre emplacement et naviguez en toute sécurité en 3 étapes
vpn-banner-status-protected = État actuel : <em>Protégé·e ✓</em>
vpn-banner-status-not-protected = État actuel : <em>Non protégé·e ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Adresse IP : { $ip-address }
vpn-banner-step-1 = Abonnez-vous à { -brand-mozilla-vpn }
vpn-banner-step-2 = Sélectionnez un emplacement VPN
vpn-banner-step-3 = Activez le VPN et naviguez en toute sécurité
vpn-banner-cta = Installer { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Développer
# button to close panel
vpn-banner-cta-close = Fermer

## Relay and VPN educational/ad units

ad-unit-relay-cta = En savoir plus sur { -brand-relay }
ad-unit-vpn-cta = En savoir plus sur { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Comment garder votre adresse e-mail secrète ?
# ad 2 heading
ad-unit-2-do-you-worry = Vous souciez-vous de la sécurité des Wi-Fi publics ?
# ad 3 heading
ad-unit-3-stay-in-the-game = Restez dans la partie !
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } vous permet de maintenir une connexion stable en toute sécurité pendant que vous jouez à des jeux ou regardez des films en streaming.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Évitez la limitation de la bande passante
# ad 3 list item 2
ad-unit-3-be-anywhere = Apparaissez de n’importe où dans le monde
# ad 3 list item 3
ad-unit-3-access-more = Accédez à plus de contenus
# ad 4 heading
ad-unit-4-shopping-with = Shopping avec les alias de messagerie.
ad-unit-4-want-to-buy = Vous voulez faire un achat en ligne mais vous ne connaissez pas la boutique ou ne lui faites pas totalement confiance ?
ad-unit-4-shop-online = Utilisez un alias de messagerie pour tout achat en ligne. Recevez sur votre véritable adresse e-mail la confirmation envoyée et, quand vous le voulez, désactivez facilement l’alias par la suite.
# ad 5 heading
ad-unit-5-on-the-go = À la volée avec { -brand-relay }
ad-unit-5-instantly-make = Créez instantanément un alias de messagerie où que vous soyez et où que vous alliez !
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Connectez-vous partout
ad-unit-5-privately-sign-in = Utilisez votre alias de messagerie quand vous le souhaitez pour vous connecter en toute confidentialité à un Wi-Fi public ou à celui de votre café préféré.
# ad 5 subheading 2
ad-unit-5-email-receipts = Recevez vos factures par e-mail
ad-unit-5-share-custom-email = Donnez une adresse e-mail personnalisée pour les factures de vos achats en magasin sans communiquer votre véritable adresse e-mail.
# ad 5 subheading 3
ad-unit-5-use-on-phone = Utilisez-le sur votre téléphone
ad-unit-5-no-matter-where = Peu importe où vous vous trouvez, créez une adresse e-mail personnalisée en quelques secondes quel que soit votre besoin.
# ad 6 heading
ad-unit-6-worry-free = Inscriptions sans souci
ad-unit-6-want-to-start = Vous voulez commencer un nouvel abonnement, répondre à une invitation ou un obtenir un code de réduction sans que les spams n’inondent votre boîte de réception ?
ad-unit-6-before-you-complete = Pour finir cette inscription, utilisez un alias de messagerie à la place de votre véritable adresse e-mail pour protéger vos informations et garder le contrôle de votre boîte de réception.

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = Régler vos fuites de données
site-nav-settings-link = Paramètres
site-nav-help-link = Aide et assistance
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Essayez nos autres outils de sécurité :
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
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

# Obsolete
menu-button-title = Menu utilisateur
# Obsolete
menu-button-alt = Ouvrir le menu utilisateur
# Obsolete
menu-list-accessible-label = Menu du compte
# Obsolete
menu-item-fxa-2 = Gérer votre { -brand-mozilla-account }
# Obsolete
menu-item-settings = Paramètres
# Obsolete
menu-item-help = Aide et assistance
# Obsolete
menu-item-logout = Déconnexion
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

mozilla = { -brand-Mozilla }
terms-of-service = Conditions d’utilisation
privacy-notice = Politique de confidentialité
github = { -brand-github }
footer-nav-all-breaches = Toutes les fuites de données
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = Questions fréquentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } - Page introuvable
error-page-error-404-copy = Nous sommes désolés, la page que vous recherchez n’existe plus.
error-page-error-404-cta-button = Retour
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } - Une erreur s’est produite
error-page-error-other-copy = Veuillez réessayer ou revenir plus tard

## Breach overview page

all-breaches-headline-2 = Toutes les fuites de données détectées par { -brand-fx-monitor }
all-breaches-lead = Nous surveillons toutes les fuites de données connues pour savoir si vos informations personnelles ont été compromises. Voici une liste complète de toutes les fuites de données qui ont été signalées depuis 2007.
search-breaches = Rechercher des fuites de données
# the kind of user data exposed to hackers in data breach.
exposed-data = Données ayant fuité :

## Public breach detail page

find-out-if-2 = Vérifiez si cette fuite de données vous concerne
find-out-if-description = Nous vous aiderons à vérifier rapidement si votre adresse e-mail a été compromise dans cette fuite de données et à comprendre ce qu’il faut faire ensuite.
breach-detail-cta-signup = Vérifier les fuites de données

## Floating banner

floating-banner-text = Renforcez votre sécurité en ligne avec les actualités et les conseils de { -brand-Mozilla }.
floating-banner-link-label = Je m’inscris
floating-banner-dismiss-button-label = Non merci

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b> : un nouveau nom, une nouvelle interface et encore de nouvelles façons de <b>reprendre le contrôle de votre vie privée</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Ignorer
loading-accessibility = Chargement…
