# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = 別のメールアドレスを追加
# $total is the number of emails a user is allowed to add
add-email-your-account-includes = 最大 { $total } 個のメールアドレスを監視できます。新しいメールアドレスを追加して、侵害が無いか確認してください。
add-email-address-input-label = メールアドレス
add-email-send-verification-button = 認証リンクを送信する
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = { $email } に送信されたリンクを確認して、{ -brand-fx-monitor } に追加します。すべてのメール アドレスは、<a { $settings-href }>設定</a> で管理できます。
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = <b>{ $email }</b> に送信されたリンクを確認して、{ -brand-mozilla-monitor } に追加します。
