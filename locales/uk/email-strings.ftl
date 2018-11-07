# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Ось ваш повний звіт від { -product-name }, який містить усю відому скомпрометовану інформацію, пов'язану з цією адресою електронної пошти.
report-no-breaches =
    Ваша адреса електронної пошти не з'являлася в нашій базі даних відомих скомпрометованих даних. 
    Але витік даних може статися в будь-який час. Виконайте ці кроки, щоб утримувати свої особисті дані в безпеці онлайн.
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
breach-alert-headline = Ваш обліковий запис було виявлено серед скомпрометованих даних.
breach-alert-subhead = Нещодавно оновлений звіт про витік даних містить вашу адресу електронної пошти з такою інформацією
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
