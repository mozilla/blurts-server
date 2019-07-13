# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Чтобы подтвердить свой аккаунт Firefox Monitor, нажмите «Подтвердить мою электронную почту» в течение 24 часов.
    Сразу после этого мы отправим отчёт о ваших аккаунтах.
verify-my-email = Подтвердить мою электронную почту
report-scan-another-email = Сканировать другую электронную почту в { -product-name }
automated-message = Это автоматическое сообщение; если вы получили его по ошибке, не требуется никаких действий.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Мы отправили это сообщение на { $userEmail }, так как этот адрес электронной почты подписан на уведомления от { -product-name }.
unsubscribe-email-link = Если вы больше не хотите получать уведомления от { -product-name }, отпишитесь.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Отчёт { -product-name }
report-date = Дата отчёта:
email-address = Адрес электронной почты:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Что делать дальше
report-headline =
    { $breachCount ->
        [0] Сейчас всё хорошо.
        [one] Ваши аккаунты обнаружены в { $breachCount } атаке.
        [few] Ваши аккаунты обнаружены в { $breachCount } атаках.
       *[other] Ваши аккаунты обнаружены в { $breachCount } атаках.
    }
report-subhead-no-breaches =
    По результатам полной проверки ваши аккаунты в безопасности.
    Это хорошие новости, но вы можете сделать больше.
    Компрометация данных может произойти в любое время, поэтому прочитайте о том, как защитить свои пароли.
report-subhead-found-breaches = Вот ваш полный отчёт Firefox Monitor, который включает в себя все известные утечки данных, в которых фигурирует этот адрес электронной почты.
report-pwt-blurb =
    Пароли настолько ценны, что тысячи украденных из них каждый день продаются на чёрном рынке.
    Более сложные пароли защищают ваши аккаунты и всю личную информацию, которая находится внутри них.
report-pwt-headline-1 = Используйте разные пароли для разных аккаунтов
report-pwt-summary-1 =
    Повторное использование одного и того же пароля везде оставляет широко открытой дверь для кражи личных данных.
    Любой, у кого есть этот пароль, сможет войти во все ваши аккаунты.
report-pwt-headline-2 = Создавайте сложные, уникальные пароли
report-pwt-summary-2 =
    Хакеры используют списки популярных паролей, чтобы попытаться угадать ваши.
    Чем длиннее и уникальнее окажется ваш, тем сложнее будет его украсть.
report-pwt-headline-3 = Относитесь к вопросам для восстановления как к дополнительным паролям
report-pwt-summary-3 =
    Веб-сайты не проверяют, что ваши ответы на вопросы являются правдой, они просто проверяют, что они совпадают.
    Создавайте длинные случайные ответы и храните их где-нибудь в безопасности.
report-pwt-headline-4 = Используйте менеджер паролей
report-pwt-summary-4 = Такие сервисы, как 1Password, LastPass, Dashlane и Bitwarden, генерируют сложные пароли, а также надежно их хранят и автоматически их заполняют на веб-сайтах, так что вам не нужно помнить их все.
# A link to legal information about mozilla products.
legal = Юридическая информация
# Share Firefox Monitor by email subject line
share-by-email-subject = Проверьте, не стали ли вы жертвой утечки данных.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Привет!
    { -brand-name } имеет бесплатный сервис, где вы можете проверить, не стали ли вы жертвой утечки данных. Вот как это работает:
    1. Зайдите на { "https://monitor.firefox.com" } и выполните поиск по адресу своей электронной почты.
    2. Посмотрите, не были ли ваши аккаунты затронуты утечками данных.
    3. Получите подсказки от { -product-name } о том, что делать дальше.
# Unsubscribe link in email.
email-unsub-link = Отписаться
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Вы получили это письмо, потому что вы подписались на уведомления { -product-name }.
    Больше не хотите получать такие письма? { $unsubLink }. Это автоматическое письмо. Для получения помощи, посетите { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Вы получили это письмо, потому что вы подписались на уведомления { -product-name }.
    Это автоматическое письмо. Для получения помощи, посетите { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Посмотреть мою панель
# Button text
verify-email-cta = Подтвердить адрес эл. почты
# Headline of verification email
email-link-expires = Срок действия этой ссылки истекает через 24 часа
email-verify-blurb = Подтвердите адрес электронной почты, чтобы добавить его в { -product-name } и подписаться на уведомления об утечках.
# Email headline
email-found-breaches-hl = Вот ваша сводка прошлых утечек данных
# Email headline
email-breach-summary-for-email = Сводка утечек для { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } появлялся в 0 известных утечках данных
# Email headline
email-alert-hl = { $userEmail } появился в новой утечке данных
# Subject line of email
email-subject-found-breaches = { -product-name } нашел вашу информацию в этих утечках
# Subject line of email
email-subject-no-breaches = { -product-name } не обнаружил известных утечек
# Subject line of email
email-subject-verify = Подтвердите адрес электронной почты для { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Узнайте больше о { $fxmLink }
email-sensitive-disclaimer =
    Из-за чувствительного характера этой утечки соответствующие электронные адреса не раскрываются публично.
    Вы получили это предупреждение, потому что являетесь подтвержденным владельцем этого адреса электронной почты.
fxm-warns-you-no-breaches =
    { -product-name } предупреждает вас об утечках данных, связанных с вашей личной информацией.
    Пока никаких утечек не обнаружено. Мы отправим вам уведомление, если ваш адрес электронной почты появится в новой утечке.
fxm-warns-you-found-breaches =
    { -product-name } предупреждает вас об утечках данных, связанных с вашей личной информацией.
    Вы также подписаны на получение уведомлений, если ваш адрес электронной почты появится в новой утечке.
email-breach-alert-blurb =
    { -product-name } предупреждает вас об утечках данных, связанных с вашей личной информацией.
    Мы только что получили информацию об утечке данных другой компании.
# List headline
faq-list-headline = Часто задаваемые вопросы
# Link Title
faq-v2-1 = Я не узнаю одну из этих компаний или один из этих веб-сайтов. Почему эта утечка меня затронула?
# Link Title
faq-v2-2 = Нужно ли что-то делать, если утечка произошла несколько лет назад или это старый аккаунт?
# Link Title
faq-v2-3 = Я только что узнал(а), что меня затронула эта утечка данных. Что мне делать дальше?
# Link Title
faq-v2-4 = Как { -product-name } обращается с сайтами с конфиденциальной информацией?
