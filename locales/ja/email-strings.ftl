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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = この { -product-name } からの詳細レポートには、このメールアドレスが含まれるすべての既知のデータ侵害が含まれています。
report-no-breaches = あなたのメールアドレスは既知の侵害情報のデータベースに見つかりませんでした。ただし、侵害はいつでも起こり得ます。以下の手順でオンライン上のあなたの個人情報を安全に保ちましょう。
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
breach-alert-headline = あなたのアカウント情報はデータ侵害により漏洩しています。
breach-alert-subhead = 最近報告されたデータ侵害に、あなたのメールアドレスと次のデータが含まれています
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
