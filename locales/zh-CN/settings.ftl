# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 设置

## Breach alert preferences

settings-alert-preferences-title = 数据泄漏警报偏好
settings-alert-preferences-option-one = 向受影响的邮箱地址发送数据泄漏警报
settings-alert-preferences-option-two = 向所有受影响的邮箱地址发送数据泄漏警报

## Monitored email addresses

settings-email-list-title = 受监控的邮箱地址
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 您的账户最多可对 { $limit } 个邮箱进行监控。
settings-email-verification-callout = 需要电子邮件验证
settings-resend-email-verification-link = 重发验证邮件
settings-add-email-button = 添加邮箱地址
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

## Deactivate account

settings-deactivate-account-title = 停用账户
settings-deactivate-account-info-2 = 您可以通过删除 { -brand-mozilla-account }来停用 { -product-short-name }。
settings-fxa-link-label-3 = 前往 { -brand-mozilla-account }设置

## Delete Monitor account

settings-delete-monitor-free-account-title = 删除 { -brand-monitor } 账户
settings-delete-monitor-free-account-description = 此操作将永久删除您的 { -brand-monitor } 账户，并关闭所有通知。
settings-delete-monitor-free-account-cta-label = 删除账户
settings-delete-monitor-free-account-dialog-title = 您的 { -brand-monitor } 账户将被永久删除
settings-delete-monitor-free-account-dialog-lead = 您的 { -brand-monitor } 账户信息将被全部删除，并且我们将不再监控新的数据外泄事件。此操作不会删除您的 { -brand-mozilla } 账户。
settings-delete-monitor-free-account-dialog-cta-label = 删除账户
settings-delete-monitor-free-account-dialog-cancel-button-label = 我再想想
settings-delete-monitor-account-confirmation-toast-label-2 = 您的 { -brand-monitor } 账户已被删除。
settings-delete-monitor-account-confirmation-toast-dismiss-label = 知道了

## Add email dialog

## Unsubscribe Dialog Survey

