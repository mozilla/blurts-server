# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Adatvédelmi incidensek a következőnél: { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } / { $total } e-mail figyelve
       *[other] { $count } / { $total } e-mail figyelve
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = E-mail-címek kezelése

## Breaches resolved filter

filter-label-unresolved = Meg nem oldott adatvédelmi incidensek
filter-label-resolved = Megoldott adatvédelmi incidensek

## Breaches table

column-company = VÁLLALAT
column-breached-data = KIKERÜLT ADATOK
column-detected = ÉSZLELVE
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Megoldva
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktív
breaches-none-headline = Nem találhatók adatvédelmi incidensek
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Jó hírek! Nem jelentettek a(z) { $email } címéhez köthető ismert adatvédelmi incidenseket. Folyamatosan figyelemmel kísérjük ezt az e-mail-címet, és értesíteni fogjuk, ha bármilyen új adatvédelmi incidens történik.
breaches-none-cta-blurb = Szeretne egy másik e-mail-címet is figyelni?
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = A(z) { $companyName } adatvédelmi incidensben volt érintett ekkor: { $breachDate }. Amint az adatvédelmi incidens felfedezésre és megerősítésre került, hozzáadásra került az adatbázisunkhoz, ekkor: { $addedDate }. Ez az incidens a következőket tartalmazta: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Keresse fel a <a>{ $breachedCompanyUrl }</a> weboldalt, hogy módosítsa a jelszavát és engedélyezze a kétfaktoros hitelesítést (2FA).
breach-checklist-pw-body = Győződjön meg arról, hogy a jelszava egyedi és nehezen kitalálható. Ha ezt a jelszót más fiókoknál is használja, akkor ott is változtassa meg. A <a>{ -brand-firefox } Jelszókezelő</a> segítségével biztonságosan nyomon követheti az összes jelszavát.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Védje e-mailjeit egy e-mail maszkolási szolgáltatással, például a <a>{ -brand-relay }</a> segítségével.
breach-checklist-email-body = Ezzel elrejtheti valódi e-mail-címét, miközben a leveleket a valódi postafiókjába továbbítja.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Figyelje a bankszámlakivonatait, és keressen olyan számlákat, kölcsönöket vagy hitelkártyákat, melyeket nem ismer fel.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Jelentse ezt az adatvédelmi incidenst a hitelkártya-kibocsátójának, és kérjen új kártyát új számmal.
breach-checklist-cc-body = Tekintse át a számlakivonatait is, hogy nincsenek-e fel nem ismert terhelések.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Azonnal értesítse bankját, ha számlaszámát feltörték.
breach-checklist-bank-body = Ha ezt gyorsabban megteszi, akkor több jogi védelmet kaphat a veszteségek megtérítéséhez. Érdemes ellenőriznie a fiókját is, hogy vannak-e fel nem ismert terhelések.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Értesítse a kártyakibocsátót, és azonnal változtassa meg a PIN-kódját.
breach-checklist-pin-body = Győződjön meg arról, hogy az új PIN-kód vagy bármely más PIN-kód nem tartalmaz könnyen kitalálható számokat, például a születési dátumát vagy a címét.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Használja privát módon az internetet egy VPN-nel, például a <a>{ -brand-mozilla-vpn }-nel</a>.
breach-checklist-ip-body = Az Ön IP-címe (internetprotokoll címe) meghatározza a tartózkodási helyét és az internetszolgáltatót. A VPN elrejtheti a valós IP-címét, így privát módon használhatja az internetet.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Módosítson minden olyan jelszót vagy PIN-kódot, amely a címe bármely részét tartalmazza.
breach-checklist-address-body = A címek könnyen megtalálhatók a nyilvános nyilvántartásokban, így az ilyen jelszavak és PIN-kódok könnyen kitalálhatók.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Módosítson minden olyan jelszót vagy PIN-kódot, amely a születési dátumát tartalmazza.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions


## Prompts the user for changes when there is a breach detected of historical password


## Prompts the user for changes when there is a breach detected of other types

