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

settings-email-verification-callout = Требуется верификация электронной почты
settings-email-addresses-header = Адреса электронной почты
settings-email-addresses-description = { -brand-monitor } предупредит вас, если эти письма будут обнаружены в известных утечках.
settings-email-addresses-add-email-button = Добавить адрес электронной почты
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Добавить до { $limit }
settings-email-addresses-add-email-resend-button-label = Отправить ссылку для подтверждения ещё раз
input-error-alt = Ошибка

## Email address dialog

settings-email-addresses-initial-dialog-header = Добавить адрес электронной почты
settings-email-addresses-initial-dialog-description = Мы отправим вам ссылку для подтверждения, чтобы подтвердить, что вы хотите включить её в будущее сканирование { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Введите адрес электронной почты
settings-email-addresses-initial-dialog-add-email-button-label = Отправить ссылку для подтверждения
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Ссылка для подтверждения отправлена на <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Перейдите по ссылке, чтобы добавить её в этот аккаунт для будущих сканирований { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Закрыть

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Обновить информацию о сканировании
settings-tab-label-edit-info = Изменить ваши данные
settings-tab-label-notifications = Настроить уведомления
settings-tab-label-manage-account = Управление аккаунтом
settings-tab-subtitle-manage-account = Управляйте своим аккаунтом { -product-name }.
settings-tab-notifications-marketing-title = Маркетинговые коммуникации
settings-tab-notifications-marketing-text = Периодические обновления о { -brand-monitor }, { -brand-mozilla } и других наших продуктах для обеспечения безопасности.
settings-tab-notifications-marketing-link-label = Перейти в настройки электронной почты { -brand-mozilla }.
