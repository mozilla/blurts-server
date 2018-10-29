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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = サポート
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = フィードバックを提供
terms-and-privacy = 利用規約と個人情報保護方針
error-hibp-throttled = { -brand-HIBP } への接続数が多すぎます
error-hibp-connect = { -brand-HIBP } への接続でエラーが発生しました。
error-hibp-load-breaches = 侵害データを読み込めませんでした。
home-title = { -product-name }
home-not-found = ページが見つかりません。
oauth-invalid-session = 不正なセッション
oauth-confirmed-title = { -product-name } : 登録しました
scan-title = { -product-name } : スキャン結果
user-add-invalid-email = メールアドレスが正しくありません
user-add-email-verify-subject = { -product-name } の登録を確認してください。
user-verify-token-error = 検証トークンが必要です。
user-verify-email-report-subject = あなたの { -product-name } レポート
user-verify-title = { -product-name } : 登録しました
user-unsubscribe-token-error = 登録解除にはトークンが必要です。
user-unsubscribe-token-email-error = 登録解除にはトークンと emailHash が必要です。
user-unsubscribe-title = { -product-name } : 登録解除
user-unsubscribe-survey-title = { -product-name } : 登録解除の意見調査
user-unsubscribed-title = { -product-name } : 登録解除しました

## Password Tips

pwt-section-headline = 強いパスワード = 効果的な防護
pwt-section-subhead = あなたの個人情報の安全性は、パスワードの強さと同じくらいです。
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
scan-placeholder = メールアドレスを入力してください
scan-privacy = あなたのメールアドレスは保存されません。
scan-submit = あなたのメールアドレスを検索
scan-another-email = 別のメールアドレスを検索
scan-error = メールアドレスを正しく入力してください。
download-firefox-bar-link = 今すぐ { -brand-name } をダウンロード
download-firefox-banner-button = { -brand-name } をダウンロード
signup-modal-close = 閉じる
signup-modal-verify-blurb = 登録確認のリンクを <span id="submitted-email" class="medium"></span> へ送信しました。
signup-modal-verify-expiration = このリンクの有効期限は 24 時間です。
signup-modal-verify-resend = 受信トレイや迷惑メールフォルダーに見当たらない場合は、再送信します。
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = 送信しました。
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
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Portions of this content are &#x24B8; 1998-2018 by individual mozilla.org contributors. <br />
    Content available under a  <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons license</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = { $hibp-link } により提供された侵害データ
site-description = あなたのアカウントはデータ侵害によって漏洩または盗まれていませんか？ { -product-name } で調べましょう。データベースを検索して、侵害時に知らせるための登録をしてください。
