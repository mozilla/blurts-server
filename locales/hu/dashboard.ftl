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
        [one] <nr>{ $nr }</nr> <label>kitettség</label>
       *[other] <nr>{ $nr }</nr> <label>kitettség</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Javítva</label>
exposure-chart-legend-heading-type = Kitettség
exposure-chart-legend-heading-nr = Szám
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ez a diagram azt jeleníti meg, hogy az adatai hányszor szivárogtak ki aktívan.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ez a diagram az összes javított kitettséget jeleníti meg ({ $total_fixed_exposures_num } / { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Az otthoni cím, a családtagok és egyebek még nem szerepelnek benne.
exposure-chart-returning-user-upgrade-prompt-cta = Indítson egy ingyenes vizsgálatot
exposure-chart-scan-in-progress-prompt = <b>Vizsgálat folyamatban:</b> a cím, családtagok és egyebek még nincsenek benne.
modal-active-number-of-exposures-title = Az aktív kitettségek számáról
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ez a diagram tartalmazza, hogy hányszor találtuk meg az egyes adattípusokat a jelenleg megfigyelt { $limit } e-mail-címhez tartozó adatvédelmi incidensekben.
       *[other] Ez a diagram tartalmazza, hogy hányszor találtuk meg az egyes adattípusokat a jelenleg megfigyelt { $limit } e-mail-címhez tartozó adatvédelmi incidensekben.
    }
modal-active-number-of-exposures-part-two = Például ha 10 alkalommal szivárgott ki a telefonszáma, akkor ez azt jelentheti, hogy egy telefonszám 10 különböző oldalon, vagy 2 különböző telefonszám 5 különböző oldalon jelent meg.
modal-active-number-of-exposures-part-three-all = Amint megoldja őket, hozzáadódnak az összes javított kitettséghez a Javítva oldalon.
modal-fixed-number-of-exposures-title = A javított kitettségsek számáról
modal-fixed-number-of-exposures-all = Ez a diagram a jelenleg figyelt e-mail-címek kijavított adatvédelmi incidenseinek teljes számát tartalmazza. Amint a kitettségek javítottként lesznek megjelölve, hozzá lesznek adva az összeshez itt.
modal-cta-ok = OK
modal-cta-got-it = Értem
open-modal-alt = Felugró ablak megnyitása
close-modal-alt = Felugró ablak bezárása
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
        [one] { $exposures_unresolved_num } kitettséget találtuk.
       *[other] { $exposures_unresolved_num } kitettséget találtuk.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } adatvédelmi incidensben jelent meg.
       *[other] { $data_breach_unresolved_num } adatvédelmi incidensben jelent meg.
    }
dashboard-fixed-area-headline-all = Összes javított kitettség megtekintése
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Szűrő
dashboard-exposures-filter-company = Cég
dashboard-exposures-filter-date-found = Találat dátuma
dashboard-exposures-filter-date-found-last-seven-days = Elmúlt 7 nap
dashboard-exposures-filter-date-found-last-thirty-days = Elmúlt 30 nap
dashboard-exposures-filter-date-found-last-year = Tavaly
dashboard-exposures-filter-status = Állapot
popover-open-filter-settings-alt = Szűrők kiválasztása
dashboard-exposures-filter-show-all = Összes megjelenítése
dashboard-exposures-filter-show-results = Eredmények megjelenítése
dashboard-exposures-filter-reset = Visszaállítás

## Top banner on the dashboard

dashboard-top-banner-section-label = A vezérlőpult összefoglalója
dashboard-top-banner-your-data-is-protected-title = Az adatai védve vannak
dashboard-top-banner-your-data-is-protected-cta = Nézze meg, mi lett javítva
dashboard-top-banner-protect-your-data-title = Védjük meg az adatait
dashboard-top-banner-protect-your-data-cta = Javítsuk ki
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] { $exposures_unresolved_num } kitettséget találtuk.
       *[other] { $exposures_unresolved_num } kitettséget találtuk.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } adatvédelmi incidensben szerepelt. A javításhoz végigvezetjük lépésről lépésre.
       *[other] { $data_breach_unresolved_num } adatvédelmi incidensben szerepelt. A javításhoz végigvezetjük lépésről lépésre.
    }
dashboard-top-banner-no-exposures-found-title = Nem találhatók kitettségek
dashboard-top-banner-non-us-no-exposures-found-description = Nagyszerű hírek! Átnéztük az összes ismert adatvédelmi incidenst, és nem találtunk kitettségeket. Folyamatosan figyelni fogjuk az e-mail-címét, és értesíteni fogjuk, ha új adatvédelmi incidens történik.
dashboard-no-exposures-label = Nem találhatók kitettségek
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Szép munka, az adatkikerülés javítva! Folyamatosan figyelni fogjuk, és értesíteni fogjuk az új kitettségekről.
       *[other] Szép munka, mind a(z) { $exposures_resolved_num } adatkikerülés javítva! Folyamatosan figyelni fogjuk, és értesíteni fogjuk az új kitettségekről.
    }
dashboard-top-banner-monitor-more-cta = További e-mail-címek figyelése

# About Exposure Indicators Modal

modal-exposure-status-description-all = Kitettségeket keresünk az összes ismert adatvédelmi incidensben. A kitettségei a következő állapotok valamelyikében lesznek:
modal-exposure-indicator-title = Kitettségi állapotok
modal-exposure-indicator-action-needed = Speciális vagy kézi művelet szükséges a művelet befejezéséhez.
modal-exposure-indicator-fixed = A kitettség megoldódott, és nincs tennivalója.
