# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Налаштування { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Налатування попереджень про витоки
settings-alert-preferences-option-one = Надсилати сповіщення про витоки даних на відповідні адреси електронної пошти
settings-alert-preferences-option-two = Надсилати попередження про всі витоки на основну адресу електронної пошти

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Deactivate account

settings-deactivate-account-title = Деактивувати обліковий запис
settings-deactivate-account-info-2 = Ви можете деактивувати { -product-short-name }, видаливши свій { -brand-mozilla-account }.
settings-fxa-link-label-3 = Перейти до налаштувань { -brand-mozilla-account(case: "gen") }

## Delete Monitor account

settings-delete-monitor-free-account-title = Видалити обліковий запис { -brand-monitor }
settings-delete-monitor-free-account-description = Ваш обліковий запис буде видалено остаточно { -brand-monitor }, а всі сповіщення – вимкнено.
settings-delete-monitor-free-account-cta-label = Видалити обліковий запис
settings-delete-monitor-free-account-dialog-title = Ваш обліковий запис { -brand-monitor } буде остаточно видалено
settings-delete-monitor-free-account-dialog-lead = Уся інформація вашого облікового запису { -brand-monitor } буде видалена, і ми більше не відстежуватимемо нові витоки ваших даних. Це не видалить ваш обліковий запис { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Видалити обліковий запис
settings-delete-monitor-free-account-dialog-cancel-button-label = Не зважайте, повернутися
settings-delete-monitor-account-confirmation-toast-label-2 = Ваш обліковий запис { -brand-monitor } видалено.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Відхилити
