# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Thêm địa chỉ email khác
close-dialog-alt = Đóng hộp thoại
# $total is the number of emails a user is allowed to add
add-email-your-account-includes = Tài khoản của bạn bao gồm giám sát tối đa { $total } địa chỉ email. Thêm địa chỉ email mới để xem liệu địa chỉ đó có liên quan đến rò rỉ dữ liệu hay không.
add-email-address-input-label = Địa chỉ email
add-email-send-verification-button = Gửi liên kết xác minh
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Liên kết xác minh được gửi tới { $email } để thêm nó vào { -brand-fx-monitor }. Quản lý tất cả địa chỉ email trong <a { $settings-href }>Cài đặt</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Liên kết xác minh đã được gửi tới <b>{ $email }</b> để thêm nó vào { -brand-mozilla-monitor }.
