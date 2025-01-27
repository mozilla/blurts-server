# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = 고위험 데이터 유출
fix-flow-nav-leaked-passwords = 유출된 비밀번호
fix-flow-nav-security-recommendations = 보안 관련 권장 사항
guided-resolution-flow-exit = 대시보드로 돌아가기
guided-resolution-flow-next-arrow = 다음 단계로 넘어가기
guided-resolution-flow-next-arrow-sub-step = 다음 결과로 가기
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
high-risk-breach-skip = 지금은 건너뛰기
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
ssn-modal-description-fraud-part-one = <b>사기 경고</b>는 사업체가 사용자의 이름으로 새로운 신용을 발급하기 전에 신원을 확인하도록 요구합니다. 무료이고 1년 동안 지속되며 신용 점수에 부정적인 영향을 미치지 않습니다.
ssn-modal-description-fraud-part-two = 설정하려면 신용 평가 기관 세 곳 중 한 곳에 연락하세요. 세 곳 모두에 연락할 필요는 없습니다.
ssn-modal-description-freeze-credit-part-one = <b>신용을 동결</b>하면 누군가가 사용자의 이름으로 새로운 계정을 개설하는 것을 방지할 수 있습니다. 무료이며 신용 점수에 부정적인 영향을 미치지 않지만 새로운 계정을 개설하기 전에 동결을 해제해야 합니다.
ssn-modal-description-freeze-credit-part-two = 신용을 동결하려면 신용 평가 기관인 <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, <transunion_link>TransUnion</transunion_link> 세 곳 모두에 연락하세요.
ssn-modal-learn-more = 사기 경고 및 신용 동결에 관하여 더 알아보기
ssn-modal-ok = 확인

# PIN Breaches

high-risk-breach-pin-title = PIN이 유출되었습니다.
high-risk-breach-pin-description = 가능한 한 빨리 조치를 취하면 손실을 회복하는 데 도움이 되는 법적 보호를 더 많이 받을 수 있습니다.
high-risk-breach-pin-step-one = PIN이 유출되었음을 즉시 은행에 알리세요.
high-risk-breach-pin-step-two = 동일한 PIN을 사용한 모든 곳의 PIN을 변경하세요.
high-risk-breach-pin-step-three = 승인되지 않은 요금이 청구되었는지 계정을 확인하세요.

# No high risk breaches found

high-risk-breach-none-title = 좋은 소식입니다. 아무런 고위험 데이터 유출도 발견되지 않았습니다.
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = 이메일 주소를 기반으로 한 데이터 유출을 감지했지만 { $email_list } 메일에 대한 고위험 데이터 유출은 발견되지 않았습니다.
high-risk-breach-none-sub-description-part-one = 고위험 데이터 유출의 포함 내용:
high-risk-breach-none-sub-description-ssn = 주민 등록 번호
high-risk-breach-none-sub-description-bank-account = 은행 계좌 정보
high-risk-breach-none-sub-description-cc-number = 신용 카드 번호
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = 계속하기

# Security recommendations

security-recommendation-steps-label = 보안 관련 권장 사항
security-recommendation-steps-title = 조언 내용:
security-recommendation-steps-cta-label = 알겠습니다!

# Phone security recommendation

security-recommendation-phone-title = 전화번호를 보호하세요.
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary = 사용자의 전화번호가 { $num_breaches }개의 데이터 유출에서 노출되었습니다.
security-recommendation-phone-description = 안타깝게도 되돌릴 수는 없지만 안전을 위해 취할 수 있는 조치가 있습니다.
security-recommendation-phone-step-one = 스팸 전화가 더 많이 오지 않도록 스팸 번호를 차단하세요.
security-recommendation-phone-step-two = 알 수 없는 사람이 보낸 문자 메시지에 포함된 링크를 클릭하지 마세요. 신뢰할 수 있는 출처인 것 같다면 직접 통화하여 확인하세요.

# Email security recommendation

security-recommendation-email-title = 이메일 주소를 보호하세요.
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary = 사용자의 이메일 주소가 { $num_breaches }개의 데이터 유출에서 노출되었습니다.
security-recommendation-email-description = 안타깝게도 해결할 수는 없지만 사용자를 보호하기 위해 취할 수 있는 조치가 있습니다.
security-recommendation-email-step-one = 알 수 없는 사람이 보낸 이메일에 포함된 링크를 클릭하지 마세요. 신뢰할 수 있는 출처인 것 같다면 직접 통화하여 확인하세요.
security-recommendation-email-step-two = <link_to_info>피싱 사기</link_to_info>를 조심하세요.
security-recommendation-email-step-three = 수상한 이메일은 스팸으로 표시하여 보낸 사람을 차단하세요.
security-recommendation-email-step-four = <link_to_info>{ -brand-relay } 이메일 마스크</link_to_info>를 사용하여 지금부터 이메일을 보호하세요.

# IP security recommendation

security-recommendation-ip-title = VPN을 사용하여 개인 정보를 더 안전하게 보호하세요.
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary = 사용자의 IP 주소가 { $num_breaches }개의 데이터 유출에서 노출되었습니다.
security-recommendation-ip-description = IP 주소는 사용자의 위치와 인터넷 서비스 제공업체를 정확히 파악합니다. 해커가 그 정보를 이용하여 사용자의 위치를 찾거나 사용자의 기기에 연결을 시도할 수 있습니다.
security-recommendation-ip-step-one = <link_to_info>{ -brand-mozilla-vpn }</link_to_info> 등의 VPN을 사용하여 실제 IP 주소를 숨기고 인터넷을 비공개로 사용하세요.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = { $breach_name } 비밀번호가 노출되었습니다.
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = { $breach_date } 발생한 데이터 유출에 포함되었습니다.
leaked-passwords-description = 사기꾼은 사용자의 계정에 접근할 수 있으며 동일한 비밀번호를 사용했는지 확인하기 위해 다른 계정에서 사용을 시도할 가능성이 있습니다. 동일한 비밀번호를 사용한 모든 곳에서 비밀번호를 변경하고 자신을 보호하세요.
leaked-passwords-steps-title = 해야 할 일은 다음과 같습니다.
leaked-passwords-steps-subtitle = 이를 위해서는 계정에 접근해야 하므로 수동으로 수정해야 합니다.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = <link_to_breach_site>{ $breach_name }</link_to_breach_site>에서 <b>{ $emails_affected }</b>의 비밀번호를 변경하세요.
leaked-passwords-step-two = 사용한 모든 곳에서 변경하세요.
leaked-passwords-mark-as-fixed = 수정됨으로 표시
leaked-passwords-skip = 지금은 건너뛰기
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time = 예상 소요 시간: 사이트당 { $estimated_time }분

# Leaked Security Questions

leaked-security-questions-title = 보안 질문이 노출되었습니다.
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = { $breach_date }에 { $breach_name }에서 발생한 데이터 유출에 포함되었습니다.
leaked-security-questions-description = 사기꾼은 보안 질문을 이용해 사용자의 계정 및 동일한 보안 질문을 사용한 다른 사이트에 접근할 수 있습니다. 지금 업데이트하여 계정을 보호하세요.
leaked-security-questions-steps-title = 해야 할 일은 다음과 같습니다.
leaked-security-questions-steps-subtitle = 이를 위해서는 계정에 접근해야 하므로 수동으로 수정해야 합니다.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = <link_to_breach_site>{ $breach_name }</link_to_breach_site>에서 <b>{ $email_affected }</b>의 보안 질문을 업데이트하세요.
leaked-security-questions-step-two = 동일한 보안 질문을 사용한 다른 사이트에서 질문을 업데이트하세요. 계정마다 다른 보안 질문을 사용해야 합니다.
