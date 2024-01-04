exposure-landing-hero-heading = Дізнайтеся, чи була ваша особиста інформація скомпрометована
exposure-landing-hero-lead = Будьте в безпеці завдяки інструментам від розробників { -brand-firefox }, які захищають від хакерів та компаній, що оприлюднюють і продають вашу особисту інформацію. Ми повідомимо вас про будь-які відомі витоки даних, знайдемо й вилучимо розкриту інформацію, а також постійно спостерігатимемо за майбутніми витоками.
exposure-landing-hero-email-label = Адреса електронної пошти
exposure-landing-hero-email-placeholder = Введіть адресу е-пошти
exposure-landing-hero-cta-label = Перевірити наявність витоків

exposure-landing-result-loading = Завантажується…
exposure-landing-result-error = Під час перевірки на наявність витоків щось пішло не так. Оновіть сторінку та повторіть спробу.

# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Ми знайшли <email>{ $email }</email>, розкритий в <count>1</count> витоку даних.
        [few] Ми знайшли <email>{ $email }</email>, розкритий у <count>{ $count }</count> витоках даних.
       *[many] Ми знайшли <email>{ $email }</email>, розкритий у <count>{ $count }</count> витоках даних.
    }

exposure-landing-result-card-added = Витік додано:
exposure-landing-result-card-data = Викриті дані:
exposure-landing-result-card-nothing = Витоків не знайдено

exposure-landing-result-footer-attribution = Витоки даних надаються <hibp-link>{ -brand-HIBP }</hibp-link>

exposure-landing-result-overflow-hero-lead = Увійдіть, щоб дізнатися як усунути наслідки цих витоків та переглянути інші, а також отримувати сповіщення про нові відомі витоки в майбутньому.
exposure-landing-result-overflow-hero-cta-label = Увійдіть для розв'язання витоків
exposure-landing-result-overflow-footer-cta-label = Увійдіть, щоб переглянути всі

exposure-landing-result-some-hero-lead = Увійдіть, щоб отримати вказівки щодо усунення наслідків, переглянути всі витоки та отримувати сповіщення про нові відомі витоки в майбутньому.
exposure-landing-result-some-hero-cta-label = Увійдіть для розв'язання витоків
exposure-landing-result-some-footer-cta-label = Увійдіть для розв'язання витоків

exposure-landing-result-none-hero-lead = Гарні новини! Не знайдено відомих витоків даних. Підпишіться на оновлення, щоб залишатися в безпеці. Ми й надалі стежитимемо за цією адресою електронної пошти й повідомимо, якщо вона з'явиться в новому витоці.
exposure-landing-result-none-hero-cta-label = Отримувати сповіщення про нові витоки
exposure-landing-result-none-footer-cta-label = Підписатися на сповіщення
