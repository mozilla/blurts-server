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

# Variables:
#   $email (string) - Email address
settings-email-list-title = Địa chỉ email được giám sát
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = Tài khoản của bạn bao gồm việc giám sát tối đa { $limit } email.
settings-email-verification-callout = Yêu cầu xác minh email
settings-resend-email-verification-link = Gửi lại email xác minh
settings-add-email-button = Thêm địa chỉ email
settings-remove-email-button-label = Xóa
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Dừng giám sát { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = Xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết.

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

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Báo cáo hàng tháng { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Bản cập nhật hàng tháng về số lần lộ dữ liệu mới, những gì đã được sửa và những gì bạn cần chú ý.

## Settings page redesign

settings-tab-label-edit-info = Chỉnh sửa thông tin của bạn
settings-tab-label-notifications = Đặt thông báo
settings-tab-label-manage-account = Quản lý tài khoản
settings-tab-subtitle-manage-account = Quản lý tài khoản { -product-name } của bạn.
settings-tab-notifications-marketing-title = Truyền thông tiếp thị
settings-tab-notifications-marketing-text = Cập nhật định kỳ về { -brand-monitor }, { -brand-mozilla }, và các sản phẩm bảo mật khác của chúng tôi.
settings-tab-notifications-marketing-link-label = Đi đến cài đặt email { -brand-mozilla }
