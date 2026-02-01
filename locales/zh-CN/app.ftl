# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
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
-brand-solo-ai = Solo AI

##

error-not-subscribed = 此邮箱地址未订阅 { -product-name }。
user-add-invalid-email = 无效的邮箱地址
user-add-too-many-emails = 已达到监控邮箱地址数量设定上限。
user-add-duplicate-email = 此邮箱地址已添加到 { -product-name }。
user-add-verification-email-just-sent = 验证邮件发送间隔过短，请稍后再试。
user-add-unknown-error = 添加邮箱地址时发生错误，请稍后再试。
user-delete-unknown-error = 移除邮箱地址时发生错误，请稍后再试。
user-verify-token-error = 必须持有验证令牌（Token）。
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 泄露的数据
# Link title
more-about-this-breach = 关于此数据外泄事件的更多信息
what-data = 泄露的数据：
delayed-reporting-headline = 为什么要这么久才公开这些事件？
delayed-reporting-copy = 有的时候，数据外泄后可能要几个月甚至几年，您的登录信息才会出现在暗网上。当我们发现外泄的数据并确认无误后，就会加入数据库。

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 总览
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } 在 { $breachDate } 发生了数据外泄。我们发现并确认了该外泄事件，并于 { $addedDate } 将其添加到数据库中。

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
loading-accessibility = 正在加载
