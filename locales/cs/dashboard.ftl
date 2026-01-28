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
        [one] <nr>{ $nr }</nr> <label>odhalení</label>
        [few] <nr>{ $nr }</nr> <label>odhalení</label>
       *[other] <nr>{ $nr }</nr> <label>odhalení</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Opraveno</label>
exposure-chart-legend-heading-type = Odhalení
exposure-chart-legend-heading-nr = Počet
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Tento graf ukazuje, kolikrát jsou vaše informace aktivně odhalené.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Tento graf ukazuje celkový počet fixovaných expozic ({ $total_fixed_exposures_num } z { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresa domů, členové rodiny a další zatím nejsou zahrnuté.
exposure-chart-returning-user-upgrade-prompt-cta = Spustit bezplatné skenování
exposure-chart-scan-in-progress-prompt = <b>Probíhá skenování:</b> adresa, rodinní příslušníci a další údaje zatím nejsou zahrnuty.
modal-active-number-of-exposures-title = O počtu aktivních odhalení
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Tento graf obsahuje celkový počet odhalení pro každý typ údajů v rámci všech úniků údajů až pro { $limit } e-mailové adresy, které momentálně monitorujete.
        [few] Tento graf obsahuje celkový počet odhalení pro každý typ údajů v rámci všech úniků údajů až pro { $limit } e-mailových adres, které momentálně monitorujete.
       *[other] Tento graf obsahuje celkový počet odhalení pro každý typ údajů v rámci všech úniků údajů až pro { $limit } e-mailových adres, které momentálně monitorujete.
    }
modal-active-number-of-exposures-part-two = Například, pokud máte 10 odhalení svého telefonního čísla, může to znamenat, že jedno telefonní číslo je zveřejněné na 10 různých stránkách nebo to může znamenat, že na 5 různých stránkách došlo k odhalení 2 různých telefonních čísel.
modal-active-number-of-exposures-part-three-all = Když budou vyřešeny, budou přidány k vašemu celkovému počtu vyřešených odhalení na podstránce Vyřešené.
modal-fixed-number-of-exposures-title = O počtu vyřešených odhalení
modal-fixed-number-of-exposures-all = Tento graf obsahuje celkový počet úniků údajů, které byly vyřešeny pro všechny e-mailové adresy, které aktuálně sledujete. Jakmile jsou odhalení označeny jako vyřešené, připočítají se zde k celkovému součtu.
modal-cta-ok = OK
modal-cta-got-it = Rozumím
open-modal-alt = Otevřít dialogové okno
close-modal-alt = Zavřít dialogové okno
progress-card-heres-what-we-fixed-headline-all = Tady je, co jste opravili
progress-card-manually-fixed-headline = Ručně opraveno
dashboard-tab-label-action-needed = Vyžadována akce
dashboard-tab-label-fixed = Opraveno
dashboard-exposures-all-fixed-label = Vše opraveno!
dashboard-exposures-area-headline = Podívejte se na všechny stránky, na kterých jsou zveřejněny vaše údaje
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Našli jsme { $exposures_unresolved_num } odhalení vašich údajů.
        [few] Našli jsme { $exposures_unresolved_num } odhalení vašich údajů.
       *[other] Našli jsme { $exposures_unresolved_num } odhalení vašich údajů.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Bylo součástí { $data_breach_unresolved_num } úniků údajů.
        [few] Bylo součástí { $data_breach_unresolved_num } úniků údajů.
       *[other] Bylo součástí { $data_breach_unresolved_num } úniků údajů.
    }
dashboard-fixed-area-headline-all = Podívejte se na všechna odhalení, která jsou vyřešena
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrovat
dashboard-exposures-filter-company = Společnost
dashboard-exposures-filter-date-found = Datum nalezení
dashboard-exposures-filter-date-found-last-seven-days = Posledních 7 dní
dashboard-exposures-filter-date-found-last-thirty-days = Posledních 30 dní
dashboard-exposures-filter-date-found-last-year = Poslední rok
dashboard-exposures-filter-status = Stav
popover-open-filter-settings-alt = Zvolte filtry
dashboard-exposures-filter-show-all = Zobrazit vše
dashboard-exposures-filter-show-results = Zobrazit výsledky
dashboard-exposures-filter-reset = Obnovit

## Top banner on the dashboard

dashboard-top-banner-section-label = Shrnutí na nástěnce
dashboard-top-banner-your-data-is-protected-title = Vaše data jsou chráněna
dashboard-top-banner-your-data-is-protected-cta = Podívejte se, co je vyřešené
dashboard-top-banner-protect-your-data-title = Pojďme chránit vaše údaje
dashboard-top-banner-protect-your-data-cta = Pojďme to napravit
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
        [few] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
       *[other] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Objevilo se v { $data_breach_unresolved_num } odhalení vašich údajů. Ukážeme vám, jak to krok za krokem vyřešit.
        [few] Objevilo se v { $data_breach_unresolved_num } odhalení vašich údajů. Ukážeme vám, jak to krok za krokem vyřešit.
       *[other] Objevilo se v { $data_breach_unresolved_num } odhalení vašich údajů. Ukážeme vám, jak to krok za krokem vyřešit.
    }
dashboard-top-banner-no-exposures-found-title = Nebyla nalezena žádná odhalení
dashboard-top-banner-non-us-no-exposures-found-description = Skvělá zpráva! Prohledali jsme všechny známé úniky údajů a nenašli jsme žádné odhalení. Vaši e-mailovou adresu budeme průběžně monitorovat a pokud dojde k novému úniku, dáme vám vědět.
dashboard-no-exposures-label = Nebylo nalezeno žádné odhalení
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Skvělá práce, odhalení vašich údajů je vyřešeno! Budeme pokračovat v monitorování a upozorníme vás, když dojde k novému odhalení.
        [few] Skvělá práce, { $exposures_resolved_num } odhalení vašich údajů je nyní vyřešeno! Budeme pokračovat v monitorování a upozorníme vás, když dojde k novému odhalení.
       *[other] Skvělá práce, { $exposures_resolved_num } odhalení vašich údajů je nyní vyřešeno! Budeme pokračovat v monitorování a upozorníme vás, když dojde k novému odhalení.
    }
dashboard-top-banner-monitor-more-cta = Monitorovat více e-mailů

# About Exposure Indicators Modal

modal-exposure-status-description-all = Hledáme úniky údajů ve všech známých únicích. Vaše odhalení bude mít jeden z následujících stavů:
modal-exposure-indicator-title = Stavy odhalení
modal-exposure-indicator-action-needed = K dokončení akce je nutná pokročilá nebo ruční akce.
modal-exposure-indicator-fixed = Odhalení bylo vyřešeno a vy už nemusíte podnikat žádné kroky.
