# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] облікового запису Firefox
               *[upper] Облікового запису Firefox
            }
        [dat]
            { $capitalization ->
                [lower] обліковому запису Firefox
               *[upper] Обліковому запису Firefox
            }
        [acc]
            { $capitalization ->
                [lower] обліковий запис Firefox
               *[upper] Обліковий запис Firefox
            }
        [abl]
            { $capitalization ->
                [lower] обліковим записом Firefox
               *[upper] Обліковим записом Firefox
            }
        [loc]
            { $capitalization ->
                [lower] обліковому записі Firefox
               *[upper] Обліковому записі Firefox
            }
       *[nom]
            { $capitalization ->
                [lower] обліковий запис Firefox
               *[upper] Обліковий запис Firefox
            }
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Ви намагалися сканувати забагато адрес електронної пошти за короткий проміжок часу. З міркувань безпеки ми тимчасово заблокували вам доступ до нових пошуків. Ви зможете спробувати знову пізніше.
error-could-not-add-email = Не вдалося додати адресу електронної пошти до бази даних.
error-not-subscribed = Ця адреса електронної пошти не підписана на { -product-name }.
error-hibp-throttled = Надто багато з'єднань з { -brand-HIBP }.
error-hibp-connect = Помилка з'єднання з { -brand-HIBP }.
error-hibp-load-breaches = Не вдалося завантажити інформацію про загрози.
error-must-be-signed-in = Ви повинні увійти в { -brand-fxa }.
error-to-finish-verifying = Щоб завершити перевірку цієї електронної пошти для { -product-name }, ви повинні увійти, використовуючи свою основну адресу е-пошти облікового запису.
home-title = { -product-name }
home-not-found = Сторінку не знайдено.
oauth-invalid-session = Недійсний ідентифікатор сеансу
scan-title = { -product-name } : Результати сканування
user-add-invalid-email = Неправильна адреса електронної пошти
user-add-too-many-emails = Ви відстежуєте максимальну кількість адрес електронної пошти.
user-add-email-verify-subject = Підтвердьте вашу підписку на { -product-name }.
user-add-duplicate-email = Цю адресу електронної пошти вже було додано до { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Відвідайте { $preferencesLink }, щоб перевірити стан { $userEmail }.
user-add-verification-email-just-sent = Наразі не можна повторно надіслати електронний лист із підтвердженням. Спробуйте знову пізніше.ч
user-add-unknown-error = Під час додавання іншої адреси електронної пошти сталася помилка. Повторіть спробу пізніше.
user-delete-unknown-error = Під час вилучення електронної адреси сталася помилка. Повторіть спробу пізніше.
error-headline = Помилка
user-verify-token-error = Необхідний токен підтвердження.
user-verify-email-report-subject = Ваш звіт від { -product-name }
user-unsubscribe-token-error = Для скасування підписки необхідний токен.
user-unsubscribe-token-email-error = Для скасування підписки необхідний токен і emailHash.
user-unsubscribe-title = { -product-name } : Відписатися
pwt-section-headline = Надійніші паролі = Кращий захист
landing-headline = Ваше право бути захищеними від хакерів починається тут.
scan-placeholder = Введіть адресу е-пошти
scan-submit = Пошук адреси е-пошти
scan-error = Необхідно вказати правильну адресу електронної пошти.
download-firefox-banner-button = Завантажити { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Надіслано!
sign-up = Підписатися
form-signup-error = Необхідно вказати дійсну адресу електронної пошти
# breach-date = the calendar date a particular data theft occurred.
breach-date = Дата витоку:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Скомпрометовані облікові записи:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометовані дані:
unsub-headline = Відписатися від { -product-name-nowrap }
unsub-blurb = Ця дія призведе до вилучення адреси вашої електронної пошти зі списку { -product-name-nowrap } і ви надалі не будете отримувати попередження про нові вразливості.
unsub-button = Відписатись
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Дані про загрози надано { $hibp-link }
share-twitter = Більшість людей мають близько 100 облікових записів онлайн. Чи було викрито зловмисниками будь-які з ваших? Дізнайтеся.
share-facebook-headline = Дізнайтеся, чи ваші дані не було викрито
share-facebook-blurb = Чи виявлено ваші дані у викритті?
og-site-description = Дізнайтеся за допомогою { -product-name }, чи ваші дані не було викрито. Підпишіться на отримання попереджень про майбутні порушення та отримання порад щодо безпеки ваших облікових записів.
show-all = Показати все
fxa-scan-another-email = Хочете перевірити іншу електронну пошту?
sign-out = Вийти
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Керувати { -brand-fxa(case: "abl") }
have-an-account = Вже маєте обліковий запис?
fxa-pwt-summary-2 =
    Короткі паролі у вигляді одного слова є легкою здобиччю для хакерів.
    Використовуйте принаймні два слова разом з комбінацією літер, цифр і спеціальних символів.
fxa-pwt-summary-4 =
    Менеджери паролів, на зразок 1Password, LastPass, Dashlane та Bitwarden зберігають ваші 
    паролі та автоматично вводять їх на вебсайтах. Вони навіть допомагають вам створювати надійні паролі.
fxa-pwt-summary-6 =
    Кількість витоків даних зростає. Якщо ваша особиста інформація з'явилася в новому витоку даних,
    { -product-name } надішле вам попередження, щоб ви могли виконати необхідні дії для захисту.
fxa-what-to-do-blurb-1 =
    Якщо вам не вдається увійти, зв'яжіться з вебсайтом і запитайте, як це виправити.
    Не впізнаєте свій обліковий запис? Ваші дані могли бути продані або передані стороннім особам.
    Це також може бути обліковий запис, про який ви забули, або компанія змінила його дані.
fxa-what-to-do-subhead-2 = Припиніть використовувати викритий пароль та змініть його всюди.
fxa-wtd-blurb-2 =
    Хакери можуть намагатися використати вашу електронну пошту і пароль для доступу до інших
    облікових записів. Створіть унікальний пароль для кожного облікового запису, особливо
    для банків, електронної пошти та інших вебсайтів з особистими даними.
fxa-what-to-do-blurb-3 =
    Більшість витоків даних розкривають лише електронну пошту і паролі, але деякі можуть також включати
    вразливу фінансову інформацію. Якщо ваш банківський рахунок чи номер кредитної картки було викрито,
    повідомте свій банк про можливість шахрайства. Перевіряйте свої виписки на наявність несанкціонованих списань коштів.
fxa-what-to-do-subhead-4 = Отримайте допомогу з організації та зберігання паролів у безпеці.
fxa-what-to-do-blurb-4 =
    Менеджери паролів, на зразок 1Password, LastPass, Dashlane та Bitwarden зберігають ваші 
    паролі в безпеці та автоматично вводять їх на вебсайтах. Використовуйте менеджер паролів
    на своєму телефоні та комп'ютері, щоб вам не доводилося запам'ятовувати їх.
# Alerts is a noun
sign-up-for-alerts = Підписатися на сповіщення
# Link title
frequently-asked-questions = Часті запитання
about-firefox-monitor = Про { -product-name }
# Link title
preferences = Налаштування
# Link title
home = Домівка
# Link title
security-tips = Поради щодо безпеки
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Відкрийте { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = Додано новий витік даних
# Link title
more-about-this-breach = Докладніше про цей витік даних
take-control = Відновіть контроль над особистими даними.
cant-stop-hackers = Ви не можете зупинити хакерів. Але ви можете позбутися шкідливих звичок, які полегшують їхню роботу.
read-more-tips = Прочитайте більше порад щодо безпеки
how-hackers-work = Зрозумійте, як працюють хакери
monitor-your-online-accounts = Підпишіться на повідомлення про витік даних за допомогою { -brand-fxa(case: "gen") }.
stay-alert = Дізнавайтеся про нові витоки даних
if-your-info = Якщо ваша інформація опиниться в новому витоку даних, ми надішлемо вам повідомлення.
search-all-emails = Перевірте всі ваші адреси електронної пошти та отримуйте повідомлення про нові загрози.
monitor-several-emails = Відстежуйте кілька адрес е-пошти
take-action = Вживайте заходів для захисту своїх облікових записів
keep-your-data-safe = Дізнайтеся, що потрібно зробити для збереження ваших даних від кіберзлочинців.
website-breach = Витік даних із сайту
sensitive-breach = Витік вразливої інформації
data-aggregator-breach = Витік даних з агрегатора
unverified-breach = Непідтверджений витік даних
spam-list-breach = Витік списку надсилання спаму
website-breach-plural = Витоки даних із сайту
sensitive-breach-plural = Витоки вразливої інформації
data-aggregator-breach-plural = Витоки даних з агрегатора
unverified-breach-plural = Непідтверджені витоки даних
spam-list-breach-plural = Витоки списку надсилання спаму
what-data = Які дані скомпрометовані:
sensitive-sites = Як { -product-name } поводиться з сайтами, що містять вразливу інформацію?
sensitive-sites-copy =
    { -product-name } розкриває лише облікові записи, пов'язані з цими 
    типами витоків даних, після підтвердження адреси електронної пошти. Це означає, що ви 
    єдина особа, яка може бачити чи ваші дані потрапили до цього витоку (доки хтось 
    інший не матиме доступу до вашого облікового запису електронної пошти).
delayed-reporting-headline = Чому пройшло так багато часу до моменту виходу звіту про цей витік?
delayed-reporting-copy =
    Інколи від моменту витоку даних до його виявлення можуть пройти місяці 
    чи навіть роки. Витоки даних додаються до нашої бази даних одразу 
    після їх виявлення та підтвердження.
about-fxm-headline = Про { -product-name }
about-fxm-blurb =
    { -product-name } сповіщає вас, якщо ваші облікові дані було виявлено 
    у витоку даних. Дізнайтеся, чи ви потрапили до витоку даних, отримуйте сповіщення 
    про нові витоки, а також виконайте дії для захисту своїх облікових даних. 
    { -product-name } розробляється компанією { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } сповіщає вас, якщо ваша адреса електронної пошти була виявлена 
    у витоці даних в інтернеті. Дивіться чи вашу інформацію було викрито, навчіться 
    як краще захистити свої облікові дані, а також отримуйте сповіщення, якщо ваша 
    електронна пошта з'явиться в новому витоці даних.
# How Firefox Monitor works
how-fxm-works = Як працює { -product-name }
how-fxm-1-headline = Виконати базовий пошук
how-fxm-1-blurb =
    Пошукайте свою адресу електронної пошти в загальнодоступних базах витоків даних 
    починаючи з 2007 року. Цей загальний пошук покриє більшість витоків, окрім тих, 
    що містять вразливу особисту інформацію.
how-fxm-2-headline = Підписатися на відстеження витоків
how-fxm-2-blurb =
    Створіть { -brand-fxa }, щоб відстежувати свою електронну пошту в майбутніх витоках даних. 
    Одразу після підтвердження електронної пошти ви також отримаєте повний звіт про минулі витоки даних, 
    включаючи вразливі витоки.
how-fxm-3-headline = Отримуйте сповіщення у браузері
how-fxm-3-blurb =
    Якщо ви використовуєте { -brand-name }, ви отримаєте сповіщення при  
    відвідуванні сайту, що потрапив до витоку даних. Дізнайтеся, що необхідно зробити, 
    якщо ви стали учасником витоку даних.
wtd-after-website = Що робити після витоку даних вебсайту:
wtd-after-data-agg = Що робити після витоку даних агрегатора даних:
what-is-data-agg = Що таке агрегатор даних?
what-is-data-agg-blurb =
    Агрегатори даних, або брокери даних, збирають інформацію з публічних записів, 
    а також купують їх в інших компаній. Вони накопичують ці дані з метою продажу компаніям 
    для маркетингових цілей. Жертви цих витоків рідше зазнають фінансового шахрайства, 
    але хакери можуть використати ці дані для ідентифікації та профілювання.
protect-your-privacy = Захистіть своє особисте життя в Інтернеті
no-pw-to-change = На відміну від витоків даних вебсайтів, в цьому випадку неможливо змінити пароль.
avoid-personal-info = Уникайте використання особистої інформації в паролях
avoid-personal-info-blurb = Знайти дати народження, адреси та імена членів сім'ї в Інтернеті нескладно. Не використовуйте подібні слова в своїх паролях.

## What to do after data breach tips

change-pw = Змініть свій пароль
change-pw-site = Змінити пароль для цього сайту
even-for-old = Навіть для старих облікових записів важливо оновлювати пароль.
make-new-pw-unique = Вигадуйте складні та унікальні паролі
strength-of-your-pw = Надійність ваших паролів безпосередньо впливає на вашу безпеку в Інтернеті.
create-strong-passwords = Як створювати надійні паролі
stop-reusing-pw = Припиніть використовувати однакові паролі
create-unique-pw = Створюйте унікальні паролі й зберігайте їх в безпеці, наприклад, в менеджері паролів.
five-myths = 5 міфів про менеджери паролів
create-a-fxa = Створіть { -brand-fxa }, щоб отримати повний звіт про витоки даних та сповіщення.
feat-security-tips = Поради щодо безпеки для захисту ваших облікових записів
feat-sensitive = Розширений пошук серед вразливих витоків даних
feat-enroll-multiple = Вкажіть декілька адрес електронної пошти для стеження за витоками даних
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] З'являється в { $breachCount } відомому витоці даних.
        [few] З'являється в { $breachCount } відомих витоках даних.
       *[many] З'являється в { $breachCount } відомих витоках даних.
    }
check-for-breaches = Перевірити на витік даних
find-out-what-hackers-know = Довідайтеся, що хакери вже знають про вас. Навчіться, як бути на крок попереду них.
get-email-alerts = Залишайтеся захищеними: отримуйте сповіщення електронною поштою, коли ваші дані з’являються у відомих витоках даних
search-for-your-email = Пошукайте свою адресу електронної пошти в загальнодоступних витоках даних, починаючи з 2007 року.
back-to-top = Нагору
comm-opt-0 = Надсилати мені лист, якщо одна з моїх адрес електронної пошти з'явиться у витоці даних.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Надсилати сповіщення про всі витоки на { $primaryEmail }.
stop-monitoring-this = Припинити відстежувати цю е-пошту.
resend-verification = Надіслати лист підтвердження ще раз
add-new-email = Додати нову адресу е-пошти
send-verification = Надіслати підтвердження
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Підсумок витоку даних
show-breaches-for-this-email = Показати всі витоки даних для цієї е-пошти.
link-change-primary = Змінити основну адресу е-пошти
remove-fxm = Вилучити { -product-name }
remove-fxm-blurb = Вимкнути сповіщення { -product-name }. Ваш { -brand-fxa } залишатиметься активним і ви можете отримувати інші повідомлення стосовно свого облікового запису.
# Button title
manage-email-addresses = Керувати адресами е-пошти
# Link title
latest-breach-link = Подивіться, чи ви потрапили до цього витоку даних

## Variables:
##   $userName (String) - Username

welcome-back = З поверненням, { $userName }!
welcome-user = Вітаємо, { $userName }!

##

breach-alert-subject = { -product-name } знайшов вашу адресу е-пошти в новому витоці даних
your-info-was-discovered-headline = Вашу інформацію виявлено в новому витоці даних.
your-info-was-discovered-blurb =
    Ви підписалися на отримання сповіщень від { -product-name }, 
    коли ваша е-пошта з'явиться у витоці даних. Погляньте, що нам відомо про цей витік.
what-to-do-after-breach = Що робити після витоку даних
ba-next-step-1 = Змініть свій пароль на унікальний та надійний.
ba-next-step-blurb-1 =
    Надійний пароль повинен мати комбінацію з великих та малих літер, 
    спеціальних символів, та цифр. Він не повинен містити особистої інформації, 
    наприклад, адреси, дати народження чи імен з вашої сім'ї.
ba-next-step-2 = Припиніть використовувати цей викритий пароль взагалі.
ba-next-step-blurb-2 =
    Кіберзлочинці можуть знайти ваш пароль в "чорній мережі" та використовувати 
    його для входу до ваших інших облікових записів. Найкращим способом захисту є 
    використання унікальних, надійних паролів для кожного облікового запису.
ba-next-step-3 = Отримайте поради щодо створення кращих паролів та надійного їх зберігання.
ba-next-step-blurb-3 =
    Використовуйте менеджер паролів для створення надійних, унікальних паролів. Менеджери паролів безпечно 
    зберігають усі ваші облікові дані, щоб ви мали до них доступ на всіх пристроях.
faq1 = Я не впізнаю цю компанію чи вебсайт. Чому мої дані потрапили до цього витоку?
faq2 = Чому пройшло так багато часу, доки мене сповістили про цей витік даних?
faq3 = Як мені впевнитися, що це справжній електронний лист від { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] ЗНАЙДЕНО { $breachCount } НОВИЙ ВИТІК ДАНИХ
        [few] ЗНАЙДЕНО { $breachCount } НОВІ ВИТОКИ ДАНИХ
       *[many] ЗНАЙДЕНО { $breachCount } НОВИХ ВИТОКІВ ДАНИХ
    }
sign-up-headline-1 = Отримуйте сповіщення за допомогою { -brand-fxa(case: "gen") }.
account-not-required = Браузер { -brand-name } не обов'язковий для { -brand-fxa(case: "gen") }. Ви можете отримувати інформацію про служби { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Чи була ваша інформація розкрита у витоці даних { $breachName }?
fb-not-comp = Ця адреса електронної пошти не з'являється у витоці даних { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Однак, вона з'являється в { $breachCount } іншому витоці даних.
        [few] Однак, вона з'являється в { $breachCount } інших витоках даних.
       *[many] Однак, вона з'являється в { $breachCount } інших витоках даних.
    }
fb-comp-only = Ця адреса електронної пошти з'являється у витоці даних { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Ця адреса електронної пошти з'явилася в { $breachCount } відомому витоці даних, включаючи { $breachName }.
        [few] Ця адреса електронної пошти з'явилася в { $breachCount } відомих витоках даних, включаючи { $breachName }.
       *[many] Ця адреса електронної пошти з'явилася в { $breachCount } відомих витоках даних, включаючи { $breachName }.
    }

##

no-other-breaches-found = Під час загального пошуку інших витоків не знайдено.
no-results-blurb = На жаль, такого витоку даних немає в нашій базі даних.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Ваша електронна пошта відсутня в цьому витоці,
    але ваш номер телефону все одно може бути вразливим.</span> Деякі облікові записи
    скомпрометовані з витоком у Facebook, включно з номерами телефонів та іншими
    особистими даними, але не адресами електронної пошти. Якщо ви коли-небудь
    реєструвалися в Facebook — навіть якщо зараз ним не користуєтесь — ми радимо
    виконати такі кроки для свого захисту
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Встановіть для своїх відомостей значення «Лише я» або інший непублічний параметр у <a>своєму профілі Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Разом з цим витоком хакери викрили інформацію профілю,
    налаштовану як "доступна для всіх" або "доступна для друзів".
    Ця інформація може бути об'єднана з іншими даними з метою
    отримання доступу до ваших інших особистих даних та облікових записів.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Змініть пароль, PIN-код, або інші облікові дані, пов'язані з безпекою, в обліковому записі
    <a>свого мобільного оператора,</a> щоб запобігти підміні SIM-картки</span>.
facebook-breach-what-to-do-2-copy =
    Підміна SIM-картки, яку також називають перехопленням,
    — це коли хакер використовує номери телефонів, дату народження та інші дані, щоб привласнити
    номер мобільного телефону людини, а потім зламати її електронну пошту, соціальні мережі чи навіть банківські рахунки.
facebook-breach-what-to-do-3 = Переглянути всі поради на нашій сторінці витоків з Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Відображено:

## Updated error messages

error-bot-headline = Пошуки тимчасово призупинені
error-bot-blurb =
    Нам необхідно пересвідчитися чи ви не є ботом, тому що ви виконували пошук 
    декількох адрес електронної пошти за короткий проміжок часу. Поки що для вас 
    заблоковано можливість нових пошуків. Спробуйте знову пізніше.
error-csrf-headline = Час сеансу завершився
error-csrf-blurb = Використайте кнопку повернення в браузері, перезавантажте сторінку, і спробуйте знову.
error-invalid-unsub = Як скасувати підписку на сповіщення від { -product-name }
error-invalid-unsub-blurb =
    Вам необхідно скасувати підписку в одному з надісланих вам листів від { -product-name }. 
    Знайдіть у своїй скриньці вхідне повідомлення від { -brand-team-email }. 
    Перейдіть за посиланням для скасування підписки в нижній частині повідомлення.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Адреса електронної пошти відстежується
        [few] Адреси електронної пошти відстежуються
       *[many] Адрес електронної пошти відстежуються
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Викритий пароль серед усіх витоків даних
        [few] Викриті паролі серед усіх витоків даних
       *[many] Викритих паролів серед усіх витоків даних
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Відомий витік даних викрив вашу інформацію
        [few] Відомі витоки даних викрили вашу інформацію
       *[many] Відомих витоків даних викрили вашу інформацію
    }
# Button
see-additional-breaches = Переглянути додаткові витоки даних
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Ця електронна пошта з'явилася в 1 відомому витоці даних.
        [few] Ця електронна пошта з'явилася в { $breachCount } відомих витоках даних.
       *[many] Ця електронна пошта з'явилася в { $breachCount } відомих витоках даних.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Результати для: { $userEmail }
other-monitored-emails = Інші відстежувані адреси електронної пошти
email-verification-required = Необхідне підтвердження електронної пошти
fxa-primary-email = Електронна пошта { -brand-fxa(case: "gen") } - Основна
what-is-a-website-breach = Що таке витік даних вебсайту?
website-breach-blurb = Витік даних вебсайту відбувається, коли кібер-злочинці викрадають, копіюють, або розкривають особисту інформацію облікових записів інтернету. Зазвичай це результат роботи хакерів, які знаходять слабке місце в безпеці вебсайту. Витоки даних також можуть траплятися внаслідок випадкового розкриття інформації про облікові записи.
security-tips-headline = Поради щодо безпеки для захисту від хакерів
steps-to-protect = Що необхідно зробити для захисту ваших облікових даних в Інтернеті
take-further-steps = Виконайте такі кроки для захисту своїх облікових даних
alert-about-new-breaches = Повідомляти мене про нові витоки даних
see-if-youve-been-part = Дізнайтеся, чи потрапила ваша інформація до витоку даних в Інтернеті.
get-ongoing-breach-monitoring = Отримуйте постійне спостереження для декількох адрес електронної пошти.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Дізнатися
new-unsub-error = Вам необхідно буде скасувати підписку в одному з листів, отриманих від { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Однак, вона з'являється в { $breachCount } іншому відомих витоці даних.
        [few] Однак, вона з'являється в { $breachCount } інших відомих витоках даних.
       *[many] Однак, вона з'являється в { $breachCount } інших відомих витоках даних.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Додаткова інформація, включаючи:
# Title
email-addresses-title = Адреси електронної пошти
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Огляд
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }, відбувся витік даних { $breachTitle }. Одразу після виявлення і перевірки витоку даних, його було додано до нашої бази даних { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Налаштування { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Ви увійшли як: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Фільтр за категорією:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Меню
to-affected-email = Надсилати сповіщення про витоки даних на відповідні адреси електронної пошти
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Існує спосіб захистити вашу приватність. Приєднуйтесь до { -brand-name }.
# Link title
learn-more-link = Докладніше.
email-sent = Повідомлення надіслано!
# Form title
want-to-add = Хочете додати іншу адресу електронної пошти?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Перейдіть за посиланням, надісланим на { $userEmail } для додавання до { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Електронна пошта успішно перевірена!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Ми повідомимо вас, якщо { $email } з'явиться в новому витоку даних.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Щоб переглянути та керувати всіма електронними поштами, які ви зареєстрували для моніторингу порушень, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Увійти

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Керуйте всіма адресами електронної пошти: { $preferencesLink }
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Сповіщення про витоки даних
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Витік додано:
how-hackers-work-desc = Захистіть свої паролі від кібер-злочинців, тому що це саме те, що їм найбільше потрібно.
what-to-do-after-breach-desc = Заблокуйте доступ до своїх облікових записів, щоб захистити свою інформацію від сторонніх осіб.
create-strong-passwords-desc = Створюйте надійні, безпечні та складні паролі.
steps-to-protect-desc = Дізнайтеся про найбільш поширені загрози, а також на що необхідно звертати увагу.
five-myths-desc = Навчіться, як позбутися поганих звичок поводження з паролями, що роблять вас легкою здобиччю для хакерів.
take-further-steps-desc = Дізнайтеся, як зменшити ризики викрадення особистої інформації, щоб запобігти фінансовим збиткам.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Зміни збережено!
# Section headline
rec-section-headline = Що робити з цим витоком
rec-section-subhead = Ми рекомендуємо вжити цих заходів, щоб зберегти вашу особисту інформацію в безпеці й захистити свої цифрові дані.
# Section headline
rec-section-headline-no-pw = Що робити, щоб захистити свою особисту інформацію
rec-section-subhead-no-pw = Хоча паролі не було викрито в цьому витоці, все ж можна вжити заходів для кращого захисту особистої інформації.
# Button
see-additional-recs = Перегляньте додаткові рекомендації

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } з'явився в цьому витоці. <a>Що робити далі?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } з ваших електронних адрес з'явилася в цьому витоці. <a>Що робити далі?</a>
        [few] { $numAffectedEmails } з ваших електронних адрес з'явилася в цьому витоці. <a>Що робити далі?</a>
       *[many] { $numAffectedEmails } з ваших електронних адрес з'явилася в цьому витоці. <a>Що робити далі?</a>
    }

##

marking-this-subhead = Позначення цього витоку вирішеним
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Як тільки ви вжили заходів щодо усунення цього витоку</span>,
    можете позначити його вирішеним. Ви й надалі зможете переглядати подробиці  
    про цей витік на своїй панелі стану в будь-який час.
mark-as-resolve-button = Позначити вирішеним
marked-as-resolved-label = Позначено вирішеним
undo-button = Скасувати
confirmation-1-subhead = Чудово! Ви щойно вирішили свій перший витік даних.
confirmation-1-body = Не зупиняйтесь на цьому. Перевірте свою панель стану, щоб побачити чи необхідно виконати інші дії.
confirmation-2-subhead = Ось так вам, хакери!
confirmation-2-body = Ви робите важливі кроки для захисту своїх облікових даних в Інтернеті.
confirmation-3-subhead = Ще один готовий. Гарна робота!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Ваш новий пароль унікальний, сильний та його важко вгадати? <a>Перевірте</a>
generic-confirmation-subhead = Цей витік було позначено як вирішений
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Щоб побачити останній витік, перейдіть до вашої панелі стану.
        [few] Щоб побачити інші витоки, перейдіть до вашої панелі стану.
       *[many] Щоб побачити інші витоки, перейдіть до вашої панелі стану.
    }
return-to-breach-details-link = Повернутися до подробиць витоку
go-to-dashboard-link = Перейти до панелі стану
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% завершено
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } вирішений
        [few] { $numResolvedBreaches } вирішені
       *[many] { $numResolvedBreaches } вирішених
    }
progress-intro-subhead = Нове в { -product-name }: Позначайте витоки вирішеними
progress-intro-message =
    Після перегляду подробиць про витік та вжиття заходів щодо захисту 
    вашої особистої інформації, ви можете позначити витік вирішеним.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } витік з { $numTotalBreaches } позначено вирішеним
        [few] { $numResolvedBreaches } витоки з { $numTotalBreaches } позначено вирішеними
       *[many] { $numResolvedBreaches } витоків з { $numTotalBreaches } позначено вирішеними
    }
progress-complete = Усі відомі витоки позначено вирішеними

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Чудовий початок</span> Перевірте інші витоки, щоб дізнатися 
    які кроки вжити.
progress-message-2 =
    <span>Продовжуйте!</span> Невеликі зміни, такі як оновлення паролів, мають великий вплив на
    збереження вашої особистої інформації.
progress-message-3 = <span>Гарна робота з вирішення цих витоків!</span> Так тримати. Вам слід ще дещо зробити.
progress-message-4 = <span>Майже готово!</span> Ви вже майже закінчили.
progress-complete-message =
    <span>Стало краще, чи не так?</span> Якщо ви хочете продовжити, зараз саме час 
    оновити інші паролі більш надійними.

##

resolve-this-breach-link = Позначити витік вирішеним
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Позначено вирішеним:
hide-resolved-button = Сховати вирішені
show-resolved-button = Показати вирішені
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Викритий пароль у невирішених витоках
        [few] Викриті паролі у невирішених витоках
       *[many] Викритих паролів у невирішених витоках
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Відомий витік даних позначено вирішеним
        [few] Відомі витоки даних позначено вирішеними
       *[many] Відомих витоків даних позначено вирішеними
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Новий
mobile-promo-headline = Встановіть { -brand-name } на свій телефон і планшет
mobile-promo-body = Швидкий, приватний та безпечний перегляд всюди. Встановіть { -brand-name } з Google Play та App Store.
mobile-promo-cta = Отримати { -brand-name } на Android та iOS
promo-lockwise-headline = Майте доступ до своїх паролів всюди
lockwise-promo-body = Керуйте своїми паролями на всіх пристроях. Отримуйте до них безпечний доступ з комп'ютера, телефона чи планшета.
promo-lockwise-cta = Отримати { -brand-lockwise }
fpn-promo-headline = Замаскуйте своє розташування від вебсайтів та засобів стеження
promo-fpn-body = { -brand-fpn } блокує вебсайти та обробники даних, які створюють ваш рекламний профіль, маскуючи вашу справжню IP-адресу.
promo-fpn-cta = Отримати { -brand-fpn }
monitor-promo-headline = Дізнайтеся про нові витоки даних
monitor-promo-body = Отримуйте сповіщення, коли наступного разу ваша особиста інформація виявиться у відомому витоку даних.
ecosystem-promo-headline = Захистіть своє життя в Інтернеті за допомогою продуктів, орієнтованих на приватність
ecosystem-promo-body = Усі продукти { -brand-name } дотримуються нашої обіцянки стосовно особистих даних: Збирати менше. Зберігати в безпеці. Жодних секретів.
promo-ecosystem-cta = Переглянути всі прдукти
steps-to-resolve-headline = Кроки з розв'язання цього витоку
vpn-promo-headline = Настав час поліпшити вашу безпеку в Інтернеті.
vpn-promo-copy = Віртуальна приватна мережа { -brand-Mozilla } допомагає захистити ваше з’єднання з Інтернетом від хакерів та шпигунів.
vpn-promo-cta = Отримати { -brand-mozilla-vpn }
vpn-promo-headline-new = Заощаджуйте 50% із річною передплатою
vpn-promo-copy-new = Захистіть свої інтернет-дані та оберіть тарифний план VPN, який вас задовольнить.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Ваше місцеперебування: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Захистіть себе</em> за допомогою { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Захищено</em> за допомогою { -brand-mozilla-vpn }.
vpn-banner-title-1 = Ви захищені — дякуємо за використання { -brand-mozilla-vpn }.
vpn-banner-title-2 = Ваше місцеперебування може бути відстежено, якщо ви не використовуєте VPN.
vpn-banner-subtitle-2 = Захистіть своє місцеперебування та безпечно переглядайте вебсторінки за 3 кроки
vpn-banner-status-protected = Поточний стан: <em>Захищено ✓</em>
vpn-banner-status-not-protected = Поточний стан: <em>Не захищено ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-адреса: { $ip-address }
vpn-banner-step-1 = Передплатіть { -brand-mozilla-vpn }
vpn-banner-step-2 = Оберіть розташування VPN
vpn-banner-step-3 = Активуйте VPN та безпечно переглядайте в інтернеті
vpn-banner-cta = Отримати { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Розгорнути
# button to close panel
vpn-banner-cta-close = Закрити

## Relay and VPN educational/ad units

ad-unit-relay-cta = Дізнайтеся більше про { -brand-relay }
ad-unit-vpn-cta = Дізнайтеся більше про { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Як зберегти свою електронну адресу в таємниці?
# ad 2 heading
ad-unit-2-do-you-worry = Чи турбуєтеся ви про безпечність загальнодоступного Wi-Fi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Залишайтеся в грі!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } дає змогу підтримувати стабільне з'єднання безпечним і захищеним під час ігор або стримінгу фільмів.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Запобігає тротлінгу
# ad 3 list item 2
ad-unit-3-be-anywhere = Перебувайте у будь-якій точці світу
# ad 3 list item 3
ad-unit-3-access-more = Отримуйте доступ до більшої кількості матеріалів
# ad 4 heading
ad-unit-4-shopping-with = Покупки за допомогою масок електронної пошти
ad-unit-4-want-to-buy = Хочете купити щось в інтернеті й не знаєте або цілковито не довіряєте магазину?
ad-unit-4-shop-online = Використовуйте маску електронної пошти, коли ви здійснюєте покупки в інтернеті. Отримайте підтвердження на вашу справжню електронну пошту, а потім легко вимкніть маску в будь-який час.
# ad 5 heading
ad-unit-5-on-the-go = На ходу з { -brand-relay }
ad-unit-5-instantly-make = Миттєво створюйте власну маску електронної пошти, де б ви не були!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Під'єднуйтеся на ходу
ad-unit-5-privately-sign-in = Використовуйте маску електронної пошти, коли хочете приватно під'єднатися до інтернету у своїй улюбленій кав’ярні чи через загальнодоступний Wi-Fi
# ad 5 subheading 2
ad-unit-5-email-receipts = Отримуйте квитанції електронною поштою
ad-unit-5-share-custom-email = Поділіться власною маскою електронної пошти для одержання квитанцій про покупки в магазині, не повідомляючи свою справжню електронну адресу
# ad 5 subheading 3
ad-unit-5-use-on-phone = Користуйтеся на телефоні
ad-unit-5-no-matter-where = Незалежно від того, де ви знаходитесь, створіть власну маску електронної пошти за лічені секунди з будь-якою метою
# ad 6 heading
ad-unit-6-worry-free = Реєстрація без турбот
ad-unit-6-want-to-start = Хочете розпочати нову підписку, відповісти на запрошення або отримати вигідний промокод без спаму в теці «Вхідні»?
ad-unit-6-before-you-complete = Перш ніж здійснити наступну реєстрацію, використовуйте маску електронної пошти замість справжньої, щоб захистити свою інформацію та зберегти контроль над своєю поштою

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Преміум
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [gen]
            { $capitalization ->
                [upper] Облікового запису Mozilla
               *[lower] облікового запису Mozilla
            }
        [dat]
            { $capitalization ->
                [upper] Обліковому запису Mozilla
               *[lower] обліковому запису Mozilla
            }
        [acc]
            { $capitalization ->
                [upper] Обліковий запис Mozilla
               *[lower] обліковий запис Mozilla
            }
        [abl]
            { $capitalization ->
                [upper] Обліковим записом Mozilla
               *[lower] обліковим записом Mozilla
            }
        [loc]
            { $capitalization ->
                [upper] Обліковому записі Mozilla
               *[lower] обліковому записі Mozilla
            }
       *[nom]
            { $capitalization ->
                [upper] Обліковий запис Mozilla
               *[lower] обліковий запис Mozilla
            }
    }
open-in-new-tab-alt = Відкрити посилання в новій вкладці

## Search Engine Optimization

meta-desc-2 = Дізнайтеся за допомогою { -brand-fx-monitor }, чи були скомпрометовані ваші дані. Ми допоможемо вам зрозуміти, що робити далі, і постійно відстежуватимемо нові витоки.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Увійти
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Розв'язати витоки даних
site-nav-settings-link = Налаштування
site-nav-help-link = Довідка та підтримка
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Спробуйте інші наші інструменти безпеки:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Головне меню
main-nav-button-collapse-label = Згорнути меню
main-nav-button-collapse-tooltip = Згорнути меню
main-nav-button-expand-label = Розгорнути меню
main-nav-button-expand-tooltip = Розгорнути меню
main-nav-label = Навігація
main-nav-link-home-label = Домівка
main-nav-link-dashboard-label = Панель керування
main-nav-link-settings-label = Налаштування
main-nav-link-faq-label = Поширені запитання
main-nav-link-faq-tooltip = Поширені запитання

## User menu

# Obsolete
menu-button-title = Меню користувача
# Obsolete
menu-button-alt = Відкрити меню користувача
# Obsolete
menu-list-accessible-label = Меню облікового запису
# Obsolete
menu-item-fxa-2 = Керуйте своїм { -brand-mozilla-account(case: "abl") }
# Obsolete
menu-item-settings = Налаштування
# Obsolete
menu-item-help = Довідка та підтримка
# Obsolete
menu-item-logout = Вийти
user-menu-trigger-label = Відкрити меню користувача
user-menu-trigger-tooltip = Профіль
user-menu-manage-fxa-label = Керуйте своїм { -brand-mozilla-account }
user-menu-settings-label = Налаштування
user-menu-settings-tooltip = Сконфігурувати { -brand-mozilla-monitor }
user-menu-help-label = Довідка та підтримка
user-menu-help-tooltip = Отримати довідку про користування { -brand-mozilla-monitor }
user-menu-signout-label = Вийти
user-menu-signout-tooltip = Вийти з { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Умови надання послуг
privacy-notice = Положення про приватність
github = { -brand-github }
footer-nav-all-breaches = Усі витоки
footer-external-link-faq-label = Поширені запитання
footer-external-link-faq-tooltip = Поширені запитання

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Сторінку не знайдено
error-page-error-404-copy = На жаль, сторінки, яку ви шукаєте, більше не існує.
error-page-error-404-cta-button = Назад
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Щось пішло не так
error-page-error-other-copy = Спробуйте ще раз або поверніться пізніше

## Breach overview page

all-breaches-headline-2 = Усі витоки, виявлені { -brand-fx-monitor }
all-breaches-lead = Ми відстежуємо всі відомі витоки даних, щоб з’ясувати, чи була скомпрометована ваша особиста інформація. Ось повний список усіх витоків, про які було повідомлено з 2007 року.
search-breaches = Пошук витоків
# the kind of user data exposed to hackers in data breach.
exposed-data = Дата витоку:

## Public breach detail page

find-out-if-2 = Дізнайтеся, чи були ваші дані в цьому витоці
find-out-if-description = Ми допоможемо вам швидко з’ясувати, чи було розкрито вашу електронну адресу внаслідок цього витоку, і зрозуміти, що робити далі.
breach-detail-cta-signup = Перевірити на витік даних

## Floating banner

floating-banner-text = Підвищте онлайн-безпеку за допомогою новин, порад і оновлень від { -brand-Mozilla }.
floating-banner-link-label = Зареєструватись
floating-banner-dismiss-button-label = Ні, дякую

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: нова назва, зовнішній вигляд і ще більше способів <b>відновити вашу приватність</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Відхилити
loading-accessibility = Завантаження
