# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Chọn nút Xác nhận email của tôi trong vòng 24 giờ để xác nhận tài khoản Firefox Monitor của bạn.
    Báo cáo của bạn sau đó sẽ được gửi đến.
verify-my-email = Xác nhận email của tôi
report-scan-another-email = Quét một email khác trong { -product-name }
automated-message = Đây là một email tự động; nếu bạn nhận được nó do lỗi, bạn không cần thực hiện hành động nào.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Chúng tôi đã gửi tin nhắn này tới { $userEmail } vì địa chỉ email đã chọn tham gia nhận thông báo từ { -product-name }.
unsubscribe-email-link = Nếu bạn không còn muốn nhận thông báo { -product-name } nữa, hãy hủy đăng ký.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Báo cáo
report-date = Ngày báo cáo:
email-address = Địa chỉ email:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Tại đây là báo cáo đầy đủ { -product-name }, bao gồm tất cả các vi phạm dữ liệu đã biết có chứa địa chỉ email này.
report-no-breaches =
    Địa chỉ email của bạn không xuất hiện trong cơ sở dữ liệu của chúng tôi về các vi phạm đã biết.
    Nhưng vi phạm có thể xảy ra bất cứ lúc nào. Thực hiện các bước này để giữ cho dữ liệu cá nhân của bạn an toàn trực tuyến.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Tôi phải làm gì tiếp theo
report-headline =
    { $breachCount ->
        [0] Không có vấn đề gì cả.
       *[other] Tài khoản của bạn đã xuất hiện trong { $breachCount } vi phạm.
    }
report-subhead-no-breaches =
    Tài khoản của bạn không xuất hiện trong báo cáo đầy đủ về các vi phạm.
    Đó là tin tốt lành, nhưng có nhiều thứ bạn có thể làm.
    Vi phạm dữ liệu xảy ra bất cứ lúc nào, vì vậy hãy đọc tiếp để tìm hiểu cách bạn có thể bảo vệ mật khẩu của mình.
report-subhead-found-breaches = Tại đây là bản báo cáo Firefox Monitor đầy đủ của bạn, bao gồm tất cả các vi phạm dữ liệu đã biết có chứa địa chỉ email này.
breach-alert-headline = Thông tin tài khoản của bạn đã bị xâm phạm do vi phạm dữ liệu.
breach-alert-subhead = Vi phạm dữ liệu được báo cáo gần đây có chứa email của bạn và dữ liệu sau
report-pwt-blurb =
    Mật khẩu rất có giá trị, hàng ngàn trong số chúng bị đánh cắp mỗi ngày và được giao dịch hoặc bán trên thị trường chợ đen.
    Mật khẩu mạnh hơn là cách để bảo vệ tài khoản của bạn và tất cả thông tin cá nhân nằm trong đó.
report-pwt-headline-1 = Sử dụng một mật khẩu khác nhau cho mỗi tài khoản
report-pwt-headline-2 = Tạo mật khẩu mạnh, khó đoán
report-pwt-summary-2 =
    Tin tặc sử dụng danh sách các mật khẩu phổ biến để cố gắng đoán mật khẩu của bạn.
    Mật khẩu của bạn càng dài và càng ngẫu nhiên thì càng khó bị đánh cắp.
report-pwt-headline-3 = Xử lý các câu hỏi bảo mật như mật khẩu bổ sung
report-pwt-summary-3 =
    Các trang web không kiểm tra xem câu trả lời của bạn có chính xác không, chỉ cần biết là chúng có khớp như khi bạn tạo tài khoản hay không.
    Tạo câu trả lời dài, ngẫu nhiên và lưu trữ chúng ở nơi an toàn.
report-pwt-headline-4 = Sử dụng trình quản lý mật khẩu
report-pwt-summary-4 =
    Các dịch vụ như 1Password, LastPass, Dashlane và Bitwarden tạo mật khẩu mạnh, lưu trữ chúng một cách an toàn,
    và điền chúng vào các trang web để bạn không cần phải nhớ từng cái một.
# A link to legal information about mozilla products.
legal = Thông tin pháp lý
# Share Firefox Monitor by email subject line
share-by-email-subject = Xem nếu bạn đã từng là một phần của vi phạm dữ liệu.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Chào bạn,
    { -brand-name } có một dịch vụ miễn phí, nơi bạn có thể kiểm tra xem bạn có phải là một phần của vi phạm dữ liệu hay không. Đây là cách thức hoạt động của nó:
    1. Truy cập { "https://monitor.firefox.com" } và tìm kiếm email của bạn.
    2. Xem các tài khoản trực tuyến của bạn đã bị lộ do vi phạm dữ liệu.
    3. Nhận các mẹo từ { -product-name } về những việc cần làm tiếp theo.
