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
        [one] Tento graf obsahuje celkový počet nalezených odhalených dat v rámci všech úniků dat z e-mailové adresy { $limit }, kterou aktuálně monitorujete.
        [few] Tento graf obsahuje celkový počet nalezených dat každého typu ve všech únicích dat až pro { $limit } e-mailových adres, které aktuálně monitorujete.
       *[other] Tento graf obsahuje celkový počet nalezených dat každého typu ve všech únicích dat až pro { $limit } e-mailových adres, které aktuálně monitorujete.
    }
modal-active-number-of-exposures-part-two = Pokud máte například 10 zpřístupnění svého telefonního čísla, může to znamenat, že jedno telefonní číslo je zpřístupněno na 10 různých stránkách, nebo naopak 2 různá telefonní čísla na 5 různých serverech.
modal-active-number-of-exposures-part-three-all = Jakmile budou vyřešeny, budou přidány k vašemu celkovému počtu pevných expozic na stránce Pevná.
modal-fixed-number-of-exposures-title = O vašem počtu stálých expozic
modal-fixed-number-of-exposures-all = Tento graf obsahuje celkový počet úniků dat, které byly opraveny pro všechny e-mailové adresy, které aktuálně sledujete. Jakmile jsou expozice označeny jako pevné, budou zde přičteny k celkovému součtu.
modal-cta-ok = OK
modal-open-alt = Otevřít
modal-close-alt = Zavřít
progress-card-heres-what-we-fixed-headline-all = Tady je, co jste opravili
progress-card-manually-fixed-headline = Ručně opraveno
dashboard-tab-label-action-needed = Vyžadována akce
dashboard-tab-label-fixed = Opraveno
dashboard-exposures-all-fixed-label = Vše opraveno!
dashboard-exposures-area-headline = Zobrazit všechny stránky, kde jsou vaše informace zveřejněny
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
        [few] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
       *[other] Zjistili jsme { $exposures_unresolved_num } odhalení vašich dat.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Bylo to součástí { $data_breach_unresolved_num } úniků dat.
        [few] Objevila se v { $data_breach_unresolved_num } únikech dat.
       *[other] Objevila se v { $data_breach_unresolved_num } únikech dat.
    }
dashboard-fixed-area-headline-all = Zobrazí všechny pevně dané expozice
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrovat
dashboard-exposures-filter-company = Společnost
dashboard-exposures-filter-date-found = Datum nalezení
dashboard-exposures-filter-date-found-last-seven-days = Posledních 7 dní
dashboard-exposures-filter-date-found-last-thirty-days = Posledních 30 dní
dashboard-exposures-filter-date-found-last-year = Poslední rok
dashboard-exposures-filter-status = Stav
dashboard-exposures-filter-status-action-needed = Vyžadována akce
dashboard-exposures-filter-status-in-progress = Probíhá
dashboard-exposures-filter-status-fixed = Vyřešeno
popover-open-filter-settings-alt = Zvolte filtry
dashboard-exposures-filter-show-all = Zobrazit vše
dashboard-exposures-filter-show-results = Zobrazit výsledky
dashboard-exposures-filter-reset = Obnovit

## Top banner on the dashboard

dashboard-top-banner-section-label = Shrnutí na nástěnce
dashboard-top-banner-scan-in-progress-title = Skenování stále probíhá
dashboard-top-banner-your-data-is-protected-title = Vaše data jsou chráněna
dashboard-top-banner-your-data-is-protected-cta = Podívejte se, co je vyřešené
dashboard-top-banner-lets-keep-protecting-title = Pojďme chránit vaše data
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Stále vám zbývá opravit { $exposures_unresolved_num } odhalení. Pokračujte a chraňte se. Provedeme vás krok za krokem.
        [few] Stále vám zbývá opravit { $exposures_unresolved_num } úniků. Pokračujte a chraňte se. Provedeme vás krok za krokem.
       *[other] Stále vám zbývá opravit { $exposures_unresolved_num } úniků. Pokračujte a chraňte se. Provedeme vás krok za krokem.
    }
dashboard-top-banner-lets-keep-protecting-cta = Pojďme dál
dashboard-top-banner-protect-your-data-title = Chraňme vaše data
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
        [one] Bylo to součástí { $data_breach_unresolved_num } úniků dat. Ukážeme vám, jak to krok za krokem vyřešit.
        [few] Objevila se v { $data_breach_unresolved_num } únikech dat. Ukážeme vám, jak to krok za krokem vyřešit.
       *[other] Objevila se v { $data_breach_unresolved_num } únikech dat. Ukážeme vám, jak to krok za krokem vyřešit.
    }
dashboard-top-banner-no-exposures-found-title = Nebyla nalezena žádná odhalení
dashboard-top-banner-non-us-no-exposures-found-description = Skvělá zpráva! Prohledali jsme všechny známé úniky dat a nenašli jsme žádný kontakt. Vaši e-mailovou adresu budeme průběžně monitorovat a pokud dojde k novému úniku, dáme vám vědět.
dashboard-no-exposures-label = Nebyly nalezeny žádné kontakty
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Skvělá práce, zpřístupnění vašich dat je opravené! Budeme pokračovat v monitorování a na případné nové úniky vás budeme upozorňovat.
        [few] Skvělá práce, všech { $exposures_resolved_num } úniků vašich dat je opravených! Budeme pokračovat v monitorování a na případné nové úniky vás budeme upozorňovat.
       *[other] Skvělá práce, všech { $exposures_resolved_num } úniků vašich dat je opravených! Budeme pokračovat v monitorování a na případné nové úniky vás budeme upozorňovat.
    }
dashboard-top-banner-monitor-more-cta = Monitorovat více e-mailů

# About Exposure Statuses Modal

modal-exposure-status-title = O stavech odhalení
modal-exposure-status-description-all = Hledáme úniky dat ve všech známých únicích dat. Váš kontakt bude mít jeden z následujících stavů:
modal-exposure-status-action-needed = <b>Vyžadována akce</b> znamená, že odhalení je momentálně aktivní a musíte podniknout kroky k jeho vyřešení
modal-exposure-status-fixed = <b>Vyřešené</b> znamená, že odhalení bylo vyřešeno a nemusíte podnikat žádné další kroky.
