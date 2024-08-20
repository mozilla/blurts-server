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
legal = Юридическая информация
# Unsubscribe link in email.
email-unsub-link = Отписаться
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Вы получили это письмо, потому что вы подписались на уведомления { -product-name }.
    Больше не хотите получать такие письма? { $unsubLink }. Это автоматическое письмо. Для получения помощи, посетите { $faqLink }.
# Button text
verify-email-cta = Подтвердить адрес эл. почты
# Headline of verification email
email-link-expires = Срок действия этой ссылки истекает через 24 часа

##

# Subject line of email
email-subject-found-breaches = { -product-name } нашел вашу информацию в этих утечках
# Subject line of email
email-subject-no-breaches = { -product-name } не обнаружил известных утечек
# Subject line of email
email-subject-verify = Подтвердите адрес электронной почты для { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } предупреждает вас об утечках данных, связанных с вашей личной информацией.
    Пока никаких утечек не обнаружено. Мы отправим вам уведомление, если ваш адрес электронной почты появится в новой утечке.
email-breach-alert-blurb =
    { -product-name } предупреждает вас об утечках данных, связанных с вашей личной информацией.
    Мы только что получили информацию об утечке данных другой компании.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Данные об утечке данных предоставлены <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = У вас есть неустраненные утечки
email-unresolved-subhead = Ваша электронная почта была раскрыта. <br>Немедленно исправьте это с помощью { -product-name }.
email-is-affected = Ваш адрес электронной почты { $email-address } затронут как минимум одной утечкой данных
email-more-detail = Войдите в { -product-name } сейчас, чтобы увидеть более подробную информацию о ваших утечках (в том числе, когда они произошли и какие данные были раскрыты), и узнать, что вы должны сделать, когда ваша электронная почта была раскрыта в результате утечки данных.
email-breach-status = Текущий статус утечки
# table row 1 label
email-monitored = Всего отслеживаемых ящиков:
# table row 2 label
email-breach-total = Общее число утечек:
# table row 3 label
email-resolved = Устранённые утечки:
# table row 4 label
email-unresolved = Неустранённые утечки:
email-resolve-cta = Устранение утечек

## Verification email

email-verify-heading = Защитите свои данные, начните прямо сейчас
email-verify-subhead = Подтвердите свою электронную почту, чтобы начать защищать свои данные после утечки.
email-verify-simply-click = Просто нажмите на ссылку ниже, чтобы завершить проверку своей учётной записи.

## Breach report

email-breach-summary = Вот сводка ваших утечек данных
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Результаты поиска для вашей учётной записи { $email-address } обнаружили, что ваша электронная почта могла быть раскрыта. Мы рекомендуем вам действовать сейчас, чтобы устранить эту утечку.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Результаты поиска для вашей учётной записи <b>{ $email-address }</b> обнаружили, что ваша электронная почта могла быть раскрыта. Мы рекомендуем вам действовать сейчас для устранения этой утечки.
email-dashboard-cta = Перейти в панель управления

## Breach alert

email-spotted-new-breach = Мы обнаружили новую утечку данных
