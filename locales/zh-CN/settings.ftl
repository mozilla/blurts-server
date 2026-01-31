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

settings-email-verification-callout = 需要电子邮件验证
settings-email-addresses-header = 邮箱地址
settings-email-addresses-description = 若这些邮箱地址出现在已知的外泄事件中，{ -brand-monitor } 将向您发出警报。
settings-email-addresses-add-email-button = 添加邮箱地址
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = 最多可添加 { $limit } 个
settings-email-addresses-add-email-resend-button-label = 重发验证链接
input-error-alt = 错误

## Email address dialog

settings-email-addresses-initial-dialog-header = 添加邮箱地址
settings-email-addresses-initial-dialog-description = 我们将向您发送验证链接，以确认您希望 { -brand-monitor } 以后扫描此邮箱地址。
settings-email-addresses-initial-dialog-add-email-input-label = 请输入邮箱地址
settings-email-addresses-initial-dialog-add-email-button-label = 发送验证链接
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = 验证链接已发送到 <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = 打开链接即可将该邮箱地址添加到此账户，将来让 { -brand-monitor } 对其进行扫描。
settings-email-addresses-confirmation-dialog-close-button = 关闭

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = 更新扫描信息
settings-tab-label-edit-info = 编辑您的信息
settings-tab-label-notifications = 设置通知
settings-tab-label-manage-account = 管理账户
settings-tab-subtitle-manage-account = 管理您的 { -product-name } 账户。
settings-tab-notifications-marketing-title = 营销通信
settings-tab-notifications-marketing-text = 定期接收有关 { -brand-monitor }、{ -brand-mozilla }，以及我们其他安全产品的最新消息。
settings-tab-notifications-marketing-link-label = 前往 { -brand-mozilla } 邮件设置
