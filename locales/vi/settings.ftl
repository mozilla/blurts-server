# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Cài đặt
settings-page-title = Cài đặt { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Tùy chọn cảnh báo rò rỉ dữ liệu
settings-alert-preferences-option-one = Gửi thông báo rò rỉ dữ liệu đến địa chỉ email bị ảnh hưởng
settings-alert-preferences-option-two = Gửi tất cả cảnh báo rò rỉ dữ liệu đến địa chỉ email chính

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (chính)
settings-email-list-title = Địa chỉ email được giám sát
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = Tài khoản của bạn bao gồm việc giám sát tối đa { $limit } email.
settings-email-verification-callout = Yêu cầu xác minh email
settings-resend-email-verification-link = Gửi lại email xác minh
settings-add-email-button = Thêm địa chỉ email
settings-delete-email-button = Xóa địa chỉ email
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info = Xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết.

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Hủy thuê bao { -brand-premium }
settings-cancel-premium-subscription-info = Thuê bao của bạn sẽ trở lại tài khoản miễn phí sau khi chu kỳ thanh toán hiện tại kết thúc. Kết quả quét bảo vệ quyền riêng tư của bạn sẽ bị xóa vĩnh viễn và bạn sẽ chỉ được giám sát rò rỉ dữ liệu cho 1 địa chỉ email.
settings-cancel-premium-subscription-link-label = Hủy từ { -brand-fx-account } của bạn

## Deactivate account

settings-deactivate-account-title = Hủy kích hoạt tài khoản
settings-deactivate-account-info = Bạn có thể hủy kích hoạt { -product-short-name } bằng cách xóa { -brand-fx-account } của mình.
settings-fxa-link-label = Đi đến cài đặt { -brand-firefox }

## Add email dialog

settings-email-dialog-title = Thêm địa chỉ email khác
settings-add-email-text = Thêm địa chỉ email mới để xem liệu địa chỉ đó có liên quan đến rò rỉ dữ liệu hay không.
settings-email-input-label = Địa chỉ email
settings-send-email-verification-button = Gửi liên kết xác minh

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Chúng tôi rất tiếc khi thấy bạn rời đi. <br /> Bạn có thể nói với chúng tôi tại sao không?
settings-unsubscribe-dialog-info = Kinh nghiệm của bạn là quan trọng đối với chúng tôi. Chúng tôi đọc mọi phản hồi và xem xét nó.
settings-unsubscribe-dialog-message-placeholder = Những gì có thể đã được xử lý tốt hơn?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Xin lưu ý, tất cả các dịch vụ { -brand-monitor-premium } của bạn sẽ <a { $faq_href }>bị xóa vĩnh viễn</a> sau khi chu kỳ thanh toán hiện tại của bạn kết thúc.
settings-unsubscribe-dialog-continue = Tiếp tục hủy
settings-unsubscribe-dialog-cancel = Nghĩ lại rồi, đưa tôi quay lại
