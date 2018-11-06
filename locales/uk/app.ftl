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
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Підтримка
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Залишити відгук
terms-and-privacy = Умови та конфіденційність
error-not-subscribed = Ця адреса електронної пошти не підписана на { -product-name }.
error-hibp-throttled = Надто багато з'єднань з { -brand-HIBP }.
error-hibp-connect = Помилка з'єднання з { -brand-HIBP }.
error-hibp-load-breaches = Не вдалося завантажити інформацію про загрози.
hibp-notify-email-subject = Попередження { -product-name }: Ваш обліковий запис знаходиться під загрозою.
home-title = { -product-name }
home-not-found = Сторінку не знайдено.
oauth-invalid-session = Недійсний ідентифікатор сеансу
oauth-confirmed-title = { -product-name } : Ви підписані
scan-title = { -product-name } : Результати сканування
user-add-invalid-email = Неправильна адреса електронної пошти
user-add-email-verify-subject = Підтвердьте вашу підписку на { -product-name }.
user-add-title = { -product-name } : Підтвердити е-пошту
user-verify-token-error = Необхідний токен підтвердження.
user-verify-email-report-subject = Ваш звіт від { -product-name }
user-verify-title = { -product-name } : Ви підписані
user-unsubscribe-token-error = Для скасування підписки необхідний токен.
user-unsubscribe-token-email-error = Для скасування підписки необхідний токен і emailHash.
user-unsubscribe-title = { -product-name } : Відписатися
user-unsubscribe-survey-title = { -product-name } : Чому ви відписалися
user-unsubscribed-title = { -product-name } : Підписку скасовано

## Password Tips

pwt-section-headline = Надійніші паролі = Кращий захист
pwt-section-subhead = Ваша особиста інформація настільки захищена, наскільки надійні ваші паролі.
pwt-section-blurb = Ваші паролі захищають не лише облікові записи. Вони захищають кожен біт особистої інформації, пов'язаної з ними. Але хакери покладаються на погані звички, такі як використання всюди однакового пароля, або використання звичайних фраз (наприклад, p@ssw0rd), отже якщо вони зламають один обліковий запис, то можуть потім зламати багато інших. Ось, як краще захистити ваші облікові записи.
pwt-headline-1 = Використовуйте різні паролі для кожного облікового запису
pwt-summary-1 =
    Використання всюди однакового пароля залишає відкритими двері для викрадання облікових даних. 
    Будь-хто, маючи цей пароль, може увійти в усі ваші облікові записи.
pwt-headline-2 = Створюйте надійні, важкодоступні паролі
pwt-summary-2 =
    Хакери використовують тисячі звичайних паролів, щоб спробувати вгадати ваш.
    Чим довший і унікальніший ваш пароль, тим складніше буде його викрасти.
pwt-headline-3 = Розглядайте запитання для відновлення паролю, як додаткові паролі
pwt-summary-3 =
    Веб-сайти не перевіряють правильність ваших відповідей, вони перевіряють лише їх відповідність.
    Створюйте довгі, випадкові відповіді на запитання для відновлення пароля й зберігайте їх у надійному місці.
pwt-headline-4 = Отримайте допомогу із запам'ятовуванням паролів
pwt-summary-4 =
    Менеджери паролів 1Password, LastPass, Dashlane та Bitwarden генерують надійні, унікальні паролі. 
    Вони також зберігають їх у захищеному сховищі та автоматично заповнюють на веб-сайтах замість вас.
pwt-headline-5 = Збільште захист за допомогою двохетапної перевірки
pwt-summary-5 =
    Двохетапна перевірка вимагає додаткову інформацію для входу в обліковий запис (наприклад, одноразовий код з текстового повідомлення).
    В такому разі, навіть якщо хтось має ваш пароль, він не зможе отримати доступ.
pwt-headline-6 = Підпишіться на попередження від { -product-name-nowrap }
pwt-summary-6 = Компрометація даних веб-сайтів відбувається все частіше. Як тільки інформація про новий витік з'являється в нашій базі даних, { -product-name-nowrap } надсилає вам попередження — щоб ви змогли виконати необхідні дії для захисту свого облікового запису.
landing-headline = Ваше право бути захищеними від хакерів починається тут.
landing-blurb =
    { -product-name-nowrap } озброює вас засобами для збереження особистої інформації в безпеці. 
    Перевірте, що хакери вже знають про вас та дізнайтеся, як бути на крок попереду від них.
scan-label = Перевірте, чи ви не стали жертвою компрометації даних.
scan-placeholder = Введіть адресу е-пошти
scan-privacy = Адреси електронної пошти не зберігатимуться.
scan-submit = Пошук адреси е-пошти
scan-another-email = Сканувати іншу адресу е-пошти
scan-featuredbreach-label = Дізнайтеся, чи був скомпрометований ваш обліковий запис <span class="bold"> { $featuredBreach } </span>.
scan-error = Необхідно вказати правильну адресу електронної пошти.
signup-banner-headline = { -product-name-nowrap } виявляє загрози для ваших облікових записів в інтернеті.
signup-banner-blurb =
    Ваш докладний звіт від { -product-name-nowrap } показує чи було викрадено інформацію з ваших облікових записів.
    Ми також попереджатимемо вас, якщо ваші облікові записи з'являться в нових витоках даних.
download-firefox-bar-blurb = { -product-name-nowrap } доступний для вас в <span class="nowrap">цілком новому { -brand-name }</span>.
download-firefox-bar-link = Завантажити { -brand-name }
download-firefox-banner-blurb = Візьміть ваш браузер під контроль
download-firefox-banner-button = Завантажити { -brand-name }
signup-modal-headline = Підписатися на { -product-name-nowrap }
signup-modal-blurb = Підпишіться для отримання повного звіту, попереджень про нові загрози, а також порад щодо безпеки від { -product-name-nowrap }.
signup-modal-close = Закрити
get-your-report = Отримати звіт
signup-modal-verify-headline = Підтвердьте свою підписку
