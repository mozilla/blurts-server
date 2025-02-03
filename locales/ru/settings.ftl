# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Настройки { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Настройки эл. почты
settings-alert-email-preferences-subtitle = Расскажите нам, какие письма вы хотите получать.
settings-alert-preferences-allow-breach-alerts-title = Мгновенные оповещения об утечках
settings-alert-preferences-allow-breach-alerts-subtitle = Эти оповещения отправляются сразу же после обнаружения утечки данных
settings-alert-preferences-option-one = Отправлять оповещения об утечках на затронутые ими адреса электронной почты
settings-alert-preferences-option-two = Отправлять все оповещения об утечках на основной адрес электронной почты

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Отслеживаемые адреса электронной почты
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ваш аккаунт включает мониторинг до { $limit } адреса электронной почты.
        [few] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
        [many] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
       *[other] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
    }
settings-email-verification-callout = Требуется верификация электронной почты
settings-resend-email-verification-link = Отправить письмо подтверждения заново
settings-add-email-button = Добавить адрес электронной почты
settings-remove-email-button-label = Удалить
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Перестать отслеживать { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Найден в { $breachCount } известной утечке.
        [few] Найден в { $breachCount } известных утечках.
        [many] Найден в { $breachCount } известных утечках.
       *[other] Найден в { $breachCount } известных утечках.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Удалить аккаунт { -brand-monitor }
settings-delete-monitor-free-account-description = Это навсегда удалит ваш аккаунт { -brand-monitor } и отключит все уведомления.
settings-delete-monitor-free-account-cta-label = Удалить аккаунт
settings-delete-monitor-free-account-dialog-title = Ваш аккаунт { -brand-monitor } будет удалён навсегда
settings-delete-monitor-free-account-dialog-lead-v2 = Вся информация вашего аккаунта { -brand-monitor } будет удалена, и мы больше не будем отслеживать новые утечки данных. Это действие не удалит ваш { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Удалить аккаунт
settings-delete-monitor-free-account-dialog-cancel-button-label = Не важно, верните меня обратно
settings-delete-monitor-account-confirmation-toast-label-2 = Ваш аккаунт { -brand-monitor } удалён.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Закрыть

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Ежемесячный отчёт { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Ежемесячное обновление новых утечек, исправленных утечек, а также требующих вашего внимания.

## Settings page redesign

settings-tab-label-edit-info = Изменить ваши данные
settings-tab-label-notifications = Настроить уведомления
settings-tab-label-manage-account = Управление аккаунтом
settings-tab-subtitle-manage-account = Управляйте своим аккаунтом { -product-name }.
settings-tab-notifications-marketing-title = Маркетинговые коммуникации
settings-tab-notifications-marketing-text = Периодические обновления о { -brand-monitor }, { -brand-mozilla } и других наших продуктах для обеспечения безопасности.
settings-tab-notifications-marketing-link-label = Перейти в настройки электронной почты { -brand-mozilla }.
