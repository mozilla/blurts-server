# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Địa chỉ email này không được đăng ký với { -product-name }.
user-add-invalid-email = Email không hợp lệ
user-add-too-many-emails = Bạn đã thêm tối đa số lượng địa chỉ email để theo dõi.
user-add-duplicate-email = Email này đã được thêm vào { -product-name } trước đó.
user-add-verification-email-just-sent = Bạn đã yêu cầu email xác minh khác quá nhanh. Vui lòng thử lại sau.
user-add-unknown-error = Đã xảy ra lỗi khi thêm địa chỉ email khác. Vui lòng thử lại sau.
user-delete-unknown-error = Đã xảy ra lỗi khi xóa địa chỉ email. Vui lòng thử lại sau.
user-verify-token-error = Token xác minh được yêu cầu.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dữ liệu bị xâm phạm:
# Link title
more-about-this-breach = Thông tin thêm về rò rỉ này
what-data = Dữ liệu nào đã bị xâm phạm:
delayed-reporting-headline = Tại sao phải mất rất lâu để báo cáo rò rỉ này?
delayed-reporting-copy =
    Đôi khi có thể mất vài tháng hoặc vài năm để thông tin đăng nhập trong một
    rò rỉ dữ liệu để xuất hiện trên dark web. Dữ liệu rò rỉ sẽ được thêm vào cơ sở
    dữ liệu của chúng tôi ngay khi chúng được phát hiện và xác minh.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Tổng quan
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Vào lúc { $breachDate }, { $breachTitle } đã bị rò rỉ. Khi vụ rò rỉ được phát hiện và xác minh, nó đã được thêm vào cơ sở dữ liệu của chúng tôi trên { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Rò rỉ dữ liệu đã được thêm:
# Section headline
rec-section-headline = Nên làm gì với vụ rò rỉ này
rec-section-subhead = Chúng tôi khuyên bạn nên thực hiện các bước này để giữ thông tin cá nhân của bạn an toàn và bảo vệ danh tính kỹ thuật số của bạn.
# Section headline
rec-section-headline-no-pw = Phải làm gì để bảo vệ thông tin cá nhân của bạn
rec-section-subhead-no-pw = Mặc dù mật khẩu không lộ ra trong rò rỉ dữ liệu này, vẫn có những bước bạn có thể thực hiện để bảo vệ thông tin cá nhân của mình tốt hơn.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Tài khoản Mozilla
open-in-new-tab-alt = Mở liên kết trong thẻ mới

## Search Engine Optimization

meta-desc-2 = Tìm hiểu xem bạn có phải là một phần của rò rỉ dữ liệu với { -brand-fx-monitor } hay không. Chúng tôi sẽ giúp bạn hiểu những việc cần làm tiếp theo và liên tục theo dõi mọi rò rỉ mới.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Đăng nhập
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu chính
main-nav-button-collapse-label = Thu gọn menu
main-nav-button-collapse-tooltip = Thu gọn menu
main-nav-button-expand-label = Mở rộng menu
main-nav-button-expand-tooltip = Mở rộng menu
main-nav-label = Điều hướng
main-nav-link-home-label = Trang chủ
main-nav-link-dashboard-label = Bảng điều khiển
main-nav-link-settings-label = Cài đặt
main-nav-link-faq-label = Câu hỏi thường gặp
main-nav-link-faq-tooltip = Câu hỏi thường gặp

## User menu

user-menu-trigger-label = Mở menu người dùng
user-menu-trigger-tooltip = Hồ sơ
user-menu-manage-fxa-label = Quản lý { -brand-mozilla-account } của bạn
user-menu-settings-label = Cài đặt
user-menu-settings-tooltip = Cấu hình { -brand-mozilla-monitor }
user-menu-help-label = Trợ giúp và hỗ trợ
user-menu-help-tooltip = Nhận trợ giúp sử dụng { -brand-mozilla-monitor }
user-menu-signout-label = Đăng xuất
user-menu-signout-tooltip = Đăng xuất khỏi { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Điều khoản dịch vụ
privacy-notice = Thông báo về quyền riêng tư
github = { -brand-github }
footer-nav-recent-breaches = Rò rỉ dữ liệu gần đây
footer-external-link-faq-label = Câu hỏi thường gặp
footer-external-link-faq-tooltip = Câu hỏi thường gặp

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Không tìm thấy trang
error-page-error-404-copy = Chúng tôi xin lỗi, trang bạn đang tìm kiếm không còn tồn tại.
error-page-error-404-cta-button = Quay lại

## Breach overview page

all-breaches-headline-3 = Cơ sở dữ liệu về rò rỉ dữ liệu
all-breaches-lead = Chúng tôi theo dõi tất cả các rò rỉ dữ liệu đã biết để tìm hiểu xem thông tin cá nhân của bạn có bị xâm phạm hay không. Dưới đây là danh sách đầy đủ tất cả các rò rỉ đã được báo cáo từ năm 2007.
search-breaches = Tìm kiếm rò rỉ dữ liệu
# the kind of user data exposed to hackers in data breach.
exposed-data = Dữ liệu bị lộ:

## Public breach detail page

find-out-if-2 = Tìm hiểu xem bạn nằm trong vụ rò rỉ này không
find-out-if-description = Chúng tôi sẽ giúp bạn nhanh chóng xem liệu địa chỉ email của bạn có bị lộ trong rò rỉ này hay không và hiểu những việc cần làm tiếp theo.
breach-detail-cta-signup = Kiểm tra rò rỉ
loading-accessibility = Đang tải
