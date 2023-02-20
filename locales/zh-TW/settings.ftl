# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 選項

## Breach alert preferences

settings-alert-preferences-title = 資料外洩警示偏好設定
settings-alert-preferences-option-one = 傳送資料外洩警報到受影響的電子郵件信箱
settings-alert-preferences-option-two = 傳送資料外洩警報到主要電子郵件信箱

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email }（主要）
settings-email-list-title = 監控中的電子郵件信箱
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 您的帳號可監控最多 { $limit } 組信箱。
settings-email-verification-callout = 需要驗證信箱
settings-resend-email-verification-link = 重寄驗證信
settings-add-email-button = 新增電子郵件地址
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info = 出現在 { $breachCount } 場已知的外洩事件中。

## Deactivate account

settings-deactivate-account-title = 停用帳號
settings-deactivate-account-info = 您可以刪除 { -brand-fx-account } 來停用 { -product-short-name }。
settings-fxa-link-label = 前往 { -brand-firefox } 設定

## Add email dialog

settings-email-dialog-title = 新增另一組電子郵件地址
settings-add-email-text = 新增電子郵件信箱，即可瞭解相關資料是否曾遭外洩。
settings-email-input-label = 電子郵件地址
settings-send-email-verification-button = 寄送驗證鏈結
