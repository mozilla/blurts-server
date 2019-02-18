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
-brand-fxa = Firefox アカウント
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = サポート
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Firefox の通知について
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = フィードバックを提供
terms-and-privacy = 利用規約と個人情報保護方針
error-could-not-add-email = メールアドレスをデータベースに追加できませんでした。
error-not-subscribed = このメールアドレスは { -product-name } に登録されていません。
error-hibp-throttled = { -brand-HIBP } への接続数が多すぎます
error-hibp-connect = { -brand-HIBP } への接続でエラーが発生しました。
error-hibp-load-breaches = 侵害データを読み込めませんでした。
hibp-notify-email-subject = { -product-name } 通知: あなたのアカウントが侵害されたデータに含まれていました。
home-title = { -product-name }
home-not-found = ページが見つかりません。
oauth-invalid-session = 不正なセッション
oauth-confirmed-title = { -product-name } : 登録しました
scan-title = { -product-name } : スキャン結果
user-add-invalid-email = メールアドレスが正しくありません
user-add-email-verify-subject = { -product-name } の登録を確認してください。
user-add-title = { -product-name } : メールを確認してください
error-headline = エラー
user-verify-token-error = 検証トークンが必要です。
user-verify-email-report-subject = あなたの { -product-name } レポート
user-verify-title = { -product-name } : 登録しました
user-unsubscribe-token-error = 登録解除にはトークンが必要です。
user-unsubscribe-token-email-error = 登録解除にはトークンと emailHash が必要です。
user-unsubscribe-title = { -product-name } : 登録解除
user-unsubscribe-survey-title = { -product-name } : 登録解除の意見調査
user-unsubscribed-title = { -product-name } : 登録解除しました

## Password Tips

pwt-section-headline = 強いパスワード = 効果的な保護
pwt-section-subhead = あなたの個人情報の安全性は、パスワードの強さと同じくらいです。
pwt-section-blurb =
    あなたのパスワードが保護するのは、アカウント情報だけではありません。アカウント情報に属するすべての個人情報を保護しています。
    また、悪意のあるハッカーは、どこでも同じパスワードを使いまわしたり、一般的なフレーズ (p@ssw0rd, anyone?) を使っているユーザーを狙っているため、このような一つのアカウントをハッキングすると多くのアカウントをハッキングできてしまいます。ここでは、あなたのアカウントを保護する方法をご紹介します。
pwt-headline-1 = すべてのアカウントで異なるパスワードを使いましょう
pwt-summary-1 =
    さまざまな場所で同じパスワードを使いまわすと、個人情報を盗みだすための扉を大きく開くことになります。
    誰かがこのパスワードを入手すると、あなたのすべてのアカウントにログインされる恐れがあります。
pwt-headline-2 = 強度が高く推測されにくいパスワードを作成しましょう
pwt-summary-2 = 悪いハッカーは数千もの共通パスワードを使ってあなたのパスワードを当てようとします。文字数が多くランダムなパスワードにすることにより、推測されにくくなります。
pwt-headline-3 = セキュリティの質問は、もう一つのパスワードのように扱いましょう
pwt-summary-3 =
    ウェブサイトはあなたの回答が正確かどうかを確認しません。毎回、ただ一致するかどうかを判定するだけです。
    文字数が多くランダムな回答を作成し、どこか安全な場所に保管してください。
pwt-headline-4 = パスワードを覚えておくために役立つ情報
pwt-summary-4 =
    1Password や LastPass, Dashlane, Bitwarden などのパスワードマネージャーは、強度が高く一意のパスワードを生成します。
    また、パスワードを安全に保管してウェブサイトへの入力を助けます。
pwt-headline-5 = 2 段階認証で安全性を高めましょう
pwt-summary-5 =
    2 段階認証 (2FA) は、アカウントにログインするために追加の情報 (ワンタイムコードをショートメッセージで送信するなど) を必要とします。
    誰かがあなたのパスワードを入手してもログインすることはできません。
pwt-headline-6 = { -product-name-nowrap } からの通知を登録
pwt-summary-6 = ウェブサイトデータの侵害は上昇傾向にあります。新たな侵害は、すぐに私たちのデータベースに追加され、{ -product-name-nowrap } からの通知が送られます。通知が来たら、すぐに行動を起こしてアカウントを守ってください。
landing-headline = 悪いハッカーから個人情報を守るために、ここから始めましょう。
landing-blurb =
    { -product-name-nowrap } はツールであなたの個人情報の安全を保ちます。
    あなたについてハッカーがすでに知っていることを見きわめて、彼らよりも先回りする方法を学びましょう。
scan-label = データ侵害に巻き込まれていないか確認してください。
scan-placeholder = メールアドレスを入力してください
scan-privacy = あなたのメールアドレスは保存されません。
scan-submit = あなたのメールアドレスを検索
scan-another-email = 別のメールアドレスを検索
scan-featuredbreach-label = あなたの <span class="bold">{ $featuredBreach }</span> アカウント情報が漏洩していないか調べてください。
sensitive-breach-email-required = データ侵害に取り扱いに注意が必要な情報が含まれています。メールでの確認が必要です。
scan-error = メールアドレスを正しく入力してください。
signup-banner-headline = { -product-name-nowrap } はあなたのオンラインアカウントが脅かされていないか検出します。
signup-banner-blurb = { -product-name-nowrap } 詳細レポートでは、あなたのオンラインアカウントの情報が漏洩したり盗まれたりしていないかを報告します。また、あなたのアカウントが新たなウェブサイト侵害に巻き込まれた場合にも通知します。
download-firefox-bar-blurb = { -product-name-nowrap } は、<span class="nowrap">全く新しい { -brand-name }</span> により提供されています。
download-firefox-bar-link = 今すぐ { -brand-name } をダウンロード
download-firefox-banner-blurb = ブラウザーを使いこなそう
download-firefox-banner-button = { -brand-name } をダウンロード
signup-modal-headline = { -product-name-nowrap } のアカウントを登録
signup-modal-blurb = 登録すると、完全なレポートや新たな侵害の通知、安全性を高めるためのヒントを { -product-name-nowrap } から受けられます。
signup-modal-close = 閉じる
get-your-report = レポートを入手しましょう
signup-modal-verify-headline = 登録を確認してください
signup-modal-verify-blurb = 登録確認のリンクを <span id="submitted-email" class="medium"></span> へ送信しました。
signup-modal-verify-expiration = このリンクの有効期限は 24 時間です。
signup-modal-verify-resend = 受信トレイや迷惑メールフォルダーに見当たらない場合は、再送信します。
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = 送信しました。
signup-with-fxa = { -brand-name } アカウントで登録する
form-signup-placeholder = メールアドレスを入力
form-signup-checkbox = 最新情報を { -brand-Mozilla } と { -brand-name } から入手します。
sign-up = アカウント登録
form-signup-error = 有効なメールアドレスを登録してください
no-breaches-headline = 問題ありません。
found-breaches-headline = あなたの個人情報がデータ侵害に含まれていました。
no-breaches =
    基本スキャンではあなたのメールアドレスを見つけられませんでした。
    これは良いニュースですが、いつでも起こり得るデータ侵害に対して、あなたにできることがまだあります。
    { -product-name-nowrap } に登録することにより、新たなデータ侵害が起こった場合に通知と詳細レポート、パスワードを保護するためのヒントを受け取れます。
featured-breach-results =
    { $breachCount ->
        [0] あなたのアカウントが <span class="bold">{ $featuredBreach }</span> の侵害に含まれています。しかし、他の既知のデータ侵害には見つかりませんでした。
       *[other] あなたのアカウントが <span class="bold">{ $featuredBreach }</span> と他の { $breachCount } 件の侵害に含まれています。
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
       *[other] あなたのアカウントは <span class="bold">{ $featuredBreach }</span> の侵害には含まれていませんでしたが、他の { $breachCount } 件のデータ侵害に含まれています。
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
       *[other] あなたのメールアドレスに関連付けられたアカウントが次の { $breachCount } 件の侵害に含まれています。
    }
show-more-breaches = さらに表示
what-to-do-headline = あなたの個人情報がデータ侵害に晒されている場合に何をしたらよいか
what-to-do-subhead-1 = 古いアカウントでもパスワードを変更しましょう
what-to-do-blurb-1 =
    ログインできない場合は、アカウントを復旧または停止する方法をそのウェブサイトに問い合わせてください。
    知らないアカウントが登録されている場合、そのサイトの名前が変更されたか、誰かがあなたのアカウントを作成している可能性があります。
what-to-do-subhead-2 = 晒されてしまったパスワードを再利用する場合は、変更してください
what-to-do-blurb-2 =
    悪いハッカーは、手に入れたパスワードを再利用して他のアカウントにもログインしようとします。
    ウェブサイトごとに異なるパスワードを作成してください。特に銀行関連のサイトやメールアカウント、個人情報を保存しているウェブサイトのアカウントでは、同じパスワードを使いまわしてはいけません。
what-to-do-subhead-3 = 金融口座を保護するために特別な手続きを取りましょう
what-to-do-blurb-3 =
    多くの侵害はメールアドレスとパスワードのみを晒しますが、中には取り扱いに注意が必要な金融情報が含まれることもあります。
    あなたの銀行口座やクレジットカード番号がデータ侵害に含まれていた場合は、詐欺行為の可能性があることを銀行に知らせ、口座に覚えのない取り引きがないか監視してください。
what-to-do-subhead-4 = 良いパスワードを作成するための助けを得て安全に管理しましょう。
what-to-do-blurb-4 = 1Password や LastPass, Dashlane, Bitwarden などのパスワード管理ツールを利用すると、強度の高いパスワードを生成し、それを安全に保管し、ウェブサイトへの入力も助けてくれます。
# breach-date = the calendar date a particular data theft occurred. 
breach-date = 侵害日:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = 漏洩したアカウント数:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = 漏洩したデータ:
confirmed = 確認しました。<br />登録完了です。
confirmed-blurb = 間もなく、{ -product-name-nowrap } から詳細レポートのメールが送信されます。また、新たに報告された侵害にあなたのアカウントが含まれていた場合にもメールで通知します。
confirmed-social-blurb = あなたのアカウントが侵害された場合、あなたの友人や家族、オンライン接続も同様の可能性があります。彼らにも { -product-name-nowrap } のサイトを教えてください。
unsub-headline = { -product-name-nowrap } の登録を解除
unsub-blurb = 登録を解除すると、あなたのメールアドレスを { -product-name-nowrap } のリストから削除し、新たなデータ侵害があっても通知を受け取れなくなります。
unsub-button = 登録解除
unsub-survey-headline = 登録を解除しました。
unsub-survey-blurb =
    あなたのメールアドレスは { -product-name-nowrap } の登録を解除されました。サービスをご利用いただきありがとうございました。
    よろしければ、サービス利用についての質問にお答えください。
unsub-survey-form-label = { -product-name-nowrap } からの通知を登録解除した理由をお聞かせください。
unsub-reason-1 = 通知はデータの安全を守るのに役立っていない
unsub-reason-2 = { -product-name-nowrap } からのメールが多すぎる
unsub-reason-3 = サービスに価値を見出せない
unsub-reason-4 = すでに自分でアカウントを保護している
unsub-reason-5 = アカウントの監視に別のサービスを利用している
unsub-reason-6 = 上記のいずれにも当てはまらない
unsub-survey-thankyou = フィードバックをありがとうございます。
unsub-survey-error = いずれか一つを選んでください。
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = 共有
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = ツイート
download-firefox-quantum = { -brand-Quantum } をダウンロード
download-firefox-mobile = モバイル向け { -brand-name } をダウンロード
# Features here refers to Firefox browser features. 
features = 機能
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta、Nightly、Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = 侵害データの提供 { $hibp-link }
site-description = あなたのアカウントはデータ侵害によって漏洩または盗まれていませんか？ { -product-name } で調べましょう。データベースを検索して、侵害時に知らせるための登録をしてください。
confirmation-blurb = データ侵害は他の人にも影響を及ぼす可能性があります。このデータ侵害を伝えて、友人や家族にオンラインアカウントが安全かどうか確認してもらってください。
share-email = メールアドレス
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = その他
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = ソーシャル
fxa-scan-label = データが侵害されていないか確認してください。
