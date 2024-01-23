# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = 이 차트는 정보가 실제로 노출된 횟수를 보여줍니다.
exposure-chart-returning-user-upgrade-prompt = 집 주소, 가족 구성원 등은 아직 포함되지 않았습니다.
exposure-chart-returning-user-upgrade-prompt-cta = 무료 스캔 시작
exposure-chart-scan-in-progress-prompt = <b>스캔 진행 중:</b> 주소, 가족 등은 아직 포함되지 않았습니다.
modal-active-number-of-exposures-title = 활성 노출 수
modal-active-number-of-exposures-part-two = 예를 들어 전화번호가 10번 노출된 경우 하나의 전화번호가 10개의 다른 사이트에 노출되었거나 2개의 다른 전화번호가 5개의 다른 사이트에 노출되었음을 의미할 수 있습니다.
modal-active-number-of-exposures-part-three-all = 문제가 해결되면 해결 페이지의 총 해결 수에 추가됩니다.
modal-fixed-number-of-exposures-title = 해결된 노출 수
modal-fixed-number-of-exposures-all = 이 차트에는 현재 모니터링하고 있는 모든 이메일 주소에 대해 해결된 총 데이터 유출 수가 포함되어 있습니다. 유출이 해결된 것으로 표시되면 여기에서 총 합계에 추가됩니다.
modal-cta-ok = 확인
modal-open-alt = 열기
modal-close-alt = 닫기
progress-card-heres-what-we-fixed-headline-all = 해결한 내용은 다음과 같습니다.
progress-card-manually-fixed-headline = 수동으로 해결
dashboard-tab-label-action-needed = 조치 필요
dashboard-tab-label-fixed = 해결됨
dashboard-exposures-area-headline = 정보가 노출된 모든 사이트 보기
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = { $exposures_unresolved_num } 데이터가 노출된 것으로 나타났습니다.
dashboard-fixed-area-headline-all = 해결된 유출 모두 보기
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = 필터
dashboard-exposures-filter-date-found-last-seven-days = 최근 7일
dashboard-exposures-filter-date-found-last-thirty-days = 최근 30일
dashboard-exposures-filter-date-found-last-year = 작년
dashboard-exposures-filter-status = 상태
dashboard-exposures-filter-status-action-needed = 조치 필요
dashboard-exposures-filter-status-in-progress = 진행중
dashboard-exposures-filter-status-fixed = 해결됨
popover-open-filter-settings-alt = 필터 선택
dashboard-exposures-filter-show-all = 모두 보기
dashboard-exposures-filter-show-results = 결과 보기
dashboard-exposures-filter-reset = 재설정

## Top banner on the dashboard

dashboard-top-banner-section-label = 대시보드 요약
dashboard-top-banner-scan-in-progress-title = 스캔이 아직 진행 중입니다.
dashboard-top-banner-your-data-is-protected-title = 데이터가 보호됩니다.
dashboard-top-banner-your-data-is-protected-cta = 해결된 사항 보기
dashboard-top-banner-lets-keep-protecting-title = 데이터를 계속 보호합시다.
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description = 아직 해결해야 할 노출이 { $exposures_unresolved_num }개 남아 있습니다. 계속해서 보호하세요. 단계별로 안내해드리겠습니다.
dashboard-top-banner-lets-keep-protecting-cta = 계속 해봅시다.
dashboard-top-banner-protect-your-data-title = 데이터를 보호합시다.
dashboard-top-banner-protect-your-data-cta = 문제를 해결합시다.
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = { $exposures_unresolved_num }개의 데이터가 노출된 것으로 나타났습니다.
dashboard-top-banner-no-exposures-found-title = 노출 결과 없음
dashboard-top-banner-non-us-no-exposures-found-description = 좋은 소식입니다! 알려진 모든 데이터 유출을 검색했지만 노출된 내용은 발견되지 않았습니다. 이메일 주소를 계속 모니터링하고 새로운 유출이 발생하면 경고를 해드립니다.
dashboard-no-exposures-label = 노출 결과 없음
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = 잘하셨습니다. 데이터의 모든 { $exposures_resolved_num }개의 노출이 수정되었습니다! 계속 모니터링해서 새로운 노출이 있으면 알려드리겠습니다.
dashboard-top-banner-monitor-more-cta = 더 많은 이메일 모니터링

# About Exposure Statuses Modal

modal-exposure-status-title = 노출 상태 정보
modal-exposure-status-description-all =
    알려진 모든 데이터 침해에 대한 노출을 검색합니다.
    노출은 다음 중 하나의 상태입니다:
modal-exposure-status-action-needed = <b>조치 필요</b>는 현재 진행중이며 문제를 해결하기 위한 조치를 취해야 함을 의미합니다.
modal-exposure-status-fixed = <b>수정됨</b>은 노출이 해결되었으며 취해야 할 조치가 없음을 의미합니다.
