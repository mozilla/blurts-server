# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Новые
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Все
# To go back to the list of announcements
announcement-dialog-back = Назад
announcement-dialog-clear-all = Отметить все как прочитанные
announcement-dialog-empty-state-title = Нет обновлений
announcement-dialog-empty-state-description = Регулярно проверяйте наличие обновлений и информации о наших последних возможностях.
announcement-dialog-trigger-alt = Открыть объявления
announcement-dialog-alt = Список объявлений
announcement-small-img-alt = Значок объявления
announcement-big-img-alt = Изображение объявления

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Получите бесплатный мониторинг утечек данных для { $emailAddressesCount } адреса электронной почты.
        [few] Получите бесплатный мониторинг утечек данных для { $emailAddressesCount } адресов электронной почты.
       *[many] Получите бесплатный мониторинг утечек данных для { $emailAddressesCount } адресов электронной почты.
    }
announcement-free-data-breach-monitoring-description = Помогите обеспечить безопасность ваших данных с помощью отслеживания утечек данных. { -brand-monitor } предупредит вас, если ваша информация будет затронута утечками данных.
announcement-free-data-breach-monitoring-cta-label = Подробнее
