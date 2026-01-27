# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
       *[other] <nr>{ $nr }</nr> <label>次資料曝光事件</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>次已處理事件</label>
exposure-chart-legend-heading-type = 資料曝光事件
exposure-chart-legend-heading-nr = 次數
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = 這張圖顯示您的資訊被外流的次數。
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = 此圖表顯示所有資料曝光事件中，已處理事件的數量（{ $total_fixed_exposures_num } / { $total_exposures_num }）
exposure-chart-returning-user-upgrade-prompt = 尚不包含住家地址、家庭成員與更多資訊。
exposure-chart-returning-user-upgrade-prompt-cta = 進行免費掃描
exposure-chart-scan-in-progress-prompt = <b>掃描中：</b>尚未包含地址、家庭成員等資訊。
modal-active-number-of-exposures-title = 您被外洩的資料數量
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all = 此圖表顯示了我們發現到，您目前監控的 { $limit } 組電子郵件地址的各類外洩資料的合計次數。
modal-active-number-of-exposures-part-two = 舉例來說：假設您的電話號碼外洩 10 次，可能代表的是曾經在 10 個網站被外洩，或是有 2 組不同號碼各自在 5 個網站中被外洩。
modal-active-number-of-exposures-part-three-all = 事件處理完後，就會加入到「已處理」頁面中的已處理事件總數。
modal-fixed-number-of-exposures-title = 關於您已處理過的資料曝光數
modal-fixed-number-of-exposures-all = 此圖表包含您目前監控的所有信箱當中已修正的資料外洩事件總數。曝光次數被標示為「固定」後就會在此累計。
modal-cta-ok = 確定
modal-cta-got-it = 知道了！
open-modal-alt = 開啟對話框
close-modal-alt = 關閉對話框
progress-card-heres-what-we-fixed-headline-all = 以下是您處理過的項目
progress-card-manually-fixed-headline = 已手動處理
dashboard-tab-label-action-needed = 需要採取行動
dashboard-tab-label-fixed = 已處理
dashboard-exposures-all-fixed-label = 都處理完了！
dashboard-exposures-area-headline = 檢視所有曾外洩您的資訊的網站
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
       *[other] 我們發現您的資料曾被外洩 { $exposures_unresolved_num } 次。
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [zero] 沒有出現在資料外洩事件中。
       *[other] 出現在 { $data_breach_unresolved_num } 場資料外洩事件中。
    }
dashboard-fixed-area-headline-all = 檢視所有處理過的資料外洩事件
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = 篩選
dashboard-exposures-filter-company = 公司
dashboard-exposures-filter-date-found = 發現日期
dashboard-exposures-filter-date-found-last-seven-days = 最近 7 天
dashboard-exposures-filter-date-found-last-thirty-days = 最近 30 天
dashboard-exposures-filter-date-found-last-year = 去年
dashboard-exposures-filter-status = 狀態
popover-open-filter-settings-alt = 選擇篩選條件
dashboard-exposures-filter-show-all = 顯示全部
dashboard-exposures-filter-show-results = 顯示結果
dashboard-exposures-filter-reset = 重設

## Top banner on the dashboard

dashboard-top-banner-section-label = 儀錶板摘要
dashboard-top-banner-your-data-is-protected-title = 您的資料受到保護
dashboard-top-banner-your-data-is-protected-cta = 看看處理了哪些事件
dashboard-top-banner-protect-your-data-title = 一起保護您的資料
dashboard-top-banner-protect-your-data-cta = 一起來修正
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
       *[other] 我們發現您的資料曾被外洩 { $exposures_unresolved_num } 次。
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
       *[other] 出現在 { $data_breach_unresolved_num } 場資料外洩事件中，我們將帶您逐步處理此問題。
    }
dashboard-top-banner-no-exposures-found-title = 沒有找到曝光資料
dashboard-top-banner-non-us-no-exposures-found-description = 好消息！我們搜尋了所有已知的資料外洩事件，當中並未找到與您有關的曝光情形。我們會持續監控您的電子郵件信箱，並在有新的外洩事件發生時通知。
dashboard-no-exposures-label = 沒有曝光紀錄
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] 做得好，您已經處理完曝光的資料了！我們將持續監控，並且在新的資料外洩事件發生時通知。
       *[other] 做得好，您已經處理完全部 { $exposures_resolved_num } 筆曝光的資料了！我們將持續監控，並且在新的資料外洩事件發生時通知。
    }
dashboard-top-banner-monitor-more-cta = 監控更多電子郵件地址

# About Exposure Indicators Modal

modal-exposure-status-description-all = 我們會在所有已知的資料外洩事件中搜尋曝光的資料。您的資料曝光事件會有下列任一種狀態：
modal-exposure-indicator-title = 資料曝光類型
modal-exposure-indicator-action-needed = 需要您進行進階或手動處理，才能完成某些動作。
modal-exposure-indicator-fixed = 此資料外洩事件已處理完成，無需再採取任何行動。
