# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Витоки даних з високим ризиком
fix-flow-nav-leaked-passwords = Викриті паролі
fix-flow-nav-security-recommendations = Рекомендації щодо безпеки
guided-resolution-flow-exit = Повернутися до панелі керування
guided-resolution-flow-next-arrow = Наступний крок
guided-resolution-flow-next-arrow-sub-step = Перейти до наступного результату
guided-resolution-flow-step-navigation-label = Настанови

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Продовжити
fix-flow-celebration-next-recommendations-label = Переглянути рекомендації
fix-flow-celebration-next-dashboard-label = Перейдіть на панель керування

## High-risk flow

fix-flow-celebration-high-risk-title = Ви виправили витоки даних з високим ризиком!
fix-flow-celebration-high-risk-description-in-progress = Виконання цих дій може здатися важким, але це важливо для вашої безпеки. Продовжуйте в тому ж дусі.
fix-flow-celebration-high-risk-description-done = Виконання цих дій може здатися важким, але це важливо для вашої безпеки.
fix-flow-celebration-high-risk-description-next-passwords = А тепер виправимо ваші викриті паролі.
fix-flow-celebration-high-risk-description-next-security-questions = Тепер виправимо ваші викриті секретні запитання.
fix-flow-celebration-high-risk-description-next-security-recommendations = Далі ми запропонуємо вам персоналізовані рекомендації щодо безпеки на основі викритих даних.
fix-flow-celebration-high-risk-description-next-dashboard = Ви все виконали. Перегляньте будь-які елементи, що потребують дій, та відстежуйте стан на панелі керування.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Ваші паролі тепер у безпеці!
fix-flow-celebration-security-questions-title = Ваші секретні запитання у безпеці!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Тепер перегляньмо та оновимо ваші викриті секретні запитання.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Далі ми запропонуємо вам персоналізовані рекомендації щодо безпеки на основі викритих даних.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Чудова робота! Ви впорались. Перегляньте будь-які елементи, що потребують дій, та відстежуйте стан на панелі керування.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Ви виконали всі рекомендації!
fix-flow-celebration-security-recommendations-description-next-dashboard = Чудова робота! Ви впорались. Перегляньте будь-які елементи, що потребують дій, та відстежуйте стан на панелі керування.

# High Risk Data Breaches

high-risk-breach-heading = Ось, що потрібно зробити
high-risk-breach-subheading = Для цього потрібен доступ до вашої конфіденційної інформації, тому вам доведеться виправити це власноруч.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Виявлено в { $num_breaches } витоці даних:
        [few] Виявлено у { $num_breaches } витоках даних:
       *[many] Виявлено у { $num_breaches } витоках даних:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>– { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Позначити виправленим
high-risk-breach-skip = Пропустити цього разу
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Приблизний час: { $estimated_time }+ хвилина
        [few] Приблизний час: { $estimated_time }+ хвилини
       *[many] Приблизний час: { $estimated_time }+ хвилин
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Номер вашої кредитної картки було викрито
high-risk-breach-credit-card-description = Знаючи номер, хто завгодно може робити несанкціоновані покупки, за які вам доведеться відповідати. Виконайте необхідні дії, щоб запобігти фінансовій шкоді.
high-risk-breach-credit-card-step-one = Якщо у вас все ще є ця картка, зверніться до емітента і повідомте про її викрадення.
high-risk-breach-credit-card-step-two = Запитайте нову картку з іншим номером.
high-risk-breach-credit-card-step-three = Перевірте свої облікові записи на наявність неавторизованих витрат.

# Bank Account Breaches

high-risk-breach-bank-account-title = Ваш банківський рахунок було викрито
high-risk-breach-bank-account-description = Якнайшвидше вжиття заходів може дати вам більше правового захисту, щоб допомогти відшкодувати збитки.
high-risk-breach-bank-account-step-one = Негайно повідомте свій банк, що номер вашого рахунку було скомпрометовано.
high-risk-breach-bank-account-step-two = Змініть номер рахунку.
high-risk-breach-bank-account-step-three = Перевірте свої рахунки на наявність неавторизованих стягнень.

# Social Security Number Breaches

high-risk-breach-social-security-title = Ваш номер соціального страхування було розкрито
high-risk-breach-social-security-description = Використовуючи ваш номер соціального страхування, шахраї можуть відкривати нові позики або кредитні картки. Дійте швидко, щоб запобігти фінансовій шкоді.
high-risk-breach-social-security-step-one = Захистіть себе, <link_to_info>налаштувавши сповіщення про шахрайство або заморозивши свій кредит.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Перевірте свій кредитний звіт</link_to_info> на наявність нерозпізнаних рахунків.

# Social Security Number Modal

ssn-modal-title = Попередження про шахрайство та замороження кредитів
ssn-modal-description-fraud-part-one = <b>Попередження про шахрайство</b> вимагає від компаній підтвердити вашу особу, перш ніж видати новий кредит на ваше ім'я. Це безплатно, триває один рік і не вплине негативно на ваш кредитний рейтинг.
ssn-modal-description-fraud-part-two = Щоб налаштувати його, зверніться до будь-якого з трьох кредитних бюро. Вам не потрібно звертатися в кожне з них.
ssn-modal-description-freeze-credit-part-one = <b>Замороження кредиту</b> не дозволяє будь-кому відкривати новий рахунок на ваше ім'я. Це безплатно і не вплине негативно на ваш кредитний рейтинг, але для відкриття нового рахунку вам доведеться спершу розморозити кредит.
ssn-modal-description-freeze-credit-part-two = Щоб заморозити кредит, зверніться до кожного з трьох кредитних бюро — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> і <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Дізнайтеся більше про попередження про шахрайство та замороження кредитів
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Ваш PIN-код було викрито
high-risk-breach-pin-description = Якнайшвидше вжиття заходів може дати вам більше правового захисту, щоб допомогти відшкодувати збитки.
high-risk-breach-pin-step-one = Негайно повідомте свій банк, що ваш PIN-код було скомпрометовано.
high-risk-breach-pin-step-two = Змініть цей PIN-код всюди, де ви його використовували.
high-risk-breach-pin-step-three = Перевірте свої облікові записи на наявність неавторизованих витрат.

# No high risk breaches found

high-risk-breach-none-title = Чудові новини – ми не виявили жодного витоку даних з високим ризиком
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Ми відстежуємо витоки даних на основі вашої адреси електронної пошти, і не виявили жодного витоку з високим ризиком для { $email_list }.
high-risk-breach-none-sub-description-part-one = До витоків даних з високим ризиком входять:
high-risk-breach-none-sub-description-ssn = Номер соціального страхування
high-risk-breach-none-sub-description-bank-account = Інформація про банківський рахунок
high-risk-breach-none-sub-description-cc-number = Номери кредитних карток
high-risk-breach-none-sub-description-pin = PIN-коди
high-risk-breach-none-continue = Продовжити

# Security recommendations

security-recommendation-steps-label = Рекомендації щодо безпеки
security-recommendation-steps-title = Ось наша порада:
security-recommendation-steps-cta-label = Зрозуміло!

# Phone security recommendation

security-recommendation-phone-title = Захистіть свій номер телефону
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ваш номер телефону було виявлено в { $num_breaches } витоці даних:
        [few] Ваш номер телефону було виявлено в { $num_breaches } витоках даних:
       *[many] Ваш номер телефону було виявлено в { $num_breaches } витоках даних:
    }
security-recommendation-phone-description = На жаль, ви не можете його повернути. Але можна виконати дії, які гарантуватимуть вашу безпеку.
security-recommendation-phone-step-one = Блокуйте спам-номери, щоб запобігти подальшим небажаним викликам
security-recommendation-phone-step-two = Не натискайте на посилання в текстових повідомленнях від невідомих відправників; якщо видається, що це надійне джерело, зателефонуйте безпосередньо для підтвердження

# Email security recommendation

security-recommendation-email-title = Захистіть свою адресу електронної пошти
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Вашу адресу електронної пошти було виявлено в { $num_breaches } витоці даних:
        [few] Вашу адресу електронної пошти було виявлено в { $num_breaches } витоках даних:
       *[many] Вашу адресу електронної пошти було виявлено в { $num_breaches } витоках даних:
    }
security-recommendation-email-description = На жаль, ви не можете її повернути. Але можна виконати дії, які гарантуватимуть вашу безпеку.
security-recommendation-email-step-one = Не натискайте на посилання у листах від невідомих відправників; якщо видається, що це надійне джерело, зателефонуйте безпосередньо для підтвердження
security-recommendation-email-step-two = Пам'ятайте про <link_to_info>шахрайство</link_to_info>
security-recommendation-email-step-three = Позначайте підозрілі листи як спам і блокуйте відправника
security-recommendation-email-step-four = Використовуйте <link_to_info>маски електронної пошти { -brand-relay }</link_to_info>, щоб захистити свою електронну пошту в майбутньому

# IP security recommendation

security-recommendation-ip-title = Використовуйте VPN для додаткової приватності
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Вашу IP-адресу було виявлено в { $num_breaches } витоці даних:
        [few] Вашу IP-адресу було виявлено в { $num_breaches } витоках даних:
       *[many] Вашу IP-адресу було виявлено в { $num_breaches } витоках даних:
    }
security-recommendation-ip-description = Ваша IP-адреса визначає ваше місцеперебування і постачальника послуг Інтернету. Хакери можуть використовувати цю інформацію, щоб визначити ваше розташування або спробувати під'єднатися до ваших пристроїв.
security-recommendation-ip-step-one = Використовуйте VPN (як-от <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), щоб приховати свою справжню IP-адресу та користуватися Інтернетом приватно.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ваш пароль { $breach_name } було викрито
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Він з'явився у витоці даних { $breach_date }.
leaked-passwords-description = Шахраї можуть отримати доступ до вашого облікового запису і, ймовірно, спробують застосувати його до інших облікових записів, щоб перевірити, чи використовували ви той самий пароль. Змініть його всюди, де ви його використовували, щоб захистити себе.
leaked-passwords-steps-title = Ось, що потрібно зробити
leaked-passwords-steps-subtitle = Для цього потрібен доступ до вашого облікового запису, тому вам доведеться виправити це власноруч.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Змініть пароль для <b>{ $emails_affected }</b> на <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Змініть його всюди, де ви його використовували.
leaked-passwords-mark-as-fixed = Позначити виправленим
leaked-passwords-skip = Пропустити цього разу
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Приблизний час на виконання: { $estimated_time } хв на сайт
    }

# Leaked Security Questions

leaked-security-questions-title = Ваші секретні запитання було викрито
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Вони з'явилися у витоці даних { $breach_name } { $breach_date }.
leaked-security-questions-description = Шахраї можуть використовувати їх для доступу до ваших облікових записів і будь-якого іншого сайту, де ви використовували ті самі секретні запитання. Оновіть їх зараз, щоб захистити свої облікові записи.
leaked-security-questions-steps-title = Ось, що потрібно зробити
leaked-security-questions-steps-subtitle = Для цього потрібен доступ до вашого облікового запису, тому вам доведеться виправити це власноруч.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Оновіть секретні запитання для <b>{ $email_affected }</b> на <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Оновіть їх на будь-якому іншому сайті, де ви використовували ті самі секретні запитання. Обов'язково використовуйте різні секретні запитання для кожного облікового запису.
