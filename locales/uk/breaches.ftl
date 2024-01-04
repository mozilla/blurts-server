# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Інформаційна панель

breach-all-meta-title = { -brand-fx-monitor } - Усі витоки даних
breach-all-meta-social-title = Усі витоки, виявлені { -brand-fx-monitor }
breach-all-meta-social-description = Перегляньте список усіх відомих витоків, виявлених { -brand-fx-monitor }, а потім дізнайтеся, чи було розкрито ваші дані.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Витік даних { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Чи постраждали ви від витоку даних { $company }?
breach-detail-meta-social-description = Користуйтеся { -brand-fx-monitor }, щоб дізнатися, чи було розкрито ваші особисті дані у цьому витоці, і зрозуміти, що робити далі.

breach-scan-meta-title = { -brand-fx-monitor } - Результати витоку
breach-scan-meta-social-title = Результати витоків від { -brand-fx-monitor }
breach-scan-meta-social-description = Увійдіть до { -brand-fx-monitor }, щоб усунути наслідки витоку та отримати постійний моніторинг за будь-якими новими відомими витоками.

## Breaches header

# Data classes pie chart title
breach-chart-title = Уражені дані

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Витоки даних для { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] Відстежується { $count } адреса е-пошти з { $total }
        [few] Відстежується { $count } адреси е-пошти з { $total }
       *[many] Відстежується { $count } адрес е-пошти з { $total }
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Керуйте електронними адресами

## Breaches resolved filter

filter-label-unresolved = Нерозв'язані витоки
filter-label-resolved = Розв'язані витоки

## Breaches table

column-company = КОМПАНІЯ
column-breached-data = УРАЖЕНІ ДАНІ
column-detected = ВИЯВЛЕНО

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Розв'язано
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Активний

breaches-resolve-heading = Позначити витік вирішеним:

breaches-none-headline = Витоків не знайдено
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Гарні новини! Немає повідомлень про відомі витоки для { $email }. Ми продовжуватимемо стежити за цією електронною поштою і повідомимо вас, якщо стануться нові витоки.
breaches-none-cta-blurb = Бажаєте здійснювати моніторинг іншої електронної адреси?
breaches-none-cta-button = Додати адресу електронної пошти

breaches-all-resolved-headline = Усі витоки розв'язано
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Чудова робота! Ви розв'язали всі витоки для { $email }. Ми продовжуватимемо стежити за цією електронною адресою і повідомимо вас, якщо стануться нові витоки.
breaches-all-resolved-cta-blurb = Бажаєте здійснювати моніторинг іншої електронної адреси?
breaches-all-resolved-cta-button = Додати адресу електронної пошти

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = { $breachDate }, у { $companyName } стався витік даних. Одразу після виявлення та підтвердження, цей витік було додано до нашої бази даних на { $addedDate }. До цього витоку входять: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Менеджер паролів { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Оновіть свої паролі та увімкніть двоетапну перевірку (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = У більшості випадків ми рекомендуємо вам змінити пароль на вебсайті компанії. Але <b>їхній вебсайт може бути зламаним або містити зловмисні елементи</b>, тому будьте обережні, <breached-company-link>відвідуючи сайт</breached-company-link>. Для додаткового захисту переконайтеся, що ви використовуєте унікальні паролі для всіх своїх облікових записів, щоб у разі викриття будь-якого пароля уникнути ризику стороннього доступу до інших облікових записів. { $passwordManagerLink } може допомогти вам надійно зберігати всі паролі.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Захистіть свою електронну пошту за допомогою служби маскування електронної пошти, наприклад { $firefoxRelayLink }.
breach-checklist-email-body = Вона може приховати вашу справжню електронну адресу під час пересилання електронних листів у вашу справжню теку «Вхідні».

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Перевірте свій кредитний звіт на наявність рахунків, позик або кредитних карток, які ви не розпізнаєте.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Ви також можете заморозити свій кредит у { $equifaxLink }, { $experianLink } і { $transUnionLink }, щоб завадити шахраям відкривати нові рахунки на ваше ім’я. Це безплатно та не вплине на ваш кредитний рейтинг.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Користуйтеся інтернетом приватно за допомогою VPN, наприклад { $mozillaVpnLink }.
breach-checklist-ip-body = Ваша IP-адреса (адреса Інтернет-протоколу) визначає ваше місце перебування та постачальника послуг інтернету. VPN може приховати вашу справжню IP-адресу, щоб ви могли користуватися інтернетом приватно.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Змініть будь-які паролі або PIN-коди, які містять будь-яку частину вашої адреси.
breach-checklist-address-body = Адреси легко знайти в загальнодоступних архівах, а паролі та PIN-коди можна легко вгадати.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Змініть будь-які паролі або PIN-коди, які містять вашу дату народження.
breach-checklist-dob-body = Дати народження легко знайти в державних архівах, і люди, які знайдуть їх, можуть легко вгадати ваш PIN-код.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Захистіть свій номер телефону за допомогою служби маскування, наприклад { $firefoxRelayLink }, яка приховує ваш справжній номер телефону.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Оновіть свої секретні запитання.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Зазвичай ми рекомендуємо вам оновити секретні запитання на вебсайті компанії. Але <b>їхній вебсайт може бути зламаним або містити зловмисні елементи</b>, тому будьте обережні, <breached-company-link>відвідуючи сайт</breached-company-link>. Для додаткового захисту оновіть свої секретні запитання у всіх важливих облікових записах, а також створіть унікальні паролі для всіх облікових записів.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Створіть унікальні надійні паролі для будь-якого облікового запису, де ви повторно використовували паролі.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Менеджер паролів, як-от { $passwordManagerLink } (безплатний і вбудований у браузер { -brand-firefox }), може допомогти вам відстежувати всі ваші паролі та отримувати до них безпечний доступ з усіх ваших пристроїв.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Зверніться до компанії { $companyName }, щоб повідомити її про цей злам та попросіть про конкретні заходи, які ви можете вжити.
