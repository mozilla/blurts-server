# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = 고위험 데이터 유출
fix-flow-nav-leaked-passwords = 유출된 비밀번호
fix-flow-nav-security-recommendations = 보안 관련 권장 사항
guided-resolution-flow-exit = 대시보드로 돌아가기
guided-resolution-flow-next-arrow = 다음 단계로 넘어가기
guided-resolution-flow-step-navigation-label = 단계별 안내

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = 계속 진행하기
fix-flow-celebration-next-recommendations-label = 권장 사항 보기
fix-flow-celebration-next-dashboard-label = 대시보드로 가기

## High-risk flow

fix-flow-celebration-high-risk-title = 고위험 유출을 해결했습니다!
fix-flow-celebration-high-risk-description-in-progress = 이 작업을 하는 것은 힘들지만 안전을 지키기 위해 반드시 해야 할 일입니다. 계속 해주세요.
fix-flow-celebration-high-risk-description-done = 이 작업을 하는 것은 힘들지만 안전을 지키기 위해 반드시 해야 할 일입니다.
fix-flow-celebration-high-risk-description-next-passwords = 이제 유출된 비밀번호를 수정해 보겠습니다.
fix-flow-celebration-high-risk-description-next-security-questions = 이제 유출된 보안 질문을 수정해 보겠습니다.
fix-flow-celebration-high-risk-description-next-security-recommendations = 다음으로, 어떤 데이터가 유출되었는지에 따라 맞춤화된 보안 권장 사항을 제공합니다.
fix-flow-celebration-high-risk-description-next-dashboard = 마지막 단계에 도달했습니다. 대시보드에서 모든 작업 항목을 보고 진행 상황을 확인할 수 있습니다.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = 이제 비밀번호가 안전하게 보호됩니다!
fix-flow-celebration-security-questions-title = 귀하의 보안 질문은 안전하게 보호됩니다!
fix-flow-celebration-leaked-passwords-description-next-security-questions = 이제 유출된 보안 질문을 검토하고 업데이트해 보겠습니다.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = 다음으로, 어떤 데이터가 유출되었는지에 따라 맞춤형 보안 권장 사항을 제공해 드리겠습니다.
fix-flow-celebration-leaked-passwords-description-next-dashboard = 잘했어요! 마지막 단계에 도착했습니다. 대시보드에서 모든 작업 항목을 보고 진행 상황을 확인할 수 있습니다.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = 모든 추천사항을 완료했습니다!
fix-flow-celebration-security-recommendations-description-next-dashboard = 축하합니다! 마지막 단계에 도착했습니다. 대시보드에서 모든 작업 항목을 보고 진행 상황을 확인할 수 있습니다.

# High Risk Data Breaches

high-risk-breach-heading = 해야 할 일은 다음과 같습니다.
high-risk-breach-subheading = 이를 위해서는 민감한 정보에 접근해야 하므로 수동으로 수정해야 합니다.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary = 이는 { $num_breaches }건의 데이터 유출에서 나타났습니다.
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>의 { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = 수정됨으로 표시
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time = 예상 소요 시간: { $estimated_time }분 이상

# Credit Card Breaches

high-risk-breach-credit-card-title = 신용카드 번호가 노출되었습니다.
high-risk-breach-credit-card-description = 신용카드 번호를 얻은 사람은 누구나 승인되지 않은 구매를 할 수 있고 당신이 그에 대해 책임을 져야 할 수도 있습니다. 재정적 피해를 예방하기 위해 지금 행동하세요.
high-risk-breach-credit-card-step-one = 아직 이 카드를 가지고 있다면 카드 발급사에 연락하여 도난 신고를 하세요.
high-risk-breach-credit-card-step-two = 새로운 번호의 새 카드를 요청하세요.
high-risk-breach-credit-card-step-three = 승인되지 않은 요금이 청구되었는지 계정을 확인하세요.

# Bank Account Breaches

high-risk-breach-bank-account-title = 은행 계좌가 노출되었습니다.
high-risk-breach-bank-account-description = 가능한 한 빨리 조치를 취하면 손실을 회복하는 데 도움이 되는 법적 보호를 더 많이 받을 수 있습니다.
high-risk-breach-bank-account-step-one = 계좌 번호가 유출되었음을 즉시 은행에 알리세요.
high-risk-breach-bank-account-step-two = 계좌번호를 변경하세요.
high-risk-breach-bank-account-step-three = 승인되지 않은 요금이 청구되었는지 계정을 확인하세요.

# Social Security Number Breaches

high-risk-breach-social-security-title = 주민등록번호가 노출되었습니다.
high-risk-breach-social-security-description = 사기꾼은 주민등록번호로 새로운 대출을 받거나 신용카드를 개설할 수 있습니다. 재정적 피해를 예방하려면 재빨리 행동하세요.
high-risk-breach-social-security-step-one = <link_to_info>사기 경고를 설정하거나 신용을 동결하여</link_to_info> 자신을 보호하세요.
high-risk-breach-social-security-step-two = <link_to_info>신용 보고서를 확인</link_to_info>하여 인식되지 않은 계좌가 있는지 확인하세요.

# Social Security Number Modal

ssn-modal-title = 사기 경고 및 신용 동결에 관하여

# PIN Breaches


# No high risk breaches found


# Security recommendations


# Phone security recommendation


# Email security recommendation


# IP security recommendation


# Leaked Passwords


# Leaked Security Questions

