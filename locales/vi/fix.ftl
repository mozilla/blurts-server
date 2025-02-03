# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vụ rò rỉ với rủi ro cao
fix-flow-nav-leaked-passwords = Mật khẩu bị lộ
fix-flow-nav-security-recommendations = Đề xuất bảo mật
guided-resolution-flow-exit = Quay lại trang tổng quan
guided-resolution-flow-next-arrow = Chuyển sang bước tiếp theo
guided-resolution-flow-next-arrow-sub-step = Đi đến kết quả tiếp theo
guided-resolution-flow-step-navigation-label = Các bước hướng dẫn

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Hãy tiếp tục
fix-flow-celebration-next-recommendations-label = Xem đề xuất
fix-flow-celebration-next-dashboard-label = Đi đến trang tổng quan của bạn

## High-risk flow

fix-flow-celebration-high-risk-title = Bạn đã giải quyết vụ rò rỉ với rủi ro cao của bạn!
fix-flow-celebration-high-risk-description-in-progress = Làm công việc này có thể cảm thấy rất phiền, nhưng điều quan trọng là phải làm như vậy để giữ an toàn cho bản thân. Hãy tiếp tục phát huy.
fix-flow-celebration-high-risk-description-done = Làm công việc này có thể cảm thấy rất phiền, nhưng điều quan trọng là phải làm như vậy để giữ an toàn cho bản thân.
fix-flow-celebration-high-risk-description-next-passwords = Bây giờ hãy giải quyết mật khẩu bị lộ của bạn.
fix-flow-celebration-high-risk-description-next-security-questions = Bây giờ hãy giải quyết câu hỏi bảo mật bị lộ của bạn.
fix-flow-celebration-high-risk-description-next-security-recommendations = Tiếp theo, chúng tôi sẽ cung cấp cho bạn các đề xuất bảo mật được cá nhân hóa dựa trên dữ liệu nào của bạn đã bị lộ.
fix-flow-celebration-high-risk-description-next-dashboard = Bạn đã làm xong bước cuối cùng. Bạn có thể xem bất kỳ mục hành động nào và theo dõi tiến trình của mình trên trang tổng quan.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Mật khẩu của bạn hiện đã được bảo vệ!
fix-flow-celebration-security-questions-title = Câu hỏi bảo mật của bạn được bảo vệ!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Bây giờ, hãy xem xét và cập nhật các câu hỏi bảo mật mà bạn đã đưa ra.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Tiếp theo, chúng tôi sẽ cung cấp cho bạn các đề xuất bảo mật được cá nhân hóa dựa trên dữ liệu nào của bạn đã bị lộ.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Làm tốt lắm! Bạn đã làm xong bước cuối cùng. Bạn có thể xem bất kỳ mục hành động nào và theo dõi tiến trình của mình trên trang tổng quan.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Bạn đã hoàn thành tất cả đề xuất của mình!
fix-flow-celebration-security-recommendations-description-next-dashboard = Làm tốt lắm! Bạn đã làm xong bước cuối cùng. Bạn có thể xem bất kỳ mục hành động nào và theo dõi tiến trình của mình trên trang tổng quan.

# High Risk Data Breaches

high-risk-breach-heading = Đây là những việc cần làm
high-risk-breach-subheading = Điều này yêu cầu quyền truy cập vào thông tin nhạy cảm của bạn, vì vậy bạn sẽ cần phải giải quyết nó theo cách thủ công.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary = Nó xuất hiện trong { $num_breaches } vụ rò rỉ:
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>vào { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Đánh dấu là đã giải quyết
high-risk-breach-skip = Bỏ qua bây giờ
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Thời gian ước tính của bạn: { $estimated_time }+ phút
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Số thẻ tín dụng của bạn đã bị lộ
high-risk-breach-credit-card-description = Bất kỳ ai lấy được nó đều có thể thực hiện các giao dịch mua trái phép mà bạn có thể phải chịu trách nhiệm. Hãy hành động ngay để tránh các giao dịch không liên quan.
high-risk-breach-credit-card-step-one = Nếu bạn vẫn còn giữ thẻ này, hãy liên hệ với nhà phát hành để thông báo thẻ bị mất cắp.
high-risk-breach-credit-card-step-two = Yêu cầu thẻ mới với số mới.
high-risk-breach-credit-card-step-three = Kiểm tra tài khoản của bạn để phát hiện các khoản phí trái phép.

# Bank Account Breaches

high-risk-breach-bank-account-title = Tài khoản ngân hàng của bạn đã bị lộ
high-risk-breach-bank-account-description = Hành động càng sớm càng tốt có thể mang lại cho bạn nhiều sự bảo vệ pháp lý hơn để giúp bạn khắc phục mọi tổn thất.
high-risk-breach-bank-account-step-one = Thông báo cho ngân hàng của bạn ngay lập tức rằng số tài khoản của bạn đã bị xâm phạm.
high-risk-breach-bank-account-step-two = Thay đổi số tài khoản của bạn.
high-risk-breach-bank-account-step-three = Kiểm tra tài khoản của bạn để phát hiện các khoản phí trái phép.

# Social Security Number Breaches

high-risk-breach-social-security-title = Số an sinh xã hội của bạn đã bị lộ
high-risk-breach-social-security-description = Những kẻ lừa đảo có thể mở các khoản vay hoặc thẻ tín dụng mới bằng số an sinh xã hội của bạn. Hành động ngay để tránh các giao dịch không liên quan.
high-risk-breach-social-security-step-one = Hãy tự bảo vệ mình bằng cách <link_to_info>thiết lập cảnh báo lừa đảo hoặc đóng băng tín dụng của bạn.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Kiểm tra báo cáo tín dụng của bạn</link_to_info> để phát hiện các tài khoản bạn không nhận ra.

# Social Security Number Modal

ssn-modal-title = Về cảnh báo lừa đảo và đóng băng tín dụng
ssn-modal-description-fraud-part-one = <b>Cảnh báo lừa đảo</b> yêu cầu các doanh nghiệp xác minh danh tính của bạn trước khi cấp tín dụng mới dưới tên của bạn. Nó miễn phí, kéo dài một năm và sẽ không ảnh hưởng tiêu cực đến điểm tín dụng của bạn.
ssn-modal-description-fraud-part-two = Để thiết lập một cái, hãy liên hệ với bất kỳ một trong ba văn phòng tín dụng. Bạn không cần phải liên hệ với cả ba.
ssn-modal-description-freeze-credit-part-one = <b>Đóng băng tín dụng của bạn</b> ngăn bất cứ ai mở một tài khoản mới dưới tên của bạn. Nó miễn phí và sẽ không ảnh hưởng tiêu cực đến điểm tín dụng của bạn, nhưng bạn sẽ cần hủy đóng băng nó trước khi mở bất kỳ tài khoản mới nào.
ssn-modal-description-freeze-credit-part-two = Để đóng băng tín dụng của bạn, hãy liên hệ với ba văn phòng tín dụng — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, và <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Tìm hiểu thêm về cảnh báo lừa đảo và đóng băng tín dụng
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Mã PIN của bạn đã bị lộ
high-risk-breach-pin-description = Hành động càng sớm càng tốt có thể mang lại cho bạn nhiều sự bảo vệ pháp lý hơn để giúp bạn khắc phục mọi tổn thất.
high-risk-breach-pin-step-one = Thông báo ngay cho ngân hàng của bạn rằng mã PIN của bạn đã bị xâm phạm.
high-risk-breach-pin-step-two = Thay đổi mã PIN của bạn ở bất kỳ nơi nào bạn đã sử dụng mã PIN đó.
high-risk-breach-pin-step-three = Kiểm tra tài khoản của bạn để phát hiện các khoản phí trái phép.

# No high risk breaches found

high-risk-breach-none-title = Tin vui, chúng tôi không tìm thấy bất kỳ vụ rò rỉ dữ liệu với rủi ro cao nào
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Chúng tôi phát hiện các vụ rò rỉ dữ liệu dựa trên địa chỉ email của bạn và chúng tôi không tìm thấy bất kỳ rò rỉ dữ liệu với rủi ro cao nào đối với { $email_list }.
high-risk-breach-none-sub-description-part-one = Rò rỉ dữ liệu có rủi ro cao bao gồm:
high-risk-breach-none-sub-description-ssn = Số an sinh xã hội
high-risk-breach-none-sub-description-bank-account = Thông tin tài khoản ngân hàng
high-risk-breach-none-sub-description-cc-number = Số thẻ tín dụng
high-risk-breach-none-sub-description-pin = Mã PIN
high-risk-breach-none-continue = Tiếp tục

# Security recommendations

security-recommendation-steps-label = Đề xuất bảo mật
security-recommendation-steps-title = Đây là lời khuyên của chúng tôi:
security-recommendation-steps-cta-label = Đã hiểu!

# Phone security recommendation

security-recommendation-phone-title = Bảo vệ số điện thoại của bạn
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary = Số điện thoại của bạn đã bị lộ trong { $num_breaches } vụ rò rỉ:
security-recommendation-phone-description = Thật không may, bạn không thể giải quyết triệt để nó. Nhưng có những bước bạn có thể thực hiện để đảm bảo mình vẫn an toàn.
security-recommendation-phone-step-one = Chặn số rác để ngăn nhiều cuộc gọi rác hơn
security-recommendation-phone-step-two = Đừng nhấp vào liên kết trong tin nhắn từ những người gửi không xác định; nếu nó có vẻ đến từ một nguồn đáng tin cậy, hãy gọi trực tiếp để xác nhận

# Email security recommendation

security-recommendation-email-title = Bảo vệ địa chỉ email của bạn
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary = Địa chỉ email của bạn đã bị lộ trong { $num_breaches } vụ rò rỉ:
security-recommendation-email-description = Thật không may, bạn không thể giải quyết nó. Nhưng có những bước bạn có thể thực hiện để bảo vệ chính mình.
security-recommendation-email-step-one = Đừng nhấp vào liên kết trong email từ những người gửi không xác định; nếu nó có vẻ đến từ nguồn đáng tin cậy, hãy gọi trực tiếp để xác nhận
security-recommendation-email-step-two = Hãy cẩn thận với <link_to_info>lừa đảo giả mạo</link_to_info>
security-recommendation-email-step-three = Đánh dấu các email đáng ngờ là thư rác và chặn người gửi
security-recommendation-email-step-four = Sử dụng <link_to_info>email ẩn danh của { -brand-relay }</link_to_info> để bảo vệ email của bạn trong tương lai

# IP security recommendation

security-recommendation-ip-title = Sử dụng VPN để tăng cường quyền riêng tư
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary = Địa chỉ IP của bạn đã bị lộ trong { $num_breaches } vụ rò rỉ:
security-recommendation-ip-description = Địa chỉ IP của bạn xác định chính xác vị trí và nhà cung cấp dịch vụ internet của bạn. Tin tặc có thể sử dụng thông tin này để tìm vị trí của bạn hoặc cố gắng kết nối với thiết bị của bạn.
security-recommendation-ip-step-one = Sử dụng một VPN (chẳng hạn như <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) để ẩn địa chỉ IP thực của bạn và sử dụng Internet một cách riêng tư.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Mật khẩu { $breach_name } của bạn đã bị lộ
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Nó xuất hiện trong một vụ rò rỉ dữ liệu vào { $breach_date }.
leaked-passwords-description = Những kẻ lừa đảo có thể truy cập vào tài khoản của bạn và có thể sẽ thử sử dụng nó trên các tài khoản khác để xem bạn có sử dụng cùng một mật khẩu hay không. Thay đổi nó ở bất cứ nơi nào bạn đã sử dụng nó để bảo vệ chính mình.
leaked-passwords-steps-title = Đây là những việc cần làm
leaked-passwords-steps-subtitle = Điều này yêu cầu quyền truy cập vào tài khoản của bạn, vì vậy bạn sẽ cần giải quyết nó theo cách thủ công.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Thay đổi mật khẩu của bạn cho <b>{ $emails_affected }</b> trên <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Thay đổi nó ở bất cứ nơi nào khác mà bạn đã sử dụng nó.
leaked-passwords-mark-as-fixed = Đánh dấu là đã giải quyết
leaked-passwords-skip = Bỏ qua bây giờ
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Ước tính thời gian để hoàn thành: { $estimated_time } phút cho một trang
    }

# Leaked Security Questions

leaked-security-questions-title = Câu hỏi bảo mật của bạn đã bị lộ
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Chúng xuất hiện trong một vụ rò rỉ dữ liệu trên { $breach_name } vào { $breach_date }.
leaked-security-questions-description = Những kẻ lừa đảo có thể sử dụng những thông tin này để truy cập vào tài khoản của bạn và bất kỳ trang web nào khác mà bạn đã sử dụng các câu hỏi bảo mật tương tự. Hãy cập nhật chúng ngay bây giờ để bảo vệ tài khoản của bạn.
leaked-security-questions-steps-title = Đây là những việc cần làm
leaked-security-questions-steps-subtitle = Điều này yêu cầu quyền truy cập vào tài khoản của bạn, vì vậy bạn sẽ cần giải quyết nó theo cách thủ công.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Cập nhật câu hỏi bảo mật của bạn cho <b>{ $email_affected }</b> trên <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Cập nhật chúng trên bất kỳ trang web nào khác mà bạn đã sử dụng các câu hỏi bảo mật tương tự. Hãy đảm bảo sử dụng các câu hỏi bảo mật khác nhau cho mỗi tài khoản.
