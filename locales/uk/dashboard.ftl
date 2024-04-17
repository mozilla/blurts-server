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
        [one] <nr>{ $nr }</nr> <label>розкриття</label>
        [few] <nr>{ $nr }</nr> <label>розкриття</label>
        [many] <nr>{ $nr }</nr> <label>розкриттів</label>
       *[other] <nr>{ $nr }</nr> <label>розкриттів</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>усунуто</label>
exposure-chart-legend-heading-type = Розкриття
exposure-chart-legend-heading-nr = Кількість
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = На цій діаграмі показано, скільки разів ваша інформація була розкрита.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = На цій діаграмі показано загальну кількість зафіксованих розкриттів ({ $total_fixed_exposures_num } з { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Домашня адреса, члени сім’ї та інше ще не включено.
exposure-chart-returning-user-upgrade-prompt-cta = Розпочати безплатну перевірку
exposure-chart-scan-in-progress-prompt = <b>Триває перевірка:</b> адреса, члени родини тощо ще не включено.
modal-active-number-of-exposures-title = Про кількість розкриттів
modal-active-number-of-exposures-part-two = Наприклад, якщо ваш номер телефону було викрито 10 разів, це може означати, що один номер телефону викрито на 10 різних сайтах, або 2 різні номери телефону викрито на 5 різних сайтах.
dashboard-exposures-all-fixed-label = Тут все виправлено!
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Фільтр
dashboard-exposures-filter-company = Компанія
dashboard-exposures-filter-date-found = Дата виявлення
dashboard-exposures-filter-date-found-last-seven-days = Останні 7 днів
dashboard-exposures-filter-date-found-last-thirty-days = Останні 30 днів
dashboard-exposures-filter-date-found-last-year = Минулого року
dashboard-exposures-filter-status = Стан

## Top banner on the dashboard


# About Exposure Statuses Modal

