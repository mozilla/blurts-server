# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Trang tổng quan
breach-all-meta-title = { -brand-fx-monitor } - Tất cả vụ rò rỉ dữ liệu
breach-all-meta-social-title = Tất cả vụ rò rỉ dữ liệu được phát hiện bởi { -brand-fx-monitor }
breach-all-meta-social-description = Duyệt qua danh sách đầy đủ các rò rỉ đã biết do { -brand-fx-monitor } phát hiện, sau đó tìm hiểu xem thông tin của bạn có bị lộ hay không.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Rò rỉ dữ liệu từ { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Bạn có bị ảnh hưởng bởi rò rỉ dữ liệu từ { $company } không?
breach-detail-meta-social-description = Sử dụng { -brand-fx-monitor } để tìm hiểu xem thông tin cá nhân của bạn có bị lộ trong lần rò rỉ này hay không và biết phải làm gì tiếp theo.
breach-scan-meta-title = { -brand-fx-monitor } - Kết quả kiểm tra rò rỉ
breach-scan-meta-social-title = { -brand-fx-monitor } Kết quả kiểm tra rò rỉ
breach-scan-meta-social-description = Đăng nhập vào { -brand-fx-monitor } để giải quyết các rò rỉ và liên tục theo dõi mọi rò rỉ mới đã biết.

## Breaches header

# Data classes pie chart title
breach-chart-title = Dữ liệu bị rò rỉ
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Vụ rò rỉ dữ liệu tới { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored = { $count } trong tổng số { $total } email được giám sát
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Quản lý email

## Breaches resolved filter

filter-label-unresolved = Rò rỉ dữ liệu chưa được giải quyết
filter-label-resolved = Rò rỉ dữ liệu đã giải quyết

## Breaches table

column-company = CÔNG TY
column-breached-data = DỮ LIỆU BỊ XÂM PHẠM
column-detected = PHÁT HIỆN
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Đã giải quyết
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Hoạt động
breaches-resolve-heading = Giải quyết vụ rò rỉ này:
breaches-none-headline = Không tìm thấy rò rỉ dữ liệu
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Tin tốt! Không có rò rỉ dữ liệu đã biết nào được báo cáo cho { $email }. Chúng tôi sẽ tiếp tục theo dõi email này và sẽ cho bạn biết nếu có bất kỳ rò rỉ dữ liệu mới nào xảy ra.
breaches-none-cta-blurb = Bạn có muốn giám sát một email khác không?
breaches-none-cta-button = Thêm địa chỉ email
breaches-all-resolved-headline = Tất cả các rò rỉ được giải quyết
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Làm tốt lắm! Bạn đã giải quyết tất cả rò rỉ dữ liệu cho { $email }. Chúng tôi sẽ tiếp tục theo dõi email này và sẽ cho bạn biết nếu có bất kỳ rò rỉ dữ liệu mới nào xảy ra.
breaches-all-resolved-cta-blurb = Bạn có muốn giám sát một email khác không?
breaches-all-resolved-cta-button = Thêm địa chỉ email
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Vào { $breachDate }, { $companyName } đã bị xâm phạm. Sau khi rò rỉ dữ liệu được phát hiện và xác minh, nó đã được thêm vào cơ sở dữ liệu của chúng tôi vào { $addedDate }. Rò rỉ này bao gồm: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Trình quản lý mật khẩu { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Cập nhật mật khẩu của bạn và bật xác thực hai yếu tố (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Trong hầu hết các trường hợp, chúng tôi khuyên bạn nên thay đổi mật khẩu của mình trên trang web của công ty. Nhưng <b>trang web của họ có thể ngừng hoạt động hoặc chứa nội dung độc hại</b>, vì vậy hãy thận trọng nếu bạn <breached-company-link>truy cập trang web</breached-company-link>. Để tăng cường bảo vệ, hãy đảm bảo rằng bạn đang sử dụng mật khẩu duy nhất cho tất cả các tài khoản để không sử dụng bất kỳ mật khẩu nào bị rò rỉ để truy cập vào các tài khoản khác. { $passwordManagerLink } có thể giúp bạn theo dõi tất cả mật khẩu của mình một cách an toàn.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Bảo vệ email của bạn bằng dịch vụ tạo mặt nạ email như { $firefoxRelayLink }.
breach-checklist-email-body = Điều này có thể ẩn địa chỉ email thực của bạn trong khi chuyển tiếp email đến hộp thư đến thực của bạn.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Theo dõi báo cáo tín dụng của bạn để biết các tài khoản, khoản vay hoặc thẻ tín dụng mà bạn không nhận ra.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Bạn cũng có thể xem xét đóng băng tín dụng của mình trên { $equifaxLink }, { $experianLink } và { $transUnionLink } để ngăn những kẻ lừa đảo mở tài khoản mới dưới tên của bạn. Nó miễn phí và sẽ không ảnh hưởng đến điểm tín dụng của bạn.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Báo cáo rò rỉ này cho công ty phát hành thẻ tín dụng của bạn và yêu cầu cấp thẻ mới với số mới.
breach-checklist-cc-body = Bạn cũng nên xem lại bảng sao kê thẻ tín dụng của mình để biết các khoản phí không nhận ra.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Thông báo cho ngân hàng của bạn ngay lập tức rằng số tài khoản của bạn đã bị xâm phạm.
breach-checklist-bank-body = Làm như vậy nhanh hơn có thể cung cấp cho bạn nhiều biện pháp bảo vệ pháp lý hơn để giúp bạn phục hồi mọi tổn thất. Bạn cũng sẽ muốn kiểm tra tài khoản của mình xem có bất kỳ khoản phí không xác định nào không.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Thông báo cho công ty phát hành thẻ của bạn và thay đổi mã PIN của bạn ngay lập tức.
breach-checklist-pin-body = Đảm bảo mã PIN mới của bạn hoặc bất kỳ mã PIN nào khác không bao gồm các số dễ đoán như ngày sinh hoặc địa chỉ của bạn.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Sử dụng internet riêng tư với VPN, chẳng hạn như { $mozillaVpnLink }.
breach-checklist-ip-body = Địa chỉ IP của bạn (địa chỉ giao thức Internet) xác định chính xác vị trí của bạn và nhà cung cấp dịch vụ internet. VPN có thể ẩn địa chỉ IP thực của bạn để bạn có thể sử dụng Internet một cách riêng tư.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Thay đổi bất kỳ mật khẩu hoặc mã PIN nào bao gồm bất kỳ phần nào trong địa chỉ của bạn.
breach-checklist-address-body = Địa chỉ rất dễ tìm thấy trong hồ sơ công khai và có thể làm cho các mật khẩu và mã PIN đó dễ đoán.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Thay đổi bất kỳ mật khẩu hoặc mã PIN nào có ngày sinh của bạn.
breach-checklist-dob-body = Bạn có thể dễ dàng tìm thấy ngày sinh trong hồ sơ công khai và những người tìm thấy ngày sinh có thể dễ dàng đoán được mã PIN của bạn.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Bảo vệ số điện thoại của bạn bằng dịch vụ che giấu như { $firefoxRelayLink }, dịch vụ này sẽ ẩn số điện thoại thực của bạn.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Cập nhật các câu hỏi bảo mật của bạn.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Trong hầu hết các trường hợp, chúng tôi khuyên bạn nên cập nhật các câu hỏi bảo mật của mình trên trang web của công ty. Nhưng <b>trang web của họ có thể ngừng hoạt động hoặc chứa nội dung độc hại</b>, vì vậy hãy thận trọng nếu bạn <breached-company-link>truy cập trang web</breached-company-link>. Để tăng cường bảo vệ, hãy cập nhật các câu hỏi bảo mật này trên bất kỳ tài khoản quan trọng nào mà bạn đã sử dụng chúng và tạo các mật khẩu duy nhất cho tất cả các tài khoản.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Tạo mật khẩu mạnh, duy nhất cho bất kỳ tài khoản nào mà bạn đã sử dụng lại mật khẩu.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Trình quản lý mật khẩu như { $passwordManagerLink } (miễn phí và được tích hợp sẵn trong trình duyệt { -brand-firefox }) có thể giúp bạn theo dõi tất cả mật khẩu của mình và truy cập chúng một cách an toàn từ tất cả các thiết bị của bạn.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Hãy liên hệ với { $companyName } để thông báo cho họ về rò rỉ này và yêu cầu các bước cụ thể mà bạn có thể thực hiện.
