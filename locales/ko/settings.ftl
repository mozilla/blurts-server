# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } 설정

## Breach alert preferences

settings-alert-email-preferences-title = 이메일 설정
settings-alert-email-preferences-subtitle = 받고 싶은 이메일을 알려주세요.
settings-alert-preferences-allow-breach-alerts-title = 즉각적인 유출 경고
settings-alert-preferences-allow-breach-alerts-subtitle = 데이터 유출이 감지되면 이러한 알림이 즉시 전송됩니다.
settings-alert-preferences-option-one = 유출 알림을 해당 이메일 주소로 보냅니다.
settings-alert-preferences-option-two = 모든 유출 알림을 기본 이메일 주소로 보냅니다.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = 모니터링되는 이메일 주소
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = 계정에 최대 { $limit }개의 이메일에 대한 모니터링이 포함됩니다.
settings-email-verification-callout = 이메일 인증 필요
settings-resend-email-verification-link = 인증 이메일 재전송
settings-add-email-button = 이메일 주소 추가
settings-remove-email-button-label = 삭제
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = { $emailAddress } 모니터링 중지
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = { $breachCount }개의 유출 내역이 있습니다.

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor } 계정 삭제
settings-delete-monitor-free-account-description = 이렇게 하면 { -brand-monitor } 계정이 영구적으로 삭제되고 모든 알림이 꺼집니다.
settings-delete-monitor-free-account-cta-label = 계정 삭제
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } 계정이 영구적으로 삭제됩니다
settings-delete-monitor-free-account-dialog-lead-v2 = 모든 { -brand-monitor } 계정 정보가 삭제되며 더 이상 새로운 데이터 침해를 모니터링하지 않습니다. { -brand-mozilla-account }는 삭제되지 않습니다.
settings-delete-monitor-free-account-dialog-cta-label = 계정 삭제
settings-delete-monitor-free-account-dialog-cancel-button-label = 삭제 취소하고 뒤로 가기
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } 계정이 이제 삭제되었습니다.
settings-delete-monitor-account-confirmation-toast-dismiss-label = 닫기

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = 월간 { -brand-monitor } 보고서
settings-alert-preferences-allow-monthly-monitor-report-subtitle = 새로운 유출, 고쳐진 사항, 주의가 필요한 사항에 대한 월별 업데이트입니다.

## Settings page redesign

settings-tab-label-edit-info = 정보 수정
settings-tab-label-notifications = 알림 설정
settings-tab-label-manage-account = 계정 관리
settings-tab-subtitle-manage-account = { -product-name } 계정을 관리하세요.
settings-tab-notifications-marketing-title = 마케팅 커뮤니케이션
settings-tab-notifications-marketing-text = { -brand-monitor }와 { -brand-mozilla }, 다른 보안 제품에 대한 정기적인 업데이트를 제공합니다.
settings-tab-notifications-marketing-link-label = { -brand-mozilla } 이메일 설정으로 이동
