# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = 請在 24 小時內點擊下方的「驗證我的 E-Mail」來確認您的 Firefox Monitor 帳號。接下來就可以收到報告了。
verify-my-email = 驗證我的 E-Mail
report-scan-another-email = 到 { -product-name } 掃描其他電子郵件地址
automated-message = 這是電腦自動發送的郵件，若您突然收到這封信，不需要做任何事。
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = 此信箱訂閱了 { -product-name } 警報，我們才送出本郵件給 { $userEmail }。
unsubscribe-email-link = 如果您不想再收到 { -product-name } 警報，可取消訂閱。
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 報告
report-date = 報告日期:
email-address = 電子郵件地址:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = 接下來可以做什麼
report-headline =
    { $breachCount ->
        [0] 一切都好。
        [one] 您的帳號出現在 { $breachCount } 次資料外洩事件中。
       *[other] 您的帳號出現在 { $breachCount } 次資料外洩事件中。
    }
report-subhead-no-breaches = 您的帳號並未出現在我們的資料外洩事故完整報告中。這是好消息，但您還可以做更多事來自保。資料外洩事件隨時都有可能發生，請繼續閱讀，以了解可如何保護密碼安全。
report-subhead-found-breaches = 以下是您的 Firefox Monitor 完整報告，包含與此電子郵件地址有關的所有資料外洩事件。
report-pwt-blurb = 密碼很有價值，每天都有數以千組的密碼被偷走，並且在黑市上交易。強大的密碼可保護您的帳號，以及帳號當中的個人資訊。
report-pwt-headline-1 = 為每個帳號使用不同密碼
report-pwt-summary-1 = 在每個帳號中都重複使用相同的密碼，會讓您門戶大開，也讓駭客可在您的一組密碼外洩後，用來登入您的其他帳號。
report-pwt-headline-2 = 使用強大、獨特的密碼
report-pwt-summary-2 = 駭客使用許多常用密碼來猜測您的密碼。若您的密碼越長、越隨機，就越不容易被偷走。
report-pwt-headline-3 = 把安全性問題當作額外密碼保護
report-pwt-summary-3 = 網站不會確認您的答案是否正確，而只會檢查是否與原先設定的答案相符。您可以建立長度較長、隨機的答案，並儲存在安全的地方。
report-pwt-headline-4 = 使用密碼管理員
report-pwt-summary-4 = 諸如 1Password、LastPass、Dashlane、Bitwarden 等服務，可產生高強度密碼，安全地儲存，並在上網時自動為您填寫表單，這樣就不用記住每一筆密碼了。
# A link to legal information about mozilla products.
legal = 法律資訊
# Share Firefox Monitor by email subject line
share-by-email-subject = 看看您是否受資料外洩事件影響。
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    嗨！
    { -brand-name } 有個免費的服務，可讓你看看你在各個網站註冊帳號，是否曾經出現在資料外洩事故當中。以下是檢查方式:
    1. 到 { "https://monitor.firefox.com" } 輸入你的電子郵件地址。
    2. 看看你的帳號是否出現在資料外洩事件中。
    3. 了解 { -product-name } 有什麼能夠處理這些問題的秘訣。
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
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = 檢視我的儀表板
# Button text
verify-email-cta = 驗證電子郵件地址
# Button text
see-all-breaches = 檢視所有資料外洩事件
# Headline of verification email
email-link-expires = 此鏈結將於 24 小時後失效
email-verify-blurb = 請驗證您的電子郵件地址，即可加入 { -product-name } 並訂閱資料外洩警報。
# Email headline
email-found-breaches-hl = 以下是您過去遭遇資料外洩事件的摘要
# Email headline
email-breach-summary-for-email = { $userEmail } 的資料外洩事件摘要
# Email headline
email-no-breaches-hl = { $userEmail } 出現在 0 場已知的資料外洩事件中
# Email headline
email-alert-hl = { $userEmail } 出現在新的資料外洩事件中
# Subject line of email
email-subject-found-breaches = { -product-name } 在下列資料外洩事件找到您的資訊
# Subject line of email
email-subject-no-breaches = { -product-name } 沒有找到相關資料外洩事件
# Subject line of email
email-subject-verify = { -product-name }: 驗證您的電子郵件地址
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = 了解 { $fxmLink } 的更多資訊
email-sensitive-disclaimer = 由於這場資料外洩事件的敏感性，相關的 E-Mail 信箱資料並未公開揭露。您會收到這封警報是因為您是此信箱帳號經驗證過的擁有者。
fxm-warns-you-no-breaches = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。目前為止，還沒有發生過類似事件。我們會在您的電子郵件地址出現於新事件中時通知您。
fxm-warns-you-found-breaches = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。您也已經訂閱，當您的電子郵件地址出現於新事件中時通知您。
email-breach-alert-blurb = { -product-name } 會在有與您相關的個資外洩事件發生時警告您。我們剛收到其他公司的資料外洩事件。
# List headline
faq-list-headline = 常見問題
# Link Title
faq-v2-1 = 我不認識這些公司或網站，為什麼我跟這個外洩事件有關係？
# Link Title
faq-v2-2 = 如果這件事發生在好幾年前，或是已經是不用的帳號，我還需要做什麼嗎？
# Link Title
faq-v2-3 = 我剛發現某場資料外洩事件當中包含我的資料。接下來該怎麼做？
# Link Title
faq-v2-4 = { -product-name } 怎麼處理這些敏感性網站？
