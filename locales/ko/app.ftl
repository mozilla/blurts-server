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

GitHub-link-title = GitHub
error-scan-page-token = 단기간에 너무 많은 이메일 주소를 검색했습니다. 보안 상의 이유로 일시적으로 새로운 검색을 차단했습니다. 나중에 다시 시도 할 수 있습니다.
error-could-not-add-email = 데이터베이스에 이메일 주소를 추가 할 수 없습니다.
error-not-subscribed = 이 이메일 주소는 { -product-name }에 가입되어 있지 않습니다.
error-hibp-throttled = { -brand-HIBP }에 대한 연결이 너무 많습니다.
error-hibp-connect = { -brand-HIBP }에 연결하는 동안 오류가 발생했습니다.
error-hibp-load-breaches = 유출 내용을 가져올 수 없습니다.
error-must-be-signed-in = { -brand-fxa }에 로그인되어 있어야 합니다.
error-to-finish-verifying = { -product-name }에 대한이 이메일 확인을 완료하려면 기본 계정 이메일로 로그인해야 합니다.
home-title = { -product-name }
home-not-found = 페이지를 찿을수 없습니다.
oauth-invalid-session = 유효하지 않은 세션
scan-title = { -product-name } : 조사 결과
user-add-invalid-email = 잘못된 이메일
user-add-too-many-emails = 최대 이메일 주소 수를 모니터링하고 있습니다.
user-add-email-verify-subject = { -product-name } 구독을 확인하세요.
user-add-duplicate-email = 이 이메일은 이미 { -product-name }에 추가되었습니다.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = { $preferencesLink }를 방문하여 { $userEmail }의 상태를 확인하세요.
user-add-verification-email-just-sent = 이렇게 빨리 또 다른 확인 이메일을 보낼 수 없습니다. 나중에 다시 시도 해주십시오.
user-add-unknown-error = 다른 이메일 주소를 추가하는 중에 문제가 발생했습니다. 나중에 다시 시도 해주십시오.
error-headline = 오류
user-verify-token-error = 확인 토큰이 필요합니다.
user-verify-email-report-subject = { -product-name } 보고서
user-unsubscribe-token-error = 구독을 취소하려면 토큰이 필요합니다.
user-unsubscribe-token-email-error = 구독을 취소하려면 토큰과 emailHash가 필요합니다.
user-unsubscribe-title = { -product-name } : 구독 취소
pwt-section-headline = 더 강력한 비밀번호 = 더 나은 보호
landing-headline = 해커로부터 안전 할 수 있는 권리는 여기서 시작됩니다.
scan-placeholder = 이메일 주소 입력
scan-submit = 이메일 검색
scan-error = 유효한 이메일이어야합니다.
download-firefox-banner-button = { -brand-name } 다운로드
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = 보냈습니다!
sign-up = 가입하기
form-signup-error = 유효한 이메일 필수
# breach-date = the calendar date a particular data theft occurred.
breach-date = 유출 날짜 :
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 유출된 계정 :
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 유출 데이터 :
unsub-headline = { -product-name-nowrap } 구독 취소
unsub-blurb = 그러면 { -product-name-nowrap } 목록에서 이메일이 제거되고 새로운 유출 사고가 발표 될 때, 더 이상 알림을 받지 않습니다.
unsub-button = 구독 취소
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = { $hibp-link }에서 제공한 침해 데이터
share-twitter = 대부분의 사람들은 약 100여개의 온라인 계정을 가지고 있습니다. 데이터 유출에 노출 된 적이 있습니까? 한번 찾아보세요.
share-facebook-headline = 여러분의 데이터가 유출되었는지 알아보세요.
share-facebook-blurb = 여러분의 온라인 계정이 데이터 유출로 노출되었습니까?
og-site-description = { -product-name }의 데이터 유출에 포함되어 있는지 알아보세요. 향후 데이이 유출 사고가 나는 웹사이트가 있다면, 알림에 가입한 경우 포함 여부를 바로 고지해 드립니다.
show-all = 모두 보기
fxa-scan-another-email = 다른 이메일을 확인 하시겠습니까?
sign-out = 로그아웃
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } 관리
have-an-account = 계정이 있으십니까?
fxa-pwt-summary-2 =
    짧은 한 단어로 된 비밀번호는 해커가 추측하기 쉽습니다.
    최소 두 단어와 문자, 숫자 및 특수 문자의 조합을 사용하시기 바랍니다.
fxa-pwt-summary-4 =
    1Password, LastPass, Dashlane 및 Bitwarden과 같은 비밀번호 관리 프로그램은
    웹 사이트 비밀번호를 자동으로 만들고 입력해줍니다. 강력한 비밀번호를 만드는데도 도움이 됩니다.
fxa-pwt-summary-6 =
    데이터 침해가 증가하고 있습니다. 여러분의 개인 정보가 새로운 데이터 유출로 나타나는 경우,
    { -product-name }이 알림을 보내주므로 바로 조치를 취하고 계정을 보호 할 수 있습니다.
fxa-what-to-do-blurb-1 =
    로그인 할 수 없는 경우 웹 사이트에 연락하여 업데이트 방법을 문의하시기 바랍니다.
    가입하지 않은 계정이 있습니까? 여러분의 데이터가 판매되었을 수 있습니다.
    혹은 가입 후 잊어 버린 계정이거나 서비스명/회사명이 달라졌을 수도 있습니다.
fxa-what-to-do-subhead-2 = 노출 된 비밀번호 사용을 중지하고 사용했던 모든 사이트에서 변경하세요.
fxa-wtd-blurb-2 =
    해커는 동일한 비밀번호와 이메일을 사용하여 다른 계정에 접근하려고 할 수 있습니다.
    이메일 및 개인 정보를 저장하는 기타 웹 사이트 특히, 온라인 결제 계좌, 인터넷 뱅킹 
    사이트에서 서로 다른 고유한 비밀번호를 만드세요
fxa-what-to-do-blurb-3 =
    대부분의 침해는 이메일과 비밀번호만 유출되지만 일부는 민감한 재무 정보를 포함할 수 있습니다.
    은행 계좌 또는 신용 카드 번호가 노출 된 경우 사기 가능성에 대해 은행에 알려야 합니다.
    알 수 없는 결제 청구 내역을 모니터링해야 합니다.
fxa-what-to-do-subhead-4 = 모든 비밀번호를 기억하고 안전하게 유지하는 데 도움을 받으세요.
fxa-what-to-do-blurb-4 =
    1Password, LastPass, Dashlane 및 Bitwarden과 같은 비밀번호 관리 프로그램은
    웹 사이트 비밀번호를 자동으로 만들고 입력합니다. 강력한 비밀번호를 만드는데도 도움이 됩니다.
# Alerts is a noun
sign-up-for-alerts = 알림 가입 신청
# Link title
frequently-asked-questions = 자주 묻는 질문
about-firefox-monitor = { -product-name } 소개
# Link title
preferences = 환경 설정
# Link title
home = 첫화면
# Link title
security-tips = 보안 정보
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } 열기
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = 최근 유출 내역
# Link title
more-about-this-breach = 상세 정보
take-control = 개인 데이터에 대한 통제권을 되찾으세요.
cant-stop-hackers = 해킹을 막을 수는 없습니다. 하지만 해킹을 어렵게 할 수는 있습니다.
read-more-tips = 보안 정보 더 살펴보기
how-hackers-work = 해킹 방식 이해
monitor-your-online-accounts = { -brand-fxa } 침해 모니터링 가입하기
stay-alert = 신규 데이터 유출 사고 알림
if-your-info = 여러분의 개인 정보가 신규 데이터 유출로 노출되는 경우, 미리 경고를 보내드립니다.
search-all-emails = 모든 이메일 주소에서 침해를 검색 및 새로운 위협에 대한 경고를 받습니다.
monitor-several-emails = 여러 이메일 주소 모니터링
take-action = 계정 보호를 위한 조치
keep-your-data-safe = 해커로부터 데이터를 안전하게 보호하기 위해 해야 할 일을 알아보세요.
website-breach = 웹 사이트 유출
sensitive-breach = 민감한 웹 사이트 유출
data-aggregator-breach = 데이터 수집 유출
unverified-breach = 확인되지 않은 유출
spam-list-breach = 스팸 목록 유출
website-breach-plural = 웹 사이트 유출
sensitive-breach-plural = 민감한 유출
data-aggregator-breach-plural = 데이터 수집기 유출
unverified-breach-plural = 확인되지 않은 유출
spam-list-breach-plural = 스팸 목록 유출
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
about-fxm-headline = { -product-name } 정보
about-fxm-blurb =
    { -product-name }은 온라인 계정의 데이터 유출과 관련된 경우 경고합니다. 
    데이터 유출이 있었는지 확인하고 새로운 유출에 대한 알림을 받아 계정을 
    보호하기 위한 조치를 취할 수 있습니다.
    { -product-name }은 { -brand-Mozilla }에서 제공합니다.
fxm-warns-you =
    { -product-name }은 이메일 주소가 온라인 데이터 유출로 노출 된 경우 경고합니다.
    여러분의 정보가 노출되었는지 확인하고, 온라인 계정을 더 잘 보호하는 방법을 배우고, 
    이메일 주소가 다시 유출이 되면 알림을 받으시기 바랍니다.
# How Firefox Monitor works
how-fxm-works = { -product-name } 작동 방식
how-fxm-1-headline = 기본 검색 수행
how-fxm-1-blurb =
    2007년 부터 공개된 데이터 침해에서 여러분의 이메일 주소를 검색하세요.
    기본 검색 기능은 대부분의 데이터 침해를 살펴보지만 민감한 개인 정보가 
    직접 포함된 것은 아닙니다.
how-fxm-2-headline = 유출 모니터링 등록하기
how-fxm-2-blurb =
    지속적인 유출에 대해 모니터링하려면 { -brand-fxa }를 만드세요. 
    이메일을 확인하면 민감한 위반을 포함하여 과거 위반 사항에 대한 
    전체 보고서를 받게 됩니다.
how-fxm-3-headline = 브라우저에서 알림 받기
how-fxm-3-blurb =
    { -brand-name }을 사용하는 경우 침해 된 사이트를 방문하면 알림을 받게 됩니다. 
    해당 침해의 일부였는지 그리고 이에 대해 무엇을 할 수 있는지 즉시 확인하세요.
wtd-after-website = 웹 사이트 유출 후 해야 할 일 :
wtd-after-data-agg = 데이터 수집 유출 후 수행할 작업 :
what-is-data-agg = 데이터 수집기는 무엇인가요?
what-is-data-agg-blurb =
    데이터 수집기 또는 브로커는 공개 기록에서 정보를 수집하는 회사에서 구입합니다. 
    이 데이터를 종합하여 마케팅 목적으로 다른 회사에 판매합니다. 이러한 침해의 피해자는 
    금융 사기를 경험할 가능성은 적지만 해커가 이를 사용하여 신분을 가장할 수 있습니다.
protect-your-privacy = 온라인 개인 정보 보호
no-pw-to-change = 웹 사이트 유출에도 변경해야 할 비밀번호가 없습니다.
avoid-personal-info = 비밀번호에 개인 정보 사용하지 않기
avoid-personal-info-blurb = 온라인에서 생일, 주소, 가족 이름을 쉽게 찾을 수 있습니다. 이 단어를 비밀번호에서 제외하세요.

## What to do after data breach tips

change-pw = 비밀번호 변경
change-pw-site = 이 사이트의 비밀번호 변경
even-for-old = 이전 계정의 경우에도 비밀번호를 업데이트하는 것이 중요합니다.
make-new-pw-unique = 새 비밀번호를 독특하게 만들기
strength-of-your-pw = 비밀번호 강도는 온라인 보안에 직접적인 영향을 줍니다.
create-strong-passwords = 강력한 비밀번호를 만드는 방법
stop-reusing-pw = 동일한 비밀번호 재사용 중지
create-unique-pw = 고유한 비밀번호를 만들어 비밀번호 관리자와 같이 안전한 곳에 저장하세요.
five-myths = 비밀번호 관리자에 대한 5가지 오해
create-a-fxa = 유출 내역에 대한 보고서를 작성하고, 알림을 받으려면 { -brand-fxa }를 만드세요.
feat-security-tips = 계정 보호를 위한 보안 팁
feat-sensitive = 민감한 유출 내역에 대한 고급 검색
feat-enroll-multiple = 침해 모니터링을 위해 여러 이메일 등록하기
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] { $breachCount }개의  유출 내역이 있습니다.
    }
check-for-breaches = 유출 여부 확인하기
find-out-what-hackers-know = 해커가 여러분에 대해 얼마나 알고 있는지 살펴보세요. 한발 앞서는 방법을 배울 수 있습니다.
get-email-alerts = 보안 방법 : 유출이 일어난 것인 확인될 때 이메일 알림을 받습니다.
search-for-your-email = 2007년부터 외부에 공개된 전체 데이터 침해 내역에서 여러분의 이메일 주소를 검색하세요.
back-to-top = 맨 위로
comm-opt-0 = 아래 이메일 주소 중 하나가 유출이 된 것이 확인되면 알림을 보내주세요.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = 모든 유출 내역을 { $primaryEmail }로 보냅니다.
stop-monitoring-this = 이메일 모니터링을 중지합니다.
resend-verification = 확인 이메일 재전송
add-new-email = 새 이메일 주소 추가
send-verification = 확인 링크 보내기
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = 유출 내역 요약
show-breaches-for-this-email = 이 이메일에 대한 모든 유출 내역을 표시합니다.
link-change-primary = 기본 이메일 주소 변경
remove-fxm = { -product-name } 제거
remove-fxm-blurb =
    { -product-name } 알림을 끕니다. { -brand-fxa }는 활성 상태로 유지되며 
    다른 계정 관련 정보를 받을 수 있습니다.
# Button title
manage-email-addresses = 이메일 주소 관리
# Link title
latest-breach-link = 유출 여부 확인 하기

## Variables:
##   $userName (String) - Username

welcome-back = { $userName }님, 다시 오신 것을 환영합니다!
welcome-user = { $userName }님, 환영합니다!

##

breach-alert-subject = { -product-name }가 새로 유출된 자료에서 일치하는 이메일을 찾았습니다
your-info-was-discovered-headline = 새로 유출된 자료에서 일치하는 정보를 발견하였습니다.
your-info-was-discovered-blurb =
    데이터 유출 자료에서 일치하는 이메일이 발견되면
    { -product-name } 알림을 받기로 하셨습니다. 이번 유출에 대해서 알려진 사항은 다음과 같습니다.
what-to-do-after-breach = 데이터 유출 후 해야 할 일
ba-next-step-1 = 강력하고 고유한 비빌번호로 변경하세요.
ba-next-step-blurb-1 =
    강력한 비밀번호는 대문자와 소문자, 특수 문자 및 숫자의 조합을 사용합니다. 
    주소, 생일, 가족 이름과 같은 개인 정보는 포함되지 않는 것이 좋습니다.
ba-next-step-2 = 유출된 비밀번호는 다시 사용하지 마세요.
ba-next-step-blurb-2 =
    사이버 범죄자는 다크 웹에서 비밀번호를 찾아 다른 계정에 로그인하는 데 사용할 수 있습니다. 
    계정을 보호하는 가장 좋은 방법은 각 계정에 대해 고유한 암호를 사용하는 것입니다.
ba-next-step-3 = 더 나은 비밀번호를 만들고 안전하게 유지하는 데 도움을 받으세요.
ba-next-step-blurb-3 =
    비밀번호 관리자를 사용하여 강력하고 고유 한 비밀번호를 만듭니다. 
    모든 로그인 정보를 안전하게 저장하므로 모든 기기에서 접근할 수 있습니다.
faq1 = 현재 회사와 웹 사이트에 가입한 적이 없습니다. 왜 제 데이터가 유출된건가요?
faq2 = 왜 유출 사실을 고지해 주는데 이렇게 오래 걸렸습니까?
faq3 = { -product-name }에서 보낸 합법적인 이메일인지 어떻게 알 수 있나요?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] 신규 { $breachCount } 개의 유출 발견
    }
sign-up-headline-1 = { -brand-fxa }로 지속적인 알림을 받으세요.
account-not-required = { -brand-fxa }에는 { -brand-name } 브라우저가 필요하지 않습니다. { -brand-Mozilla } 서비스에 대한 정보를 받을 수 있습니다.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = 여러분의 정보가 { $breachName } 데이터 유출로 노출 되었습니까?
fb-not-comp = 본 이메일은 { $breachName }에 유출되지 않았습니다.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] 그러나, { $breachCount }개의 다른 유출 내역이 있습니다.
    }
fb-comp-only = 본 이메일은 { $breachName } 유출에 포함되어 있습니다.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] 본 이메일은 { $breachName }을 포함하여 { $breachCount }개의 알려진 데이터 유출이 있습니다.
    }

##

no-other-breaches-found = 기본 검색에서 발견된 다른 유출은 없습니다.
no-results-blurb = 죄송합니다. 해당 유출은 데이터베이스에 없습니다.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>이 유출에는 이메일이 포함되지 않았지만
    전화번호는 여전히 노출 되었을 수 있습니다.</span> Facebook 유출에
    포함된 일부 계정의 전화번호와 기타 정보가 유출되었지만 
    이메일 주소는 아닙니다. Facebook에 가입한 적이 있다면
    — 지금 사용하지 않더라도 — 보호를 위한 이 절차를
    따르기를 권장합니다.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span><a>Facebook 프로필</a>에서 정보를 “나만 보기” 또는 비공개로 설정하세요.</span>
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>SIM 스와핑을 방지하기 위해 <a>이동 통신사 계정</a>에서 비밀번호, PIN 및 기타 보안 자격 증명을 변경하세요</span>.
facebook-breach-what-to-do-2-copy =
    SIM 스와핑 또는 SIM 잭킹은 해커가 전화번호,
     생년월일, 기타 데이터를 사용하여 개인 핸드폰 번호를 탈취하여 이메일, 소셜미디어,
     심지어 금융계정까지 침입하는 것 입니다.
facebook-breach-what-to-do-3 = Facebook 유출 페이지에서 모든 권장 사항 보기
# "Appears in-page as: Showing: All Breaches"
currently-showing = 보기:

## Updated error messages

error-bot-headline = 일시적 검색 중단
error-bot-blurb =
    단기간에 여러 개의 이메일 주소를 검색했기 때문에 봇이 아닐까 걱정됩니다. 
    현재로서는 새로운 검색 활동이 차단되었습니다. 
    나중에 다시 시도 할 수 있습니다.
error-csrf-headline = 세션 시간 초과
error-csrf-blurb = 웹 브라우저의 뒤로 버튼을 선택하여 페이지를 새로 고침 한 다음 다시 시도하세요.
error-invalid-unsub = { -product-name } 알림 수신 거부 방법
error-invalid-unsub-blurb =
    { -product-name }에서 보낸 이메일 중 하나를 수신 거부해야 합니다. 
    받은 편지함에서 { -brand-team-email }의 메시지를 확인하세요. 
    이메일 하단에서 수신 거부 링크를 선택합니다.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 모니터링 중인 이메일 주소
    }
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
# Button
see-additional-breaches = 추가 유출 사항 보기
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] 현재 이메일 주소는 { $breachCount }건의 유출이 있었습니다.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = 결과 : { $userEmail }
other-monitored-emails = 모니터링 중인 기타 이메일
email-verification-required = 이메일 확인 필요
fxa-primary-email = { -brand-fxa } 이메일 - 기본
what-is-a-website-breach = 웹 사이트 유출이란 무엇입니까?
website-breach-blurb = 웹 사이트 데이터 침해 사고는 사이버 범죄자가 온라인 계정에서 개인 정보를 도용, 복사 또는 노출 할 때 발생합니다. 일반적으로 해커가 웹 사이트의 보안에서 취약한 부분을 찾은 결과입니다. 실수로 계정 정보가 유출 된 경우에도 침해가 발생할 수 있습니다.
security-tips-headline = 해커로부터 자신을 보호하기 위한 보안 팁
steps-to-protect = 온라인 신원을 보호하기 위해 취해야 할 조치
take-further-steps = 신원 보호를 위한 추가 조치
alert-about-new-breaches = 새로운 침해 사고 알림 받기
see-if-youve-been-part = 온라인 데이터 유출에 포함되었는지 확인하세요.
get-ongoing-breach-monitoring = 여러 이메일 주소에 대한 지속적인 침해 모니터링을 받으세요.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 찾아보기
new-unsub-error = { -product-name }에서 보낸 이메일 중 하나를 수신 거부해야 합니다.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] 그러나, { $breachCount }개의 다른 유출 내역이 있습니다.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 다음을 포함한 추가 정보:
# Title
email-addresses-title = 이메일 주소
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 개요
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate }에 { $breachTitle }이 위반되었읍니다. 위반이 발견되고 확인되면 { $addedDate }에 우리의 데이터베이스에 추가되었습니다.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } 설정
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = { $userEmail } 주소로 로그인
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = 카테고리 별 필터링
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = 메뉴
to-affected-email = 영향을 받은 이메일 주소로 위반 경고를 보냅니다.
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = 개인 정보를 보호하는 방법이 있습니다. { -brand-name }와 함께 하세요.
# Link title
learn-more-link = 자세히 보기
email-sent = 이메일을 보냈습니다!
# Form title
want-to-add = 다를 이메일을 추가 하겠습니까?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = { $userEmail }으로 보낸 링크를 확인해서 { -product-name }에 추가하세요.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = 이메일이 성공적으로 확인되었습니다!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = 데이터 유출에 { $email }이 나오면 알려드리겠습니다.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = 위반 모니터링에 가입한 이메일들을 보고 관리할려면 { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = 로그인

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = { $preferencesLink }의 모든 이메일 주소를 관리하세요.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = 유출 경고 알림
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 추가된 유출:
how-hackers-work-desc = 사이버 범죄자가 가장 아끼는 암호를 보호해 주세요.
what-to-do-after-breach-desc = 계정을 잠궈서 개인 정보를 잘못된 사람으로서부터 보호하세요.
create-strong-passwords-desc = 암호를 강하게, 안전하게, 그리고 추측하기 어렵게 만들어 주세요.
steps-to-protect-desc = 가장 일반적인 위협을 이해하고 주의해야 할 사항을 파악합니다.
five-myths-desc = 해커의 일을 쉽게 만드는 나쁜 암호 습관을 어떻게 피할수 있는지 알아보세요.
take-further-steps-desc = 재정적 손실을 방지하기 위해 신원 도용의 위험을 완화하는 방법을 알아보세요.
# This message appears after a user has successfully updated their communication settings.
changes-saved = 변경 내용이 저장되었습니다!
# Section headline
rec-section-headline = 이 유출에 대한 조치
rec-section-subhead = 개인 정보를 안전하게 유지하고 디지털 신원을 보호할려면 다음 단계를 수행하는 것이 좋습니다.
# Section headline
rec-section-headline-no-pw = 개인 정보를 보호할수 있는 방법
rec-section-subhead-no-pw = 이 유출에 암호가 노출되지는 않았지만 개인 정보를 더 잘 보호할 수 있는 방법이 있습니다.
# Button
see-additional-recs = 추가 권장 사항보기

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = 이 침해에 { $affectedEmail }이 포함되었습니다. <a>다음</a>

##

marking-this-subhead = 이 유출을 해결됨으로 표시
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body = <span>이 침해 사항을 해결하기 위해 취한 조치를 취했으면 </ span>, 해결 된 것으로 표시 할 수 있습니다. 언제든지 대시 보드에서 위반에 대한 세부 정보에 액세스 할 수 있습니다.
mark-as-resolve-button = 해결됨으로 표시
marked-as-resolved-label = 해결됨으로 표시됨
undo-button = 실행 취소
confirmation-1-subhead = 좋습니다! 당신은 방금 첫 번째 침해를 해결하였습니다.
confirmation-1-body = 추진력을 유지하세요. 할 일이 더 남았는지 보기 위해 대시보드를 확인하세요.
confirmation-2-subhead = 받아라, 해커들!
confirmation-2-body = 온라인 계정을 보호하기 위해 중요한 조치를 취하고 있습니다.
confirmation-3-subhead = 또 하나가 해결되었습니다. 잘 했어요!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = 당신의 새 비밀번호가 독특하고 강력하며 추측하기 어렵습니까? <a> 찾아보기</a>
generic-confirmation-subhead = 이 침해는 해결 된 것으로 표시됨
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
       *[other] 남아있는 모든 침해 사항을 보시려면 대시보드로 이동하세요.
    }
return-to-breach-details-link = 침해 정보로 돌아가기
go-to-dashboard-link = 대시보드로 가기
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% 완료
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] { $numResolvedBreaches } 해결됨
    }
progress-intro-subhead = { -product-name }의 새로운 기능: 침해 해결 표시
progress-intro-message =
    유출에 대한 세부사항을 검토하고 개인 정보를 보호가기 위한 조치를 취한 후, 
    유출을 해결 된 것으로 표시할 수 있습니다.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } 중 { $numTotalBreaches } 침해가 해결됨으로 표시됨
    }
progress-complete = 모든 참해가 해결됨으로 표시됨

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>시작이 좋습니다!</span> 어떤 조치를 취해야하는지 알아보기 위해 나머지 위반 사항을
    확인하십시오.
progress-message-4 = <span>거의 다 됐습니다!</ span> 결승선이 바로 앞입니다.

##

resolve-this-breach-link = 위반사항 해결
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = 해결됨으로 표시:
hide-resolved-button = 해결 된 항목 숨기기
show-resolved-button = 해결된 항목 표시
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
       *[other] 비밀번호가 해결되지 않은 위반 사항에  노출됨
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
       *[other] 해결된 것으로 표시된 알려진 데이터 유출
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = 신규
mobile-promo-headline = 휴대전화 및 태블릿에 { -brand-name } 가져오기
mobile-promo-cta = Android와 iOS 에 { -brand-name } 받기
promo-lockwise-headline = 모든 곳에 비밀번호를 가져가세요
lockwise-promo-body = 모든 기기에서 로그인을 추적하세요. 컴퓨터, 휴대전화 또는 태블릿에서 안전하게 접속하세요.
promo-lockwise-cta = { -brand-lockwise } 받기
fpn-promo-headline = 웹 사이트 및 추적기에서 위치를 숨김
promo-fpn-cta = { -brand-fpn } 받기
monitor-promo-headline = 새로운 데이터 유출 찾기
monitor-promo-body = 다음에 알려진 유출에서 사용자의 개인정보가 노출되면 알림을 받습니다.
ecosystem-promo-headline = 사생활 보호를 최우선으로 하는 제품과 함께 온라인 생활을 보호하세요.
ecosystem-promo-body = { -brand-name }의 모든 제품은 개인 정보 약속을 존중합니다. 적게 가집니다. 안전하게 보관합니다. 비밀은 없습니다.
promo-ecosystem-cta = 모든 제품 보기
steps-to-resolve-headline = 이 유출을 해결하려면
vpn-promo-headline = 이제 온라인에서 안전을 강화할 때입니다.
vpn-promo-copy = { -brand-Mozilla }의 가상 사설망은 해커와 스파이로부터 인터넷 연결을 보호합니다.
vpn-promo-cta = { -brand-mozilla-vpn } 받기
vpn-promo-headline-new = 1년 구독으로 50% 할인

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = 현재 위치: { $ip-location }
vpn-banner-protect-yourself-with-vpn = { -brand-mozilla-vpn }와 함께 <em>자신을 보호하세요</em>.
vpn-banner-subtitle-2 = 3단계로 위치를 보호하고 안전하게 탐색하세요.
vpn-banner-status-protected = 현재 상태: <em>보호됨 ✓</em>
vpn-banner-status-not-protected = 현재 상태: <em>보호되지 않음 ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP 주소: { $ip-address }
vpn-banner-step-1 = { -brand-mozilla-vpn } 구독하기
vpn-banner-step-2 = VPN 위치 선택
vpn-banner-step-3 = VPN을 활성화하고 안전하게 탐색하세요
vpn-banner-cta = { -brand-mozilla-vpn } 받기
# button to expand panel
vpn-banner-cta-expand = 펼치기
# button to close panel
vpn-banner-cta-close = 닫기

## Relay and VPN educational/ad units

ad-unit-relay-cta = { -brand-relay }에 대해 더 알아보기
ad-unit-vpn-cta = { -brand-mozilla-vpn }에 대해 더 알아보기
# ad 1 heading
ad-unit-1-how-do-you-keep = 이메일 주소를 어떻게 비밀로 유지하시나요?
# ad 2 heading
ad-unit-2-do-you-worry = 공용 Wi-Fi의 안전이 걱정되나요?
# ad 3 heading
ad-unit-3-stay-in-the-game = 우리와 계속 함께하세요!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } 사용 시 게임을 하거나 영화를 스트리밍하는 동안 안정적인 연결을 안전하게 유지할 수 있습니다.
# ad 3 list item 1
ad-unit-3-prevent-throttling = 스로틀링 방지
# ad 4 heading
ad-unit-4-shopping-with = 이메일 마스크하고 쇼핑하기
ad-unit-4-want-to-buy = 온라인으로 무언가를 구매하고 싶은데 해당 매장을 잘 모르거나 완전히 신뢰하지 못하나요?
ad-unit-4-shop-online = 온라인 쇼핑을 할 때마다 이메일 마스크를 사용하세요. 실제 이메일로 확인 메시지를 받은 후 나중에 언제든지 쉽게 마스킹을 끌 수 있습니다.
# ad 5 heading
ad-unit-5-on-the-go = { -brand-relay }와 함께하세요
ad-unit-5-instantly-make = 어디를 가든지 즉각적으로 맞춤형 이메일 마스크를 만들어보세요!
ad-unit-5-privately-sign-in = 좋아하는 커피숍이나 공용 Wi-Fi에 비공개로 로그인하려면 이메일 마스크를 사용하세요.
# ad 5 subheading 2
ad-unit-5-email-receipts = 이메일 영수증 받기
ad-unit-5-share-custom-email = 실제 이메일을 공유하지 않고 매장의 쇼핑 영수증 용 이메일 마스크를 사용하세요.
# ad 5 subheading 3
ad-unit-5-use-on-phone = 핸드폰에서 사용
ad-unit-5-no-matter-where = 어디에 있든 원하는 작업을 위해 몇 초 안에 맞춤형 이메일 마스크를 만드세요.
# ad 6 heading
ad-unit-6-worry-free = 걱정 없는 가입
ad-unit-6-want-to-start = 받은 편지함에 스팸 메일이 넘쳐나지 않으면서 구독을 새로 시작하거나 초대에 응답하거나 저렴한 프로모션 코드를 받으시겠습니까?
ad-unit-6-before-you-complete = 가입을 완료하기 전에 실제 이메일 대신 이메일 마스크를 사용하여 정보를 보호하고 받은편지함을 관리하세요.

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

site-nav-breaches-link = 데이터 유출 해결
site-nav-settings-link = 설정
site-nav-help-link = 도움말 및 지원
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = 다른 보완 도구를 사용해보세요:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = 메인 메뉴
main-nav-button-expand-tooltip = 메뉴 펼치기
main-nav-label = 탐색
main-nav-link-home-label = 홈
main-nav-link-settings-label = 설정
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = 자주 묻는 질문

## User menu

# Obsolete
menu-button-title = 사용자 메뉴
# Obsolete
menu-button-alt = 사용자 메뉴 열기
# Obsolete
menu-list-accessible-label = 계정 메뉴
# Obsolete
menu-item-settings = 설정
# Obsolete
menu-item-help = 도움말 및 지원
# Obsolete
menu-item-logout = 로그아웃
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
error-page-error-other-copy = 다시 시도하거나 나중에 다시 방문해 주세요.

## Breach overview page

all-breaches-headline-2 = { -brand-fx-monitor }가 감지한 모든 위반
search-breaches = 유출 내역 검색하기
# the kind of user data exposed to hackers in data breach.
exposed-data = 노출된 데이터:

## Public breach detail page

find-out-if-2 = 이번 위반에 포함되었는지 알아보세요.
breach-detail-cta-signup = 유출 여부 확인하기

## Floating banner

floating-banner-link-label = 가입하기
floating-banner-dismiss-button-label = 아니요

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = 예
banner-monitor-rebrand-dismiss-button-tooltip = 닫기
