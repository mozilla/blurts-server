# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = 新增另一組電子郵件地址
close-dialog-alt = 關閉對話框
# $total is the number of emails a user is allowed to add
add-email-your-account-includes = 您的帳號可監控最多 { $total } 組電子郵件信箱。可新增其他信箱來確認是否曾外洩。
add-email-address-input-label = 電子郵件地址
add-email-send-verification-button = 寄送驗證鏈結
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = 請到 { $email } 點擊確認鏈結，即可將其新增到 { -brand-fx-monitor }。可到<a { $settings-href }>設定</a>頁面中管理所有要監控的信箱。
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = 請到 <b>{ $email }</b> 收信，點擊當中的驗證鏈結，即可將該信箱加入 { -brand-mozilla-monitor }。
