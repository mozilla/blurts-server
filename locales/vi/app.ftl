# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Tài khoản Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Bạn đang cố quét quá nhiều địa chỉ email trong một khoảng thời gian ngắn. Vì lý do bảo mật, chúng tôi đã tạm thời chặn bạn khỏi các tìm kiếm mới. Bạn có thể thử lại sau.
error-could-not-add-email = Không thể thêm địa chỉ email vào cơ sở dữ liệu.
error-not-subscribed = Địa chỉ email này không được đăng ký với { -product-name }.
error-hibp-throttled = Quá nhiều kết nối đến { -brand-HIBP }.
error-hibp-connect = Lỗi kết nối đến { -brand-HIBP }.
error-hibp-load-breaches = Không thể tải các rò rỉ dữ liệu.
error-must-be-signed-in = Bạn phải đăng nhập vào { -brand-fxa } của bạn.
error-to-finish-verifying = Để hoàn tất xác minh email này cho { -product-name }, bạn phải đăng nhập dưới email tài khoản chính của mình.
home-title = { -product-name }
home-not-found = Không tìm thấy trang.
oauth-invalid-session = Phiên không hợp lệ
scan-title = { -product-name }: Kết quả quét
user-add-invalid-email = Email không hợp lệ
user-add-too-many-emails = Bạn đã thêm tối đa số lượng địa chỉ email để theo dõi.
user-add-email-verify-subject = Xác nhận đăng ký của bạn với { -product-name }.
user-add-duplicate-email = Email này đã được thêm vào { -product-name } trước đó.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Truy cập { $preferencesLink } của bạn để kiểm tra trạng thái của { $userEmail }.
user-add-verification-email-just-sent = Bạn đã yêu cầu email xác minh khác quá nhanh. Vui lòng thử lại sau.
user-add-unknown-error = Đã xảy ra lỗi khi thêm địa chỉ email khác. Vui lòng thử lại sau.
user-delete-unknown-error = Đã xảy ra lỗi khi xóa địa chỉ email. Vui lòng thử lại sau.
error-headline = Lỗi
user-verify-token-error = Token xác minh được yêu cầu.
user-verify-email-report-subject = Báo cáo của { -product-name } gửi của bạn
user-unsubscribe-token-error = Hủy đăng ký yêu cầu token.
user-unsubscribe-token-email-error = Hủy đăng ký yêu cầu token và emailHash.
user-unsubscribe-title = { -product-name }: Hủy đăng ký
pwt-section-headline = Mật khẩu mạnh hơn = Bảo ​​vệ tốt hơn
landing-headline = Quyền được an toàn của bạn khỏi tin tặc bắt đầu từ đây.
scan-placeholder = Nhập địa chỉ email
scan-submit = Tìm kiếm email của bạn
scan-error = Yêu cầu một email hợp lệ.
download-firefox-banner-button = Tải về { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Đã gửi!
sign-up = Đăng ký
form-signup-error = Yêu cầu một email hợp lệ
# breach-date = the calendar date a particular data theft occurred.
breach-date = Ngày xảy ra rò rỉ:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Tài khoản bị xâm phạm:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dữ liệu bị xâm phạm:
unsub-headline = Hủy đăng ký từ { -product-name-nowrap }
unsub-blurb = Điều này sẽ xóa email của bạn khỏi danh sách { -product-name-nowrap } và bạn sẽ không còn nhận được thông báo khi rò rỉ mới được công bố.
unsub-button = Hủy đăng ký
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Dữ liệu các vụ rò rỉ được cung cấp bởi { $hibp-link }
share-twitter = Hầu hết mọi người có khoảng 100 tài khoản trực tuyến. Có ai trong số bạn đã bị lộ trong một rò rỉ dữ liệu? Tìm hiểu nó.
share-facebook-headline = Tìm xem nếu bạn đã từng là một phần của rò rỉ dữ liệu
share-facebook-blurb = Các tài khoản trực tuyến của bạn đã bị lộ trong một phần của rò rỉ dữ liệu không?
og-site-description = Tìm hiểu xem bạn có phải ở trong một phần của rò rỉ dữ liệu không với { -product-name }. Đăng ký nhận thông báo về các rò rỉ dữ liệu trong tương lai và nhận các mẹo để giữ an toàn cho tài khoản của bạn.
show-all = Hiện tất cả
fxa-scan-another-email = Bạn muốn kiểm tra một email khác?
sign-out = Đăng xuất
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Quản lý { -brand-fxa }
have-an-account = Đã có một tài khoản?
fxa-pwt-summary-2 =
    Mật khẩu ngắn, một từ dễ dàng cho tin tặc đoán.
    Sử dụng ít nhất hai từ và kết hợp các chữ cái, chữ số và ký tự đặc biệt.
fxa-pwt-summary-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden lưu trữ của bạn
    mật khẩu và điền chúng vào các trang web cho bạn. Họ thậm chí còn giúp bạn tạo mật khẩu mạnh.
fxa-pwt-summary-6 =
    Các vụ rò rỉ dữ liệu đang gia tăng. Nếu thông tin cá nhân của bạn xuất hiện trong một rò rỉ dữ liệu mới,
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
    Hầu hết các rò rỉ dữ liệu chỉ để lộ email và mật khẩu, nhưng một số bao gồm thông tin tài chính nhạy cảm.
    Nếu tài khoản ngân hàng hoặc số thẻ tín dụng của bạn bị lộ, hãy báo cho ngân hàng của bạn biết có thể xảy ra gian lận.
    Giám sát báo cáo cho các khoản phí mà bạn không nhận ra.
fxa-what-to-do-subhead-4 = Nhận trợ giúp ghi nhớ tất cả mật khẩu của bạn và giữ chúng an toàn.
fxa-what-to-do-blurb-4 =
    Các trình quản lý mật khẩu như 1Password, LastPass, Dashlane và Bitwarden lưu trữ của bạn
    mật khẩu an toàn và điền chúng vào các trang web cho bạn. Sử dụng trình quản lý mật khẩu
    trên điện thoại và máy tính của bạn để bạn không phải nhớ tất cả.
# Alerts is a noun
sign-up-for-alerts = Đăng ký để nhận thông báo
# Link title
frequently-asked-questions = Các câu hỏi thường gặp
about-firefox-monitor = Giới thiệu về { -product-name }
# Link title
preferences = Tùy chỉnh
# Link title
home = Trang chủ
# Link title
security-tips = Mẹo về bảo mật
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Mở điều hướng { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = RÒ RỈ DỮ LIỆU MỚI NHẤT ĐƯỢC THÊM
# Link title
more-about-this-breach = Thông tin thêm về rò rỉ này
take-control = Lấy lại quyền kiểm soát dữ liệu cá nhân của bạn.
cant-stop-hackers = Bạn không thể ngăn chặn tin tặc đánh cắp. Nhưng bạn có thể tránh những thói quen xấu khiến công việc của họ trở nên khó khăn hơn.
read-more-tips = Đọc thêm về mẹo bảo mật
how-hackers-work = Tìm hiểu cách thức hoạt động của tin tặc
monitor-your-online-accounts = Đăng ký để theo dõi rò rỉ dữ liệu với { -brand-fxa }
stay-alert = Cảnh giác với những rò rỉ mới
if-your-info = Nếu thông tin của bạn xuất hiện trong một rò rỉ dữ liệu mới, chúng tôi sẽ gửi cho bạn một thông báo.
search-all-emails = Tìm kiếm tất cả các địa chỉ email của bạn có trong rò rỉ dữ liệu và nhận thông báo về các mối đe dọa mới.
monitor-several-emails = Giám sát một số email
take-action = Hãy hành động để bảo vệ tài khoản của bạn
keep-your-data-safe = Tìm hiểu những gì bạn cần làm để giữ an toàn cho dữ liệu của bạn khỏi tội phạm mạng.
website-breach = Trang web rò rỉ dữ liệu
sensitive-breach = Trang web rò rỉ dữ liệu nhạy cảm
data-aggregator-breach = Rò rỉ tập hợp dữ liệu
unverified-breach = Rò rỉ chưa được xác minh
spam-list-breach = Rò rỉ danh sách thư rác
website-breach-plural = Rò rỉ trang web
sensitive-breach-plural = Rò rỉ nhạy cảm
data-aggregator-breach-plural = Rò rỉ tập hợp dữ liệu
unverified-breach-plural = Rò rỉ chưa được xác minh
spam-list-breach-plural = Rò rỉ danh sách thư rác
what-data = Dữ liệu nào đã bị xâm phạm:
sensitive-sites = Làm thế nào để { -product-name } xử lý các trang web nhạy cảm?
sensitive-sites-copy =
    { -product-name } chỉ tiết lộ các tài khoản được liên kết với những
    các loại rò rỉ sau khi một địa chỉ email đã được xác minh. Điều này có nghĩa là
    chỉ bạn có thể xem thông tin của bạn có bị rò rỉ hay không (trừ khi có ai đó
    có quyền truy cập vào tài khoản email của bạn.)
delayed-reporting-headline = Tại sao phải mất rất lâu để báo cáo rò rỉ này?
delayed-reporting-copy =
    Đôi khi có thể mất vài tháng hoặc vài năm để thông tin đăng nhập trong một
    rò rỉ dữ liệu để xuất hiện trên dark web. Dữ liệu rò rỉ sẽ được thêm vào cơ sở
    dữ liệu của chúng tôi ngay khi chúng được phát hiện và xác minh.
about-fxm-headline = Giới thiệu về { -product-name }
about-fxm-blurb =
    { -product-name } cảnh báo nếu tài khoản trực tuyến của bạn có liên quan đến rò rỉ 
    dữ liệu. Tìm hiểu xem bạn đã bị rò rỉ dữ liệu chưa, nhận thông báo về các rò rỉ mới,
    và thực hiện các bước để bảo vệ tài khoản trực tuyến của bạn. { -product-name } được
    cung cấp bởi { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } cảnh báo bạn nếu địa chỉ email của bạn bị lộ trong một
    rò rỉ dữ liệu trực tuyến. Nếu thông tin của bạn đã bị tiết lộ, tìm hiểu
    làm thế nào để bảo vệ tốt hơn các tài khoản trực tuyến của bạn và được
    cảnh báo nếu địa chỉ email của bạn xuất hiện trong rò rỉ dữ liệu mới.
# How Firefox Monitor works
how-fxm-works = Cách { -product-name } hoạt động
how-fxm-1-headline = Tiến hành tìm kiếm cơ bản
how-fxm-1-blurb =
    Tìm kiếm địa chỉ email của bạn trong các rò rỉ dữ liệu công khai từ năm 2007.
    Tìm kiếm cơ bản này sẽ hiển thị hầu hết các rò rỉ dữ liệu,
    nhưng không phải là các địa chỉ có chứa thông tin cá nhân nhạy cảm.
how-fxm-2-headline = Đăng ký giám sát vụ rò rỉ
how-fxm-2-blurb =
    Tạo { -brand-fxa } để theo dõi email của bạn đối với các rò rỉ đang diễn ra.
    Sau khi bạn xác minh email của mình, bạn cũng sẽ nhận được báo cáo đầy đủ
    về các rò rỉ dữ liệu trong quá khứ bao gồm các rò rỉ dữ liệu nhạy cảm.
how-fxm-3-headline = Nhận thông báo trong trình duyệt của bạn
how-fxm-3-blurb =
    Nếu bạn sử dụng { -brand-name }, bạn sẽ nhận được thông báo nếu
    bạn truy cập vào trang web mà bị rò rỉ dữ liệu. Tìm ra ngay lập tức
    nếu bạn đã bị rò rỉ dữ liệu và những gì bạn có thể làm về nó.
wtd-after-website = Phải làm gì sau khi phát hiện trang web bị rò rỉ
wtd-after-data-agg = Phải làm gì sau khi phát hiện một tổng hợp dữ liệu bị rò rỉ
what-is-data-agg = Tập hợp dữ liệu là gì?
what-is-data-agg-blurb =
    Tập hợp dữ liệu hoặc môi giới dữ liệu, thu thập thông tin từ hồ sơ công chúng và mua
    nó từ các công ty khác. Họ biên dịch dữ liệu này để bán cho các công ty cho mục đích
    tiếp thị. Nạn nhân của những vụ rò rỉ này ít có khả năng gặp phải vấn đề tài chính
    lừa đảo, nhưng tin tặc có thể sử dụng dữ liệu này để mạo danh hồ sơ.
protect-your-privacy = Bảo vệ quyền riêng tư trực tuyến của bạn
no-pw-to-change = Không giống như trang web bị rò rỉ, không có mật khẩu để thay đổi.
avoid-personal-info = Tránh sử dụng thông tin cá nhân trong mật khẩu
avoid-personal-info-blurb = Nó dễ dàng tìm thấy ngày sinh nhật, địa chỉ và tên thành viên gia đình trực tuyến. Giữ nó ra khỏi mật khẩu của bạn.

## What to do after data breach tips

change-pw = Thay đổi mật khẩu của bạn
change-pw-site = Thay đổi mật khẩu cho trang web này
even-for-old = Ngay cả đối với các tài khoản cũ, điều quan trọng là cập nhật mật khẩu của bạn.
make-new-pw-unique = Làm cho mật khẩu mới khác biệt
strength-of-your-pw = Độ mạnh của mật khẩu của bạn ảnh hưởng trực tiếp đến bảo mật trực tuyến của bạn.
create-strong-passwords = Cách tạo mật khẩu mạnh
stop-reusing-pw = Ngừng sử dụng lại mật khẩu cũ
create-unique-pw = Tạo mật khẩu độc đáo và lưu chúng ở nơi an toàn, như trình quản lý mật khẩu.
five-myths = 5 huyền thoại về trình quản lý mật khẩu
create-a-fxa = Tạo { -brand-fxa } để được báo cáo đầy đủ về các rò rỉ mà bạn đã gặp phải và để nhận thông báo.
feat-security-tips = Mẹo về bảo mật để bảo vệ tài khoản của bạn
feat-sensitive = Tìm kiếm nâng cao trong các rò rỉ dữ liệu nhạy cảm
feat-enroll-multiple = Đăng ký nhiều email theo dõi rò rỉ
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] Xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết.
    }
check-for-breaches = Kiểm tra rò rỉ dữ liệu
find-out-what-hackers-know = Tìm hiểu những gì tin tặc đã biết về bạn. Tìm hiểu làm thế nào để đi trước họ một bước.
get-email-alerts = Giữ an toàn: Nhận thông báo qua email khi thông tin của bạn xuất hiện trong một rò rỉ đã biết
search-for-your-email = Tìm kiếm địa chỉ email của bạn trong các rò rỉ dữ liệu công khai từ năm 2007.
back-to-top = Về đầu trang
comm-opt-0 = Gửi email cho tôi nếu một trong những địa chỉ email của tôi dưới đây xuất hiện rò rỉ dữ liệu.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Gửi tất cả các thông báo rò rỉ dữ liệu đến { $primaryEmail }.
stop-monitoring-this = Dừng theo dõi email này.
resend-verification = Gửi lại email xác minh
add-new-email = Thêm một địa chỉ email mới
send-verification = Gửi liên kết xác minh
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Tóm tắt rò rỉ dữ liệu
show-breaches-for-this-email = Hiển thị tất cả các rò rỉ dữ liệu cho email này.
link-change-primary = Thay đổi địa chỉ email chính
remove-fxm = Xóa { -product-name }
remove-fxm-blurb =
    Tắt cảnh báo { -product-name }. { -brand-fxa } của bạn sẽ vẫn hoạt động và bạn có thể nhận được
    thông tin liên lạc liên quan đến tài khoản khác.
# Button title
manage-email-addresses = Quản lý địa chỉ email
# Link title
latest-breach-link = Hãy xem nếu bạn đã bị rò rỉ dữ liệu

## Variables:
##   $userName (String) - Username

welcome-back = Chào mừng trở lại, { $userName }!
welcome-user = Chào mừng, { $userName }!

##

breach-alert-subject = { -product-name } đã tìm thấy email của bạn trong một rò rỉ dữ liệu mới.
your-info-was-discovered-headline = Thông tin của bạn đã được phát hiện trong một rò rỉ dữ liệu mới.
your-info-was-discovered-blurb =
    Bạn đã đăng ký để nhận thông báo { -product-name } khi email của bạn
    xuất hiện rò rỉ dữ liệu. Đây là những gì chúng ta biết về rò rỉ dữ liệu này.
what-to-do-after-breach = Phải làm gì sau khi bị rò rỉ dữ liệu
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
faq1 = Tôi không nhận ra công ty hoặc trang web này. Tại sao tôi lại nằm trong rò rỉ dữ liệu đó?
faq2 = Tại sao phải mất rất lâu để thông báo cho tôi về báo cáo rò rỉ này?
faq3 = Làm cách nào để biết đây là một email hợp pháp từ { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] ĐÃ TÌM THẤY { $breachCount } RÒ RỈ DỮ LIỆU MỚI
    }
sign-up-headline-1 = Nhận thông báo liên tục với { -brand-fxa }.
account-not-required = Không yêu cầu trình duyệt { -brand-name } cho { -brand-fxa }. Bạn có thể nhận thông tin về các dịch vụ { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Thông tin của bạn có bị lộ trong rò rỉ dữ liệu { $breachName } không?
fb-not-comp = Email này không xuất hiện trong rò rỉ dữ liệu { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] Tuy nhiên, nó đã xuất hiện trong { $breachCount } rò rỉ dữ liệu khác.
    }
fb-comp-only = Email này đã xuất hiện trong rò rỉ dữ liệu { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] Email này xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết, bao gồm { $breachName }.
    }

##

no-other-breaches-found = Không có rò rỉ dữ liệu khác được tìm thấy từ tìm kiếm cơ bản.
no-results-blurb = Xin lỗi, vụ rò rỉ đó không có trong cơ sở dữ liệu của chúng tôi.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Email của bạn không xuất hiện trong rò rỉ này,
    nhưng số điện thoại của bạn vẫn có thể dễ bị tấn công.</span> Một số tài khoản
    bị xâm nhập trong vụ rò rỉ Facebook bao gồm số điện thoại và các thông tin
    cá nhân nhưng không phải địa chỉ email. Nếu bạn đã từng đăng ký cho
    tài khoản Facebook — ngay cả khi bạn không sử dụng nó bây giờ — chúng tôi
    khuyên bạn thực hiện các bước sau để tự bảo vệ bản thân
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Đặt thông tin của bạn thành “Chỉ mình tôi” hoặc cài đặt không công khai khác trong <a>hồ sơ Facebook của bạn</a>.</span>
facebook-breach-what-to-do-1-copy =
    Trong lần rò rỉ này, tin tặc đã lấy hồ sơ thông tin
    được đặt là "công khai" hoặc "được chia sẻ với bạn bè".
    Thông tin này có thể được kết hợp với dữ liệu khác để truy cập
    nhiều hơn thông tin cá nhân và tài khoản của bạn.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Thay đổi mật khẩu, mã PIN hoặc thông tin xác thực bảo mật khác trên
    <a>tài khoản nhà cung cấp dịch vụ điện thoại di động của bạn</a> để ngăn việc tráo SIM</span>.
facebook-breach-what-to-do-2-copy =
    Tráo SIM, còn được gọi là SIM-jacking, là khi tin tặc sử dụng số điện thoại, 
    ngày sinh và các dữ liệu khác để chiếm số điện thoại di động của một người
    và sau đó xâm nhập vào email, mạng xã hội và thậm chí cả tài khoản tài chính của họ.
facebook-breach-what-to-do-3 = Xem tất cả các khuyến nghị trên trang rò rỉ Facebook của chúng tôi
# "Appears in-page as: Showing: All Breaches"
currently-showing = Hiển thị:

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
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] Địa chỉ email đang được giám sát
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] Mật khẩu đã bị tiết lộ trên tất cả các rò rỉ dữ liệu
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] Rò rỉ dữ liệu đã biết đã tiết lộ thông tin của bạn
    }
# Button
see-additional-breaches = Xem các rò rỉ dữ liệu bổ sung
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] Email này xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Kết quả cho: { $userEmail }
other-monitored-emails = Email được giám sát khác
email-verification-required = Yêu cầu xác minh email
fxa-primary-email = { -brand-fxa } Email - Chính
what-is-a-website-breach = Trang web bị rò rỉ là gì?
website-breach-blurb = Rò rỉ dữ liệu trang web xảy ra khi tội phạm mạng ăn cắp, sao chép hoặc tiết lộ thông tin cá nhân từ tài khoản trực tuyến. Nó thường là kết quả của tin tặc tìm thấy một điểm yếu trong bảo mật của trang web. Rò rỉ dữ liệu cũng có thể xảy ra khi thông tin tài khoản bị rò rỉ do lỗi kỹ thuật.
security-tips-headline = Mẹo về bảo mật để bảo vệ bạn khỏi tin tặc
steps-to-protect = Cách thực hiện để bảo vệ danh tính trực tuyến của bạn
take-further-steps = Thực hiện các bước tiếp theo để bảo vệ danh tính của bạn
alert-about-new-breaches = Thông báo cho tôi về những vụ rò rỉ mới
see-if-youve-been-part = Hãy xem nếu bạn đã từng là một phần của rò rỉ dữ liệu trực tuyến.
get-ongoing-breach-monitoring = Nhận giám sát các rò rỉ dữ liệu liên tục cho nhiều địa chỉ email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Kiểm tra
new-unsub-error = Bạn cần hủy đăng ký một trong những email mà { -product-name } đã gửi.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] Tuy nhiên, nó đã xuất hiện trong { $breachCount } rò rỉ dữ liệu đã biết khác.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Thông tin bổ sung, bao gồm:
# Title
email-addresses-title = Địa chỉ email
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Tổng quan
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Vào lúc { $breachDate }, { $breachTitle } đã bị rò rỉ. Khi vụ rò rỉ được phát hiện và xác minh, nó đã được thêm vào cơ sở dữ liệu của chúng tôi trên { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Tùy chỉnh { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Đã đăng nhập với: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Lọc theo danh mục:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Gửi thông báo vụ rò rỉ đến địa chỉ email bị ảnh hưởng
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Đây là một cách để bảo vệ sự riêng tư của bạn. Tham gia { -brand-name }.
# Link title
learn-more-link = Tìm hiểu thêm.
email-sent = Đã gửi email!
# Form title
want-to-add = Bạn muốn thêm một email khác?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Liên kết xác minh được gửi tới { $userEmail } để thêm liên kết vào { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Đã xác minh email thành công!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Chúng tôi sẽ thông báo cho bạn nếu { $email } xuất hiện rò rỉ dữ liệu.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Để xem và quản lý tất cả các email mà bạn đã đăng ký để theo dõi vụ rò rỉ, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = đăng nhập

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Quản lý tất cả các địa chỉ email trong { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Thông báo rò rỉ dữ liệu
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Rò rỉ dữ liệu đã được thêm:
how-hackers-work-desc = Bảo vệ mật khẩu của bạn khỏi tội phạm mạng, vì đó là điều mà họ quan tâm nhất.
what-to-do-after-breach-desc = Khóa tài khoản của bạn để giữ thông tin của bạn khỏi tay kẻ xấu.
create-strong-passwords-desc = Làm cho mật khẩu của bạn mạnh mẽ, an toàn và khó đoán.
steps-to-protect-desc = Hiểu các mối đe dọa phổ biến nhất và biết những gì cần chú ý.
five-myths-desc = Tìm hiểu cách tránh các thói quen đặt mật khẩu xấu khiến kẻ xấu đánh cắp nó dễ dàng.
take-further-steps-desc = Tìm hiểu làm thế nào để giảm thiểu rủi ro của hành vi trộm cắp danh tính để ngăn ngừa tổn thất tài chính.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Các thay đổi đã được lưu!
# Section headline
rec-section-headline = Nên làm gì với vụ rò rỉ này
rec-section-subhead = Chúng tôi khuyên bạn nên thực hiện các bước này để giữ thông tin cá nhân của bạn an toàn và bảo vệ danh tính kỹ thuật số của bạn.
# Section headline
rec-section-headline-no-pw = Phải làm gì để bảo vệ thông tin cá nhân của bạn
rec-section-subhead-no-pw = Mặc dù mật khẩu không lộ ra trong rò rỉ dữ liệu này, vẫn có những bước bạn có thể thực hiện để bảo vệ thông tin cá nhân của mình tốt hơn.
# Button
see-additional-recs = Xem các khuyến nghị bổ sung

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } đã xuất hiện trong vụ rò rỉ này. <a>Phải làm gì tiếp theo</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } địa chỉ email của bạn đã xuất hiện trong vụ rò rỉ này. <a>Phải làm gì tiếp theo</a>
    }

##

marking-this-subhead = Đánh dấu vụ rò rỉ này là đã giải quyết
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Khi bạn đã thực hiện các bước bạn có thể giải quyết xong vụ rò rỉ này</span>,
    bạn có thể đánh dấu nó là giải quyết. Bạn vẫn có thể truy cập chi tiết về rò rỉ dữ liệu 
    từ bảng điều khiển của bạn bất cứ lúc nào.
mark-as-resolve-button = Đánh dấu là đã giải quyết
marked-as-resolved-label = Đã đánh dấu là đã giải quyết
undo-button = Hoàn tác
confirmation-1-subhead = Tốt! Bạn đã giải quyết vụ rò rỉ đầu tiên của bạn.
confirmation-1-body = Giữ đà. Kiểm tra bảng điều khiển của bạn để xem nếu có nhiều việc phải làm.
confirmation-2-subhead = Nắm lấy điều đó, tin tặc!
confirmation-2-body = Bạn đang thực hiện các bước quan trọng để bảo vệ tài khoản trực tuyến của bạn.
confirmation-3-subhead = Một thứ khác đã xuống. Công việc đang hoàn hảo!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Bạn muốn mật khẩu của bạn mạnh mẽ, khó đoán và duy nhất? <a>Tìm hiểu</a>
generic-confirmation-subhead = Rò rỉ này đã được đánh dấu là đã giải quyết
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
       *[other] Để xem tất cả các rò rỉ còn lại, đi đến bảng điều khiển của bạn.
    }
return-to-breach-details-link = Quay lại chi tiết rò rỉ
go-to-dashboard-link = Đi đến bảng điều khiển
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% hoàn thành
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] Đã giải quyết { $numResolvedBreaches } mục
    }
progress-intro-subhead = Tính năng mới trong { -product-name }: Đánh dấu rò rỉ dữ liệu là đã giải quyết
progress-intro-message =
    Sau khi xem xét các chi tiết về rò rỉ và thực hiện các bước để bảo vệ
    thông tin cá nhân của bạn, bạn có thể đánh dấu rò rỉ là đã giải quyết.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } trong số { $numTotalBreaches } vụ rò rỉ đã được đánh dấu là giải quyết
    }
progress-complete = Tất cả các rò rỉ đã biết đã được đánh dấu là đã giải quyết

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Bạn có một khởi đầu tuyệt vời!</span> Kiểm tra các rò rỉ còn lại để tìm hiểu 
    những bước cần thực hiện.
progress-message-2 =
    <span>Hãy cập nhật!</span> Những thay đổi nhỏ như cập nhật mật khẩu có thể giữ an toàn 
    thông tin cá nhân của bạn.
progress-message-3 = <span>Bạn đã giải quyết các rò rỉ đó!</span> Hãy tiếp tục. Chỉ còn một vài trường hợp để xử lý rò rỉ dữ liệu này.
progress-message-4 = <span>Gần xong rồi!</span> Bạn có thể tiến gần đến đích.
progress-complete-message =
    <span>Bạn cảm thấy tốt, đúng không?</span> Nếu bạn muốn theo kịp, đây là thời điểm tốt để  
    cập nhật thông tin đăng nhập khác với mật khẩu mạnh hơn.

##

resolve-this-breach-link = Giải quyết rò rỉ dữ liệu này
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Đã đánh dấu giải quyết:
hide-resolved-button = Ẩn mục đã giải quyết
show-resolved-button = Hiển thị mục đã giải quyết
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
       *[other] Mật khẩu bị lộ trong các rò rỉ dữ liệu chưa được giải quyết
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
       *[other] Rò rỉ dữ liệu đã biết được đánh dấu là đã giải quyết
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Mới
mobile-promo-headline = Mang { -brand-name } vào điện thoại và máy tính bảng của bạn
mobile-promo-body = Duyệt nhanh, riêng tư và an toàn ở mọi nơi bạn đến. Tìm { -brand-name } trong Google Play và App Store.
mobile-promo-cta = Tải { -brand-name } cho Android và iOS
promo-lockwise-headline = Mang mật khẩu của bạn đi khắp mọi nơi
lockwise-promo-body = Theo dõi thông tin đăng nhập của bạn trên tất cả các thiết bị. Truy cập chúng an toàn từ máy tính, điện thoại hoặc máy tính bảng của bạn.
promo-lockwise-cta = Tải { -brand-lockwise }
fpn-promo-headline = Che dấu vị trí của bạn từ các trang web và trình theo dõi
promo-fpn-body =
    { -brand-fpn } ẩn vị trí của bạn để loại bỏ các trang web 
    và trình thu thập dữ liệu hồ sơ bạn cho quảng cáo.
promo-fpn-cta = Tải { -brand-fpn }
monitor-promo-headline = Tìm hiểu về rò rỉ dữ liệu mới
monitor-promo-body = Nhận thông báo vào lần tiếp theo thông tin cá nhân của bạn bị lộ trong một rò rỉ dữ liệu đã biết.
ecosystem-promo-headline = Bảo vệ cuộc sống trực tuyến của bạn với các sản phẩm đầu tiên về bảo mật
ecosystem-promo-body = Mọi sản phẩm { -brand-name } chúng tôi làm đều tôn vinh lời hứa dữ liệu cá nhân của chúng tôi: Lấy ít hơn. Giữ nó an toàn. Không có bí mật.
promo-ecosystem-cta = Xem tất cả sản phẩm
steps-to-resolve-headline = Các bước để giải quyết rò rỉ này
vpn-promo-headline = Bây giờ là lúc để tăng cường sự an toàn của bạn khi trực tuyến.
vpn-promo-copy = Mạng riêng ảo của { -brand-Mozilla } giúp bảo vệ kết nối Internet của bạn khỏi tin tặc và gián điệp.
vpn-promo-cta = Tải xuống { -brand-mozilla-vpn }
vpn-promo-headline-new = Tiết kiệm 50% với thuê bao cả năm
vpn-promo-copy-new = Bảo vệ dữ liệu trực tuyến của bạn — và chọn gói thuê bao VPN phù hợp với bạn.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Vị trí của bạn: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Bảo vệ bạn</em> với { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Được bảo vệ</em> với { -brand-mozilla-vpn }.
vpn-banner-title-1 = Bạn đã được bảo vệ — cảm ơn bạn đã sử dụng { -brand-mozilla-vpn }.
vpn-banner-title-2 = Vị trí của bạn có thể được theo dõi nếu bạn không sử dụng VPN.
vpn-banner-subtitle-2 = Bảo vệ vị trí của bạn và duyệt web an toàn trong 3 bước
vpn-banner-status-protected = Tình trạng hiện tại: <em>Được bảo vệ ✓</em>
vpn-banner-status-not-protected = Tình trạng hiện tại: <em>Không được bảo vệ ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Địa chỉ IP: { $ip-address }
vpn-banner-step-1 = Đăng ký { -brand-mozilla-vpn }
vpn-banner-step-2 = Chọn một vị trí VPN
vpn-banner-step-3 = Kích hoạt VPN và duyệt web an toàn
vpn-banner-cta = Nhận { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Mở rộng
# button to close panel
vpn-banner-cta-close = Đóng

## Relay and VPN educational/ad units

ad-unit-relay-cta = Tìm hiểu thêm về { -brand-relay }
ad-unit-vpn-cta = Tìm hiểu thêm về { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Làm thế nào để bạn giữ bí mật địa chỉ email của mình?
# ad 2 heading
ad-unit-2-do-you-worry = Bạn có lo lắng về sự an toàn trên Wi-Fi công cộng?
# ad 3 heading
ad-unit-3-stay-in-the-game = Ở trong trò chơi!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } cho phép bạn giữ kết nối ổn định an toàn và bảo mật khi bạn chơi trò chơi hoặc phát phim trực tuyến.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Tránh bị giới hạn
# ad 3 list item 2
ad-unit-3-be-anywhere = Có mặt ở bất cứ đâu trên thế giới
# ad 3 list item 3
ad-unit-3-access-more = Truy cập thêm
# ad 4 heading
ad-unit-4-shopping-with = Mua sắm với mặt nạ email
ad-unit-4-want-to-buy = Bạn muốn mua một thứ gì đó trực tuyến và không biết hoặc hoàn toàn tin tưởng vào cửa hàng?
ad-unit-4-shop-online = Sử dụng mặt nạ email bất cứ khi nào bạn mua sắm trực tuyến. Nhận xác nhận được gửi đến email thực của bạn và sau đó dễ dàng tắt mặt nạ bất cứ lúc nào.
# ad 5 heading
ad-unit-5-on-the-go = Cùng di chuyển với { -brand-relay }
ad-unit-5-instantly-make = Tạo mặt nạ email tùy chỉnh ngay lập tức ở mọi nơi bạn đến!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Kết nối mọi lúc, mọi nơi
ad-unit-5-privately-sign-in = Sử dụng mặt nạ email của bạn khi bạn muốn đăng nhập riêng vào quán cà phê yêu thích hoặc Wi-Fi công cộng của mình
# ad 5 subheading 2
ad-unit-5-email-receipts = Nhận biên nhận email
ad-unit-5-share-custom-email = Chia sẻ mặt nạ email tùy chỉnh cho biên nhận mua sắm tại cửa hàng mà không cần chia sẻ email thực của bạn
# ad 5 subheading 3
ad-unit-5-use-on-phone = Sử dụng trên điện thoại của bạn
ad-unit-5-no-matter-where = Cho dù bạn ở đâu, hãy tạo mặt nạ email tùy chỉnh trong vài giây cho bất kỳ điều gì bạn muốn làm
# ad 6 heading
ad-unit-6-worry-free = Đăng ký mà không gặp rắc rối
ad-unit-6-want-to-start = Bạn muốn bắt đầu đăng ký mới, trả lời lời mời hoặc nhận mã khuyến mãi hời mà không bị spam tràn ngập hộp thư đến của bạn?
ad-unit-6-before-you-complete = Trước khi bạn hoàn tất lần đăng ký tiếp theo, hãy sử dụng mặt nạ email thay vì email thật để bảo vệ thông tin của bạn và giữ quyền kiểm soát hộp thư đến của bạn

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = Giải quyết rò rỉ dữ liệu
site-nav-settings-link = Cài đặt
site-nav-help-link = Trợ giúp và hỗ trợ
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Hãy thử các công cụ bảo mật khác của chúng tôi:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
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

# Obsolete
menu-button-title = Menu người dùng
# Obsolete
menu-button-alt = Mở menu người dùng
# Obsolete
menu-list-accessible-label = Menu tài khoản
# Obsolete
menu-item-fxa-2 = Quản lý { -brand-mozilla-account } của bạn
# Obsolete
menu-item-settings = Cài đặt
# Obsolete
menu-item-help = Trợ giúp và hỗ trợ
# Obsolete
menu-item-logout = Đăng xuất
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

mozilla = { -brand-Mozilla }
terms-of-service = Điều khoản dịch vụ
privacy-notice = Thông báo về quyền riêng tư
github = { -brand-github }
footer-nav-all-breaches = Tất cả vụ rò rỉ
footer-external-link-faq-label = Câu hỏi thường gặp
footer-external-link-faq-tooltip = Câu hỏi thường gặp

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Không tìm thấy trang
error-page-error-404-copy = Chúng tôi xin lỗi, trang bạn đang tìm kiếm không còn tồn tại.
error-page-error-404-cta-button = Quay lại
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Có gì đó không ổn
error-page-error-other-copy = Vui lòng thử lại hoặc quay lại sau

## Breach overview page

all-breaches-headline-2 = Tất cả các vụ rò rỉ được phát hiện bởi { -brand-fx-monitor }
all-breaches-lead = Chúng tôi theo dõi tất cả các rò rỉ dữ liệu đã biết để tìm hiểu xem thông tin cá nhân của bạn có bị xâm phạm hay không. Dưới đây là danh sách đầy đủ tất cả các rò rỉ đã được báo cáo từ năm 2007.
search-breaches = Tìm kiếm rò rỉ dữ liệu
# the kind of user data exposed to hackers in data breach.
exposed-data = Dữ liệu bị lộ:

## Public breach detail page

find-out-if-2 = Tìm hiểu xem bạn nằm trong vụ rò rỉ này không
find-out-if-description = Chúng tôi sẽ giúp bạn nhanh chóng xem liệu địa chỉ email của bạn có bị lộ trong rò rỉ này hay không và hiểu những việc cần làm tiếp theo.
breach-detail-cta-signup = Kiểm tra rò rỉ

## Floating banner

floating-banner-text = Tăng cường bảo mật trực tuyến của bạn với tin tức, mẹo và thông tin cập nhật từ { -brand-Mozilla }.
floating-banner-link-label = Đăng ký
floating-banner-dismiss-button-label = Không, cảm ơn

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Tên, giao diện mới và thậm chí nhiều hơn thế để <b>lấy lại quyền riêng tư cho bạn</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Bỏ qua
loading-accessibility = Đang tải
