# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = 您在短時間內嘗試搜尋太多電子郵件地址，由於安全因素，我們暫時無法讓您進行新搜尋。請稍候再試一次。
error-could-not-add-email = 無法將電子郵件地址新增到資料庫。
error-not-subscribed = 此電子郵件地址未訂閱 { -product-name }。
error-hibp-throttled = 與 { -brand-HIBP } 的連線太多。
error-hibp-connect = 連線到 { -brand-HIBP } 時發生錯誤。
error-hibp-load-breaches = 無法載入資料外洩資訊。
error-must-be-signed-in = 您必須先登入 { -brand-fxa }。
error-to-finish-verifying = 您必須使用主帳號信箱登入，才能完成此信箱的 { -product-name } 驗證。
home-title = { -product-name }
home-not-found = 找不到頁面。
oauth-invalid-session = Session 無效
scan-title = { -product-name } : 掃描結果
user-add-invalid-email = 無效的電子郵件地址
user-add-too-many-emails = 已達可監控的 E-Mail 信箱最大數量。
user-add-email-verify-subject = { -product-name } 訂閱確認
user-add-duplicate-email = 此帳號已經加入 { -product-name }。
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = 請到您的 { $preferencesLink } 檢查 { $userEmail } 的目前狀態。
user-add-verification-email-just-sent = 沒辦法這麼快就寄出另一封驗證信，請稍後再試。
user-add-unknown-error = 新增電子郵件地址時發生錯誤，請稍後再試。
user-delete-unknown-error = 移除電子郵件地址時發生錯誤，請稍後再試。
error-headline = 錯誤
user-verify-token-error = 缺少驗證 token。
user-verify-email-report-subject = 您的 { -product-name } 掃描報告
user-unsubscribe-token-error = 退訂需要 token。
user-unsubscribe-token-email-error = 退訂需要 token 與 emailHash。
user-unsubscribe-title = { -product-name } : 退訂
pwt-section-headline = 更強的密碼 = 更好的保護
landing-headline = 讓您獲得安全，不受駭客影響的權利，從這裡開始。
scan-placeholder = 輸入電子郵件地址
scan-submit = 搜尋您的電子郵件地址
scan-error = 必須是有效的電子郵件地址。
download-firefox-banner-button = 下載 { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = 已送出！
sign-up = 訂閱
form-signup-error = 必須是有效的電子郵件地址
# breach-date = the calendar date a particular data theft occurred.
breach-date = 發生日期：
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 洩漏帳號數量：
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 洩漏資料內容：
unsub-headline = 取消訂閱 { -product-name-nowrap }
unsub-blurb = 將會從 { -product-name-nowrap } 郵寄清單把您的信箱移除，您不會再於有新的資料外洩事件發生時收到警報。
unsub-button = 取消訂閱
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 資料外洩情況由 { $hibp-link } 提供
share-twitter = 一般人大約有 100 組線上帳號，您有任何帳號遭到資料外洩事故影響嗎？快來檢查看看。
share-facebook-headline = 看看您的帳號是否也在資料外洩事件當中
share-facebook-blurb = 您的帳號也出現在資料外洩事件當中嗎？
og-site-description = 使用 { -product-name }，看看您的帳號是否也在資料外洩事件當中。註冊在未來有與您相關的資料外洩事故時，收到警報與祕訣以確保帳號安全。
show-all = 顯示全部
fxa-scan-another-email = 想要檢查另一個電子郵件地址嗎？
sign-out = 登出
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
have-an-account = 已經有帳號了嗎？
fxa-pwt-summary-2 = 短的密碼比較容易被駭客們猜到。使用越長的密碼越好，另外除了字母，還可以再加數字、特殊符號來增加複雜度。
fxa-pwt-summary-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員，可產生高強度密碼，安全地儲存，並在上網時自動為您填寫表單。
fxa-pwt-summary-6 = 資料外洩事件層出不窮。若您的個人資料出現在新的資料外洩事件中，{ -product-name } 會發送警報給您，這樣就可以採取措施來保護帳號。
fxa-what-to-do-blurb-1 = 若您無法登入，請詢問網站要如何更改密碼。發現您不認識的帳號嗎？有可能是您的資料已經被賣掉了；也有可能是單純忘記註冊過，或是網站改名。
fxa-what-to-do-subhead-2 = 不要再使用已經洩漏出去的密碼，並且將每個使用該密碼的網站密碼全部改掉。
fxa-wtd-blurb-2 = 駭客可能會使用您被洩漏的密碼，來嘗試登入您在別的網站上的帳號。請針對每個帳號設定不同密碼，尤其是網路銀行、電子郵件信箱，以及任何您會儲存個人資料的網站。
fxa-what-to-do-blurb-3 = 大多數的資料外洩事件只會流出電子郵件地址與密碼，但某些事件也會包含敏感的個人財務資訊。若您的銀行帳號或信用卡卡號也被洩露出來，請通知銀行防止盜用，並檢查月結單，看看是否有不認識的交易紀錄。
fxa-what-to-do-subhead-4 = 取得能幫助您記住所有密碼，並確保密碼安全的建議。
fxa-what-to-do-blurb-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等密碼管理員可安全地儲存密碼，並在上網時自動為您填寫表單。記得在手機與電腦上都使用密碼管理員，這樣就不用把密碼通通背下來。
# Alerts is a noun
sign-up-for-alerts = 訂閱警報
# Link title
frequently-asked-questions = 常見問題
about-firefox-monitor = 關於 { -product-name }
# Link title
preferences = 偏好設定
# Link title
home = 首頁
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
monitor-several-emails = 監控多組電子郵件信箱
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
what-data = 洩漏了哪些資料：
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
wtd-after-website = 發生網站資料外洩事件後該做什麼：
wtd-after-data-agg = 資料收集器發生資訊外洩後，要作什麼事？
what-is-data-agg = 「資料收集器」是什麼？
what-is-data-agg-blurb = 資料收集器，或是資料的交易商，會自行收集公開資料或向其他公司購買資料。他們會整合好資料，再銷售給其他公司做行銷用途。受這類事件影響的人較不容易遇到財務詐欺，但駭客可以使用此資料來假裝為他人，或進行分類。
protect-your-privacy = 保護您的線上隱私權
no-pw-to-change = 跟網站資料外洩不一樣的是，沒有密碼可以更改。
avoid-personal-info = 不要在密碼中使用個人資訊
avoid-personal-info-blurb = 很簡單就能在網路上找到生日、地址、家人的名字等資料。絕對不要把相關資料放在密碼當中。

## What to do after data breach tips

change-pw = 更改密碼
change-pw-site = 更改此網站的密碼
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] 出現在 { $breachCount } 場已知的外洩事件中。
    }
check-for-breaches = 檢查是否有外洩事件
find-out-what-hackers-know = 看看駭客已經知道你的哪些事情，也了解如何搶先一步遠離他們。
get-email-alerts = 確保安全：當您的資訊出現在已知的資料外洩事件時，收到警報通知
search-for-your-email = 搜尋自 2007 年起的公開資料外洩事故當中，是否包含您的電子郵件帳號。
back-to-top = 回到頁面頂端
comm-opt-0 = 當下列我的任一個電子郵件信箱地址出現在資料外洩事故時，發信通知我。
# Variables:
#   $primaryEmail (String) - User primary email address
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
breach-summary = 外洩事件摘要
show-breaches-for-this-email = 顯示所有與這個信箱相關的資料外洩事件。
link-change-primary = 更改主要電子郵件信箱地址
remove-fxm = 移除 { -product-name }
remove-fxm-blurb = 關閉 { -product-name } 的警報。您的 { -brand-fxa } 仍然有效，還是會收到其它與帳號相關的電子報。
# Button title
manage-email-addresses = 管理電子郵件地址
# Link title
latest-breach-link = 看看您是不是也在這場資料外洩事件當中

## Variables:
##   $userName (String) - Username

welcome-back = { $userName }，歡迎回來！
welcome-user = { $userName }，歡迎！

##

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
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] 找到 { $breachCount } 場新的資料外洩事件
    }
sign-up-headline-1 = 註冊 { -brand-fxa }，取得資料外洩警報。
account-not-required = 不需要註冊 { -brand-fxa } 也能使用 { -brand-name } 瀏覽器。您可能會收到有關 { -brand-Mozilla } 相關服務的資訊。

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = 您的資訊是否出現在 { $breachName } 的資料外洩事件？
fb-not-comp = 這個信箱沒有出現在 { $breachName } 外洩事件。
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] 但出現在其他 { $breachCount } 場外洩事件中。
    }
fb-comp-only = 這個信箱出現在 { $breachName } 外洩事件。
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] 這個信箱出現在 { $breachCount } 場外洩事件中，包含 { $breachName } 事件。
    }

##

no-other-breaches-found = 在基礎搜尋中沒有找到其他外洩事件。
no-results-blurb = 很抱歉，我們的資料庫中沒有該外洩事件相關資料。
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note = <span>您的電子郵件地址看起來不在這次資料外洩事件當中，但您的手機號碼還是可能已遭洩漏。</span>Facebook 資料外洩事件當中某些遭外洩的帳號資料包含了手機號碼、部分個人資料，但沒有電子郵件地址。只要您曾經註冊過 Facebook 帳號，就算現在沒在使用，我們還是建議採取下列步驟來保護自己
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>將<a>您的 Facebook 個人資料頁面</a>當中的資訊設定為「只有自己」或其他非公開的選項。</span>
facebook-breach-what-to-do-1-copy = 在此次資料外洩事件中，駭客們收集到了設定為「公開」或「分享給朋友」的個人資訊。此資訊可結合其他資料，來破解您的其他帳號或取得更多個人資訊。
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>更改您<a>手機門號業者網站的</a>密碼、PIN 碼或其他的登入驗證方式，以防止遭受 SIM 卡更換攻擊</span>。
facebook-breach-what-to-do-2-copy = SIM 卡更換攻擊（又稱 SIM 卡綁架攻擊）是指當駭客使用手機門號、生日等各種資料欺騙電信業者，來接管受害者的手機門號，再駭入其信箱、社群網路，甚至金融機構帳號的行為。
facebook-breach-what-to-do-3 = 到我們的 Facebook 資料外洩頁面看看完整建議
# "Appears in-page as: Showing: All Breaches"
currently-showing = 列出：

## Updated error messages

error-bot-headline = 暫時無法搜尋
error-bot-blurb = 您在短時間內搜尋了太多 E-Mail 信箱，我們有點擔心您是不是機器人。您將暫時無法進行搜尋，請稍等一陣子再回來。
error-csrf-headline = 使用階段已逾時
error-csrf-blurb = 點擊瀏覽器的返回按鈕或重新載入頁面，再試一次。
error-invalid-unsub = 如何取消訂閱來自 { -product-name } 的警報
error-invalid-unsub-blurb = 您可以從任何 { -product-name } 寄發的郵件中進行退訂。請到信箱搜尋來自 { -brand-team-email } 的郵件，然後點擊郵件尾巴的「取消訂閱」鏈結。
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 組監控中的電子郵件信箱地址
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 所有事件中洩漏出的密碼組數
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 場資料外洩事件，流出了您的個資
    }
# Button
see-additional-breaches = 看其它外洩事件
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] 此信箱出現於 { $breachCount } 場已知的資料外洩事件中。
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = { $userEmail } 的搜尋結果：
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
get-ongoing-breach-monitoring = 持續針對多組電子郵件信箱監控資料外洩事件。
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 找找看
new-unsub-error = 您可以從任何一封 { -product-name } 寄出的郵件取消訂閱。
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] 但它還出現於其他 { $breachCount } 場已知的外洩事件。
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 其他資訊，包含：
# Title
email-addresses-title = 電子郵件地址
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概觀
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 於 { $breachDate }發生了資料外洩事件。事件發生並經過驗證後，已於 { $addedDate }列入我們的資料庫。
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } 偏好設定
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = 已登入為：{ $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = 依照分類篩選：
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 選單
to-affected-email = 傳送資料外洩警報到受影響的電子郵件信箱
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = 有種方法可以保護您的隱私，加入 { -brand-name }。
# Link title
learn-more-link = 了解更多。
email-sent = 郵件已寄出！
# Form title
want-to-add = 想加入另一個信箱嗎？
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = 請到 { $userEmail } 收信，點擊當中的驗證連結，即可加入 { -product-name }。

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = 成功驗證 E-Mail！
# Variables:
#   $email (String) - User email address
email-added-to-subscription = 若 { $email } 未來出現在資料外洩事件中，我們會通知您。
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = 若要檢視或管理所有註冊檢查的信箱，{ $nestedSignInLink }。
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = 請登入

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = 於 { $preferencesLink } 管理所有電子郵件地址。
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = 資料外洩警報通知
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 事件紀錄時間：
how-hackers-work-desc = 保護您的密碼不受網路犯罪侵害，這是他們最關心的議題。
what-to-do-after-breach-desc = 鎖定帳號，讓您的個人資料不落入他人之手。
create-strong-passwords-desc = 讓您的密碼更強大、更安全、更難猜測。
steps-to-protect-desc = 了解最常見的威脅，並了解要注意哪些事項。
five-myths-desc = 了解如何避免設定密碼的壞習慣，讓密碼更難遭到駭客竊取。
take-further-steps-desc = 了解如何降低身分遭盜用的風險，防止財物損失。
# This message appears after a user has successfully updated their communication settings.
changes-saved = 變更已儲存！
# Section headline
rec-section-headline = 這場資料外洩事件我該怎麼辦？
rec-section-subhead = 我們建議您採取下列行動，來確保個人資訊安全，並保護您的數位身分。
# Section headline
rec-section-headline-no-pw = 該做哪些事來保護個資？
rec-section-subhead-no-pw = 雖然這次資料外洩事件沒有流出密碼，但還是有一些更能保護個人資訊的方式。
# Button
see-additional-recs = 看其他建議

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } 出現在這場資料外洩事件中。<a>接下來該怎麼辦</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] 您有 { $numAffectedEmails } 組信箱出現在這場資料外洩事件中。<a>接下來該怎麼辦</a>
    }

##

marking-this-subhead = 將此次資料外洩事件標示為已處理
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body = <span>當您針對此次事件採取措施處理後</span>，可以將其標示為「已處理」。可以隨時回到儀錶板來確認此次事件的詳細資訊。
mark-as-resolve-button = 標示為已處理
marked-as-resolved-label = 已標示為處理完成
undo-button = 復原
confirmation-1-subhead = 您剛處理好第一筆資料外洩事件，真棒！
confirmation-1-body = 再接再厲，到儀錶板看看還有沒有其它該處理的情況。
confirmation-2-subhead = 駭客，接招吧！
confirmation-2-body = 您正在採取重要措施來保護自己的帳號安全。
confirmation-3-subhead = 又搞定一個了，幹得好！
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = 您的新密碼獨特、強大、又很難被猜到嗎？<a>了解更多</a>
generic-confirmation-subhead = 已將此事件標示為已處理
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
       *[other] 請到儀錶板確認還剩下哪些資料外洩事件。
    }
return-to-breach-details-link = 回到事件詳情
go-to-dashboard-link = 前往儀錶板
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = 完成 { $percentComplete }%
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] 已處理 { $numResolvedBreaches } 筆事件
    }
progress-intro-subhead = { -product-name } 新功能：將資料外洩事件標示為已處理
progress-intro-message = 確認事件詳細資訊並採取行動保護自己的資料後，就可以將事件標示為「已處理」。
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] 已處理 { $numResolvedBreaches } 場事件，共 { $numTotalBreaches } 場
    }
progress-complete = 已將所有事件標示為已處理

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>這是一個很棒的起點！</span>看看還剩下哪些事件需要處理。
progress-message-2 = <span>繼續努力！</span>更改密碼這類小小的動作，能對您的線上個資安全有大大保護。
progress-message-3 = <span>做得好！</span>繼續保持，還剩下幾組就處理完這些資料外洩事件了。
progress-message-4 = <span>快完成了！</span>就快要抵達終點線啦。
progress-complete-message = <span>覺得很棒對不對？</span>若您想要繼續處理，可以趁現在把其它網站的登入資訊換成更強的密碼。

##

resolve-this-breach-link = 處理過此次事件了
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = 已標示為處理完成：
hide-resolved-button = 隱藏處理過的事件
show-resolved-button = 顯示處理過的事件
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
       *[other] 尚未處理的事件中，洩漏出的密碼組數
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
       *[other] 標示為已解決的資料外洩事件數
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = 新事件
mobile-promo-headline = 在手機與平板電腦安裝 { -brand-name }
mobile-promo-body = 隨時隨地上網，快速隱私又安全。請到 Google Play 與 App Store 尋找 { -brand-name } 下載。
mobile-promo-cta = 取得 { -brand-name } Android 與 iOS 版
promo-lockwise-headline = 密碼隨身帶著走
lockwise-promo-body = 在您的所有裝置都能管理登入資訊。安全地在電腦、手機、平板電腦使用。
promo-lockwise-cta = 取得 { -brand-lockwise }
fpn-promo-headline = 隱藏您的所在地點，不讓網站與追蹤器發現
promo-fpn-body = { -brand-fpn } 會隱藏您的實際 IP 地址，不讓網站與廣告投放程式收集您的資料。
promo-fpn-cta = 取得 { -brand-fpn }
monitor-promo-headline = 看看有哪些新的資料外洩事件
monitor-promo-body = 在您的個人資訊出現在下一場外洩事件時獲得通知。
ecosystem-promo-headline = 透過隱私優先的產品保護您的線上生活
ecosystem-promo-body = 所有 { -brand-name } 都遵循我們對個人資料隱私的承諾: 能少拿就少拿、確保資料安全、絕不偷偷來。
promo-ecosystem-cta = 看所有產品
steps-to-resolve-headline = 解決此資料外洩事件的步驟
vpn-promo-headline = 現在是時候加強您的上網安全了。
vpn-promo-copy = { -brand-Mozilla } 的虛擬私人網路可幫助您保護網路連線內容，不受駭客間諜侵害。
vpn-promo-cta = 下載 { -brand-mozilla-vpn }
vpn-promo-headline-new = 一次訂閱一年份，享有半價折扣
vpn-promo-copy-new = 保護您的線上資料 — 選擇適合您的 VPN 訂閱方案。

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = 您的所在地點：{ $ip-location }
vpn-banner-protect-yourself-with-vpn = 使用 { -brand-mozilla-vpn } <em>保護自己</em>。
vpn-banner-protected-with-vpn = 使用 { -brand-mozilla-vpn } <em>保護</em>。
vpn-banner-title-1 = 您已受保護 — 感謝使用 { -brand-mozilla-vpn }。
vpn-banner-title-2 = 若不使用 VPN，可能會被其他人追蹤到您的所在位置。
vpn-banner-subtitle-2 = 只要三個步驟，快速保護您的位置資訊並安全上網
vpn-banner-status-protected = 目前狀態：<em>保護中 ✓</em>
vpn-banner-status-not-protected = 目前狀態：<em>未受保護 ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP 位置：{ $ip-address }
vpn-banner-step-1 = 訂閱 { -brand-mozilla-vpn }
vpn-banner-step-2 = 選擇 VPN 地點
vpn-banner-step-3 = 開啟 VPN，上網更安全
vpn-banner-cta = 下載 { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = 展開
# button to close panel
vpn-banner-cta-close = 關閉

## Relay and VPN educational/ad units

ad-unit-relay-cta = 了解 { -brand-relay } 的更多資訊
ad-unit-vpn-cta = 了解 { -brand-mozilla-vpn } 的更多資訊
# ad 1 heading
ad-unit-1-how-do-you-keep = 要如何保密電子郵件信箱？
# ad 2 heading
ad-unit-2-do-you-worry = 您擔心使用公用 Wi-Fi 的安全性嗎？
# ad 3 heading
ad-unit-3-stay-in-the-game = 繼續努力！
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } 讓您在玩遊戲或觀賞網路串流影片時，有穩定而安全的網路連線。
# ad 3 list item 1
ad-unit-3-prevent-throttling = 避免限速
# ad 3 list item 2
ad-unit-3-be-anywhere = 從世界上任何地點上網
# ad 3 list item 3
ad-unit-3-access-more = 存取更多內容
# ad 4 heading
ad-unit-4-shopping-with = 使用轉寄信箱網購
ad-unit-4-want-to-buy = 想要在網路上網購，但不是熟悉的店家或無法完全信任這家商店嗎？
ad-unit-4-shop-online = 在線上購物時使用轉寄信箱消費。可將訂單信轉寄到您的實際信箱並稍後再隨時關閉轉寄。
# ad 5 heading
ad-unit-5-on-the-go = 隨時隨地使用 { -brand-relay }
ad-unit-5-instantly-make = 隨時隨地建立自訂的轉寄郵件信箱！
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = 隨時隨地連線
ad-unit-5-privately-sign-in = 可使用轉寄信箱來在喜愛的咖啡店登入上網或登入使用公共 Wi-Fi。
# ad 5 subheading 2
ad-unit-5-email-receipts = 接收電子收據信
ad-unit-5-share-custom-email = 將自訂轉寄信箱提供給店家寄送消費收據給您，而無須提供實際信箱
# ad 5 subheading 3
ad-unit-5-use-on-phone = 在手機上使用
ad-unit-5-no-matter-where = 不論您在哪裡，只要花幾秒就可以建立自訂轉寄信箱來滿足您的任何需求
# ad 6 heading
ad-unit-6-worry-free = 註冊帳號免煩惱
ad-unit-6-want-to-start = 想要開始新訂閱、回覆邀請函或接收折扣碼，但又不想要收到一堆垃圾信嗎？
ad-unit-6-before-you-complete = 您下次註冊帳號時，可使用轉寄信箱而非實際信箱，來保護您的個資，也可更加掌握您的收件匣。

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = 處理資料外洩事件
site-nav-settings-link = 設定
site-nav-help-link = 說明與技術支援
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = 歡迎試用我們其他的安全工具：
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = 主選單
main-nav-button-collapse-label = 折疊選單
main-nav-button-collapse-tooltip = 折疊選單
main-nav-button-expand-label = 展開選單
main-nav-button-expand-tooltip = 展開選單
main-nav-label = 導覽
main-nav-link-home-label = 首頁
main-nav-link-dashboard-label = 儀錶板
main-nav-link-settings-label = 設定
main-nav-link-faq-label = 常見問題
main-nav-link-faq-tooltip = 常見問題

## User menu

# Obsolete
menu-button-title = 使用者選單
# Obsolete
menu-button-alt = 開啟使用者選單
# Obsolete
menu-list-accessible-label = 帳號選單
# Obsolete
menu-item-fxa-2 = 管理您的 { -brand-mozilla-account }
# Obsolete
menu-item-settings = 設定
# Obsolete
menu-item-help = 說明與技術支援
# Obsolete
menu-item-logout = 登出
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

mozilla = { -brand-Mozilla }
terms-of-service = 服務條款
privacy-notice = 隱私權公告
github = { -brand-github }
footer-nav-all-breaches = 所有資料外洩事件
footer-external-link-faq-label = 常見問題
footer-external-link-faq-tooltip = 常見問題

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } 找不到頁面
error-page-error-404-copy = 很抱歉，您想要開啟的頁面不存在。
error-page-error-404-cta-button = 回上一頁
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } 有些東西不對勁！
error-page-error-other-copy = 請再試一次或稍後再回來

## Breach overview page

all-breaches-headline-2 = { -brand-fx-monitor } 偵測到的所有資料外洩事件
all-breaches-lead = 我們會監控所有已知的資料外洩事件，檢查您的個人資訊是否已遭外流。以下是自 2007 年起，所有通報過的資料外洩事件的完整清單。
search-breaches = 搜尋資料外洩事件
# the kind of user data exposed to hackers in data breach.
exposed-data = 外洩資料：

## Public breach detail page

find-out-if-2 = 看看是否您也遭此資料外洩事件影響
find-out-if-description = 我們會幫助您快速確認電子郵件信箱是否也在此事件中外洩，並且了解接下來該做什麼。
breach-detail-cta-signup = 檢查是否有外洩事件

## Floating banner

floating-banner-text = 訂閱來自 { -brand-Mozilla } 的最新資訊與使用秘訣來加強您的線上安全。
floating-banner-link-label = 訂閱
floating-banner-dismiss-button-label = 不要，謝謝

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>：全新名稱、外觀與更多<b>奪回隱私權</b>的方式。
banner-monitor-rebrand-dismiss-button-label = 確定
banner-monitor-rebrand-dismiss-button-tooltip = 知道了！
loading-accessibility = 載入中
