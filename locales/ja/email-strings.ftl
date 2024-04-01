# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

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

# Button text
verify-email-cta = メールアドレスを確認

# Headline of verification email
email-link-expires = このリンクは 24 時間で有効期限が切れます

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } が、これらのデータ侵害であなたの情報を発見しました。

# Subject line of email
email-subject-no-breaches = { -product-name } は既知のデータ侵害を検出しませんでした

# Subject line of email
email-subject-verify = { -product-name } のメールを確認してください

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

