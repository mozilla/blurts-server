# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = 登录

## Email footers

email-footer-support-heading = 对 { -brand-mozilla-monitor } 有疑问？
email-footer-support-content = 访问我们的<support-link>支持中心</support-link>可获取帮助
email-footer-trigger-transactional = 您是 { -brand-mozilla-monitor } 的订阅用户，因此收到此邮件。
email-footer-reason-subscriber = 您是 { -brand-mozilla-monitor } 的订阅用户，因此收到这封自动发送的邮件。如果您是误收到此邮件，则无需进行任何操作。如需获取更多信息，请访问 <support-link>{ -brand-mozilla } 技术支持</support-link>。
email-footer-reason-subscriber-one-time = 您曾订阅过 { -brand-monitor-plus }，因此收到这封自动发送的一次性邮件。我们将不会再向您发送类似邮件。如需获取更多信息，请访问 <support-link>{ -brand-mozilla } 技术支持</support-link>。
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = 如需帮助，请访问我们的支持中心：{ $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = 外泄事件数据由 { -brand-HIBP } 提供：{ $hibp_link }
email-footer-source-hibp = 外泄事件数据由 <hibp-link>{ -brand-HIBP }</hibp-link> 提供
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = 隐私
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
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

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 外泄事件数据由 <a { $hibp-link-attr }>{ -brand-HIBP }</a> 提供

## Verification email

email-verify-heading = 立即行动，保护您的个人数据
email-verify-simply-click = 请尽快点击下方链接，完成账户验证。

## Breach report

email-breach-summary = 以下是您的数据外泄情况概览
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = 您的 { $email-address } 账户的搜索结果显示您的邮箱地址可能已被泄露。我们建议您立即采取行动来应对此次泄露。
email-dashboard-cta = 前往面板

## Breach alert email

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
