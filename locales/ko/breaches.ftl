# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-scan-meta-social-title = { -brand-fx-monitor } 침해 결과
breach-scan-meta-social-description = { -brand-fx-monitor }에 로그인하여 위반을 해결하고 새로운 위반에 대한 지속적인 모니터링을 받으십시오.

## Breaches header

# Data classes pie chart title
breach-chart-title = 유출된 데이터

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select }의 데이터 유출

# $count is the number of emails a user has added out of $total allowed
emails-monitored = { $total }개의 이메일 중 { $count }개의 이메일이 확인됨

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = 이메일 관리

## Breaches resolved filter

filter-label-unresolved = 해결되지 않은 유출
filter-label-resolved = 해결된 유출

## Breaches table

column-company = 회사
column-breached-data = 유출된 정보
column-detected = 감지됨

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = 해결됨
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = 활성화

breaches-resolve-heading = 위반사항 해결:

breaches-none-headline = 유출 사항 발견되지 않음
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = 좋은 소식입니다! { $email }의 위반사항이 보고되지 않았습니다. 이 이메일을 계속 모니터링하고 새로운 위반이 발생하면 알려드리겠습니다.
breaches-none-cta-blurb = 다른 이메일을 모니터링 하시겠습니까?
breaches-none-cta-button = 이메일 주소 추가

breaches-all-resolved-headline = 모든 위반 사항 해결됨
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = 잘 하셨습니다! { $email }의 모든 위반 사항을 해결했습니다. 이 이메일을 모니터링하고 새로운 위반사항이 발생하면 알려드리겠습니다.
breaches-all-resolved-cta-blurb = 다른 이메일을 모니터링 하시겠습니까?
breaches-all-resolved-cta-button = 이메일 주소 추가

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = { $breachDate }에 { $companyName } 회사가 유출되었습니다. 유출이 발견되고 확인되어 { $addedDate }에 우리의 데이터베이스에 추가 되었습니다. 다음에 포함됨: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } 비밀번호 관리자
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = 비밀번호를 업데이트하고 2단계 인증(2FA)을 활성화하세요.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = { $firefoxRelayLink }와 같은 이메일 마스킹 기능으로 이메일을 보호하세요.
breach-checklist-email-body = 실제 받은 편지함으로 이메일을 전달하면서 이메일 주소를 숨길 수 있습니다.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 알지 못하는 계좌나 대출, 신용카드의 신용 보고서를 모니터링하세요.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = 사기꾼이 귀하의 이름으로 새 계정을 개설하지 못하도록 { $equifaxLink }와 { $experianLink }, { $transUnionLink }에 신용 동결을 고려할 수 있습니다. 신용에 영향은 가지 않으며 무료입니다.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = 신용카드 발급사에 이 유출 사실을 신고하고 새 번호의 새 카드를 요청하세요.
breach-checklist-cc-body = 또한 신용카드 명세서에서 인식되지 않은 요금이 있는지 검토해야 합니다.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = 계좌 번호가 유출되었음을 즉시 은행에 알리세요.
breach-checklist-bank-body = 그렇게 하면 손실을 복구하는데 더 많은 법적 보호를 받을 수 있습니다. 또한 알 수 없는 결제가 있는지 확인 하는 것이 좋습니다.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = 카드 발급사에 알리고 즉시 PIN을 변경하세요.
breach-checklist-pin-body = 새 비밀번호 또는 다른 비밀번호가 쉽게 예측가능한 생년월일이나 주소와 같은 숫자들을 포함하지 않았는지 확인하십시오

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = { $mozillaVpnLink }과 같은 VPN으로 인터넷을 비공개로 사용하세요.
breach-checklist-ip-body = IP 주소(인터넷 프로토콜 주소)는 사용자의 위치와 인터넷 서비스 제공업체를 정확히 파악합니다. VPN은 실제 IP 주소를 숨겨 인터넷을 비공개적으로 사용할 수 있도록 합니다.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 주소의 일부가 포함된 비밀번호나 PIN을 변경하세요.
breach-checklist-address-body = 주소는 공공기록에서 쉽게 찾을 수 있으며 비밀번호와 PIN을 쉽게 추측할수 있습니다.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 생년월일이 포함된 비밀번호나 PIN을 변경하세요.
breach-checklist-dob-body = 생년월일은 공공 기록에서 쉽게 찾을 수 있으며, 사람들이 비밀번호를 쉽게 추측할 수 있습니다.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = 실제 전화번호를 숨기는 { $firefoxRelayLink }와 같은 마스킹 서비스로 전화번호를 보호하세요.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = 보안 질문을 업데이트 하세요.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = 대부분의 경우, 회사 웹사이트의 보안 질문을 업데이트하는 것을 추천 합니다. 하지만 <b>웹사이트가 다운되거나 악성 콘텐츠를 포함하고 있을 수 있으므로</b> <breached-company-link>사이트를 방문 를 방문</breached-company-link>할 경우 주의하시기 바랍니다. 추가 보호를 위해 보안 질문을 사용한 중요한 계정에서 이러한 보안 질문을 업데이트하고 모든 계정에 대해 고유한 비밀번호를 만드세요.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 비밀번호를 재사용한 적이 있는 모든 계정에 대해 고유하고 강력한 비밀번호를 만드세요.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = { $passwordManagerLink }(무료이며 { -brand-firefox } 브라우저에 내장되어 있음)와 같은 비밀번호 관리자를 사용하면 모든 비밀번호를 추적하고 모든 기기에서 안전하게 접근할 수 있습니다.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = { $companyName }에 연락하여 이번 위반에 대해 알리고 취할 수 있는 구체적인 조치를 요청하세요.
