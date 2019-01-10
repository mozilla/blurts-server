# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hỗ trợ
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Về cảnh báo Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Gửi phản hồi
terms-and-privacy = Điều khoản và chính sách riêng tư
error-could-not-add-email = Không thể thêm địa chỉ email vào cơ sở dữ liệu.
error-not-subscribed = Địa chỉ email này không được đăng ký với { -product-name }.
error-hibp-throttled = Quá nhiều kết nối đến { -brand-HIBP }.
error-hibp-connect = Lỗi kết nối đến { -brand-HIBP }.
error-hibp-load-breaches = Không thể tải các vi phạm.
hibp-notify-email-subject = { -product-name } Thông báo: Tài khoản của bạn có liên quan đến vi phạm.
home-title = { -product-name }
home-not-found = Không tìm thấy trang.
oauth-invalid-session = Phiên không hợp lệ
oauth-confirmed-title = { -product-name }: Đã đăng ký
scan-title = { -product-name }: Kết quả quét
user-add-invalid-email = Email không hợp lệ
user-add-email-verify-subject = Xác nhận đăng ký của bạn với { -product-name }.
user-add-title = { -product-name }: Xác nhận email
error-headline = Lỗi
user-verify-token-error = Token xác minh được yêu cầu.
user-verify-email-report-subject = Báo cáo của { -product-name } gửi của bạn
user-verify-title = { -product-name }: Đã đăng ký
user-unsubscribe-token-error = Hủy đăng ký yêu cầu token.
user-unsubscribe-token-email-error = Hủy đăng ký yêu cầu token và emailHash.
user-unsubscribe-title = { -product-name }: Hủy đăng ký
user-unsubscribe-survey-title = { -product-name }: Hủy đăng ký khảo sát
user-unsubscribed-title = { -product-name }: Đã hủy đăng ký

## Password Tips

pwt-section-headline = Mật khẩu mạnh hơn = Bảo ​​vệ tốt hơn
pwt-section-subhead = Bảo mật thông tin cá nhân của bạn cũng giống như độ mạnh của mật khẩu của bạn.
pwt-section-blurb =
    Mật khẩu của bạn bảo vệ nhiều hơn tài khoản của bạn. Họ bảo vệ mọi thông tin cá nhân trong đó.
    Và tin tặc dựa vào những thói quen xấu, như sử dụng cùng một mật khẩu ở mọi nơi hoặc sử dụng các cụm từ phổ biến (p@ssw0rd, anyone?)
    nên nếu họ đã đánh cắp một tài khoản, họ sẽ có thể đánh cắp nhiều tài khoản hơn. Dưới đây là cách bảo vệ tài khoản của bạn tốt hơn.
pwt-headline-1 = Sử dụng một mật khẩu khác nhau cho mỗi tài khoản
pwt-summary-1 =
    Sử dụng lại cùng một mật khẩu ở mọi tài khoản sẽ mở ra cơ hội cho tin tặc.
    Họ có thể sử dụng mật khẩu đó để đăng nhập vào các tài khoản khác của bạn.
pwt-headline-2 = Tạo mật khẩu mạnh, khó đoán
pwt-summary-2 =
    Tin tặc sử dụng hàng ngàn mật khẩu phổ biến để cố gắng đoán mật khẩu của bạn.
    Mật khẩu của bạn càng dài và càng ngẫu nhiên thì càng khó đoán.
pwt-headline-3 = Xử lý các câu hỏi bảo mật như mật khẩu bổ sung
pwt-summary-3 =
    Các trang web không kiểm tra xem câu trả lời của bạn có chính xác không, chỉ cần biết là chúng có khớp như khi bạn tạo tài khoản hay không.
    Tạo câu trả lời dài, ngẫu nhiên và lưu trữ chúng ở nơi an toàn.
pwt-headline-4 = Nhận trợ giúp về ghi nhớ mật khẩu của bạn
pwt-summary-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden tạo ra các mật khẩu mạnh, độc đáo.
    Nó lưu trữ mật khẩu an toàn và điền chúng vào các trang web cho bạn
pwt-headline-5 = Thêm bảo mật bổ sung với xác thực hai bước
pwt-summary-5 =
    Xác thực 2 bước yêu cầu một phần thông tin bổ sung (như mã một lần được gửi qua tin nhắn văn bản) để đăng nhập vào tài khoản của bạn.
    Ngay cả khi ai đó có mật khẩu của bạn, họ vẫn chưa thể vào được.
pwt-headline-6 = Đăng ký nhận thông báo { -product-name-nowrap }
pwt-summary-6 =
    Vi phạm dữ liệu trang web đang gia tăng. Ngay sau khi một vi phạm mới được thêm vào cơ sở dữ liệu của chúng tôi,
    { -product-name-nowrap } gửi cho bạn một cảnh báo - để bạn có thể hành động và bảo vệ tài khoản của mình.
landing-headline = Quyền được an toàn của bạn khỏi tin tặc bắt đầu từ đây.
landing-blurb =
    { -product-name-nowrap } cung cấp cho bạn các công cụ để giữ thông tin cá nhân của bạn an toàn.
    Tìm hiểu những gì tin tặc đã biết về bạn và tìm hiểu làm thế nào để đi trước họ một bước.
scan-label = Vui lòng kiểm tra xem nó có liên quan đến vi phạm dữ liệu hay không.
scan-placeholder = Nhập địa chỉ email
scan-privacy = Email của bạn sẽ không được lưu trữ.
scan-submit = Tìm kiếm email của bạn
scan-another-email = Quét địa chỉ email khác
scan-featuredbreach-label = Tìm hiểu xem tài khoản <span class="bold">{ $featuredBreach }</span> của bạn có bị xâm phạm hay không.
sensitive-breach-email-required = Vi phạm chứa thông tin nhạy cảm. Yêu cầu xác minh email.
scan-error = Yêu cầu một email hợp lệ.
signup-banner-headline = { -product-name-nowrap } phát hiện các mối đe dọa đối với các tài khoản trực tuyến của bạn.
signup-banner-blurb =
    Báo cáo chi tiết của { -product-name-nowrap } gửi cho bạn hiển thị nếu thông tin từ tài khoản trực tuyến của bạn bị rò rỉ hoặc bị đánh cắp.
    Chúng tôi cũng sẽ thông báo cho bạn nếu tài khoản của bạn xuất hiện trong các vi phạm mới.
download-firefox-bar-blurb = { -product-name-nowrap } được mang đến cho bạn bởi <span class="nowrap">{ -brand-name } hoàn toàn mới</span>.
download-firefox-bar-link = Tải về { -brand-name } ngay
download-firefox-banner-blurb = Kiểm soát trình duyệt của bạn
download-firefox-banner-button = Tải về { -brand-name }
signup-modal-headline = Đăng ký { -product-name-nowrap }
signup-modal-blurb = Đăng ký báo cáo đầy đủ của bạn, cảnh báo khi vi phạm mới xảy ra và mẹo an toàn từ { -product-name-nowrap }.
signup-modal-close = Đóng
get-your-report = Nhận báo cáo của bạn
signup-modal-verify-headline = Xác nhận đăng ký của bạn
signup-modal-verify-blurb = Chúng tôi đã gửi một liên kết xác nhận đến <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Liên kết này hết hạn trong 24 giờ.
signup-modal-verify-resend = Không có trong hộp thư đến hoặc thư mục spam? Gửi lại.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Đã gửi!
signup-with-fxa = Đăng ký bằng tài khoản { -brand-name }
form-signup-placeholder = Nhập email
form-signup-checkbox = Nhận thông tin mới nhất từ ​​{ -brand-Mozilla } và { -brand-name }.
sign-up = Đăng ký
form-signup-error = Yêu cầu một email hợp lệ
no-breaches-headline = Không có vấn đề gì cả.
found-breaches-headline = Thông tin của bạn thuộc một phần của vi phạm dữ liệu.
no-breaches =
    Địa chỉ email của bạn không xuất hiện trong quá trình quét cơ bản của chúng tôi.
    Đó là tin tốt lành, nhưng vi phạm dữ liệu có thể xảy ra bất cứ lúc nào và vẫn còn nhiều điều bạn có thể làm.
    Đăng ký { -product-name-nowrap } để có báo cáo đầy đủ, cảnh báo khi có vi phạm mới và mẹo về bảo vệ mật khẩu của bạn.
featured-breach-results =
    { $breachCount ->
        [0] Tài khoản của bạn đã xuất hiện trong vi phạm <span class="bold">{ $featuredBreach }</span>, nhưng không xuất hiện trong bất kỳ vi phạm dữ liệu đã biết nào khác.
       *[other] Tài khoản của bạn đã xuất hiện trong vi phạm <span class="bold">{ $featuredBreach }</span>, cũng như { $breachCount } các vi phạm khác.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
       *[other] Tài khoản của bạn không xuất hiện trong vi phạm <span class="bold">{ $featuredBreach }</span>, nhưng đã xuất hiện trong { $breachCount } vi phạm khác.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
       *[other] Các tài khoản được liên kết với địa chỉ email của bạn đã xuất hiện trong { $breachCount } vi phạm sau đây.
    }
show-more-breaches = Xem thêm
what-to-do-headline = Phải làm gì khi thông tin của bạn bị phơi bày trong vi phạm dữ liệu
what-to-do-subhead-1 = Thay đổi mật khẩu của bạn, ngay cả đối với các tài khoản cũ
what-to-do-blurb-1 =
    Nếu bạn không thể đăng nhập, hãy liên hệ với trang web để hỏi cách bạn có thể khôi phục hoặc vô hiệu hía tài khoản.
    Thấy một tài khoản mà bạn không nhận ra? Trang web có thể đã thay đổi tên hoặc ai đó có thể đã tạo tài khoản cho bạn.
what-to-do-subhead-2 = Nếu bạn sử dụng lại mật khẩu bị lộ, hãy thay đổi nó
what-to-do-blurb-2 =
    Tin tặc có thể cố gắng sử dụng lại mật khẩu bị lộ của bạn để vào các tài khoản khác.
    Tạo một mật khẩu khác nhau cho mỗi trang web, đặc biệt là cho tài khoản ngân hàng của bạn,
    email và các trang web khác, nơi bạn lưu thông tin cá nhân.
what-to-do-subhead-3 = Thực hiện các bước bổ sung để bảo mật tài khoản tài chính của bạn
what-to-do-blurb-3 =
    Hầu hết các vi phạm chỉ để lộ email và mật khẩu, nhưng một số bao gồm thông tin tài chính nhạy cảm.
    Nếu số tài khoản ngân hàng hoặc số thẻ tín dụng của bạn bị lộ, hãy báo cho ngân hàng của bạn biết để được giúp đỡ và xử lí kịp thời,
    và theo dõi, báo cáo cho các khoản phí mà bạn không nhận ra.
what-to-do-subhead-4 = Nhận trợ giúp về tạo mật khẩu tốt và giữ chúng an toàn.
what-to-do-blurb-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden tạo mật khẩu mạnh,
    lưu trữ chúng một cách an toàn và điền chúng vào các trang web cho bạn.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Ngày vi phạm:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Tài khoản bị xâm phạm:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dữ liệu bị xâm phạm:
confirmed = Đã xác nhận!<br />Bạn đã đăng ký!
confirmed-blurb = { -product-name-nowrap } sẽ sớm gửi email cho bạn một báo cáo đầy đủ và sẽ gửi thông báo qua email nếu tài khoản của bạn xuất hiện trong một vi phạm mới được báo cáo.
confirmed-social-blurb = Nếu tài khoản của bạn đã bị vi phạm, rất có thể bạn bè, gia đình hoặc kết nối trực tuyến của bạn cũng vậy. Hãy cho họ biết về { -product-name-nowrap }.
unsub-headline = Hủy đăng ký từ { -product-name-nowrap }
unsub-blurb = Điều này sẽ xóa email của bạn khỏi danh sách { -product-name-nowrap } và bạn sẽ không còn nhận được thông báo khi vi phạm mới được công bố.
unsub-button = Hủy đăng ký
unsub-survey-headline = Bạn sẽ không còn đăng ký.
unsub-survey-blurb =
    Email của bạn đã hủy đăng ký từ { -product-name-nowrap }. Cảm ơn bạn đã sử dụng dịch vụ này.
    Bạn sẽ dành một chút thời gian để trả lời một câu hỏi về kinh nghiệm của bạn?
unsub-survey-form-label = Tại sao bạn hủy đăng ký nhận thông báo { -product-name-nowrap }?
unsub-reason-1 = Tôi nghĩ rằng cảnh báo đó không làm cho dữ liệu của tôi an toàn hơn
unsub-reason-2 = Tôi nhận được quá nhiều email từ { -product-name-nowrap }
unsub-reason-3 = Tôi không tìm thấy nhiều giá trị của dịch vụ
unsub-reason-4 = Tôi đã thực hiện các bước để bảo vệ tài khoản của mình
unsub-reason-5 = Tôi đang sử dụng dịch vụ khác để theo dõi tài khoản của mình
unsub-reason-6 = Không có cái nào ở trên
unsub-survey-thankyou = Cảm ơn phản hồi của bạn.
unsub-survey-error = Vui lòng chọn một.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Chia sẻ
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Tải về { -brand-Quantum }
download-firefox-mobile = Tải về { -brand-name } cho điện thoại
# Features here refers to Firefox browser features. 
features = Tính năng
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Phiên bản Beta, Nightly, Nhà phát triển
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = Các phần của nội dung này được giữ bản quyền &#x24B8; 1998-2018 bởi những người đóng góp mozilla.org. <br /> Nội dung khả dụng theo <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">giấy phép Creative Commons</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dữ liệu vi phạm được cung cấp bởi { $hibp-link }
site-description = Tài khoản của bạn đã bị rò rỉ hoặc bị đánh cắp trong một vi phạm dữ liệu? Tìm hiểu tại { -product-name }. Tìm kiếm cơ sở dữ liệu của chúng tôi và đăng ký nhận thông báo.
confirmation-headline = Báo cáo { -product-name } của bạn sau đó sẽ được gửi đến
confirmation-blurb = Vi phạm dữ liệu có thể ảnh hưởng đến bất cứ ai. Truyền bá để bạn bè và gia đình của bạn có thể kiểm tra xem tài khoản trực tuyến của họ có an toàn không.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Khác
share-twitter = Hầu hết mọi người có khoảng 100 tài khoản trực tuyến. Có ai trong số bạn đã bị lộ trong một vi phạm dữ liệu? Tìm hiểu nó.
share-facebook-headline = Tìm hiểu nếu bạn đã từng là một phần của vi phạm dữ liệu
share-facebook-blurb = Các tài khoản trực tuyến của bạn đã bị lộ trong một phần của vi phạm dữ liệu không?
og-site-description = Tìm hiểu xem bạn có phải ở trong một phần của vi phạm dữ liệu không với { -product-name }. Đăng ký nhận thông báo về các vi phạm trong tương lai và nhận các mẹo để giữ an toàn cho tài khoản của bạn.
