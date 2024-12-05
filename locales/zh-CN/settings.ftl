# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 设置

## Breach alert preferences

settings-alert-email-preferences-title = 邮件偏好
settings-alert-email-preferences-subtitle = 选择您希望接收邮件的邮箱。
settings-alert-preferences-allow-breach-alerts-title = 外泄事件即时警报
settings-alert-preferences-allow-breach-alerts-subtitle = 检测到数据外泄事件发生后会立即发送此类警报。
settings-alert-preferences-option-one = 向受影响的邮箱地址发送数据外泄警报
settings-alert-preferences-option-two = 向主邮箱地址发送所有数据外泄警报

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Delete Monitor account

settings-delete-monitor-free-account-title = 删除 { -brand-monitor } 账户
settings-delete-monitor-free-account-description = 此操作将永久删除您的 { -brand-monitor } 账户，并关闭所有通知。
settings-delete-monitor-free-account-cta-label = 删除账户
settings-delete-monitor-free-account-dialog-title = 您的 { -brand-monitor } 账户将被永久删除
settings-delete-monitor-free-account-dialog-lead-v2 = 您的 { -brand-monitor } 账户信息将被全部删除，并且我们将不再监控新的数据外泄事件。此操作不会删除您的 { -brand-mozilla-account }。
settings-delete-monitor-free-account-dialog-cta-label = 删除账户
settings-delete-monitor-free-account-dialog-cancel-button-label = 我再想想
settings-delete-monitor-account-confirmation-toast-label-2 = 您的 { -brand-monitor } 账户已被删除。
settings-delete-monitor-account-confirmation-toast-dismiss-label = 知道了

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = { -brand-monitor } 月报
settings-alert-preferences-allow-monthly-monitor-report-subtitle = 每月情况汇总，包括新发生的暴露、已处理的问题、需关注的事项。

## Settings page redesign

settings-tab-label-edit-info = 编辑您的信息
settings-tab-label-notifications = 设置通知
settings-tab-label-manage-account = 管理账户
settings-tab-subtitle-manage-account = 管理您的 { -product-name } 账户。
settings-tab-notifications-marketing-title = 营销通信
settings-tab-notifications-marketing-text = 定期接收有关 { -brand-monitor }、{ -brand-mozilla }，以及我们其他安全产品的最新消息。
settings-tab-notifications-marketing-link-label = 前往 { -brand-mozilla } 邮件设置
