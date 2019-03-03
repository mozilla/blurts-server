# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP =
    { $case ->
        [nominative] Сервис Have I Been Pwned
        [genitive] Сервисом Have I Been Pwned
       *[dative] Сервису Have I Been Pwned
    }
-brand-fxa =
    { $case ->
       *[nominative] Аккаунт Firefox
        [genitive] Аккаунтом Firefox
    }
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Поддержка
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Об уведомлениях Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Оставить отзыв
terms-and-privacy = Условия и конфиденциальность
error-scan-page-token = Вы пытались проверить слишком много адресов электронной почты за короткий промежуток времени. По соображениям безопасности мы временно заблокировали вам доступ к этой функции. Вы сможете попробовать позже.
error-could-not-add-email = Не удалось добавить адрес электронной почты в базу данных.
error-not-subscribed = Этот адрес электронной почты не подписан на { -product-name }.
error-hibp-throttled = Слишком много попыток соединения с { -brand-HIBP(case: "genitive") }.
error-hibp-connect = Ошибка подключения к { -brand-HIBP(case: "dative") }.
error-hibp-load-breaches = Не удалось загрузить информацию по угрозам.
hibp-notify-email-subject = Предупреждение { -product-name }: Ваш аккаунт под угрозой.
home-title = { -product-name }
home-not-found = Страница не найдена.
oauth-invalid-session = Недействительный идентификатор сессии
oauth-confirmed-title = { -product-name } : Вы подписаны
scan-title = { -product-name } : Результаты сканирования
user-add-invalid-email = Некорректный адрес электронной почты
user-add-email-verify-subject = Подтвердите вашу подписку на { -product-name }.
user-add-title = { -product-name } : Подтвердить эл. почту
error-headline = Ошибка
user-verify-token-error = Требуется токен подтверждения.
user-verify-email-report-subject = Ваш отчёт от { -product-name }
user-verify-title = { -product-name } : Вы подписаны
user-unsubscribe-token-error = Чтобы отписаться необходим токен.
user-unsubscribe-token-email-error = Чтобы отписаться необходим токен и emailHash.
user-unsubscribe-title = { -product-name } : Отписаться
user-unsubscribe-survey-title = { -product-name } : Почему вы отписались?
user-unsubscribed-title = { -product-name } : Вы отписались

## Password Tips

pwt-section-headline = Сложные пароли = Лучшая защита
pwt-section-subhead = Уровень защиты вашей личной информации зависит от ваших паролей.
pwt-section-blurb = Ваши пароли делают больше, чем просто защищают ваши аккаунты. Они защищают каждый бит персональной информации. А хакеры полагаются на плохие привычки, например, использование одинакового пароля везде или использование в нём популярных слов (например, p@ssw0rd), так что если они взломают один аккаунт, то они получат доступ ко многим. Вот как лучше защитить ваши аккаунты.
pwt-headline-1 = Используйте разные пароли для разных аккаунтов
pwt-summary-1 =
    Повторное использование одного и того же пароля везде оставляет широко открытой дверь для кражи личных данных.
    Любой, у кого есть этот пароль, сможет войти во все ваши аккаунты.
pwt-headline-2 = Создавайте сложные, неугадываемые пароли
pwt-summary-2 =
    Хакеры используют тысячи популярных паролей, чтобы попытаться угадать ваши.
    Чем длиннее и уникальнее окажется ваш, тем сложнее будет его угадать.
pwt-headline-3 = Относитесь к вопросам для восстановления как к дополнительным паролям
pwt-summary-3 =
    Веб-сайты не проверяют, что ваши ответы на вопросы являются правдой, они просто проверяют, что они совпадают.
    Создавайте длинные случайные ответы и храните их где-нибудь в безопасности.
pwt-headline-4 = Получите помощь в запоминании ваших паролей
pwt-summary-4 =
    Менеджеры паролей, такие как 1Password, LastPass, Dashlane и Bitwarden, генерируют сложные и уникальные пароли.
    Они также надежно хранят пароли и автоматически заполняют их на веб-сайтах
pwt-headline-5 = Добавьте дополнительный уровень защиты с двухфакторной аутентификацией
pwt-summary-5 =
    Для входа в ваш аккаунт с помощью двухфакторной аутентификации требуется дополнительная информация (например, одноразовый код, отправляемый в SMS-сообщении).
    Даже если у кого-то окажется ваш пароль, они не смогут войти.
pwt-headline-6 = Подпишитесь на уведомления { -product-name-nowrap }
pwt-summary-6 = Компрометация данных, хранимых веб-сайтами, случается всё чаще. Как только появляется информация о новой утечке данных, { -product-name-nowrap } отправит вам уведомление — и вы сможете предпринять действия и защитить свой аккаунт.
landing-headline = Ваше право быть в безопасности от хакеров начинается здесь.
landing-blurb =
    { -product-name-nowrap } вооружает вас инструментами для сохранения вашей личной информации в безопасности.
    Узнайте, что хакеры уже знают о вас, и как быть на шаг впереди.
scan-label = Узнайте, стали ли вы жертвой компрометации данных.
scan-placeholder = Введите адрес электронной почты
scan-privacy = Ваш адрес электронной почты не будет сохранён.
scan-submit = Проверить мой адрес электронной почты
scan-another-email = Сканировать другой адрес электронной почты
scan-featuredbreach-label = Узнайте, был ли скомпрометирован ваш аккаунт <span class="bold"> { $featuredBreach } </span>.
sensitive-breach-email-required = В утечке данных содержится личная информация. Необходимо подтвердить электронную почту.
scan-error = Должен быть действительным адресом электронной почты.
signup-banner-headline = { -product-name-nowrap } сообщает об угрозах для ваших аккаунтов.
signup-banner-blurb =
    В вашем подробном отчёте { -product-name-nowrap } покажет, произошла ли утечка или кража личных данных из ваших аккаунтов.
    Также мы уведомим вас, если ваши аккаунты затронут новые утечки данных.
download-firefox-bar-blurb = { -product-name-nowrap } доступен вам в <span class="nowrap">полностью новом { -brand-name }</span>.
download-firefox-bar-link = Загрузить { -brand-name } сейчас
download-firefox-banner-blurb = Возьмите свой браузер под контроль
download-firefox-banner-button = Загрузить { -brand-name }
signup-modal-headline = Подписаться на уведомления от { -product-name-nowrap }
signup-modal-blurb = Подпишитесь на полный отчёт, и уведомления, отправляемые при возникновении новых угроз, а также на советы по безопасности от { -product-name-nowrap }.
signup-modal-close = Закрыть
get-your-report = Получите ваш отчёт
signup-modal-verify-headline = Подтвердите свою подписку
signup-modal-verify-blurb = Мы отправили ссылку подтверждения на <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Срок действия этой ссылки истекает через 24 часа.
signup-modal-verify-resend = Нет в папке «Входящие» или в спаме? Отправить снова.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Отправлено!
signup-with-fxa = Войдите с помощью Аккаунта { -brand-name }
form-signup-placeholder = Введите адрес электронной почты
form-signup-checkbox = Получать новинки от { -brand-Mozilla } и { -brand-name }.
sign-up = Подписаться
form-signup-error = Должен быть действительным адресом электронной почты
no-breaches-headline = Сейчас всё хорошо.
found-breaches-headline = Ваша информация стала жертвой компрометации данных.
no-breaches =
    По результатам базового сканирования ваш адрес электронной почты находится в безопасности.
    Это хорошие новости, но компрометация данных может произойти в любое время, и вы можете сделать кое-что ещё.
    Подпишитесь на уведомления { -product-name-nowrap } для получения полного отчёта, а также уведомлений о новых утечках данных и советов по защите ваших паролей.
featured-breach-results =
    { $breachCount ->
        [0] Ваш аккаунт обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, но не найден в каких-либо известных других.
        [one] Ваш аккаунт обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, а также в { $breachCount } другой утечке.
        [few] Ваш аккаунт обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, а также в { $breachCount } других утечках.
       *[other] Ваш аккаунт обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, а также в { $breachCount } других утечках.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Ваш аккаунт не обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, но найден в { $breachCount } другой утечке.
        [few] Ваш аккаунт не обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, но найден в { $breachCount } других утечках.
       *[other] Ваш аккаунт не обнаружен в утечке <span class="bold">{ $featuredBreach }</span>, но найден в { $breachCount } других утечках.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Аккаунты, связанные с вашим адресом электронной почты, обнаружены в следующей { $breachCount } атаке.
        [few] Аккаунты, связанные с вашим адресом электронной почты, обнаружены в следующих { $breachCount } атаках.
       *[other] Аккаунты, связанные с вашим адресом электронной почты, обнаружены в следующих { $breachCount } атаках.
    }
show-more-breaches = Показать ещё
what-to-do-headline = Что делать, если моя личная информация была скомпрометирована
what-to-do-subhead-1 = Измените свои пароли, даже для старых аккаунтов
what-to-do-blurb-1 =
    Если у вас не получается войти, свяжитесь с администратором веб-сайта, чтобы узнать, как вы можете восстановить или удалить аккаунт.
    Видите незнакомый аккаунт? Возможно, сайт изменил имена, или кто-то создал профиль, используя ваши данные.
what-to-do-subhead-2 = Если вы используете где-либо ещё украденный пароль, смените его
what-to-do-blurb-2 =
    Хакеры могут попытаться использовать ваш украденный пароль для входа в другие аккаунты.
    Создавайте различные пароли для разных веб-сайтов, особенно для Интернет-банкинга,
    электронной почты и других веб-сайтов, на которых вы храните личную информацию.
what-to-do-subhead-3 = Выполните дополнительные шаги для защиты своих финансовых счетов
what-to-do-blurb-3 =
    Большинство компрометаций распространяются только на электронные письма и пароли, но некоторые из них также включают в себя конфиденциальную финансовую информацию.
    Если ваш номер банковского счёта или номера банковских карт «утекли» в процессе атаки, сообщите банку о возможном мошенничестве,
    и проверяйте наличие подозрительных платежей.
what-to-do-subhead-4 = Получите помощь в создании хороших паролей и сохранении их в безопасности.
what-to-do-blurb-4 = Такие менеджеры паролей, как 1Password, LastPass, Dashlane и Bitwarden, генерируют сложные пароли, а также надежно их хранят и автоматически их заполняют на веб-сайтах
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Дата компрометации:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Скомпрометированные аккаунты:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометированные данные:
confirmed = Подтверждено!<br />Вы подписаны!
confirmed-blurb = { -product-name-nowrap } скоро отправит вам полный отчёт, а также будет уведомлять вас, если ваш аккаунт станет жертвой компрометации данных.
confirmed-social-blurb = Если ваши данные украли, то высока вероятность, что данные ваших друзей, семьи или знакомых по Интернету тоже скомпрометированы. Расскажите им о { -product-name-nowrap }.
unsub-headline = Отписаться от уведомлений { -product-name-nowrap }
unsub-blurb = Это действие удалит ваш адрес электронной почты из списка { -product-name-nowrap } и вы больше не будет получать уведомления о новых угрозах.
unsub-button = Отписаться
fxa-unsub-headline = Отписаться от уведомлений { -product-name }.
fxa-unsub-blurb =
    Вы больше не будете получать уведомления от { -product-name }.
    Ваш { -brand-fxa } останется активным, и вы сможете получать
    другие уведомления, касающиеся вашего аккаунта.
unsub-survey-form-label = Почему вы отписываетесь от уведомлений { -product-name-nowrap }?
unsub-reason-1 = Эти уведомления не помогают моим данным оставаться в безопасности
unsub-reason-2 = Я получаю слишком много писем от { -product-name-nowrap }
unsub-reason-3 = Мне кажется, сервис бесполезен
unsub-reason-4 = Я уже предпринял шаги для защиты своих аккаунтов
unsub-reason-5 = Я использую другой сервис для мониторинга своих аккаунтов
unsub-reason-6 = Ничего из вышеперечисленного
unsub-survey-thankyou = Спасибо за ваш отзыв.
unsub-survey-error = Пожалуйста, выберите причину.
unsub-survey-headline-v2 = Вы были отписаны.
unsub-survey-blurb-v2 =
    Вы больше не будете получать уведомления от { -product-name }.
    Уделите нам минутку, чтобы ответить на вопрос о своих впечатлениях?
unsub-survey-button = Отправить отзыв
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Поделиться
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Твитнуть
download-firefox-quantum = Загрузить { -brand-Quantum }
download-firefox-mobile = Загрузить мобильный { -brand-name }
# Features here refers to Firefox browser features. 
features = Возможности
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Бета, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Данные об угрозах предоставлены { $hibp-link }
site-description = Произошли ли в результате взлома утечки данных или кражи ваших аккаунтов? Узнайте в { -product-name }. Поищите в нашей базе данных и подпишитесь на уведомления.
confirmation-headline = Скоро вы получите ваш отчёт от { -product-name }.
confirmation-blurb = Утечки данных могут затронуть любого. Расскажите вашим друзьям и семье, чтобы они смогли проверить, в безопасности ли их аккаунты.
share-email = Эл. почта
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Другое
share-twitter = Многие люди имеют по 100 аккаунтов. Затронули ли какой-либо из ваших утечки данных? Узнайте это.
share-facebook-headline = Узнайте, не стали ли вы жертвой утечки данных
share-facebook-blurb = Затронули ли какой-то из ваших аккаунтов утечки данных?
og-site-description = Узнайте, не стали ли вы жертвой утечки данных с помощью { -product-name }. Подпишитесь на уведомления о будущих угрозах и получайте советы по безопасности.
mozilla-security-blog = Блог безопасности { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Социальные сети
show-all = Показать все
fxa-landing-blurb =
    Узнайте, что хакеры уже знают о вас,
    и научитесь, как быть на шаг впереди них.
fxa-scan-label = Узнайте, стали ли вы жертвой утечки данных.
fxa-welcome-headline = Добро пожаловать в { -product-name }.
fxa-welcome-blurb = Теперь у вас всё настроено для получения уведомлений о появлении { $userEmail } в утечках данных.
fxa-scan-another-email = Хотите проверить другую электронную почту?
# Search Firefox Monitor
fxa-scan-submit = Поиск в { -product-name }
sign-up-to-check = Зарегистрируйтесь для проверки
sign-in = Войти
sign-out = Выйти
full-report-headline = Ваш отчёт { -product-name }
see-full-report = Посмотреть полный отчёт
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Управление { -brand-fxa(case: "genitive") }
fxa-download-firefox-bar-blurb = Разработан командой, создавшей { -brand-name }. В 2 раза быстрее. Использует на 30% меньше памяти, чем { -brand-Chrome }.
fxa-download-firefox-bar-link = Загрузить сейчас
fxa-download-firefox-banner-blurb = Более быстрая загрузка страниц с меньшим расходом памяти.
user-fb-compromised-headline = { $userEmail } затронут утечкой данных { $breachName }.
guest-fb-compromised-headline = Этот адрес электронной почты затронут утечкой данных { $breachName }.
user-zero-breaches-headline = { $userEmail } не был затронут какими-либо утечками данных.
guest-zero-breaches-headline = Этот адрес электронной почты не был затронут какими-либо утечками данных.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } был затронут { $breachCount } утечкой данных.
        [few] { $userEmail } был затронут { $breachCount } утечками данных.
       *[other] { $userEmail } был затронут { $breachCount } утечками данных.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Этот адрес электронной почты был затронут { $breachCount } утечкой данных.
        [few] Этот адрес электронной почты был затронут { $breachCount } утечками данных.
       *[other] Этот адрес электронной почты был затронут { $breachCount } утечками данных.
    }
user-no-breaches-blurb = Мы сообщим вам, если этот адрес электронной почты будет затронут новой утечкой данных.
guest-no-breaches-blurb =
    Чтобы узнать, был ли этот адрес электронной почты затронут утечками данных, создайте { -brand-fxa }.
    Мы также уведомим вас, если этого адреса коснутся новые утечки данных.
user-one-breach-blurb = Эта утечка раскрыла следующую личную информацию.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Ваш адрес электронной почты также был затронут { $breachCount } другой утечкой.
        [few] Ваш адрес электронной почты также был затронут { $breachCount } другими утечками.
       *[other] Ваш адрес электронной почты также был затронут { $breachCount } другими утечками.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Этот адрес электронной почты также был затронут { $breachCount } другой утечкой.
        [few] Этот адрес электронной почты также был затронут { $breachCount } другими утечками.
       *[other] Этот адрес электронной почты также был затронут { $breachCount } другими утечками.
    }
user-fb-compromised-single =
    Эта утечка раскрыла следующую личную информацию. Если вы ещё этого не сделали,
    измените свои пароли.
user-generic-fb-compromised-single = Эта утечка раскрыла следующую личную информацию.
guest-fb-compromised-single-v2 =
    Эта утечка раскрыла следующую личную информацию.
    Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках,
    уведомления о новых утечках, а также информацию о других службах { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Этот адрес электронной почты также был затронут другой { $breachCount } утечкой. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых утечках, а также информацию о других службах { -brand-Mozilla }.
        [few] Этот адрес электронной почты также был затронут другими { $breachCount } утечками. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых утечках, а также информацию о других службах { -brand-Mozilla }.
       *[other] Этот адрес электронной почты также был затронут другими { $breachCount } утечками. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых утечках, а также информацию о других службах { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Вы не были затронуты утечкой { $breachName }, но вас коснулись другие.
        [few] Вы не были затронуты утечкой { $breachName }, но вас коснулись другие.
       *[other] Вы не были затронуты утечкой { $breachName }, но вас коснулись другие.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие.
        [few] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие.
       *[other] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие утечки. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых утечках, а также информацию о других службах { -brand-Mozilla }.
        [few] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие утечки. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых, а также информацию о других службах { -brand-Mozilla }.
       *[other] Этот адрес электронной почты не был затронут утечкой { $breachName }, но его коснулись другие утечки. Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках, уведомления о новых, а также информацию о других службах { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Эта { $breachCount } утечка раскрыла следующую личную информацию. Если вы ещё этого не сделали, измените свои пароли.
        [few] Эти { $breachCount } утечки раскрыли следующую личную информацию. Если вы ещё этого не сделали, измените свои пароли.
       *[other] Эти { $breachCount } утечек раскрыли следующую личную информацию. Если вы ещё этого не сделали, измените свои пароли.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Эта { $breachCount } утечка раскрыла следующую личную информацию.
        [few] Эти { $breachCount } утечки раскрыли следующую личную информацию.
       *[other] Эти { $breachCount } утечек раскрыли следующую личную информацию.
    }
have-an-account = Уже есть аккаунт?
signup-banner-sensitive-blurb =
    Узнайте, что хакеры уже знают о вас, и как быть
    на шаг впереди. Получайте уведомления при появлении
    ваших учётных данных в новых утечках данных.
fxa-pwt-section-blurb =
    Пароли защищают всю личную информацию в ваших аккаунтах.
    Хакеры полагаются на плохие привычки, например, использование одинакового пароля везде
    или использование в нём популярных слов (например, @p@ssw0rd), так что если они взломают один
    аккаунт, то они получат доступ к нескольким.
fxa-pwt-summary-2 =
    Короткие пароли из одного слова являются легкой добычей для хакеров.
    Используйте по крайней мере два слова с комбинацией букв, цифр и специальных символов.
fxa-pwt-summary-4 =
    Менеджеры паролей, такие как 1Password, LastPass, Dashlane и Bitwarden, хранят ваши пароли 
    и автоматически заполняют их на веб-сайтах. Они даже помогают вам создавать более сложные пароли.
fxa-pwt-summary-6 =
    Количество утечек данных растёт. Если ваша личная информация будет затронута новой утечкой данных,
    { -product-name } пришлет вам уведомление — вы сможете предпринять действия и защитить ваши аккаунты.
fxa-what-to-do-blurb-1 =
    Если вам не удаётся войти, свяжитесь с владельцем веб-сайта и спросите, как это исправить.
    Не узнаёте свой аккаунт? Ваши данные могли быть проданы или переданы третьим лицам.
    Это также может быть аккаунт, о котором вы забыли, или компания изменила своё название.
fxa-what-to-do-subhead-2 = Перестаньте использовать «утекший» пароль, и измените его везде, где вы его использовали.
fxa-wtd-blurb-2 =
    Хакеры могут попытаться использовать вашу электронную почту и пароль для доступа к другим
    аккаунтам. Создавайте уникальный пароль для каждого аккаунта, особенно для Интернет-банкинга,
    электронной почты и других веб-сайтов с личными данными.
fxa-what-to-do-blurb-3 =
    Большинство утечек данных распространяются только на электронные письма и пароли, но некоторые из них также затрагивают конфиденциальную финансовую информацию.
    Если ваш номер банковского счёта или номера банковских карт были украдены, сообщите банку о возможном мошенничестве.
    Проверяйте наличие подозрительных платежей.
fxa-what-to-do-subhead-4 = Получите помощь в запоминании всех ваших паролей и хранения их в безопасности.
fxa-what-to-do-blurb-4 =
    Такие менеджеры паролей, как 1Password, LastPass, Dashlane и Bitwarden, надёжно хранят ваши
    пароли и автоматически их заполняют на веб-сайтах. Используйте менеджер паролей
    на вашем телефоне и компьютере, и тогда вам не придётся помнить их все.
fb-landing-headline = Была ли ваша информация затронута утечкой данных { $breachName }?
