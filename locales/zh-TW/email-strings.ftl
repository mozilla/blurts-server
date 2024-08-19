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
# A link to legal information about mozilla products.
legal = 法律資訊
# Unsubscribe link in email.
email-unsub-link = 取消訂閱
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = 您會收到這封信，是因為您曾經註冊過 { -product-name } 的警報。不想再收到這些信了嗎？{ $unsubLink }。這是系統自動發出的郵件，若需支援請洽 { $faqLink }。
# Button text
verify-email-cta = 驗證電子郵件地址
# Headline of verification email
email-link-expires = 此鏈結將於 24 小時後失效

##

# Subject line of email
email-subject-found-breaches = { -product-name } 在下列資料外洩事件找到您的資訊
# Subject line of email
email-subject-no-breaches = { -product-name } 沒有找到相關資料外洩事件
# Subject line of email
email-subject-verify = { -product-name }：驗證您的電子郵件地址
fxm-warns-you-no-breaches = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。目前為止，還沒有發生過類似事件。我們會在您的電子郵件地址出現於新事件中時通知您。
email-breach-alert-blurb = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。我們剛收到其他公司的資料外洩事件。

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 資料外洩事件資訊由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Verification email

email-verify-heading = 從現在起保護您的資料
email-verify-subhead = 確認您的 E-Mail 即可在發生資料外洩事件後保護您的資料。
email-verify-simply-click = 只要點擊下列鏈結，即可完成帳號確認。

## Breach report

email-breach-summary = 以下是您的資料外洩情況摘要
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = 我們偵測到您的 { $email-address } 帳號可能已遭到洩露。建議您立即採取行動，處理此資料外洩事件。
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = 我們偵測到您的 <b>{ $email-address }</b> 帳號可能已遭到洩露。建議您立即採取行動，處理此資料外洩事件。
email-dashboard-cta = 前往儀錶板

## Breach alert

email-spotted-new-breach = 我們發現新的資料外洩事件
