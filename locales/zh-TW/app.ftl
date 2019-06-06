# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = 支援
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = 關於 Firefox 警報
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = 提供意見回饋
terms-and-privacy = 使用條款及隱私權
error-scan-page-token = 您在短時間內嘗試搜尋太多電子郵件地址，由於安全因素，我們暫時無法讓您進行新搜尋。請稍候再試一次。
error-could-not-add-email = 無法將電子郵件地址新增到資料庫。
error-not-subscribed = 此電子郵件地址未訂閱 { -product-name }。
error-hibp-throttled = 與 { -brand-HIBP } 的連線太多。
error-hibp-connect = 連線到 { -brand-HIBP } 時發生錯誤。
error-hibp-load-breaches = 無法載入資料外洩資訊。
error-must-be-signed-in = 您必須先登入 { -brand-fxa }。
home-title = { -product-name }
home-not-found = 找不到頁面。
oauth-invalid-session = Session 無效
oauth-confirmed-title = { -product-name } : 已訂閱
scan-title = { -product-name } : 掃描結果
user-add-invalid-email = 無效的電子郵件地址
user-add-email-verify-subject = { -product-name } 訂閱確認
user-add-title = { -product-name } : 確認電子郵件
error-headline = 錯誤
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
pwt-section-subhead = 若您的密碼被洩漏出去，也可以認定您的個人資料外洩了。
pwt-section-blurb = 您的密碼不只可以保護帳號安全，還可以保護帳號中的所有個人資訊。駭客會根據一些不良的使用習慣而得益，例如在每個地方都使用相同的密碼，或是使用常見的密碼組合（還使用 123456 嗎？），這樣的話只要一個帳號被駭，他們就可以輕而易舉駭掉您的多個帳號。以下是能夠更加保護您的帳號的其他方式。
pwt-headline-1 = 為每個帳號使用不同密碼
pwt-summary-1 = 為每個帳號都重複使用相同密碼，會讓您門戶大開，可能造成身分竊盜事故。只要有人拿到您的唯一一組密碼，即可登入所有帳號。
pwt-headline-2 = 建立強大、難猜測的密碼
pwt-summary-2 = 駭客使用數以千計的常用密碼，來猜測您的密碼。若您的密碼越長、越隨機，就越不容易被猜到。
pwt-headline-3 = 把安全性問題當作額外密碼保護
pwt-summary-3 = 網站不會確認您的答案是否正確，而只會檢查是否與原先設定的答案相符。您可以建立長度較長、隨機的答案，並儲存在安全的地方。
pwt-headline-4 = 使用工具來協助您記憶密碼
pwt-summary-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度密碼，安全地儲存，並在上網時自動為您填寫表單
pwt-headline-5 = 使用雙因素身分驗證，多加一道安全保護
pwt-summary-5 = 兩階段驗證需要您額外提供一組資料（例如透過簡訊收到的驗證碼）進行驗證後，才可登入帳號。若別人只拿到您的密碼，也無法登入。
pwt-headline-6 = 訂閱 { -product-name-nowrap } 警報
pwt-summary-6 = 網站資料外洩事件越來越多，當有新的外洩事件加入到我們的資料庫後，{ -product-name-nowrap } 就會傳送警報給您，這樣就可以快速採取措施，保護您的帳號。
landing-headline = 讓您獲得安全，不受駭客影響的權利，從這裡開始。
landing-blurb = { -product-name-nowrap } 為您提供工具來確保個人資料的安全。看看駭客們已經知道您的哪些資料，以及可如何搶先一步，確保安全。
scan-label = 看看您有沒有遭受資料外洩事件的影響。
scan-placeholder = 輸入電子郵件地址
scan-privacy = 不會儲存您的電子郵件地址。
scan-submit = 搜尋您的電子郵件地址
scan-another-email = 掃描另一個電子郵件地址
scan-featuredbreach-label = 看看您的 <span class="bold">{ $featuredBreach }</span> 帳號是否遭到外洩。
sensitive-breach-email-required = 資料外洩事件中包含個人敏感資料，需要電子郵件驗證。
scan-error = 必須是有效的電子郵件地址。
signup-banner-headline = { -product-name-nowrap } 會為您的線上帳號偵測是否有任何風險存在。
signup-banner-blurb = { -product-name-nowrap } 詳細報告可顯示您在哪些網站的帳號資料已遭竊或外洩。我們也會在您的帳號出現於新的資料外洩事件時通知您。
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
found-breaches-headline = 您的資料出現在過去的資料外洩事件中。
no-breaches = 好消息，您的電子郵件信箱並沒有出現在我們的基本掃描資料當中。但資料外洩事件隨時都有可能發生，您還有更多事情能做。可訂閱 { -product-name-nowrap } 取得完整掃描報告、在資料外洩時收到警報，以及如何保護密碼的相關秘訣。
featured-breach-results =
    { $breachCount ->
        [0] 您的帳號出現在 <span class="bold"> { $featuredBreach } </span> 資料外洩事件中，但沒有出現在其他已知的事件。
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
       *[other] 與您的電子郵件地址相關聯的帳號，出現在下列 { $breachCount } 場資料外洩事件中。
    }
show-more-breaches = 顯示更多
what-to-do-headline = 當您的資料被外洩時該怎麼辦
what-to-do-subhead-1 = 改掉密碼，就算是很久沒用的舊帳號也要改掉
what-to-do-blurb-1 = 若您無法登入，請聯絡網站詢問要如何更改密碼，或是刪除帳號。發現您不認識的帳號嗎？有可能網站改名，或別人用您的身分註冊帳號。
what-to-do-subhead-2 = 若您也在別的網站使用被洩漏的密碼，也請改掉該網站的密碼
what-to-do-blurb-2 = 駭客可能會使用您被洩漏的密碼，來嘗試登入您在別的網站上的帳號。請針對每個網站設定不同密碼，尤其是網路銀行、電子郵件信箱，以及任何您會儲存個人資料的網站。
what-to-do-subhead-3 = 進一步保護您的銀行帳號
what-to-do-blurb-3 = 大多數的資料外洩事件只會外洩出電子郵件地址與密碼，但某些事件也會包含敏感的個人財務資訊。若您的銀行帳號或信用卡卡號也被洩露出來，請通知銀行防止盜用，並檢查月結單，看看是否有不認識的交易紀錄。
what-to-do-subhead-4 = 想辦法建立夠強的密碼，並確保密碼安全。
what-to-do-blurb-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度密碼，安全地儲存，並在上網時自動為您填寫表單。
# breach-date = the calendar date a particular data theft occurred. 
breach-date = 發生日期:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 洩漏帳號數量:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 洩漏資料內容:
confirmed = 確認！<br />您已訂閱完成！
confirmed-blurb = { -product-name-nowrap } 很快就會寄送完整報告，並在您的帳號出現於新的資料外洩事件時，也發送警報給您。
confirmed-social-blurb = 若您的資料遭到外洩，很有可能您的朋友、家人、網路上的朋友也有受到影響。也讓他們知道 { -product-name-nowrap } 吧！
unsub-headline = 取消訂閱 { -product-name-nowrap }
unsub-blurb = 將會從 { -product-name-nowrap } 郵寄清單把您的信箱移除，您不會再於有新的資料外洩事件發生時收到警報。
unsub-button = 取消訂閱
fxa-unsub-headline = 取消訂閱 { -product-name } 警報。
fxa-unsub-blurb =
    您將不再收到 { -product-name } 警報。
    您的 { -brand-fxa } 帳號依然存在，而且可能還會
    收到其他帳號相關訊息。
unsub-survey-form-label = 您為什麼要退訂 { -product-name-nowrap } 警報？
unsub-reason-1 = 我覺得這些警報不會讓我的資料更安全
unsub-reason-2 = 我收到太多來自 { -product-name-nowrap } 的郵件
unsub-reason-3 = 我覺得這個服務沒有價值
unsub-reason-4 = 我已經採取措施來保護帳號
unsub-reason-5 = 我使用其他服務來監控我的帳號
unsub-reason-6 = 以上皆非
unsub-survey-thankyou = 感謝您的意見回饋！
unsub-survey-error = 請選擇。
unsub-survey-headline-v2 = 您已退訂成功。
unsub-survey-blurb-v2 =
    您將不再收到 { -product-name } 警報。
    方便花一點時間告訴我們您的使用體驗嗎？
unsub-survey-button = 送出回應
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
# Breach data provided by Have I Been Pwned.
hibp-attribution = 資料外洩情況由 { $hibp-link } 提供
site-description = 您的帳號資料是否在資料外洩事件中被外洩或遭竊？可到 { -product-name } 檢查。歡迎在我們的資料庫中查詢並訂閱警報。
confirmation-headline = 您的 { -product-name } 報告即將完成。
confirmation-blurb = 任何人都可能遇到資料外洩。告訴朋友這個消息，這樣親朋好友才能也來檢查看看帳號是否安全。
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = 其他
share-twitter = 一般人大約有 100 組線上帳號，您有任何帳號遭到資料外洩事故影響嗎？快來檢查看看。
share-facebook-headline = 看看您的帳號是否也在資料外洩事件當中
share-facebook-blurb = 您的帳號也出現在資料外洩事件當中嗎？
og-site-description = 使用 { -product-name }，看看您的帳號是否也在資料外洩事件當中。註冊在未來有與您相關的資料外洩事故時，收到警報與祕訣以確保帳號安全。
mozilla-security-blog = { -brand-Mozilla } 安全性部落格
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = 社交網路
show-all = 顯示全部
fxa-landing-blurb = 看看駭客已經掌握您的哪些資料，並且了解如何遠離他們。
fxa-scan-label = 看看您是否有資料已遭外洩。
fxa-welcome-headline = 歡迎使用 { -product-name }。
fxa-welcome-blurb = 一切都搞定了。若 { $userEmail } 出現在資料外洩事件中，我們會通知您。
fxa-scan-another-email = 想要檢查另一個電子郵件地址嗎？
# Search Firefox Monitor
fxa-scan-submit = 搜尋 { -product-name }
sign-up-to-check = 註冊進行檢查
sign-in = 登入
sign-out = 登出
full-report-headline = 您的 { -product-name } 報告
see-full-report = 看完整報告
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
fxa-download-firefox-bar-blurb = 由 { -brand-name } 提供給您。比起 { -brand-Chrome } 上網速度快上兩倍，記憶體使用量只要七折。
fxa-download-firefox-bar-link = 立刻下載
fxa-download-firefox-banner-blurb = 更好、更快的網頁載入速度，占用的記憶體也更少。
user-fb-compromised-headline = { $userEmail } 有出現於 { $breachName } 的資料外洩事件中。
guest-fb-compromised-headline = 此電子郵件地址有出現於 { $breachName } 的資料外洩事件中。
user-zero-breaches-headline = { $userEmail } 未出現於任何資料外洩事件。
guest-zero-breaches-headline = 此電子郵件地址未出現於任何資料外洩事件。
user-scan-results-headline =
    { $breachCount ->
       *[other] { $userEmail } 出現於 { $breachCount } 場資料外洩事件中。
    }
guest-scan-results-headline =
    { $breachCount ->
       *[other] 此電子郵件地址出現於 { $breachCount } 場資料外洩事件中。
    }
user-no-breaches-blurb = 若此電子郵件地址出現在新的資料外洩事件中，我們會通知您。
guest-no-breaches-blurb =
    若想知道此電子郵件地址是否出現在包含敏感資料的個資外洩事件當中，請註冊 { -brand-fxa }。
    我們也會在此信箱出現於新的外洩事件時通知您。
user-one-breach-blurb = 此次資料外洩事件包含下列個資。
user-fb-compromised-blurb =
    { $breachCount ->
       *[other] 您的電子郵件地址也出現於另 { $breachCount } 場資料外洩事件中。
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
       *[other] 此電子郵件地址也出現於另 { $breachCount } 場資料外洩事件中。
    }
user-fb-compromised-single = 此次資料外洩事件包含下列個資。請盡快修改密碼。
user-generic-fb-compromised-single = 此次資料外洩事件包含下列個資。
guest-fb-compromised-single-v2 =
    此事件外洩了下列個人資訊。
    註冊免費的 { -brand-fxa } 即可收到關於您的資料外洩事件
    的完整報告，及其他 { -brand-Mozilla } 服務的相關資訊。
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
       *[other] 此電子郵件地址也出現於另 { $breachCount } 場資料外洩事件中。註冊免費的 { -brand-fxa } 即可收到關於您的資料外洩事件的完整報告，及其他 { -brand-Mozilla } 服務的相關資訊。
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] 您未出現於 { $breachName } 外洩事件中，但我們在其他事件發現該電子郵件地址。
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] 此電子郵件地址未出現於 { $breachName } 外洩事件中，但我們在其他事件發現該地址。
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
       *[other] 此電子郵件地址不在 { $breachName } 的資料外洩事件中，但有出現在其他事件。註冊免費的 { -brand-fxa } 即可收到關於您的資料洩漏事件的完整報告，及其他 { -brand-Mozilla } 服務的相關資訊。
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
       *[other] 此次資料外洩事件包含下列個資。請盡快修改密碼。
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
       *[other] 以下 { $breachCount } 場資料外洩事件包含下列個資。
    }
have-an-account = 已經有帳號了嗎？
signup-banner-sensitive-blurb = 看看駭客已經掌握您的哪些資料，並且了解如何遠離他們。我們也會在此信箱出現於新的資料外洩事件時通知您。
fxa-pwt-section-blurb = 密碼可保護帳號中的所有個人資訊。駭客會根據不良的使用習慣，例如在每個地方都使用相同的密碼，或是使用常見的密碼組合（還使用 123456 嗎？），這樣的話只要一個帳號被駭，他們就可以輕而易舉駭掉您的多個帳號。
fxa-pwt-summary-2 = 短的密碼比較容易被駭客們猜到。使用越長的密碼越好，另外除了字母，還可以再加數字、特殊符號來增加複雜度。
fxa-pwt-summary-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度密碼，安全地儲存，並在上網時自動為您填寫表單。
fxa-pwt-summary-6 = 資料外洩事件層出不窮。若您的個人資料出現在新的資料外洩事件中，{ -product-name } 會發送警報給您，這樣就可以採取措施來保護帳號。
fxa-what-to-do-blurb-1 = 若您無法登入，請詢問網站要如何更改密碼。發現您不認識的帳號嗎？有可能是您的資料已經被賣掉了；也有可能是單純忘記註冊過，或是網站改名。
fxa-what-to-do-subhead-2 = 不要再使用已經洩漏出去的密碼，並且將每個使用該密碼的網站密碼全部改掉。
fxa-wtd-blurb-2 = 駭客可能會使用您被洩漏的密碼，來嘗試登入您在別的網站上的帳號。請針對每個帳號設定不同密碼，尤其是網路銀行、電子郵件信箱，以及任何您會儲存個人資料的網站。
fxa-what-to-do-blurb-3 = 大多數的資料外洩事件只會流出電子郵件地址與密碼，但某些事件也會包含敏感的個人財務資訊。若您的銀行帳號或信用卡卡號也被洩露出來，請通知銀行防止盜用，並檢查月結單，看看是否有不認識的交易紀錄。
fxa-what-to-do-subhead-4 = 取得能幫助您記住所有密碼，並確保密碼安全的建議。
fxa-what-to-do-blurb-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員可安全地儲存密碼，並在上網時自動為您填寫表單。記得在手機與電腦上都使用密碼管理員，這樣就不用把密碼通通背下來。
fb-landing-headline = 您的資訊是否也出現在 { $breachName } 的資料外洩事件中？
copyright = 本頁的部分內容著作權為 ©1999–{ $year } 由個別 mozilla.org 貢獻者所有。
content-available = 使用創用 CC 授權條款授權大眾使用。
# Alerts is a noun
sign-up-for-alerts = 訂閱警報
sign-up-for-fxa-alerts = 訂閱 { -product-name } 警報。
create-free-account = 註冊免費的 { -brand-fxa } 即可收到關於您的資料外洩事件的完整報告，及其他 { -brand-Mozilla } 服務的相關資訊。
get-your-report-and-sign-up = 取得報告並訂閱警報通知。
# Link title
frequently-asked-questions = 常見問題
about-firefox-monitor = 關於 { -product-name }
mozilla-dot-org = Mozilla.org
preferences = 偏好設定
# Link title.
home = 首頁
# Link title
breaches = 外洩事件
# Link title
security-tips = 安全小秘訣
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = 開啟 { -brand-fxa } 導航列
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = 最新公開的外洩事件
# Link title
more-about-this-breach = 關於此資料外洩事件的更多資訊
take-control = 搶回個人資料的控制權
cant-stop-hackers = 您無法防止駭客入侵，但可以透過改變習慣，讓他們更難侵入您的帳號。
read-more-tips = 閱讀更多安全性小秘訣
how-hackers-work = 了解駭客都怎麼作
monitor-your-online-accounts = 使用 { -brand-fxa } 訂閱帳號外洩資訊
stay-alert = 隨時注意最新的資料外洩事件
if-your-info = 若您的資訊出現在新的資料外洩事件中，我們會通知您。
search-all-emails = 搜尋您使用的信箱帳號，看看是否曾發生相關資料外洩事件，也在有新威脅時收到通知。
monitor-several-emails = 監控多個電子郵件信箱
take-action = 採取行動，保護帳號
keep-your-data-safe = 看看做哪些事情，就能保護您的資料不受網路犯罪影響。
website-breach = 網站資訊外洩
sensitive-breach = 網站敏感性資訊外洩
data-aggregator-breach = 資料收集器資訊外洩
unverified-breach = 未經查證的資料外洩
spam-list-breach = 垃圾郵件清單資料外洩
website-breach-plural = 網站資料外洩
sensitive-breach-plural = 敏感性資料外洩
data-aggregator-breach-plural = 資料收集器資訊外洩
unverified-breach-plural = 未經查證的資料外洩
spam-list-breach-plural = 垃圾郵件清單資料外洩
what-data = 洩漏了哪些資料:
sensitive-sites = { -product-name } 如何對待這些敏感性網站？
sensitive-sites-copy = { -product-name } 僅會在電子郵件信箱驗證後，才顯示與這些資料外洩事件相關聯的帳號。也就是說只有您能看到您的帳號是否與此事件有關（除非有別人也能使用使用您的信箱帳號。）
delayed-reporting-headline = 為什麼要這麼久才公開這些事件？
delayed-reporting-copy = 有的時候，資料外洩後可能要花幾個月甚至幾年，您的登入資訊才會出現在暗網上。當我們發現外洩的資料並確認無誤後，就會加入資料庫。
about-fxm-headline = 關於 { -product-name }
about-fxm-blurb = { -product-name } 會在您的帳號出現於資料外洩事件時警告您。您可以在此看看帳號是否出現於某場資料外洩事件、在有新的外洩事件時收到警報，並採取行動保護您的線上帳號。{ -product-name } 是由 { -brand-Mozilla } 所提供。
fxm-warns-you = { -product-name } 會在您的電子郵件地址出現於線上資料外洩事件時警告您。可以在此看看有哪些資料已遭外洩、了解如何保護線上帳號，並在您新的信箱出現於新的外洩事件時接收警報。
# How Firefox Monitor works
how-fxm-works = { -product-name } 的運作原理
how-fxm-1-headline = 進行基礎搜尋
how-fxm-1-blurb = 搜尋您的電子郵件地址，是否出現於 2007 年起，已公開的資訊外洩事件資料庫中。基礎搜尋可找出大部分資料外洩事件，但不會列出包含個人敏感資料的事件。
how-fxm-2-headline = 訂閱資料外洩事件警報
how-fxm-2-blurb = 註冊 { -brand-fxa } 來監控您的信箱是否出現於各種資料外洩事件中。確認帳號後，也會收到包含外洩的敏感資料等過去事件的相關完整報告。
how-fxm-3-headline = 在瀏覽器中接收通知
how-fxm-3-blurb = 使用 { -brand-name } 的時候，當您開啟曾發生外洩事故的網站時將會收到通知。可以立即了解您是否也身處資料外洩事件之中，可以採取哪些行動。
wtd-after-website = 發生網站資料外洩事件後該做什麼
wtd-after-data-agg = 資料收集器發生資訊外洩後，要作什麼事？
what-is-data-agg = 「資料收集器」是什麼？
what-is-data-agg-blurb = 資料收集器，或是資料的交易商，會自行收集公開資料或向其他公司購買資料。他們會整合好資料，再銷售給其他公司做行銷用途。受這類事件影響的人較不容易遇到財務詐欺，但駭客可以使用此資料來假裝為他人，或進行分類。
protect-your-privacy = 保護您的線上隱私權
no-pw-to-change = 跟網站資料外洩不一樣的是，沒有密碼可以更改。
avoid-personal-info = 不要在密碼中使用個人資訊
avoid-personal-info-blurb = 很簡單就能在網路上找到生日、地址、家人的名字等資料。絕對不要把相關資料放在密碼當中。

## What to do after data breach tips

change-pw = 更改密碼
even-for-old = 就算是舊帳號，改密碼也很重要。
make-new-pw-unique = 使用不同且獨特的新密碼
strength-of-your-pw = 密碼的強度，會與您在網路上的安全有直接關聯。
create-strong-passwords = 如何建立高強度的密碼
stop-reusing-pw = 停止重複使用密碼
create-unique-pw = 在每個網站使用不同密碼，並將其儲存於安全的地方（例如密碼管理員）。
five-myths = 關於密碼管理員的 5 個迷思
create-a-fxa = 註冊 { -brand-fxa } 即可取得關於資料外洩事件的完整報告，並接收警報。
feat-security-tips = 保護資料的安全小秘訣
feat-sensitive = 進階搜尋敏感資料外洩事件
feat-enroll-multiple = 註冊多組 E-Mail 信箱，來監控外洩事件
sign-up-for-fxa = 註冊 { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
       *[other] 出現在 { $breachCount } 場已知的外洩事件中。
    }
see-if-breached = 看看您是否也出現在資料外洩事件中。
check-for-breaches = 檢查是否有外洩事件
find-out-what-hackers-know = 看看駭客已經知道你的哪些事情，也了解如何搶先一步遠離他們。
search-for-your-email = 搜尋自 2007 年起的公開資料外洩事故當中，是否包含您的電子郵件帳號。
back-to-top = 回到頁面頂端
comm-opt-0 = 當下列我的任一個電子郵件信箱地址出現在資料外洩事故時，發信通知我。
comm-opt-1 = 將所有外洩警報發送到 { $primaryEmail }。
stop-monitoring-this = 停止監控此信箱。
resend-verification = 重寄驗證信
add-new-email = 新增電子郵件信箱
send-verification = 寄送驗證鏈結
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = 全球通訊
breach-summary = 外洩事件摘要
show-breaches-for-this-email = 顯示所有與這個信箱相關的資料外洩事件。
link-change-primary = 更改主要電子郵件信箱地址
remove-fxm = 移除 { -product-name }
remove-fxm-blurb = 關閉 { -product-name } 的警報。您的 { -brand-fxa } 仍然有效，還是會收到其它與帳號相關的電子報。
manage-email-addresses = 管理電子郵件地址
latest-breach-link = 看看您是不是也在這場資料外洩事件當中
welcome-back = { $userName }，歡迎回來！
welcome-user = { $userName }，歡迎！
breach-alert-subject = { -product-name } 發現您的信箱出現在新的資料外洩事件中。
your-info-was-discovered-headline = 在新的資料外洩事件中發現了您的資訊。
your-info-was-discovered-blurb = 您註冊過當 E-Mail 出現在新的資料外洩事件時，要接收 { -product-name } 警報。以下是我們關於這場事件所了解的資訊。
what-to-do-after-breach = 發生資料外洩事件後該做什麼？
ba-next-step-1 = 更改密碼，使用強而獨特的密碼。
ba-next-step-blurb-1 = 高強度的密碼，須包含大寫字母、小寫字母、特殊符號、數字的組合。請勿在密碼中包含地址、生日、姓名等個人資料。
ba-next-step-2 = 在所有網站，停止使用該組遭洩漏的密碼。
ba-next-step-blurb-2 = 網路罪犯可能會在暗網上找到您的密碼，並用來登入您的其它帳號。最好的保護方式就是針對每個網站都使用不同密碼。
ba-next-step-3 = 獲得建立更好密碼的幫助，並且確保密碼安全。
ba-next-step-blurb-3 = 使用密碼管理員來建立強而獨特的密碼，並安全地儲存登入資訊，這樣就可以同步到您的所有裝置中使用。
faq1 = 我不認識這家公司或網站，為什麼我跟這個外洩事件有關係？
faq2 = 為什麼花了這麼久才通知我有資料外洩事件？
faq3 = 我怎麼知道這封信是真的來自 { -product-name }？
new-breaches-found =
    { $breachCount ->
       *[other] 找到 { $breachCount } 場新的資料外洩事件
    }
sign-up-headline-1 = 註冊 { -brand-fxa }，取得資料外洩警報。
account-not-required = 不需要註冊 { -brand-fxa } 也能使用 { -brand-name } 瀏覽器。您可能會收到有關 { -brand-Mozilla } 相關服務的資訊。
get-alerted = 在有新的外洩事件時，接收警報。
was-your-info-exposed = 您的資訊是否出現在 { $breachName } 的資料外洩事件？
find-out-if = 看看您的資料是否出現在這場外洩事件中。
fb-not-comp = 這個信箱沒有出現在 { $breachName } 外洩事件。
other-breaches-found =
    { $breachCount ->
       *[other] 但出現在其他 { $breachCount } 場外洩事件中。
    }
fb-comp-only = 這個信箱出現在 { $breachName } 外洩事件。
fb-comp-and-others =
    { $breachCount ->
       *[other] 這個信箱出現在 { $breachCount } 場外洩事件中，包含 { $breachName } 事件。
    }
no-other-breaches-found = 在基礎搜尋中沒有找到其他外洩事件。
no-results-blurb = 很抱歉，我們的資料庫中沒有該外洩事件相關資料。
all-breaches-headline = { -product-name } 的所有資料外洩事件
search-breaches = 搜尋資料外洩事件
# "Appears in-page as: Showing: All Breaches"
currently-showing = 列出:
all-breaches = 所有資料外洩事件

## Updated error messages

error-bot-headline = 暫時無法搜尋
error-bot-blurb = 您在短時間內搜尋了太多 E-Mail 信箱，我們有點擔心您是不是機器人。您將暫時無法進行搜尋，請稍等一陣子再回來。
error-csrf-headline = 使用階段已逾時
error-csrf-blurb = 點擊瀏覽器的返回按鈕或重新載入頁面，再試一次。
error-invalid-unsub = 如何取消訂閱來自 { -product-name } 的警報
error-invalid-unsub-blurb = 您可以從任何 { -product-name } 寄發的郵件中進行退訂。請到信箱搜尋來自 { -brand-team-email } 的郵件，然後點擊郵件尾巴的「取消訂閱」鏈結。
login-link-pre = 已經有帳號了？
login-link = 登入
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 監控中的電子郵件信箱地址
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
       *[other] 洩漏出與您有關資訊的資料外洩事件
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 在所有事件中洩漏出的密碼
    }
# Button
see-additional-breaches = 看其它外洩事件
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = 看所有外洩事件
scan-results-known-breaches =
    { $breachCount ->
       *[other] 此信箱出現於 { $breachCount } 場已知的資料外洩事件中。
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = { $userEmail } 的搜尋結果:
other-monitored-emails = 其他監控的信箱
email-verification-required = 需要驗證信箱
fxa-primary-email = { -brand-fxa } 郵件 - 主要帳號
what-is-a-website-breach = 網站資料外洩事件是什麼？
website-breach-blurb = 當網路罪犯竊取、複製或公開網路帳號中的個人資料時，就是網站資料外洩事件。會發生這樣的事情通常是駭客想要找出網站在安全性上的弱點，也可能是帳號資訊被不小心洩漏出去。
security-tips-headline = 保護您不受駭客騷擾的安全性秘訣
steps-to-protect = 採取行動來保護線上身分
take-further-steps = 採取更多行動來保護身分資料
alert-about-new-breaches = 有新的外洩事件時通知我
see-if-youve-been-part = 看看您是否也處於線上資料外洩事件之中。
get-ongoing-breach-monitoring = 持續針對多個電子郵件信箱，監控資料外洩事件。
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 找找看
new-unsub-error = 您可以從任何一封 { -product-name } 寄出的郵件取消訂閱。
other-known-breaches-found =
    { $breachCount ->
       *[other] 但它還出現於其他 { $breachCount } 場已知的外洩事件。
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 其他資訊，包含:
# Title
email-addresses-title = 電子郵件地址
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = { $breachTitle } 於 { $breachDate } 發生了資料外洩事件。事件發生並經過驗證後，已於 { $addedDate } 列入我們的資料庫。
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name } 偏好設定
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = 已登入為: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = 依照分類過濾:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 選單
to-affected-email = 傳送資料外洩警報到受影響的電子郵件信箱
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = 有種方法可以保護您的隱私，加入 { -brand-name }。
# Link title
learn-more-link = 了解更多。
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = 事件紀錄時間:
