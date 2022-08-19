# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Звіт { -product-name }
report-date = Дата звіту:
email-address = Адреса електронної пошти:
# A link to legal information about mozilla products.
legal = Правові положення
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
faq-list-headline = Часті запитання
# Link Title
faq-v2-1 = Я не впізнаю цю компанію чи вебсайт. Чому мої дані потрапили до цього витоку?
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
# Subject line of email
pre-fxa-subject = Оновлення від { -product-name }
pre-fxa-headline = Що змінюється з { -product-name }
pre-fxa-blurb =
    Ось, що змінилося відколи ви зареєструвалися в { -product-name }, службі, яка 
    стежить за появою вашої особистої інформації серед відомих витоків даних. Ми пов'язуємо його з Обліковими записами Firefox.
pre-fxa-tout-1 = Дізнавайтеся про більшу кількість витоків
pre-fxa-p-1 =
    <a>Створіть обліковий запис,</a> щоб відстежувати до 15 адрес електронної пошти 
    на появу серед витоків даних. Ми рекомендуємо додавати будь-які адреси, що використовувались для реєстрації в Інтернеті.
pre-fxa-tout-2 = Отримайте подання для огляду
pre-fxa-p-2 =
    Переглядайте усі витоки даних в одному місці, щоб знати, які паролі необхідно змінити. 
    Подання для огляду доступне лише з обліковим записом.
pre-fxa-tout-3 = Продовжуйте отримувати сповіщення електронною поштою
pre-fxa-p-3 =
    Ви й надалі отримуватимете сповіщення від { -product-name }. Ми повідомимо про появу 
    вашої інформації у новому витоці даних.
# Button at the bottom of pre-fxa email.
create-account = Створити обліковий запис
# More security products
more-products-headline = Захистіть себе, використовуючи більше наших продуктів
more-products-vpn = Повний захист усіх ваших пристроїв.
more-products-cta-vpn = Отримати { -product-name-vpn }
more-products-relay = Приховайте свою справжню електронну адресу, щоб захистити свою особистість.
more-products-cta-relay = Отримати { -product-name-relay }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Ви отримали цей автоматичний електронний лист, оскільки ви передплатили { -product-name }. <br>Ви можете будь-коли змінити свої параметри електронної пошти { $unsubscribe-link-attr }тут</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Дані про витоки даних надані <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

email-unresolved-heading = У вас є нерозв'язані витоки
email-unresolved-subhead = Вашу електронну адресу було розкрито. <br>Виправте це негайно за допомогою { -product-name }.
email-is-affected = Ваша електронна адреса { $email-address } помічена принаймні в одному витоці даних
email-more-detail = Увійдіть у { -product-name } зараз, щоб переглянути докладніші відомості про ваші витоки (зокрема, коли вони сталися та які дані було розкрито), а також дізнатися, що робити, якщо вашу електронну адресу виявлено у витоці даних.
email-breach-status = Поточний стан витоку
# table row 1 label
email-monitored = Загальна кількість відстежуваних електронних адрес:
# table row 2 label
email-breach-total = Загальна кількість витоків:
