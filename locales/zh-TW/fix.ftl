# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = 高風險資料外洩事件
fix-flow-nav-leaked-passwords = 洩漏的密碼
fix-flow-nav-security-recommendations = 安全性建議
guided-resolution-flow-exit = 回到儀錶板
guided-resolution-flow-back-arrow = 回到上一步
guided-resolution-flow-next-arrow = 前往下一步
guided-resolution-flow-step-navigation-label = 步驟指南

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = 讓我們繼續前進
fix-flow-celebration-next-recommendations-label = 檢視建議
fix-flow-celebration-next-dashboard-label = 前往您的儀錶板

## High-risk flow

fix-flow-celebration-high-risk-title = 您已修正您的高風險問題
fix-flow-celebration-high-risk-description-in-progress = 這份工作可能會讓人覺得很麻煩但這樣做對確保自己的安全很重要。再接再厲。
fix-flow-celebration-high-risk-description-done = 這份工作可能會讓人覺得很麻煩但這樣做對確保自己的安全很重要。
fix-flow-celebration-high-risk-description-next-passwords = 現在讓我們來修正已洩漏的密碼。
fix-flow-celebration-high-risk-description-next-security-questions = 現在讓我們來修正您暴露的安全性問題。
fix-flow-celebration-high-risk-description-next-security-recommendations = 接下來我們會依照已洩露的您的資料為您提供個人化的安全性建議。
fix-flow-celebration-high-risk-description-next-dashboard = 您已完成步驟。您可以在儀表板檢視任何待定的項目並追踪進度。

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = 您的密碼已受保護！
fix-flow-celebration-security-questions-title = 您的安全問題已受保護！
fix-flow-celebration-leaked-passwords-description-next-security-questions = 現在讓我們來檢查並更新您洩漏的安全性問題。
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = 接下來我們會依照已洩露的您的資料為您提供個人化的安全性建議。
fix-flow-celebration-leaked-passwords-description-next-dashboard = 做得好您已完成步驟。您可以在儀表板檢視任何待定的項目並追踪進度。

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = 您已完成所有推薦項目
fix-flow-celebration-security-recommendations-description-next-dashboard = 做得好您已完成步驟。您可以在儀表板檢視任何待定的項目並追踪進度。

# High Risk Data Breaches

high-risk-breach-heading = 做什麼
high-risk-breach-subheading = 這個問題需要您存取您的敏感資訊才能正常運作所以需要手動修正。
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
       *[other] 它出現於 { $num_breaches } 場資料外洩事件中:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>於 { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = 標示為已修復
high-risk-breach-skip = 先略過
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] 您估計用時: { $estimated_time } 分鐘以上
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = 已洩漏您的信用卡卡號
high-risk-breach-credit-card-description = 知道此密碼的任何人皆可進行未授權的購買行為您可能要對此負責。立即採取行動防止財務損失。
high-risk-breach-credit-card-step-one = 若您仍在使用這張卡請聯絡發行者已被盜竊。
high-risk-breach-credit-card-step-two = 要求使用新卡號註冊新卡片。
high-risk-breach-credit-card-step-three = 檢查帳號是否有未經授權的扣款。

# Bank Account Breaches

high-risk-breach-bank-account-title = 已洩漏您的銀行帳號
high-risk-breach-bank-account-description = 及早採取行動可以讓您獲得更多法律保護也能幫助您追回損失。
high-risk-breach-bank-account-step-one = 若您的帳號資訊已遭外洩，立即通知您的銀行。
high-risk-breach-bank-account-step-two = 修改您的帳號。
high-risk-breach-bank-account-step-three = 檢查帳號是否有未經授權的扣款。

# Social Security Number Breaches

high-risk-breach-social-security-title = 您的社會安全號碼已遭外洩
high-risk-breach-social-security-description = 詐騙者可以使用您的社會安全號碼註冊新貸款或申請新信用卡。快速採取行動防止財務損失。
high-risk-breach-social-security-step-one = <link_to_info>設定詐騙警示或是凍結信用額度來保護自己。</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>請檢查您的信用報告</link_to_info> 當中是否有無法識別的帳號。

# Social Security Number Modal

ssn-modal-title = 關於詐騙警示與信用凍結
ssn-modal-description-fraud-part-one = <b>詐騙警示</b>會要求企業確認您的身分才會以您的名義開新信用證。免費使用一年也不會影響您的信用分數。
ssn-modal-description-fraud-part-two = 若需自行訂一台請聯絡三個徵信機構中的任何一個。您不必三者都連絡。
ssn-modal-description-freeze-credit-part-one = <b>凍結您的信用額度</b>可防止任何人使用您的名字開立帳號。免費版也不會影響您的信用分數但需要先解壓縮才能開立帳號。
ssn-modal-description-freeze-credit-part-two = 若要凍結您的信用資訊請洽詢下列三個徵信機構 <equifax_link>Equifax</equifax_link>、<experian_link>Experian</experian_link> 及 <transunion_link>TransUnion</transunion_link> 。
ssn-modal-learn-more = 了解詐騙警示與信用凍結的更多資訊
ssn-modal-ok = 確定

# PIN Breaches

high-risk-breach-pin-title = 已洩漏您的 PIN 碼
high-risk-breach-pin-description = 及早採取行動可以讓您獲得更多法律保護也能幫助您追回損失。
high-risk-breach-pin-step-one = 若您的 PIN 碼已遭外洩立即通知您的銀行。
high-risk-breach-pin-step-two = 在任何用過的地方都可以更換 PIN 碼。
high-risk-breach-pin-step-three = 檢查帳號是否有未經授權的扣款。

# No high risk breaches found

high-risk-breach-none-title = 好消息我們並未找到任何高風險的資料外洩事件
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = 我們會根據您的電子郵件地址偵測資料外洩事件並未發現 { $email_list } 的任何高風險資料外洩事件。
high-risk-breach-none-sub-description-part-one = 高風險的資料外洩事件包含：
high-risk-breach-none-sub-description-ssn = 社會安全號碼
high-risk-breach-none-sub-description-bank-account = 銀行帳號資訊
high-risk-breach-none-sub-description-cc-number = 信用卡卡號
high-risk-breach-none-sub-description-pin = PIN 碼
high-risk-breach-none-continue = 繼續

# Security recommendations

security-recommendation-steps-label = 安全性建議
security-recommendation-steps-title = 以下是我們的建議：
security-recommendation-steps-cta-label = 知道了！

# Phone security recommendation

security-recommendation-phone-title = 保護您的手機號碼
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
       *[other] 您的電話號碼在 { $num_breaches } 場資料外洩事件中流出:
    }
security-recommendation-phone-description = 無法退回。但還是可以採取一些步驟來確保安全。
security-recommendation-phone-step-one = 封鎖垃圾號碼讓垃圾電話減少
security-recommendation-phone-step-two = 不要點擊來自未知寄件者的簡訊當中的鏈結若來自可信任的來源請直接來電確認

# Email security recommendation

security-recommendation-email-title = 保護您的電子郵件地址
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
       *[other] 您的電子郵件地址出現在 { $num_breaches } 場資料外洩事件中:
    }
security-recommendation-email-description = 很抱歉您無法修正此問題。但也可以採取一些措施來保護自己。
security-recommendation-email-step-one = 不要點擊來自未知寄件者的郵件鏈結若資料看起來來自可信任的來源請直接來電確認
security-recommendation-email-step-two = 注意<link_to_info>釣魚詐騙</link_to_info>
security-recommendation-email-step-three = 將可疑郵件標示為垃圾信並封鎖寄件者
security-recommendation-email-step-four = 使用 <link_to_info>{ -brand-relay } 轉寄信箱</link_to_info>來保護您的信箱

# IP security recommendation

security-recommendation-ip-title = 使用 VPN 加強保護隱私
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
       *[other] 您的 IP 地址出現在 { $num_breaches } 場資料外洩事件中:
    }
security-recommendation-ip-description = 您的 IP 地址可以準確地找到您的所在位置與網路業者。駭客可能會使用此資訊來尋找您的所在位置或嘗試連線到您的裝置。
security-recommendation-ip-step-one = 使用 VPN例如 <link_to_info>{ -brand-mozilla-vpn }</link_to_info> 隱藏您的實際 IP 地址隱私地使用網路。

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = 您的 { $breach_name } 密碼洩漏了
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = 它出現在 { $breach_date } 的資料外洩事件中。
leaked-passwords-description = 詐騙者可能會盜用您的帳號並且很可能會在其他帳號上使用您的密碼看看您用了沒有相同的密碼。在任何用過的地方立刻更改密碼以保護自己。
leaked-passwords-steps-title = 做什麼
leaked-passwords-steps-subtitle = 這需要您存取帳號的權限才能關閉所以您需要手動修正。
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = 更改 <b>{ $emails_affected }</b> 在 <link_to_breach_site>{ $breach_name }</link_to_breach_site> 的密碼。
leaked-passwords-step-two = 使用過這組密碼的地方都請修改。
leaked-passwords-mark-as-fixed = 標示為已處理
leaked-passwords-skip = 先略過
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] 估算值完成所需的時間: { $estimated_time } 分鐘每個網站
    }

# Leaked Security Questions

leaked-security-questions-title = 已洩漏您的安全性問題
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = 他們出現在 { $breach_date } 的 { $breach_name } 的資料外洩事件中。
leaked-security-questions-description = 詐騙者可以使用它們來存取您的帳號以及您使用過相同安全問題的任何其他網站。立刻更新保護您的帳號。
leaked-security-questions-steps-title = 做什麼
leaked-security-questions-steps-subtitle = 這需要您存取帳號的權限才能關閉所以您需要手動修正。
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = 更新 <link_to_breach_site>{ $breach_name }</link_to_breach_site> 上的 <b>{ $email_affected }</b> 的安全問題。
leaked-security-questions-step-two = 到其他使用了相同安全性問題的網站更新。請務必針對每個帳號使用不同的安全性問題。
