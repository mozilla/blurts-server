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
exposure-chart-caption-fixed = Tento graf zobrazuje celkový počet odhalení, ktoré boli vyriešené ({ $total_fixed_exposures_num } z { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresa bydliska, rodinní príslušníci a ďalšie položky zatiaľ nie sú zahrnuté.
exposure-chart-returning-user-upgrade-prompt-cta = Spustiť bezplatné skenovanie
exposure-chart-scan-in-progress-prompt = <b>Prebieha skenovanie:</b> adresa bydliska, rodinní príslušníci a ďalšie položky zatiaľ nie sú zahrnuté.
modal-active-number-of-exposures-title = O počte aktívnych odhalení
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Tento graf obsahuje celkový počet odhalení pre každý typ údajov v rámci všetkých únikov údajov pre { $limit } e‑mailovú adresu, ktorú momentálne monitorujete.
        [few] Tento graf obsahuje celkový počet odhalení pre každý typ údajov v rámci všetkých únikov údajov až pre { $limit } e‑mailové adresy, ktoré momentálne monitorujete.
        [many] Tento graf obsahuje celkový počet odhalení pre každý typ údajov v rámci všetkých únikov údajov až pre { $limit } e‑mailových adries, ktoré momentálne monitorujete.
       *[other] Tento graf obsahuje celkový počet odhalení pre každý typ údajov v rámci všetkých únikov údajov až pre { $limit } e‑mailových adries, ktoré momentálne monitorujete.
    }
modal-active-number-of-exposures-part-two = Ak máte napríklad 10 kontaktov so svojím telefónnym číslom, môže to znamenať, že jedno telefónne číslo je zverejnené na 10 rôznych stránkach, alebo to môže znamenať, že na 5 rôznych stránkach boli odhalené 2 rôzne telefónne čísla.
modal-active-number-of-exposures-part-three-all = Keď budú vyriešené, budú pridané k vášmu celkovému počtu vyriešených odhalení na podstránke Vyriešené.
modal-fixed-number-of-exposures-title = O počte vyriešených odhalení
modal-fixed-number-of-exposures-all = Tento graf obsahuje celkový počet únikov údajov, ktoré boli vyriešené pre všetky e‑mailové adresy, ktoré momentálne monitorujeme. Keď je niektoré odhalenie označené ako vyriešené, pripočíta sa tu k celkovému súčtu.
modal-cta-ok = OK
modal-cta-got-it = Rozumiem
open-modal-alt = Otvoriť dialógové okno
close-modal-alt = Zavrieť dialógové okno
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
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Objavili sa pri { $data_breach_unresolved_num } úniku údajov.
        [few] Objavili sa pri { $data_breach_unresolved_num } únikoch údajov.
        [many] Objavili sa pri { $data_breach_unresolved_num } únikoch údajov.
       *[other] Objavili sa pri { $data_breach_unresolved_num } únikoch údajov.
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
popover-open-filter-settings-alt = Zvoľte filtre
dashboard-exposures-filter-show-all = Zobraziť všetko
dashboard-exposures-filter-show-results = Zobraziť výsledky
dashboard-exposures-filter-reset = Vynulovať

## Top banner on the dashboard

dashboard-top-banner-section-label = Súhrnná nástenka
dashboard-top-banner-your-data-is-protected-title = Vaše údaje sú chránené
dashboard-top-banner-your-data-is-protected-cta = Pozrite sa, čo všetko je vyriešené
dashboard-top-banner-protect-your-data-title = Poďme ochrániť vaše údaje
dashboard-top-banner-protect-your-data-cta = Poďme to napraviť
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
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Našli sme { $data_breach_unresolved_num } odhalenie vašich údajov. Prevedieme vás krokmi, pomocou ktorých vykonáte nápravu.
        [few] Našli sme { $data_breach_unresolved_num } odhalenia vašich údajov. Prevedieme vás krokmi, pomocou ktorých vykonáte nápravu.
        [many] Našli sme { $data_breach_unresolved_num } odhalení vašich údajov. Prevedieme vás krokmi, pomocou ktorých vykonáte nápravu.
       *[other] Našli sme { $data_breach_unresolved_num } odhalení vašich údajov. Prevedieme vás krokmi, pomocou ktorých vykonáte nápravu.
    }
dashboard-top-banner-no-exposures-found-title = Neboli nájdené žiadne odhalenia
dashboard-top-banner-non-us-no-exposures-found-description = Skvelá správa! Prehľadali sme všetky známe úniky údajov a nenašli sme žiadne odhalenia. Naďalej budeme sledovať vašu e‑mailovú adresu a upozorníme vás, ak dôjde k novému úniku.
dashboard-no-exposures-label = Neboli nájdené žiadne odhalenia
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Skvelá práca, odhalenie vašich údajov je vyriešené! Budeme pokračovať v monitorovaní a upozorníme vás na akékoľvek nové odhalenia.
        [few] Skvelá práca, všetky odhalenia vašich údajov (celkom { $exposures_resolved_num }) sú vyriešené! Budeme pokračovať v monitorovaní a upozorníme vás na akékoľvek nové odhalenia.
        [many] Skvelá práca, všetkých { $exposures_resolved_num } odhalení vašich údajov je vyriešených! Budeme pokračovať v monitorovaní a upozorníme vás na akékoľvek nové odhalenia.
       *[other] Skvelá práca, všetkých { $exposures_resolved_num } odhalení vašich údajov je vyriešených! Budeme pokračovať v monitorovaní a upozorníme vás na akékoľvek nové odhalenia.
    }
dashboard-top-banner-monitor-more-cta = Monitorovať ďalšie e‑maily

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Hľadáme odhalenia pri všetkých známych únikov údajov.
    Vaše odhalenia budú mať jeden z nasledujúcich stavov:
modal-exposure-indicator-title = Stavy pre odhalenia
modal-exposure-indicator-action-needed = Na dokončenie akcie potrebujete pokročilú alebo manuálnu akciu.
modal-exposure-indicator-fixed = Odhalenie bolo vyriešené a nemusíte podniknúť žiadne kroky.
