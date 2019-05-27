# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
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
        [genitive] Аккаунта Firefox
        [instrumental] Аккаунтом Firefox
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
manage-fxa = Управление { -brand-fxa(case: "instrumental") }
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
copyright = Части этого содержимого созданы участниками проекта mozilla.org © 1999-{ $year }.
content-available = Содержимое доступно на условиях лицензии Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Подпишитесь на уведомления
sign-up-for-fxa-alerts = Подпишитесь на уведомления { -product-name }.
create-free-account =
    Создайте бесплатный { -brand-fxa }, чтобы получить полный отчёт о прошлых утечках,
    уведомления о новых, а также информацию о других службах { -brand-Mozilla }.
get-your-report-and-sign-up = Получите ваш отчет и подпишитесь на уведомления.
# Link title
frequently-asked-questions = Часто задаваемые вопросы
about-firefox-monitor = О { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Настройки
# Link title.
home = Домой
# Link title
breaches = Утечки
# Link title
security-tips = Советы по безопасности
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Открыть { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ПОСЛЕДНЯЯ УТЕЧКА ДОБАВЛЕНА
breach-added = Об утечке сообщено:
breach-discovered = Утечка обнаружена:
# Link title
more-about-this-breach = Больше об этой утечке
take-control = Возьмите свои личные данные под свой контроль.
cant-stop-hackers = Вы не можете отучить хакеров от взломов. Но вы можете избегать плохих привычек, которые облегчают их работу.
read-more-tips = Прочитать больше советов по безопасности
how-hackers-work = Поймите, как работают хакеры
monitor-your-online-accounts = Подпишитесь на мониторинг утечек с помощью { -brand-fxa(case: "genitive") }
stay-alert = Будьте в курсе новых утечек
if-your-info = Если ваша информация будет обнаружена в новой утечке данных, мы отправим вам уведомление.
search-all-emails = Проверьте все свои адреса электронной почты на утечки и получайте уведомления о новых.
monitor-several-emails = Отслеживайте несколько адресов электронной почты
take-action = Примите меры для защиты ваших аккаунтов
keep-your-data-safe = Узнайте, что вам необходимо сделать, чтобы защитить ваши данные от киберпреступников.
website-breach = Утечка на сайте
sensitive-breach = Утечка конфиденциальной информации
data-aggregator-breach = Утечка на агрегаторе данных
unverified-breach = Непроверенная утечка
spam-list-breach = Утечка списка рассылки спама
website-breach-plural = Утечки на сайте
sensitive-breach-plural = Утечки конфиденциальной информации
data-aggregator-breach-plural = Утечки на агрегаторе данных
unverified-breach-plural = Непроверенные утечки
spam-list-breach-plural = Утечки списка рассылки спама
what-data = Какие данные скомпрометированы:
sensitive-sites = Как { -product-name } обращается с сайтами с конфиденциальной информацией?
sensitive-sites-copy = { -product-name } показывает аккаунты, связанные с утечками такого типа, только после подтверждения владения адресом. Другими словами, только вы можете увидеть, была ли ваша информация частью этой утечки (если только к вашей электронной почте не имеет доступ кто-то ещё).
delayed-reporting-headline = Почему об утечке было сообщено так поздно?
delayed-reporting-copy = Иногда информация об утекших пользовательских данных попадает в даркнет лишь спустя месяцы и даже годы. Утечки добавляются в нашу базу данных по мере их обнаружения и проверки.
about-fxm-headline = О { -product-name }
about-fxm-blurb = { -product-name } предупреждает вас, если ваши аккаунты становятся частью утечки. Узнайте, затронули ли вас утечки данных, получайте уведомления о новых утечках и реагируйте на них своевременно, чтобы защитить свои аккаунты. { -product-name } предоставляется { -brand-Mozilla }.
fxm-warns-you = { -product-name } предупреждает вас, если ваш адрес электронной почты станет раскрыт при утечке данных. Проверьте, была ли раскрыта ваша информация, узнайте, как улучшить защиту своих аккаунтов, и получайте уведомления, если ваш адрес электронной почты появится в новой утечке.
# How Firefox Monitor works
how-fxm-works = Как работает { -product-name }
how-fxm-1-headline = Провести базовый поиск
how-fxm-1-blurb = Поищите свой адрес электронной почты в общедоступных базах с утечками с 2007 года. Базовый поиск покажет большинство затронувших вас утечек, кроме тех, которые содержат чувствительную персональную информацию.
how-fxm-2-headline = Подписаться на отслеживание утечек
how-fxm-2-blurb = Создайте { -brand-fxa }, чтобы отслеживать появление своего адреса электронной почты в текущих утечках данных. После того как вы подтвердите владение своим адресом электронной почты, вы также получите полный отчет о прошлых утечках, в том числе утечках конфиденциальной информации.
how-fxm-3-headline = Получайте уведомления в браузере
how-fxm-3-blurb = Если вы используете { -brand-name }, вы получите уведомление при посещении сайта, где произошла утечка. Так вы сразу узнаете, стали ли ваши данные частью утечки, и что следует делать в таком случае.
wtd-after-website = Что делать после утечки данных веб-сайта
wtd-after-data-agg = Что делать после утечки данных агрегатора данных
what-is-data-agg = Что такое агрегатор данных?
what-is-data-agg-blurb =
    Агрегаторы или брокеры данных собирают данные из публичных источников информации, а также покупают их у других компаний. Они собирают эти данные для продажи другим компаниям
    в рекламных целях. Жертвы этих утечек менее подвержены угрозе финансового мошенничества, но хакеры могут использовать эти данные для их профилирования или кражи личности.
protect-your-privacy = Защитите свою приватность в Интернете
no-pw-to-change = В отличие от ситуации со взломом сайта, здесь нет пароля, который можно было бы сменить.
avoid-personal-info = Избегайте использования личной информации в паролях
avoid-personal-info-blurb = Найти дату рождения, адрес или имена членов семьи не составляет труда. Не используйте подобные слова в ваших паролях.

## What to do after data breach tips

change-pw = Смените свои пароли
even-for-old = Даже для старых аккаунтов, важно обновить свои пароли.
make-new-pw-unique = Придумывайте различные и уникальные пароли
strength-of-your-pw = Сложность ваших паролей напрямую влияет на вашу онлайн-безопасность.
create-strong-passwords = Как создавать сложные пароли
stop-reusing-pw = Перестаньте повторно использовать одни и те же пароли
create-unique-pw = Создавайте уникальные пароли и сохраняйте их где-то в безопасном месте, например, в менеджере паролей.
five-myths = 5 мифов о менеджерах паролей
create-a-fxa = Создайте { -brand-fxa }, чтобы получить ваш полный отчёт об утечках, и получать уведомления.
feat-security-tips = Советы по безопасности для защиты ваших аккаунтов
feat-sensitive = Продвинутый поиск по важным взломам
feat-enroll-multiple = Укажите несколько адресов электронной почты для отслеживания взломов
sign-up-for-fxa = Создайте { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Найден в { $breachCount } известной утечке.
        [few] Найден в { $breachCount } известных утечках.
       *[many] Найден в { $breachCount } известных утечках.
    }
see-if-breached = Посмотрите, были ли вы затронуты какой-либо из утечек данных.
check-for-breaches = Проверить на утечки
find-out-what-hackers-know = Узнайте, что хакеры уже знают о вас. Будьте на шаг впереди.
search-for-your-email = Поищите свой адрес электронной почты в утечках, ставших публичными, начиная с 2007 года.
back-to-top = Вернуться наверх
comm-opt-0 = Отправлять мне письмо, если один из этих адресов попадёт в утечку.
comm-opt-1 = Отправлять уведомления обо всех утечках на { $primaryEmail }.
stop-monitoring-this = Перестать отслеживать эту электронную почту.
resend-verification = Отправить письмо подтверждения заново
add-new-email = Добавить новый адрес электронной почты
send-verification = Отправить ссылку для подтверждения
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Глобальное общение
breach-summary = Сводка об утечке
show-breaches-for-this-email = Показать все утечки для этого адреса электронной почты.
link-change-primary = Сменить основной адрес электронной почты
remove-fxm = Удалить { -product-name }
remove-fxm-blurb = Выключить предупреждения { -product-name }. Ваш { -brand-fxa } останется активным, и вы будете получать уведомления о других относящихся к нему событиях.
manage-email-addresses = Управление адресами электронной почты
latest-breach-link = Узнайте, были ли вы затронуты этой утечкой
welcome-back = С возвращением, { $userName }!
welcome-user = Добро пожаловать, { $userName }!
breach-alert-subject = { -product-name } обнаружил ваш адрес электронной почты в новой утечке данных.
your-info-was-discovered-headline = Ваша информация была раскрыта новой утечкой данных.
your-info-was-discovered-blurb = Вы подписались на получение предупреждений от { -product-name }, когда ваша электронная почта появится в утечке данных. Вот что мы знаем об этой утечке.
what-to-do-after-breach = Что делать после утечки данных
ba-next-step-1 = Смените пароль на уникальный и более надёжный.
ba-next-step-blurb-1 = Надежный пароль использует комбинацию прописных и строчных букв, специальные символы и цифры. Он не должен содержать личную информацию, такую как ваш адрес, день рождения или фамилию/имя/отчество.
ba-next-step-2 = Перестаньте использовать пароль, который попал в общий доступ.
ba-next-step-blurb-2 = Киберпреступники могут найти ваш пароль в даркнете и использовать его для входа в другие ваши аккаунты. Лучший способ защитить ваши аккаунты — использовать уникальные пароли для каждого из них.
ba-next-step-3 = Получите помощь в создании более надежных паролей и обеспечении их сохранности.
ba-next-step-blurb-3 = Используйте менеджер паролей для создания надежных, уникальных паролей. Менеджеры паролей безопасно хранят все ваши логины и пароли, чтобы вы могли получить доступ к ним на всех ваших устройствах.
faq1 = Я не узнаю эту компанию или веб-сайт. Почему я появился в этой утечке?
faq2 = Почему потребовалось так много времени, чтобы уведомить меня об этой утечке?
faq3 = Как я узнаю, что это письмо действительно пришло от { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] ОБНАРУЖЕНА { $breachCount } НОВАЯ УТЕЧКА
        [few] ОБНАРУЖЕНО { $breachCount } НОВЫЕ УТЕЧКИ
       *[many] ОБНАРУЖЕНО { $breachCount } НОВЫХ УТЕЧЕК
    }
sign-up-headline-1 = Получайте быстрые уведомления с помощью { -brand-fxa(case: "genitive") }.
account-not-required = Браузер { -brand-name } не обязателен для создания { -brand-fxa(case: "genitive") }. Вы можете получать информацию о других службах { -brand-Mozilla }.
get-alerted = Получать уведомления о новых утечках.
was-your-info-exposed = Были ли ваши данные затронуты утечкой данных { $breachName }?
find-out-if = Узнайте, были ли ваши данные затронуты этой утечкой данных.
fb-not-comp = Этот адрес электронной почты не обнаружен в утечке данных { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Однако, он затронут { $breachCount } другой атакой.
        [few] Однако, он затронут { $breachCount } другими атаками.
       *[many] Однако, он затронут { $breachCount } другими атаками.
    }
fb-comp-only = Этот адрес электронной почты затронут утечкой { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Этот адрес электронной почты затронут { $breachCount } известной утечкой данных, включая { $breachName }.
        [few] Этот адрес электронной почты затронут { $breachCount } известными утечками данных, включая { $breachName }.
       *[many] Этот адрес электронной почты затронут { $breachCount } известными утечками данных, включая { $breachName }.
    }
no-other-breaches-found = Простой поиск не нашёл новых утечек.
no-results-blurb = Извините, этой утечки нет в нашей базе данных.
all-breaches-headline = Все утечки в { -product-name }
search-breaches = Поиск утечек
# "Appears in-page as: Showing: All Breaches"
currently-showing = Показаны:
all-breaches = Все утечки

## Updated error messages

error-bot-headline = Поиск временно остановлен
error-bot-blurb = Мы обеспокоены, что вы можете быть ботом, потому что вы произвели поиск нескольких адресов электронной почты за короткий промежуток времени. На данный момент новые поиски для вас заблокированы. Вы можете попробовать позже.
error-csrf-headline = Время сеанса истекло
error-csrf-blurb = Нажмите на кнопку «Назад» вашего браузера, перезагрузите страницу и попробуйте снова.
error-invalid-unsub = Как отписаться от уведомлений { -product-name }
error-invalid-unsub-blurb = Вам нужно отписаться через одно из электронных писем, которое отправил вам { -product-name }. Проверьте свой почтовый ящик на наличие сообщений от { -brand-team-email }. Выберите ссылку для отмены подписки внизу письма.
login-link-pre = Уже есть аккаунт?
login-link = Войти
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Адрес электронной почты отслеживается
        [few] Адреса электронной почты отслеживаются
       *[many] Адреса электронной почты отслеживаются
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Утечка данных раскрыла вашу информацию
        [few] Утечки данных раскрыли вашу информацию
       *[many] Утечки данных раскрыли вашу информацию
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Раскрытых паролей во всех утечках
        [few] Раскрытых паролей во всех утечках
       *[many] Раскрытых паролей во всех утечках
    }
# Button
see-additional-breaches = Посмотреть дополнительные утечки
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Посмотреть все утечки
scan-results-known-breaches =
    { $breachCount ->
        [one] Этот адрес электронной почты затронут { $breachCount } известной утечкой данных.
        [few] Этот адрес электронной почты затронут { $breachCount } известными утечками данных.
       *[many] Этот адрес электронной почты затронут { $breachCount } известными утечками данных.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Результаты для: { $userEmail }
other-monitored-emails = Другие отслеживаемые адреса электронной почты
email-verification-required = Требуется верификация электронной почты
fxa-primary-email = Адрес электронной почты { -brand-fxa } - Основной
what-is-a-website-breach = Что такое утечка данных веб-сайта?
website-breach-blurb = Утечка данных на веб-сайте происходит, когда киберпреступники крадут, копируют или раскрывают личную информацию из его аккаунтов. Обычно это происходит когда хакеры находят в безопасности сайта уязвимое место. Утечки также могут произойти, когда информация аккаунта становится раскрыта случайно.
security-tips-headline = Советы по безопасности, чтобы защитить себя от хакеров
steps-to-protect = Шаги, которые нужно предпринять, чтобы защитить свою личность в Интернете
take-further-steps = Примите дальнейшие меры по защите своей личности
alert-about-new-breaches = Уведомляйте меня о новых утечках
see-if-youve-been-part = Узнайте, были ли вы частью утечки данных в Интернете.
get-ongoing-breach-monitoring = Постоянно следите за появлением в утечках нескольких адресов электронной почты.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Узнать
new-unsub-error = Вам нужно отписаться через одно из писем, отправленных вам { -product-name }.
other-known-breaches-found =
    { $breachCount ->
        [one] Тем не менее, оно появилось в { $breachCount } другой известной утечке.
        [few] Тем не менее, оно появилось в { $breachCount } других известных утечках.
       *[many] Тем не менее, оно появилось в { $breachCount } других известных утечках.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Дополнительная информация, включая:
# Title
email-addresses-title = Адреса электронной почты
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = { $breachDate }, в { $breachTitle } произошла утечка данных. Как только утечка была обнаружена и подтверждена, она была добавлена в нашу базу данных { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Настройки { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Вы вошли как: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Фильтр по категориям:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Меню
to-affected-email = Отправлять оповещения об утечках на затронутые ими адреса электронной почты
