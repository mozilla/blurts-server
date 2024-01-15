# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = 다른 이메일 주소 추가
close-dialog-alt = 대화상자 닫기
# $total is the number of emails a user is allowed to add
add-email-your-account-includes = 귀하의 계정에는 최대 { $total }개의 이메일 주소에 대한 모니터링이 포함됩니다. 새 이메일 주소를 추가하여 위반 여부를 확인하세요.
add-email-address-input-label = 이메일 주소
add-email-send-verification-button = 확인 링크 보내기
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = { $email } 주소로 전송된 링크를 확인해 { -brand-fx-monitor }에 추가합니다. 모든 이메일 주소를 <a { $settings-href }>설정</a>에서 관리하세요.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = <b>{ $email }</b>에 전송된 링크를 확인하여 { -brand-mozilla-monitor }에 추가하세요.
