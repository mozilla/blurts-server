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
        [one] <nr>{ $nr }</nr> <label>ekspozim</label>
       *[other] <nr>{ $nr }</nr> <label>ekspozime</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Të ndrequra</label>
exposure-chart-legend-heading-type = Ekspozim
exposure-chart-legend-heading-nr = Numër
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ky grafik tregon se sa herë është ekspozuar aktivisht informacioni juaj.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ky grafik tregon ekspozimet gjithsej që janë ndrequr ({ $total_fixed_exposures_num } nga { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresë shtëpie, anëtar familjeje, etj, s’janë përfshirë ende.
exposure-chart-returning-user-upgrade-prompt-cta = Filloni një kontroll falas
exposure-chart-scan-in-progress-prompt = <b>Kontroll në kryerje e sipër:</b> adresë, anëtarë familjeje., etj, s’janë përfshirë ende.
modal-active-number-of-exposures-title = Rreth numrit tuaj të ekspozimeve aktive
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ky grafik përfshin numrin gjithsej të herëve që gjetëm çdo lloj të dhënash të ekspozuara në krejt cenimet e të dhënave për { $limit } adresë email që mbikëqyrni aktualisht.
       *[other] Ky grafik përfshin numrin gjithsej të herëve që gjetëm çdo lloj të dhënash të ekspozuara në krejt cenimet e të dhënave për { $limit } adresa email që mbikëqyrni aktualisht.
    }
modal-active-number-of-exposures-part-two = Për shembull, nëse keni 10 ekspozime të numrit tuaj të telefonit, kjo do të thoshte një numër telefoni është ekspozuar në 10 sajte të ndryshëm, ose mund të thoshte 2 numra të ndryshëm telefoni qenë ekspozuar në 5 sajte të ndryshme.
modal-active-number-of-exposures-part-three-all = Pasi të jenë zgjidhur, do të shtohen te numri juaj i ekspozimeve të ndrequra gjithsej, te faqja Të ndrequra.
modal-fixed-number-of-exposures-title = Rreth numrit të ekspozimeve tuaja të ndrequra
modal-fixed-number-of-exposures-all = Ky grafi përfshin numrin e cenimeve të të dhënave gjithsej që janë ndrequr për krejt adresat email që mbikëqyrni aktualisht. Pasi ekspozimeve t’u jetë vënë shenjë si të ndrequra, do të shtohen te shumë këtu.
modal-cta-ok = OK
modal-cta-got-it = E mora vesh
open-modal-alt = Hap dritare modale
close-modal-alt = Mbylle dritaren modale
progress-card-heres-what-we-fixed-headline-all = Ja ç’keni ndrequr
progress-card-manually-fixed-headline = Ndrequr dorazi
dashboard-tab-label-action-needed = Lyp veprim
dashboard-tab-label-fixed = Ndrequr
dashboard-exposures-all-fixed-label = Gjithçka e ndrequr këtu!
dashboard-exposures-area-headline = Shihni krejt sajtet ku është ekspozuar informacion i juaji
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Gjetëm { $exposures_unresolved_num } ekspozim të të dhënave tuaja.
       *[other] Gjetëm { $exposures_unresolved_num } ekspozime të të dhënave tuaja.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] U shfaq në { $data_breach_unresolved_num } cenim të dhënash.
       *[other] U shfaq në { $data_breach_unresolved_num } cenime të dhënash.
    }
dashboard-fixed-area-headline-all = Shihni krejt ekspozimet që janë ndrequr
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrojini
dashboard-exposures-filter-company = Shoqëri
dashboard-exposures-filter-date-found = Datë kur u gjet
dashboard-exposures-filter-date-found-last-seven-days = 7 ditët e fundit
dashboard-exposures-filter-date-found-last-thirty-days = 30 ditët e fundit
dashboard-exposures-filter-date-found-last-year = Vitin e fundit
dashboard-exposures-filter-status = Gjendje
popover-open-filter-settings-alt = Përzgjidhni filtra
dashboard-exposures-filter-show-all = Shfaqi krejt
dashboard-exposures-filter-show-results = Shfaq përfundimet
dashboard-exposures-filter-reset = Riktheje te parazgjedhjet

## Top banner on the dashboard

dashboard-top-banner-section-label = Përmbledhje pulti
dashboard-top-banner-your-data-is-protected-title = Të dhënat tuaja janë të mbrojtura
dashboard-top-banner-your-data-is-protected-cta = Shihni ç’është ndrequr
dashboard-top-banner-protect-your-data-title = Le të mbrojmë të dhënat tuaja
dashboard-top-banner-protect-your-data-cta = Le ta ndreqim
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Gjetëm { $exposures_unresolved_num } ekspozim të të dhënave tuaja.
       *[other] Gjetëm { $exposures_unresolved_num } ekspozime të të dhënave tuaja.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] U shfaq në  { $data_breach_unresolved_num } cenim të dhënash. Do t’ju udhëheqim hap pas hapi se si ta ndreqni.
       *[other] U shfaq në  { $data_breach_unresolved_num } cenime të dhënash. Do t’ju udhëheqim hap pas hapi se si ta ndreqni.
    }
dashboard-top-banner-no-exposures-found-title = S’u gjetën ekspozime
dashboard-top-banner-non-us-no-exposures-found-description = Lajme të mbara! Kërkuam në krejt cenimet e ditura të të dhënave dhe s’gjetëm ekspozim. Do të vazhdojmë të mbikëqyrim adresën tuaj email dhe t’ju sinjalizojmë kur të ketë cenime të reja.
dashboard-no-exposures-label = S’u gjetën ekspozime
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Punë e mbarë, ekspozimi të dhënave tuaja u ndreq! Do të vazhdojmë të mbikëqyrim dhe t’ju sinjalizojmë për çdo ekspozim të ri.
       *[other] Punë e mbarë, krejt { $exposures_resolved_num } ekspozimet e të dhënave tuaja u ndreqën! Do të vazhdojmë të mbikëqyrim dhe t’ju sinjalizojmë për çdo ekspozim të ri.
    }
dashboard-top-banner-monitor-more-cta = Mbikëqyrni më tepër email-e

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Kërkojmë për ekspozime në krejt cenimet e ditura të të dhënave.
    Ekspozimet tuaja do të kenë një nga gjendjet vijuese:
modal-exposure-indicator-title = Gjendje ekspozimesh
modal-exposure-indicator-action-needed = Që të plotësohet një veprim, lypset ndërhyrje e thelluar ose dorazi nga ju.
modal-exposure-indicator-fixed = Ekspozimi është zgjidhur dhe s’ka ndonjë veprim për ta bërë ju.
