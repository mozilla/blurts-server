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
-brand-HIBP =
    {
        [nominative] Сервис Have I Been Pwned
        [genitive] Сервисом Have I Been Pwned
       *[dative] Сервису Have I Been Pwned
    }
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Поддержка
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Оставить отзыв
terms-and-privacy = Условия и конфиденциальность
error-not-subscribed = Этот адрес электронной почты не подписан на { -product-name }.
error-hibp-throttled = Слишком много попыток соединения с { -brand-HIBP[genitive] }.
error-hibp-connect = Ошибка подключения к { -brand-HIBP[dative] }.
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
user-verify-token-error = Требуется токен подтверждения.
user-verify-email-report-subject = Ваш отчёт от { -product-name }
user-verify-title = { -product-name } : Вы подписаны
user-unsubscribe-token-error = Чтобы отписаться необходим токен.
user-unsubscribe-token-email-error = Чтобы отписаться необходим токен и emailHash.
user-unsubscribe-title = { -product-name } : Отписаться
user-unsubscribed-title = { -product-name } : Вы отписались

## Password Tips

pwt-section-headline = Сложные пароли = Лучшая защита
pwt-headline-1 = Используйте разные пароли для разных аккаунтов
pwt-headline-2 = Создайте сложные, неугадываемые пароли
pwt-headline-4 = Получите помощь в запоминании ваших паролей
pwt-headline-6 = Подпишитесь на уведомления { -product-name-nowrap }
scan-placeholder = Введите адрес электронной почты
scan-privacy = Ваш адрес электронной почты не будет сохранён.
scan-submit = Поищите ваш адрес электронной почты
scan-another-email = Сканировать другой адрес электронной почты
scan-featuredbreach-label = Узнайте, был ли скомпрометирован ваш аккаунт <span class="bold"> { $featuredBreach } </span>.
scan-error = Должен быть действительным адресом электронной почты.
download-firefox-bar-link = Загрузить { -brand-name } сейчас
download-firefox-banner-blurb = Возьмите ваш браузер под контроль
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
form-signup-checkbox = Получите новинки от { -brand-Mozilla } и { -brand-name }.
sign-up = Подписаться
form-signup-error = Должен быть действительным адресом электронной почты
no-breaches-headline = Сейчас всё хорошо.
found-breaches-headline = Ваша информация стала жертвой компрометации данных.
show-more-breaches = Показать ещё
what-to-do-subhead-1 = Изменяйте свои пароли, даже для старых аккаунтов
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Дата компрометации:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Скомпрометированные аккаунты:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Скомпрометированные данные:
confirmed = Подтверждено!<br />Вы подписаны!
unsub-headline = Отписаться от уведомлений { -product-name-nowrap }
unsub-button = Отписаться
unsub-survey-headline = Вы больше не подписаны.
unsub-survey-form-label = Почему вы отписываетесь от уведомлений { -product-name-nowrap }?
unsub-reason-1 = Эти уведомления не помогают моим данным оставаться в безопасности
unsub-reason-2 = Я получаю слишком много писем от { -product-name-nowrap }
unsub-reason-3 = Мне кажется, сервис бесполезен
unsub-reason-4 = Я уже предпринял шаги для защиты своих аккаунтов
unsub-reason-5 = Я использую другой сервис для мониторинга своих аккаунтов
unsub-reason-6 = Ничего из вышеперечисленного
unsub-survey-thankyou = Спасибо за ваш отзыв.
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
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = Части этого содержимого созданы участниками проекта mozilla.org &#x24B8; 1998-2018. <br /> Содержимое доступно на условиях <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">лицензии Creative Commons</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Данные об угрозах предоставлены { $hibp-link }
