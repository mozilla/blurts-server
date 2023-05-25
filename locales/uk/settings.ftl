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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] З'являється в { $breachCount } відомому витоці даних.
        [few] З'являється в { $breachCount } відомих витоках даних.
        [many] З'являється в { $breachCount } відомих витоках даних.
       *[other] З'являється в { $breachCount } відомих витоках даних.
    }

## Deactivate account

settings-deactivate-account-title = Деактивувати обліковий запис
settings-deactivate-account-info = Ви можете деактивувати { -product-short-name }, видаливши свій { -brand-fx-account }.
settings-fxa-link-label = Перейти до налаштувань { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Додати іншу електронну адресу
settings-add-email-text = Додайте нову адресу електронної пошти, щоб перевірити, чи була вона виявлена у витоці даних.
settings-email-input-label = Адреса електронної пошти
settings-send-email-verification-button = Надіслати посилання для підтвердження
