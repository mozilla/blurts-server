# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Dữ liệu bị rò rỉ
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Rò rỉ dữ liệu đến { $email-select }
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
breach-description = Vào { $breachDate }, { $companyName } đã bị xâm phạm. Sau khi rò rỉ dữ liệu được phát hiện và xác minh, nó đã được thêm vào cơ sở dữ liệu của chúng tôi vào { $addedDate }. Rò rỉ này bao gồm: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Truy cập <a>{ $breachedCompanyUrl }</a> để thay đổi mật khẩu của bạn và bật xác thực hai yếu tố (2FA).
breach-checklist-pw-body = Đảm bảo rằng mật khẩu của bạn là duy nhất và khó đoán. Nếu mật khẩu này được sử dụng trên bất kỳ tài khoản nào khác, hãy đảm bảo bạn cũng thay đổi mật khẩu đó. <a>Trình quản lý mật khẩu của { -brand-firefox }</a> có thể giúp bạn theo dõi tất cả mật khẩu của mình một cách an toàn.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Bảo vệ email của bạn bằng dịch vụ tạo mặt nạ email như <a>{ -brand-relay }</a>.
breach-checklist-email-body = Điều này có thể ẩn địa chỉ email thực của bạn trong khi chuyển tiếp email đến hộp thư đến thực của bạn.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Theo dõi báo cáo tín dụng của bạn để biết các tài khoản, khoản vay hoặc thẻ tín dụng mà bạn không nhận ra.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Bạn cũng có thể xem xét đóng băng tín dụng của mình trên <a>Equifax</a>, <a>Experian</a> và <a>TransUnion</a> để ngăn những kẻ lừa đảo mở tài khoản mới dưới tên của bạn. Nó miễn phí và sẽ không ảnh hưởng đến điểm tín dụng của bạn.

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

breach-checklist-ip-header = Sử dụng Internet một cách riêng tư với VPN, chẳng hạn như <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Địa chỉ IP của bạn (địa chỉ giao thức Internet) xác định chính xác vị trí của bạn và nhà cung cấp dịch vụ internet. VPN có thể ẩn địa chỉ IP thực của bạn để bạn có thể sử dụng Internet một cách riêng tư.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Thay đổi bất kỳ mật khẩu hoặc mã PIN nào bao gồm bất kỳ phần nào trong địa chỉ của bạn.
breach-checklist-address-body = Địa chỉ rất dễ tìm thấy trong hồ sơ công khai và có thể làm cho các mật khẩu và mã PIN đó dễ đoán.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Thay đổi bất kỳ mật khẩu hoặc mã PIN nào có ngày sinh của bạn.
breach-checklist-dob-body = Bạn có thể dễ dàng tìm thấy ngày sinh trong hồ sơ công khai và những người tìm thấy ngày sinh có thể dễ dàng đoán được mã PIN của bạn.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Bảo vệ số điện thoại của bạn bằng dịch vụ mặt nạ như <a>{ -brand-relay }</a>, dịch vụ này sẽ ẩn số điện thoại thực của bạn.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Cập nhật các câu hỏi bảo mật của bạn trên <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Sử dụng các câu trả lời dài, ngẫu nhiên và cất chúng ở nơi an toàn. Làm điều này ở bất kỳ nơi nào khác mà bạn đã sử dụng cùng một câu hỏi bảo mật.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Tạo mật khẩu mạnh, duy nhất cho bất kỳ tài khoản nào mà bạn đã sử dụng lại mật khẩu.
breach-checklist-hp-body = Trình quản lý mật khẩu như <a>của { -brand-firefox }</a> (miễn phí và được tích hợp sẵn trong trình duyệt { -brand-firefox }) có thể giúp bạn theo dõi tất cả mật khẩu của mình và truy cập chúng một cách an toàn từ tất cả các thiết bị của bạn.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Hãy liên hệ với { $companyName } để thông báo cho họ về rò rỉ này và yêu cầu các bước cụ thể mà bạn có thể thực hiện.
