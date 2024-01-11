# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = 添加邮箱地址
close-dialog-alt = 关闭对话框
# $total is the number of emails a user is allowed to add
add-email-your-account-includes = 您的账户最多可监控 { $total } 个邮箱地址。添加新的邮箱地址以查看其是否受数据外泄事件影响。
add-email-address-input-label = 邮箱地址
add-email-send-verification-button = 发送验证链接
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = 验证发送到 { $email } 的链接以将该邮箱添加到 { -brand-fx-monitor }。在<a { $settings-href }>设置</a>中管理所有邮箱地址。
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = 请验证发送到 <b>{ $email }</b> 的链接，以将其添加到 { -brand-mozilla-monitor }。
