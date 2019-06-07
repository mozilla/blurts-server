# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Tài khoản Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hỗ trợ
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Về cảnh báo Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Gửi phản hồi
terms-and-privacy = Điều khoản và chính sách riêng tư
error-scan-page-token = Bạn đang cố quét quá nhiều địa chỉ email trong một khoảng thời gian ngắn. Vì lý do bảo mật, chúng tôi đã tạm thời chặn bạn khỏi các tìm kiếm mới. Bạn có thể thử lại sau.
error-could-not-add-email = Không thể thêm địa chỉ email vào cơ sở dữ liệu.
error-not-subscribed = Địa chỉ email này không được đăng ký với { -product-name }.
error-hibp-throttled = Quá nhiều kết nối đến { -brand-HIBP }.
error-hibp-connect = Lỗi kết nối đến { -brand-HIBP }.
error-hibp-load-breaches = Không thể tải các vi phạm.
error-must-be-signed-in = Bạn phải đăng nhập vào { -brand-fxa } của bạn.
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
download-firefox-bar-link = Tải xuống { -brand-name } ngay
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
fxa-unsub-headline = Hủy đăng ký thông báo từ { -product-name }.
fxa-unsub-blurb =
    Bạn sẽ không còn nhận được thông báo từ { -product-name }.
    { -brand-fxa } của bạn sẽ vẫn hoạt động và bạn có thể nhận được
    các liên lạc khác liên quan đến tài khoản.
unsub-survey-form-label = Tại sao bạn hủy đăng ký nhận thông báo { -product-name-nowrap }?
unsub-reason-1 = Tôi nghĩ rằng cảnh báo đó không làm cho dữ liệu của tôi an toàn hơn
unsub-reason-2 = Tôi nhận được quá nhiều email từ { -product-name-nowrap }
unsub-reason-3 = Tôi không tìm thấy nhiều giá trị của dịch vụ
unsub-reason-4 = Tôi đã thực hiện các bước để bảo vệ tài khoản của mình
unsub-reason-5 = Tôi đang sử dụng dịch vụ khác để theo dõi tài khoản của mình
unsub-reason-6 = Không có cái nào ở trên
unsub-survey-thankyou = Cảm ơn phản hồi của bạn.
unsub-survey-error = Vui lòng chọn một.
unsub-survey-headline-v2 = Bạn đã hủy đăng ký.
unsub-survey-blurb-v2 =
    Bạn sẽ không còn nhận được thông báo { -product-name } nữa.
    Bạn có thể dành một chút thời gian để trả lời câu hỏi về kinh nghiệm của bạn không?
unsub-survey-button = Gửi phiên bản
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Chia sẻ
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Tải về { -brand-Quantum }
download-firefox-mobile = Tải về { -brand-name } cho điện thoại
# Features here refers to Firefox browser features. 
features = Tính năng
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Phiên bản Beta, Nightly, nhà phát triển
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
mozilla-security-blog = Blog bảo mật { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Xã hội
show-all = Hiện tất cả
fxa-landing-blurb =
    Tìm hiểu những gì tin tặc đã biết về bạn,
    và tìm hiểu cách để đi trước họ một bước.
fxa-scan-label = Hãy xem nếu bạn đã xuất hiện trong một vi phạm dữ liệu.
fxa-welcome-headline = Chào mừng bạn đến với { -product-name }.
fxa-welcome-blurb = Bạn đã cài đặt tất cả để nhận thông báo nếu { $userEmail } xuất hiện vi phạm dữ liệu.
fxa-scan-another-email = Bạn muốn kiểm tra một email khác?
# Search Firefox Monitor
fxa-scan-submit = Tìm kiếm { -product-name }
sign-up-to-check = Đăng ký để kiểm tra
sign-in = Đăng nhập
sign-out = Đăng xuất
full-report-headline = Báo cáo { -product-name } của bạn
see-full-report = Xem báo cáo đầy đủ
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Quản lý { -brand-fxa }
fxa-download-firefox-bar-blurb = Mang lại cho bạn bởi { -brand-name }. Nhanh gấp 2 lần. Sử dụng bộ nhớ ít hơn 30% so với { -brand-Chrome }.
fxa-download-firefox-bar-link = Tải xuống ngay
fxa-download-firefox-banner-blurb = Tải trang tốt hơn, nhanh hơn, sử dụng bộ nhớ máy tính ít hơn.
user-fb-compromised-headline = { $userEmail } đã xuất hiện trong vi phạm dữ liệu { $breachName }.
guest-fb-compromised-headline = Email này đã xuất hiện trong vi phạm dữ liệu { $breachName }.
user-zero-breaches-headline = { $userEmail } không xuất hiện trong các vi phạm dữ liệu.
guest-zero-breaches-headline = Email này không xuất hiện trong các vi phạm dữ liệu.
user-scan-results-headline =
    { $breachCount ->
       *[other] { $userEmail } đã xuất hiện trong { $breachCount } vi phạm dữ liệu.
    }
guest-scan-results-headline =
    { $breachCount ->
       *[other] Email này xuất hiện trong { $breachCount } vi phạm dữ liệu.
    }
user-no-breaches-blurb = Chúng tôi sẽ thông báo cho bạn nếu địa chỉ email này xuất hiện vi phạm mới.
guest-no-breaches-blurb =
    Để xem email này có xuất hiện trong các vi phạm nhạy cảm hay không, hãy tạo { -brand-fxa }.
    Chúng tôi cũng sẽ cảnh báo bạn nếu địa chỉ này xuất hiện trong các vi phạm dữ liệu mới.
user-one-breach-blurb = Vi phạm này đã tiết lộ thông tin cá nhân sau đây.
user-fb-compromised-blurb =
    { $breachCount ->
       *[other] Email của bạn cũng xuất hiện trong { $breachCount } vi phạm khác.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
       *[other] Email này cũng xuất hiện trong { $breachCount } vi phạm khác.
    }
user-fb-compromised-single =
    Vi phạm này đã tiết lộ thông tin cá nhân sau đây. Nếu bạn chưa có,
    thay đổi mật khẩu của bạn
user-generic-fb-compromised-single = Vi phạm này đã tiết lộ thông tin cá nhân sau đây.
guest-fb-compromised-single-v2 =
    Vi phạm này đã tiết lộ thông tin cá nhân sau đây.
    Tạo { -brand-fxa } miễn phí cho báo cáo đầy đủ về các vi phạm trong quá khứ, cảnh báo vi phạm mới,
    và thông tin về các dịch vụ { -brand-Mozilla } khác.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
       *[other]
            Email này cũng xuất hiện trong { $breachCount } vi phạm khác. Tạo một
            { -brand-fxa } miễn phí cho báo cáo đầy đủ về các vi phạm trong quá khứ, cảnh báo vi phạm mới,
            và thông tin về các dịch vụ khác của { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] Dữ liệu của bạn không vi phạm ở { $breachName }, nhưng chúng tôi đã tìm thấy địa chỉ email đó ở nơi khác.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] Email này không nằm trong vi phạm { $breachName }, nhưng được tìm thấy ở những nơi khác.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
       *[other]
            Email này không nằm trong vi phạm ở { $breachName }, nhưng được tìm thấy ở những nơi khác.
            Tạo { -brand-fxa } miễn phí cho báo cáo đầy đủ về các vi phạm trong quá khứ của bạn,
            cảnh báo vi phạm mới và thông tin về các dịch vụ khác của { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
       *[other] Những vi phạm tiếp xúc với thông tin cá nhân sau đây. Nếu bạn chưa có, hãy thay đổi mật khẩu của bạn.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
       *[other] Những vi phạm tiếp xúc với thông tin cá nhân sau đây.
    }
have-an-account = Đã có một tài khoản?
signup-banner-sensitive-blurb =
    Tìm hiểu những gì tin tặc đã biết về bạn và tìm hiểu cách
    đi trước họ một bước. Được cảnh báo nếu tài khoản của bạn xuất hiện
    trong các vi phạm dữ liệu mới.
fxa-pwt-section-blurb =
    Mật khẩu bảo vệ tất cả các thông tin cá nhân trong tài khoản trực tuyến của bạn. Và
    tin tặc dựa vào những thói quen xấu, như sử dụng cùng một mật khẩu ở mọi nơi hoặc sử dụng
    cụm từ phổ biến (@p@ssw0rd, anyone?) để nếu họ hack một tài khoản, họ sẽ
    có thể hack nhiều.
fxa-pwt-summary-2 =
    Mật khẩu ngắn, một từ dễ dàng cho tin tặc đoán.
    Sử dụng ít nhất hai từ và kết hợp các chữ cái, chữ số và ký tự đặc biệt.
fxa-pwt-summary-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden lưu trữ của bạn
    mật khẩu và điền chúng vào các trang web cho bạn. Họ thậm chí còn giúp bạn tạo mật khẩu mạnh.
fxa-pwt-summary-6 =
    Vi phạm dữ liệu đang gia tăng. Nếu thông tin cá nhân của bạn xuất hiện trong một vi phạm dữ liệu mới,
    { -product-name } gửi cho bạn một cảnh báo - để bạn có thể thực hiện hành động và bảo vệ tài khoản của mình.
fxa-what-to-do-blurb-1 =
    Nếu bạn không thể đăng nhập, hãy liên hệ với trang web để hỏi cách cập nhật.
    Xem một tài khoản mà bạn không nhận ra? Dữ liệu của bạn có thể đã được bán
    hoặc phân phối lại. Đây cũng có thể là một tài khoản bạn quên bạn
    tạo ra hoặc một công ty thay đổi tên.
fxa-what-to-do-subhead-2 = Ngừng sử dụng mật khẩu bị lộ và thay đổi nó ở mọi nơi bạn đã sử dụng nó.
fxa-wtd-blurb-2 =
    Tin tặc có thể cố gắng sử dụng cùng một mật khẩu và email của bạn để vào các tài khoản khác.
    Tạo một mật khẩu khác nhau và duy nhất cho mọi tài khoản, đặc biệt là cho tài khoản ngân hàng của bạn,
    email và các trang web khác nơi bạn lưu thông tin cá nhân.
fxa-what-to-do-blurb-3 =
    Hầu hết các vi phạm chỉ để lộ email và mật khẩu, nhưng một số bao gồm thông tin tài chính nhạy cảm.
    Nếu tài khoản ngân hàng hoặc số thẻ tín dụng của bạn bị lộ, hãy báo cho ngân hàng của bạn biết có thể xảy ra gian lận.
    Giám sát báo cáo cho các khoản phí mà bạn không nhận ra.
fxa-what-to-do-subhead-4 = Nhận trợ giúp ghi nhớ tất cả mật khẩu của bạn và giữ chúng an toàn.
fxa-what-to-do-blurb-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden lưu trữ của bạn
    mật khẩu an toàn và điền chúng vào các trang web cho bạn. Sử dụng trình quản lý mật khẩu
    trên điện thoại và máy tính của bạn để bạn không phải nhớ tất cả.
fb-landing-headline = Thông tin của bạn có bị lộ trong vi phạm dữ liệu { $breachName } không?
copyright = Các phần của nội dung này © 1999-{ $year } bởi những người đóng góp mozilla.org cá nhân.
content-available = Nội dung có sẵn theo giấy phép Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Đăng ký để nhận thông báo
sign-up-for-fxa-alerts = Đăng ký thông báo { -product-name }.
create-free-account =
    Tạo { -brand-fxa } miễn phí cho báo cáo đầy đủ về các vi phạm trong quá khứ, thông báo
    vi phạm mới và thông tin về các dịch vụ { -brand-Mozilla } khác.
get-your-report-and-sign-up = Nhận báo cáo của bạn và đăng ký thông báo.
# Link title
frequently-asked-questions = Các câu hỏi thường gặp
about-firefox-monitor = Giới thiệu về { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Tùy chỉnh
# Link title.
home = Trang chủ
# Link title
breaches = Vi phạm
# Link title
security-tips = Mẹo về bảo mật
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Mở điều hướng { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = VI PHẠM MỚI NHẤT ĐƯỢC THÊM
# Link title
more-about-this-breach = Thông tin thêm về vi phạm này
take-control = Lấy lại quyền kiểm soát dữ liệu cá nhân của bạn.
cant-stop-hackers = Bạn không thể ngăn chặn tin tặc đánh cắp. Nhưng bạn có thể tránh những thói quen xấu khiến công việc của họ trở nên khó khăn hơn.
read-more-tips = Đọc thêm về mẹo bảo mật
how-hackers-work = Hiểu cách thức hoạt động của tin tặc
monitor-your-online-accounts = Đăng ký để theo dõi vi phạm với { -brand-fxa }
stay-alert = Cảnh giác với những vi phạm mới
if-your-info = Nếu thông tin của bạn xuất hiện trong một vi phạm dữ liệu mới, chúng tôi sẽ gửi cho bạn một thông báo.
search-all-emails = Tìm kiếm tất cả các địa chỉ email của bạn có trong vi phạm và nhận thông báo về các mối đe dọa mới.
monitor-several-emails = Giám sát một số email
take-action = Hãy hành động để bảo vệ tài khoản của bạn
keep-your-data-safe = Tìm hiểu những gì bạn cần làm để giữ an toàn cho dữ liệu của bạn khỏi tội phạm mạng.
website-breach = Trang web vi phạm
sensitive-breach = Trang web vi phạm nhạy cảm
data-aggregator-breach = Vi phạm tập hợp dữ liệu
unverified-breach = Vi phạm chưa được xác minh
spam-list-breach = Vi phạm danh sách thư rác
website-breach-plural = Vi phạm trang web
sensitive-breach-plural = Vi phạm nhạy cảm
data-aggregator-breach-plural = Vi phạm tập hợp dữ liệu
unverified-breach-plural = Vi phạm chưa được xác minh
spam-list-breach-plural = Vi phạm danh sách thư rác
what-data = Dữ liệu nào đã bị xâm phạm:
sensitive-sites = Làm thế nào để { -product-name } xử lý các trang web nhạy cảm?
sensitive-sites-copy =
    { -product-name } chỉ tiết lộ các tài khoản được liên kết với những
    các loại vi phạm sau khi một địa chỉ email đã được xác minh. Điều này có nghĩa là
    chỉ bạn có thể xem thông tin của bạn có vi phạm hay không (trừ khi có ai đó
    có quyền truy cập vào tài khoản email của bạn.)
delayed-reporting-headline = Tại sao phải mất quá lâu để báo cáo vi phạm này?
delayed-reporting-copy =
    Đôi khi có thể mất vài tháng hoặc nhiều năm để thông tin đăng nhập trong một
    vi phạm dữ liệu để xuất hiện trên web tối. Vi phạm sẽ được thêm vào cơ sở
    dữ liệu của chúng tôi ngay khi chúng được phát hiện và xác minh.
about-fxm-headline = Giới thiệu về { -product-name }
about-fxm-blurb =
    { -product-name } cảnh báo nếu tài khoản trực tuyến của bạn có liên quan đến vi phạm
    dữ liệu. Tìm hiểu xem bạn đã vi phạm dữ liệu chưa, nhận thông báo về các vi phạm mới,
    và thực hiện các bước để bảo vệ tài khoản trực tuyến của bạn. { -product-name } được
    cung cấp bởi { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } cảnh báo bạn nếu địa chỉ email của bạn bị lộ trong một
    vi phạm dữ liệu trực tuyến. Xem thông tin của bạn đã được tiết lộ, tìm hiểu
    làm thế nào để bảo vệ tốt hơn các tài khoản trực tuyến của bạn và được
    cảnh báo nếu địa chỉ email của bạn xuất hiện trong một vi phạm mới.
# How Firefox Monitor works
how-fxm-works = Cách { -product-name } hoạt động
how-fxm-1-headline = Tiến hành tìm kiếm cơ bản
how-fxm-1-blurb =
    Tìm kiếm địa chỉ email của bạn trong các vi phạm dữ liệu công khai trở lại
    năm 2007. Tìm kiếm cơ bản này sẽ hiển thị hầu hết các vi phạm dữ liệu,
    nhưng không phải là các địa chỉ có chứa thông tin cá nhân nhạy cảm.
how-fxm-2-headline = Đăng ký giám sát vi phạm
how-fxm-2-blurb =
    Tạo { -brand-fxa } để theo dõi email của bạn đối với các vi phạm đang diễn ra.
    Sau khi bạn xác minh email của mình, bạn cũng sẽ nhận được báo cáo đầy đủ
    về các vi phạm trong quá khứ bao gồm các vi phạm nhạy cảm.
how-fxm-3-headline = Nhận thông báo trong trình duyệt của bạn
how-fxm-3-blurb =
    Nếu bạn sử dụng { -brand-name }, bạn sẽ nhận được thông báo nếu bạn
    truy cập vào trang web mà bị vi phạm. Tìm ra ngay lập tức nếu bạn đã
    vi phạm và những gì bạn có thể làm về nó.
wtd-after-website = Phải làm gì sau khi phát hiện vi phạm trang web
wtd-after-data-agg = Phải làm gì sau khi phát hiện vi phạm tổng hợp dữ liệu
what-is-data-agg = Tập hợp dữ liệu là gì?
what-is-data-agg-blurb =
    Tập hợp dữ liệu hoặc môi giới dữ liệu, thu thập thông tin từ hồ sơ công chúng và mua
    nó từ các công ty khác. Họ biên dịch dữ liệu này để bán cho các công ty cho mục đích
    tiếp thị. Nạn nhân của những vi phạm này ít có khả năng gặp phải vấn đề tài chính
    lừa đảo, nhưng tin tặc có thể sử dụng dữ liệu này để mạo danh hồ sơ.
protect-your-privacy = Bảo vệ quyền riêng tư trực tuyến của bạn
no-pw-to-change = Không giống như vi phạm trang web, không có mật khẩu để thay đổi.
avoid-personal-info = Tránh sử dụng thông tin cá nhân trong mật khẩu
avoid-personal-info-blurb = Nó dễ dàng tìm thấy ngày sinh nhật, địa chỉ và tên thành viên gia đình trực tuyến. Giữ nó ra khỏi mật khẩu của bạn.

## What to do after data breach tips

change-pw = Thay đổi mật khẩu của bạn
even-for-old = Ngay cả đối với các tài khoản cũ, điều quan trọng là cập nhật mật khẩu của bạn.
make-new-pw-unique = Làm cho mật khẩu mới khác biệt
strength-of-your-pw = Độ mạnh của mật khẩu của bạn ảnh hưởng trực tiếp đến bảo mật trực tuyến của bạn.
create-strong-passwords = Cách tạo mật khẩu mạnh
stop-reusing-pw = Ngừng sử dụng lại mật khẩu cũ
create-unique-pw = Tạo mật khẩu độc đáo và lưu chúng ở nơi an toàn, như trình quản lý mật khẩu.
five-myths = 5 huyền thoại về trình quản lý mật khẩu
create-a-fxa = Tạo { -brand-fxa } để được báo cáo đầy đủ về các vi phạm của bạn và để nhận thông báo.
feat-security-tips = Mẹo về bảo mật để bảo vệ tài khoản của bạn
feat-sensitive = Tìm kiếm nâng cao trong các vi phạm nhạy cảm
feat-enroll-multiple = Đăng ký nhiều email theo dõi vi phạm
sign-up-for-fxa = Đăng ký { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
       *[other] Xuất hiện trong { $breachCount } vi phạm đã biết.
    }
see-if-breached = Hãy xem nếu bạn đã bị vi phạm dữ liệu trực tuyến.
check-for-breaches = Kiểm tra vi phạm
find-out-what-hackers-know = Tìm hiểu những gì tin tặc đã biết về bạn. Tìm hiểu làm thế nào để đi trước họ một bước.
search-for-your-email = Tìm kiếm địa chỉ email của bạn trong các vi phạm dữ liệu công khai từ năm 2007.
back-to-top = Về đầu trang
comm-opt-0 = Gửi email cho tôi nếu một trong những địa chỉ email của tôi dưới đây xuất hiện vi phạm dữ liệu.
comm-opt-1 = Gửi tất cả các thông báo vi phạm đến { $primaryEmail }.
stop-monitoring-this = Dừng theo dõi email này.
resend-verification = Gửi lại email xác minh
add-new-email = Thêm một địa chỉ email mới
send-verification = Gửi liên kết xác minh
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Truyền thông toàn cầu
breach-summary = Tóm tắt vi phạm
show-breaches-for-this-email = Hiển thị tất cả các vi phạm cho email này.
link-change-primary = Thay đổi địa chỉ email chính
remove-fxm = Xóa { -product-name }
remove-fxm-blurb =
    Tắt cảnh báo { -product-name }. { -brand-fxa } của bạn sẽ vẫn hoạt động và bạn có thể nhận được
    thông tin liên lạc liên quan đến tài khoản khác.
manage-email-addresses = Quản lý địa chỉ email
latest-breach-link = Hãy xem nếu bạn đã bị vi phạm
welcome-back = Chào mừng trở lại, { $userName }!
welcome-user = Chào mừng, { $userName }!
breach-alert-subject = { -product-name } đã tìm thấy email của bạn trong một vi phạm dữ liệu mới.
your-info-was-discovered-headline = Thông tin của bạn đã được phát hiện trong một vi phạm dữ liệu mới.
your-info-was-discovered-blurb =
    Bạn đã đăng ký để nhận thông báo { -product-name } khi
    email của bạn xuất hiện vi phạm dữ liệu. Đây là những gì chúng ta biết về vi phạm này.
what-to-do-after-breach = Phải làm gì sau khi bị vi phạm dữ liệu
ba-next-step-1 = Thay đổi mật khẩu của bạn thành một mật khẩu mạnh, độc đáo.
ba-next-step-blurb-1 =
    Mật khẩu mạnh sử dụng kết hợp chữ hoa và chữ thường,
    ký tự đặc biệt, và số. Nó không chứa thông tin cá nhân
    như địa chỉ, ngày sinh hoặc tên gia đình của bạn.
ba-next-step-2 = Ngừng sử dụng mật khẩu đã bị lộ hoàn toàn.
ba-next-step-blurb-2 =
    Tội phạm mạng có thể tìm thấy mật khẩu của bạn trên web tối và sử dụng
    nó để đăng nhập vào tài khoản khác của bạn. Cách tốt nhất để bảo vệ
    tài khoản của bạn là sử dụng mật khẩu duy nhất cho mỗi người.
ba-next-step-3 = Nhận trợ giúp tạo mật khẩu tốt hơn và giữ chúng an toàn.
ba-next-step-blurb-3 =
    Sử dụng trình quản lý mật khẩu để tạo mật khẩu mạnh, độc đáo. Quản lý mật khẩu lưu trữ an toàn
    tất cả các đăng nhập của bạn để bạn có thể truy cập chúng trên tất cả các thiết bị của bạn.
faq1 = Tôi không nhận ra công ty hoặc trang web này. Tại sao tôi ở trong vi phạm?
faq2 = Tại sao phải mất quá lâu để thông báo cho tôi về vi phạm này?
faq3 = Làm cách nào để biết đây là một email hợp pháp từ { -product-name }?
new-breaches-found =
    { $breachCount ->
       *[other] ĐÃ TÌM THẤY { $breachCount } VI PHẠM MỚI
    }
sign-up-headline-1 = Nhận thông báo liên tục với { -brand-fxa }.
account-not-required = Không yêu cầu trình duyệt { -brand-name } cho { -brand-fxa }. Bạn có thể nhận thông tin về các dịch vụ { -brand-Mozilla }.
get-alerted = Nhận thông báo về các vi phạm mới.
was-your-info-exposed = Thông tin của bạn có bị lộ trong vi phạm dữ liệu { $breachName } không?
find-out-if = Tìm hiểu xem nếu dữ liệu của bạn đã bị lộ trong vi phạm này.
fb-not-comp = Email này không xuất hiện trong vi phạm { $breachName }.
other-breaches-found =
    { $breachCount ->
       *[other] Tuy nhiên, nó đã xuất hiện trong { $breachCount } vi phạm khác.
    }
fb-comp-only = Email này đã xuất hiện trong vi phạm { $breachName }.
fb-comp-and-others =
    { $breachCount ->
       *[other] Email này xuất hiện trong { $breachCount } vi phạm dữ liệu đã biết, bao gồm { $breachName }.
    }
no-other-breaches-found = Không có vi phạm khác được tìm thấy từ tìm kiếm cơ bản.
no-results-blurb = Xin lỗi, vi phạm đó không có trong cơ sở dữ liệu của chúng tôi.
all-breaches-headline = Tất cả các vi phạm trong { -product-name }
search-breaches = Tìm kiếm vi phạm
# "Appears in-page as: Showing: All Breaches"
currently-showing = Hiển thị:
all-breaches = Tất cả vi phạm

## Updated error messages

error-bot-headline = Tìm kiếm đã tạm thời hoãn
error-bot-blurb =
    Chúng tôi lo lắng bạn có thể là một rô-bốt vì bạn đã tìm kiếm
    một số địa chỉ email trong một khoảng thời gian ngắn. Hiện tại,
    bạn đã bị chặn từ các tìm kiếm mới. Bạn có thể thử lại sau.
error-csrf-headline = Phiên đã kết thúc
error-csrf-blurb = Chọn nút quay lại trình duyệt của bạn, tải lại trang và thử lại.
error-invalid-unsub = Cách hủy đăng ký thông báo { -product-name }
error-invalid-unsub-blurb =
    Bạn cần hủy đăng ký từ một trong những email mà { -product-name }
    đã gửi cho bạn. Kiểm tra hộp thư đến của bạn để tìm thư được gửi từ
    { -brand-team-email }. Chọn liên kết hủy đăng ký ở dưới cùng của email.
login-link-pre = Đã có một tài khoản?
login-link = Đăng nhập
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] Địa chỉ email đang được giám sát
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
       *[other] Vi phạm dữ liệu đã tiết lộ thông tin của bạn
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] Mật khẩu được phơi bày trên tất cả các vi phạm
    }
# Button
see-additional-breaches = Xem các vi phạm bổ sung
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Xem tất cả vi phạm
scan-results-known-breaches =
    { $breachCount ->
       *[other] Email này xuất hiện trong { $breachCount } vi phạm dữ liệu đã biết.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Kết quả cho: { $userEmail }
other-monitored-emails = Email được giám sát khác
email-verification-required = Yêu cầu xác minh email
fxa-primary-email = { -brand-fxa } Email - Chính
what-is-a-website-breach = Trang web vi phạm là gì?
website-breach-blurb = Vi phạm dữ liệu trang web xảy ra khi tội phạm mạng ăn cắp, sao chép hoặc tiết lộ thông tin cá nhân từ tài khoản trực tuyến. Nó thường là kết quả của tin tặc tìm thấy một điểm yếu trong bảo mật của trang web. Vi phạm cũng có thể xảy ra khi thông tin tài khoản bị rò rỉ do lỗi kỹ thuật.
security-tips-headline = Mẹo về bảo mật để bảo vệ bạn khỏi tin tặc
steps-to-protect = Các bước cần thực hiện để bảo vệ danh tính trực tuyến của bạn
take-further-steps = Thực hiện các bước tiếp theo để bảo vệ danh tính của bạn
alert-about-new-breaches = Thông báo cho tôi về những vi phạm mới
see-if-youve-been-part = Hãy xem nếu bạn đã từng là một phần của vi phạm dữ liệu trực tuyến.
get-ongoing-breach-monitoring = Nhận giám sát các vi phạm liên tục cho nhiều địa chỉ email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Kiểm tra
new-unsub-error = Bạn cần hủy đăng ký một trong những email mà { -product-name } đã gửi.
other-known-breaches-found =
    { $breachCount ->
       *[other] Tuy nhiên, nó đã xuất hiện trong { $breachCount } vi phạm đã biết khác.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Thông tin bổ sung, bao gồm:
# Title
email-addresses-title = Địa chỉ email
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = Vào lúc { $breachDate }, { $breachTitle } đã vi phạm. Khi vi phạm được phát hiện và xác minh, nó đã được thêm vào cơ sở dữ liệu của chúng tôi vào { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Tùy chỉnh { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Đã đăng nhập với: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Lọc theo danh mục:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Gửi thông báo vi phạm đến địa chỉ email bị ảnh hưởng
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Đây là một cách để bảo vệ sự riêng tư của bạn. Tham gia { -brand-name }.
# Link title
learn-more-link = Tìm hiểu thêm.
email-sent = Đã gửi email!
# Form title
want-to-add = Bạn muốn thêm một email khác?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Liên kết xác minh được gửi tới { $userEmail } để thêm liên kết vào { -product-name }.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Quản lý tất cả các địa chỉ email trong { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Thông báo vi phạm
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Vi phạm đã được thêm:
