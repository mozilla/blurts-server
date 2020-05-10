## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
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
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Аккаунт Firefox
terms-and-privacy = Условия и конфиденциальность
GitHub-link-title = GitHub
error-scan-page-token = Вы пытались проверить слишком много адресов электронной почты за короткий промежуток времени. По соображениям безопасности мы временно заблокировали вам доступ к этой функции. Вы сможете попробовать позже.
error-could-not-add-email = Не удалось добавить адрес электронной почты в базу данных.
error-not-subscribed = Этот адрес электронной почты не подписан на { -product-name }.
error-hibp-throttled = Слишком много попыток соединения с { -brand-HIBP(case: "genitive") }.
error-hibp-connect = Ошибка подключения к { -brand-HIBP(case: "dative") }.
error-hibp-load-breaches = Не удалось загрузить информацию по угрозам.
error-must-be-signed-in = Вы должны войти в свой { -brand-fxa }.
error-to-finish-verifying = Чтобы завершить подтверждение этого адреса электронной почты для { -product-name }, вы должны войти, используя свой основной адрес электронной почты.
home-title = { -product-name }
home-not-found = Страница не найдена.
oauth-invalid-session = Недействительный идентификатор сессии
scan-title = { -product-name } : Результаты сканирования
user-add-invalid-email = Некорректный адрес электронной почты
user-add-too-many-emails = Вы отслеживаете максимальное количество адресов электронной почты.
user-add-email-verify-subject = Подтвердите вашу подписку на { -product-name }.
user-add-duplicate-email = Этот адрес электронной почты уже был добавлен в { -product-name }.
user-add-duplicate-email-part-2 = Посетите { $preferencesLink }, чтобы проверить статус { $userEmail }.
error-headline = Ошибка
user-verify-token-error = Требуется токен подтверждения.
user-verify-email-report-subject = Ваш отчёт от { -product-name }
user-unsubscribe-token-error = Чтобы отписаться необходим токен.
user-unsubscribe-token-email-error = Чтобы отписаться необходим токен и emailHash.
user-unsubscribe-title = { -product-name } : Отписаться
pwt-section-headline = Сложные пароли = Лучшая защита
landing-headline = Ваше право быть в безопасности от хакеров начинается здесь.
scan-placeholder = Введите адрес электронной почты
scan-submit = Проверить мой адрес электронной почты
scan-error = Должен быть действительным адресом электронной почты.
download-firefox-banner-button = Загрузить { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Отправлено!
sign-up = Подписаться
form-signup-error = Должен быть действительным адресом электронной почты
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Дата компрометации:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Скомпрометированные аккаунты:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометированные данные:
unsub-headline = Отписаться от уведомлений { -product-name-nowrap }
unsub-blurb = Это действие удалит ваш адрес электронной почты из списка { -product-name-nowrap } и вы больше не будет получать уведомления о новых угрозах.
unsub-button = Отписаться
# Breach data provided by Have I Been Pwned.
hibp-attribution = Данные об угрозах предоставлены { $hibp-link }
share-twitter = Многие люди имеют по 100 аккаунтов. Затронули ли какой-либо из ваших утечки данных? Узнайте это.
share-facebook-headline = Узнайте, не стали ли вы жертвой утечки данных
share-facebook-blurb = Затронули ли какой-то из ваших аккаунтов утечки данных?
og-site-description = Узнайте, не стали ли вы жертвой утечки данных с помощью { -product-name }. Подпишитесь на уведомления о будущих угрозах и получайте советы по безопасности.
show-all = Показать все
fxa-scan-another-email = Хотите проверить другую электронную почту?
sign-in = Войти
sign-out = Выйти
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Управление { -brand-fxa(case: "instrumental") }
have-an-account = Уже есть аккаунт?
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
# Alerts is a noun
sign-up-for-alerts = Подпишитесь на уведомления
# Link title
frequently-asked-questions = Часто задаваемые вопросы
about-firefox-monitor = О { -product-name }
# Link title
preferences = Настройки
# Link title
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
how-fxm-1-blurb = Поищите свой адрес электронной почты в общедоступных базах с утечками с 2007 года. Базовый поиск покажет большинство затронувших вас утечек, кроме тех, которые содержат конфиденциальную персональную информацию.
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
change-pw-site = Смените пароль для этого веб-сайта
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Найден в { $breachCount } известной утечке.
        [few] Найден в { $breachCount } известных утечках.
       *[many] Найден в { $breachCount } известных утечках.
    }
check-for-breaches = Проверить на утечки
find-out-what-hackers-know = Узнайте, что хакеры уже знают о вас. Будьте на шаг впереди.
get-email-alerts = Оставайтесь в безопасности: получайте уведомления по электронной почте, когда ваша информация появляется в известной утечке
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
breach-summary = Сводка об утечке
show-breaches-for-this-email = Показать все утечки для этого адреса электронной почты.
link-change-primary = Сменить основной адрес электронной почты
remove-fxm = Отключить { -product-name }
remove-fxm-blurb = Выключить предупреждения { -product-name }. Ваш { -brand-fxa } останется активным, и вы будете получать уведомления о других относящихся к нему событиях.
# Button title
manage-email-addresses = Управление адресами электронной почты
# Link title
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
faq1 = Я не узнаю эту компанию или веб-сайт. Почему эта утечка меня затронула?
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

## Updated error messages

error-bot-headline = Поиск временно остановлен
error-bot-blurb = Мы обеспокоены, что вы можете быть ботом, потому что вы произвели поиск нескольких адресов электронной почты за короткий промежуток времени. На данный момент новые поиски для вас заблокированы. Вы можете попробовать позже.
error-csrf-headline = Время сеанса истекло
error-csrf-blurb = Нажмите на кнопку «Назад» вашего браузера, перезагрузите страницу и попробуйте снова.
error-invalid-unsub = Как отписаться от уведомлений { -product-name }
error-invalid-unsub-blurb = Вам нужно отписаться через одно из электронных писем, которое отправил вам { -product-name }. Проверьте свой почтовый ящик на наличие сообщений от { -brand-team-email }. Выберите ссылку для отмены подписки внизу письма.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Адрес электронной почты отслеживается
        [few] Адреса электронной почты отслеживаются
       *[many] Адресов электронной почты отслеживаются
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Раскрытый пароль во всех утечках
        [few] Раскрытых пароля во всех утечках
       *[many] Раскрытых паролей во всех утечках
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Известная утечка данных раскрыла вашу информацию
        [few] Известных утечки данных раскрыли вашу информацию
       *[many] Известных утечек данных раскрыли вашу информацию
    }
# Button
see-additional-breaches = Посмотреть дополнительные утечки
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
fxa-primary-email = Адрес электронной почты { -brand-fxa(case: "genitive") } - Основной
what-is-a-website-breach = Что такое утечка данных веб-сайта?
website-breach-blurb = Утечка данных на веб-сайте происходит, когда киберпреступники крадут, копируют или раскрывают личную информацию из его аккаунтов. Обычно это происходит когда хакеры находят уязвимости в безопасности веб-сайта. Утечки также могут произойти, когда информация аккаунта становится раскрыта случайно.
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
        [one] Тем не менее, он обнаружен в { $breachCount } другой известной утечке.
        [few] Тем не менее, он обнаружен в { $breachCount } других известных утечках.
       *[many] Тем не менее, он обнаружен в { $breachCount } других известных утечках.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Дополнительная информация, включая:
# Title
email-addresses-title = Адреса электронной почты
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Обзор
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } произошла утечка данных { $breachTitle }. Как только утечка была обнаружена и подтверждена, она была добавлена в нашу базу данных { $addedDate }.
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
to-affected-email = Отправлять уведомления об утечках на затронутые ими адреса электронной почты
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Есть способ защитить вашу приватность. Присоединяйтесь к { -brand-name }.
# Link title
learn-more-link = Подробнее.
email-sent = Письмо отправлено!
# Form title
want-to-add = Хотите добавить ещё один адрес электронной почты?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Ссылка подтверждения на добавление в { -product-name } отправлена на { $userEmail }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Электронная почта успешно подтверждена!
email-added-to-subscription = Мы сообщим вам, если { $email } будет затронут утечками данных.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Для просмотра и управления всеми адресами электронной почты, которые находятся на мониторинге, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = войдите

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Управляйте всеми адресами электронной почты: { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Уведомления о утечках данных
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Утечка добавлена:
how-hackers-work-desc = Защитите свои пароли от киберпреступников, ведь это то, что волнует их больше всего.
what-to-do-after-breach-desc = Заблокируйте доступ к своим аккаунтам, чтобы ваша информация не попала в чужие руки.
create-strong-passwords-desc = Сделайте ваши пароли надёжными, безопасными и трудно угадываемыми.
steps-to-protect-desc = Узнайте о наиболее распространённых угрозах и узнайте, на что обращать внимание.
five-myths-desc = Узнайте, как избегать простых паролей, которые облегчают работу хакерам.
take-further-steps-desc = Узнайте, как уменьшить риск кражи личных данных, чтобы предотвратить финансовые потери.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Изменения сохранены!
# Section headline
rec-section-headline = Что сделать для устранения последствий этой утечки
rec-section-subhead = Мы рекомендуем вам предпринять следующие шаги, чтобы сохранить вашу личную информацию в безопасности и защитить вашу цифровую идентичность.
# Section headline
rec-section-headline-no-pw = Что нужно сделать для защиты вашей личной информации
rec-section-subhead-no-pw = Хотя пароли не были затронуты этой утечкой данных, всё же можно принять меры для лучшей защиты вашей личной информации.
# Button
see-additional-recs = Посмотреть дополнительные рекомендации

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = { $affectedEmail } затронут этой утечкой данных. <a>Что делать дальше</a>
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } из ваших адресов электронной почты был затронут этой утечкой данных. <a>Что делать дальше</a>
        [few] { $numAffectedEmails } из ваших адресов электронной почты были затронуты этой утечкой данных. <a>Что делать дальше</a>
       *[many] { $numAffectedEmails } из ваших адресов электронной почты были затронуты этой утечкой данных. <a>Что делать дальше</a>
    }

##

marking-this-subhead = Отметить эту утечку как решённую
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>После того, как вы примете меры по устранению последствий этой утечки</span>,
    вы можете отметить её решённой. Вы и в дальнейшем сможете просматривать подробности этой утечки на своей панели в любое время.
mark-as-resolve-button = Отметить как решённую
marked-as-resolved-label = Отмечена как решённая
undo-button = Отменить
confirmation-1-subhead = Отлично! Вы только что решили свою первую утечку данных.
confirmation-1-body = Продолжайте в том же духе. Зайдите на свою панель, чтобы увидеть, можно ли сделать что-либо ещё.
confirmation-2-subhead = Получите, хакеры!
confirmation-2-body = Вы предпринимаете важные шаги по защите своих аккаунтов.
confirmation-3-subhead = Ещё одна решена. Отличная работа!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Является ли ваш пароль уникальным, надёжным и трудно угадываемым? <a>Узнать</a>
generic-confirmation-subhead = Эта утечка отмечена как решённая
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Чтобы просмотреть оставшиеся утечки, перейти в вашу панель.
        [few] Чтобы просмотреть оставшиеся утечки, перейти в вашу панель.
       *[many] Чтобы просмотреть оставшиеся утечки, перейти в вашу панель.
    }
return-to-breach-details-link = Вернуться к деталям утечки
go-to-dashboard-link = Перейти в панель
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete }% завершено
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } решена
        [few] { $numResolvedBreaches } решены
       *[many] { $numResolvedBreaches } решено
    }
progress-intro-subhead = Новинка в { -product-name }: Отмечайте утечки как решённые
progress-intro-message =
    После просмотра подробностей об утечке и принятия шагов для защиты 
    вашей личной информации, вы можете отметить её как решённую.
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } из { $numTotalBreaches }  утечек отмечены как решённые
        [few] { $numResolvedBreaches } из { $numTotalBreaches }  утечек отмечены как решённые
       *[many] { $numResolvedBreaches } из { $numTotalBreaches }  утечек отмечены как решённые
    }
progress-complete = Все известные утечки были отмечены как решённые

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Отличное начало!</span> Посмотрите оставшиеся утечки, чтобы узнать 
    какие шаги можно предпринять.
progress-message-2 =
    <span>Так держать!</span> Несложные действия, такие как смена паролей, имеют огромное влияние на 
    безопасность вашей личной информации.
progress-message-3 = <span>Отличная работа по решению утечек данных!</span> Продолжайте. Вам осталось сделать всего несколько шагов.
progress-message-4 = <span>Почти готово!</span>  Вы близки к финишной черте.
progress-complete-message =
    <span>Стало лучше, не так ли?</span> Если вы хотите продолжить, сейчас самое время 
    сменить свои пароли на более надёжные.

##

resolve-this-breach-link = Решить эту утечку
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Отмеченные решёнными:
hide-resolved-button = Скрыть решённые
show-resolved-button = Показать решённые
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Раскрытый пароль в нерешённых утечках
        [few] Раскрытых пароля в нерешённых утечках
       *[many] Раскрытых паролей в нерешённых утечках
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Известная утечка отмечена как решённая
        [few] Известных утечки отмечены как решённые
       *[many] Известных утечек отмечены как решённые
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Новая
mobile-promo-headline = Загрузите { -brand-name } на свой телефон и планшет
mobile-promo-body = Быстрый, приватный и безопасный веб-сёрфинг, куда бы вы не собрались. Загрузите { -brand-name } из Google Play и App Store.
mobile-promo-cta = Загрузите { -brand-name } для Android и iOS
promo-lockwise-headline = Возьмите свои пароли с собой
lockwise-promo-body = Управляйте своими логинами на всех ваших устройствах. Получайте к ним безопасный доступ с компьютера, телефона или планшета.
promo-lockwise-cta = Загрузите { -brand-lockwise }
fpn-promo-headline = Скройте свое местоположение от веб-сайтов и трекеров
promo-fpn-body = { -brand-fpn } портит жизнь веб-сайтам и сборщикам данных, которые создают ваш рекламный профиль, скрывая ваш истинный IP-адрес.
promo-fpn-cta = Загрузите { -brand-fpn }
monitor-promo-headline = Узнавайте о новых утечках данных
monitor-promo-body = Получайте уведомления всякий раз, как ваша личная информация будет затронута известной утечкой данных.
ecosystem-promo-headline = Защитите свою жизнь в Интернете с помощью продуктов, ориентированных на приватность
ecosystem-promo-body = Все продукты { -brand-name } следуют нашему Обещанию по Личным Данным: Собирать меньше. Держать в безопасности. Никаких секретов.
promo-ecosystem-cta = Посмотреть все продукты
