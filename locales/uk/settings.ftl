# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Налаштування
settings-page-title = Налаштування { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Налатування попереджень про витоки
settings-alert-preferences-option-one = Надсилати сповіщення про витоки даних на відповідні адреси електронної пошти
settings-alert-preferences-option-two = Надсилати попередження про всі витоки на основну адресу електронної пошти

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (основна)
settings-email-list-title = Відстежувані адреси електронної пошти
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ваш обліковий запис включає моніторинг { $limit } адреси електронної пошти.
        [few] Ваш обліковий запис включає моніторинг до { $limit } адрес електронної пошти.
        [many] Ваш обліковий запис включає моніторинг до { $limit } адрес електронної пошти.
       *[other] Ваш обліковий запис включає моніторинг { $limit } адрес електронної пошти.
    }
settings-email-verification-callout = Необхідне підтвердження електронної пошти
settings-resend-email-verification-link = Надіслати лист підтвердження ще раз
settings-add-email-button = Додати адресу електронної пошти
# Deprecated
settings-delete-email-button = Видалити адресу е-пошти
settings-remove-email-button-label = Вилучити
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Припинити моніторинг { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] З'являється в { $breachCount } відомому витоці даних.
        [few] З'являється в { $breachCount } відомих витоках даних.
        [many] З'являється в { $breachCount } відомих витоках даних.
       *[other] З'являється в { $breachCount } відомих витоках даних.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Скасувати передплату { -brand-premium }
settings-cancel-premium-subscription-info = Ваша передплата скасується і після завершення платіжного періоду ви перейдете на безплатний обліковий запис. Ваші результати сканування захисту приватності будуть остаточно видалені й у вас залишиться лише відстеження витоків даних для однієї адреси е-пошти.

## Deactivate account

settings-deactivate-account-title = Деактивувати обліковий запис
settings-deactivate-account-info-2 = Ви можете деактивувати { -product-short-name }, видаливши свій { -brand-mozilla-account }.
settings-fxa-link-label-3 = Перейти до налаштувань { -brand-mozilla-account(case: "gen") }

## Add email dialog

settings-email-dialog-title = Додати іншу електронну адресу
settings-add-email-text = Додайте нову адресу електронної пошти, щоб перевірити, чи була вона виявлена у витоці даних.
settings-email-input-label = Адреса електронної пошти
settings-send-email-verification-button = Надіслати посилання для підтвердження

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Нам шкода, що ви покидаєте нас. <br /> Чи не бажаєте розповісти нам чому?
settings-unsubscribe-dialog-info = Ваш досвід важливий для нас. Ми вивчаємо всі відповіді, щоб вдосконалити роботу.
settings-unsubscribe-dialog-message-placeholder = Що можна покращити?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Зауважте, що усі ваші послуги { -brand-monitor-premium } будуть <a { $faq_href }>остаточно видалені</a> після завершення поточного платіжного періоду.
settings-unsubscribe-dialog-continue = Продовжити скасування
settings-unsubscribe-dialog-cancel = Не зважайте, повернутися
