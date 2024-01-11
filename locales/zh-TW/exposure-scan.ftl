# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

exposure-landing-hero-heading = 看看您的個人資訊是否已遭外洩
exposure-landing-hero-lead = 使用來自 { -brand-firefox } 開發者所打造的隱私權保護工具來確保安全。這些工具可以保護您不被公開或出賣您個資的駭客或公司所侵害。我們也會在有任何資料外洩事件發生時通知您，為您尋找並移除外洩的資訊，並持續尋找新的資料外洩事件。
exposure-landing-hero-email-label = 電子郵件地址
exposure-landing-hero-email-placeholder = 輸入電子郵件地址
exposure-landing-hero-cta-label = 檢查是否有外洩事件
exposure-landing-result-loading = 載入中，請稍候…
exposure-landing-result-error = 檢查資料外洩事件時有點東西不對勁。請重新整理頁面後再試一次。
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [zero] 我們<count>沒有</count>發現 <email>{ $email }</email> 出現在資料外洩事件中。
       *[other] 我們發現 <email>{ $email }</email> 出現在 <count>{ $count }</count> 場資料外洩事件中。
    }
exposure-landing-result-card-added = 事件紀錄時間：
exposure-landing-result-card-data = 外洩資料：
exposure-landing-result-card-nothing = 找不到資料外洩事件
exposure-landing-result-footer-attribution = 資料外洩事件資訊是由 <hibp-link>{ -brand-HIBP }</hibp-link> 提供
exposure-landing-result-overflow-hero-lead = 登入後即可了解要如何解決這些事件的詳細步驟、檢視所有事件並持續監控是否有新的事件發生。
exposure-landing-result-overflow-hero-cta-label = 登入後即可處理資料外洩事件
exposure-landing-result-overflow-footer-cta-label = 登入即可檢視全部事件
exposure-landing-result-some-hero-lead = 登入後即可了解要如何解決這些事件的詳細步驟、檢視所有事件並持續監控是否有新的事件發生。
exposure-landing-result-some-hero-cta-label = 登入以處理資料外洩事件
exposure-landing-result-some-footer-cta-label = 登入以處理資料外洩事件
exposure-landing-result-none-hero-lead = 好消息！沒有找到任何已知的資料外洩事件。若要確保安全，可以訂閱新事件的警報。我們會為您持續監控信箱，並在發生新的資料外洩事件時主動通知您。
exposure-landing-result-none-hero-cta-label = 訂閱資料外洩事件警示
exposure-landing-result-none-footer-cta-label = 訂閱警示
