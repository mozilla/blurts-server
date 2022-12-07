# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = 請前往 <a>{ $breachedCompanyUrl }</a> 更改密碼，並開啟兩階段驗證（2FA）。

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = 使用諸如 <a>{ -brand-relay }</a> 的電子郵件轉寄服務，來保護您的實際電子郵件信箱。
breach-checklist-email-body = 這樣就可以隱藏您的實際信箱，交由服務轉寄。

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 監控您的信用報告當中是否有您不記得申辦過的帳號、貸款、信用卡。
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = 您也可以考慮在 <a>Equifax</a>、<a>Experian</a>、<a>TransUnion</a> 凍結信用資訊，防止詐騙者使用您的個資開立帳號。此服務免費，也不會影響您的信用分數。

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

breach-checklist-ip-header = 使用諸如 <a>{ -brand-mozilla-vpn }</a> 之類的 VPN，在上網時保護隱私。
breach-checklist-ip-body = 您的 IP 地址能夠反推出您的所在位置與電信業者。透過 VPN 能夠隱藏您的實際 IP 地址，讓上網更有隱私。

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 更改任何可能包含您的地址的密碼或 PIN 碼。
breach-checklist-address-body = 很容易就能從公開紀錄中找到您的地址，會導致密碼與 PIN 碼容易被猜到。

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 更改任何包含您生日的密碼或 PIN 碼。
breach-checklist-dob-body = 很容易就能從公開紀錄中找到您的生日，會導致密碼與 PIN 碼容易被猜到。

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = 使用諸如 <a>{ -brand-relay }</a> 的電話轉接服務，來保護您的實際號碼。

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = 到 <a>{ $breachedCompanyUrl }</a> 更新您的安全問題。
breach-checklist-sq-body = 使用長度夠長、內容隨機的答案，並保存在安全的地方。對您有設定過相同安全問題的網站都做相同的步驟來保護。

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 對您使用過重複密碼的網站，設定不同而安全的密碼。

## Prompts the user for changes when there is a breach detected of other types

