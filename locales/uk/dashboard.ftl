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
exposure-chart-caption-fixed = На цій діаграмі показано загальну кількість усунутих розкриттів ({ $total_fixed_exposures_num } з { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Домашня адреса, члени сім’ї та інше ще не включено.
exposure-chart-returning-user-upgrade-prompt-cta = Розпочати безплатну перевірку
exposure-chart-scan-in-progress-prompt = <b>Триває перевірка:</b> адреса, члени родини тощо ще не включено.
modal-active-number-of-exposures-title = Кількість розкриттів
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ця діаграма показує загальну кількість виявлень кожного типу викритих даних серед усіх витоків для { $limit } адреси електронної пошти, яку ви наразі відстежуєте.
        [few] Ця діаграма показує загальну кількість виявлень кожного типу викритих даних серед усіх витоків для щонайбільше { $limit } адрес електронної пошти, які ви наразі відстежуєте.
       *[many] Ця діаграма показує загальну кількість виявлень кожного типу викритих даних серед усіх витоків для щонайбільше { $limit } адрес електронної пошти, які ви наразі відстежуєте.
    }
modal-active-number-of-exposures-part-two = Наприклад, якщо ваш номер телефону було викрито 10 разів, це може означати, що один номер телефону викрито на 10 різних сайтах, або 2 різні номери телефону викрито на 5 різних сайтах.
modal-active-number-of-exposures-part-three-all = Щойно їх буде розв'язано, вони будуть додані до вашої загальної кількості усунутих витоків на сторінці "Усунуто".
modal-fixed-number-of-exposures-title = Кількість усунутих розкриттів
modal-fixed-number-of-exposures-all = Ця діаграма містить загальну кількість витоків даних, які було усунуто для всіх електронних адрес, які ви наразі відстежуєте. Коли викриття буде позначено усунутим, його буде додано до загальної кількості тут.
modal-cta-ok = OK
modal-cta-got-it = Зрозуміло
open-modal-alt = Відкрити вікно
close-modal-alt = Закрити вікно
progress-card-heres-what-we-fixed-headline-all = Усунуті розкриття
progress-card-manually-fixed-headline = Виправлено вручну
dashboard-tab-label-action-needed = Потрібна дія
dashboard-tab-label-fixed = Усунуто
dashboard-exposures-all-fixed-label = Тут все виправлено!
dashboard-exposures-area-headline = Перегляньте всі сайти, на яких розкрито вашу інформацію
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Ми виявили { $exposures_unresolved_num } розкриття ваших даних.
        [few] Ми виявили { $exposures_unresolved_num } розкриття ваших даних.
       *[many] Ми виявили { $exposures_unresolved_num } розкриттів ваших даних.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Виявлено в { $data_breach_unresolved_num } витоці даних.
        [few] Виявлено в { $data_breach_unresolved_num } витоках даних.
       *[many] Виявлено в { $data_breach_unresolved_num } витоках даних.
    }
dashboard-fixed-area-headline-all = Переглянути всі усунуті розкриття
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Фільтр
dashboard-exposures-filter-company = Компанія
dashboard-exposures-filter-date-found = Дата виявлення
dashboard-exposures-filter-date-found-last-seven-days = Останні 7 днів
dashboard-exposures-filter-date-found-last-thirty-days = Останні 30 днів
dashboard-exposures-filter-date-found-last-year = Минулого року
dashboard-exposures-filter-status = Стан
popover-open-filter-settings-alt = Вибрати фільтри
dashboard-exposures-filter-show-all = Показати все
dashboard-exposures-filter-show-results = Показати результати
dashboard-exposures-filter-reset = Скинути

## Top banner on the dashboard

dashboard-top-banner-section-label = Панель підсумку
dashboard-top-banner-your-data-is-protected-title = Ваші дані захищені
dashboard-top-banner-your-data-is-protected-cta = Перегляньте, що усунуто
dashboard-top-banner-protect-your-data-title = Захистімо ваші дані
dashboard-top-banner-protect-your-data-cta = Усуньмо це
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Ми виявили { $exposures_unresolved_num } розкриття ваших даних.
        [few] Ми виявили { $exposures_unresolved_num } розкриття ваших даних.
       *[many] Ми виявили { $exposures_unresolved_num } розкриттів ваших даних.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Виявлено в { $data_breach_unresolved_num } витоці даних. Ми крок за кроком розповімо вам, як це виправити.
        [few] Виявлено в { $data_breach_unresolved_num } витоках даних. Ми крок за кроком розповімо вам, як це виправити.
       *[many] Виявлено в { $data_breach_unresolved_num } витоках даних. Ми крок за кроком розповімо вам, як це виправити.
    }
dashboard-top-banner-no-exposures-found-title = Розкриттів не знайдено
dashboard-top-banner-non-us-no-exposures-found-description = Чудові новини! Ми перевірили всі відомі витоки даних і не виявили жодного розкриття. Ми продовжуватимемо моніторинг вашої адреси електронної пошти та повідомимо вас, якщо станеться новий витік.
dashboard-no-exposures-label = Розкриттів не знайдено
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Чудова робота, розкриття ваших даних усунуто! Ми продовжуватимемо моніторинг і повідомлятимемо вас про усі нові випадки розкриття.
        [few] Чудова робота, усі { $exposures_resolved_num } розкриття ваших даних усунуто! Ми продовжуватимемо моніторинг і повідомлятимемо вас про усі нові випадки розкриття.
       *[many] Чудова робота, усі { $exposures_resolved_num } розкриттів ваших даних усунуто! Ми продовжуватимемо моніторинг і повідомлятимемо вас про усі нові випадки розкриття.
    }
dashboard-top-banner-monitor-more-cta = Відстежуйте більше електронних адрес

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Ми шукаємо розкриття в усіх відомих витоках даних.
    Ваші розкриття матимуть один із цих станів:
modal-exposure-indicator-title = Стани витоків
modal-exposure-indicator-action-needed = Вам потрібно виконати розширені або ручні дії, щоб завершити.
modal-exposure-indicator-fixed = Витоки було усунено, і не потрібно виконувати жодних дій.
