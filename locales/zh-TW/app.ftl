# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = 支援
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = 提供意見回饋
terms-and-privacy = 使用條款及隱私權
error-not-subscribed = 此電子郵件地址未訂閱 { -product-name }。
error-hibp-throttled = 與 { -brand-HIBP } 的連線太多。
error-hibp-connect = 連線到 { -brand-HIBP } 時發生錯誤。
error-hibp-load-breaches = 無法載入洩漏資訊。
hibp-notify-email-subject = { -product-name } 警告: 您的帳號資料已遭洩露。
home-title = { -product-name }
home-not-found = 找不到頁面。
oauth-invalid-session = Session 無效
oauth-confirmed-title = { -product-name } : 已訂閱
scan-title = { -product-name } : 掃描結果
user-add-invalid-email = 無效的電子郵件地址
user-add-email-verify-subject = 確認您要訂閱 { -product-name }。
user-add-title = { -product-name } : 確認電子郵件
user-verify-token-error = 缺少驗證 token。
user-verify-email-report-subject = 您的 { -product-name } 掃描報告
user-verify-title = { -product-name } : 已訂閱
user-unsubscribe-token-error = 退訂需要 token。
user-unsubscribe-token-email-error = 退訂需要 token 與 emailHash。
user-unsubscribe-title = { -product-name } : 退訂
user-unsubscribe-survey-title = { -product-name } : 退訂問卷
user-unsubscribed-title = { -product-name } : 已退訂

## Password Tips

pwt-section-headline = 更強的密碼 = 更好的保護
pwt-section-subhead = 若您的密碼被洩漏，也可以認定您的個人資料被洩露了。
pwt-section-blurb = 您的密碼不只可以保護帳號安全，還可以保護帳號中的所有個人資訊。駭客會根據一些不良的使用習慣而得益，例如在每個地方都使用相同的密碼，或是使用常見的密碼組合（還使用 123456 嗎？），這樣的話只要一個帳號被駭，他們就可以輕而易舉駭掉您的多個帳號。以下是能夠更加保護您的帳號的其他方式。
pwt-headline-1 = 為每個帳號使用不同密碼
pwt-summary-1 = 在每個帳號中都重複使用相同的密碼，會讓您門戶大開，可能造成身分竊盜事故。只要有人拿到您的唯一一組密碼，即可登入所有帳號。
pwt-headline-2 = 建立強大、難猜測的密碼
pwt-summary-2 = 駭客使用數以千計的常用密碼，來猜測您的密碼。若您的密碼越長、越隨機，就越不容易被猜到。
pwt-headline-3 = 把安全性問題當作額外一道的密碼保護
pwt-summary-3 = 網站不會確認您的答案是否正確，而只會檢查是否與原先設定的答案相符。您可以建立長度較長、隨機的答案，並儲存在安全的地方。
pwt-headline-4 = 使用工具來協助您記憶密碼
pwt-summary-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度的密碼，安全地儲存，並在上網時自動為您填寫表單
pwt-headline-5 = 使用雙因素身分驗證，多加一道安全保護
pwt-summary-5 = 兩階段驗證需要您額外提供一組資料（例如透過簡訊收到的驗證碼）進行驗證後，才可登入帳號。若別人只拿到您的密碼，也無法登入。
pwt-headline-6 = 訂閱 { -product-name-nowrap } 警報
pwt-summary-6 = 網站資料外洩事件越來越多，當有新的洩露事件加入到我們的資料庫後，{ -product-name-nowrap } 就會傳送警報給您，這樣就可以快速採取措施，保護您的帳號。
landing-headline = 您獲得安全，不受駭客影響的權利，從這裡開始。
landing-blurb = { -product-name-nowrap } 為您提供工具來確保個人資料的安全。看看駭客們已經知道您的哪些資料，以及可如何搶先一步，確保安全。
scan-label = 看看您有沒有遭受密碼洩露事件的影響。
scan-placeholder = 輸入電子郵件地址
scan-privacy = 不會儲存您的電子郵件地址。
scan-submit = 搜尋您的 E-Mail 信箱
scan-another-email = 掃描另一個 E-Mail 信箱
scan-featuredbreach-label = 看看您的 <span class="bold">{ $featuredBreach }</span> 帳號是否遭到入侵。
scan-error = 必須是有效的電子郵件地址。
signup-banner-headline = { -product-name-nowrap } 會為您的線上帳號偵測是否有任何風險存在。
signup-banner-blurb = { -product-name-nowrap } 詳細報告可顯示您在哪些網站的帳號資料已遭竊或洩漏。我們也會在您的帳號出現於新的資料外洩事件時，通知您。
download-firefox-bar-blurb = { -product-name-nowrap } 是由<span class="nowrap">全新 { -brand-name }</span> 提供。
download-firefox-bar-link = 立即下載 { -brand-name }
download-firefox-banner-blurb = 自行控制您的瀏覽器
download-firefox-banner-button = 下載 { -brand-name }
signup-modal-headline = 註冊 { -product-name-nowrap }
signup-modal-blurb = 為您的帳號訂閱完整報告，在發生新資料外洩事件時收到警報，以及來自 { -product-name-nowrap } 的安全性小秘訣。
signup-modal-close = 關閉
get-your-report = 取得您的報告
signup-modal-verify-headline = 確認訂閱
signup-modal-verify-blurb = 我們寄送了驗證鏈結到 <span id="submitted-email" class="medium"></span> 。
signup-modal-verify-expiration = 該鏈結將於 24 小時後過期。
signup-modal-verify-resend = 沒在收件匣或垃圾信件匣中找到嗎？點此重送。
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = 已送出！
signup-with-fxa = 使用 { -brand-name } 帳號註冊
form-signup-placeholder = 輸入電子郵件地址
form-signup-checkbox = 從 { -brand-Mozilla } 與 { -brand-name } 取得最新資訊。
sign-up = 訂閱
form-signup-error = 必須是有效的電子郵件地址
no-breaches-headline = 一切都好。
found-breaches-headline = 過去的資料洩露事件中，包含您的資料。
no-breaches = 好消息，您的電子郵件信箱並沒有出現在我們的基本掃描資料當中。但資料外洩事件隨時都有可能發生，您還有更多事情能做。可訂閱 { -product-name-nowrap } 取得完整掃描報告、在資料外洩時收到警報，以及如何保護密碼的相關秘訣。
featured-breach-results =
    { $breachCount ->
        [one] 您的帳號出現在 <span class="bold"> { $featuredBreach } </span> 資料外洩事件中，此外還有 1 場事件。
       *[other] 您的帳號出現在 <span class="bold"> { $featuredBreach } </span> 資料外洩事件中，此外還有 { $breachCount } 場事件。
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] 您的帳號並未出現在 <span class="bold">{ $featuredBreach }</span> 資料外洩事件中，但出現在其他 1 場事件中。
       *[other] 您的帳號並未出現在 <span class="bold">{ $featuredBreach }</span> 資料外洩事件中，但出現在其他 { $breachCount } 場事件中。
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] 您的帳號出現在 { $breachCount } 資料外洩事件中。
       *[other] 與您的電子郵件信箱相關聯的帳號，出現在下列 { $breachCount } 場資料外洩事件中。
    }
show-more-breaches = 顯示更多
what-to-do-headline = 若您的資料也出現在洩露事件中時，該怎麼辦
what-to-do-subhead-1 = 改掉密碼，就算是舊帳號也一起改掉
what-to-do-blurb-1 = 若您無法登入，請聯絡網站詢問要如何更改密碼，或是刪除帳號。發現您不認識的帳號嗎？有可能網站改名，或別人用您的身分註冊帳號。
what-to-do-subhead-2 = 若您重複使用被洩漏的密碼，請改掉該密碼
what-to-do-blurb-2 = 駭客可能會使用您被洩漏的密碼，來嘗試登入您在別的網站上的帳號。請針對每個網站設定不同密碼，尤其是銀行帳號、電子郵件帳號，以及任何您會儲存個人資料的網站。
what-to-do-subhead-3 = 採取額外步驟來保護您的財務帳號
what-to-do-blurb-3 = 大多數的資料洩露事件只會洩露出電子郵件地址與密碼，但某些事件也會包含敏感的個人財務資訊。若您的銀行帳號或信用卡卡號也被洩露出來，請通知銀行防止盜用，並檢查月結單，看看是否有不認識的交易紀錄。
what-to-do-subhead-4 = 想辦法建立好的密碼，並確保密碼安全。
what-to-do-blurb-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度的密碼，安全地保存密碼，並在上網時自動為您填寫表單。
# breach-date = the calendar date a particular data theft occurred. 
breach-date = 發生日期:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 洩漏帳號數量:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 洩漏資料:
confirmed = 確認！<br />您已訂閱完成！
confirmed-blurb = { -product-name-nowrap } 很快就會寄送完整報告，並在您的帳號出現於新的資料外洩事件時，也發送警報給您。
confirmed-social-blurb = 若您的資料遭到外洩，很有可能您的朋友、家人、網路上的朋友也有受到影響。也讓他們知道 { -product-name-nowrap } 吧！
unsub-headline = 取消訂閱 { -product-name-nowrap }
unsub-blurb = 將會從 { -product-name-nowrap } 郵寄清單把您的信箱移除，您不會再於有新的資料外洩事件發生時收到警報。
unsub-button = 取消訂閱
unsub-survey-headline = 您已退訂成功。
unsub-survey-blurb = 您已取消訂閱 { -product-name-nowrap }，感謝使用此服務。您願意花點時間回答關於使用經驗的意見調查嗎？
unsub-survey-form-label = 您為什麼要退訂 { -product-name-nowrap } 警報？
unsub-reason-1 = 我覺得這些警報不會讓我的資料更安全
unsub-reason-2 = 我收到太多來自 { -product-name-nowrap } 的郵件
unsub-reason-3 = 我覺得這個服務沒有價值
unsub-reason-4 = 我已經採取措施來保護帳號
unsub-reason-5 = 我使用其他服務來監控我的帳號
unsub-reason-6 = 以上皆非
unsub-survey-thankyou = 感謝您的意見回饋！
unsub-survey-error = 請選擇。
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = 分享
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = 下載 { -brand-Quantum }
download-firefox-mobile = 下載 { -brand-name } 行動版
# Features here refers to Firefox browser features. 
features = 功能
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta、Nightly、Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = 本頁的部分內容著作權為 &#x24B8;1998–2018 由個別 mozilla.org 貢獻者所有。內容依照 <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">創用 CC 授權條款</a> 進行授權。
# Breach data provided by Have I Been Pwned.
hibp-attribution = 資料洩露情況由 { $hibp-link } 提供
site-description = 您的帳號資料是否在資料外洩事件中被洩漏或遭竊？可到 { -product-name } 檢查。歡迎在我們的資料庫中查詢並訂閱警報。
