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
-brand-premium = 付費版
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = 此電子郵件地址未訂閱 { -product-name }。
user-add-invalid-email = 無效的電子郵件地址
user-add-too-many-emails = 已達可監控的 E-Mail 信箱最大數量。
user-add-duplicate-email = 此帳號已經加入 { -product-name }。
user-add-verification-email-just-sent = 沒辦法這麼快就寄出另一封驗證信，請稍後再試。
user-add-unknown-error = 新增電子郵件地址時發生錯誤，請稍後再試。
user-delete-unknown-error = 移除電子郵件地址時發生錯誤，請稍後再試。
user-verify-token-error = 缺少驗證 token。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 洩漏資料內容：
# Link title
more-about-this-breach = 關於此資料外洩事件的更多資訊
what-data = 洩漏了哪些資料：
delayed-reporting-headline = 為什麼要這麼久才公開這些事件？
delayed-reporting-copy = 有的時候，資料外洩後可能要花幾個月甚至幾年，您的登入資訊才會出現在暗網上。當我們發現外洩的資料並確認無誤後，就會加入資料庫。

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概觀
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 於 { $breachDate }發生了資料外洩事件。事件發生並經過驗證後，已於 { $addedDate }列入我們的資料庫。

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

## Breach overview page

all-breaches-headline-3 = 資料外洩事件資料庫
all-breaches-lead = 我們會監控所有已知的資料外洩事件，檢查您的個人資訊是否已遭外流。以下是自 2007 年起，所有通報過的資料外洩事件的完整清單。
search-breaches = 搜尋資料外洩事件
# the kind of user data exposed to hackers in data breach.
exposed-data = 外洩資料：

## Public breach detail page

find-out-if-2 = 看看是否您也遭此資料外洩事件影響
find-out-if-description = 我們會幫助您快速確認電子郵件地址是否也在此事件中外洩，並且了解接下來該做什麼。
breach-detail-cta-signup = 檢查是否有外洩事件
loading-accessibility = 載入中
