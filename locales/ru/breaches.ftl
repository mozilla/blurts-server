# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Скомпрометированные данные
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Утечки данных для { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } из { $total } отслеживаемого письма
        [few] { $count } из { $total } отслеживаемых писем
        [many] { $count } из { $total } отслеживаемых писем
       *[other] { $count } из { $total } отслеживаемых писем
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Управление электронными почтовыми адресами

## Breaches resolved filter

filter-label-unresolved = Необработанные утечки
filter-label-resolved = Обработанные утечки

## Breaches table

column-company = КОМПАНИЯ
column-breached-data = УТЕКШИЕ ДАННЫЕ
column-detected = ОБНАРУЖЕНА
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Решена
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Активна
breaches-none-headline = Утечек не обнаружено
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Хорошие новости! Для { $email } не было зарегистрировано никаких известных утечках. Мы будем продолжать отслеживать эту почту и сообщим вам, если появятся новые утечки.
breaches-none-cta-blurb = Хотите ли вы отслеживать другую электронную почту?
breaches-none-cta-button = Добавить адрес электронной почты
breaches-all-resolved-headline = Все утечки устранены
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Отлично сделано! Вы устранили все утечки для { $email }. Мы продолжим отслеживать электронную почту и сообщим вам, если возникнут новые утечки.
breaches-all-resolved-cta-blurb = Хотите ли вы отслеживать другую электронную почту?
breaches-all-resolved-cta-button = Добавить адрес электронной почты
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = { $breachDate } произошла утечка данных { $companyName }. Как только утечка была обнаружена и подтверждена, она была добавлена в нашу базу данных { $addedDate }. Эта утечка включает в себя: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Перейдите на страницу <a>{ $breachedCompanyUrl }</a>, чтобы изменить пароль и включить двухфакторную аутентификацию (2FA).
breach-checklist-pw-body = Убедитесь, что ваш пароль уникален и его трудно угадать. Если этот пароль используется в каких-либо других учётных записях, обязательно измените его и там. <a>Менеджер паролей { -brand-firefox }</a> поможет вам надежно отслеживать все ваши пароли.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Защитите свою электронную почту с помощью службы маскирования электронной почты, такой как <a>{ -brand-relay }</a>.
breach-checklist-email-body = Это может скрыть ваш настоящий адрес электронной почты при пересылке писем на ваш настоящий почтовый ящик.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Следите за своим кредитной историей на предмет появления в ней счетов, кредитов или кредитных карт, о которых не знаете.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Вы также можете заморозить свой кредит в <a>Equifax</a>, <a>Experian</a> и <a>TransUnion</a>, чтобы мошенники не открыли новые счета на ваше имя. Это бесплатно и не повлияет на ваш кредитный рейтинг.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Сообщите об этой утечке эмитенту вашей кредитной карты и запросите новую карту с новым номером.
breach-checklist-cc-body = Вам также следует просмотреть выписки по кредитной карте на предмет неопознанных списаний.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Немедленно сообщите в свой банк, что номер вашего счета был скомпрометирован.
breach-checklist-bank-body = Если вы сделаете это быстрее, у вас будет больше правовой защиты, которая поможет вам возместить любые убытки. Вы также захотите проверить свои счета на наличие неопознанных списаний.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Сообщите эмитенту вашей карты и немедленно измените свой PIN-код.
breach-checklist-pin-body = Убедитесь, что ваш новый PIN-код или любой другой PIN-код не содержит легко угадываемых чисел, таких как дата вашего рождения или адрес.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Используйте Интернет конфиденциально с помощью VPN, например, с помощью <a>{ -brand-mozilla-vpn }</a>
breach-checklist-ip-body = Ваш IP-адрес (адрес интернет-протокола) показывает ваше местоположение и интернет-провайдера. VPN поможет скрыть ваш настоящий IP-адрес, чтобы вы могли пользоваться Интернетом конфиденциально.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Измените любые пароли или PIN-коды, содержащие любую часть вашего адреса.
breach-checklist-address-body = Адреса легко найти в общедоступных записях, и такие пароли и PIN-коды могут быть легко угаданы.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Измените любые пароли или PIN-коды, содержащие дату вашего рождения.
breach-checklist-dob-body = Дату рождения легко найти в общедоступных записях, и люди, которые найдут её, могут легко угадать ваш PIN-код.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Защитите свой номер телефона с помощью службы маскировки, например, <a>{ -brand-relay }</a>, которая скрывает ваш настоящий номер телефона.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Обновите контрольные вопросы в <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Используйте длинные случайные ответы и храните их в безопасном месте. Делайте это в любом другом месте, отличном от того, что вы использовали для тех же контрольных вопросов.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Создавайте уникальные надежные пароли для любой учетной записи, в которой вы повторно использовали пароли.
breach-checklist-hp-body = Менеджер паролей, такой как <a>Менеджер паролей { -brand-firefox }</a> (бесплатный и встроенный в браузер { -brand-firefox }), поможет вам отслеживать все свои пароли и получать к ним безопасный доступ со всех ваших устройств.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Свяжитесь с { $companyName }, чтобы сообщить им об этой утечке и запросить конкретные шаги, которые вы можете предпринять.
