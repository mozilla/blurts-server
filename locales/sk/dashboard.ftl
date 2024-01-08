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
        [one] <nr>{ $nr }</nr><label>odhalenie</label>
        [few] <nr>{ $nr }</nr><label>odhalenia</label>
        [many] <nr>{ $nr }</nr><label>odhalení</label>
       *[other] <nr>{ $nr }</nr><label>odhalení</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>vyriešených</label>
exposure-chart-legend-heading-type = Odhalenie
exposure-chart-legend-heading-nr = Počet
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Tento graf ukazuje, koľkokrát sú vaše informácie aktívne odhalené.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Tento graf zobrazuje celkový odhalení, ktoré sú opravené ({ $total_fixed_exposures_num } z { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresa bydliska, rodinní príslušníci a ďalšie položky zatiaľ nie sú zahrnuté.
exposure-chart-returning-user-upgrade-prompt-cta = Spustiť bezplatné skenovanie
exposure-chart-scan-in-progress-prompt = <b>Prebieha skenovanie:</b> adresa bydliska, rodinní príslušníci a ďalšie položky zatiaľ nie sú zahrnuté.
modal-active-number-of-exposures-title = O vašom počte aktívnych odhalení
modal-active-number-of-exposures-part-three-all = Keď budú vyriešené, budú pridané k vášmu celkovému počtu vyriešených odhalení na stránke Vyriešené.
modal-cta-ok = OK
modal-open-alt = Otvoriť
modal-close-alt = Zavrieť
progress-card-heres-what-we-fixed-headline-all = Toto ste vyriešili
progress-card-manually-fixed-headline = Manuálne vyriešené
dashboard-tab-label-action-needed = Vyžaduje sa akcia
dashboard-tab-label-fixed = Vyriešené
dashboard-exposures-all-fixed-label = Tu je všetko vyriešené!
dashboard-exposures-area-headline = Pozrite si všetky stránky, na ktorých sú zverejnené vaše údaje
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Našli sme { $exposures_unresolved_num } odhalenie vašich údajov.
        [few] Našli sme { $exposures_unresolved_num } odhalenia vašich údajov.
        [many] Našli sme { $exposures_unresolved_num } odhalení vašich údajov.
       *[other] Našli sme { $exposures_unresolved_num } odhalení vašich údajov.
    }
dashboard-fixed-area-headline-all = Pozrite si všetky odhalenia, ktoré sú vyriešené
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrovať
dashboard-exposures-filter-company = Spoločnosť
dashboard-exposures-filter-date-found = Dátum nájdenia
dashboard-exposures-filter-date-found-last-seven-days = Posledných 7 dní
dashboard-exposures-filter-date-found-last-thirty-days = Posledných 30 dní
dashboard-exposures-filter-date-found-last-year = Posledný rok
dashboard-exposures-filter-status = Stav
dashboard-exposures-filter-status-action-needed = Vyžaduje sa akcia
dashboard-exposures-filter-status-in-progress = Prebieha
dashboard-exposures-filter-status-fixed = Vyriešené
popover-open-filter-settings-alt = Zvoľte filtre
dashboard-exposures-filter-show-all = Zobraziť všetko
dashboard-exposures-filter-show-results = Zobraziť výsledky
dashboard-exposures-filter-reset = Vynulovať

## Top banner on the dashboard

dashboard-top-banner-your-data-is-protected-cta = Pozrite sa, čo je vyriešené
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Stále vám zostáva vyriešiť { $exposures_unresolved_num } odhalenie. Pokračujte a chráňte sa. Prevedieme vás krok za krokom.
        [few] Stále vám zostáva vyriešiť { $exposures_unresolved_num } odhalenia. Pokračujte a chráňte sa. Prevedieme vás krok za krokom.
        [many] Stále vám zostáva vyriešiť { $exposures_unresolved_num } odhalení. Pokračujte a chráňte sa. Prevedieme vás krok za krokom.
       *[other] Stále vám zostáva vyriešiť { $exposures_unresolved_num } odhalení. Pokračujte a chráňte sa. Prevedieme vás krok za krokom.
    }
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Našli sme { $exposures_unresolved_num } odhalenie vašich údajov.
        [few] Našli sme { $exposures_unresolved_num } odhalenia vašich údajov.
        [many] Našli sme { $exposures_unresolved_num } odhalení vašich údajov.
       *[other] Našli sme { $exposures_unresolved_num } odhalení vašich údajov.
    }
dashboard-top-banner-no-exposures-found-title = Neboli nájdené žiadne odhalenia
dashboard-no-exposures-label = Neboli nájdené žiadne odhalenia

# About Exposure Statuses Modal

modal-exposure-status-action-needed = <b>Vyžaduje sa akcia</b> znamená, že odhalenie je momentálne aktívny a musíte podniknúť kroky na jeho vyriešenie.
modal-exposure-status-fixed = <b>Vyriešené</b> znamená, že odhalenie bolo vyriešený a nemusíte podniknúť žiadne ďalšie kroky.
