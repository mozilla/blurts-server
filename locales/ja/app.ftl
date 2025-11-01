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
error-hibp-throttled = { -brand-HIBP } への接続数が多すぎます。
error-hibp-connect = { -brand-HIBP } への接続でエラーが発生しました。
user-add-invalid-email = メールアドレスが正しくありません
user-add-too-many-emails = 監視しているメールアドレスの数が制限に達しています。
user-add-duplicate-email = このメールは既に { -product-name } に追加されています。
user-add-verification-email-just-sent = メールをすぐに再送信することはできません。後でもう一度試してください。
user-add-unknown-error = 別のメールアドレスを追加する際に問題が発生しました。後でもう一度試してください。
user-delete-unknown-error = メールアドレスを削除する際に問題が発生しました。後でもう一度試してください。
user-verify-token-error = 検証トークンが必要です。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 漏洩したデータ:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 侵害データの提供 { $hibp-link }
show-all = すべて表示
sign-out = ログアウト
# Link title
preferences = 設定
# Link title
home = ホーム
# Link title
security-tips = セキュリティの秘訣
# Link title
more-about-this-breach = この侵害について詳しく見る
monitor-several-emails = 複数のメールアドレスを監視する
website-breach = ウェブサイト侵害
sensitive-breach = 注意を要するウェブサイト侵害
data-aggregator-breach = データアグリゲーターの侵害
what-data = 漏洩したデータ:
sensitive-sites = { -product-name } は機密性の高いサイトをどのように扱いますか？
sensitive-sites-copy = { -product-name } は、メールアドレスが確認できた場合にのみ、この種類の侵害に関連付けられたアカウントを明らかにします。つまり、あなたの情報がこの侵害にあったかどうかを確認できるのは (誰かほかのユーザーがあなたのメールアカウントにアクセスできるのでなければ) あなただけです。
delayed-reporting-headline = なぜ、この侵害の報告に時間がかかったのですか？
delayed-reporting-copy = データ侵害にさらされた認証情報がダークウェブに現れるまで数か月または数年かかる場合があります。侵害は発見され、確認され次第データベースに追加されます。
fxm-warns-you = { -product-name } は、あなたのメールアドレスがオンラインデータ侵害で公開されている場合に警告します。あなたの情報が公開されているかどうかを確認し、オンラインアカウントの保護を強化する方法を学び、あなたのメールアドレスが新しい侵害で見つかった場合に警告を受け取りましょう。
what-is-data-agg = データアグリゲーターとは？
what-is-data-agg-blurb = データアグリゲーター (データブローカー) は、公的記録から情報を収集したり他社から情報を購入したりします。彼らはこのデータを編集し、マーケティング目的で企業に販売します。このような情報漏洩の被害者が金銭的な詐欺にあう可能性は低いですが、ハッカーはこのデータを使って被害者になりすましたり、被害者を分析したりする可能性があります。
avoid-personal-info = パスワードに個人情報を使用しないでください
send-verification = 認証リンクを送信する
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = データ侵害概要

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] パスワードが漏洩しているデータ侵害の数
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 既知のデータ侵害を受けているあなたの情報
    }
what-is-a-website-breach = ウェブサイト侵害とは何ですか？
website-breach-blurb = ウェブサイトデータ侵害は、サイバー犯罪者が、個人情報を盗んだり、コピーしたり、オンラインアカウントを漏洩したりすると発生します。通常、ハッカーがウェブサイトのセキュリティの弱点を見つけた結果により、発生します。また、事故的にアカウント情報が漏洩して発生することもあります。
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概要
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } に、{ $breachTitle } は侵害にさらされました。侵害が発見され、確認されたため、{ $addedDate } にデータベースに追加されました。
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = メニュー

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = OK
