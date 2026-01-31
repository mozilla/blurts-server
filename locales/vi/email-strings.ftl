# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Đăng nhập

## Email footers

email-footer-support-heading = Có câu hỏi về { -brand-mozilla-monitor }?
email-footer-support-content = Truy cập <support-link>trung tâm trợ giúp</support-link> của chúng tôi để được hỗ trợ
email-footer-trigger-transactional = Bạn nhận được email này với tư cách là đăng ký của { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Bạn nhận được email tự động này với tư cách là người đăng ký của { -brand-mozilla-monitor }. Nếu bạn nhận được email này do nhầm lẫn, bạn không cần thực hiện bất kỳ hành động nào. Để biết thêm thông tin, vui lòng truy cập <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = Bạn nhận được email tự động một lần này vì bạn đã đăng ký { -brand-monitor-plus }. Bạn sẽ không nhận được thêm bất kỳ email nào tương tự như thế này nữa. Để biết thêm thông tin, vui lòng truy cập <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Hãy truy cập Trung tâm hỗ trợ của chúng tôi để được trợ giúp:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Dữ liệu bị rò rỉ được cung cấp bởi { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Rò rỉ dữ liệu được cung cấp bởi <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Riêng tư
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
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

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dữ liệu về những vụ rò rỉ dữ liệu được cung cấp bởi <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Bảo vệ dữ liệu của bạn, bắt đầu ngay bây giờ
email-verify-simply-click = Chỉ cần nhấp vào liên kết bên dưới để hoàn tất việc xác minh tài khoản của bạn.

## Breach report

email-breach-summary = Đây là tóm tắt về rò rỉ dữ liệu của bạn
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Kết quả tìm kiếm cho tài khoản { $email-address } của bạn đã phát hiện ra rằng email của bạn có thể đã bị lộ. Chúng tôi khuyên bạn nên hành động ngay bây giờ để giải quyết rò rỉ này.
email-dashboard-cta = Đi đến bảng điều khiển

## Breach alert email

email-breach-alert-all-subject = Đã phát hiện rò rỉ dữ liệu mới
email-breach-alert-all-preview = Chúng tôi sẽ hướng dẫn bạn các bước để giải quyết vấn đề này.
email-breach-alert-all-hero-heading = Bạn vừa nằm trong một vụ rò rỉ dữ liệu mới
email-breach-alert-all-hero-subheading = Đừng lo lắng, chúng tôi có thể giúp bạn giải quyết vấn đề này
email-breach-alert-all-lead = { -brand-mozilla-monitor } đã phát hiện rò rỉ dữ liệu sau bao gồm thông tin cá nhân của bạn:
email-breach-alert-all-source-title = Nguồn rò rỉ:
email-breach-alert-all-data-points-title = Dữ liệu bị lộ của bạn:
email-breach-alert-all-next-steps-lead = Chúng tôi sẽ hướng dẫn bạn từng bước về cách giải quyết rò rỉ dữ liệu này.
email-breach-alert-all-next-steps-cta-label = Hãy bắt đầu
email-breach-alert-all-next-steps-button-dashboard = Đi đến bảng điều khiển
