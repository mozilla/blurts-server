# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - 设置
settings-page-title = { -product-short-name } 设置

## Breach alert preferences

settings-alert-preferences-title = 数据泄漏警报偏好
settings-alert-preferences-option-one = 向受影响的电子邮件地址发送数据泄漏警报
settings-alert-preferences-option-two = 向所有受影响的电子邮件地址发送数据泄漏警报

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } （主邮箱）
settings-email-list-title = 受监控的电子邮件地址
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 您的帐户最多可对 { $limit } 个邮箱进行监控。
settings-email-verification-callout = 需要电子邮件验证
settings-resend-email-verification-link = 重发验证邮件
settings-add-email-button = 添加邮箱地址
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info = 出现在 { $breachCount } 次已知的数据泄漏事件中。

## Deactivate account

settings-deactivate-account-title = 禁用帐户
settings-deactivate-account-info = 您可以通过删除您的 { -brand-fx-account } 来停用 { -product-short-name }。
settings-fxa-link-label = 转到 { -brand-firefox } 设置

## Add email dialog

settings-email-dialog-title = 添加另一个邮箱地址
settings-add-email-text = 添加一个新的电子邮件地址以查看它是否涉及数据泄漏事件。
settings-email-input-label = 邮箱地址
settings-send-email-verification-button = 发送验证链接
