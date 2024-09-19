# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = 登录

## Email footers

email-footer-support-heading = 对 { -brand-mozilla-monitor } 有疑问？
email-footer-support-content = 访问我们的<support-link>支持中心</support-link>可获取帮助
email-footer-trigger-transactional = 您是 { -brand-mozilla-monitor } 的订阅用户，因此收到此邮件。
email-footer-source-hibp = 外泄事件数据由 <hibp-link>{ -brand-HIBP }</hibp-link> 提供
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = 隐私
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = 法律信息
# Button text
verify-email-cta = 验证邮箱
# Headline of verification email
email-link-expires = 此链接将在 24 小时后失效

##

# Subject line of email
email-subject-found-breaches = { -product-name } 在下列数据外泄事件找到您的信息
# Subject line of email
email-subject-no-breaches = { -product-name } 未找到相关数据外泄事件
# Subject line of email
email-subject-verify = { -product-name }：验证您的邮箱地址
fxm-warns-you-no-breaches = { -product-name } 会在有与您相关的个人信息外泄事件发生时警告您。目前为止，未发生过外泄事件。我们会在您的邮箱地址出现在新事件中时通知您。
email-breach-alert-blurb = { -product-name } 会在有与您相关的个人信息外泄事件发生时警告您。我们刚收到其他公司的数据外泄事件。

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 数据外泄事件信息由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Verification email

email-verify-heading = 立即行动，保护您的个人数据
email-verify-subhead = 验证您的邮箱地址以在泄露事件发生后保护您的数据。
email-verify-simply-click = 请尽快点击下方链接，完成账户验证。

## Breach report

email-breach-summary = 以下是您的数据外泄情况概览
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = 您的 { $email-address } 账户的搜索结果显示您的邮箱地址可能已被泄露。我们建议您立即采取行动来应对此次泄露。
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = 您的 <b>{ $email-address }</b> 账户的搜索结果显示，您的邮箱地址可能已被泄露。建议立即采取行动来应对此次外泄事件。
email-dashboard-cta = 前往面板

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = 我们发现新的数据外泄事件

## Redesigned breach alert email

email-breach-alert-all-subject = 检测到新的数据外泄事件
email-breach-alert-all-preview = 我们将指导您采取措施，逐项解决此问题。
email-breach-alert-all-hero-heading = 您正受新发生的数据外泄事件影响
email-breach-alert-all-hero-subheading = 不必担心，我们可以帮助您解决此次暴露问题
email-breach-alert-all-lead = { -brand-mozilla-monitor } 发现以下数据外泄事件，当中涉及到您的个人信息：
email-breach-alert-all-source-title = 外泄事件来源：
email-breach-alert-all-data-points-title = 暴露日期：
email-breach-alert-all-next-steps-lead = 我们会一步步指导您处理此次数据外泄事件。
email-breach-alert-all-next-steps-cta-label = 开始处理
email-breach-alert-all-next-steps-button-dashboard = 前往面板
