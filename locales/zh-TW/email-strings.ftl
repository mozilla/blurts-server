# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = 登入

## Email footers

email-footer-support-heading = 有關於 { -brand-mozilla-monitor } 的問題嗎？
email-footer-support-content = 若需協助，請前往我們的<support-link>技術支援中心</support-link>
email-footer-trigger-transactional = 您會收到這封郵件，是因為您訂閱了 { -brand-mozilla-monitor }。
email-footer-reason-subscriber = 您會收到這封自動化郵件，是因為您訂閱了 { -brand-mozilla-monitor }。若您錯誤地收到這封信，不必做任何事。若需更多資訊請造訪 <support-link>{ -brand-mozilla } 技術支援站</support-link>。
email-footer-reason-subscriber-one-time = 您會收到這封單次寄出的自動化郵件，是因為您訂閱了 { -brand-monitor-plus }。往後不會再收到像這樣的郵件。若需更多資訊，請造訪 <support-link>{ -brand-mozilla } 技術支援站</support-link>。
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = 若需協助，請造訪我們的技術支援中心：{ $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = 資料外洩事件資訊是由 { -brand-HIBP } 提供：{ $hibp_link }
email-footer-source-hibp = 資料外洩事件資訊是由 <hibp-link>{ -brand-HIBP }</hibp-link> 提供
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = 隱私權
email-unsubscribe-link = <link_to_unsub>取消訂閱</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = 取消訂閱：{ $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
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

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 資料外洩事件資訊由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Verification email

email-verify-heading = 從現在起保護您的資料
email-verify-simply-click = 只要點擊下列鏈結，即可完成帳號確認。

## Breach report

email-breach-summary = 以下是您的資料外洩情況摘要
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = 我們偵測到您的 { $email-address } 帳號可能已遭到洩露。建議您立即採取行動，處理此資料外洩事件。
email-dashboard-cta = 前往儀錶板

## Breach alert email

email-breach-alert-all-subject = 偵測到新的資料外洩事件
email-breach-alert-all-preview = 我們將帶您逐步處理此問題。
email-breach-alert-all-hero-heading = 您身處於新的資料外洩事件
email-breach-alert-all-hero-subheading = 別擔心，我們會幫助您解決這個問題
email-breach-alert-all-lead = { -brand-mozilla-monitor } 發現下列資料外洩事件當中，包含您的個人資訊：
email-breach-alert-all-source-title = 資料外洩來源：
email-breach-alert-all-data-points-title = 您曝光的資料：
email-breach-alert-all-next-steps-lead = 我們將帶您逐步向您講解，如何解決這場資料外洩事件。
email-breach-alert-all-next-steps-cta-label = 開始使用
email-breach-alert-all-next-steps-button-dashboard = 前往儀錶板

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = { $company-name } 資料外洩事件詳細資訊
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } 在 { $breach-date } 的一場 { $company-name } 資料外洩事件中發現您的資訊。您會收到這份警報，是因為您曾經訂閱 <link_to_settings>資料外洩通知</link_to_settings>。
email-breach-alert-all-source-title-1 = 資料外洩事件詳細資訊
email-breach-alert-company = 公司：
email-breach-alert-date-of-breach = 發生日期：
email-breach-alert-info-exposed = 您曝光的資訊：
email-breach-alert-next-steps = 接下來可以做的事：
email-breach-alert-next-steps-description = 請<sign_in_link>登入</sign_in_link>您的 { -brand-mozilla-monitor } 儀表板。我們將帶您逐步解決這個問題。
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = 處理儀表板上的資料外洩事件
email-breach-alert-faqs-title = 常見問題
email-breach-alert-faq-qn-1 = 為什麼我會收到這個？
email-breach-alert-faq-ans-1 = 您已訂閱資料外洩警報。可隨時到設定<link_to_settings>更新偏好設定</link_to_settings>。
email-breach-alert-faq-qn-2 = 為什麼我不認識這家公司或網站？
email-breach-alert-faq-ans-2 = 可能是擁有者或名稱有變動、外洩的是您的舊帳號，為您建立的帳號，或該服務購買了從其他地方外洩的個人資訊。
email-breach-alert-faq-qn-3 = 資料外洩警報是什麼？
email-breach-alert-faq-ans-3 = 當您監控的個人資訊發生外洩、遭竊或未經授權複製時，{ -brand-mozilla-monitor } 就會寄出通知。
email-breach-alert-faq-qn-4 = { -brand-mozilla-monitor } 是什麼？
email-breach-alert-faq-ans-4 = 一項免費的資料外洩通知服務，可在您的網路帳號遭到外洩時通知您。
