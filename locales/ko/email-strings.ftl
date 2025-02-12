# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = 로그인

## Email footers

email-footer-support-heading = { -brand-mozilla-monitor }에 관한 질문이 있으신가요?
email-footer-support-content = 도움을 받으시려면 <support-link>지원 센터</support-link>를 방문하세요.
email-footer-trigger-transactional = { -brand-mozilla-monitor } 구독자로서 이 메일을 수신하고 계십니다.
email-footer-source-hibp = <hibp-link>{ -brand-HIBP }</hibp-link>에서 제공된 유출 데이터
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = 개인 정보
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = 법적 고지
# Button text
verify-email-cta = 이메일 인증
# Headline of verification email
email-link-expires = 이 링크는 24시간 후에 만료됩니다

##

# Subject line of email
email-subject-found-breaches = { -product-name }가 아래 유출 사례에서 일치하는 정보를 찾았습니다
# Subject line of email
email-subject-no-breaches = { -product-name }가 알려진 유출 사례에서 일치하는 정보를 찾지 못했습니다
# Subject line of email
email-subject-verify = { -product-name }의 이메일 인증을 완료하세요
fxm-warns-you-no-breaches =
    { -product-name }는 개인정보와 관련된 데이터 유출에 대해 알려드립니다.
    그러나, 아직 유출 사례가 없습니다. 새 유출 사례에서 일치하는 이메일 주소를 발견하게 된다면 알려드리겠습니다.
email-breach-alert-blurb =
    { -product-name }는 개인정보와 관련된 데이터 유출에 대해 알려드립니다. 
    방금 다른 회사의 데이터 유출 사례에 대한 정보를 받았습니다.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = <a { $hibp-link-attr }>{ -brand-HIBP }</a>에서 제공한 유출 데이터

## Verification email

email-verify-heading = 지금부터 데이터를 보호하세요
email-verify-subhead = 유출 후 데이터 보호를 시작하려면 이메일을 인증하세요.
email-verify-simply-click = 아래 링크를 클릭하시면 계정 인증이 완료됩니다.

## Breach report

email-breach-summary = 데이터 유출 요약은 다음과 같습니다.
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = { $email-address } 계정에 대한 검색 결과에서 이메일이 유출되었을 수 있음이 감지되었습니다. 이 유출 사항을 해결하려면 지금 조치를 취하세요.
email-dashboard-cta = 대시보드로 가기

## Breach alert email

email-breach-alert-all-subject = 새로운 데이터 유출 감지됨
email-breach-alert-all-preview = 문제 해결을 위한 단계를 안내해 드리겠습니다.
email-breach-alert-all-hero-heading = 사용자의 정보가 새로운 데이터 유출 사건에 포함되었습니다.
email-breach-alert-all-hero-subheading = 걱정하지 마세요. 저희가 유출을 해결할 수 있도록 도와드리겠습니다.
email-breach-alert-all-lead = { -brand-mozilla-monitor }가 사용자의 개인 정보를 포함한 다음의 데이터 유출을 발견했습니다.
email-breach-alert-all-source-title = 유출 출처:
email-breach-alert-all-data-points-title = 유출된 데이터:
email-breach-alert-all-next-steps-lead = 이번 데이터 유출을 해결하는 방법에 대해 단계별로 안내해 드리겠습니다.
email-breach-alert-all-next-steps-cta-label = 시작합시다
email-breach-alert-all-next-steps-button-dashboard = 대시보드로 가기
