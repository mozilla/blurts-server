# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading = <nr>{ $nr }</nr> <label>rò rỉ</label>
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>đã giải quyết</label>
exposure-chart-legend-heading-type = Vụ rò rỉ
exposure-chart-legend-heading-nr = Số
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Biểu đồ này hiển thị số lần thông tin của bạn bị lộ.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Biểu đồ này hiển thị tổng số dữ liệu bị lộ đã được giải quyết ({ $total_fixed_exposures_num } trên tổng số { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Chưa bao gồm địa chỉ nhà, thành viên gia đình và nhiều thông tin khác.
exposure-chart-returning-user-upgrade-prompt-cta = Bắt đầu quét miễn phí
exposure-chart-scan-in-progress-prompt = <b>Đang quét:</b> chưa bao gồm địa chỉ, thành viên gia đình và nhiều thông tin khác.
modal-active-number-of-exposures-title = Về số vụ rò rỉ của bạn
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all = Biểu đồ này bao gồm tổng số lần chúng tôi phát hiện từng loại dữ liệu bị lộ trong tất cả các vụ rò rỉ dữ liệu trong tối đa { $limit } địa chỉ email mà bạn hiện đang giám sát.
modal-active-number-of-exposures-part-two = Ví dụ, nếu bạn có 10 lần rò rỉ số điện thoại của mình, điều đó có thể có nghĩa là một số điện thoại bị rò rỉ trên 10 trang web khác nhau hoặc có thể có nghĩa là 2 số điện thoại khác nhau, mỗi số bị rò rỉ trên 5 trang web khác nhau.
modal-active-number-of-exposures-part-three-all = Khi chúng đã được giải quyết, chúng sẽ được thêm vào tổng số vụ rò rỉ đã giải quyết của bạn trên trang Đã giải quyết.
modal-fixed-number-of-exposures-title = Về số dữ liệu bị lộ đã giải quyết của bạn
modal-fixed-number-of-exposures-all = Biểu đồ này bao gồm tổng số vụ rò rỉ dữ liệu đã giải quyết cho tất cả các địa chỉ email mà bạn hiện đang theo dõi. Sau khi số dữ liệu bị lộ được đánh dấu là đã giải quyết, chúng sẽ được thêm vào tổng số tại đây.
modal-cta-ok = OK
modal-cta-got-it = Đã hiểu
open-modal-alt = Mở modal
close-modal-alt = Đóng modal
progress-card-heres-what-we-fixed-headline-all = Đây là những gì bạn đã giải quyết
progress-card-manually-fixed-headline = Đã giải quyết thủ công
dashboard-tab-label-action-needed = Cần hành động
dashboard-tab-label-fixed = Đã giải quyết
dashboard-exposures-all-fixed-label = Tất cả đã được giải quyết ở đây!
dashboard-exposures-area-headline = Xem tất cả các trang web nơi thông tin của bạn bị lộ
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = Chúng tôi đã tìm thấy { $exposures_unresolved_num } dữ liệu của bạn bị lộ.
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 = Nó xuất hiện trong { $data_breach_unresolved_num } vụ dữ liệu bị rò rỉ.
dashboard-fixed-area-headline-all = Xem tất cả vụ rò rỉ đã được giải quyết
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Bộ lọc
dashboard-exposures-filter-company = Công ty
dashboard-exposures-filter-date-found = Ngày tìm thấy
dashboard-exposures-filter-date-found-last-seven-days = 7 ngày qua
dashboard-exposures-filter-date-found-last-thirty-days = 30 ngày qua
dashboard-exposures-filter-date-found-last-year = Năm trước
dashboard-exposures-filter-status = Trạng thái
popover-open-filter-settings-alt = Chọn bộ lọc
dashboard-exposures-filter-show-all = Hiện tất cả
dashboard-exposures-filter-show-results = Hiện kết quả
dashboard-exposures-filter-reset = Đặt lại

## Top banner on the dashboard

dashboard-top-banner-section-label = Trang tổng quan tóm tắt
dashboard-top-banner-your-data-is-protected-title = Dữ liệu của bạn được bảo vệ
dashboard-top-banner-your-data-is-protected-cta = Xem những gì đã được giải quyết
dashboard-top-banner-protect-your-data-title = Hãy bảo vệ dữ liệu của bạn
dashboard-top-banner-protect-your-data-cta = Hãy giải quyết nó
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = Chúng tôi đã tìm thấy { $exposures_unresolved_num } vụ rò rỉ dữ liệu của bạn.
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 = Nó xuất hiện xuyên suốt { $data_breach_unresolved_num } vụ rò rỉ. Chúng tôi sẽ hướng dẫn bạn từng bước cách giải quyết nó.
dashboard-top-banner-no-exposures-found-title = Không tìm thấy vụ rò rỉ nào
dashboard-top-banner-non-us-no-exposures-found-description = Tin tốt! Chúng tôi đã tìm kiếm tất cả các vụ rò rì dữ liệu đã biết và không tìm thấy vụ rò rỉ nào. Chúng tôi sẽ tiếp tục theo dõi địa chỉ email của bạn và sẽ thông báo cho bạn nếu xảy ra vụ mới.
dashboard-no-exposures-label = Không tìm thấy vụ rò rỉ nào
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = Tin tốt, tất cả { $exposures_resolved_num } dữ liệu bị lộ của bạn đã được giải quyết! Chúng tôi sẽ tiếp tục theo dõi và sẽ cảnh báo bạn về bất kỳ trường hợp dữ liệu bị lộ nào mới.
dashboard-top-banner-monitor-more-cta = Giám sát nhiều email hơn

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Chúng tôi tìm kiếm dữ liệu bị lộ trong tất cả các vụ rò rỉ dữ liệu đã biết.
    Dữ liệu bị lộ của bạn sẽ có một trong các trạng thái sau:
modal-exposure-indicator-title = Trạng thái rò rỉ
modal-exposure-indicator-action-needed = Bạn cần hành động nâng cao hoặc hành động thủ công để hoàn thành một hành động.
modal-exposure-indicator-fixed = Sự cố này đã được giải quyết và bạn không cần phải làm gì cả.
