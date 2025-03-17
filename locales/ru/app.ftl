# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


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
-brand-fxa =
    { $case ->
       *[nominative] Аккаунт Firefox
        [genitive] Аккаунта Firefox
        [instrumental] Аккаунтом Firefox
    }
-brand-pocket = Pocket
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

##

error-not-subscribed = Этот адрес электронной почты не подписан на { -product-name }.
error-hibp-throttled = Слишком много попыток соединения с { -brand-HIBP(case: "genitive") }.
error-hibp-connect = Ошибка подключения к { -brand-HIBP(case: "dative") }.
user-add-invalid-email = Некорректный адрес электронной почты
user-add-too-many-emails = Вы отслеживаете максимальное количество адресов электронной почты.
user-add-duplicate-email = Этот адрес электронной почты уже был добавлен в { -product-name }.
user-add-verification-email-just-sent = Невозможно так быстро отправить ещё одно письмо для подтверждения. Подождите некоторое время и попробуйте снова.
user-add-unknown-error = Что-то пошло не так при добавлении ещё одного адреса электронной почты. Подождите некоторое время и попробуйте снова.
user-delete-unknown-error = Что-то пошло не так при удалении адреса электронной почты. Подождите некоторое время и попробуйте снова.
user-verify-token-error = Требуется токен подтверждения.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометированные данные:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Данные об утечках предоставлены { $hibp-link }
show-all = Показать все
sign-out = Выйти
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Управление { -brand-fxa(case: "instrumental") }
# Link title
preferences = Настройки
# Link title
home = Домой
# Link title
security-tips = Советы по безопасности
# Link title
more-about-this-breach = Больше об этой утечке
monitor-several-emails = Отслеживайте несколько адресов электронной почты
website-breach = Утечка на сайте
sensitive-breach = Утечка конфиденциальной информации
data-aggregator-breach = Утечка на агрегаторе данных
what-data = Какие данные скомпрометированы:
sensitive-sites = Как { -product-name } обращается с сайтами с конфиденциальной информацией?
sensitive-sites-copy = { -product-name } показывает аккаунты, связанные с утечками такого типа, только после подтверждения владения адресом. Другими словами, только вы можете увидеть, была ли ваша информация частью этой утечки (если только к вашей электронной почте не имеет доступ кто-то ещё).
delayed-reporting-headline = Почему об утечке было сообщено так поздно?
delayed-reporting-copy = Иногда информация об утекших пользовательских данных попадает в даркнет лишь спустя месяцы и даже годы. Утечки добавляются в нашу базу данных по мере их обнаружения и проверки.
fxm-warns-you = { -product-name } предупреждает вас, если ваш адрес электронной почты станет раскрыт при утечке данных. Проверьте, была ли раскрыта ваша информация, узнайте, как улучшить защиту своих аккаунтов, и получайте уведомления, если ваш адрес электронной почты появится в новой утечке.
what-is-data-agg = Что такое агрегатор данных?
what-is-data-agg-blurb =
    Агрегаторы или брокеры данных собирают данные из публичных источников информации, а также покупают их у других компаний. Они собирают эти данные для продажи другим компаниям
    в рекламных целях. Жертвы этих утечек менее подвержены угрозе финансового мошенничества, но хакеры могут использовать эти данные для их профилирования или кражи личности.
avoid-personal-info = Избегайте использования личной информации в паролях
send-verification = Отправить ссылку для подтверждения
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Сводка об утечке

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Раскрытый пароль во всех утечках
        [few] Раскрытых пароля во всех утечках
       *[many] Раскрытых паролей во всех утечках
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Известная утечка данных раскрыла вашу информацию
        [few] Известных утечки данных раскрыли вашу информацию
       *[many] Известных утечек данных раскрыли вашу информацию
    }
what-is-a-website-breach = Что такое утечка данных веб-сайта?
website-breach-blurb = Утечка данных на веб-сайте происходит, когда киберпреступники крадут, копируют или раскрывают личную информацию из его аккаунтов. Обычно это происходит когда хакеры находят уязвимости в безопасности веб-сайта. Утечки также могут произойти, когда информация аккаунта становится раскрыта случайно.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Обзор
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } произошла утечка данных { $breachTitle }. Как только утечка была обнаружена и подтверждена, она была добавлена в нашу базу данных { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Меню
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Ссылка подтверждения на добавление в { -product-name } отправлена на { $userEmail }.

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

# A status indicator that appears in the top right corner of new breach cards
new-breach = Новая

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
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Что-то пошло не так

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Новое имя, внешний вид и ещё больше способов <b>восстановить вашу приватность</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Скрыть
loading-accessibility = Загрузка
