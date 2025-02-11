# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Увійти

## Email footers

email-footer-support-heading = Запитання про { -brand-mozilla-monitor }?
email-footer-support-content = Щоб отримати допомогу, відвідайте наш <support-link>Центр підтримки</support-link>
email-footer-trigger-transactional = Ви отримали цей електронний лист, оскільки підписалися на { -brand-mozilla-monitor }.
email-footer-source-hibp = Інформацію про витоки даних надає <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Приватність
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Правові положення
# Button text
verify-email-cta = Підтвердити адресу е-пошти
# Headline of verification email
email-link-expires = Термін дії посилання – 24 години

##

# Subject line of email
email-subject-found-breaches = { -product-name } знайшов вашу інформацію в цих витоках даних
# Subject line of email
email-subject-no-breaches = { -product-name } не знайшов відомих витоків даних
# Subject line of email
email-subject-verify = Підтвердження електронної пошти для { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Поки що таких витоків не знайдено. Ми надішлемо вам сповіщення, якщо ваша е-пошта з'явиться в новому витоці даних.
email-breach-alert-blurb =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Ми щойно отримали подробиці про витік даних, що стався в іншій компанії.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Інформація про витоки даних надається <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Захистіть свої дані прямо зараз
email-verify-subhead = Підтвердьте адресу електронної пошти, щоб почати захищати свої дані у разі їх розкриття.
email-verify-simply-click = Просто натисніть посилання нижче, щоб завершити перевірку.

## Breach report

email-breach-summary = Ось стислий огляд ваших витоків даних
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Результати пошуку для вашого облікового запису { $email-address } виявили, що вашу електронну адресу могли розкрити. Ми радимо діяти зараз, щоб усунути цю проблему.
email-dashboard-cta = Перейти до панелі стану

## Breach alert email

email-breach-alert-all-subject = Виявлено новий витік даних
email-breach-alert-all-preview = Ми допоможемо вам це виправити.
email-breach-alert-all-hero-heading = Ваші дані потрапили до нового витоку
email-breach-alert-all-hero-subheading = Не хвилюйтеся, ми можемо допомогти вам вирішити цю проблему
email-breach-alert-all-lead = { -brand-mozilla-monitor } виявив витік даних, що містить вашу особисту інформацію:
email-breach-alert-all-source-title = Джерело витоку:
email-breach-alert-all-data-points-title = Ваші розкриті дані:
email-breach-alert-all-next-steps-lead = Ми допоможемо вам покроково усунути наслідки цього витоку даних.
email-breach-alert-all-next-steps-cta-label = Розпочнімо
email-breach-alert-all-next-steps-button-dashboard = Перейти до панелі стану
