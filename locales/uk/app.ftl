# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Обліковий запис Firefox
terms-and-privacy = Умови та конфіденційність
GitHub-link-title = GitHub
error-scan-page-token = Ви намагалися сканувати забагато адрес електронної пошти за короткий проміжок часу. З міркувань безпеки ми тимчасово заблокували вам доступ до нових пошуків. Ви зможете спробувати знову пізніше.
error-could-not-add-email = Не вдалося додати адресу електронної пошти до бази даних.
error-not-subscribed = Ця адреса електронної пошти не підписана на { -product-name }.
error-hibp-throttled = Надто багато з'єднань з { -brand-HIBP }.
error-hibp-connect = Помилка з'єднання з { -brand-HIBP }.
error-hibp-load-breaches = Не вдалося завантажити інформацію про загрози.
error-must-be-signed-in = Ви повинні увійти в { -brand-fxa }.
home-title = { -product-name }
home-not-found = Сторінку не знайдено.
oauth-invalid-session = Недійсний ідентифікатор сеансу
scan-title = { -product-name } : Результати сканування
user-add-invalid-email = Неправильна адреса електронної пошти
user-add-email-verify-subject = Підтвердьте вашу підписку на { -product-name }.
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
hibp-attribution = Дані про загрози надано { $hibp-link }
share-twitter = Більшість людей мають близько 100 облікових записів онлайн. Чи було викрито зловмисниками будь-які з ваших? Дізнайтеся.
share-facebook-headline = Дізнайтеся, чи ваші дані не було викрито
share-facebook-blurb = Чи виявлено ваші дані у викритті?
og-site-description = Дізнайтеся за допомогою { -product-name }, чи ваші дані не було викрито. Підпишіться на отримання попереджень про майбутні порушення та отримання порад щодо безпеки ваших облікових записів.
show-all = Показати все
fxa-scan-another-email = Хочете перевірити іншу електронну пошту?
sign-in = Увійти
sign-out = Вийти
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Керувати { -brand-fxa }
have-an-account = Вже маєте обліковий запис?
fxa-pwt-summary-2 =
    Короткі паролі у вигляді одного слова є легкою здобиччю для хакерів.
    Використовуйте принаймні два слова разом з комбінацією літер, цифр і спеціальних символів.
fxa-pwt-summary-4 =
    Менеджери паролів, на зразок 1Password, LastPass, Dashlane та Bitwarden зберігають ваші 
    паролі та автоматично вводять їх на веб-сайтах. Вони навіть допомагають вам створювати надійні паролі.
fxa-pwt-summary-6 =
    Кількість витоків даних зростає. Якщо ваша особиста інформація з'явилася в новому витоку даних,
    { -product-name } надішле вам попередження, щоб ви могли виконати необхідні дії для захисту.
fxa-what-to-do-blurb-1 =
    Якщо вам не вдається увійти, зв'яжіться з веб-сайтом і запитайте, як це виправити.
    Не впізнаєте свій обліковий запис? Ваші дані могли бути продані або передані стороннім особам.
    Це також може бути обліковий запис, про який ви забули, або компанія змінила його дані.
fxa-what-to-do-subhead-2 = Припиніть використовувати викритий пароль та змініть його всюди.
fxa-wtd-blurb-2 =
    Хакери можуть намагатися використати вашу електронну пошту і пароль для доступу до інших
    облікових записів. Створіть унікальний пароль для кожного облікового запису, особливо
    для банків, електронної пошти та інших веб-сайтів з особистими даними.
fxa-what-to-do-blurb-3 =
    Більшість витоків даних розкривають лише електронну пошту і паролі, але деякі можуть також включати
    вразливу фінансову інформацію. Якщо ваш банківський рахунок чи номер кредитної картки було викрито,
    повідомте свій банк про можливість шахрайства. Перевіряйте свої виписки на наявність несанкціонованих списань коштів.
fxa-what-to-do-subhead-4 = Отримайте допомогу з організації та зберігання паролів у безпеці.
fxa-what-to-do-blurb-4 =
    Менеджери паролів, на зразок 1Password, LastPass, Dashlane та Bitwarden зберігають ваші 
    паролі в безпеці та автоматично вводять їх на веб-сайтах. Використовуйте менеджер паролів
    на своєму телефоні та комп'ютері, щоб вам не доводилося запам'ятовувати їх.
# Alerts is a noun
sign-up-for-alerts = Підписатися на попередження
# Link title
frequently-asked-questions = Часті питання
about-firefox-monitor = Про { -product-name }
# Link title
preferences = Налаштування
# Link title
home = Домівка
# Link title
breaches = Витік даних
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
monitor-your-online-accounts = Підпишіться на повідомлення про витік даних за допомогою { -brand-fxa }.
stay-alert = Дізнавайтеся про нові витоки даних
if-your-info = Якщо ваша інформація опиниться в новому витоку даних, ми надішлемо вам повідомлення.
search-all-emails = Перевірте всі ваші адреси електронної пошти та отримуйте повідомлення про нові загрози.
monitor-several-emails = Відслідковуйте декілька адрес електронної пошти
take-action = Вживайте заходів для захисту своїх облікових записів
keep-your-data-safe = Дізнайтеся, що потрібно зробити для збереження ваших даних від кіберзлочинців.
website-breach = Витік даних із сайту
sensitive-breach = Витік конфіденційної інформації з сайту
data-aggregator-breach = Витік даних з агрегатора
unverified-breach = Непідтверджений витік даних
spam-list-breach = Витік списку надсилання спаму
website-breach-plural = Витоки даних із сайту
sensitive-breach-plural = Витоки конфіденційної інформації
data-aggregator-breach-plural = Витоки даних з агрегатора
unverified-breach-plural = Непідтверджені витоки даних
spam-list-breach-plural = Витоки списку надсилання спаму
what-data = Які дані скомпрометовані:
sensitive-sites = Як { -product-name } ставиться до сайтів з конфіденційною інформацією?

## What to do after data breach tips


## Updated error messages

