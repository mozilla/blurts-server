# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox 账户
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
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

error-not-subscribed = 此邮箱地址未订阅 { -product-name }。
error-hibp-throttled = 与 { -brand-HIBP } 的连接过多。
error-hibp-connect = 连接 { -brand-HIBP } 时出错。
user-add-invalid-email = 无效的邮箱地址
user-add-too-many-emails = 已达到监控邮箱地址数量设定上限。
user-add-duplicate-email = 此邮箱地址已添加到 { -product-name }。
user-add-verification-email-just-sent = 验证邮件发送间隔过短，请稍后再试。
user-add-unknown-error = 添加邮箱地址时发生错误，请稍后再试。
user-delete-unknown-error = 移除邮箱地址时发生错误，请稍后再试。
user-verify-token-error = 必须持有验证令牌（Token）。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 泄露的数据
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 泄露数据由 { $hibp-link } 提供
show-all = 全部显示
sign-out = 退出
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = 管理 { -brand-fxa }
# Link title
preferences = 偏好设置
# Link title
home = 主页
# Link title
security-tips = 安全提示
# Link title
more-about-this-breach = 关于此数据外泄事件的更多信息
monitor-several-emails = 监控多个邮箱地址
website-breach = 网站信息外泄
sensitive-breach = 网站敏感信息外泄
data-aggregator-breach = 数据聚合商信息外泄
what-data = 泄露的数据：
sensitive-sites = { -product-name } 如何处理这些敏感网站？
sensitive-sites-copy = { -product-name } 仅会在邮箱地址验证后，才显示与这些数据外泄事件相关联的账号。也就是说只有您能看到您的账号是否与此事件有关（除非有他人也能使用使用您的邮箱账号。）
delayed-reporting-headline = 为什么要这么久才公开这些事件？
delayed-reporting-copy = 有的时候，数据外泄后可能要几个月甚至几年，您的登录信息才会出现在暗网上。当我们发现外泄的数据并确认无误后，就会加入数据库。
fxm-warns-you = { -product-name } 会在您的邮箱地址出现于数据外泄事件时警告您。可以在此看看有哪些信息已遭外泄、了解如何保护在线账号，并在您的邮箱地址出现于新的外泄事件时接收警报。
what-is-data-agg = “数据聚合商”是什么？
what-is-data-agg-blurb = 数据聚合商或数据代理商从公众记录收集信息并从其他公司购买，然后把这些数据汇总起来卖给许多公司用于市场营销。这些外泄事件的受害者不太可能遇到金融欺诈，但黑客可以用这些数据来冒充或分析他们。
avoid-personal-info = 避免在密码中使用个人信息
send-verification = 发送验证邮件
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = 外泄事件概要

##

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
what-is-a-website-breach = 网站信息外泄事件是什么？
website-breach-blurb = 当网络罪犯从网上账户窃取、复制或公开个人信息时，就会发生网站数据泄露。这通常是黑客发现网站安全薄弱环节的结果，也可能是账户信息意外泄露。
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 总览
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 在 { $breachDate } 发生了数据外泄。我们发现并确认了该外泄事件，并于 { $addedDate } 将其添加到数据库中。
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 菜单
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = 请验证发送到 { $userEmail } 的链接，将其添加到 { -product-name }。

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 事件记录时间：
# Section headline
rec-section-headline = 泄露了该怎么办
rec-section-subhead = 我们建议您采取以下措施来确保您的个人信息安全及保护您的数字身份。
# Section headline
rec-section-headline-no-pw = 如何保护您的个人信息
rec-section-subhead-no-pw = 尽管此外泄事件并未泄露密码，但您仍可采取一些措施来更好地保护您的个人信息。

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = 新事件

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

mozilla = { -brand-mozilla }
terms-of-service = 服务条款
privacy-notice = 隐私声明
github = { -brand-github }
footer-nav-recent-breaches = 近期数据外泄事件
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

## Breach overview page

all-breaches-headline-3 = 数据外泄事件数据库
all-breaches-lead = 我们会监控所有已知的数据外泄事件，并检查是否牵涉到您的个人信息。这是自 2007 年以来所有被报告的数据外泄事件的清单。
search-breaches = 搜索数据外泄事件
# the kind of user data exposed to hackers in data breach.
exposed-data = 泄露的数据：

## Public breach detail page

find-out-if-2 = 查看自己是否受此外泄事件影响
find-out-if-description = 我们将帮助您快速了解自己的邮箱地址是否遭到泄露，并指导您进行接下来的操作。
breach-detail-cta-signup = 检查是否有外泄事件

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>：新名字，新界面，带来<b>取回隐私</b>新招式。
banner-monitor-rebrand-dismiss-button-label = 确定
banner-monitor-rebrand-dismiss-button-tooltip = 知道了
loading-accessibility = 正在加载
