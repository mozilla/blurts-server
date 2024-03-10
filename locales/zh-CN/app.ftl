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
-brand-fxa = Firefox 账户
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = 您试图在短时间内扫描过多的邮箱地址。出于安全原因，我们暂时阻止您进行新的搜索。请您稍后再试。
error-could-not-add-email = 无法将邮箱地址添加到数据库。
error-not-subscribed = 此邮箱地址未订阅 { -product-name }。
error-hibp-throttled = 与 { -brand-HIBP } 的连接过多。
error-hibp-connect = 连接 { -brand-HIBP } 时出错。
error-hibp-load-breaches = 未能加载泄露信息。
error-must-be-signed-in = 您必须先登录 { -brand-fxa }。
error-to-finish-verifying = 您须使用主账户邮箱登录，才可完成此次 { -product-name } 的邮箱验证。
home-title = { -product-name }
home-not-found = 找不到网页。
oauth-invalid-session = 无效会话
scan-title = { -product-name }：扫描结果
user-add-invalid-email = 无效的邮箱地址
user-add-too-many-emails = 已达到监控邮箱地址数量设定上限。
user-add-email-verify-subject = 确认您要订阅 { -product-name }。
user-add-duplicate-email = 此邮箱地址已添加到 { -product-name }。
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = 访问 { $preferencesLink } 以查看 { $userEmail } 的状态。
user-add-verification-email-just-sent = 验证邮件发送间隔过短，请稍后再试。
user-add-unknown-error = 添加邮箱地址时发生错误，请稍后再试。
user-delete-unknown-error = 移除邮箱地址时发生错误，请稍后再试。
error-headline = 错误
user-verify-token-error = 必须持有验证令牌（Token）。
user-verify-email-report-subject = 您的 { -product-name } 报告
user-unsubscribe-token-error = 退订需要令牌（Token）。
user-unsubscribe-token-email-error = 退订需要令牌（Token）与 emailHash。
user-unsubscribe-title = { -product-name }：退订
pwt-section-headline = 更强的密码 = 更好的保护
landing-headline = 您获得安全，免受黑客影响的权利，从这里开始。
scan-placeholder = 输入邮箱地址
scan-submit = 搜索您的邮箱地址
scan-error = 须为有效的邮箱地址。
download-firefox-banner-button = 下载 { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = 发送成功！
sign-up = 注册
form-signup-error = 须为有效的邮箱地址
# breach-date = the calendar date a particular data theft occurred.
breach-date = 泄露日期
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 泄露账户数量
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 泄露的数据
unsub-headline = 退订 { -product-name-nowrap }
unsub-blurb = 这将使您的邮箱地址移出 { -product-name-nowrap } 列表，在发生新的数据外泄事件时，您将不再收到警报。
unsub-button = 退订
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 泄露数据由 { $hibp-link } 提供
share-twitter = 大部分人拥有约 100 个之多的在线账号。您有任何账号出现在数据外泄事件中吗？快来检查看看。
share-facebook-headline = 看看您的账号是否也在数据外泄事件当中
share-facebook-blurb = 您的账号也出现在数据外泄事件当中吗？
og-site-description = 使用 { -product-name }，看看您的账号是否也在数据外泄事件当中。订阅以在未来发生外泄事件时收到警报，并获取确保账号安全的小贴士。
show-all = 全部显示
fxa-scan-another-email = 想要检查其他邮箱地址？
sign-out = 退出
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
have-an-account = 已有账户？
fxa-pwt-summary-2 = 简短单调的密码很容易被黑客猜中。至少使用两个单词及字母、数字和特殊字符的组合。
fxa-pwt-summary-4 = 如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器，可帮助您创建高强度的密码，安全地存储，并为您自动填写到网站上。
fxa-pwt-summary-6 = 数据外泄事件层出不穷。若您的个人信息出现在新的数据外泄事件中，{ -product-name } 会发送警报给您，这样就可以采取措施来保护账号。
fxa-what-to-do-blurb-1 = 若您无法登录，请联系网站询问如何来更改密码或者删除账号。发现有您不知道的账号？有可能是您的数据已经被卖掉了，也有可能是单纯忘记创建过该账号，或是网站已改名。
fxa-what-to-do-subhead-2 = 停止使用已泄露的密码，并将每个使用该密码的网站密码都进行修改。
fxa-wtd-blurb-2 =
    黑客很可能利用您已遭泄露的密码，尝试登录您在其他网站上的账号，这也被称为“撞库”攻击。
    请为每个网站设置不同的密码，尤其是银行账号、电子邮件账号，以及其他您用来存储个人信息的网站。
fxa-what-to-do-blurb-3 =
    大多数的数据泄漏事件只会泄漏邮箱地址与密码，但某些事件中也会包含敏感的个人财务信息。
    若您的银行账户或信用卡卡号也遭泄漏，请通知银行以预防盗用，并检查月结账单，检查是否有不明的交易记录。
fxa-what-to-do-subhead-4 = 获取能帮助您记住所有密码，并确保密码安全的建议。
fxa-what-to-do-blurb-4 = 如 1Password、LastPass、Dashlane 和 Bitwarden 等密码管理器可以安全地存储密码，并为您自动填写到网站上。在您的手机与计算机上使用密码管理器，不必再记忆密码。
# Alerts is a noun
sign-up-for-alerts = 订阅警报
# Link title
frequently-asked-questions = 常见问题
about-firefox-monitor = 关于 { -product-name }
# Link title
preferences = 偏好设置
# Link title
home = 主页
# Link title
security-tips = 安全提示
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = 打开 { -brand-fxa }导航栏
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = 最新公开的外泄事件
# Link title
more-about-this-breach = 关于此数据外泄事件的更多信息
take-control = 夺回个人数据的控制权。
cant-stop-hackers = 您无法阻止黑客入侵，但可以通过改变习惯，让他们更难得手。
read-more-tips = 阅读更多安全提示
how-hackers-work = 了解黑客的手段
monitor-your-online-accounts = 使用 { -brand-fxa }订阅数据外泄警报
stay-alert = 时刻留意新的数据外泄事件
if-your-info = 如果您的信息出现于新的数据外泄事件中，我们会向您发送警报。
search-all-emails = 搜索您在使用的所有邮箱地址，检查是否有数据外泄事件，也在有新威胁时收到警报。
monitor-several-emails = 监控多个邮箱地址
take-action = 采取措施保护您的账户
keep-your-data-safe = 了解您需要做些什么来保护您的数据，以免受网络犯罪的影响。
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
what-data = 泄露的数据：
sensitive-sites = { -product-name } 如何处理这些敏感网站？
sensitive-sites-copy = { -product-name } 仅会在邮箱地址验证后，才显示与这些数据外泄事件相关联的账号。也就是说只有您能看到您的账号是否与此事件有关（除非有他人也能使用使用您的邮箱账号。）
delayed-reporting-headline = 为什么要这么久才公开这些事件？
delayed-reporting-copy = 有的时候，数据外泄后可能要几个月甚至几年，您的登录信息才会出现在暗网上。当我们发现外泄的数据并确认无误后，就会加入数据库。
about-fxm-headline = 关于 { -product-name }
about-fxm-blurb = { -product-name } 会在您的账号出现于数据外泄事件时警告您。您可以在此看看账号是否出现于某次数据外泄事件、在有新的外泄事件时收到警报，并采取行动保护您的在线账号。{ -product-name } 由 { -brand-Mozilla } 提供。
fxm-warns-you = { -product-name } 会在您的邮箱地址出现于数据外泄事件时警告您。可以在此看看有哪些信息已遭外泄、了解如何保护在线账号，并在您的邮箱地址出现于新的外泄事件时接收警报。
# How Firefox Monitor works
how-fxm-works = { -product-name } 工作原理
how-fxm-1-headline = 进行基本搜索
how-fxm-1-blurb = 搜索您的邮箱地址，是否出现于 2007 年起，已公开的数据外泄事件数据库中。基本搜索可找出大部分数据外泄事件，但不会列出包含个人敏感信息的事件。
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
change-pw-site = 更改此网站密码
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] 出现在 { $breachCount } 次已知的外泄事件中。
    }
check-for-breaches = 检查是否有外泄事件
find-out-what-hackers-know = 看看黑客已经掌握了您哪些资料，并了解如何先发制人。
get-email-alerts = 保持安全：当您的信息出现在已知外泄事件中时，将获得邮件警报
search-for-your-email = 搜索自 2007 年起的公开数据外泄事件当中，是否包含您的邮箱地址。
back-to-top = 回到顶端
comm-opt-0 = 如果我的某个邮箱地址出现在数据外泄事件中，请发邮件通知我。
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = 将所有外泄警报发送到 { $primaryEmail }。
stop-monitoring-this = 停止监控此邮箱地址。
resend-verification = 重发验证邮件
add-new-email = 添加新邮箱地址
send-verification = 发送验证邮件
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = 外泄事件概要
show-breaches-for-this-email = 显示所有与此邮箱地址相关的数据外泄事件。
link-change-primary = 更改主邮箱地址
remove-fxm = 移除 { -product-name }
remove-fxm-blurb = 关闭 { -product-name } 的警报。您的 { -brand-fxa }仍然有效，您可能会收到其他与账户有关的通信。
# Button title
manage-email-addresses = 管理邮箱地址
# Link title
latest-breach-link = 看看您是否也在这次外泄事件中

## Variables:
##   $userName (String) - Username

welcome-back = 欢迎回来，{ $userName }！
welcome-user = { $userName }，欢迎！

##

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
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] 找到 { $breachCount } 次新的数据外泄事件
    }
sign-up-headline-1 = 注册 { -brand-fxa }，获取数据外泄警报。
account-not-required = 不必注册 { -brand-fxa }即可使用 { -brand-name } 浏览器。您可能会收到 { -brand-Mozilla } 服务的相关信息。

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = 您的信息是否出现在 { $breachName } 的数据外泄事件？
fb-not-comp = 这个邮箱没有出现在 { $breachName } 外泄事件。
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] 但出现在其他 { $breachCount } 次外泄事件中。
    }
fb-comp-only = 此邮箱地址出现在 { $breachName } 外泄事件中。
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] 此邮箱地址出现在 { $breachCount } 次外泄事件中，包括 { $breachName } 事件。
    }

##

no-other-breaches-found = 在基本搜索中未找到其他外泄事件。
no-results-blurb = 很抱歉，我们的数据库中没有该外泄事件相关信息。
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note = <span>您的邮箱地址未出现在此次泄露事件中，但您的电话号码很可能已经中招。</span>部分 Facebook 账户泄露的是电话号码和其他个人信息，而非邮箱地址。若您曾经注册过 Facebook 账户——即使现在已不使用——我们还是建议您采取以下步骤保护自己
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>到<a>你的 Facebook 信息</a>页将您的个人信息设为“仅限自己”或其他非公开设置。</span>
facebook-breach-what-to-do-1-copy = 在此次泄露事件中，黑客采集了被设置为“公开”或“好友”的个人信息。这些信息与其他数据组合可以访问更多您的个人信息和账户。
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>更改您手机上<a>电信运营商账户</a>的密码、PIN 码或其他安全凭证，以防止“SIM 卡交换（SIM-swapping）”诈骗</span>。
facebook-breach-what-to-do-2-copy = SIM 卡交换，也被称为“SIM 卡劫持（SIM-jacking）”，是指黑客用电话号码、出生日期和其他数据来接管一个人的电话号码，然后入侵他们的邮箱，社交媒体甚至财务账户。
facebook-breach-what-to-do-3 = 到我们的 Facebook 泄露页面查看所有建议
# "Appears in-page as: Showing: All Breaches"
currently-showing = 显示：

## Updated error messages

error-bot-headline = 暂时无法搜索
error-bot-blurb = 您在短时间内搜索了太多邮箱地址，我们担心您可能是机器人。您将暂时无法进行搜索，请稍后再试。
error-csrf-headline = 会话超时
error-csrf-blurb = 点击浏览器的后退按钮或重新加载页面，再试一次。
error-invalid-unsub = 如何取消订阅来自 { -product-name } 的警报
error-invalid-unsub-blurb = 您可以从任何 { -product-name } 发送的邮件中进行退订。请到收件箱搜索来自 { -brand-team-email } 的邮件，然后点击邮件底部的“取消订阅”链接。
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 正在监控的邮箱地址
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 在所有事件中泄露的密码
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 有已知的数据外泄事件，泄露了您的信息
    }
# Button
see-additional-breaches = 查看其他外泄事件
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] 此邮箱地址出现在 { $breachCount } 次已知数据外泄事件中。
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = { $userEmail } 的搜索结果
other-monitored-emails = 其他监控的邮箱地址
email-verification-required = 需要验证邮箱地址
fxa-primary-email = { -brand-fxa }邮件 - 主账号
what-is-a-website-breach = 网站信息外泄事件是什么？
website-breach-blurb = 当网络罪犯从网上账户窃取、复制或公开个人信息时，就会发生网站数据泄露。这通常是黑客发现网站安全薄弱环节的结果，也可能是账户信息意外泄露。
security-tips-headline = 保护您不受黑客侵扰的安全提示
steps-to-protect = 采取措施保护您的在线身份
take-further-steps = 采取更多措施保护身份信息
alert-about-new-breaches = 有新的外泄事件时通知我
see-if-youve-been-part = 看看您是否也处于数据外泄事件之中。
get-ongoing-breach-monitoring = 不间断监控多个邮箱地址是否存在数据外泄。
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 找找看
new-unsub-error = 您可以从任何一封 { -product-name } 发送的邮件取消订阅。
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] 但它还出现在其他 { $breachCount } 次已知数据外泄事件中。
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 其他信息，包括：
# Title
email-addresses-title = 邮箱地址
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 总览
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 在 { $breachDate } 发生了数据外泄。我们发现并确认了该外泄事件，并于 { $addedDate } 将其添加到数据库中。
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } 偏好设置
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = 已登录为：{ $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = 按分类筛选：
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 菜单
to-affected-email = 向受影响的邮箱地址发送外泄警报
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = 捍卫隐私不是幻想。加入 { -brand-name } 一同抗争。
# Link title
learn-more-link = 详细了解。
email-sent = 邮件发送成功！
# Form title
want-to-add = 要添加其他邮箱地址吗？
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = 请验证发送到 { $userEmail } 的链接，将其添加到 { -product-name }。

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = 邮箱已通过验证！
# Variables:
#   $email (String) - User email address
email-added-to-subscription = 若 { $email } 出现在新的数据外泄事件中，我们会通知您。
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = 要查看或管理您所有设为监控的邮箱地址，请访问 { $nestedSignInLink }。
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = 请登录

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = 管理 { $preferencesLink } 中的所有邮箱地址。
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = 外泄警报通知
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 事件记录时间：
how-hackers-work-desc = 保护您的密码不受网络犯罪侵害，这正是不法分子虎视眈眈的信息。
what-to-do-after-breach-desc = 锁定账号，让您的个人信息不落入坏人之手。
create-strong-passwords-desc = 让您的密码更强大、更安全、更难猜测。
steps-to-protect-desc = 了解最常见的威胁，并了解要注意哪些事项。
five-myths-desc = 了解如何避免设置密码的坏习惯，让密码更难遭到黑客窃取。
take-further-steps-desc = 了解如何降低身份遭窃的风险，防止经济损失。
# This message appears after a user has successfully updated their communication settings.
changes-saved = 更改已保存！
# Section headline
rec-section-headline = 泄露了该怎么办
rec-section-subhead = 我们建议您采取以下措施来确保您的个人信息安全及保护您的数字身份。
# Section headline
rec-section-headline-no-pw = 如何保护您的个人信息
rec-section-subhead-no-pw = 尽管此外泄事件并未泄露密码，但您仍可采取一些措施来更好地保护您的个人信息。
# Button
see-additional-recs = 看看其他建议

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } 出现在此数据外泄事件中。<a>接下来该怎么办</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] 您有 { $numAffectedEmails } 个邮箱出现在此外泄事件中。<a>接下来该怎么办</a>
    }

##

marking-this-subhead = 标记此外泄事件为已处理
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body = <span>当您针对此事件采取措施处理后</span>，就可将其标记为“已处理”。您可以随时回到仪表盘来访问某次事件的详细信息。
mark-as-resolve-button = 标记为已处理
marked-as-resolved-label = 已标记为已处理
undo-button = 撤销
confirmation-1-subhead = 您刚刚处理完第一宗外泄事件，真棒！
confirmation-1-body = 再接再厉，到仪表盘看看是否还有其他需处理的的事件。
confirmation-2-subhead = 黑客，接招吧！
confirmation-2-body = 您正在采取重要措施来保护自己的账号安全。
confirmation-3-subhead = 梅开二度，干得好！
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = 您的新密码足够独特、强健、又很难被猜到吗？<a>了解更多</a>
generic-confirmation-subhead = 已将此事件标记为已处理
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
       *[other] 请到仪表盘确认还剩下哪些数据外泄事件。
    }
return-to-breach-details-link = 回到事件详情
go-to-dashboard-link = 前往仪表盘
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
       *[other] 已处理 { $numResolvedBreaches } 起事件
    }
progress-intro-subhead = { -product-name } 新功能：将数据外泄事件标记为已处理
progress-intro-message = 确认事件详细信息并采取措施保护自己的数据后，就可以将事件标记为“已处理”。
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] 已处理 { $numResolvedBreaches } 起事件，共 { $numTotalBreaches } 起
    }
progress-complete = 已将所有事件标记为已处理

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>这是一个很棒的开始！</span>看看还剩下哪些事件需要处理。
progress-message-2 = <span>继续加油！</span>诸如更改密码等微小操作，会对您的网络安全有极大保护。
progress-message-3 = <span>做得好！</span>继续保持，还剩下几起就处理完这些数据外泄事件了。
progress-message-4 = <span>快完成了！</span>即将抵达终点。
progress-complete-message = <span>感觉不错，对吗？</span>若您想继续处理，可以趁现在把其他网站的登录信息换成强度更高的密码。

##

resolve-this-breach-link = 处理此事件
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = 已标记为已处理：
hide-resolved-button = 隐藏已处理事件
show-resolved-button = 显示已处理事件
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
       *[other] 在未处理事件中泄露的密码
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
       *[other] 标记为已处理的数据外泄事件数
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = 新事件
mobile-promo-headline = 推荐下载手机/平板电脑端 { -brand-name }
mobile-promo-body = 快速、私密且安全地浏览。前往 Google Play 或 App Store 即可下载 { -brand-name }。
mobile-promo-cta = 获取 Android 和 iOS 端 { -brand-name }
promo-lockwise-headline = 随身携带密码
lockwise-promo-body = 掌控所有设备上的登录信息。可从您的计算机、手机或平板电脑安全地进行访问。
promo-lockwise-cta = 获取 { -brand-lockwise }
fpn-promo-headline = 对网站和跟踪器伪装您的位置
promo-fpn-body = { -brand-fpn } 通过伪装您的真实 IP 地址，摆脱那些用广告定位您的网站和数据收集器。
promo-fpn-cta = 获取 { -brand-fpn }
monitor-promo-headline = 帮您关心数据外泄事件
monitor-promo-body = 在您的个人信息出现在数据外泄事件中时收到通知。
ecosystem-promo-headline = 使用尊重隐私的产品保卫您的网络世界
ecosystem-promo-body = 所有 { -brand-name } 产品，均符合我们对个人数据隐私的承诺：索取更少、确保安全、绝不隐瞒。
promo-ecosystem-cta = 一览所有产品
steps-to-resolve-headline = 外泄事件处理步骤
vpn-promo-headline = 就现在！增强您的在线安全性。
vpn-promo-copy = { -brand-Mozilla } 的虚拟专用网络（VPN）可帮助保护您的互联网连接免受黑客和间谍的侵扰。
vpn-promo-cta = 下载 { -brand-mozilla-vpn }
vpn-promo-headline-new = 一次性订阅全年，可享半价
vpn-promo-copy-new = 保护您的在线数据——请选择适合您的 VPN 订阅方案。

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = 您的位置：{ $ip-location }
vpn-banner-protect-yourself-with-vpn = 使用 { -brand-mozilla-vpn } <em>保护自己</em>。
vpn-banner-protected-with-vpn = 使用 { -brand-mozilla-vpn } <em>保护</em>。
vpn-banner-title-1 = 您已受保护 — 感谢使用 { -brand-mozilla-vpn }。
vpn-banner-title-2 = 若不使用 VPN，您的真实位置会暴露无遗。
vpn-banner-subtitle-2 = 只需 3 个步骤，就能保护自己的位置信息并安全地上网。
vpn-banner-status-protected = 当前状态：<em>保护中 ✓</em>
vpn-banner-status-not-protected = 当前状态：<em>未受保护 ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP 地址：{ $ip-address }
vpn-banner-step-1 = 订阅 { -brand-mozilla-vpn }
vpn-banner-step-2 = 选择 VPN 位置
vpn-banner-step-3 = 激活 VPN，上网更安全
vpn-banner-cta = 下载 { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = 展开
# button to close panel
vpn-banner-cta-close = 关闭

## Relay and VPN educational/ad units

ad-unit-relay-cta = 详细了解 { -brand-relay }
ad-unit-vpn-cta = 详细了解 { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = 要如何保密自己的邮箱地址？
# ad 2 heading
ad-unit-2-do-you-worry = 您是否担心公共 Wi-Fi 的安全？
# ad 3 heading
ad-unit-3-stay-in-the-game = 再接再厉！
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } 可为您提供稳定且安全的连接，玩游戏、看网剧，不在话下。
# ad 3 list item 1
ad-unit-3-prevent-throttling = 拒绝限速
# ad 3 list item 2
ad-unit-3-be-anywhere = 无论身在何处
# ad 3 list item 3
ad-unit-3-access-more = 访问更多内容
# ad 4 heading
ad-unit-4-shopping-with = 用马甲邮箱网购
ad-unit-4-want-to-buy = 想要网购，但不熟悉或不是很信任商家？
ad-unit-4-shop-online = 网购就用马甲邮箱。您可将订单邮件转发至真实邮箱，并随时按需关闭马甲的转发功能。
# ad 5 heading
ad-unit-5-on-the-go = 随时随地使用 { -brand-relay }
ad-unit-5-instantly-make = 随时随地创建自定义马甲邮箱！
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = 随时随地连接
ad-unit-5-privately-sign-in = 可使用马甲邮箱登录公共 Wi-Fi，如在您最常去的咖啡厅登录上网时
# ad 5 subheading 2
ad-unit-5-email-receipts = 收取电子收据邮件
ad-unit-5-share-custom-email = 向商家提供马甲邮箱用于发送电子收据，无需提供真实邮箱
# ad 5 subheading 3
ad-unit-5-use-on-phone = 在手机上使用
ad-unit-5-no-matter-where = 无论您身居何处，只需几秒就可为想做的任何事情创建自定义马甲邮箱
# ad 6 heading
ad-unit-6-worry-free = 注册全无忧
ad-unit-6-want-to-start = 想要开始新订阅、回复邀请或获得优惠促销代码，而不让垃圾邮件充斥您的收件箱吗？
ad-unit-6-before-you-complete = 您在下次注册账号时，可使用马甲邮箱而非真实邮箱，保护您的个人信息并更好地管理收件箱

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla 基金会
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla 账户
open-in-new-tab-alt = 新建标签页打开链接

## Search Engine Optimization

meta-desc-2 = 使用 { -brand-fx-monitor } 查看您是否涉及数据泄露。我们将帮助您了解下一步该做什么，并持续监控新的泄漏事件。

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = 登录
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = 解决数据外泄事件
site-nav-settings-link = 设置
site-nav-help-link = 帮助和支持
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = 试试我们其他保护安全的工具：
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = 主菜单
main-nav-button-collapse-label = 收起菜单
main-nav-button-collapse-tooltip = 收起菜单
main-nav-button-expand-label = 展开菜单
main-nav-button-expand-tooltip = 展开菜单
main-nav-label = 导航
main-nav-link-home-label = 主页
main-nav-link-dashboard-label = 面板
main-nav-link-settings-label = 设置
main-nav-link-faq-label = 常见问题
main-nav-link-faq-tooltip = 常见问题

## User menu

# Obsolete
menu-button-title = 用户菜单
# Obsolete
menu-button-alt = 打开用户菜单
# Obsolete
menu-list-accessible-label = 账户菜单
# Obsolete
menu-item-fxa-2 = 管理您的 { -brand-mozilla-account }
# Obsolete
menu-item-settings = 设置
# Obsolete
menu-item-help = 帮助和支持
# Obsolete
menu-item-logout = 退出
user-menu-trigger-label = 打开用户菜单
user-menu-trigger-tooltip = 个人资料
user-menu-manage-fxa-label = 管理 { -brand-mozilla-account }
user-menu-settings-label = 设置
user-menu-settings-tooltip = 配置 { -brand-mozilla-monitor }
user-menu-help-label = 帮助和支持
user-menu-help-tooltip = 获取 { -brand-mozilla-monitor } 的使用帮助
user-menu-signout-label = 退出
user-menu-signout-tooltip = 退出 { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = 服务条款
privacy-notice = 隐私声明
github = { -brand-github }
footer-nav-all-breaches = 所有数据外泄事件
footer-external-link-faq-label = 常见问题
footer-external-link-faq-tooltip = 常见问题

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } 找不到页面
error-page-error-404-copy = 很抱歉，您要查找的页面不存在。
error-page-error-404-cta-button = 返回
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = 出现问题 - { $errorCode }
error-page-error-other-copy = 请再试一次，或者稍后再回来看看

## Breach overview page

all-breaches-headline-2 = { -brand-fx-monitor } 检测到的所有数据外泄事件
all-breaches-lead = 我们会监控所有已知的数据外泄事件，并检查是否牵涉到您的个人信息。这是自 2007 年以来所有被报告的数据外泄事件的清单。
search-breaches = 搜索数据外泄事件
# the kind of user data exposed to hackers in data breach.
exposed-data = 泄露的数据：

## Public breach detail page

find-out-if-2 = 查看自己是否受此外泄事件影响
find-out-if-description = 我们将帮助您快速了解自己的邮箱地址是否遭到泄露，并指导您进行接下来的操作。
breach-detail-cta-signup = 检查是否有外泄事件

## Floating banner

floating-banner-text = 通过来自 { -brand-Mozilla } 的新闻、提示和更新提高您的网络浏览安全。
floating-banner-link-label = 注册
floating-banner-dismiss-button-label = 不了，谢谢

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>：新名字，新界面，带来<b>取回隐私</b>新招式。
banner-monitor-rebrand-dismiss-button-label = 确定
banner-monitor-rebrand-dismiss-button-tooltip = 知道了
loading-accessibility = 正在加载
