# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 選項

## Breach alert preferences

settings-alert-email-preferences-title = 郵件偏好
settings-alert-email-preferences-subtitle = 告訴我們您想收到哪些郵件。
settings-alert-preferences-allow-breach-alerts-title = 即時資料外洩警報
settings-alert-preferences-allow-breach-alerts-subtitle = 偵測到資料外洩事件後會立即傳送警報
settings-alert-preferences-option-one = 傳送資料外洩警報到受影響的電子郵件信箱
settings-alert-preferences-option-two = 傳送資料外洩警報到主要電子郵件信箱

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = 監控中的電子郵件信箱
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 您的帳號可監控最多 { $limit } 組信箱。
settings-email-verification-callout = 需要驗證信箱
settings-resend-email-verification-link = 重寄驗證信
settings-add-email-button = 新增電子郵件地址
settings-remove-email-button-label = 移除
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = 停止監控 { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = 出現在 { $breachCount } 場已知的外洩事件中。

## Delete Monitor account

settings-delete-monitor-free-account-title = 刪除 { -brand-monitor } 帳號
settings-delete-monitor-free-account-description = 將會永久刪除您的 { -brand-monitor } 帳號，並關閉所有通知。
settings-delete-monitor-free-account-cta-label = 刪除帳號
settings-delete-monitor-free-account-dialog-title = 將永久刪除您的 { -brand-monitor } 帳號
settings-delete-monitor-free-account-dialog-lead-v2 = 將刪除您所有的 { -brand-monitor } 帳號資訊，我們也將不再監控這些帳號相關的資料外洩事件，但這個動作不會刪除您的 { -brand-mozilla-account }。
settings-delete-monitor-free-account-dialog-cta-label = 刪除帳號
settings-delete-monitor-free-account-dialog-cancel-button-label = 算了，帶我回去
settings-delete-monitor-account-confirmation-toast-label-2 = 已刪除您的 { -brand-monitor } 帳號。
settings-delete-monitor-account-confirmation-toast-dismiss-label = 知道了！

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = { -brand-monitor } 月報
settings-alert-preferences-allow-monthly-monitor-report-subtitle = 每月通知您有哪些新的外洩事件、修正了哪些問題，以及哪些問題需要您注意。

## Settings page redesign

settings-tab-label-edit-info = 編輯您的資訊
settings-tab-label-notifications = 設定通知
settings-tab-label-manage-account = 管理帳號
settings-tab-subtitle-manage-account = 管理您的 { -product-name } 帳號。
settings-tab-notifications-marketing-title = 行銷訊息
settings-tab-notifications-marketing-text = { -brand-monitor }、{ -brand-mozilla } 以及我們其他安全性產品的定期更新資訊。
settings-tab-notifications-marketing-link-label = 前往 { -brand-mozilla } 電子郵件設定
