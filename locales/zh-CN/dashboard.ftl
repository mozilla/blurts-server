# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading = <nr>{ $nr }</nr><label>次暴露</label>
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr><label>次已处理</label>
exposure-chart-legend-heading-type = 暴露
exposure-chart-legend-heading-nr = 数字
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = 此图表展示了您信息正在暴露的次数。
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = 此图表展示了已处理的暴露总数（共 { $total_exposures_num } 次，已处理其中 { $total_fixed_exposures_num } 次）
exposure-chart-returning-user-upgrade-prompt = 家庭地址、家庭成员等未包括在内。
exposure-chart-returning-user-upgrade-prompt-cta = 免费扫描
exposure-chart-scan-in-progress-prompt = <b>正在扫描：</b>地址、家庭成员等未包括在内。
modal-active-number-of-exposures-title = 关于正在暴露的数量
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all = 此图表展示了我们在您当前监控的 { $limit } 个邮箱地址的所有数据外泄事件中，检测到的每类数据的暴露总次数。
modal-active-number-of-exposures-part-two = 举例来说，如果您的电话号码暴露了 10 次，则可能代表 1 个电话号码在 10 个不同网站上被暴露，也可能代表 2 个电话号码 5 个不同网站上被暴露。
modal-active-number-of-exposures-part-three-all = 问题解决后，就会添加到”已处理“页面上已处理的暴露总数中。
modal-fixed-number-of-exposures-title = 关于已处理暴露的数量
modal-fixed-number-of-exposures-all = 此图表展示了您当前监控的所有邮箱地址中，已处理的数据外泄事件总数。暴露被标记为已处理后，就会添加到此处的总数中。
modal-cta-ok = 确定
modal-cta-got-it = 明白了
open-modal-alt = 打开对话框
close-modal-alt = 关闭对话框
progress-card-heres-what-we-fixed-headline-all = 已处理的项目
progress-card-manually-fixed-headline = 已手动处理
dashboard-tab-label-action-needed = 需要处理
dashboard-tab-label-fixed = 已处理
dashboard-exposures-all-fixed-label = 已处理完毕！
dashboard-exposures-area-headline = 查看暴露了您信息的所有网站
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = 我们检测到您的数据存在 { $exposures_unresolved_num } 次暴露。
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 = 在 { $data_breach_unresolved_num } 次数据外泄事件中出现过。
dashboard-fixed-area-headline-all = 查看所有已处理的暴露
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = 筛选
dashboard-exposures-filter-company = 公司
dashboard-exposures-filter-date-found = 发现日期
dashboard-exposures-filter-date-found-last-seven-days = 过去 7 天
dashboard-exposures-filter-date-found-last-thirty-days = 过去30天
dashboard-exposures-filter-date-found-last-year = 去年
dashboard-exposures-filter-status = 状态
popover-open-filter-settings-alt = 选择筛选器
dashboard-exposures-filter-show-all = 全部显示
dashboard-exposures-filter-show-results = 显示结果
dashboard-exposures-filter-reset = 重置

## Top banner on the dashboard

dashboard-top-banner-section-label = 面板摘要
dashboard-top-banner-your-data-is-protected-title = 您的数据已受保护
dashboard-top-banner-your-data-is-protected-cta = 看看处理了哪些暴露
dashboard-top-banner-protect-your-data-title = 一起保护您的数据
dashboard-top-banner-protect-your-data-cta = 一起处理此暴露
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = 我们检测到您的数据存在 { $exposures_unresolved_num } 次暴露。
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 = 在 { $data_breach_unresolved_num } 次数据外泄事件中出现过。我们会一步步指导您处理。
dashboard-top-banner-no-exposures-found-title = 没有检测到暴露
dashboard-top-banner-non-us-no-exposures-found-description = 好消息！我们搜索了所有已知的数据外泄事件，没有检测到存在暴露。我们将继续监控此邮箱地址，并在发生新的外泄事件时向您发出警报。
dashboard-no-exposures-label = 没有检测到暴露
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = 很好！您数据的 { $exposures_resolved_num } 次暴露已全部处理完毕。我们将继续监控此邮箱地址，并在发生新的外泄事件时向您发出警报。
dashboard-top-banner-monitor-more-cta = 监控更多邮箱地址

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    我们会搜索所有已知的数据外泄事件。
    您的暴露状态将是以下状态中的一种。
modal-exposure-indicator-title = 暴露状态
modal-exposure-indicator-action-needed = 有待处理事项，需要进一步或手动操作以完成处理。
modal-exposure-indicator-fixed = 暴露问题已解决，无需再采取行动。
