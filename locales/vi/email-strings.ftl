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
firefox-monitor-report = Báo cáo { -product-name }
report-date = Ngày báo cáo:
email-address = Địa chỉ email:
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
report-pwt-blurb =
    Mật khẩu rất có giá trị, hàng ngàn trong số chúng bị đánh cắp mỗi ngày và được giao dịch hoặc bán trên thị trường chợ đen.
    Mật khẩu mạnh hơn là cách để bảo vệ tài khoản của bạn và tất cả thông tin cá nhân nằm trong đó.
report-pwt-headline-1 = Sử dụng một mật khẩu khác nhau cho mỗi tài khoản
report-pwt-summary-1 =
    Sử dụng lại cùng một mật khẩu ở mọi tài khoản sẽ mở ra cơ hội cho tin tặc.
    Họ có thể sử dụng mật khẩu đó để đăng nhập vào các tài khoản khác của bạn.
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
# Unsubscribe link in email.
email-unsub-link = Hủy đăng ký
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Bạn nhận được email này vì bạn đã đăng ký thông báo { -product-name }.
    Không còn muốn những email này? { $unsubLink }. Đây là một email tự động. Để được hỗ trợ, hãy truy cập { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Bạn nhận được email này vì bạn đã đăng ký thông báo { -product-name }.
    Đây là một email tự động. Để được hỗ trợ, hãy truy cập { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Xem bảng điều khiển của tôi
# Button text
verify-email-cta = Xác minh email
# Button text
see-all-breaches = Xem tất cả các vi phạm
# Headline of verification email
email-link-expires = Liên kết này hết hạn sau 24 giờ
email-verify-blurb = Xác minh email của bạn để thêm nó vào { -product-name } và đăng ký thông báo vi phạm.
# Email headline
email-found-breaches-hl = Đây là bản tóm tắt của bạn về các vi phạm dữ liệu trong quá khứ
# Email headline
email-breach-summary-for-email = Tóm tắt vi phạm cho { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } xuất hiện trong 0 vi phạm dữ liệu đã biết
# Email headline
email-alert-hl = { $userEmail } đã xuất hiện trong vi phạm dữ liệu mới
# Subject line of email
email-subject-found-breaches = { -product-name } đã tìm thấy thông tin của bạn trong những vi phạm này
# Subject line of email
email-subject-no-breaches = { -product-name } không tìm thấy vi phạm đã biết
# Subject line of email
email-subject-verify = Xác minh email của bạn cho { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Tìm hiểu thêm về { $fxmLink }
email-sensitive-disclaimer =
    Do tính chất nhạy cảm của vi phạm này, các email liên quan không được phát hiện công khai.
    Bạn có thể nhận được thông báo này vì bạn là chủ sở hữu đã xác minh của địa chỉ email này.
fxm-warns-you-no-breaches =
    { -product-name } cảnh báo bạn về các vi phạm dữ liệu liên quan đến thông tin cá nhân của bạn.
    Cho đến nay, không có vi phạm đã được tìm thấy. Chúng tôi sẽ gửi cho bạn một cảnh báo nếu địa chỉ email của bạn xuất hiện trong vi phạm mới.
fxm-warns-you-found-breaches =
    { -product-name } cảnh báo bạn về các vi phạm dữ liệu liên quan đến thông tin cá nhân của bạn.
    Bạn cũng đã đăng ký để nhận thông báo nếu địa chỉ email của bạn xuất hiện trong vi phạm mới.
email-breach-alert-blurb =
    { -product-name } cảnh báo bạn về các vi phạm dữ liệu liên quan đến thông tin cá nhân của bạn.
    Chúng tôi vừa nhận được thông tin chi tiết về một công ty khác vi phạm dữ liệu.
# List headline
faq-list-headline = Câu hỏi thường gặp
# Link Title
faq-v2-1 = Tôi không nhận ra công ty hoặc trang web này. Tại sao tôi ở trong vi phạm?
# Link Title
faq-v2-2 = Tôi có cần phải làm bất cứ điều gì nếu vi phạm xảy ra nhiều năm trước hoặc đây là một tài khoản cũ?
# Link Title
faq-v2-3 = Tôi mới phát hiện ra tôi đã bị vi phạm dữ liệu. Tôi nên làm gì tiếp theo?
# Link Title
faq-v2-4 = { -product-name } xử lý các trang web nhạy cảm như thế nào?
