# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = 데이터 유출 여부 보기
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

error-could-not-add-email = 데이터베이스에 이메일 주소를 추가 할 수 없습니다.
error-not-subscribed = 이 이메일 주소는 { -product-name }에 가입되어 있지 않습니다.
error-hibp-throttled = { -brand-HIBP }에 대한 연결이 너무 많습니다.
error-hibp-connect = { -brand-HIBP }에 연결하는 동안 오류가 발생했습니다.

user-add-invalid-email = 잘못된 이메일
user-add-too-many-emails = 최대 이메일 주소 수를 모니터링하고 있습니다.
user-add-duplicate-email = 이 이메일은 이미 { -product-name }에 추가되었습니다.
user-add-verification-email-just-sent = 이렇게 빨리 또 다른 확인 이메일을 보낼 수 없습니다. 나중에 다시 시도 해주십시오.
user-add-unknown-error = 다른 이메일 주소를 추가하는 중에 문제가 발생했습니다. 나중에 다시 시도 해주십시오.

user-verify-token-error = 확인 토큰이 필요합니다.

user-unsubscribe-token-error = 구독을 취소하려면 토큰이 필요합니다.
user-unsubscribe-token-email-error = 구독을 취소하려면 토큰과 emailHash가 필요합니다.

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 유출 데이터 :

# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = { $hibp-link }에서 제공한 침해 데이터

show-all = 모두 보기

sign-out = 로그아웃

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } 관리

# Link title
frequently-asked-questions = 자주 묻는 질문

# Link title
preferences = 환경 설정

# Link title
home = 첫화면

# Link title
security-tips = 보안 정보

# Link title
more-about-this-breach = 상세 정보

monitor-several-emails = 여러 이메일 주소 모니터링

website-breach = 웹 사이트 유출
sensitive-breach = 민감한 웹 사이트 유출
data-aggregator-breach = 데이터 수집 유출

what-data = 유출된 데이터 :

sensitive-sites = { -product-name }은 민감한 사이트를 어떻게 관리합니까?
sensitive-sites-copy =
    { -product-name }은 이메일 주소가 확인된 후에만
    이러한 유형의 위반과 관련된 계정을 표시합니다. 
    즉, 여러분의 이메일 계정에 접근 가능한 사람만이 
    개인 정보가 침해되었는지 여부를 확인할 수 있습니다.

delayed-reporting-headline = 유출 정보 보고에 오랜 시간이 걸린 이유는 무엇인가요?
delayed-reporting-copy =
    데이터 유출로 인해 노출된 정보들이 다크 웹에 나타나는 데 
    수 개월 또는 수 년이 걸릴 수 있습니다. 유출을 확인하는 대로 
    즉시 데이터베이스에 추가됩니다.

fxm-warns-you =
    { -product-name }은 이메일 주소가 온라인 데이터 유출로 노출 된 경우 경고합니다.
    여러분의 정보가 노출되었는지 확인하고, 온라인 계정을 더 잘 보호하는 방법을 배우고, 
    이메일 주소가 다시 유출이 되면 알림을 받으시기 바랍니다.

what-is-data-agg = 데이터 수집기는 무엇인가요?
what-is-data-agg-blurb =
    데이터 수집기 또는 브로커는 공개 기록에서 정보를 수집하는 회사에서 구입합니다. 
    이 데이터를 종합하여 마케팅 목적으로 다른 회사에 판매합니다. 이러한 침해의 피해자는 
    금융 사기를 경험할 가능성은 적지만 해커가 이를 사용하여 신분을 가장할 수 있습니다.

avoid-personal-info = 비밀번호에 개인 정보 사용하지 않기

## What to do after data breach tips

send-verification = 확인 링크 보내기

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = 유출 내역 요약

## Variables:
##   $userName (String) - Username

##

breach-alert-subject = { -product-name }가 새로 유출된 자료에서 일치하는 이메일을 찾았습니다

## Variables:
##   $breachName (String) - Number of the breach

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] 모든 유출에 노출된 비밀번호
    }

# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 개인 정보가 노출된 알려진 데이터 유출 사고
    }

what-is-a-website-breach = 웹 사이트 유출이란 무엇입니까?
website-breach-blurb = 웹 사이트 데이터 침해 사고는 사이버 범죄자가 온라인 계정에서 개인 정보를 도용, 복사 또는 노출 할 때 발생합니다. 일반적으로 해커가 웹 사이트의 보안에서 취약한 부분을 찾은 결과입니다. 실수로 계정 정보가 유출 된 경우에도 침해가 발생할 수 있습니다.

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 개요

# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }에 { $breachTitle }이 위반되었읍니다. 위반이 발견되고 확인되면 { $addedDate }에 우리의 데이터베이스에 추가되었습니다.

# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 메뉴

# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = { $userEmail }으로 보낸 링크를 확인해서 { -product-name }에 추가하세요.

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

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

##

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

# A status indicator that appears in the top right corner of new breach cards
new-breach = 신규

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

## Relay and VPN educational/ad units

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

##

##

##

##

## Updated error messages

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla 계정

open-in-new-tab-alt = 새 탭에서 링크 열기

## Search Engine Optimization


## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = 로그인

## Site navigation

mobile-menu-label = 메인 메뉴

main-nav-button-expand-tooltip = 메뉴 펼치기
main-nav-label = 탐색
main-nav-link-home-label = 홈
main-nav-link-settings-label = 설정
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = 자주 묻는 질문

## User menu

user-menu-trigger-label = 사용자 메뉴 열기
user-menu-trigger-tooltip = 프로필
user-menu-settings-label = 설정
user-menu-help-label = 도움말 및 지원
user-menu-signout-label = 로그아웃
user-menu-signout-tooltip = { -brand-mozilla-monitor }에서 로그아웃

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = 이용 약관
privacy-notice = 개인정보 보호정책
github = { -brand-github }
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = 자주 묻는 질문

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } 페이지를 찾을 수 없음
error-page-error-404-copy = 죄송합니다. 찾으시는 페이지가 더 이상 존재하지 않습니다.
error-page-error-404-cta-button = 뒤로 가기
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } 문제가 발생했습니다.

## Breach overview page

all-breaches-headline-2 = { -brand-fx-monitor }가 감지한 모든 위반
search-breaches = 유출 내역 검색하기

# the kind of user data exposed to hackers in data breach.
exposed-data = 노출된 데이터:

## Public breach detail page

find-out-if-2 = 이번 위반에 포함되었는지 알아보세요.

breach-detail-cta-signup = 유출 여부 확인하기

## Floating banner

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = 예
banner-monitor-rebrand-dismiss-button-tooltip = 닫기

