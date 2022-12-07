# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Перейдіть на сторінку <a>{ $breachedCompanyUrl }</a>, щоб змінити пароль і ввімкнути двоетапну перевірку (2FA).
breach-checklist-pw-body = Переконайтеся, що ваш пароль унікальний і його важко відгадати. Якщо цей пароль використовується в інших облікових записах, обов’язково змініть його там. <a>Менеджер паролів { -brand-firefox }</a> може допомогти вам безпечно відстежувати всі ваші паролі.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Захистіть свою електронну пошту за допомогою служби маскування електронної пошти, наприклад <a>{ -brand-relay }</a>.
breach-checklist-email-body = Вона може приховати вашу справжню електронну адресу під час пересилання електронних листів у вашу справжню теку «Вхідні».

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Перевірте свій кредитний звіт на наявність рахунків, позик або кредитних карток, які ви не розпізнаєте.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Ви також можете заморозити свій кредит у <a>Equifax</a>, <a>Experian</a> і <a>TransUnion</a>, щоб завадити шахраям відкривати нові рахунки на ваше ім’я. Це безплатно та не вплине на ваш кредитний рейтинг.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Повідомте про це порушення емітенту вашої кредитної картки та попросіть нову картку з новим номером.
breach-checklist-cc-body = Вам також слід переглянути виписки з кредитної картки на наявність нерозпізнаних стягнень.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Негайно повідомте свій банк, що номер вашого рахунку було скомпрометовано.
breach-checklist-bank-body = Зробивши це швидше, ви можете отримати більше правового захисту, що допоможе вам відшкодувати будь-які збитки. Також, можливо, ви захочете перевірити свої рахунки на наявність нерозпізнаних стягнень.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Повідомте емітента картки та негайно змініть PIN-код.
breach-checklist-pin-body = Переконайтеся, що ваш новий PIN-код або будь-який інший PIN-код не містить цифр, які легко вгадати, наприклад дати народження чи адреси.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Користуйтеся інтернетом приватно за допомогою VPN, наприклад <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Ваша IP-адреса (адреса Інтернет-протоколу) визначає ваше місце перебування та постачальника послуг інтернету. VPN може приховати вашу справжню IP-адресу, щоб ви могли користуватися інтернетом приватно.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Змініть будь-які паролі або PIN-коди, які містять будь-яку частину вашої адреси.
breach-checklist-address-body = Адреси легко знайти в загальнодоступних архівах, а паролі та PIN-коди можна легко вгадати.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Змініть будь-які паролі або PIN-коди, які містять вашу дату народження.
breach-checklist-dob-body = Дати народження легко знайти в державних архівах, і люди, які знайдуть їх, можуть легко вгадати ваш PIN-код.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Захистіть свій номер телефону за допомогою служби маскування, наприклад <a>{ -brand-relay }</a>, яка приховує ваш справжній номер телефону.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Оновіть таємні запитання для <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Використовуйте довгі довільні відповіді та зберігайте їх у безпечному місці. Зробіть це будь-де, де ви використовували ті самі таємні запитання.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Створіть унікальні надійні паролі для будь-якого облікового запису, де ви повторно використовували паролі.
breach-checklist-hp-body = Менеджер паролів, як-от <a>Менеджер паролів { -brand-firefox }</a> (безплатний і вбудований у браузер { -brand-firefox }), може допомогти вам відстежувати всі ваші паролі та отримувати до них безпечний доступ з усіх ваших пристроїв.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Зверніться до компанії { $companyName }, щоб повідомити її про цей злам та попросіть про конкретні заходи, які ви можете вжити.
