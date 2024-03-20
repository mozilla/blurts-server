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

## Top banner on the dashboard


# About Exposure Statuses Modal

