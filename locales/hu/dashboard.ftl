# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
        [one] <nr>{ $nr }</nr> <label>incidens</label>
       *[other] <nr>{ $nr }</nr> <label>incidens</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Kijavítva</label>
exposure-chart-legend-heading-type = Incidens
exposure-chart-legend-heading-nr = Szám
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ez a diagram azt jeleníti meg, hogy az adatai hányszor szivárogtak ki aktívan.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ez a diagram az összes javított kiszivárgást jeleníti meg ({ $total_fixed_exposures_num } / { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Az otthoni cím, a családtagok és egyebek még nem szerepelnek benne.
exposure-chart-returning-user-upgrade-prompt-cta = Indítson egy ingyenes vizsgálatot
exposure-chart-scan-in-progress-prompt = <b>Vizsgálat folyamatban:</b> a cím, családtagok és egyebek még nincsenek benne.
modal-active-number-of-exposures-title = Az aktív kiszivárgások számáról
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ez a diagram tartalmazza, hogy hányszor találtuk meg az egyes adattípusokat a jelenleg megfigyelt { $limit } e-mail-címhez tartozó adatvédelmi incidensekben.
       *[other] Ez a diagram tartalmazza, hogy hányszor találtuk meg az egyes adattípusokat a jelenleg megfigyelt { $limit } e-mail-címhez tartozó adatvédelmi incidensekben.
    }
modal-active-number-of-exposures-part-two = Például ha 10 alkalommal szivárgott ki a telefonszáma, akkor ez azt jelentheti, hogy egy telefonszám 10 különböző oldalon, vagy 2 különböző telefonszám 5 különböző oldalon jelent meg.
modal-active-number-of-exposures-part-three-all = Amint megoldja őket, hozzáadódnak az összes javított kiszivárgáshoz a Javítva oldalon.
modal-fixed-number-of-exposures-title = A javított kiszivárgások számáról
modal-fixed-number-of-exposures-all = Ez a diagram a jelenleg figyelt e-mail-címek kijavított adatsértéseinek teljes számát tartalmazza. Amint a kitettségek rögzítettként lettek megjelölve, hozzáadódnak az összeshez itt.
modal-cta-ok = OK
modal-open-alt = Megnyitás
modal-close-alt = Bezárás
progress-card-heres-what-we-fixed-headline-all = Itt van amit kijavított
progress-card-manually-fixed-headline = Kézzel javítva
dashboard-tab-label-action-needed = Intézkedés szükséges
dashboard-tab-label-fixed = Javítva
dashboard-exposures-all-fixed-label = Itt minden javítva lett!
dashboard-exposures-area-headline = Az összes webhely megjelenítése, ahol az Ön adatai kikerültek
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] { $exposures_unresolved_num } adatkikerülést találtuk.
       *[other] { $exposures_unresolved_num } adatkikerülést találtuk.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } adatvédelmi incidensben jelent meg.
       *[other] { $data_breach_unresolved_num } adatvédelmi incidensben jelent meg.
    }
dashboard-fixed-area-headline-all = Összes javított kiszivárgás megtekintése
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Szűrő
dashboard-exposures-filter-company = Cég
dashboard-exposures-filter-date-found = Találat dátuma
dashboard-exposures-filter-date-found-last-seven-days = Elmúlt 7 nap
dashboard-exposures-filter-date-found-last-thirty-days = Elmúlt 30 nap
dashboard-exposures-filter-date-found-last-year = Tavaly
dashboard-exposures-filter-status = Állapot
dashboard-exposures-filter-status-action-needed = Intézkedés szükséges
dashboard-exposures-filter-status-in-progress = Folyamatban
dashboard-exposures-filter-status-fixed = Javítva
popover-open-filter-settings-alt = Szűrők kiválasztása
dashboard-exposures-filter-show-all = Összes megjelenítése
dashboard-exposures-filter-show-results = Eredmények megjelenítése
dashboard-exposures-filter-reset = Visszaállítás

## Top banner on the dashboard

dashboard-top-banner-section-label = A vezérlőpult összefoglalója
dashboard-top-banner-scan-in-progress-title = A vizsgálat még folyamatban van
dashboard-top-banner-your-data-is-protected-title = Az adatai védve vannak
dashboard-top-banner-your-data-is-protected-cta = Nézze meg, mi lett javítva
dashboard-top-banner-lets-keep-protecting-title = Védjük továbbra is az adatait
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Még { $exposures_unresolved_num } javítanivalója van. Folytassa, és védje meg magát. Lépésről lépésre végigvezetjük.
       *[other] Még { $exposures_unresolved_num } javítanivalója van. Folytassa, és védje meg magát. Lépésről lépésre végigvezetjük.
    }
dashboard-top-banner-lets-keep-protecting-cta = Folytassa
dashboard-top-banner-protect-your-data-title = Védjük meg az adatait
dashboard-top-banner-protect-your-data-cta = Javítsuk ki
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Az adatai { $exposures_unresolved_num } kikerülését találtuk.
       *[other] { $exposures_unresolved_num } adatmegjelenítést találtunk.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } adatsértésben jelent meg. Lépésről lépésre végigvezeti a kijavításához.
       *[other] { $data_breach_unresolved_num } adatvédelmi incidens miatt jelent meg. Lépésről lépésre végigvezeti a kijavításához.
    }
dashboard-top-banner-no-exposures-found-title = Nem találhatók kitettségek
dashboard-top-banner-non-us-no-exposures-found-description = Nagyszerű hírek! Átkutattuk az összes ismert adatsértést, és nem találtunk kitettséget. Folyamatosan figyeljük az e-mail-címét, és értesíteni fogjuk, ha új adatsértés történik.
dashboard-no-exposures-label = Nem találhatók kitettségek
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Nagyszerű munka, az adatainak kitettsége javítva! Folyamatosan figyeljük, és értesíteni fogjuk az új kitettségekről.
       *[other] Szép munka, mind { $exposures_resolved_num } adatmegjelenítés javítva lett! Folyamatosan figyeljük, és értesíteni fogjuk az új kitettségekről.
    }
dashboard-top-banner-monitor-more-cta = További e-mail-címek figyelése

# About Exposure Statuses Modal

modal-exposure-status-title = A kiszivárgások állapotáról
modal-exposure-status-description-all = Az összes ismert adatsértésben kitettségeket keresünk. A megjelenítései a következő állapotok egyikében lesznek:
modal-exposure-status-action-needed = A <b>Teendők szükségesek</b> azt jelenti, hogy aktív, és Önnek lépéseket kell tennie a javításához.
modal-exposure-status-fixed = A <b>Rögzített</b> azt jelenti, hogy a kitettség megoldódott, és nincs tennivalója.
