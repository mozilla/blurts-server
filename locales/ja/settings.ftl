# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 設定

## Breach alert preferences

settings-alert-email-preferences-title = メール設定
settings-alert-email-preferences-subtitle = 受信したいメールを選択してください。
settings-alert-preferences-option-one = 影響を受けたメールアドレスに通知を送る
settings-alert-preferences-option-two = プライマリーメールアドレスに通知を送る

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = 監視中のメールアドレス
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 最大 { $limit } 件のメールを監視できます。
settings-email-verification-callout = メールアドレスの認証が必要です
settings-resend-email-verification-link = 認証メールを再送する
settings-add-email-button = メールアドレスを追加
settings-remove-email-button-label = 削除
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = { $emailAddress } の監視を停止
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = 既知のデータ侵害は { $breachCount } 件です。

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor } のアカウントを削除
settings-delete-monitor-free-account-cta-label = アカウントを削除
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } アカウントが完全に削除されます
settings-delete-monitor-free-account-dialog-cta-label = アカウントを削除
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } アカウントが削除されました。
settings-delete-monitor-account-confirmation-toast-dismiss-label = 閉じる

## Settings page redesign

settings-tab-label-edit-info = 情報の編集
settings-tab-label-notifications = 通知設定
settings-tab-label-manage-account = アカウント管理
settings-tab-subtitle-manage-account = { -product-name } アカウントを管理します。
