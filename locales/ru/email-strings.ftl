# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Войти

## Email footers

email-footer-support-heading = Есть вопросы о { -brand-mozilla-monitor }?
email-footer-support-content = Посетите наш <support-link>Центр поддержки</support-link> для получения помощи
email-footer-trigger-transactional = Вы получаете эти письма как подписчик { -brand-mozilla-monitor }.
email-footer-source-hibp = Данные об утечке данных предоставлены <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Приватность
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Юридическая информация
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

## Verification email

email-verify-heading = Защитите свои данные, начните прямо сейчас
email-verify-subhead = Подтвердите свою электронную почту, чтобы начать защищать свои данные после утечки.
email-verify-simply-click = Просто нажмите на ссылку ниже, чтобы завершить проверку своей учётной записи.

## Breach report

email-breach-summary = Вот сводка ваших утечек данных
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Результаты поиска для вашей учётной записи { $email-address } обнаружили, что ваша электронная почта могла быть раскрыта. Мы рекомендуем вам действовать сейчас, чтобы устранить эту утечку.
email-dashboard-cta = Перейти в панель управления

## Breach alert email

email-breach-alert-all-subject = Обнаружена новая утечка данных
email-breach-alert-all-preview = Мы проведём вас через шаги для её решения.
email-breach-alert-all-hero-heading = Вы стали жертвой новой утечки данных
email-breach-alert-all-hero-subheading = Не волнуйтесь, мы можем помочь вам решить эту проблему
email-breach-alert-all-lead = { -brand-mozilla-monitor } обнаружил следующую утечку данных, включающую вашу личную информацию:
email-breach-alert-all-source-title = Источник утечки:
email-breach-alert-all-data-points-title = Ваши раскрытые данные:
email-breach-alert-all-next-steps-lead = Мы шаг за шагом поможем вам устранить эту утечку данных.
email-breach-alert-all-next-steps-cta-label = Давайте начнём
email-breach-alert-all-next-steps-button-dashboard = Перейти на панель управления
