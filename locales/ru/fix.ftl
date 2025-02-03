# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Утечки данных с высоким риском
fix-flow-nav-leaked-passwords = Утечки паролей
fix-flow-nav-security-recommendations = Рекомендации по безопасности
guided-resolution-flow-exit = Вернуться на панель управления
guided-resolution-flow-next-arrow = Перейти к следующему шагу
guided-resolution-flow-next-arrow-sub-step = Перейти к следующему результату
guided-resolution-flow-step-navigation-label = Пошаговые инструкции

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Давайте продолжим
fix-flow-celebration-next-recommendations-label = Посмотреть рекомендации
fix-flow-celebration-next-dashboard-label = Перейти на панель управления

## High-risk flow

fix-flow-celebration-high-risk-title = Вы исправили свои утечки с высоким риском!
fix-flow-celebration-high-risk-description-in-progress = Выполнение этой работы может показаться очень сложным, но важно её совершать, чтобы обеспечить свою безопасность. Продолжайте в том же духе.
fix-flow-celebration-high-risk-description-done = Выполнение этой работы может показаться очень сложным, но важно её совершать, чтобы обеспечить свою безопасность.
fix-flow-celebration-high-risk-description-next-passwords = Теперь давайте исправим ваши украденные пароли.
fix-flow-celebration-high-risk-description-next-security-questions = Теперь давайте исправим ваши раскрытые контрольные вопросы.
fix-flow-celebration-high-risk-description-next-security-recommendations = Далее мы дадим вам персональные рекомендации по безопасности на основе того, какие ваши данные были раскрыты.
fix-flow-celebration-high-risk-description-next-dashboard = Вы достигли конца инструкции. Вы можете просмотреть любые действия и отслеживать свой прогресс на панели управления.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Ваши пароли теперь защищены!
fix-flow-celebration-security-questions-title = Ваши контрольные вопросы защищены!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Теперь давайте проверим и обновим ваши обнаруженные контрольные вопросы.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Далее мы дадим вам персональные рекомендации по безопасности на основе того, какие ваши данные были раскрыты.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Отлично сделано! Вы достигли конца инструкции. Вы можете просмотреть любые действия и отслеживать свой прогресс на панели управления.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Вы выполнили все наши рекомендации!
fix-flow-celebration-security-recommendations-description-next-dashboard = Отлично сделано! Вы достигли конца инструкции. Вы можете просмотреть любые действия и отслеживать свой прогресс на панели управления.

# High Risk Data Breaches

high-risk-breach-heading = Вот что нужно сделать
high-risk-breach-subheading = Для этого требуется доступ к вашей личной информации, поэтому вам нужно будет исправить это вручную.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Обнаружено в { $num_breaches } утечке данных:
        [few] Обнаружено в { $num_breaches } утечках данных:
       *[many] Обнаружено в { $num_breaches } утечках данных:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date> от { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Отметить как исправленную
high-risk-breach-skip = Пока пропустить
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Ваше расчетное время: { $estimated_time }+ минута
        [few] Ваше расчетное время: { $estimated_time }+ минуты
       *[many] Ваше расчетное время: { $estimated_time }+ минут
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Номер вашей банковской карты был раскрыт
high-risk-breach-credit-card-description = Любой, кто его получит, может совершить несанкционированные покупки, за которые вы можете понести ответственность. Действуйте сейчас, чтобы предотвратить финансовые потери.
high-risk-breach-credit-card-step-one = Если у вас всё ещё есть эта карта, свяжитесь с издателем и сообщите о её краже.
high-risk-breach-credit-card-step-two = Запросите новую карту с новым номером.
high-risk-breach-credit-card-step-three = Проверьте свои счета на наличие несанкционированных списаний.

# Bank Account Breaches

high-risk-breach-bank-account-title = Ваш банковский счет был раскрыт
high-risk-breach-bank-account-description = Скорейшее принятие мер может дать вам больше законной защиты, которая поможет вам возместить любые потери.
high-risk-breach-bank-account-step-one = Немедленно сообщите в свой банк, что номер вашего счета был скомпрометирован.
high-risk-breach-bank-account-step-two = Смените свой номер счёта.
high-risk-breach-bank-account-step-three = Проверьте свои счета на наличие несанкционированных списаний.

# Social Security Number Breaches

high-risk-breach-social-security-title = Ваш номер социального страхования был раскрыт
high-risk-breach-social-security-description = Мошенники могут открыть новые кредиты или банковские карты с вашим номером социального страхования. Действуйте быстро, чтобы предотвратить финансовые потери.
high-risk-breach-social-security-step-one = Защитите себя, <link_to_info>настроив предупреждение о мошенничестве или заморозив свой кредит.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Проверьте свой кредитный отчёт</link_to_info> на наличие неопознанных счетов.

# Social Security Number Modal

ssn-modal-title = Об уведомлениях о мошенничестве и заморозке кредитов
ssn-modal-description-fraud-part-one = <b>Предупреждение о мошенничестве</b> требует от компаний подтвердить вашу личность перед тем, как выдать новый кредит на ваше имя. Это бесплатно, работает один год и не повлияет негативным образом на ваш кредитный рейтинг.
ssn-modal-description-fraud-part-two = Чтобы его настроить, свяжитесь с любым из трёх кредитных бюро. Вам не обязательно связываться со всеми тремя.
ssn-modal-description-freeze-credit-part-one = <b>Заморозка вашего кредита</b> не позволит кому-либо открыть новый счёт на ваше имя. Это бесплатно и не повлияет негативным образом на ваш кредитный рейтинг, но вам нужно разблокировать его перед открытием любых новых счетов.
ssn-modal-description-freeze-credit-part-two = Чтобы заморозить свой кредит, обратитесь в каждое из трёх кредитных бюро — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> и <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Узнать больше об предупреждениях о мошенничестве и заморозке кредитов
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Ваш PIN-код был раскрыт
high-risk-breach-pin-description = Скорейшее принятие мер может дать вам больше законной защиты, которая поможет вам возместить любые потери.
high-risk-breach-pin-step-one = Немедленно сообщите в свой банк, что ваш PIN-код был скомпрометирован.
high-risk-breach-pin-step-two = Измените свой PIN-код везде, где вы использовали один и тот же.
high-risk-breach-pin-step-three = Проверьте свои счета на наличие несанкционированных списаний.

# No high risk breaches found

high-risk-breach-none-title = Отличные новости, мы не обнаружили каких-либо утечек данных с высоким риском
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Мы выявляем утечки данных на основе вашего адреса электронной почты, и мы не обнаружили каких-либо утечек данных с высоким риском для { $email_list }.
high-risk-breach-none-sub-description-part-one = Утечки данных с высоким риском включают:
high-risk-breach-none-sub-description-ssn = Номер социального страхования
high-risk-breach-none-sub-description-bank-account = Информация о банковском счёте
high-risk-breach-none-sub-description-cc-number = Номера банковских карт
high-risk-breach-none-sub-description-pin = PIN-коды
high-risk-breach-none-continue = Продолжить

# Security recommendations

security-recommendation-steps-label = Рекомендации по безопасности
security-recommendation-steps-title = Вот наш совет:
security-recommendation-steps-cta-label = Понятно!

# Phone security recommendation

security-recommendation-phone-title = Защитите свой номер телефона
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ваш номер телефона был затронут { $num_breaches } утечкой данных:
        [few] Ваш номер телефона был затронут { $num_breaches } утечками данных:
       *[many] Ваш номер телефона был затронут { $num_breaches } утечек данных:
    }
security-recommendation-phone-description = К сожалению, вы не можете вернуть всё, как было. Но есть шаги, которые вы можете предпринять, чтобы убедиться, что вы находитесь в безопасности.
security-recommendation-phone-step-one = Блокируйте спам-номера, чтобы предотвратить больше нежелательных звонков
security-recommendation-phone-step-two = Не нажимайте на ссылки в сообщениях от неизвестных отправителей; если кажется, что он из доверенного источника, позвоните напрямую для подтверждения

# Email security recommendation

security-recommendation-email-title = Защитите свой адрес электронной почты
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Ваш адрес электронной почты был затронут { $num_breaches } утечкой данных:
        [few] Ваш адрес электронной почты был затронут { $num_breaches } утечками данных:
       *[many] Ваш адрес электронной почты был затронут { $num_breaches } утечек данных:
    }
security-recommendation-email-description = К сожалению, вы не можете это исправить. Но есть шаги, которые вы можете предпринять, чтобы защитить себя.
security-recommendation-email-step-one = Не переходите по ссылкам в электронных письмах от неизвестных отправителей; если кажется, что это из доверенного источника, позвоните напрямую для подтверждения
security-recommendation-email-step-two = Помните о <link_to_info>фишинге</link_to_info>
security-recommendation-email-step-three = Отмечайте подозрительные письма как спам и блокируйте отправителя
security-recommendation-email-step-four = Используйте <link_to_info>псевдонимы электронной почты { -brand-relay }</link_to_info>, чтобы защищать свою электронную почту в будущем

# IP security recommendation

security-recommendation-ip-title = Используйте VPN для дополнительной приватности
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Ваш IP-адрес был затронут { $num_breaches } утечкой данных:
        [few] Ваш IP-адрес был затронут { $num_breaches } утечками данных:
       *[many] Ваш IP-адрес был затронут { $num_breaches } утечек данных:
    }
security-recommendation-ip-description = Ваш IP-адрес определяет ваше местоположение и интернет-провайдера. Хакеры могут использовать эту информацию, чтобы определить ваше местоположение или попытаться подключиться к вашим устройствам.
security-recommendation-ip-step-one = Используйте VPN (например, <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), чтобы скрыть свой настоящий IP-адрес и пользоваться Интернетом конфиденциально.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ваш пароль { $breach_name } был раскрыт
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Обнаружен в утечке данных от { $breach_date }.
leaked-passwords-description = Мошенники могут получить доступ к вашему аккаунту и, скорее всего, попытаются использовать его в других аккаунтах, чтобы узнать, использовали ли вы тот же пароль. Измените его везде, где вы его использовали, чтобы защитить себя.
leaked-passwords-steps-title = Вот что нужно сделать
leaked-passwords-steps-subtitle = Для этого требуется доступ к вашему аккаунту, поэтому вам нужно исправить это вручную.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Смените свой пароль для <b>{ $emails_affected }</b> на <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Измените его везде, где вы его использовали.
leaked-passwords-mark-as-fixed = Отметить как исправленную
leaked-passwords-skip = Пока пропустить
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Расчётное. время выполнения: { $estimated_time } минута на сайт
        [few] Расчётное. время выполнения: { $estimated_time } минуты на сайт
       *[many] Расчётное. время выполнения: { $estimated_time } минут на сайт
    }

# Leaked Security Questions

leaked-security-questions-title = Ваши контрольные вопросы были раскрыты
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Обнаружены в утечке данных { $breach_name } от { $breach_date }.
leaked-security-questions-description = Мошенники могут использовать их для доступа к вашим аккаунтам, а также к любым сайтам, на которых вы использовали те же контрольные вопросы. Обновите их сейчас, чтобы защитить свои аккаунты.
leaked-security-questions-steps-title = Вот что нужно сделать
leaked-security-questions-steps-subtitle = Для этого требуется доступ к вашему аккаунту, поэтому вам нужно исправить это вручную.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Обновите контрольные вопросы для <b>{ $email_affected }</b> на <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Обновите их на любом сайте, где вы использовали те же контрольные вопросы. Обязательно используйте разные контрольные вопросы для разных аккаунтов.
