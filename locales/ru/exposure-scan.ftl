exposure-landing-hero-heading = Узнайте, не была ли ваша личная информация скомпрометирована
exposure-landing-hero-lead = Будьте в безопасности с инструментами конфиденциальности от создателей { -brand-firefox }, которые защищают вас от хакеров и компаний, которые публикуют и продают вашу личную информацию. Мы предупредим вас о любых известных утечках данных, найдем и удалим раскрытую информацию и будем постоянно следить за новыми утечками.
exposure-landing-hero-email-label = Адрес электронной почты
exposure-landing-hero-email-placeholder = Введите адрес электронной почты
exposure-landing-hero-cta-label = Проверить на утечки

exposure-landing-result-loading = Идёт загрузка. Пожалуйста, подождите…
exposure-landing-result-error = Что-то пошло не так при проверке на утечки. Пожалуйста, обновите страницу и повторите попытку.

# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Мы обнаружили, что <email>{ $email }</email> раскрыт в <count>{ $count }</count> утечке данных.
        [few] Мы обнаружили, что <email>{ $email }</email> раскрыт в <count>{ $count }</count> утечках данных.
       *[many] Мы обнаружили, что <email>{ $email }</email> раскрыт в <count>{ $count }</count> утечках данных.
    }

exposure-landing-result-card-added = Утечка добавлена:
exposure-landing-result-card-data = Раскрытые данные:
exposure-landing-result-card-nothing = Утечек не обнаружено

exposure-landing-result-footer-attribution = Данные об утечке данных предоставлены <hibp-link>{ -brand-HIBP }</hibp-link>

exposure-landing-result-overflow-hero-lead = Войдите, чтобы получить четкие инструкции по решению проблем с этими утечками, просмотреть все утечки и получить непрерывный мониторинг любых новых известных утечек.
exposure-landing-result-overflow-hero-cta-label = Войдите, чтобы обработать утечки
exposure-landing-result-overflow-footer-cta-label = Войдите, чтобы просмотреть все

exposure-landing-result-some-hero-lead = Войдите, чтобы получить четкие инструкции по решению проблем с этими утечками, просмотреть все утечки и получить непрерывный мониторинг любых новых известных утечек.
exposure-landing-result-some-hero-cta-label = Войдите, чтобы обработать утечки
exposure-landing-result-some-footer-cta-label = Войдите, чтобы обработать утечки

exposure-landing-result-none-hero-lead = Хорошие новости! Известных утечек не обнаружено. Обеспечьте свою безопасность, подписавшись на оповещения о новых утечках. Мы продолжим отслеживать эту электронную почту и сообщим вам, если она появится в новой утечке.
exposure-landing-result-none-hero-cta-label = Получать уведомления о новых утечках.
exposure-landing-result-none-footer-cta-label = Подписаться на уведомления
