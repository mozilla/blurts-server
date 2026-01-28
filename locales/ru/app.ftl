# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP =
    { $case ->
        [nominative] Сервис Have I Been Pwned
        [genitive] Сервисом Have I Been Pwned
       *[dative] Сервису Have I Been Pwned
    }
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Этот адрес электронной почты не подписан на { -product-name }.
user-add-invalid-email = Некорректный адрес электронной почты
user-add-too-many-emails = Вы отслеживаете максимальное количество адресов электронной почты.
user-add-duplicate-email = Этот адрес электронной почты уже был добавлен в { -product-name }.
user-add-verification-email-just-sent = Невозможно так быстро отправить ещё одно письмо для подтверждения. Подождите некоторое время и попробуйте снова.
user-add-unknown-error = Что-то пошло не так при добавлении ещё одного адреса электронной почты. Подождите некоторое время и попробуйте снова.
user-delete-unknown-error = Что-то пошло не так при удалении адреса электронной почты. Подождите некоторое время и попробуйте снова.
user-verify-token-error = Требуется токен подтверждения.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометированные данные:
# Link title
more-about-this-breach = Больше об этой утечке
what-data = Какие данные скомпрометированы:
delayed-reporting-headline = Почему об утечке было сообщено так поздно?
delayed-reporting-copy = Иногда информация об утёкших пользовательских данных попадает в даркнет лишь спустя месяцы и даже годы. Утечки добавляются в нашу базу данных по мере их обнаружения и проверки.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Обзор
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } произошла утечка данных { $breachTitle }. Как только утечка была обнаружена и подтверждена, она была добавлена в нашу базу данных { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Утечка добавлена:
# Section headline
rec-section-headline = Что сделать для устранения последствий этой утечки
rec-section-subhead = Мы рекомендуем вам предпринять следующие шаги, чтобы сохранить вашу личную информацию в безопасности и защитить вашу цифровую идентичность.
# Section headline
rec-section-headline-no-pw = Что нужно сделать для защиты вашей личной информации
rec-section-subhead-no-pw = Хотя пароли не были затронуты этой утечкой данных, всё же можно принять меры для лучшей защиты вашей личной информации.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Аккаунт Mozilla
open-in-new-tab-alt = Открыть ссылку в новой вкладке

## Search Engine Optimization

meta-desc-2 = Узнайте, были ли вы затронуты утечкой, с помощью { -brand-fx-monitor }. Мы поможем вам понять, что делать дальше, и постоянно отслеживать любые новые утечки.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Войти
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Основное меню
main-nav-button-collapse-label = Свернуть меню
main-nav-button-collapse-tooltip = Свернуть меню
main-nav-button-expand-label = Развернуть меню
main-nav-button-expand-tooltip = Развернуть меню
main-nav-label = Навигация
main-nav-link-home-label = Домой
main-nav-link-dashboard-label = Панель управления
main-nav-link-settings-label = Настройки
main-nav-link-faq-label = ЧЗВ
main-nav-link-faq-tooltip = Часто задаваемые вопросы

## User menu

user-menu-trigger-label = Открыть пользовательское меню
user-menu-trigger-tooltip = Профиль
user-menu-manage-fxa-label = Управляйте своим { -brand-mozilla-account }
user-menu-settings-label = Настройки
user-menu-settings-tooltip = Настройка { -brand-mozilla-monitor }
user-menu-help-label = Справка и поддержка
user-menu-help-tooltip = Получите помощь по использованию { -brand-mozilla-monitor }
user-menu-signout-label = Выйти
user-menu-signout-tooltip = Выйти из { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Условия использования
privacy-notice = Уведомление о конфиденциальности
github = { -brand-github }
footer-nav-recent-breaches = Недавние утечки данных
footer-external-link-faq-label = ЧЗВ
footer-external-link-faq-tooltip = Часто задаваемые вопросы

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Страница не найдена
error-page-error-404-copy = К сожалению, страница, которую вы ищете, больше не существует.
error-page-error-404-cta-button = Вернуться назад

## Breach overview page

all-breaches-headline-3 = База данных утечек данных
all-breaches-lead = Мы отслеживаем все известные утечки данных, чтобы выяснить, была ли скомпрометирована ваша персональная информация. Вот полный список всех утечек, о которых сообщалось с 2007 года.
search-breaches = Поиск утечек
# the kind of user data exposed to hackers in data breach.
exposed-data = Раскрытые данные:

## Public breach detail page

find-out-if-2 = Узнайте, были ли вы затронуты этой утечкой
find-out-if-description = Мы поможем вам быстро узнать, был ли ваш адрес электронной почты раскрыт в результате этой утечки, и понять, что делать дальше.
breach-detail-cta-signup = Проверить на утечки
loading-accessibility = Загрузка
