# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 报告
report-date = 报告日期：
email-address = 电子邮件地址：
# A link to legal information about mozilla products.
legal = 法律信息
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
# Button text
verify-email-cta = 验证邮箱
# Button text
see-all-breaches = 查看所有数据外泄事件
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
# Section headline
monitor-another-email = 要监控其他电子邮件地址吗？

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = 数据外泄事件信息由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

email-unresolved-heading = 您有未处理的数据外泄事件
email-breach-status = 当前事件状态
# table row 1 label
email-monitored = 监控邮箱总数：
# table row 2 label
email-breach-total = 数据外泄事件总数：
# table row 3 label
email-resolved = 已处理的事件：
# table row 4 label
email-unresolved = 未处理的事件：
email-resolve-cta = 处理此事件

## Verification email

email-verify-heading = 立即行动，保护您的个人数据
email-verify-simply-click = 请尽快点击下方链接，完成账户验证。

## Breach report

email-breach-summary = 以下是您的数据外泄情况概览
email-no-breach-detected = 好消息！我们并未发现您邮箱 { $email-address } 有关的数据外泄事件。
email-dashboard-cta = 前往面板

## Breach alert

email-spotted-new-breach = 我们发现新的数据外泄事件
