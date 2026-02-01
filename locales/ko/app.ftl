# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = 데이터 유출 여부 보기
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = 모니터
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = 프리미엄
-brand-monitor-premium = 모니터 프리미엄
-brand-mozilla-foundation = Mozilla 재단
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = 모니터 플러스
-brand-solo-ai = Solo AI

##

error-not-subscribed = 이 이메일 주소는 { -product-name }에 가입되어 있지 않습니다.
user-add-invalid-email = 잘못된 이메일
user-add-too-many-emails = 최대 이메일 주소 수를 모니터링하고 있습니다.
user-add-duplicate-email = 이 이메일은 이미 { -product-name }에 추가되었습니다.
user-add-verification-email-just-sent = 이렇게 빨리 또 다른 확인 이메일을 보낼 수 없습니다. 나중에 다시 시도 해주십시오.
user-add-unknown-error = 다른 이메일 주소를 추가하는 중에 문제가 발생했습니다. 나중에 다시 시도 해주십시오.
user-delete-unknown-error = 이메일 주소를 삭제하는 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.
user-verify-token-error = 확인 토큰이 필요합니다.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 유출 데이터 :
# Link title
more-about-this-breach = 상세 정보
sensitive-sites = { -product-name }는 민감한 사이트를 어떻게 관리합니까?
sensitive-sites-copy =
    { -product-name }는 이메일 주소가 확인된 후에만
    아러한 유형의 위반과 관련된 계정을 표시합니다. 
    즉, 이메일 계정에 접근 가능한 사람만
    걔인 정보가 침해되었는지 여부를 확인할 수 있습니다.
what-data = 유출된 데이터 :
delayed-reporting-headline = 유출 정보 보고에 오랜 시간이 걸린 이유는 무엇인가요?
delayed-reporting-copy =
    데이터 유출로 인해 노출된 정보들이 다크 웹에 나타나는 데 
    수 개월 또는 수 년이 걸릴 수 있습니다. 유출을 확인하는 대로 
    즉시 데이터베이스에 추가됩니다.

##

what-is-a-website-breach = 웹 사이트 유출이란 무엇입니까?
website-breach-blurb = 웹 사이트 데이터 침해 사고는 사이버 범죄자가 온라인 계정에서 개인 정보를 도용, 복사 또는 노출 할 때 발생합니다. 일반적으로 해커가 웹 사이트의 보안에서 취약한 부분을 찾은 결과입니다. 실수로 계정 정보가 유출 된 경우에도 침해가 발생할 수 있습니다.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 개요
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }에 { $breachTitle }이 위반되었읍니다. 위반이 발견되고 확인되면 { $addedDate }에 우리의 데이터베이스에 추가되었습니다.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 추가된 유출:
# Section headline
rec-section-headline = 이 유출에 대한 조치
rec-section-subhead = 개인 정보를 안전하게 유지하고 디지털 신원을 보호할려면 다음 단계를 수행하는 것이 좋습니다.
# Section headline
rec-section-headline-no-pw = 개인 정보를 보호할수 있는 방법
rec-section-subhead-no-pw = 이 유출에 암호가 노출되지는 않았지만 개인 정보를 더 잘 보호할 수 있는 방법이 있습니다.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla 계정
open-in-new-tab-alt = 새 탭에서 링크 열기

## Search Engine Optimization

meta-desc-2 = { -brand-fx-monitor }를 통해 데이터 유출에 연관되어 있는지 알아보세요. 다음에 수행할 작업을 안내해 드리고, 새로운 유출이 있는지 지속적으로 모니터링하겠습니다.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = 로그인
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = 메인 메뉴
main-nav-button-collapse-label = 메뉴 닫기
main-nav-button-collapse-tooltip = 메뉴 닫기
main-nav-button-expand-label = 메뉴 펼치기
main-nav-button-expand-tooltip = 메뉴 펼치기
main-nav-label = 탐색
main-nav-link-home-label = 홈
main-nav-link-dashboard-label = 대시보드
main-nav-link-settings-label = 설정
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = 자주 묻는 질문

## User menu

user-menu-trigger-label = 사용자 메뉴 열기
user-menu-trigger-tooltip = 프로필
user-menu-manage-fxa-label = { -brand-mozilla-account } 관리
user-menu-settings-label = 설정
user-menu-settings-tooltip = { -brand-mozilla-monitor } 설정
user-menu-help-label = 도움말 및 지원
user-menu-help-tooltip = { -brand-mozilla-monitor } 사용에 대한 도움 받기
user-menu-signout-label = 로그아웃
user-menu-signout-tooltip = { -brand-mozilla-monitor }에서 로그아웃

## Footer

mozilla = { -brand-mozilla }
terms-of-service = 이용 약관
privacy-notice = 개인정보 보호정책
github = { -brand-github }
footer-nav-recent-breaches = 최근 데이터 침해
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = 자주 묻는 질문

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } 페이지를 찾을 수 없음
error-page-error-404-copy = 죄송합니다. 찾으시는 페이지가 더 이상 존재하지 않습니다.
error-page-error-404-cta-button = 뒤로 가기

## Breach overview page

all-breaches-headline-3 = 데이터 유출 데이터베이스
all-breaches-lead = 저희는 사용자의 개인 정보가 유출되었는지 확인하기 위해 알려진 데이터 침해를 모두 모니터링합니다. 2007년 이후 보고된 모든 침해의 전체 목록은 다음과 같습니다.
search-breaches = 유출 내역 검색하기
# the kind of user data exposed to hackers in data breach.
exposed-data = 노출된 데이터:

## Public breach detail page

find-out-if-2 = 이번 위반에 포함되었는지 알아보세요.
find-out-if-description = 이 유출에서 이메일 주소가 노출되었는지 빠르게 확인하고 다음 작업을 수행할 수 있도록 도와드리겠습니다.
breach-detail-cta-signup = 유출 여부 확인하기
loading-accessibility = 로딩 중
