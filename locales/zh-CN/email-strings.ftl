# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    请在 24 小时内点击“验证我的电子邮件”按钮以确认您的 Firefox Monitor 账户。
    您的报告即将开始生成。
verify-my-email = 验证我的电子邮件
report-scan-another-email = 到 { -product-name } 扫描其他电子邮件地址
automated-message = 这是一封自动发送的电子邮件；如果您并未要求但收到这封邮件，您不需要进行任何操作。
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = 由于该电子邮件地址已选择启用来自 { -product-name } 的警报，我们已将此消息发送到 { $userEmail }。
unsubscribe-email-link = 如果您不想再收到 { -product-name } 警报，可以将其退订。
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 报告
report-date = 报告日期：
email-address = 电子邮件地址：
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = 接下来怎么做
report-headline =
    { $breachCount ->
        [0] 目前为止还不错。
        [one] 您的账号出现在 { $breachCount } 次数据外泄事件中。
       *[other] 您的账号出现在 { $breachCount } 次数据外泄事件中。
    }
report-subhead-no-breaches =
    您的电子邮件地址未出现在我们的数据外泄完整报告中。
    这是个好消息，但您还有更多事情可以做。
    数据外泄事件可能随时发生，请继续阅读，以了解如何保护您的密码。
report-subhead-found-breaches = 以下是您的 Firefox Monitor 完整报告。包含与此电子邮件地址有关的所有数据外泄事件的信息。
report-pwt-blurb =
    密码很有价值，每天都有数以千计的密码被窃取，并在黑市上被交易。
    强大的密码可以保护您的账号，以及账号中所含的个人信息。
report-pwt-headline-1 = 为每个账号使用不同的密码
report-pwt-summary-1 =
    在每个账号中都重复使用相同的密码，会让您门户大开。
    黑客可使用那串密码，用来登录您的其他账号。
report-pwt-headline-2 = 创建强健、唯一的密码
report-pwt-summary-2 =
    黑客使用常用密码列表来尝试猜测您的密码。
    您的密码越长、越随机，就越不容易被窃取。
report-pwt-headline-3 = 把安全问题当作另一道密码
report-pwt-summary-3 =
    网站不会确认您的答案是否正确，而只会检查是否与所设定的答案相符。
    您可以创建长度较长、无厘头的答案，并存储在安全的地方。
report-pwt-headline-4 = 使用密码管理器
report-pwt-summary-4 =
    像 1Password、LastPass、Dashlane 和 Bitwarden 等服务可以生成强健、唯一的密码，安全地进行存储，
    并可在网站上自动填充，由此你不必记住每一个密码。
# A link to legal information about mozilla products.
legal = 法律信息
# Share Firefox Monitor by email subject line
share-by-email-subject = 看看您是否受到数据外泄事件影响。
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    嗨！
    { -brand-name } 有一项免费服务，让您可以检查自己在各个网站注册的账号，是否出现在过去的数据外泄事件中。以下是检查方式：
    1. 转到 { "https://monitor.firefox.com" } 并搜索您的电子邮件地址。
    2. 看看您的在线账号是出现在数据外泄事件中。
    3. 从 { -product-name } 获取有关如何处理这些问题的小贴士。
# Unsubscribe link in email.
email-unsub-link = 退订
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = 您收到此电子邮件，是因为您曾经注册过 { -product-name } 警报。不想再收到这些电子邮件？ { $unsubLink }。这是一封自动发送的邮件。如需帮助，请访问 { $faqLink }。
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = 您收到此电子邮件，是因为您曾经注册过 { -product-name } 警报。这是一封自动发送的邮件。如需帮助，请访问 { $faqLink }。
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = 查看我的面板
# Button text
verify-email-cta = 验证邮箱
# Headline of verification email
email-link-expires = 此链接将在 24 小时后失效
email-verify-blurb = 请验证您的电子邮件地址，即可将其添加到 { -product-name } 并订阅数据外泄警报。
# Email headline
email-found-breaches-hl = 以下是您过去数据外泄情况的概要
# Email headline
email-breach-summary-for-email = { $userEmail } 的数据外泄事件概要
# Email headline
email-no-breaches-hl = { $userEmail } 出现在 0 次已知的数据外泄事件中
# Email headline
email-alert-hl = { $userEmail } 出现在新的数据外泄事件中
# Subject line of email
email-subject-found-breaches = { -product-name } 在下列数据外泄事件找到您的信息
# Subject line of email
email-subject-no-breaches = { -product-name } 未找到相关数据外泄事件
# Subject line of email
email-subject-verify = { -product-name }：验证您的电子邮件地址
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = 详细了解有关“{ $fxmLink }”
email-sensitive-disclaimer = 由于该数据外泄事件的敏感性，相关的电子邮件数据并未公开披露。您会收到此警报是因为您是此电子邮件地址经过验证的所有者。
fxm-warns-you-no-breaches = { -product-name } 会在有与您相关的个人信息外泄事件发生时警告您。目前为止，未发生过外泄事件。我们会在您的电子邮件地址出现在新事件中时通知您。
fxm-warns-you-found-breaches = { -product-name } 会在有与您相关的个人信息外泄事件发生时警告您。当您的电子邮件地址出现在新事件中时，您会收到订阅的警报。
email-breach-alert-blurb = { -product-name } 会在有与您相关的个人信息外泄事件发生时警告您。我们刚收到其他公司的数据外泄事件。
# List headline
faq-list-headline = 常见问题
# Link Title
faq-v2-1 = 我不认识其中的一家公司或网站，为什么我与该外泄事件有关？
# Link Title
faq-v2-2 = 如果外泄事件发生在几年前，或是已经不用的账号，我还需要做什么吗？
# Link Title
faq-v2-3 = 我刚刚发现自己遭受了数据外泄。接下来我该怎么做？
# Link Title
faq-v2-4 = { -product-name } 如何处理这些敏感网站？
