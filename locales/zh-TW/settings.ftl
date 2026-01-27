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

settings-email-verification-callout = 需要驗證信箱
settings-email-addresses-header = 電子郵件地址
settings-email-addresses-description = { -brand-monitor } 會在得知資料外洩事件包含這些信箱時通知您。
settings-email-addresses-add-email-button = 新增電子郵件地址
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = 新增最多 { $limit } 組
settings-email-addresses-add-email-resend-button-label = 重寄驗證鏈結
input-error-alt = 錯誤

## Email address dialog

settings-email-addresses-initial-dialog-header = 新增電子郵件地址
settings-email-addresses-initial-dialog-description = 我們會寄出驗證鏈結，以確認您是否願意將該信箱列入 { -brand-monitor } 未來的掃描清單中。
settings-email-addresses-initial-dialog-add-email-input-label = 輸入電子郵件地址
settings-email-addresses-initial-dialog-add-email-button-label = 寄送驗證鏈結
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = 已將驗證鏈結寄送到 <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = 請開啟鏈結，即可將此地址加入帳戶中，讓 { -brand-monitor } 在未來進行掃描。
settings-email-addresses-confirmation-dialog-close-button = 關閉

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = 更新掃描資訊
settings-tab-label-edit-info = 編輯您的資訊
settings-tab-label-notifications = 設定通知
settings-tab-label-manage-account = 管理帳號
settings-tab-subtitle-manage-account = 管理您的 { -product-name } 帳號。
settings-tab-notifications-marketing-title = 行銷訊息
settings-tab-notifications-marketing-text = { -brand-monitor }、{ -brand-mozilla } 以及我們其他安全性產品的定期更新資訊。
settings-tab-notifications-marketing-link-label = 前往 { -brand-mozilla } 電子郵件設定
