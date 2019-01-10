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
layout-support = 用户支持
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = 关于 Firefox 警报
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = 提供反馈
terms-and-privacy = 使用条款和隐私
error-could-not-add-email = 无法将电子邮件地址添加到数据库。
error-not-subscribed = 此电子邮件地址未订阅 { -product-name }。
error-hibp-throttled = 与 { -brand-HIBP } 的连接过多。
error-hibp-connect = 连接 { -brand-HIBP } 时出错。
error-hibp-load-breaches = 未能加载泄露信息。
hibp-notify-email-subject = { -product-name } 警报：您的账号信息已遭泄露。
home-title = { -product-name }
home-not-found = 找不到网页。
oauth-invalid-session = 无效会话
oauth-confirmed-title = { -product-name } ：已订阅
scan-title = { -product-name }：扫描结果
user-add-invalid-email = 无效的电子邮件地址
user-add-email-verify-subject = 确认您要订阅 { -product-name }。
user-add-title = { -product-name }：确认电子邮件
error-headline = 错误
user-verify-token-error = 必须持有验证令牌（Token）。
user-verify-email-report-subject = 您的 { -product-name } 报告
user-verify-title = { -product-name }：已订阅
user-unsubscribe-token-error = 退订需要令牌（Token）。
user-unsubscribe-token-email-error = 退订需要令牌（Token）与 emailHash。
user-unsubscribe-title = { -product-name }：退订
user-unsubscribe-survey-title = { -product-name }：退订问卷
user-unsubscribed-title = { -product-name }：已退订

## Password Tips

pwt-section-headline = 更强的密码 = 更好的保护
pwt-section-subhead = 您的密码安全才能保证您的私人信息安全。
pwt-section-blurb =
    您的密码不只可以保护账号安全，还可以保护账号中的所有个人信息。黑客会因一些不良的使用习惯而得益，例如在每个地方都使用相同的密码，或是使用常见的密码组合（还在使用 asdf1234 吗？）。
    这样的话只要一个账号被黑，他们就可以轻而易举地黑掉您多个账号。以下是能够更加保护您账号的其他方式。
pwt-headline-1 = 为每个账号使用不同的密码
pwt-summary-1 =
    在每个账号中都重复使用相同的密码，会让您门户大开，极可能发生身份盗用事件。
    只要有人拿到那串密码，即可登录所有账号。
pwt-headline-2 = 创建强健、难以猜测的密码
pwt-summary-2 =
    黑客使用数以千计的常用密码来猜测您的密码。
    您的密码越长、越随机，就越不容易被猜到。
pwt-headline-3 = 把安全问题当作另一道密码
pwt-summary-3 =
    网站不会确认您的答案是否正确，而只会检查是否与所设定的答案相符。
    您可以创建长度较长、无厘头的答案，并存储在安全的地方。
pwt-headline-4 = 使用工具来帮助您记忆密码
pwt-summary-4 =
    如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器可以生成强健、唯一的密码。
    它们还能安全地存储密码并为您填写到网站上。
pwt-headline-5 = 使用双因素验证，多加一道安全保障
pwt-summary-5 =
    双因素验证要求提供一些额外信息（例如通过短信接收的一次性验证码）才能登录账号。
    即使有人拿到了您的密码，他们也无法登录。
pwt-headline-6 = 订阅 { -product-name-nowrap } 警报
pwt-summary-6 = 网站数据外泄事件越来越多，当有新的泄露事件加入到我们的数据库后，{ -product-name-nowrap } 就会发送警报给您，这样您就可以快速采取措施，保​​护自己的账号。
landing-headline = 您获得安全，免受黑客影响的权利，从这里开始。
landing-blurb =
    { -product-name-nowrap } 为您提供工具来确保个人信息的安全。
    看看黑客们已经知道您的哪些信息，以及该如何抢先一步，确保安全。
scan-label = 看看您是否遭受到数据外泄事件的影响。
scan-placeholder = 输入电子邮件地址
scan-privacy = 我们不会存储您的电子邮件地址。
scan-submit = 搜索您的电子邮件地址
scan-another-email = 扫描其他电子邮件地址
scan-featuredbreach-label = 了解您的<span class="bold"> { $featuredBreach } </span>账户是否遭到侵害。
sensitive-breach-email-required = 泄露内容包含敏感信息，需验证电子邮件。
scan-error = 须为有效的电子邮件地址。
signup-banner-headline = { -product-name-nowrap } 检测针对您的线上账户的威胁。
signup-banner-blurb =
    您的 { -product-name-nowrap } 详细报告可显示您的哪些在线账号已遭窃或泄露。
    我们也会在您的账号出现于新的网站数据外泄事件时通知您。
download-firefox-bar-blurb = { -product-name-nowrap } 由<span class="nowrap">焕然一新的 { -brand-name }</span> 提供。
download-firefox-bar-link = 立即下载 { -brand-name }
download-firefox-banner-blurb = 掌控您的浏览器
download-firefox-banner-button = 下载 { -brand-name }
signup-modal-headline = 订阅 { -product-name-nowrap }
signup-modal-blurb = 订阅以获取您的完整报告，在发生新数据外泄事件时收到警报，以及来自 { -product-name-nowrap } 的安全小贴士。
signup-modal-close = 关闭
get-your-report = 获取您的报告
signup-modal-verify-headline = 确认您的订阅
signup-modal-verify-blurb = 我们已将验证链接发送到 <span id="submitted-email" class="medium"></span>。
signup-modal-verify-expiration = 此链接将在 24 小时后过期。
signup-modal-verify-resend = 不在收件箱和垃圾邮件箱？重新发送。
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = 已发送！
signup-with-fxa = 使用 { -brand-name } 账号订阅
form-signup-placeholder = 输入电子邮件地址
form-signup-checkbox = 获取 { -brand-Mozilla } 和 { -brand-name } 的最新消息。
sign-up = 订阅
form-signup-error = 须为有效的电子邮件地址
no-breaches-headline = 目前为止还不错。
found-breaches-headline = 您的信息出现在过去的数据外泄事件中。
no-breaches =
    您的电子邮件地址未出现在我们的基本扫描数据中。
    这是个好消息，但数据外泄事件随时都可能发生，您还有更多事情可以做。
    订阅 { -product-name-nowrap } 以获取完整报告，在发生新数据外泄事件时收到警报，以及保护密码的小贴士。
featured-breach-results =
    { $breachCount ->
        [0] 您的账号出现在 <span class="bold"> { $featuredBreach } </span> 数据外泄事件中，但未出现在其他已知的事件。
        [one] 您的账号出现在 <span class="bold"> { $featuredBreach } </span> 数据外泄事件中，此外还有 1 次事件。
       *[other] 您的账号出现在 <span class="bold"> { $featuredBreach } </span> 数据外泄事件中，此外还有 { $breachCount } 次事件。
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] 您的账号未出现在 <span class="bold">{ $featuredBreach }</span> 数据外泄事件中，但出现在其他 1 次事件中。
       *[other] 您的账号未出现在 <span class="bold">{ $featuredBreach }</span> 数据外泄事件中，但出现在其他 { $breachCount } 次事件中。
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] 您的账号出现在 { $breachCount } 次数据外泄事件中。
       *[other] 与您的电子邮件地址相关联的账号，出现在下列 { $breachCount } 次数据外泄事件中。
    }
show-more-breaches = 显示更多
what-to-do-headline = 如果您的信息出现在泄露事件中，您该怎么办
what-to-do-subhead-1 = 更改密码，即使是旧账号也是如此
what-to-do-blurb-1 =
    若您无法登录，请联系网站询问如何来更改密码或者删除账号。
    发现有您不知道的账号？有可能网站已改名，或是别人盗用您的身份注册了账号。
what-to-do-subhead-2 = 若您重复使用了已泄露的密码，请更改该密码
what-to-do-blurb-2 =
    黑客很可能利用您已遭泄露的密码，尝试登录您在其他网站上的账号，这也被称为“撞库”攻击。
    请为每个网站设置不同的密码，尤其是银行账号、电子邮件账号，以及其他您用来存储个人信息的网站。
what-to-do-subhead-3 = 采取额外步骤来保护您的金融账户
what-to-do-blurb-3 =
    大多数的数据外泄事件只会外泄电子邮件地址与密码，但某些事件中也会包含敏感的个人财务信息。
    若您的银行账户或信用卡卡号也遭外泄，请通知银行以预防盗用，并检查月结账单，检查是否有不明的交易记录。
what-to-do-subhead-4 = 获取帮助以创建好的密码并保证其安全。
what-to-do-blurb-4 =
    如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器可以生成强健、唯一的密码，
    安全地存储密码，并为您自动填写到网站上。
# breach-date = the calendar date a particular data theft occurred. 
breach-date = 泄露日期
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 泄露账户数量
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 泄露的数据
confirmed = 成功确认！<br />您已完成订阅！
confirmed-blurb = { -product-name-nowrap } 会尽快通过电子邮件向您发送完整报告，如果您的账号出现在新报告的泄露事件中，我们会发送电子邮件提醒。
confirmed-social-blurb = 若您的数据遭到外泄，很有可能您的朋友、家人、网络上的朋友也会受到影响。也让他们知道 { -product-name-nowrap } 吧！
unsub-headline = 退订 { -product-name-nowrap }
unsub-blurb = 这将使您的电子邮件地址移出 { -product-name-nowrap } 列表，在发生新的数据外泄事件时，您将不再收到警报。
unsub-button = 退订
unsub-survey-headline = 您的退订已成功。
unsub-survey-blurb =
    您的电子邮件地址已退订 { -product-name-nowrap }。感谢您使用此服务。
    可以花点时间来回答一个问题吗？我们想了解您的体验。
unsub-survey-form-label = 为什么您退订了 { -product-name-nowrap } 警报？
unsub-reason-1 = 我觉得那些警报不会让我的数据更安全
unsub-reason-2 = 我收到了太多的 { -product-name-nowrap } 的邮件
unsub-reason-3 = 我觉得这项服务没有价值
unsub-reason-4 = 我已经采取措施保护我的账号
unsub-reason-5 = 我正使用其他服务来监控我的账号
unsub-reason-6 = 以上皆非
unsub-survey-thankyou = 感谢您的反馈。
unsub-survey-error = 请选择一项。
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = 分享
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = 推文
download-firefox-quantum = 下载 { -brand-Quantum }
download-firefox-mobile = 下载 { -brand-name } 移动版
# Features here refers to Firefox browser features. 
features = 功能
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta、Nightly、开发者版本
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    &#x24B8; 1998–2018 部分内容著作权由个别 mozilla.org 贡献者所有。
    内容遵循<a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">知识共享许可协议</a>进行授权。
# Breach data provided by Have I Been Pwned.
hibp-attribution = 泄露数据由 { $hibp-link } 提供
site-description = 您的账号信息是否在数据外泄事件中被泄露或遭窃？可到 { -product-name } 查看。欢迎在我们的数据库中搜索并订阅警报。
confirmation-headline = 您的 { -product-name } 报告即将出炉。
confirmation-blurb = 数据外泄可能会影响任何人。让更多人了解，引导您的朋友和家人去检查他们的在线账号是否安全。
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = 其他
share-twitter = 大部分人拥有约 100 个之多的在线账号。您有任何账号出现在数据外泄事件中吗？快来检查看看。
share-facebook-headline = 看看您的账号是否也在数据外泄事件当中
share-facebook-blurb = 您的账号也出现在数据外泄事件当中吗？
og-site-description = 使用 { -product-name }，看看您的账号是否也在数据外泄事件当中。订阅以在未来发生外泄事件时收到警报，并获取确保账号安全的小贴士。
