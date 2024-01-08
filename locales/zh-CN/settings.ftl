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
settings-email-list-title = 受监控的邮箱地址
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 您的账户最多可对 { $limit } 个邮箱进行监控。
settings-email-verification-callout = 需要电子邮件验证
settings-resend-email-verification-link = 重发验证邮件
settings-add-email-button = 添加邮箱地址
# Deprecated
settings-delete-email-button = 删除电子邮件地址
settings-remove-email-button-label = 移除
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = 停止监控 { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = 出现在 { $breachCount } 次已知的外泄事件中。

## Cancel Premium subscription

settings-cancel-premium-subscription-title = 取消 { -brand-premium } 订阅
settings-cancel-premium-subscription-info = 当前结算周期结束后，您的订阅将恢复为免费账户。您的隐私保护扫描结果将被永久删除，并将只能监控 1 个电子邮件地址。

## Deactivate account

settings-deactivate-account-title = 停用账户
settings-deactivate-account-info-2 = 您可以通过删除 { -brand-mozilla-account }来停用 { -product-short-name }。
settings-fxa-link-label-3 = 前往 { -brand-mozilla-account }设置

## Add email dialog

settings-email-dialog-title = 添加另一个邮箱地址
settings-add-email-text = 添加一个新的电子邮件地址以查看它是否涉及数据泄漏事件。
settings-email-input-label = 邮箱地址
settings-send-email-verification-button = 发送验证链接

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = 很遗憾看到您取消了订阅。 <br /> 您能告知我们取消的原因吗？
settings-unsubscribe-dialog-info = 您的体验对我们很重要。我们会阅读每一条回复并认真对待。
settings-unsubscribe-dialog-message-placeholder = 我们在哪里可以做得更好？
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = 请注意，您所有的 { -brand-monitor-premium } 服务都将在当前结算周期结束后被<a { $faq_href }>永久删除</a>。
settings-unsubscribe-dialog-continue = 继续取消
settings-unsubscribe-dialog-cancel = 好吧，我再想想
