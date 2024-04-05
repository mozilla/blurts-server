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
email-link-expires = Це посилання втратить дію через 24 години

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } знайшов вашу інформацію в цих витоках даних

# Subject line of email
email-subject-no-breaches = { -product-name } не знайшов відомих витоків даних

# Subject line of email
email-subject-verify = Підтвердьте свою е-пошту для { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Поки що таких витоків не знайдено. Ми надішлемо вам сповіщення, якщо ваша е-пошта з'явиться в новому витоці даних.

email-breach-alert-blurb =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Ми щойно отримали подробиці про витік даних, що стався в іншій компанії.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = Дані про витоки даних надані <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = У вас є нерозв'язані витоки
email-unresolved-subhead = Вашу електронну адресу було розкрито. <br>Виправте це негайно за допомогою { -product-name }.
email-is-affected = Ваша електронна адреса { $email-address } помічена принаймні в одному витоці даних
email-more-detail = Увійдіть у { -product-name } зараз, щоб переглянути докладніші відомості про ваші витоки (зокрема, коли вони сталися та які дані було розкрито), а також дізнатися, що робити, якщо вашу електронну адресу виявлено у витоці даних.
email-breach-status = Поточний стан витоку
# table row 1 label
email-monitored = Загальна кількість відстежуваних електронних адрес:
# table row 2 label
email-breach-total = Загальна кількість витоків:
# table row 3 label
email-resolved = Розв'язані витоки:
# table row 4 label
email-unresolved = Нерозв'язані витоки:
email-resolve-cta = Розв'язати витоки

## Verification email

email-verify-heading = Захистіть свої дані прямо зараз
email-verify-subhead = Підтвердьте свою електронну адресу, щоб почати захищати свої дані після витоку даних.
email-verify-simply-click = Просто клацніть посилання нижче, щоб завершити перевірку свого облікового запису.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Ось стислий огляд ваших витоків даних
email-breach-detected = Результати пошуку для вашого облікового запису { $email-address } виявили, що вашу електронну адресу могли розкрити. Ми радимо діяти зараз, щоб усунути цю проблему.
email-dashboard-cta = Перейти до панелі стану

## Breach alert

email-spotted-new-breach = Ми помітили новий витік даних
