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
        [one] <nr>{ $nr }</nr> <label>утечка</label>
        [few] <nr>{ $nr }</nr> <label>утечки</label>
       *[many] <nr>{ $nr }</nr> <label>утечек</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Исправлено</label>
exposure-chart-legend-heading-type = Утечка
exposure-chart-legend-heading-nr = Количество
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Эта диаграмма показывает, сколько раз активно раскрыта ваша информация.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Эта диаграмма показывает общее число устранённых утечек ({ $total_fixed_exposures_num } из { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Домашний адрес, члены семьи и многое другое пока не включены.
exposure-chart-returning-user-upgrade-prompt-cta = Начать бесплатное сканирование
exposure-chart-scan-in-progress-prompt = <b>Идёт сканирование:</b> адрес, члены семьи и многое другое пока не включены.
modal-active-number-of-exposures-title = О вашем количестве активных утечек
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Эта диаграмма включает в себя общее число раз, когда мы нашли каждый тип данных, раскрытых во всех утечках данных, для { $limit } адреса электронной почты, который вы сейчас отслеживаете.
        [few] Эта диаграмма показывает общее число раз, когда мы нашли каждый тип раскрытых данных во всех утечках данных до { $limit } адресов электронной почты, которые вы сейчас отслеживаете.
       *[many] Эта диаграмма показывает общее число раз, когда мы нашли каждый тип раскрытых данных во всех утечках данных до { $limit } адресов электронной почты, которые вы сейчас отслеживаете.
    }
modal-active-number-of-exposures-part-two = Например, если у вас есть 10 утечек вашего номера телефона, это может значить, что один номер телефона утёк на 10 различных сайтах, или это может значить, что 2 разных номера телефона утекли на 5 разных сайтах.
modal-active-number-of-exposures-part-three-all = Как только они будут решены, они будут добавлены к вашему общему числу зафиксированных утечек на странице Исправленные.
modal-fixed-number-of-exposures-title = О вашем количестве исправленных утечек
modal-fixed-number-of-exposures-all = Эта диаграмма показывает общее число утечек данных, которые были исправлены для всех адресов электронной почты, которые вы сейчас отслеживаете. Как только утечки будут отмечены как исправленные, они будут добавлены к общему количеству здесь.
modal-cta-ok = OK
modal-cta-got-it = Понятно
open-modal-alt = Открыть окно
close-modal-alt = Закрыть окно
progress-card-heres-what-we-fixed-headline-all = Вот что вы исправили
progress-card-manually-fixed-headline = Исправлено вручную
dashboard-tab-label-action-needed = Требуется действие
dashboard-tab-label-fixed = Исправлено
dashboard-exposures-all-fixed-label = Здесь всё исправлено!
dashboard-exposures-area-headline = Посмотреть все сайты, с которых утекла ваша информация
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Мы обнаружили { $exposures_unresolved_num } утечку ваших данных.
        [few] Мы обнаружили { $exposures_unresolved_num } утечки ваших данных.
       *[many] Мы обнаружили { $exposures_unresolved_num } утечек ваших данных.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Обнаружено в { $data_breach_unresolved_num } утечке данных.
        [few] Обнаружено в { $data_breach_unresolved_num } утечках данных.
       *[many] Обнаружено в { $data_breach_unresolved_num } утечках данных.
    }
dashboard-fixed-area-headline-all = Просмотреть все исправленные утечки
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Фильтр
dashboard-exposures-filter-company = Компания
dashboard-exposures-filter-date-found = Дата обнаружения
dashboard-exposures-filter-date-found-last-seven-days = Последние 7 дней
dashboard-exposures-filter-date-found-last-thirty-days = Последние 30 дней
dashboard-exposures-filter-date-found-last-year = Прошлый год
dashboard-exposures-filter-status = Статус
popover-open-filter-settings-alt = Выбрать фильтры
dashboard-exposures-filter-show-all = Показать все
dashboard-exposures-filter-show-results = Показать результаты
dashboard-exposures-filter-reset = Сбросить

## Top banner on the dashboard

dashboard-top-banner-section-label = Сводка панели управления
dashboard-top-banner-your-data-is-protected-title = Ваши данные защищены
dashboard-top-banner-your-data-is-protected-cta = Посмотрите, что исправлено
dashboard-top-banner-protect-your-data-title = Давайте защитим ваши данные
dashboard-top-banner-protect-your-data-cta = Давайте это исправим
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Мы обнаружили { $exposures_unresolved_num } утечку ваших данных.
        [few] Мы обнаружили { $exposures_unresolved_num } утечки ваших данных.
       *[many] Мы обнаружили { $exposures_unresolved_num } утечек ваших данных.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Обнаружено в { $data_breach_unresolved_num } утечке данных. Мы пошагово поможем вам это исправить.
        [few] Обнаружено в { $data_breach_unresolved_num } утечках данных. Мы пошагово поможем вам это исправить.
       *[many] Обнаружено в { $data_breach_unresolved_num } утечках данных. Мы пошагово поможем вам это исправить.
    }
dashboard-top-banner-no-exposures-found-title = Утечек не найдено
dashboard-top-banner-non-us-no-exposures-found-description = Отличные новости! Мы проверили все известные утечки данных и не обнаружили ни одного раскрытия ваших данных. Мы продолжим отслеживать вашу электронную почту и сообщим вам, если возникнет новая утечка.
dashboard-no-exposures-label = Утечек не найдено
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Отличная работа, раскрытие ваших данных исправлено! Мы продолжим отслеживать и предупредим вас о любых новых утечках.
        [few] Отличная работа, все { $exposures_resolved_num } утечки ваших данных устранены! Мы продолжим отслеживать и предупредим вас о любых новых утечках.
       *[many] Отличная работа, все { $exposures_resolved_num } утечек ваших данных устранены! Мы продолжим отслеживать и предупредим вас о любых новых утечках.
    }
dashboard-top-banner-monitor-more-cta = Отслеживайте больше адресов электронной почты

# About Exposure Indicators Modal

modal-exposure-status-description-all = Мы ищем раскрытие данных во всех известных утечках данных. Ваши утечки будут иметь один из следующих статусов:
modal-exposure-indicator-title = Статусы утечек
modal-exposure-indicator-action-needed = Для завершения действия от вас необходимы дополнительные или ручные действия.
modal-exposure-indicator-fixed = Утечка была решена и от вас не требуется дополнительных действий.
