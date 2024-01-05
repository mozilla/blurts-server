# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } 보고서
report-date = 작성 일시:
email-address = 이메일 주소:

# A link to legal information about mozilla products.
legal = 법적 고지

# Unsubscribe link in email.
email-unsub-link = 구독 취소

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    { -product-name }에 등록하셨기에 이 이메일을 보내드립니다.
    알림: 같은 종류의 메일을 더이상 받지 않길 원하시나요? { $unsubLink }. 이 메일은 자동으로 발송됩니다. 지원이 필요하시다면, { $faqLink }에 방문하세요.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    { -product-name } 알림에 등록하셨기에 이 메일을 보내드립니다.
    이 메일은 자동으로 발송됩니다. 지원이 필요하시다면, { $faqLink }에 방문하세요.

# Button text
verify-email-cta = 이메일 인증

# Button text
see-all-breaches = 모든 유출 사례 보기

# Headline of verification email
email-link-expires = 이 링크는 24시간 후에 만료됩니다
email-verify-blurb = 이메일을 인증하여 { -product-name }에 추가하고 유출 알림을 받으세요.

# Email headline
email-found-breaches-hl = 다음은 과거 데이터 유출 건에 대한 요약입니다

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = { $userEmail }의 데이터 유출 요약

# Email headline
email-no-breaches-hl = { $userEmail }의 알려진 데이터 유출 사례는 0건입니다

# Email headline
email-alert-hl = { $userEmail }이 새로 유출된 것으로 보입니다

##

# Subject line of email
email-subject-found-breaches = { -product-name }가 아래 유출 사례에서 일치하는 정보를 찾았습니다

# Subject line of email
email-subject-no-breaches = { -product-name }가 알려진 유출 사례에서 일치하는 정보를 찾지 못했습니다

# Subject line of email
email-subject-verify = { -product-name }의 이메일 인증을 완료하세요

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = { $fxmLink }에 대해서 알아보기

email-sensitive-disclaimer =
    고유의 민감한 특성으로 인해, 유출된 이메일은 공개적으로 찾아볼 수 없습니다.
    이 알림은 유출된 이메일의 인증된 소유자이시기에 발송되었습니다.

fxm-warns-you-no-breaches =
    { -product-name }는 개인정보와 관련된 데이터 유출에 대해 알려드립니다.
    그러나, 아직 유출 사례가 없습니다. 새 유출 사례에서 일치하는 이메일 주소를 발견하게 된다면 알려드리겠습니다.

fxm-warns-you-found-breaches =
    { -product-name }는 개인정보와 관련된 데이터 유출에 대해 알려드립니다. 
    또한 새 유출 사례에서 일치하는 이메일 주소가 발견될 경우 알림을 받기로 설정하셨습니다.

email-breach-alert-blurb =
    { -product-name }는 개인정보와 관련된 데이터 유출에 대해 알려드립니다. 
    방금 다른 회사의 데이터 유출 사례에 대한 정보를 받았습니다.

# Section headline
monitor-another-email = 다른 이메일에 대한 유출 여부를 받아보시겠습니까?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email

## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

