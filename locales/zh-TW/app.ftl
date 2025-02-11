# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = 付費版
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = 此電子郵件地址未訂閱 { -product-name }。
error-hibp-throttled = 與 { -brand-HIBP } 的連線太多。
error-hibp-connect = 連線到 { -brand-HIBP } 時發生錯誤。
user-add-invalid-email = 無效的電子郵件地址
user-add-too-many-emails = 已達可監控的 E-Mail 信箱最大數量。
user-add-duplicate-email = 此帳號已經加入 { -product-name }。
user-add-verification-email-just-sent = 沒辦法這麼快就寄出另一封驗證信，請稍後再試。
user-add-unknown-error = 新增電子郵件地址時發生錯誤，請稍後再試。
user-delete-unknown-error = 移除電子郵件地址時發生錯誤，請稍後再試。
user-verify-token-error = 缺少驗證 token。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 洩漏資料內容：
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 資料外洩情況由 { $hibp-link } 提供
show-all = 顯示全部
sign-out = 登出
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
# Link title
preferences = 偏好設定
# Link title
home = 首頁
# Link title
security-tips = 安全小秘訣
# Link title
more-about-this-breach = 關於此資料外洩事件的更多資訊
monitor-several-emails = 監控多組電子郵件信箱
website-breach = 網站資訊外洩
sensitive-breach = 網站敏感性資訊外洩
data-aggregator-breach = 資料收集器資訊外洩
what-data = 洩漏了哪些資料：
sensitive-sites = { -product-name } 如何對待這些敏感性網站？
sensitive-sites-copy = { -product-name } 僅會在電子郵件信箱驗證後，才顯示與這些資料外洩事件相關聯的帳號。也就是說只有您能看到您的帳號是否與此事件有關（除非有別人也能使用使用您的信箱帳號。）
delayed-reporting-headline = 為什麼要這麼久才公開這些事件？
delayed-reporting-copy = 有的時候，資料外洩後可能要花幾個月甚至幾年，您的登入資訊才會出現在暗網上。當我們發現外洩的資料並確認無誤後，就會加入資料庫。
fxm-warns-you = { -product-name } 會在您的電子郵件地址出現於線上資料外洩事件時警告您。可以在此看看有哪些資料已遭外洩、了解如何保護線上帳號，並在您新的信箱出現於新的外洩事件時接收警報。
what-is-data-agg = 「資料收集器」是什麼？
what-is-data-agg-blurb = 資料收集器，或是資料的交易商，會自行收集公開資料或向其他公司購買資料。他們會整合好資料，再銷售給其他公司做行銷用途。受這類事件影響的人較不容易遇到財務詐欺，但駭客可以使用此資料來假裝為他人，或進行分類。
avoid-personal-info = 不要在密碼中使用個人資訊
send-verification = 寄送驗證鏈結
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = 外洩事件摘要

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 所有事件中洩漏出的密碼組數
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 場資料外洩事件，流出了您的個資
    }
what-is-a-website-breach = 網站資料外洩事件是什麼？
website-breach-blurb = 當網路罪犯竊取、複製或公開網路帳號中的個人資料時，就是網站資料外洩事件。會發生這樣的事情通常是駭客想要找出網站在安全性上的弱點，也可能是帳號資訊被不小心洩漏出去。
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概觀
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 於 { $breachDate }發生了資料外洩事件。事件發生並經過驗證後，已於 { $addedDate }列入我們的資料庫。
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 選單
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = 請到 { $userEmail } 收信，點擊當中的驗證連結，即可加入 { -product-name }。

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 事件紀錄時間：
# Section headline
rec-section-headline = 這場資料外洩事件我該怎麼辦？
rec-section-subhead = 我們建議您採取下列行動，來確保個人資訊安全，並保護您的數位身分。
# Section headline
rec-section-headline-no-pw = 該做哪些事來保護個資？
rec-section-subhead-no-pw = 雖然這次資料外洩事件沒有流出密碼，但還是有一些更能保護個人資訊的方式。

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = 新事件

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla 帳號
open-in-new-tab-alt = 用新分頁開啟鏈結

## Search Engine Optimization

meta-desc-2 = 使用 { -brand-fx-monitor } 看看您是否也處於資料外洩事件之中。我們將幫助您了解接下來應該採取哪些行動，並協助持續監控任何新的外洩事件。

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = 登入
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = 主選單
main-nav-button-collapse-label = 摺疊選單
main-nav-button-collapse-tooltip = 摺疊選單
main-nav-button-expand-label = 展開選單
main-nav-button-expand-tooltip = 展開選單
main-nav-label = 導覽
main-nav-link-home-label = 首頁
main-nav-link-dashboard-label = 儀錶板
main-nav-link-settings-label = 設定
main-nav-link-faq-label = 常見問題
main-nav-link-faq-tooltip = 常見問題

## User menu

user-menu-trigger-label = 開啟使用者選單
user-menu-trigger-tooltip = 個人資料
user-menu-manage-fxa-label = 管理您的 { -brand-mozilla-account }
user-menu-settings-label = 設定
user-menu-settings-tooltip = 設定 { -brand-mozilla-monitor }
user-menu-help-label = 說明與技術支援
user-menu-help-tooltip = 獲得 { -brand-mozilla-monitor } 的使用說明
user-menu-signout-label = 登出
user-menu-signout-tooltip = 從 { -brand-mozilla-monitor } 登出

## Footer

mozilla = { -brand-mozilla }
terms-of-service = 服務條款
privacy-notice = 隱私權公告
github = { -brand-github }
footer-nav-recent-breaches = 近期的資料外洩事件
footer-external-link-faq-label = 常見問題
footer-external-link-faq-tooltip = 常見問題

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } 找不到頁面
error-page-error-404-copy = 很抱歉，您想要開啟的頁面不存在。
error-page-error-404-cta-button = 回上一頁
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } 有些東西不對勁！

## Breach overview page

all-breaches-headline-3 = 資料外洩事件資料庫
all-breaches-lead = 我們會監控所有已知的資料外洩事件，檢查您的個人資訊是否已遭外流。以下是自 2007 年起，所有通報過的資料外洩事件的完整清單。
search-breaches = 搜尋資料外洩事件
# the kind of user data exposed to hackers in data breach.
exposed-data = 外洩資料：

## Public breach detail page

find-out-if-2 = 看看是否您也遭此資料外洩事件影響
find-out-if-description = 我們會幫助您快速確認電子郵件信箱是否也在此事件中外洩，並且了解接下來該做什麼。
breach-detail-cta-signup = 檢查是否有外洩事件

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>：全新名稱、外觀與更多<b>奪回隱私權</b>的方式。
banner-monitor-rebrand-dismiss-button-label = 確定
banner-monitor-rebrand-dismiss-button-tooltip = 知道了！
loading-accessibility = 載入中
