# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = 高风险数据外泄事件
fix-flow-nav-leaked-passwords = 泄露的密码
fix-flow-nav-security-recommendations = 安全建议
guided-resolution-flow-exit = 返回面板
guided-resolution-flow-next-arrow = 转到下一步
guided-resolution-flow-next-arrow-sub-step = 前往下一个结果
guided-resolution-flow-step-navigation-label = 向导步骤

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = 继续处理
fix-flow-celebration-next-recommendations-label = 查看建议
fix-flow-celebration-next-dashboard-label = 前往面板

## High-risk flow

fix-flow-celebration-high-risk-title = 您已处理高风险暴露！
fix-flow-celebration-high-risk-description-in-progress = 这些问题处理起来可能很麻烦，但对保护自身安全十分重要。请再接再厉！
fix-flow-celebration-high-risk-description-done = 这些问题处理起来可能很麻烦，但对保护自身安全十分重要。
fix-flow-celebration-high-risk-description-next-passwords = 现在来处理暴露的密码。
fix-flow-celebration-high-risk-description-next-security-questions = 现在来处理暴露的安全问题。
fix-flow-celebration-high-risk-description-next-security-recommendations = 接下来，我们会根据您数据的暴露日期，提供个性化的安全建议。
fix-flow-celebration-high-risk-description-next-dashboard = 您已完成全部步骤，现在可在面板中查看所有操作项目并跟踪进度。

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = 您的密码已受到保护！
fix-flow-celebration-security-questions-title = 您的安全问题已受到保护！
fix-flow-celebration-leaked-passwords-description-next-security-questions = 现在来检查并更新您已暴露的安全问题。
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = 接下来，我们会根据您暴露的数据类型，提供个性化的安全建议。
fix-flow-celebration-leaked-passwords-description-next-dashboard = 很好！您已完成全部步骤，现在可在面板中查看所有操作项目并跟踪进度。

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = 您已完成全部建议！
fix-flow-celebration-security-recommendations-description-next-dashboard = 很好！您已完成全部步骤，现在可在面板中查看所有操作项目并跟踪进度。

# High Risk Data Breaches

high-risk-breach-heading = 需进行的操作
high-risk-breach-subheading = 此操作需要访问您的敏感信息，所以您需要手动处理。
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary = 在 { $num_breaches } 次数据外泄事件中出现过：
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name }<breach_date>（发生于 { $breach_date }）</breach_date>
high-risk-breach-mark-as-fixed = 标记为已处理
high-risk-breach-skip = 暂时跳过
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time = 预计需要时间：{ $estimated_time }+ 分钟

# Credit Card Breaches

high-risk-breach-credit-card-title = 您的信用卡卡号已暴露
high-risk-breach-credit-card-description = 任何获得了此信息的人都可以用其进行未经授权的交易，而您可能要为此负责。立即处理以免造成财产损失。
high-risk-breach-credit-card-step-one = 如果您仍持有此卡，请通知发卡行此卡片信息已被窃取。
high-risk-breach-credit-card-step-two = 申领使用新卡号的新卡。
high-risk-breach-credit-card-step-three = 检查您的账户是否有未经授权的扣款。

# Bank Account Breaches

high-risk-breach-bank-account-title = 您的银行账户已暴露
high-risk-breach-bank-account-description = 尽快采取行动可以为您争取更充分的法律保护并挽回损失。
high-risk-breach-bank-account-step-one = 立即通知银行您的账户已被盗用。
high-risk-breach-bank-account-step-two = 更改您的账号。
high-risk-breach-bank-account-step-three = 检查您的账户是否有未经授权的扣款。

# Social Security Number Breaches

high-risk-breach-social-security-title = 您的社会保障号码已暴露
high-risk-breach-social-security-description = 如果您在美国，诈骗分子可使用您的社会保障号码来申请新的贷款或信用卡。尽快采取行动，以免造成财产损失。
high-risk-breach-social-security-step-one = <link_to_info>设置欺诈警报或冻结信用</link_to_info>来保护自己。
high-risk-breach-social-security-step-two = <link_to_info>检查您的信用报告</link_to_info>中是否有不熟悉的账户。

# Social Security Number Modal

ssn-modal-title = 关于欺诈警报和信用冻结
ssn-modal-description-fraud-part-one = <b>欺诈警报</b>会要求商业机构先验证您的身份，然后才将新的信贷签发到您的名下。此服务免费提供，有效期为一年，且不会对您的信用评分产生负面影响。
ssn-modal-description-fraud-part-two = 若要申请，请联系三大征信机构中的任意一家，无需全部联系。
ssn-modal-description-freeze-credit-part-one = <b>冻结信用</b>可防止任何人以您的名义开设新账户。此操作无需付费，也不会对您的信用评分产生负面影响，不过在开设新账户前需要先解冻。
ssn-modal-description-freeze-credit-part-two = 若要冻结信用，请联系 <equifax_link>Equifax</equifax_link>、<experian_link>Experian</experian_link>、<transunion_link>TransUnion</transunion_link> 三家征信机构。
ssn-modal-learn-more = 详细了解欺诈警报和信用冻结
ssn-modal-ok = 确定

# PIN Breaches

high-risk-breach-pin-title = 您的 PIN 已暴露
high-risk-breach-pin-description = 尽快采取行动可以为您争取更充分的法律保护并挽回损失。
high-risk-breach-pin-step-one = 立即通知银行您的 PIN 已被盗用。
high-risk-breach-pin-step-two = 如果在其他地方使用了相同的 PIN，请全部更改。
high-risk-breach-pin-step-three = 检查您的账户是否有未经授权的扣款。

# No high risk breaches found

high-risk-breach-none-title = 好消息，我们未发现任何高风险数据外泄事件
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = 我们按照您的邮箱地址来检测数据外泄事件，没有发现 { $email_list } 的高风险数据外泄事件。
high-risk-breach-none-sub-description-part-one = 高风险的数据外泄包括：
high-risk-breach-none-sub-description-ssn = 美国社会保障号码
high-risk-breach-none-sub-description-bank-account = 银行账户信息
high-risk-breach-none-sub-description-cc-number = 信用卡卡号
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = 继续

# Security recommendations

security-recommendation-steps-label = 安全建议
security-recommendation-steps-title = 以下是我们的建议：
security-recommendation-steps-cta-label = 明白了！

# Phone security recommendation

security-recommendation-phone-title = 保护您的电话号码
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary = 您的电话号码出现在 { $num_breaches } 次数据外泄事件中：
security-recommendation-phone-description = 虽然您没有办法收回此信息，但还是可以按照以下步骤来确保自身安全。
security-recommendation-phone-step-one = 拦截骚扰号码以避免接到骚扰电话
security-recommendation-phone-step-two = 不要点击未知发件人发来的信息当中的链接。如果认为是来自可信来源，请直接向其致电确认

# Email security recommendation

security-recommendation-email-title = 保护您的邮箱地址
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary = 您的邮箱地址出现在 { $num_breaches } 次数据外泄事件中：
security-recommendation-email-description = 很可惜，此问题无法处理，但还是可以采取一些措施来保护自己。
security-recommendation-email-step-one = 不要点击未知发件人发来的邮件当中的链接。如果认为是来自可信来源，请直接向其致电确认。
security-recommendation-email-step-two = 小心<link_to_info>钓鱼诈骗</link_to_info>
security-recommendation-email-step-three = 将可疑的邮件标记为垃圾邮件，并拦截发件人
security-recommendation-email-step-four = 将来使用 <link_to_info>{ -brand-relay } 马甲邮箱</link_to_info>保护您的邮箱

# IP security recommendation

security-recommendation-ip-title = 使用 VPN 加强隐私保护
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary = 您的 IP 地址出现在 { $num_breaches } 次数据外泄事件中：
security-recommendation-ip-description = 您的 IP 地址可用于精准确定您的位置和互联网服务提供商。黑客可通过此信息找到您的位置，或尝试连接您的设备。
security-recommendation-ip-step-one = 使用 VPN（例如 <link_to_info>{ -brand-mozilla-vpn }</link_to_info>）隐藏您的真实 IP 地址，私密上网。

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = 您的 { $breach_name } 密码已暴露
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = 出现在 { $breach_date } 发生的数据外泄事件中。
leaked-passwords-description = 诈骗分子可访问您的账户，并且很可能尝试使用此密码登录其他账户。如果您在其他地方使用了相同的密码，请全部更改以保护自己。
leaked-passwords-steps-title = 需进行的操作
leaked-passwords-steps-subtitle = 此操作需要访问您的账户，所以您需要手动处理。
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = 在 <link_to_breach_site>{ $breach_name }</link_to_breach_site> 上更改 <b>{ $emails_affected }</b> 账户的密码。
leaked-passwords-step-two = 如果您在其他地方使用了相同的密码，请全部更改。
leaked-passwords-mark-as-fixed = 标记为已解决
leaked-passwords-skip = 暂时跳过
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time = 预计完成时间：每网站 { $estimated_time } 分钟

# Leaked Security Questions

leaked-security-questions-title = 您的安全问题已暴露
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = 出现在 { $breach_date } 发生的 { $breach_name } 数据外泄事件中。
leaked-security-questions-description = 诈骗分子可通过这些信息访问您的账户，以及其他使用了相同安全问题的网站。立即更新安全问题以保护账户。
leaked-security-questions-steps-title = 需进行的操作
leaked-security-questions-steps-subtitle = 此操作需要访问您的账户，所以您需要手动处理。
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = 在 <link_to_breach_site>{ $breach_name }</link_to_breach_site> 上更新 <b>{ $email_affected }</b> 账户的安全问题。
leaked-security-questions-step-two = 如果您在其他网站上使用了相同的安全问题，请全部更新。确保为每个账户使用不同的安全问题。
