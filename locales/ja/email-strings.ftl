# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    24 時間以内に「メールアドレスを確認」ボタンを選択して Firefox Monitor アカウントを確認してください。
    あなたのレポートは途上にあります。
verify-my-email = メールアドレスを確認
report-scan-another-email = { -product-name } で別のメールアドレスをスキャン
automated-message = これは自動配信されたメールです。心当たりがない場合は何もする必要はありません。
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = このメッセージは、{ -product-name } からの通知を受け取るように設定されたメールアドレス ({ $userEmail }) へ送信されています。
unsubscribe-email-link = { -product-name } からの通知を受け取りたくない場合は登録解除してください。
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } レポート
report-date = レポート日:
email-address = メールアドレス:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = 次に何をしたらよいか
report-headline =
    { $breachCount ->
        [0] 問題ありません。
       *[other] あなたのアカウントが { $breachCount } 件の侵害情報に含まれています。
    }
report-subhead-no-breaches =
    あなたのアカウントは、侵害情報の詳細レポートには含まれていませんでした。
    これは良い知らせです。ただし、個人情報を守るために、まだできることがあります。
    データ侵害はいつでも起こり得ます。以下をお読みになり、あなたのパスワードを保護する方法を学んでください。
report-subhead-found-breaches = この Firefox Monitor からの詳細レポートには、このメールアドレスが含まれるすべての既知のデータ侵害が含まれています。
report-pwt-blurb =
    パスワードには価値があるため、毎日数千ものパスワードが盗まれ、ブラックマーケットで取り引きされたり売られたりしています。
    強度の高いパスワードはあなたのアカウントを保護するだけでなく、そこに属するすべての個人情報を保護します。
report-pwt-headline-1 = すべてのアカウントで異なるパスワードを使いましょう
report-pwt-summary-1 = どこでも同じパスワードを使いまわすことは、ハッカーにドアを開いているようなものです。彼らはそのパスワードを使ってあなたの他のアカウントにログインしようとします。
report-pwt-headline-2 = 強くユニークなパスワードを作成しましょう
report-pwt-summary-2 =
    悪いハッカーは一般的なパスワードのリストを使ってあなたのパスワードを当てようとします。
    文字数が多くランダムなパスワードにすることにより、盗まれにくくなります。
report-pwt-headline-3 = セキュリティの質問はもう一つのパスワードのように大切に扱いましょう
report-pwt-summary-3 =
    ウェブサイトはあなたの回答が正確かどうかを確認しません。毎回、ただ一致するかどうかを判定するだけです。
    文字数が多くランダムな回答を作成し、どこか安全な場所に保管してください。
report-pwt-headline-4 = パスワード管理ツールを使いましょう
report-pwt-summary-4 = 1Password や LastPass, Dashlane, Bitwarden などのサービスは強度の高いパスワードを生成するだけでなく、それらを安全に保管し、ウェブサイトへの入力も助けるため、サイトごとに憶えておく必要はありません。
# A link to legal information about mozilla products.
legal = 法的通知
# Share Firefox Monitor by email subject line
share-by-email-subject = データ侵害されているか確認してください。
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    こんにちは。
    { -brand-name } は無料のサービスで、データ侵害があるか確認できます。以下のように動作します:
    1. { "https://monitor.firefox.com" } を開いてあなたのメールアドレスを検索します。
    2. オンインアカウントがデータ侵害にさらされているか確認します。
    3. 次に取るべき行動について { -product-name } から、ヒントを得ます。
# Unsubscribe link in email.
email-unsub-link = 登録解除
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = マイダッシュボードを表示
# Button text
verify-email-cta = メールアドレスを確認
# Headline of verification email
email-link-expires = このリンクは 24 時間で有効期限が切れます
# Email headline
email-alert-hl = { $userEmail } に新しいデータ侵害がありました
# List headline
faq-list-headline = よくある質問
