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
-brand-fxa = Firefox 账户
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = 用户支持
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = 关于 Firefox 警报
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = 提供反馈
terms-and-privacy = 使用条款和隐私
error-scan-page-token = 您试图在短时间内扫描过多的电子邮件地址。出于安全原因，我们暂时阻止您进行新的搜索。请您稍后再试。
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
signup-modal-blurb = 订阅以获取您的完整报告，在发生新的数据外泄事件时收到警报，以及来自 { -product-name-nowrap } 的安全小贴士。
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
sign-up = 注册
form-signup-error = 须为有效的电子邮件地址
no-breaches-headline = 目前为止还不错。
found-breaches-headline = 您的信息出现在过去的数据外泄事件中。
no-breaches =
    您的电子邮件地址未出现在我们的基本扫描数据中。
    这是个好消息，但数据外泄事件随时都可能发生，您还有更多事情可以做。
    订阅 { -product-name-nowrap } 以获取完整报告，在发生新的数据外泄事件时收到警报，以及保护密码的小贴士。
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
fxa-unsub-headline = 退订 { -product-name } 警报。
fxa-unsub-blurb =
    您将不再收到 { -product-name } 警报。
    您的 { -brand-fxa }将保持活跃状态，并可能收到其他与账户有关的通讯。
unsub-survey-form-label = 为什么您退订了 { -product-name-nowrap } 警报？
unsub-reason-1 = 我觉得那些警报不会让我的数据更安全
unsub-reason-2 = 我收到了太多的 { -product-name-nowrap } 的邮件
unsub-reason-3 = 我觉得这项服务没有价值
unsub-reason-4 = 我已经采取措施保护我的账号
unsub-reason-5 = 我正使用其他服务来监控我的账号
unsub-reason-6 = 以上皆非
unsub-survey-thankyou = 感谢您的反馈。
unsub-survey-error = 请选择一项。
unsub-survey-headline-v2 = 您已成功退订。
unsub-survey-blurb-v2 =
    您将不再收到 { -product-name } 警报。
    您愿意花点时间回答一则有关使用体验的问题吗？
unsub-survey-button = 提交回答
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
mozilla-security-blog = { -brand-Mozilla } 安全博客
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = 社交
show-all = 全部显示
fxa-landing-blurb = 看看黑客已经掌握了您哪些资料，并了解如何先发制人。
fxa-scan-label = 看看您是否出现在数据外泄事件中。
fxa-welcome-headline = 欢迎来到 { -product-name }。
fxa-welcome-blurb = 设置完成。若 { $userEmail } 出现在数据外泄事件中，我们会通知您。
fxa-scan-another-email = 想要检查其他电子邮件地址？
# Search Firefox Monitor
fxa-scan-submit = 搜索 { -product-name }
sign-up-to-check = 注册以进行检查
sign-in = 登录
sign-out = 退出
full-report-headline = 您的 { -product-name } 报告
see-full-report = 查看完整报告
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
fxa-download-firefox-bar-blurb = 由 { -brand-name } 为您奉上。速度翻倍，占用内存比 { -brand-Chrome } 低 30%。
fxa-download-firefox-bar-link = 立即下载
fxa-download-firefox-banner-blurb = 页面载入更好、更快，占用内存更少。
user-fb-compromised-headline = { $userEmail } 出现在{ $breachName } 数据外泄事件中。
guest-fb-compromised-headline = 此电子邮件地址出现在{ $breachName } 数据外泄事件中。
user-zero-breaches-headline = { $userEmail } 未出现在任何数据外泄事件中。
guest-zero-breaches-headline = 此电子邮件地址未出现在任何数据外泄事件中。
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } 出现在 1 次数据外泄事件中。
       *[other] { $userEmail } 出现在 { $breachCount } 次数据外泄事件中。
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] 此电子邮件地址出现在 1 次数据外泄事件中。
       *[other] 此电子邮件地址出现在 { $breachCount } 次数据外泄事件中。
    }
user-no-breaches-blurb = 若此电子邮件地址出现在新的数据外泄事件中，我们会通知您。
guest-no-breaches-blurb = 若想知道此电子邮件地址是否出现在敏感的数据外泄事件中，请注册 { -brand-fxa }。我们也会在此电子邮件地址出现于新的数据外泄事件时通知您。
user-one-breach-blurb = 此数据外泄事件泄露了以下个人信息。
user-fb-compromised-blurb =
    { $breachCount ->
        [one] 您的电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。
       *[other] 您的电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] 此电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。
       *[other] 此电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。
    }
user-fb-compromised-single = 此数据外泄事件泄露了以下个人信息。请尽快修改密码。
user-generic-fb-compromised-single = 此数据外泄事件泄露了以下个人信息。
guest-fb-compromised-single-v2 =
    此数据外泄事件泄露了以下个人信息。
    请创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] 此电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。请创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
       *[other] 此电子邮件地址还出现在其他 { $breachCount } 次数据外泄事件中。请创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] 您未出现在 { $breachName } 数据外泄事件中，但我们在另一事件中发现了该电子邮件地址。
       *[other] 您未出现在 { $breachName } 数据外泄事件中，但我们在其他事件中发现了该电子邮件地址。
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] 此电子邮件地址未出现在 { $breachName } 数据外泄事件中，但我们在另一事件中发现了该电子邮件地址。
       *[other] 此电子邮件地址未出现在 { $breachName } 数据外泄事件中，但我们在其他事件中发现了该电子邮件地址。
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] 此电子邮件地址未出现在 { $breachName } 数据外泄事件中，但我们在另一事件中发现了该电子邮件地址。请创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
       *[other] 此电子邮件地址未出现在 { $breachName } 数据外泄事件中，但我们在其他事件中发现了该电子邮件地址。请创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] 此数据外泄事件泄露了以下个人信息。请尽快修改密码。
       *[other] 这些数据外泄事件泄露了以下个人信息。请尽快修改密码。
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] 此数据外泄事件泄露了以下个人信息。
       *[other] 这些数据外泄事件泄露了以下个人信息。
    }
have-an-account = 已有账户？
signup-banner-sensitive-blurb = 看看黑客已经掌握了您哪些资料，并了解如何先发制人。我们也会在此电子邮件地址出现于新的数据外泄事件时通知您。
fxa-pwt-section-blurb = 密码可以保护账号中的所有个人信息。黑客会因一些不良的使用习惯而得益，例如在每个地方都使用相同的密码，或是使用常见的密码组合（还在使用 asdf1234 吗？）。这样的话只要一个账号被黑，他们就可以轻而易举地黑掉您多个账号。
fxa-pwt-summary-2 = 简短单调的密码很容易被黑客猜中。至少使用两个单词及字母、数字和特殊字符的组合。
fxa-pwt-summary-4 = 如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器，可帮助您创建高强度的密码，安全地存储，并为您自动填写到网站上。
fxa-pwt-summary-6 = 数据外泄事件层出不穷。若您的个人信息出现在新的数据外泄事件中，{ -product-name } 会发送警报给您，这样就可以采取措施来保护账号。
fxa-what-to-do-blurb-1 = 若您无法登录，请联系网站询问如何来更改密码或者删除账号。发现有您不知道的账号？有可能是您的数据已经被卖掉了，也有可能是单纯忘记创建过该账号，或是网站已改名。
fxa-what-to-do-subhead-2 = 停止使用已泄露的密码，并将每个使用该密码的网站密码都进行修改。
fxa-wtd-blurb-2 =
    黑客很可能利用您已遭泄露的密码，尝试登录您在其他网站上的账号，这也被称为“撞库”攻击。
    请为每个网站设置不同的密码，尤其是银行账号、电子邮件账号，以及其他您用来存储个人信息的网站。
fxa-what-to-do-blurb-3 =
    大多数的数据泄漏事件只会泄漏电子邮件地址与密码，但某些事件中也会包含敏感的个人财务信息。
    若您的银行账户或信用卡卡号也遭泄漏，请通知银行以预防盗用，并检查月结账单，检查是否有不明的交易记录。
fxa-what-to-do-subhead-4 = 获取能帮助您记住所有密码，并确保密码安全的建议。
fxa-what-to-do-blurb-4 = 如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器可以安全地存储密码，并为您自动填写到网站上。在您的手机与计算机上使用密码管理器，不必再记忆密码。
fb-landing-headline = 您的信息是否也出现在 { $breachName } 的数据外泄事件中？
copyright = © 1999-{ $year } 上述内容中的某些部分系 mozilla.org 志愿者个人版权所有。
content-available = 内容遵循知识共享许可协议进行授权。
# Alerts is a noun
sign-up-for-alerts = 注册以获取警报。
sign-up-for-fxa-alerts = 注册以获取 { -product-name } 警报。
create-free-account = 创建一个免费的 { -brand-fxa }，用于获取过往外泄事件的完整报告，接收新外泄事件的警报及其他 { -brand-Mozilla } 服务的信息。
get-your-report-and-sign-up = 获取您的报告并订阅警报通知。
# Link title
frequently-asked-questions = 常见问题
about-firefox-monitor = 关于 { -product-name }
mozilla-dot-org = Mozilla.org
preferences = 偏好设置
# Link title.
home = 主页
# Link title
breaches = 外泄事件
# Link title
security-tips = 安全提示
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = 打开 { -brand-fxa }导航栏
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = 最新公开的外泄事件
breach-added = 事件报告日期：
breach-discovered = 事件发现日期：
# Link title
more-about-this-breach = 关于此数据外泄事件的更多信息
take-control = 收回个人数据的控制权。
cant-stop-hackers = 您无法阻止黑客入侵，但可以通过改变习惯，让他们更难得手。
read-more-tips = 阅读更多安全提示
how-hackers-work = 了解黑客的手段
monitor-your-online-accounts = 使用 { -brand-fxa }订阅数据外泄警报
stay-alert = 警惕新的数据外泄事件
if-your-info = 如果您的信息出现于新的数据外泄事件中，我们会向您发送警报。
search-all-emails = 搜索您在使用的所有邮箱地址，检查是否有数据外泄事件，也在有新威胁时收到警报。
monitor-several-emails = 监控多个电子邮件地址
take-action = 采取措施保护您的账号
keep-your-data-safe = 了解您需要做些什么来保护您的数据免受网络犯罪的影响。
website-breach = 网站信息外泄
sensitive-breach = 网站敏感信息外泄
data-aggregator-breach = 数据聚合商信息外泄
unverified-breach = 未经证实的信息外泄
spam-list-breach = 垃圾邮件列表信息外泄
website-breach-plural = 网站信息外泄
sensitive-breach-plural = 敏感信息外泄
data-aggregator-breach-plural = 数据聚合商信息外泄
unverified-breach-plural = 未经证实的信息外泄
spam-list-breach-plural = 垃圾邮件列表信息外泄
what-data = 泄露了哪些数据：
sensitive-sites = { -product-name } 如何处理这些敏感网站？
sensitive-sites-copy = { -product-name } 仅会在电子邮件地址验证后，才显示与这些数据外泄事件相关联的账号。也就是说只有您能看到您的账号是否与此事件有关（除非有他人也能使用使用您的邮箱账号。）
delayed-reporting-headline = 为什么要这么久才公开这些事件？
delayed-reporting-copy = 有的时候，数据外泄后可能要几个月甚至几年，您的登录信息才会出现在暗网上。当我们发现外泄的数据并确认无误后，就会加入数据库。
about-fxm-headline = 关于 { -product-name }
about-fxm-blurb = { -product-name } 会在您的账号出现于数据外泄事件时警告您。您可以在此看看账号是否出现于某次数据外泄事件、在有新的外泄事件时收到警报，并采取行动保护您的在线账号。{ -product-name } 由 { -brand-Mozilla } 提供。
fxm-warns-you = { -product-name } 会在您的电子邮件地址出现于数据外泄事件时警告您。可以在此看看有哪些信息已遭外泄、了解如何保护在线账号，并在您的邮箱地址出现于新的外泄事件时接收警报。
# How Firefox Monitor works
how-fxm-works = { -product-name } 工作原理
how-fxm-1-headline = 进行基本搜索
how-fxm-1-blurb = 搜索您的电子邮件地址，是否出现于2007年起，已公开的数据外泄事件数据库中。基本搜索可找出大部分数据外泄事件，但不会列出包含个人敏感信息的事件。
how-fxm-2-headline = 订阅数据外泄事件警报
how-fxm-2-blurb = 注册 { -brand-fxa }来监控您的邮箱是否出现于各种数据外泄事件中。确认账号后，也会收到包含外泄的敏感信息等过去事件的相关完整报告。
how-fxm-3-headline = 在浏览器中收到通知
how-fxm-3-blurb = 使用 { -brand-name } 的时候，当您打开曾发生外泄事件的网站时将会收到通知。可以立即了解您是否也身处数据外泄事件之中，及可以采取哪些行动。
wtd-after-website = 网站信息外泄后该怎么办
wtd-after-data-agg = 数据聚合商发生信息泄露后，该做哪些事？
what-is-data-agg = “数据聚合商”是什么？
what-is-data-agg-blurb = 数据聚合商或数据代理商从公众记录收集信息并从其他公司购买，然后把这些数据汇总起来卖给许多公司用于市场营销。这些外泄事件的受害者不太可能遇到金融欺诈，但黑客可以用这些数据来冒充或分析他们。
protect-your-privacy = 保护您的在线隐私
no-pw-to-change = 与网站信息外泄不一样的是，没有密码可以更改。
avoid-personal-info = 避免在密码中使用个人信息
avoid-personal-info-blurb = 在网络上很容易查找到生日、地址、和家庭成员名称等信息。避免在密码中使用个人信息。

## What to do after data breach tips

change-pw = 更改您的密码
even-for-old = 就算是旧账号，改密码也很重要。
make-new-pw-unique = 让新密码不同且唯一
strength-of-your-pw = 密码的强度直接影响您的在线安全。
create-strong-passwords = 如何创建高强度密码
stop-reusing-pw = 停止重复使用相同密码
create-unique-pw = 为每个网站使用不同密码，并将其保存在安全的地方（如密码管理器）。
five-myths = 关于密码管理器的 5 个误解
create-a-fxa = 注册 { -brand-fxa }即可获取数据外泄事件的完整报告，并接收警报。
feat-security-tips = 保护账号的安全提示
feat-sensitive = 高级搜索敏感信息外泄事件
feat-enroll-multiple = 注册多组邮箱地址，以监控外泄事件
sign-up-for-fxa = 注册 { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
       *[other] 出现在 { $breachCount } 次已知的外泄事件中。
    }
see-if-breached = 看看您是否也出现在数据外泄事件中。
check-for-breaches = 检查是否有外泄事件
find-out-what-hackers-know = 看看黑客已经掌握了您哪些资料，并了解如何先发制人。
search-for-your-email = 搜索自2007年起的公开数据外泄事件当中，是否包含您的电子邮件地址。
back-to-top = 回到顶端
comm-opt-0 = 如果我的某个电子邮件地址出现在数据外泄事件中，请发邮件通知我。
comm-opt-1 = 将所有外泄警报发送到 { $primaryEmail }。
stop-monitoring-this = 停止监控此电子邮件地址。
resend-verification = 重发验证邮件
add-new-email = 添加新电子邮件地址
send-verification = 发送验证邮件
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = 全球沟通
breach-summary = 外泄事件概要
show-breaches-for-this-email = 显示所有与此邮箱地址相关的数据外泄事件。
link-change-primary = 更改主邮箱地址
remove-fxm = 移除 { -product-name }
remove-fxm-blurb = 关闭 { -product-name } 的警报。您的 { -brand-fxa }仍然有效，您可能会收到其他与账户有关的通讯。
manage-email-addresses = 管理电子邮件地址
latest-breach-link = 看看您是否也在这次外泄事件中
welcome-back = 欢迎回来，{ $userName }！
welcome-user = { $userName }，欢迎！
breach-alert-subject = { -product-name } 发现您的邮箱出现在新的数据外泄事件中。
your-info-was-discovered-headline = 在新的数据外泄事件中发现了您的信息。
your-info-was-discovered-blurb = 您已注册在邮箱地址出现于新的数据外泄事件时，要接收 { -product-name } 警报。以下是我们关于这次事件所了解的信息。
what-to-do-after-breach = 数据外泄后该怎么办
ba-next-step-1 = 更改密码，使用高强度、唯一的密码。
ba-next-step-blurb-1 = 高强度的密码，须包含大写字母、小写字母、特殊符号、数字的组合。请勿在密码中包含地址、生日、姓名等个人信息。
ba-next-step-2 = 全面停止使用已泄露的密码。
ba-next-step-blurb-2 = 网络罪犯可能会在暗网上找到您的密码，并用来登录您的其他账号。最好的保护方式就是为每个网站都使用不同密码。
ba-next-step-3 = 获取创建更好密码的帮助，并确保密码安全。
ba-next-step-blurb-3 = 使用密码管理器创建高强度、唯一的密码，并安全地保存登录信息，这样就可以同步到您的所有设备中使用。
faq1 = 我不认识这家公司或网站，为什么我与该外泄事件有关？
faq2 = 为什么过了这么久才通知我有数据外泄事件？
faq3 = 我怎么知道这封信是真的来自 { -product-name }？
new-breaches-found =
    { $breachCount ->
       *[other] 找到 { $breachCount } 次新的数据外泄事件
    }
sign-up-headline-1 = 注册 { -brand-fxa }，获取数据外泄警报。
account-not-required = 不需注册 { -brand-fxa } 也能使用 { -brand-name } 浏览器。您可能会收到有关 { -brand-Mozilla } 服务的信息。
get-alerted = 在有新的外泄事件时，接收警报。
was-your-info-exposed = 您的信息是否出现在 { $breachName } 的数据外泄事件？
find-out-if = 看看您的数据是否出现在这次外泄事件中。
fb-not-comp = 这个邮箱没有出现在 { $breachName } 外泄事件。
other-breaches-found =
    { $breachCount ->
       *[other] 但出现在其他 { $breachCount } 次外泄事件中。
    }
fb-comp-only = 此电子邮件地址出现在 { $breachName } 外泄事件中。
fb-comp-and-others =
    { $breachCount ->
       *[other] 此电子邮件地址出现在 { $breachCount } 次外泄事件中，包括 { $breachName } 事件。
    }
no-other-breaches-found = 在基本搜索中未找到其他外泄事件。
no-results-blurb = 很抱歉，我们的数据库中没有该外泄事件相关信息。
all-breaches-headline = { -product-name } 的所有数据外泄事件
search-breaches = 搜索数据外泄事件
# "Appears in-page as: Showing: All Breaches"
currently-showing = 显示：
all-breaches = 所有数据外泄事件

## Updated error messages

error-bot-headline = 暂时无法搜索
error-csrf-headline = 会话超时
error-csrf-blurb = 点击浏览器的后退按钮或重新加载页面，再试一次。
error-invalid-unsub = 如何取消订阅来自 { -product-name } 的警报
error-invalid-unsub-blurb = 您可以从任何 { -product-name } 发送的邮件中进行退订。请到收件箱搜索来自 { -brand-team-email } 的邮件，然后点击邮件底部的“取消订阅”链接。
login-link-pre = 已有账户？
login-link = 登录
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 正在监控的电子邮件地址
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
       *[other] 泄露您信息的数据外泄事件
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 在所有事件中泄露的密码
    }
# Button
see-additional-breaches = 查看其他外泄事件
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = 查看所有外泄事件
scan-results-known-breaches =
    { $breachCount ->
       *[other] 此电子邮件地址出现在 { $breachCount } 次已知数据外泄事件中。
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = { $userEmail } 的搜索结果：
other-monitored-emails = 其他监控的邮箱地址
email-verification-required = 需要验证邮箱地址
fxa-primary-email = { -brand-fxa }邮件 - 主账号
what-is-a-website-breach = 网站信息外泄事件是什么？
website-breach-blurb = 当网络罪犯从网上账户窃取、复制或公开个人信息时，就会发生网站数据泄露。这通常是黑客发现网站安全薄弱环节的结果，也可能是账户信息意外泄露。
security-tips-headline = 保护您不受黑客侵扰的安全提示
steps-to-protect = 采取措施保护您的在线身份
take-further-steps = 采取更多措施保护身份信息
alert-about-new-breaches = 有新的外泄事件时通知我
get-ongoing-breach-monitoring = 持续针对多个电子邮件地址，监控数据外泄事件。
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 找找看
new-unsub-error = 您可以从任何一封 { -product-name } 发送的邮件取消订阅。
other-known-breaches-found =
    { $breachCount ->
       *[other] 但它还出现在其他 { $breachCount } 次已知数据外泄事件中。
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 其他信息，包含：
# Title
email-addresses-title = 电子邮件地址
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name } 偏好设置
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = 已登录为：{ $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = 按分类筛选：
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 菜单
