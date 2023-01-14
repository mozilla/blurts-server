# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select } 的数据外泄
add-email-link = 添加电子邮件地址

## Breaches resolved filter

filter-label-unresolved = 未处理的数据外泄事件
filter-label-resolved = 已处理的数据外泄事件

## Breaches table

column-company = 公司
column-breached-data = 外泄的数据

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = 前往 <a>{ $breachedCompanyUrl }</a> 更改密码并启用双因子验证（2FA）。
breach-checklist-pw-body = 请确保您的密码独一无二且难以猜到。如果这个密码也在其它账户上使用，请一并更换掉。<a>{ -brand-firefox } 密码管理器</a>可以帮助您安全地监控所有密码。

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = 使用 <a>{ -brand-relay }</a> 等马甲邮箱服务来保护您的邮箱。
breach-checklist-email-body = 这可以将电子邮件转发到您的真实收件箱，隐藏您的真实邮箱地址。

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 关注您的信用报告，查找不认识的银行账户、贷款和信用卡。
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = 您还可以考虑冻结您在 <a>Equifax</a>、<a>Experian</a> 和 <a>TransUnion</a> 上的信用，以阻止诈骗者以您的名义开设新账户。该服务免费提供，不会影响您的信用评分。

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

breach-checklist-ip-header = 使用 <a>{ -brand-mozilla-vpn }</a> 等 VPN 来私密访问互联网 。
breach-checklist-ip-body = 您的 IP 地址（互联网协议地址）可精准反映您的位置和互联网服务提供商，而 VPN 可以隐藏您的真实 IP 地址，因此您可以私密访问互联网。

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 更改包含您地址的任何部分的密码或 PIN。
breach-checklist-address-body = 地址在公开记录中很容易找到，使这类密码和 PIN 很容易被猜到。

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 更改所有包含您出生日期的密码或 PIN。
breach-checklist-dob-body = 出生日期在公开记录中很容易找到，获知它的人很容易就能猜出您的 PIN。

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = 使用 <a>{ -brand-relay }</a> 等马甲服务来保护您的电话号码，其可掩藏您的真实电话号码。

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = 在 <a>{ $breachedCompanyUrl }</a> 上更新您的密保问题。
breach-checklist-sq-body = 使用长且随机的答案，并将答案存放在安全的地方。在其他使用相同密保问题的地方也应这样做。

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 为重复使用密码的账户改用独一无二的强密码。
breach-checklist-hp-body = <a>{ -brand-firefox } 密码管理器</a>（内置于 { -brand-firefox } 浏览器中且可免费使用）等密码管理器可以帮助您保存全部密码并在您的所有设备间安全同步。

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = 联系 { $companyName } 告知他们此次泄露事件，并询问您可以采取的具体步骤。
