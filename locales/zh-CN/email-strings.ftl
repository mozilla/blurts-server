# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
click-to-verify =
    请在 24 小时内点击“验证我的电子邮件”按钮以确认您的 Firefox Monitor 账户。
    您的报告即将开始生成。
verify-my-email = 验证我的电子邮件
report-scan-another-email = 到 { -product-name } 扫描其他电子邮件地址
automated-message = 这是一封自动发送的电子邮件；如果您并未要求但收到这封邮件，您不需要进行任何操作。
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = 由于该电子邮件地址已选择启用来自 { -product-name } 的警报，我们已将此消息发送到 { $userEmail }。
unsubscribe-link = 如果您不想再收到 { -product-name } 警报，可以将其退订
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 报告
report-date = 报告日期：
email-address = 电子邮件地址：
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = 这是您的 { -product-name } 完整报告，其中包含此电子邮件地址的所有已知数据泄露信息。
report-no-breaches =
    您的电子邮件地址未出现在我们的数据库中。
    但数据外泄事件可能随时发生，请遵照下列步骤来确保您的个人数据安全。
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = 接下来怎么做
report-headline =
    { $breachCount ->
       *[other] 您的账号出现在 { $breachCount } 次数据泄露事件中。
    }
report-subhead-no-breaches =
    您的电子邮件地址未出现在我们的数据外泄完整报告中。
    这是个好消息，但您还有更多事情可以做。
    数据外泄事件可能随时发生，请继续阅读，以了解如何保护您的密码。
report-subhead-found-breaches = 以下是您的 Firefox Monitor 完整报告。包含与此电子邮件地址有关的所有数据外泄事件的信息。
breach-alert-headline = 您的账号受到了数据泄露事件影响。
breach-alert-subhead = 在最近发生的数据泄露事件中，包含您的电子邮件地址以及以下数据
report-pwt-blurb =
    密码很有价值，每天都有数以千计的密码被窃取，并在黑市上被交易。
    强大的密码可以保护您的账号，以及账号中所含的个人信息。
report-pwt-headline-1 = 为每个账号使用不同的密码
report-pwt-summary-1 =
    在每个账号中都重复使用相同的密码，会让您门户大开。
    黑客可使用那串密码，用来登录您的其他账号。
report-pwt-headline-2 = 创建强壮、唯一的密码
report-pwt-summary-2 =
    黑客使用常用密码列表来尝试猜测您的密码。
    您的密码越长、越随机，就越不容易被窃取。
report-pwt-headline-3 = 把安全问题当作另一道密码
report-pwt-summary-3 =
    网站不会确认您的答案是否正确，而只会检查是否与所设定的答案相符。
    您可以创建长度较长、无厘头的答案，并存储在安全的地方。
report-pwt-headline-4 = 使用密码管理器
report-pwt-summary-4 =
    像 1Password、LastPass、Dashlane 和 Bitwarden 等服务可以生成强壮、唯一的密码，安全地进行存储，
    并可在网站上自动填充，由此你不必记住每一个密码。
# A link to legal information about mozilla products.
legal = 法律信息
