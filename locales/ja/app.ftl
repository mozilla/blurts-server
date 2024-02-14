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
-brand-fxa = Firefox アカウント
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = 短期間に多くのメールアドレスを検索しようとしています。セキュリティ上の理由から、一時的に新たな検索をブロックしました。後ほどまた試してください。
error-could-not-add-email = メールアドレスをデータベースに追加できませんでした。
error-not-subscribed = このメールアドレスは { -product-name } に登録されていません。
error-hibp-throttled = { -brand-HIBP } への接続数が多すぎます。
error-hibp-connect = { -brand-HIBP } への接続でエラーが発生しました。
error-hibp-load-breaches = 侵害データを読み込めませんでした。
error-must-be-signed-in = { -brand-fxa } でログインしてください。
error-to-finish-verifying = このメールで { -product-name } の認証を完了するには、主要アドレスでログインする必要があります。
home-title = { -product-name }
home-not-found = ページが見つかりません。
oauth-invalid-session = 不正なセッション
scan-title = { -product-name } : スキャン結果
user-add-invalid-email = メールアドレスが正しくありません
user-add-too-many-emails = 監視しているメールアドレスの数が制限に達しています。
user-add-email-verify-subject = { -product-name } の登録を確認してください。
user-add-duplicate-email = このメールは既に { -product-name } に追加されています。
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = { $preferencesLink } にアクセスして、{ $userEmail } のステータスを確認してください。
user-add-verification-email-just-sent = メールをすぐに再送信することはできません。後でもう一度試してください。
user-add-unknown-error = 別のメールアドレスを追加する際に問題が発生しました。後でもう一度試してください。
error-headline = エラー
user-verify-token-error = 検証トークンが必要です。
user-verify-email-report-subject = あなたの { -product-name } レポート
user-unsubscribe-token-error = 登録解除にはトークンが必要です。
user-unsubscribe-token-email-error = 登録解除にはトークンと emailHash が必要です。
user-unsubscribe-title = { -product-name } : 登録解除
pwt-section-headline = 強いパスワード = 効果的な保護
landing-headline = 悪いハッカーから個人情報を守るために、ここから始めましょう。
scan-placeholder = メールアドレスを入力してください
scan-submit = あなたのメールアドレスを検索
scan-error = メールアドレスを正しく入力してください。
download-firefox-banner-button = { -brand-name } をダウンロード
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = 送信しました。
sign-up = アカウント登録
form-signup-error = 有効なメールアドレスを登録してください
# breach-date = the calendar date a particular data theft occurred.
breach-date = 侵害日:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 漏洩したアカウント数:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 漏洩したデータ:
unsub-headline = { -product-name-nowrap } の登録を解除
unsub-blurb = 登録を解除すると、あなたのメールアドレスを { -product-name-nowrap } のリストから削除し、新たなデータ侵害があっても通知を受け取れなくなります。
unsub-button = 登録解除
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = 侵害データの提供 { $hibp-link }
share-twitter = 多くの人が約 100 個のオンラインアカウントを持っています。あなたのアカウントはデータ侵害にさらされていませんか？確認しましょう。
share-facebook-headline = データ侵害に巻き込まれていないか確認しましょう。
share-facebook-blurb = あなたのオンラインアカウントはデータ侵害にさらされていますか？
og-site-description = { -product-name } でデータ侵害に巻き込まれていないか確認しましょう。登録すると、新たな侵害についての警告やアカウントを安全に保つ秘訣を知ることができます。
show-all = すべて表示
fxa-scan-another-email = 他のメールアドレスをチェックしますか？
sign-out = ログアウト
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa }の管理
have-an-account = 既にアカウントをお持ちですか？
fxa-pwt-summary-2 =
    短い 1 語のパスワードは、ハッカーが推測しやすいものです。
    少なくとも 2 つの単語と、文字、数字、および特殊文字の組み合わせを使用してください。
fxa-pwt-summary-4 =
    1Password、LastPass、Dashlane、Bitwarden のようなパスワードマネージャーは、パスワードを保存し、ウェブサイトに入力してくれます。
    また、強力なパスワードを作成するのにも役立ちます。
fxa-pwt-summary-6 = データ侵害は上昇傾向にあります。新たなデータ侵害にあなたの個人情報が含まれていた場合、{ -product-name } からの通知が送られます。通知が来たら、すぐに行動を起こし、ご自分のアカウントを守ってください。
fxa-what-to-do-blurb-1 =
    ログインできない場合は、そのウェブサイトにログイン情報の更新方法を問い合わせてください。
    見覚えのないアカウントがありますか？ あなたのデータが販売されたり、再配布されたりしている可能性があります。
    また、作成したことを忘れてしまったアカウントや、名前を変更した会社の可能性もあります。
fxa-what-to-do-subhead-2 = 漏洩したパスワードの使用を中止し、それを使用しているすべての場所でパスワードを変更してください。
fxa-wtd-blurb-2 =
    悪いハッカーは、同じパスワードとあなたのメールアドレスを使用して他のアカウントにもログインしようとします。
    すべてのアカウントで異なるパスワードを作成してください。特に銀行の口座情報やメールアドレス、個人情報を保存しているウェブサイトのアカウントで同じパスワードを使いまわしてはいけません。
fxa-what-to-do-blurb-3 =
    多くの侵害はメールアドレスとパスワードのみを晒しますが、中には取り扱いに注意が必要な金融情報が含まれることもあります。
    あなたの銀行口座やクレジットカード番号が晒されていた場合は、詐欺行為の可能性があることを銀行に知らせ、覚えのない取り引きがないか監視してください。
fxa-what-to-do-subhead-4 = すべてのパスワードを記憶するための助けを得て安全に保管しましょう。
fxa-what-to-do-blurb-4 =
    1Password、LastPass、Dashlane、Bitwarden のようなパスワードマネージャーは、パスワードを安全に保存し、ウェブサイトへの入力を補助します。
    携帯電話やコンピューターでパスワードマネージャーを利用すれば、パスワードをすべて記憶しておく必要がなくなります。
# Alerts is a noun
sign-up-for-alerts = 登録して通知を受け取る
# Link title
frequently-asked-questions = よくある質問
about-firefox-monitor = { -product-name } について
# Link title
preferences = 設定
# Link title
home = ホーム
# Link title
security-tips = セキュリティの秘訣
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } ナビゲーションを開く
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = 最近追加されたデータ侵害
# Link title
more-about-this-breach = この侵害について詳しく見る
take-control = 個人情報の制御を取り戻してください。
cant-stop-hackers = ハッカーのハッキングは止められません。しかし、ハッキングを容易にさせる悪習慣は避けられます。
read-more-tips = セキュリティの秘訣をもっと読む
how-hackers-work = ハッカーの手段を理解する
monitor-your-online-accounts = { -brand-fxa }でデータ侵害の監視に登録しましょう。
stay-alert = 新しいデータ侵害の警告を受け取る
if-your-info = あなたの情報が新しいデータ侵害にさらされた場合、警告を送信します。
search-all-emails = すべてのメールアドレスを検索して侵害がないか確認し、新たな脅威の警告を受け取りましょう。
monitor-several-emails = 複数のメールアドレスを監視する
take-action = アカウントを保護するための行動を起こしましょう
keep-your-data-safe = サイバー犯罪からデータを安全に保つために必要なことを見つけましょう。
website-breach = ウェブサイト侵害
sensitive-breach = 注意を要するウェブサイト侵害
data-aggregator-breach = データアグリゲーターの侵害
unverified-breach = 未確認の侵害
spam-list-breach = スパムリスト侵害
website-breach-plural = ウェブサイト侵害
sensitive-breach-plural = 注意を要する侵害
data-aggregator-breach-plural = データアグリゲーターの侵害
unverified-breach-plural = 未確認の侵害
spam-list-breach-plural = スパムリスト侵害
what-data = 漏洩したデータ:
sensitive-sites = { -product-name } は機密性の高いサイトをどのように扱いますか？
sensitive-sites-copy = { -product-name } は、メールアドレスが確認できた場合にのみ、この種類の侵害に関連付けられたアカウントを明らかにします。つまり、あなたの情報がこの侵害にあったかどうかを確認できるのは (誰かほかのユーザーがあなたのメールアカウントにアクセスできるのでなければ) あなただけです。
delayed-reporting-headline = なぜ、この侵害の報告に時間がかかったのですか？
delayed-reporting-copy = データ侵害にさらされた認証情報がダークウェブに現れるまで数か月または数年かかる場合があります。侵害は発見され、確認され次第データベースに追加されます。
about-fxm-headline = { -product-name } について
about-fxm-blurb = あなたのオンラインアカウントがデータ侵害に巻き込まれている場合、{ -product-name } が警告します。データ侵害を受けていないか確認し、新しい侵害についての警告を受け取り、オンラインアカウントを保護する措置を取りましょう。{ -product-name } は、{ -brand-Mozilla } によって提供されています。
fxm-warns-you = { -product-name } は、あなたのメールアドレスがオンラインデータ侵害で公開されている場合に警告します。あなたの情報が公開されているかどうかを確認し、オンラインアカウントの保護を強化する方法を学び、あなたのメールアドレスが新しい侵害で見つかった場合に警告を受け取りましょう。
# How Firefox Monitor works
how-fxm-works = { -product-name } の仕組み
how-fxm-1-headline = 基本的な検索を行う
how-fxm-1-blurb = 2007 年までさかのぼって、メールアドレスがデータ侵害を受けていないか検索します。この基本的な検索でほとんどのデータ侵害が明らかにされますが、機密性の高い個人情報を含むものではありません。
how-fxm-2-headline = アカウント登録して侵害を監視する
how-fxm-2-blurb = { -brand-fxa }を作成し、進行中の侵害についてメールアドレスの監視を行います。メールアドレスを確認すると、注意を要する侵害を含む過去の侵害についての完全なレポートも届きます。
how-fxm-3-headline = ブラウザーで通知を受け取る
how-fxm-3-blurb = { -brand-name } を利用すると、侵害されたサイトを訪問した際に通知が届きます。あなたがその侵害に含まれていたか、何ができるのかをすぐに確認してください。
wtd-after-website = ウェブサイト侵害の後にするべきこと:
wtd-after-data-agg = データアグリゲーター侵害の後にするべきこと:
what-is-data-agg = データアグリゲーターとは？
what-is-data-agg-blurb = データアグリゲーター (データブローカー) は、公的記録から情報を収集したり他社から情報を購入したりします。彼らはこのデータを編集し、マーケティング目的で企業に販売します。このような情報漏洩の被害者が金銭的な詐欺にあう可能性は低いですが、ハッカーはこのデータを使って被害者になりすましたり、被害者を分析したりする可能性があります。
protect-your-privacy = オンラインプライバシーを保護する
no-pw-to-change = ウェブサイトの侵害とは異なり、パスワードを変更する必要はありません。
avoid-personal-info = パスワードに個人情報を使用しないでください
avoid-personal-info-blurb = 誕生日、住所、家族の名前はオンラインで簡単に見つけることができます。これらをパスワードに含めないでください。

## What to do after data breach tips

change-pw = パスワードを変更する
change-pw-site = このサイトのパスワードを変更する
even-for-old = 古いアカウントであっても、パスワードをアップデートすることは大切です。
make-new-pw-unique = 新しいパスワードを他とは異なるユニークなものにする
strength-of-your-pw = パスワードの強度は、直接オンラインセキュリティに影響します。
create-strong-passwords = 強力なパスワードの作り方
stop-reusing-pw = 同じパスワードの使い回しをやめる
create-unique-pw = ユニークなパスワードを作成し、パスワードマネージャーのような安全な場所に保存してください。
five-myths = パスワードマネージャーに関する 5 つの話題
create-a-fxa = { -brand-fxa }を作成してデータ侵害の完全なレポートとアラートメールを受け取りましょう。
feat-security-tips = セキュリティの秘訣であなたのアカウントを保護しましょう
feat-sensitive = 機密情報の侵害について詳しい検索をしましょう
feat-enroll-multiple = 複数のメールアドレスを登録して侵害を監視しましょう
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] 既知のデータ侵害は { $breachCount } 件です。
    }
check-for-breaches = データ侵害を確認する
find-out-what-hackers-know = あなたのことがハッカーに知られていないか調査しましょう。一歩先に行く方法を学んでください。
get-email-alerts = 安全のため、既知の侵害にあなたの情報が含まれていた場合にメールアラートを受け取るようにしましょう。
search-for-your-email = 2007 年までさかのぼって、メールアドレスがデータ侵害を受けているか検索します。
back-to-top = トップに戻る
comm-opt-0 = 以下のメールアドレスがデータ侵害に該当する場合は、メールで知らせてください。
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = すべての通知を { $primaryEmail } に送る。
stop-monitoring-this = このメールの監視を停止する。
resend-verification = 認証メールを再送する
add-new-email = 新しいメールアドレスを追加
send-verification = 認証リンクを送信する
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = データ侵害概要
show-breaches-for-this-email = このメールアドレスのすべてのデータ侵害を表示する。
link-change-primary = 主要メールアドレスを変更する
remove-fxm = { -product-name } の登録を解除する。
remove-fxm-blurb = { -product-name } の警告をオフにします。{ -brand-fxa } は有効のまま残り、他の通知は受信を続けるでしょう。
# Button title
manage-email-addresses = メールアドレスの管理
# Link title
latest-breach-link = この侵害を受けているか確認する

## Variables:
##   $userName (String) - Username

welcome-back = おかえりなさい、{ $userName } さん！
welcome-user = ようこそ、{ $userName } さん！

##

breach-alert-subject = { -product-name } が、あなたのメールアドレスの新しいデータ侵害を発見しました。
your-info-was-discovered-headline = あなたの情報が新しいデータ侵害に含まれています。
your-info-was-discovered-blurb = あなたのメールアドレスがデータ侵害に含まれていた場合に { -product-name } アラートが届くよう登録されています。この侵害についてわかっていることは次のとおりです。
what-to-do-after-breach = データ侵害があった後にするべきこと
ba-next-step-1 = パスワードを強力で一意のパスワードに変更する。
ba-next-step-blurb-1 = 強力なパスワードは、大文字と小文字、記号などの特殊文字、数字を組み合わせたものです。住所や誕生日、家族の名前などの個人情報を含めてはいけません。
ba-next-step-2 = 漏洩したパスワードの利用を完全に停止してください。
ba-next-step-blurb-2 = サイバー犯罪者がダークウェブであなたのパスワードを見つけ、あなたの他のアカウントにログインするために利用する可能性があります。あなたのアカウントを保護する最善の方法は、同じパスワードを使いまわさず、アカウントごとに固有のパスワードを使用することです。
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] 新たな侵害が { $breachCount } 件みつかりました
    }
sign-up-headline-1 = { -brand-fxa } で継続して警告を受け取りましょう。
account-not-required = { -brand-name } ブラウザーは { -brand-fxa }には必要ありません。{ -brand-Mozilla } サービスについての情報を受け取るでしょう。

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = { $breachName } のデータ侵害にさらされていますか？
fb-not-comp = このメールアドレスは、{ $breachName } のデータ侵害に含まれていません。

##

no-results-blurb = データベース内に侵害は見つかりませんでした。
# "Appears in-page as: Showing: All Breaches"
currently-showing = 表示中:

## Updated error messages

error-bot-headline = 検索が一時停止されました
error-bot-blurb =
    短時間に複数のメールアドレスが検索されたため、ボットの疑いがあります。現在、新たな検索がブロックされています。
    後でもう一度お試しください。
error-csrf-headline = セッションがタイムアウトしました
error-csrf-blurb = ブラウザの戻るボタンをクリックし、ページを再読み込みして、もう一度試してください。
error-invalid-unsub = { -product-name } 警告の購読を解除する方法
error-invalid-unsub-blurb = { -product-name } から送信されたメールで、いずれかを購読解除する必要があります。{ -brand-team-email } からのメールが届いていないか、受信トレイを確認し、そのメールの下部にある配信停止リンクを選択してください。
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] 監視中のメールアドレス
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] パスワードが漏洩しているデータ侵害の数
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] 既知のデータ侵害を受けているあなたの情報
    }
# Button
see-additional-breaches = 追加のデータ侵害を見る
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] このメールアドレスは { $breachCount } 個の既知のデータ侵害があります。
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = { $userEmail } についての結果
other-monitored-emails = その他の監視対象メールアドレス
email-verification-required = メールアドレスの認証が必要です
fxa-primary-email = { -brand-fxa } メールアドレス - 主要
what-is-a-website-breach = ウェブサイト侵害とは何ですか？
website-breach-blurb = ウェブサイトデータ侵害は、サイバー犯罪者が、個人情報を盗んだり、コピーしたり、オンラインアカウントを漏洩したりすると発生します。通常、ハッカーがウェブサイトのセキュリティの弱点を見つけた結果により、発生します。また、事故的にアカウント情報が漏洩して発生することもあります。
security-tips-headline = ハッカーからあなたを守るセキュリティの秘訣
steps-to-protect = オンラインであなたを保護する手順
take-further-steps = あなたを守るさらなる手順
alert-about-new-breaches = 新しい侵害があった場合に通知する。
see-if-youve-been-part = オンラインのデータ侵害に含まれていないか確認しよう。
get-ongoing-breach-monitoring = 複数のメールアドレスに対してデータ侵害の監視をしましょう。
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = 調査する
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = 侵害を受けたその他の情報:
# Title
email-addresses-title = メールアドレス
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = 概要
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } に、{ $breachTitle } は侵害にさらされました。侵害が発見され、確認されたため、{ $addedDate } にデータベースに追加されました。
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } の設定
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = ログイン中: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = カテゴリーで絞り込む:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = メニュー
to-affected-email = 影響を受けたメールアドレスに通知を送る。
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = あなたのプライバシーを守る方法があります。{ -brand-name } を使用しましょう。
# Link title
learn-more-link = 詳しくはこちら。
email-sent = メールが送信されました！
# Form title
want-to-add = 別のメールアドレスを追加しますか？

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = ログイン

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = { $preferencesLink } ですべてのメールアドレスを管理します。
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = 侵害についての通知設定
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = 侵害が追加された日:
how-hackers-work-desc = サイバー犯罪者からあなたのパスワードを守りましょう。サイバー犯罪者はパスワードに最も関心があります。
what-to-do-after-breach-desc = アカウントをロックして、あなたの情報が悪意のある人の手に渡らないようにしましょう。
create-strong-passwords-desc = パスワードは強力で安全で推測しにくいものにしましょう。
steps-to-protect-desc = もっとも一般的な脅威を理解し、注意すべき点を把握しましょう。
five-myths-desc = すぐにハッキングされてしまうような安易なパスワードの悪習慣を避ける方法を学びましょう。
take-further-steps-desc = 金銭的な損失を防ぐために個人情報盗難のリスクを軽減する方法を確認しましょう。
# This message appears after a user has successfully updated their communication settings.
changes-saved = 変更が保存されました！
# Section headline
rec-section-headline = この侵害への対処方法
rec-section-subhead = あなたの個人情報を安全に保ち、デジタル ID を保護するために、以下の手順を行うことをおすすめします。
# Button
see-additional-recs = 追加の推奨事項を見る

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } は、この侵害を受けています。<a>何をするべきかはこちらをご覧ください</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } 個のメールアドレスが、この侵害を受けています。<a>何をするべきかはこちらをご覧ください</a>
    }

##

marking-this-subhead = この侵害を解決済みとしてマークする
mark-as-resolve-button = 解決済みとしてマーク
marked-as-resolved-label = 解決済みとしてマークされました
undo-button = 元に戻す
go-to-dashboard-link = ダッシュボードに移動
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% 完了

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

promo-lockwise-headline = どこでもパスワードが使える
monitor-promo-headline = 新しいデータ侵害について調べる
monitor-promo-body = 今後、公表されたデータ侵害であなたの個人情報が漏洩した場合に通知を受け取れます。
promo-ecosystem-cta = すべての製品を見る

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = あなたの現在地: { $ip-location }

## Relay and VPN educational/ad units

ad-unit-relay-cta = { -brand-relay } について知る
ad-unit-vpn-cta = { -brand-mozilla-vpn } について知る
# ad 5 heading
ad-unit-5-on-the-go = { -brand-relay } を使ってみましょう
ad-unit-5-instantly-make = どこにいても、すぐにカスタムメールマスクを生成できます。

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##


## Search Engine Optimization


## Header

sign-in = ログイン

## Site navigation


## User menu


## Footer


## Error page


## Breach overview page

search-breaches = データ侵害を検索

## Public breach detail page


## Floating banner


## Firefox Monitor -> Mozilla Monitor rebrand banner

