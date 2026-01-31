# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
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

error-not-subscribed = Ця адреса електронної пошти не підписана на { -product-name }.
user-add-invalid-email = Неправильна адреса електронної пошти
user-add-too-many-emails = Ви відстежуєте максимальну кількість адрес електронної пошти.
user-add-duplicate-email = Цю адресу електронної пошти вже було додано до { -product-name }.
user-add-verification-email-just-sent = Наразі не можна повторно надіслати електронний лист із підтвердженням. Спробуйте знову пізніше.ч
user-add-unknown-error = Під час додавання іншої адреси електронної пошти сталася помилка. Повторіть спробу пізніше.
user-delete-unknown-error = Під час вилучення електронної адреси сталася помилка. Повторіть спробу пізніше.
user-verify-token-error = Необхідний токен підтвердження.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометовані дані:
# Link title
more-about-this-breach = Докладніше про цей витік даних
what-data = Які дані скомпрометовані:
delayed-reporting-headline = Чому пройшло так багато часу до моменту виходу звіту про цей витік?
delayed-reporting-copy =
    Інколи від моменту витоку даних до його виявлення можуть пройти місяці 
    чи навіть роки. Витоки даних додаються до нашої бази даних одразу 
    після їх виявлення та підтвердження.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Огляд
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }, відбувся витік даних { $breachTitle }. Одразу після виявлення і перевірки витоку даних, його було додано до нашої бази даних { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Витік додано:
# Section headline
rec-section-headline = Що робити з цим витоком
rec-section-subhead = Ми рекомендуємо вжити цих заходів, щоб зберегти вашу особисту інформацію в безпеці й захистити свої цифрові дані.
# Section headline
rec-section-headline-no-pw = Що робити, щоб захистити свою особисту інформацію
rec-section-subhead-no-pw = Хоча паролі не було викрито в цьому витоці, все ж можна вжити заходів для кращого захисту особистої інформації.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [gen]
            { $capitalization ->
                [upper] Облікового запису Mozilla
               *[lower] облікового запису Mozilla
            }
        [dat]
            { $capitalization ->
                [upper] Обліковому запису Mozilla
               *[lower] обліковому запису Mozilla
            }
        [acc]
            { $capitalization ->
                [upper] Обліковий запис Mozilla
               *[lower] обліковий запис Mozilla
            }
        [abl]
            { $capitalization ->
                [upper] Обліковим записом Mozilla
               *[lower] обліковим записом Mozilla
            }
        [loc]
            { $capitalization ->
                [upper] Обліковому записі Mozilla
               *[lower] обліковому записі Mozilla
            }
       *[nom]
            { $capitalization ->
                [upper] Обліковий запис Mozilla
               *[lower] обліковий запис Mozilla
            }
    }
open-in-new-tab-alt = Відкрити посилання в новій вкладці

## Search Engine Optimization

meta-desc-2 = Дізнайтеся за допомогою { -brand-fx-monitor }, чи були скомпрометовані ваші дані. Ми допоможемо вам зрозуміти, що робити далі, і постійно відстежуватимемо нові витоки.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Увійти
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Головне меню
main-nav-button-collapse-label = Згорнути меню
main-nav-button-collapse-tooltip = Згорнути меню
main-nav-button-expand-label = Розгорнути меню
main-nav-button-expand-tooltip = Розгорнути меню
main-nav-label = Навігація
main-nav-link-home-label = Домівка
main-nav-link-dashboard-label = Панель керування
main-nav-link-settings-label = Налаштування
main-nav-link-faq-label = Поширені запитання
main-nav-link-faq-tooltip = Поширені запитання

## User menu

user-menu-trigger-label = Відкрити меню користувача
user-menu-trigger-tooltip = Профіль
user-menu-manage-fxa-label = Керуйте своїм { -brand-mozilla-account(case: "abl") }
user-menu-settings-label = Налаштування
user-menu-settings-tooltip = Сконфігурувати { -brand-mozilla-monitor }
user-menu-help-label = Довідка та підтримка
user-menu-help-tooltip = Отримати довідку про користування { -brand-mozilla-monitor }
user-menu-signout-label = Вийти
user-menu-signout-tooltip = Вийти з { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Умови надання послуг
privacy-notice = Положення про приватність
github = { -brand-github }
footer-nav-recent-breaches = Нещодавні витоки даних
footer-external-link-faq-label = Поширені запитання
footer-external-link-faq-tooltip = Поширені запитання

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Сторінку не знайдено
error-page-error-404-copy = На жаль, сторінки, яку ви шукаєте, більше не існує.
error-page-error-404-cta-button = Назад

## Breach overview page

all-breaches-headline-3 = База даних витоків
all-breaches-lead = Ми відстежуємо всі відомі витоки даних, щоб з’ясувати, чи була скомпрометована ваша особиста інформація. Ось повний список усіх витоків, про які було повідомлено з 2007 року.
search-breaches = Пошук витоків
# the kind of user data exposed to hackers in data breach.
exposed-data = Дата витоку:

## Public breach detail page

find-out-if-2 = Дізнайтеся, чи були ваші дані в цьому витоці
find-out-if-description = Ми допоможемо вам швидко з’ясувати, чи було розкрито вашу електронну адресу внаслідок цього витоку, і зрозуміти, що робити далі.
breach-detail-cta-signup = Перевірити на витік даних
loading-accessibility = Завантаження
