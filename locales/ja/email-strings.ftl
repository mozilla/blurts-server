# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email footers

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = メールアドレスを確認
# Headline of verification email
email-link-expires = このリンクは 24 時間で有効期限が切れます

##

# Subject line of email
email-subject-found-breaches = { -product-name } が、これらのデータ侵害であなたの情報を発見しました。
# Subject line of email
email-subject-no-breaches = { -product-name } は既知のデータ侵害を検出しませんでした
# Subject line of email
email-subject-verify = { -product-name } のメールを確認してください

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = 侵害データ提供元: <a { $hibp-link-attr }>{ -brand-HIBP }</a>
