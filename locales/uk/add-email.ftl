# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Додайте іншу адресу електронної пошти
close-dialog-alt = Закрити діалогове вікно
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Ваш обліковий запис включає моніторинг { $total } адреси електронної пошти. Додайте нову адресу електронної пошти, щоб перевірити, чи була вона помічена у витоці даних.
        [few] Ваш обліковий запис включає моніторинг { $total } адрес електронної пошти. Додайте нову адресу електронної пошти, щоб перевірити, чи була вона помічена у витоці даних.
        [many] Ваш обліковий запис включає моніторинг { $total } адрес електронної пошти. Додайте нову адресу електронної пошти, щоб перевірити, чи була вона помічена у витоці даних.
       *[other] Ваш обліковий запис включає моніторинг { $total } адрес електронної пошти. Додайте нову адресу електронної пошти, щоб перевірити, чи була вона помічена у витоці даних.
    }
add-email-address-input-label = Адреса електронної пошти
add-email-send-verification-button = Надіслати посилання для підтвердження
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Для підтвердження перейдіть за посиланням, надісланим на адресу { $email }, щоб додати її до { -brand-fx-monitor }. Керуйте всіма електронними адресами в <a { $settings-href }>Налаштуваннях</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Перевірте посилання, надіслане на <b>{ $email }</b>, щоб додати його до { -brand-mozilla-monitor }.
