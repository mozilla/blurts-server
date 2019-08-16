# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Cliquez sur le bouton Vérifier mon adresse électronique dans les 24 heures pour confirmer votre compte Firefox Monitor. Votre rapport sera alors en route.
verify-my-email = Vérifier mon adresse électronique
report-scan-another-email = Vérifier une autre adresse électronique avec { -product-name }
automated-message = Ceci est un message automatique ; si vous l’avez reçu par erreur, aucune action n’est requise.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Nous avons envoyé ce message à { $userEmail }, car les alertes pour cette adresse électronique ont été activées dans { -product-name }.
unsubscribe-email-link = Si vous ne souhaitez plus recevoir d’alertes de { -product-name }, veuillez vous désinscrire.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Rapport { -product-name }
report-date = Date du rapport :
email-address = Adresse électronique :
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Prochaines étapes
report-headline =
    { $breachCount ->
        [0] Jusqu’ici, tout va bien.
        [one] Votre compte apparaît dans { $breachCount } fuite de données.
       *[other] Vos comptes apparaissent dans { $breachCount } fuites de données.
    }
report-subhead-no-breaches =
    Votre compte n’apparaît pas dans notre rapport complet de fuites de données.
    C’est une bonne nouvelle, mais ne vous arrêtez pas en si bon chemin.
    Des fuites de données peuvent se produire à tout moment, alors poursuivez votre lecture pour apprendre à protéger vos mots de passe.
report-subhead-found-breaches = Voici votre rapport complet de Firefox Monitor, qui comprend tous les cas connus de fuites de données ayant compromis cette adresse électronique.
report-pwt-blurb =
    Les mots de passe sont si précieux que des milliers d’entre eux sont volés chaque jour, puis échangés ou vendus sur le marché noir.
    L’utilisation de mots de passe robustes protège vos comptes et toutes les informations personnelles qu’ils contiennent.
report-pwt-headline-1 = Utilisez un mot de passe différent pour chaque compte
report-pwt-summary-1 = La réutilisation du même mot de passe partout ouvre la porte aux pirates. Ils peuvent utiliser ce mot de passe pour se connecter à vos autres comptes.
report-pwt-headline-2 = Créez des mots de passe robustes et différents pour chaque site ou service
report-pwt-summary-2 = Les pirates utilisent des listes de mots de passe courants pour tenter de deviner les vôtres. Plus votre mot de passe est long et aléatoire, plus il sera difficile de le voler.
report-pwt-headline-3 = Traitez les questions de sécurité comme des mots de passe supplémentaires
report-pwt-summary-3 = Les sites web ne vérifient pas que vos réponses sont exactes, mais simplement qu’elles correspondent à chaque fois. Créez des réponses longues et aléatoires et stockez-les dans un endroit sûr.
report-pwt-headline-4 = Utilisez un gestionnaire de mots de passe
report-pwt-summary-4 = Des services tels que 1Password, LastPass, Dashlane et Bitwarden génèrent des mots de passe forts, les stockent en toute sécurité et les insèrent dans les sites web pour que vous n’ayez pas à en retenir un seul.
# A link to legal information about mozilla products.
legal = Mentions légales
# Share Firefox Monitor by email subject line
share-by-email-subject = Vérifiez si vous avez été victime d’une fuite de données.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Bonjour,
    { -brand-name } propose un service gratuit où vous pouvez vérifier si vous avez été victime d’une fuite de données. Voici comment ça fonctionne :
    1. Ouvrez { "https://monitor.firefox.com" } et lancez une recherche avec votre adresse électronique.
    2. Vérifiez si vos comptes en ligne font partie d’une fuite de données.
    3. Consultez les conseils de { -product-name } sur ce qu’il faut faire ensuite.
# Unsubscribe link in email.
email-unsub-link = vous désabonner
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Vous recevez ce message, car vous vous êtes abonné·e aux alertes de { -product-name }.
    Vous ne voulez plus recevoir ces messages ? Vous pouvez { $unsubLink }. Ceci est un message automatisé. Pour obtenir de l’aide, consultez notre { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Vous recevez ce message, car vous vous êtes abonné·e aux alertes de { -product-name }.
    Ceci est un message automatisé. Pour obtenir de l’aide, consultez notre { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Consulter mon tableau de bord
# Button text
verify-email-cta = Vérifier l’adresse électronique
# Button text
see-all-breaches = Voir toutes les fuites de données
# Headline of verification email
email-link-expires = Ce lien expire dans 24 heures
email-verify-blurb = Vérifiez votre adresse électronique pour l’ajouter à { -product-name } et vous inscrire aux alertes de fuites de données.
# Email headline
email-found-breaches-hl = Récapitulatif des fuites de données vous concernant
# Email headline
email-breach-summary-for-email = Récapitulatif des fuites de données pour { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } n’apparaît dans aucune fuite de données connue
# Email headline
email-alert-hl = { $userEmail } est apparu dans une nouvelle fuite de données
# Subject line of email
email-subject-found-breaches = { -product-name } a détecté vos informations dans ces fuites de données
# Subject line of email
email-subject-no-breaches = { -product-name } n’a trouvé aucune fuite de données connue
# Subject line of email
email-subject-verify = Vérifiez votre adresse électronique pour { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = En savoir plus sur { $fxmLink }
email-sensitive-disclaimer =
    En raison de la nature sensible de cette fuite de données, les adresses électroniques concernées ne sont pas publiquement consultables.
    Vous recevez cette alerte car vous avez confirmé détenir cette adresse électronique.
fxm-warns-you-no-breaches =
    { -product-name } vous avertit des fuites de données impliquant vos informations personnelles.
    Jusqu’à présent, aucune fuite n’a été détectée. Nous vous enverrons une alerte si votre adresse électronique apparaît dans une nouvelle fuite.
fxm-warns-you-found-breaches =
    { -product-name } vous avertit des fuites de données impliquant vos informations personnelles.
    Vous êtes également inscrit·e pour recevoir des alertes si votre adresse électronique apparaît dans une nouvelle fuite.
email-breach-alert-blurb =
    { -product-name } vous avertit des fuites de données impliquant vos informations personnelles.
    Nous venons de recevoir des informations à propos d’une fuite de données concernant une autre entreprise.
# List headline
faq-list-headline = Foire aux questions
# Link Title
faq-v2-1 = Je ne reconnais pas l’une de ces sociétés ou l’un de ces sites web. Pourquoi cette fuite me concerne-t-elle ?
# Link Title
faq-v2-2 = Dois-je faire quelque chose si une fuite de données s’est produite il y a des années ou s’il s’agit d’un ancien compte ?
# Link Title
faq-v2-3 = Je viens de découvrir qu’une fuite de données me concerne. Que dois-je faire ?
# Link Title
faq-v2-4 = Comment { -product-name } traite-t-il les sites sensibles ?
