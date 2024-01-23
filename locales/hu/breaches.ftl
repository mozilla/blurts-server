# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } – Vezérlőpult

breach-all-meta-title = { -brand-fx-monitor } – Minden adatvédelmi incidens
breach-all-meta-social-title = Az összes, a { -brand-fx-monitor } által észlelt adatvédelmi incidens
breach-all-meta-social-description = Böngéssze a { -brand-fx-monitor } által észlelt ismert adatvédelmi incidensek teljes listáját, és tudja meg, hogy kikerültek-e az információi.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } – { $company } adatvédelmi incidens
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Érintette a(z) { $company } adatvédelmi incidense?
breach-detail-meta-social-description = Használja a { -brand-fx-monitor }t, hogy megtudja, hogy kikerültek-e a személyes információi ebben az adatvédelmi incidensben, és hogy megtudja, mit kell tennie.

breach-scan-meta-title = { -brand-fx-monitor } – Adatvédelmi incidensek eredményei
breach-scan-meta-social-title = { -brand-fx-monitor } adatvédelmi incidensek eredményei
breach-scan-meta-social-description = Jelentkezzen be a { -brand-fx-monitor }ba a adatvédelmi incidensek megoldásához, és kapjon folyamatos ellenőrzést az új ismert adatvédelmi incidensekről.

## Breaches header

# Data classes pie chart title
breach-chart-title = Incidensben érintett adatok

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

breaches-resolve-heading = Ezen adatvédelmi incidens megoldása:

breaches-none-headline = Nem találhatók adatvédelmi incidensek
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Jó hírek! Nem jelentettek a(z) { $email } címéhez köthető ismert adatvédelmi incidenseket. Folyamatosan figyelemmel kísérjük ezt az e-mail-címet, és értesíteni fogjuk, ha bármilyen új adatvédelmi incidens történik.
breaches-none-cta-blurb = Szeretne egy másik e-mail-címet is figyelni?
breaches-none-cta-button = E-mail-cím hozzáadása

breaches-all-resolved-headline = Összes adatvédelmi incidens megoldva
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Szép munka! Megoldotta a(z) { $email } címéhez köthető összes adatvédelmi incidenst. Folyamatosan figyelemmel kísérjük ezt az e-mail-címet, és értesíteni fogjuk, ha bármilyen új adatvédelmi incidens történik.
breaches-all-resolved-cta-blurb = Szeretne egy másik e-mail-címet is figyelni?
breaches-all-resolved-cta-button = E-mail-cím hozzáadása

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = A(z) { $companyName } adatvédelmi incidensben volt érintett ekkor: { $breachDate }. Amint az adatvédelmi incidens felfedezésre és megerősítésre került, hozzáadásra került az adatbázisunkhoz, ekkor: { $addedDate }. Ez az incidens a következőket tartalmazta: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } jelszókezelő
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }-nel

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Frissítse jelszavait és engedélyezze a kétfaktoros hitelesítést (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = A legtöbb esetben azt javasoljuk, hogy a cég weboldalán változtassa meg a jelszavát. De <b>a weboldaluk lehet, hogy nem működik vagy rosszindulatú tartalmat tartalmaz</b>, ezért legyen óvatos, ha <breached-company-link>felkeresi a webhelyet</breached-company-link>. A nagyobb védelem érdekében győződjön meg róla, hogy egyedi jelszót használ az összes fiókhoz, így a kiszivárgott jelszavak nem használhatók fel más fiókok elérésére. A { $passwordManagerLink } segíthet az összes jelszavának biztonságos nyomon követésében.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Védje e-mailjeit egy e-mail maszkolási szolgáltatással, például a { $firefoxRelayLink } segítségével.
breach-checklist-email-body = Ezzel elrejtheti valódi e-mail-címét, miközben a leveleket a valódi postafiókjába továbbítja.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Figyelje a bankszámlakivonatait, és keressen olyan számlákat, kölcsönöket vagy hitelkártyákat, melyeket nem ismer fel.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Fontolóra veheti a hitelinformációinak befagyasztását is az { $equifaxLink }nál, { $experianLink }nál és a { $transUnionLink }nál, hogy a csalók ne nyithassanak új számlákat az Ön nevében. Ez ingyenes, és nincs hatással a hitelképességi mutatójára.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Használja privát módon az internetet egy VPN-nel, például a { $mozillaVpnLink }.
breach-checklist-ip-body = Az Ön IP-címe (internetprotokoll címe) meghatározza a tartózkodási helyét és az internetszolgáltatót. A VPN elrejtheti a valós IP-címét, így privát módon használhatja az internetet.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Módosítson minden olyan jelszót vagy PIN-kódot, amely a címe bármely részét tartalmazza.
breach-checklist-address-body = A címek könnyen megtalálhatók a nyilvános nyilvántartásokban, így az ilyen jelszavak és PIN-kódok könnyen kitalálhatók.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Módosítson minden olyan jelszót vagy PIN-kódot, amely a születési dátumát tartalmazza.
breach-checklist-dob-body = A születési dátumok könnyen megtalálhatók a nyilvános nyilvántartásokban, és az emberek, akik megtalálják, könnyen kitalálhatják a PIN-kódját.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Védje telefonszámát egy olyan maszkoló szolgáltatással, mint a { $firefoxRelayLink }, amely elrejti valódi telefonszámát.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Frissítse a biztonsági kérdéseit.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = A legtöbb esetben azt javasoljuk, hogy frissítse a biztonsági kérdéseket a cég weboldalán. De <b>a weboldaluk lehet, hogy nem működik vagy rosszindulatú tartalmat tartalmaz</b>, ezért legyen óvatos, ha <breached-company-link>felkeresi a webhelyet</breached-company-link>. A nagyobb védelem érdekében frissítse ezeket a biztonsági kérdéseket minden olyan fontos fiókban, ahol használta őket, és hozzon létre egyedi jelszavakat az összes fiókhoz.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Hozzon létre egyedi, erős jelszavakat minden olyan fiókhoz, ahol ismételten használta a jelszavakat.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Egy jelszókezelő, például a { $passwordManagerLink } (amely ingyenes és be van építve a { -brand-firefox } böngészőbe) segíthet nyomon követni jelszavait, és biztonságosan hozzáférni minden eszközéről.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Lépjen kapcsolatba a következővel: { $companyName }, tájékoztassa őket erről az adatvédelmi incidensről, és kérdezzen rá a megtehető lépésekre.
