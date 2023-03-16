# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = 外泄的数据
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select } 的数据外泄
# $count is the number of emails a user has added out of $total allowed
emails-monitored = 已监控 { $count } 个邮箱，共 { $total } 个邮箱
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = 管理电子邮件

## Breaches resolved filter

filter-label-unresolved = 未处理的数据外泄事件
filter-label-resolved = 已处理的数据外泄事件

## Breaches table

column-company = 公司
column-breached-data = 外泄的数据
column-detected = 监测到
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = 已解决
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = 未完成任务
breaches-resolve-heading = 处理此外泄事件
breaches-none-headline = 未发现数据泄漏
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = 好消息！ { $email } 没有已知的数据泄漏报告。我们将继续监控这封电子邮件，如果发生任何新的数据泄漏事件，我们会通知您。
breaches-none-cta-blurb = 您想监控另一个邮箱吗？
breaches-none-cta-button = 添加电子邮件地址
breaches-all-resolved-headline = 所有数据泄漏均已解决
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = 做得很好！您已解决 { $email } 的所有数据泄漏问题。我们将继续监控这封电子邮件，如果发生任何新的数据泄漏事件，我们会通知您。
breaches-all-resolved-cta-blurb = 您想监控另一个邮箱吗？
breaches-all-resolved-cta-button = 添加电子邮件地址
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = { $companyName } 在 { $breachDate } 遭遇了数据外泄。我们发现并确认了该外泄事件，并于 { $addedDate } 将其添加到数据库中。泄露的数据包括 { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-password-manager = { -brand-firefox } 密码管理器

## Prompts the user for changes when there is a breach detected of password

# { $breachedCompanyLink } will link to the website of the company where the breach occurred
breach-checklist-pw-header-2 = 前往该网站更改密码并启用双重身份验证 (2FA)。
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-2 = 确保您的密码独一无二且不易被猜到。如果此密码还用于其他账户，请一并更改。 { $passwordManagerLink }可以帮助您安全管理密码。

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-body = 这可以将电子邮件转发到您的真实收件箱，隐藏您的真实邮箱地址。

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 关注您的信用报告，查找不认识的银行账户、贷款和信用卡。

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = 向您的信用卡发卡机构报告此次泄露事件，并申请一张新卡号的信用卡。
breach-checklist-cc-body = 您还应该检查您的信用卡对账单，关注是否有不熟悉的消费记录。

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = 立即通知银行您的账户已被盗用。
breach-checklist-bank-body = 尽快采取行动可以为您争取更多法律保护并挽回损失。 您还需要检查账户中是否有不熟悉的消费记录。

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = 立即通知您的发卡行并更改 PIN。
breach-checklist-pin-body = 确保您的新 PIN 以及任何其他 PIN 都不包含容易猜到的数字组合，例如您的出生日期或地址。

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-body = 您的 IP 地址（互联网协议地址）可精准反映您的位置和互联网服务提供商，而 VPN 可以隐藏您的真实 IP 地址，因此您可以私密访问互联网。

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 更改包含您地址的任何部分的密码或 PIN。
breach-checklist-address-body = 地址在公开记录中很容易找到，使这类密码和 PIN 很容易被猜到。

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 更改所有包含您出生日期的密码或 PIN。
breach-checklist-dob-body = 出生日期在公开记录中很容易找到，获知它的人很容易就能猜出您的 PIN。

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-body = 使用长且随机的答案，并将答案存放在安全的地方。在其他使用相同密保问题的地方也应这样做。

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 为重复使用密码的账户改用独一无二的强密码。

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = 联系 { $companyName } 告知他们此次泄露事件，并询问您可以采取的具体步骤。
