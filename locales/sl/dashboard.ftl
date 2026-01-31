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
        [one] <nr>{ $nr }</nr> <label>izpostavljenost</label>
        [two] <nr>{ $nr }</nr> <label>izpostavljenosti</label>
        [few] <nr>{ $nr }</nr> <label>izpostavljenosti</label>
       *[other] <nr>{ $nr }</nr> <label>izpostavljenosti</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Popravljeno</label>
exposure-chart-legend-heading-type = izpostavljenost
exposure-chart-legend-heading-nr = Število
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ta grafikon prikazuje, kolikokrat so vaši podatki aktivno izpostavljeni.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ta grafikon prikazuje skupne izpostavljenosti, ki so fiksne ({ $total_fixed_exposures_num } od { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Domači naslov, družinski člani in drugo še ni vključeno.
exposure-chart-returning-user-upgrade-prompt-cta = Začnite brezplačen pregled
exposure-chart-scan-in-progress-prompt = <b>Iskanje v teku:</b> naslov, družinski člani in drugo še niso vključeni.
modal-active-number-of-exposures-title = O številu aktivnih izpostavljenosti
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ta grafikon vključuje skupno število izpostavljenosti posamezne vrste podatkov v vseh krajah podatkov za e-poštni naslov { $limit }, ki ga trenutno spremljate.
        [two] Ta grafikon vključuje skupno število izpostavljenosti posamezne vrste podatkov v vseh krajah podatkov za največ { $limit } e-poštnih naslovov, ki jih trenutno nadzorujete.
        [few] Ta grafikon vključuje skupno število izpostavljenosti posamezne vrste podatkov v vseh krajah podatkov za največ { $limit } e-poštnih naslovov, ki jih trenutno nadzorujete.
       *[other] Ta grafikon vključuje skupno število izpostavljenosti posamezne vrste podatkov v vseh krajah podatkov za največ { $limit } e-poštnih naslovov, ki jih trenutno nadzorujete.
    }
modal-active-number-of-exposures-part-two = Na primer, če imate 10 izpostavljenosti svoje telefonske številke, to lahko pomeni, da je ena telefonska številka izpostavljena na 10 različnih spletnih mestih ali pa da sta bili 2 različni telefonski številki izpostavljeni na 5 različnih mestih.
modal-active-number-of-exposures-part-three-all = Ko bodo razrešene, bodo dodane vašemu skupnemu številu fiksiranih izpostavljenosti na strani Fiksno.
modal-fixed-number-of-exposures-title = O številu določenih izpostavljenosti
modal-fixed-number-of-exposures-all = Ta grafikon vključuje skupno število odpravljenih kraj podatkov za vse e-poštne naslove, ki jih trenutno spremljate. Ko so izpostavljenosti označene kot fiksne, bodo tukaj dodane skupni vsoti.
modal-cta-ok = V redu
modal-cta-got-it = Razumem
open-modal-alt = Odpri način
close-modal-alt = Zapri modalno okno
progress-card-heres-what-we-fixed-headline-all = To ste popravili
progress-card-manually-fixed-headline = Ročno popravljeno
dashboard-tab-label-action-needed = Potrebno je ukrepanje
dashboard-tab-label-fixed = Popravljeno
dashboard-exposures-all-fixed-label = Tukaj je vse popravljeno!
dashboard-exposures-area-headline = Oglejte si vsa spletna mesta, kjer so vaši podatki izpostavljeni
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Ugotovili smo { $exposures_unresolved_num } izpostavljenost vaših podatkov.
        [two] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
        [few] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
       *[other] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Pojavil se je v { $data_breach_unresolved_num } podatkovni kraji.
        [two] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov.
        [few] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov.
       *[other] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov.
    }
dashboard-fixed-area-headline-all = Oglejte si vse izpostavljenosti, ki so fiksne
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtriraj
dashboard-exposures-filter-company = Podjetje
dashboard-exposures-filter-date-found = Datum zaznave
dashboard-exposures-filter-date-found-last-seven-days = Zadnjih 7 dni
dashboard-exposures-filter-date-found-last-thirty-days = Zadnjih 30 dni
dashboard-exposures-filter-date-found-last-year = Lansko leto
dashboard-exposures-filter-status = Stanje
popover-open-filter-settings-alt = Izberite filtre
dashboard-exposures-filter-show-all = Prikaži vse
dashboard-exposures-filter-show-results = Prikaži rezultate
dashboard-exposures-filter-reset = Ponastavi

## Top banner on the dashboard

dashboard-top-banner-section-label = Povzetek nadzorne plošče
dashboard-top-banner-your-data-is-protected-title = Vaši podatki so zaščiteni
dashboard-top-banner-your-data-is-protected-cta = Oglejte si, kaj je popravljeno
dashboard-top-banner-protect-your-data-title = Zaščitimo vaše podatke
dashboard-top-banner-protect-your-data-cta = Popravimo zadevo
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Ugotovili smo { $exposures_unresolved_num } izpostavljenost vaših podatkov.
        [two] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
        [few] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
       *[other] Odkrili smo { $exposures_unresolved_num } izpostavljenosti vaših podatkov.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Pojavil se je v { $data_breach_unresolved_num } podatkovni kraji. Vodili vas bomo, kako to težavo odpraviti po korakih.
        [two] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov. Vodili vas bomo, kako to težavo odpraviti po korakih.
        [few] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov. Vodili vas bomo, kako to težavo odpraviti po korakih.
       *[other] Pojavil se je v { $data_breach_unresolved_num } krajah podatkov. Vodili vas bomo, kako to težavo odpraviti po korakih.
    }
dashboard-top-banner-no-exposures-found-title = Ni izpostavljenosti
dashboard-top-banner-non-us-no-exposures-found-description = Odlična novica! Preiskali smo vse znane kraje podatkov in našli nobene izpostavljenosti. Vaš e-poštni naslov bomo še naprej spremljali in vas obvestili, če bo prišlo do nove kraje.
dashboard-no-exposures-label = Ni izpostavljenosti
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Odlično, izpostavljenost vaših podatkov je odpravljena! Nadaljevali bomo s spremljanjem in vas bomo obvestili o morebitnih novih izpostavljenostih.
        [two] Odlično, vseh { $exposures_resolved_num } izpostavljenosti vaših podatkov je odpravljenih! Nadaljevali bomo s spremljanjem in vas bomo obvestili o morebitnih novih izpostavljenostih.
        [few] Odlično, vseh { $exposures_resolved_num } izpostavljenosti vaših podatkov je odpravljenih! Nadaljevali bomo s spremljanjem in vas bomo obvestili o morebitnih novih izpostavljenostih.
       *[other] Odlično, vseh { $exposures_resolved_num } izpostavljenosti vaših podatkov je odpravljenih! Nadaljevali bomo s spremljanjem in vas bomo obvestili o morebitnih novih izpostavljenostih.
    }
dashboard-top-banner-monitor-more-cta = Spremljaj več naslovov

# About Exposure Indicators Modal

modal-exposure-status-description-all = Izpostavljenosti iščemo v vseh znanih krajah podatkov. Vaša izpostavljenost bo imela eno od naslednjih stanj:
modal-exposure-indicator-title = Stanja izpostavljenosti
modal-exposure-indicator-action-needed = Za dokončanje potrebujete napredno ali ročno dejanje.
modal-exposure-indicator-fixed = Izpostavljenost je bila razrešena in ni vam potrebno storiti ničesar.
