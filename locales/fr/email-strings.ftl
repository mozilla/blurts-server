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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Voici votre rapport complet de { -product-name }, qui comprend tous les cas connus de fuites de données ayant compromis cette adresse électronique.
report-no-breaches =
    Votre adresse électronique n’apparaît pas dans notre base de données de fuites de données connues.
    Des fuites de données peuvent toutefois se produire à tout moment. Suivez ces étapes pour sécuriser vos données personnelles en ligne.
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
breach-alert-headline = Votre compte a été compromis dans une fuite de données.
breach-alert-subhead = Une fuite de données signalée récemment contient votre adresse électronique et les données suivantes.
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
