# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Щоб підтвердити свій обліковий запис у Firefox Monitor, упродовж 24 годин натисніть кнопку Підтвердити електронну пошту. Після цього ви отримаєте звіт.
verify-my-email = Підтвердити електронну пошту
report-scan-another-email = Сканувати іншу адресу електронної пошти в { -product-name }
automated-message = Це автоматичне повідомлення; якщо ви отримали його помилково, не реагуйте на нього.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Ми надіслали це повідомлення на адресу { $userEmail }, оскільки вона підписана на звіти з { -product-name }.
unsubscribe-email-link = Якщо ви більше не хочете отримувати попередження від { -product-name }, скасуйте підписку.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Звіт { -product-name }
report-date = Дата звіту:
email-address = Адреса електронної пошти:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Що робити далі
report-headline =
    { $breachCount ->
        [0] Наразі все гаразд.
        [one] Ваш обліковий запис з'явився в { $breachCount } витоку даних.
        [few] Ваш обліковий запис з'явився в { $breachCount } витоках даних.
       *[other] Ваш обліковий запис з'явився в { $breachCount } витоках даних.
    }
report-subhead-no-breaches =
    Ваш обліковий запис не з'являється в нашому повному звіті вразливостей.
    Це гарна новина, але ви можете зробити ще дещо.
    Викрадання даних може відбутися в будь-який момент, тож ознайомтеся, як ви можете захистити свою інформацію.
report-subhead-found-breaches = Ось ваш повний звіт від Firefox Monitor, що містить усі відомі скомпрометовані дані, які стосуються цієї адреси електронної пошти.
report-pwt-blurb =
    Паролі є настільки цінними, що тисячі викрадаються щодня і потім продаються на чорному ринку. 
    Надійніші паролі захищають ваші облікові записи та всю особисту інформацію, пов'язану з ними.
report-pwt-headline-1 = Використовуйте різні паролі для кожного облікового запису
report-pwt-summary-1 =
    Використання однакового паролю всюди відкриває двері для хакерів. 
    Вони можуть використовувати ваш пароль для доступу до ваших інших облікових записів.
report-pwt-headline-2 = Створюйте надійні, унікальні паролі
report-pwt-summary-2 =
    Хакери використовують списки звичайних паролів, щоб спробувати вгадати ваш.
    Чим довший і унікальніший ваш пароль, тим складніше буде його викрасти.
report-pwt-headline-3 = Розглядайте запитання для відновлення паролю, як додаткові паролі
report-pwt-summary-3 =
    Веб-сайти не перевіряють правильність ваших відповідей, вони перевіряють лише їх відповідність.
    Створюйте довгі, випадкові відповіді на запитання для відновлення паролю й зберігайте їх у надійному місці.
report-pwt-headline-4 = Використовуйте менеджер паролів
report-pwt-summary-4 =
    Такі сервіси, як 1Password, LastPass, Dashlane та Bitwarden генерують надійні паролі і зберігають їх в безпеці, 
    а також заповнюють їх на веб-сайтах, тож вам не потрібно пам'ятати їх усі.
# A link to legal information about mozilla products.
legal = Юридична інформація
# Share Firefox Monitor by email subject line
share-by-email-subject = Перевірте, чи ваші дані не було викрито.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Привіт,
    { -brand-name } має безплатний сервіс, де ви можете перевірити, чи ваші дані не було викрито. Ось, як це працює:
    1. Перейдіть до { "https://monitor.firefox.com" } і виконайте пошук за своєю адресою електронної пошти.
    2. Перевірте, чи ваші дані не було викрито зловмисниками.
    3. Отримайте поради від { -product-name } про подальші дії.
# Unsubscribe link in email.
email-unsub-link = Відписатися
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Ви отримали цей лист, тому що ви підписалися на сповіщення від { -product-name }.
    Більше не хочете отримувати такі повідомлення? { $unsubLink }. Це автоматичний електронний лист. Для отримання допомоги, відвідайте { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Ви отримали цей лист, тому що ви підписалися на сповіщення від { -product-name }.
    Це автоматичний електронний лист. Для отримання допомоги, відвідайте { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Переглянути мою панель
# Button text
verify-email-cta = Підтвердити адресу е-пошти
# Button text
see-all-breaches = Переглянути всі витоки даних
# Headline of verification email
email-link-expires = Це посилання втратить дію через 24 години
email-verify-blurb = Підтвердьте цю е-пошту, щоб додати її до { -product-name } і підписатися на сповіщення про витоки даних.
# Email headline
email-found-breaches-hl = Ось ваш підсумок про минулі витоки даних
# Email headline
email-breach-summary-for-email = Підсумок витоків даних для { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } відсутня у відомих витоках даних.
# Email headline
email-alert-hl = { $userEmail } з'явилася в новому витоці даних
# Subject line of email
email-subject-found-breaches = { -product-name } знайшов вашу інформацію в цих витоках даних
# Subject line of email
email-subject-no-breaches = { -product-name } не знайшов відомих витоків даних
# Subject line of email
email-subject-verify = Підтвердьте свою е-пошту для { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Дізнайтеся більше про { $fxmLink }
email-sensitive-disclaimer =
    У зв'язку з вразливістю цього витоку даних, адреси електронної пошти не оприлюднюються. 
    Ви отримуєте це попередження, тому що ви підтвердили власність цієї електронної адреси.
fxm-warns-you-no-breaches =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Поки що таких витоків не знайдено. Ми надішлемо вам сповіщення, якщо ваша е-пошта з'явиться в новому витоці даних.
fxm-warns-you-found-breaches =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Ви також підписалися на отримання повідомлень, якщо ваша е-пошта з'явиться в новому витоці даних.
email-breach-alert-blurb =
    { -product-name } попереджає вас про витоки даних, що містять вашу особисту інформацію. 
    Ми щойно отримали подробиці про витік даних, що стався в іншій компанії.
# List headline
faq-list-headline = Часті питання
# Link Title
faq-v2-1 = Я не впізнаю цю компанію чи веб-сайт. Чому мої дані потрапили до цього витоку?
# Link Title
faq-v2-2 = Чи потрібно мені щось робити, якщо витік даних стався багато років тому або цей обліковий запис застарілий?
# Link Title
faq-v2-3 = Мені щойно стало відомо, що мої дані потрапили до витоку даних. Що мені робити?
# Link Title
faq-v2-4 = Як { -product-name } обробляє ці вразливі сайти?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Зареєструйтеся в { -brand-fxa(case: "dat") }</a> і ви зможете додати до 15 адрес електронної пошти.
# Section headline
monitor-another-email = Хочете контролювати іншу електронну пошту?
