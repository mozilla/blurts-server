# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Правові положення
# Unsubscribe link in email.
email-unsub-link = Відписатися
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Ви отримали цей лист, тому що ви підписалися на сповіщення від { -product-name }.
    Більше не хочете отримувати такі повідомлення? { $unsubLink }. Це автоматичний електронний лист. Для отримання допомоги, відвідайте { $faqLink }.
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
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Результати пошуку для <b>{ $email-address }</b> вашого облікового запису виявили, що вашу електронну адресу могли розкрити. Ми радимо діяти зараз, щоб усунути цю проблему.
email-dashboard-cta = Перейти до панелі стану

## Breach alert

email-spotted-new-breach = Ми помітили новий витік даних
