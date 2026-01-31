# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = このメールアドレスは { -product-name } に登録されていません。
user-add-invalid-email = メールアドレスが正しくありません
user-add-too-many-emails = 監視しているメールアドレスの数が制限に達しています。
user-add-duplicate-email = このメールは既に { -product-name } に追加されています。
user-add-verification-email-just-sent = メールをすぐに再送信することはできません。後でもう一度試してください。
user-add-unknown-error = 別のメールアドレスを追加する際に問題が発生しました。後でもう一度試してください。
user-delete-unknown-error = メールアドレスを削除する際に問題が発生しました。後でもう一度試してください。
user-verify-token-error = 検証トークンが必要です。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 漏洩したデータ:
# Link title
more-about-this-breach = この侵害について詳しく見る
what-data = 漏洩したデータ:
delayed-reporting-headline = なぜ、この侵害の報告に時間がかかったのですか？
delayed-reporting-copy = データ侵害にさらされた認証情報がダークウェブに現れるまで数か月または数年かかる場合があります。侵害は発見され、確認され次第データベースに追加されます。

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概要
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } に、{ $breachTitle } は侵害にさらされました。侵害が発見され、確認されたため、{ $addedDate } にデータベースに追加されました。

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 侵害が追加された日:
# Section headline
rec-section-headline = この侵害への対処方法
rec-section-subhead = あなたの個人情報を安全に保ち、デジタル ID を保護するために、以下の手順を行うことをおすすめします。
# Section headline
rec-section-headline-no-pw = 個人情報を保護するためにするべきこと

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla アカウント

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = ログイン
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

main-nav-button-collapse-label = メニューを閉じる
main-nav-button-collapse-tooltip = メニューを閉じる
main-nav-button-expand-label = メニューを開く
main-nav-button-expand-tooltip = メニューを開く
main-nav-link-home-label = ホーム
main-nav-link-dashboard-label = ダッシュボード
main-nav-link-settings-label = 設定
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = よくある質問

## User menu

user-menu-trigger-tooltip = プロフィール
user-menu-manage-fxa-label = { -brand-mozilla-account } を管理する
user-menu-settings-label = 設定
user-menu-help-label = ヘルプとサポート
user-menu-signout-label = ログアウト
user-menu-signout-tooltip = { -brand-mozilla-monitor } からログアウトする

## Footer

mozilla = { -brand-mozilla }
github = { -brand-github }
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = よくある質問

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } ページが見つかりません
error-page-error-404-copy = 申し訳ございませんが、お探しのページは存在しません。
error-page-error-404-cta-button = 戻る

## Breach overview page

all-breaches-lead = 個人情報が漏えいしていないか確認するために、既知のデータ侵害を監視しています。2007 年以降に報告されたすべての侵害の完全なリストです。
search-breaches = データ侵害を検索
# the kind of user data exposed to hackers in data breach.
exposed-data = 侵害されたデータ:

## Public breach detail page

breach-detail-cta-signup = データ侵害を確認する
