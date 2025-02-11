# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] облікового запису Firefox
               *[upper] Облікового запису Firefox
            }
        [dat]
            { $capitalization ->
                [lower] обліковому запису Firefox
               *[upper] Обліковому запису Firefox
            }
        [acc]
            { $capitalization ->
                [lower] обліковий запис Firefox
               *[upper] Обліковий запис Firefox
            }
        [abl]
            { $capitalization ->
                [lower] обліковим записом Firefox
               *[upper] Обліковим записом Firefox
            }
        [loc]
            { $capitalization ->
                [lower] обліковому записі Firefox
               *[upper] Обліковому записі Firefox
            }
       *[nom]
            { $capitalization ->
                [lower] обліковий запис Firefox
               *[upper] Обліковий запис Firefox
            }
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

error-not-subscribed = Ця адреса електронної пошти не підписана на { -product-name }.
error-hibp-throttled = Надто багато з'єднань з { -brand-HIBP }.
error-hibp-connect = Помилка з'єднання з { -brand-HIBP }.
user-add-invalid-email = Неправильна адреса електронної пошти
user-add-too-many-emails = Ви відстежуєте максимальну кількість адрес електронної пошти.
user-add-duplicate-email = Цю адресу електронної пошти вже було додано до { -product-name }.
user-add-verification-email-just-sent = Наразі не можна повторно надіслати електронний лист із підтвердженням. Спробуйте знову пізніше.ч
user-add-unknown-error = Під час додавання іншої адреси електронної пошти сталася помилка. Повторіть спробу пізніше.
user-delete-unknown-error = Під час вилучення електронної адреси сталася помилка. Повторіть спробу пізніше.
user-verify-token-error = Необхідний токен підтвердження.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометовані дані:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Дані про загрози надано { $hibp-link }
show-all = Показати все
sign-out = Вийти
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Керувати { -brand-fxa(case: "abl") }
# Link title
preferences = Налаштування
# Link title
home = Домівка
# Link title
security-tips = Поради щодо безпеки
# Link title
more-about-this-breach = Докладніше про цей витік даних
monitor-several-emails = Відстежуйте кілька адрес е-пошти
website-breach = Витік даних із сайту
sensitive-breach = Витік вразливої інформації
data-aggregator-breach = Витік даних з агрегатора
what-data = Які дані скомпрометовані:
sensitive-sites = Як { -product-name } поводиться з сайтами, що містять вразливу інформацію?
sensitive-sites-copy =
    { -product-name } розкриває лише облікові записи, пов'язані з цими 
    типами витоків даних, після підтвердження адреси електронної пошти. Це означає, що ви 
    єдина особа, яка може бачити чи ваші дані потрапили до цього витоку (доки хтось 
    інший не матиме доступу до вашого облікового запису електронної пошти).
delayed-reporting-headline = Чому пройшло так багато часу до моменту виходу звіту про цей витік?
delayed-reporting-copy =
    Інколи від моменту витоку даних до його виявлення можуть пройти місяці 
    чи навіть роки. Витоки даних додаються до нашої бази даних одразу 
    після їх виявлення та підтвердження.
fxm-warns-you =
    { -product-name } сповіщає вас, якщо ваша адреса електронної пошти була виявлена 
    у витоці даних в інтернеті. Дивіться чи вашу інформацію було викрито, навчіться 
    як краще захистити свої облікові дані, а також отримуйте сповіщення, якщо ваша 
    електронна пошта з'явиться в новому витоці даних.
what-is-data-agg = Що таке агрегатор даних?
what-is-data-agg-blurb =
    Агрегатори даних, або брокери даних, збирають інформацію з публічних записів, 
    а також купують їх в інших компаній. Вони накопичують ці дані з метою продажу компаніям 
    для маркетингових цілей. Жертви цих витоків рідше зазнають фінансового шахрайства, 
    але хакери можуть використати ці дані для ідентифікації та профілювання.
avoid-personal-info = Уникайте використання особистої інформації в паролях
send-verification = Надіслати підтвердження
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Підсумок витоку даних

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Викритий пароль серед усіх витоків даних
        [few] Викриті паролі серед усіх витоків даних
       *[many] Викритих паролів серед усіх витоків даних
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Відомий витік даних викрив вашу інформацію
        [few] Відомі витоки даних викрили вашу інформацію
       *[many] Відомих витоків даних викрили вашу інформацію
    }
what-is-a-website-breach = Що таке витік даних вебсайту?
website-breach-blurb = Витік даних вебсайту відбувається, коли кібер-злочинці викрадають, копіюють, або розкривають особисту інформацію облікових записів інтернету. Зазвичай це результат роботи хакерів, які знаходять слабке місце в безпеці вебсайту. Витоки даних також можуть траплятися внаслідок випадкового розкриття інформації про облікові записи.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Огляд
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }, відбувся витік даних { $breachTitle }. Одразу після виявлення і перевірки витоку даних, його було додано до нашої бази даних { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Меню
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Перейдіть за посиланням, надісланим на { $userEmail } для додавання до { -product-name }.

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

# A status indicator that appears in the top right corner of new breach cards
new-breach = Новий

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
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Щось пішло не так

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: нова назва, зовнішній вигляд і ще більше способів <b>відновити вашу приватність</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Відхилити
loading-accessibility = Завантаження
