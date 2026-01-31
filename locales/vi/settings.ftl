# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Cài đặt { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Tuỳ chỉnh email
settings-alert-email-preferences-subtitle = Hãy cho chúng tôi biết bạn muốn nhận email nào.
settings-alert-preferences-allow-breach-alerts-title = Cảnh báo rò rỉ tức thời
settings-alert-preferences-allow-breach-alerts-subtitle = Những cảnh báo này được gửi ngay lập tức khi phát hiện rò rỉ dữ liệu
settings-alert-preferences-option-one = Gửi thông báo rò rỉ dữ liệu đến địa chỉ email bị ảnh hưởng
settings-alert-preferences-option-two = Gửi tất cả cảnh báo rò rỉ dữ liệu đến địa chỉ email chính

## Monitored email addresses

settings-email-verification-callout = Yêu cầu xác minh email
settings-remove-email-button-label = Xóa
settings-email-addresses-header = Địa chỉ email
settings-email-addresses-description = { -brand-monitor } Sẽ thông báo cho bạn nếu những email này xuất hiện trong các vụ rò rỉ thông tin đã biết.
settings-email-addresses-add-email-button = Thêm địa chỉ email
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Tối đa { $limit }
settings-email-addresses-add-email-resend-button-label = Gửi lại liên kết xác minh
input-error-alt = Lỗi

## Email address dialog

settings-email-addresses-initial-dialog-header = Thêm một địa chỉ email
settings-email-addresses-initial-dialog-description = Chúng tôi sẽ gửi cho bạn một liên kết xác minh để bạn xác nhận rằng bạn muốn đưa nó vào lần quét { -brand-monitor } tiếp theo.
settings-email-addresses-initial-dialog-add-email-input-label = Nhập địa chỉ email
settings-email-addresses-initial-dialog-add-email-button-label = Gửi liên kết xác minh
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Liên kết xác minh đã được gửi đến <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Mở liên kết để thêm nó vào tài khoản này cho các lần quét { -brand-monitor } trong tương lai.
settings-email-addresses-confirmation-dialog-close-button = Đóng

## Delete Monitor account

settings-delete-monitor-free-account-title = Xoá tài khoản { -brand-monitor }
settings-delete-monitor-free-account-description = Thao tác này sẽ xóa vĩnh viễn tài khoản { -brand-monitor } của bạn và tắt tất cả thông báo.
settings-delete-monitor-free-account-cta-label = Xóa tài khoản
settings-delete-monitor-free-account-dialog-title = Tài khoản { -brand-monitor } của bạn sẽ bị xoá vĩnh viễn
settings-delete-monitor-free-account-dialog-lead-v2 = Tất cả thông tin tài khoản { -brand-monitor } của bạn sẽ bị xóa và chúng tôi sẽ không còn theo dõi các rò rỉ dữ liệu của bạn. Điều này sẽ không xóa tài khoản { -brand-mozilla-account } của bạn
settings-delete-monitor-free-account-dialog-cta-label = Xóa tài khoản
settings-delete-monitor-free-account-dialog-cancel-button-label = Nghĩ lại rồi, đưa tôi quay lại
settings-delete-monitor-account-confirmation-toast-label-2 = Tài khoản { -brand-monitor } của bạn đã bị xóa.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Bỏ qua

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Cập nhật thông tin quét
settings-tab-label-edit-info = Chỉnh sửa thông tin của bạn
settings-tab-label-notifications = Đặt thông báo
settings-tab-label-manage-account = Quản lý tài khoản
settings-tab-subtitle-manage-account = Quản lý tài khoản { -product-name } của bạn.
settings-tab-notifications-marketing-title = Truyền thông tiếp thị
settings-tab-notifications-marketing-text = Cập nhật định kỳ về { -brand-monitor }, { -brand-mozilla }, và các sản phẩm bảo mật khác của chúng tôi.
settings-tab-notifications-marketing-link-label = Đi đến cài đặt email { -brand-mozilla }
