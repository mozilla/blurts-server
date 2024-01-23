# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } レポート
report-date = レポート日:
email-address = メールアドレス:

# A link to legal information about mozilla products.
legal = 法的通知

# Unsubscribe link in email.
email-unsub-link = 登録解除

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    このアラートメールは、{ -product-name } に登録されている方に届きます。
    これらのメールはもう必要ありませんか？ { $unsubLink }。これは自動化されたメールです。サポートについては、{ $faqLink } にアクセスしてください。

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    このアラートメールは、{ -product-name } に登録されている方に届きます。
    これは自動化されたメールです。サポートについては、{ $faqLink } にアクセスしてください。

# Button text
verify-email-cta = メールアドレスを確認

# Button text
see-all-breaches = すべてのデータ侵害を見る

# Headline of verification email
email-link-expires = このリンクは 24 時間で有効期限が切れます
email-verify-blurb = メールを確認して { -product-name } に追加し、データ侵害アラートに登録してください。

# Email headline
email-found-breaches-hl = 過去のデータ侵害の概要は次のとおりです

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = { $userEmail } についての侵害の概要

# Email headline
email-no-breaches-hl = { $userEmail } に既知のデータ侵害はありませんでした。

# Email headline
email-alert-hl = { $userEmail } に新しいデータ侵害がありました

##

# Subject line of email
email-subject-found-breaches = { -product-name } が、これらのデータ侵害であなたの情報を発見しました。

# Subject line of email
email-subject-no-breaches = { -product-name } は既知のデータ侵害を検出しませんでした

# Subject line of email
email-subject-verify = { -product-name } のメールを確認してください

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = { $fxmLink } についての詳細

## 2022 email template. HTML tags should not be translated, e.g. `<a>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email


## Breach report


## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

