# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr } 個</nr> <label>修正済み</label>
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = このグラフは、あなたの個人情報がいくつ侵害されているかを表しています。
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = このグラフは、修復された侵害の合計数を表しています ({ $total_exposures_num } / { $total_fixed_exposures_num })
modal-cta-ok = OK
progress-card-heres-what-we-fixed-headline-all = 修復済みの侵害
progress-card-manually-fixed-headline = 手動で修復
dashboard-tab-label-action-needed = 対処が必要
dashboard-tab-label-fixed = 修正済み
dashboard-exposures-all-fixed-label = すべて修復済みです！
dashboard-fixed-area-headline-all = 修復されたすべての漏えいを確認
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = 絞り込み
dashboard-exposures-filter-company = 会社名
dashboard-exposures-filter-date-found = 発見日
dashboard-exposures-filter-date-found-last-seven-days = 最近 7 日間
dashboard-exposures-filter-date-found-last-thirty-days = 最近 30 日間
dashboard-exposures-filter-date-found-last-year = 昨年
dashboard-exposures-filter-status = ステータス
dashboard-exposures-filter-show-all = すべて表示
dashboard-exposures-filter-show-results = 結果を表示
dashboard-exposures-filter-reset = リセット

## Top banner on the dashboard

dashboard-top-banner-your-data-is-protected-title = あなたのデータは保護されています
dashboard-top-banner-your-data-is-protected-cta = 修復されたものを確認する
dashboard-top-banner-no-exposures-found-title = 侵害は見つかりませんでした
dashboard-no-exposures-label = 侵害は見つかりませんでした
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = 素晴らしい！{ $exposures_resolved_num } 件すべてのデータ漏えいが修復されました。引き続き監視し、新たな漏えいがあればお知らせします。

# About Exposure Indicators Modal

