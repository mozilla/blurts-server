# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 報告
report-date = 報告日期:
email-address = 電子郵件地址:
# A link to legal information about mozilla products.
legal = 法律資訊
# Unsubscribe link in email.
email-unsub-link = 取消訂閱
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = 您會收到這封信，是因為您曾經註冊過 { -product-name } 的警報。不想再收到這些信了嗎？{ $unsubLink }。這是系統自動發出的郵件，若需支援請洽 { $faqLink }。
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = 您會收到這封信，是因為您曾經註冊過 { -product-name } 的警報。這是系統自動發出的郵件，若需支援請洽 { $faqLink }。
# Button text
verify-email-cta = 驗證電子郵件地址
# Button text
see-all-breaches = 檢視所有資料外洩事件
# Headline of verification email
email-link-expires = 此鏈結將於 24 小時後失效
email-verify-blurb = 請驗證您的電子郵件地址，即可加入 { -product-name } 並訂閱資料外洩警報。
# Email headline
email-found-breaches-hl = 以下是您過去遭遇資料外洩事件的摘要

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = { $userEmail } 的資料外洩事件摘要
# Email headline
email-no-breaches-hl = { $userEmail } 出現在 0 場已知的資料外洩事件中
# Email headline
email-alert-hl = { $userEmail } 出現在新的資料外洩事件中

##

# Subject line of email
email-subject-found-breaches = { -product-name } 在下列資料外洩事件找到您的資訊
# Subject line of email
email-subject-no-breaches = { -product-name } 沒有找到相關資料外洩事件
# Subject line of email
email-subject-verify = { -product-name }：驗證您的電子郵件地址
# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
learn-more-about-fxm = 了解 { $fxmLink } 的更多資訊
email-sensitive-disclaimer = 由於這場資料外洩事件的敏感性，相關的 E-Mail 信箱資料並未公開揭露。您會收到這封警報是因為您是此信箱帳號經驗證過的擁有者。
fxm-warns-you-no-breaches = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。目前為止，還沒有發生過類似事件。我們會在您的電子郵件地址出現於新事件中時通知您。
fxm-warns-you-found-breaches = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。您也已經訂閱，當您的電子郵件地址出現於新事件中時通知您。
email-breach-alert-blurb = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。我們剛收到其他公司的資料外洩事件。
# Section headline
monitor-another-email = 想要監控其它信箱嗎？

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Variables:
#   $unsubscribe-link-attr (string) - Link to email unsubscribe
email-2022-unsubscribe = 您會收到這封自動寄出的郵件，是因為您是 { -product-name } 的訂閱者。<br>歡迎您隨時在<a { $unsubscribe-link-attr }>此處</a>更改郵件偏好設定。
# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 資料外洩事件資訊由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = 您有未處理過的資料外洩事件
email-unresolved-subhead = 您的電子郵件信箱已遭外洩。<br>立即使用 { -product-name } 採取後續行動修正。
email-is-affected = 您的信箱 { $email-address } 已受至少一場資料外洩事件影響。
email-more-detail = 請立即登入 { -product-name }，了解有關資料外洩事件的更多詳細資訊（包含發生時間、哪些資料已遭外洩），並了解該如何進行後續處理。
email-breach-status = 目前事件狀態
# table row 1 label
email-monitored = 監控信箱數量：
# table row 2 label
email-breach-total = 總資料外洩事件數量：
# table row 3 label
email-resolved = 處理過的事件數量：
# table row 4 label
email-unresolved = 未處理的事件數量：
email-resolve-cta = 處理此事件

## Verification email

email-verify-heading = 從現在起保護您的資料
email-verify-subhead = 確認您的 E-Mail 即可在發生資料外洩事件後保護您的資料。
email-verify-simply-click = 只要點擊下列鏈結，即可完成帳號確認。

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = 以下是您的資料外洩情況摘要
email-breach-detected = 我們偵測到您的 { $email-address } 帳號可能已遭到洩露。建議您立即採取行動，處理此資料外洩事件。
email-no-breach-detected = 好消息！我們並未找到任何與您的信箱 { $email-address } 有關的資料外洩事件。
email-dashboard-cta = 前往儀錶板

## Breach alert

email-may-have-been-exposed = 您的信箱可能已於資料外洩事件中遭到暴露
email-spotted-new-breach = 我們發現新的資料外洩事件
