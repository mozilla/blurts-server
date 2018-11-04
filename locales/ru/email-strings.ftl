# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Вот ваш полный отчёт { -product-name }, который включает в себя все известные утечки данных, содержащие этот адрес электронной почты.
report-no-breaches =
    Ваш адрес электронной почты не найден в нашей базе данных об известных утечках данных.
    Но они могут произойти в любое время. Выполните следующие действия, чтобы защитить ваши личные данные в Интернете.
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
breach-alert-headline = Ваш аккаунт стал жертвой компрометации данных.
breach-alert-subhead = Последний отчёт о скомпрометированных данных содержит вашу электронную почту и следующие данные
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
