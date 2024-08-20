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
legal = Thông tin pháp lý
# Unsubscribe link in email.
email-unsub-link = Hủy đăng ký
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Bạn nhận được email này vì bạn đã đăng ký thông báo { -product-name }.
    Không còn muốn những email này? { $unsubLink }. Đây là một email tự động. Để được hỗ trợ, hãy truy cập { $faqLink }.
# Button text
verify-email-cta = Xác minh email
# Headline of verification email
email-link-expires = Liên kết này hết hạn sau 24 giờ

##

# Subject line of email
email-subject-found-breaches = { -product-name } đã tìm thấy thông tin của bạn trong những rò rỉ dữ liệu này
# Subject line of email
email-subject-no-breaches = { -product-name } không tìm thấy rò rỉ dữ liệu đã biết
# Subject line of email
email-subject-verify = Xác minh email của bạn cho { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } cảnh báo bạn về các rò rỉ dữ liệu liên quan đến thông tin cá nhân của bạn.
    Cho đến nay, không có rò rỉ được tìm thấy. Chúng tôi sẽ gửi cho bạn một cảnh báo nếu địa chỉ email của bạn xuất hiện trong rò rỉ dữ liệu mới.
email-breach-alert-blurb =
    { -product-name } cảnh báo bạn về các rò rỉ dữ liệu liên quan đến thông tin cá nhân của bạn.
    Chúng tôi vừa nhận được thông tin chi tiết về một công ty khác rò rỉ dữ liệu.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dữ liệu về những vụ rò rỉ dữ liệu được cung cấp bởi <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Bảo vệ dữ liệu của bạn, bắt đầu ngay bây giờ
email-verify-subhead = Xác minh email của bạn để bắt đầu bảo vệ dữ liệu của bạn sau vụ rò rỉ.
email-verify-simply-click = Chỉ cần nhấp vào liên kết bên dưới để hoàn tất việc xác minh tài khoản của bạn.

## Breach report

email-breach-summary = Đây là tóm tắt về rò rỉ dữ liệu của bạn
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Kết quả tìm kiếm cho tài khoản { $email-address } của bạn đã phát hiện ra rằng email của bạn có thể đã bị lộ. Chúng tôi khuyên bạn nên hành động ngay bây giờ để giải quyết rò rỉ này.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Kết quả tìm kiếm cho tài khoản <b>{ $email-address }</b> của bạn đã phát hiện ra rằng email của bạn có thể đã bị lộ. Chúng tôi khuyên bạn nên hành động ngay bây giờ để giải quyết rò rỉ này.
email-dashboard-cta = Đi đến bảng điều khiển

## Breach alert

email-spotted-new-breach = Chúng tôi đã phát hiện một lỗ hổng dữ liệu mới
