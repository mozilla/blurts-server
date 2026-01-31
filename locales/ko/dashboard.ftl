# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading = <nr>{ $nr }건의</nr> <label>유출</label>
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }건의</nr> <label>해결</label>
exposure-chart-legend-heading-type = 노출
exposure-chart-legend-heading-nr = 숫자
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = 이 차트는 정보가 실제로 노출된 횟수를 보여줍니다.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = 이 차트는 수정된 총 노출({ $total_exposures_num }건 중 { $total_fixed_exposures_num }건)을 보여줍니다.
exposure-chart-returning-user-upgrade-prompt = 집 주소, 가족 구성원 등은 아직 포함되지 않았습니다.
exposure-chart-returning-user-upgrade-prompt-cta = 무료 스캔 시작
exposure-chart-scan-in-progress-prompt = <b>스캔 진행 중:</b> 주소, 가족 등은 아직 포함되지 않았습니다.
modal-active-number-of-exposures-title = 활성 노출 수
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all = 이 차트에는 현재 모니터링하고 있는 최대 { $limit }개의 이메일 주소에 대한 모든 데이터 침해 중 각 유형 별 데이터 노출의 총 횟수가 포함되어 있습니다.
modal-active-number-of-exposures-part-two = 예를 들어 전화번호가 10번 노출된 경우 하나의 전화번호가 10개의 다른 사이트에 노출되었거나 2개의 다른 전화번호가 5개의 다른 사이트에 노출되었음을 의미할 수 있습니다.
modal-active-number-of-exposures-part-three-all = 문제가 해결되면 해결 페이지의 총 해결 수에 추가됩니다.
modal-fixed-number-of-exposures-title = 해결된 노출 수
modal-fixed-number-of-exposures-all = 이 차트에는 현재 모니터링하고 있는 모든 이메일 주소에 대해 해결된 총 데이터 유출 수가 포함되어 있습니다. 유출이 해결된 것으로 표시되면 여기에서 총 합계에 추가됩니다.
modal-cta-ok = 확인
modal-cta-got-it = 확인
open-modal-alt = 모달 열기
close-modal-alt = 모달 닫기
progress-card-heres-what-we-fixed-headline-all = 해결한 내용은 다음과 같습니다.
progress-card-manually-fixed-headline = 수동으로 해결
dashboard-tab-label-action-needed = 조치 필요
dashboard-tab-label-fixed = 해결됨
dashboard-exposures-all-fixed-label = 모두 해결되었습니다!
dashboard-exposures-area-headline = 정보가 노출된 모든 사이트 보기
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = { $exposures_unresolved_num } 데이터가 노출된 것으로 나타났습니다.
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 = 이는 { $data_breach_unresolved_num }건의 데이터 침해에서 나타났습니다.
dashboard-fixed-area-headline-all = 해결된 유출 모두 보기
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = 필터
dashboard-exposures-filter-company = 회사
dashboard-exposures-filter-date-found = 발견된 날짜
dashboard-exposures-filter-date-found-last-seven-days = 최근 7일
dashboard-exposures-filter-date-found-last-thirty-days = 최근 30일
dashboard-exposures-filter-date-found-last-year = 작년
dashboard-exposures-filter-status = 상태
popover-open-filter-settings-alt = 필터 선택
dashboard-exposures-filter-show-all = 모두 보기
dashboard-exposures-filter-show-results = 결과 보기
dashboard-exposures-filter-reset = 재설정

## Top banner on the dashboard

dashboard-top-banner-section-label = 대시보드 요약
dashboard-top-banner-your-data-is-protected-title = 데이터가 보호됩니다.
dashboard-top-banner-your-data-is-protected-cta = 해결된 사항 보기
dashboard-top-banner-protect-your-data-title = 데이터를 보호합시다.
dashboard-top-banner-protect-your-data-cta = 문제를 해결합시다.
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = { $exposures_unresolved_num }개의 데이터가 노출된 것으로 나타났습니다.
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 = { $data_breach_unresolved_num }개의 데이터 침해에서 나타났습니다. 이를 해결하는 방법에 대해 단계별로 안내해 드리겠습니다.
dashboard-top-banner-no-exposures-found-title = 노출 결과 없음
dashboard-top-banner-non-us-no-exposures-found-description = 좋은 소식입니다! 알려진 모든 데이터 유출을 검색했지만 노출된 내용은 발견되지 않았습니다. 이메일 주소를 계속 모니터링하고 새로운 유출이 발생하면 경고를 해드립니다.
dashboard-no-exposures-label = 노출 결과 없음
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = 잘하셨습니다. 데이터의 모든 { $exposures_resolved_num }개의 노출이 수정되었습니다! 계속 모니터링해서 새로운 노출이 있으면 알려드리겠습니다.
dashboard-top-banner-monitor-more-cta = 더 많은 이메일 모니터링

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    알려진 모든 데이터 침해에 대한 노출을 검색합니다.
    노출은 다음 중 하나의 상태입니다:
modal-exposure-indicator-title = 노출 상태
modal-exposure-indicator-action-needed = 작업을 완료하려면 고급 작업이나 수동 작업이 필요합니다.
modal-exposure-indicator-fixed = 노출이 해결되었으며 취해야 할 조치가 없습니다.
