# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - 儀表板
breach-all-meta-title = { -brand-fx-monitor } - 所有資料外洩事件
breach-all-meta-social-title = { -brand-fx-monitor } 偵測到的所有資料外洩事件
breach-all-meta-social-description = 瀏覽 { -brand-fx-monitor } 偵測到的資料外洩事件清單，然後看看您的資訊是否已遭外洩。
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - { $company } 資料外洩事件
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = 您受到 { $company } 資料外洩事件的影響嗎？
breach-detail-meta-social-description = 請使用 { -brand-fx-monitor } 看看您的個人資訊是否在這場外洩事件中流出，並了解接下來該怎麼辦。
breach-scan-meta-title = { -brand-fx-monitor } - 資料外洩結果
breach-scan-meta-social-title = { -brand-fx-monitor } 資料外洩結果
breach-scan-meta-social-description = 登入 { -brand-fx-monitor } 處理各種資料外洩事件，並可監控是否有新事件發生。

## Breaches header

# Data classes pie chart title
breach-chart-title = 外洩資料
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select } 的資料外洩事件
# $count is the number of emails a user has added out of $total allowed
emails-monitored = 已監控 { $count } 組，最多 { $total } 組電子郵件信箱
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = 管理信箱

## Breaches resolved filter

filter-label-unresolved = 場未處理的事件
filter-label-resolved = 場處理過的事件

## Breaches table

column-company = 公司
column-breached-data = 外洩資料
column-detected = 事件偵測日期
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = 已解決
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = 進行中
breaches-resolve-heading = 事件處理方式：
breaches-none-headline = 找不到資料外洩事件
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = 好消息！{ $email } 沒有出現在已知的資料外洩事件中。我們將持續監控此信箱，並在有新的外洩事件發生時通知您。
breaches-none-cta-blurb = 想要監控其它信箱嗎？
breaches-none-cta-button = 新增電子郵件地址
breaches-all-resolved-headline = 已處理所有資料外洩事件
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = 做得好！您已處理掉所有 { $email } 相關的資料外洩事件。我們將持續監控此信箱，並在有新的外洩事件發生時通知您。
breaches-all-resolved-cta-blurb = 想要監控其它信箱嗎？
breaches-all-resolved-cta-button = 新增電子郵件地址
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = { $companyName } 於 { $breachDate }發生了資料外洩事件。事件發生並經過驗證後，已於 { $addedDate }列入我們的資料庫。此次事件外洩了下列資料：{ $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } 密碼管理員
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = 更新您的密碼並開啟兩階段驗證（2FA）。
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = 大部分情況下，我們建議您到該公司網站更改密碼。但<b>他們的網站可能已經離線或包含惡意內容</b>，請您<breached-company-link>造訪網站</breached-company-link>時務必小心。為了加強保護，請勿重複使用密碼，這樣萬一外洩後，無法用於登入其他網站。{ $passwordManagerLink } 可協助您安全地記錄所有密碼。

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = 使用諸如 { $firefoxRelayLink } 的電子郵件轉寄服務，來保護您的實際電子郵件信箱。
breach-checklist-email-body = 這樣就可以隱藏您的實際信箱，交由服務轉寄。

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 監控您的信用報告當中是否有您不記得申辦過的帳號、貸款、信用卡。
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = 您也可以考慮在 { $equifaxLink }、{ $experianLink } 或 { $transUnionLink } 凍結信用資訊，防止詐騙者使用您的個資開立帳號。此服務免費，也不會影響您的信用分數。

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = 回報此資安事件給您的信用卡發卡機構，並要求更換卡號。
breach-checklist-cc-body = 您也應該定期閱讀信用卡帳單，看看上面是否有無法確認的消費紀錄。

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = 若您的帳號資訊已遭外洩，立即通知您的銀行。
breach-checklist-bank-body = 處理得越快，您就有越多的法律保障能幫助您收到損害賠償。您可能也會想要確認帳戶中是否有任何不明的消費紀錄。

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = 通知您的發卡機構並立即更改卡片密碼。
breach-checklist-pin-body = 請確保您的新密碼，以及任何其他密碼，當中不含容易被猜到的資訊，例如您的生日或地址資訊。

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = 使用諸如 { $mozillaVpnLink } 之類的 VPN，在上網時保護隱私。
breach-checklist-ip-body = 您的 IP 地址能夠反推出您的所在位置與電信業者。透過 VPN 能夠隱藏您的實際 IP 地址，讓上網更有隱私。

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 更改任何可能包含您的地址的密碼或 PIN 碼。
breach-checklist-address-body = 很容易就能從公開紀錄中找到您的地址，會導致密碼與 PIN 碼容易被猜到。

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 更改任何包含您生日的密碼或 PIN 碼。
breach-checklist-dob-body = 很容易就能從公開紀錄中找到您的生日，會導致密碼與 PIN 碼容易被猜到。

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = 使用諸如 { $firefoxRelayLink } 的電話轉接服務，來保護您的實際號碼。

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = 更新您的安全問題。
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = 大部分情況下，我們建議您到該公司網站更新安全性問題。但<b>他們的網站可能已經離線或包含惡意內容</b>，請您<breached-company-link>造訪網站</breached-company-link>時務必小心。為了加強保護，請對任何也設定過該問題的重要帳號，也更新安全問題，並對所有帳號使用不同密碼。

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 對您使用過重複密碼的網站，設定不同而安全的密碼。
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = 這類密碼管理工具，例如 { $passwordManagerLink }（免費，又直接內建於 { -brand-firefox } 瀏覽器）可幫助您管理所有密碼，並於您的所有裝置上安全地使用。

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = 請聯絡 { $companyName }，通知他們這場資安事件，並詢問可以採取哪些行動保護您的權益。
