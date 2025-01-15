# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = การตั้งค่า { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = การกำหนดลักษณะอีเมล
settings-alert-email-preferences-subtitle = บอกเราว่าคุณต้องการรับอีเมลใดบ้าง
settings-alert-preferences-allow-breach-alerts-title = แจ้งเตือนการละเมิดทันที
settings-alert-preferences-allow-breach-alerts-subtitle = การแจ้งเตือนเหล่านี้จะถูกส่งทันทีเมื่อตรวจพบการละเมิดข้อมูล
settings-alert-preferences-option-one = ส่งการแจ้งเตือนการละเมิดไปยังที่อยู่อีเมลที่ได้รับผลกระทบ
settings-alert-preferences-option-two = ส่งการแจ้งเตือนการละเมิดทั้งหมดไปยังที่อยู่อีเมลหลัก

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = ที่อยู่อีเมลที่ตรวจสอบ
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = บัญชีของคุณตรวจสอบอีเมลได้สูงสุด { $limit } อีเมล
settings-email-verification-callout = ต้องมีการยืนยันอีเมล
settings-resend-email-verification-link = ส่งอีเมลยืนยันใหม่
settings-add-email-button = เพิ่มที่อยู่อีเมล
settings-remove-email-button-label = เอาออก
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = หยุดตรวจสอบ { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = ปรากฏในการละเมิดที่ทราบ { $breachCount } ครั้ง

## Delete Monitor account

settings-delete-monitor-free-account-title = ลบบัญชี { -brand-monitor }
settings-delete-monitor-free-account-description = การกระทำนี้จะลบบัญชี { -brand-monitor } ของคุณอย่างถาวรและปิดการแจ้งเตือนทั้งหมด
settings-delete-monitor-free-account-cta-label = ลบบัญชี
settings-delete-monitor-free-account-dialog-title = บัญชี { -brand-monitor } ของคุณจะถูกลบออกอย่างถาวร
settings-delete-monitor-free-account-dialog-lead-v2 = ข้อมูลบัญชี { -brand-monitor } ของคุณทั้งหมดจะถูกลบ และเราจะไม่ตรวจสอบการละเมิดข้อมูลใหม่อีกต่อไป การกระทำนี้จะไม่ลบ { -brand-mozilla-account } ของคุณ
settings-delete-monitor-free-account-dialog-cta-label = ลบบัญชี
settings-delete-monitor-free-account-dialog-cancel-button-label = ไม่เป็นไร พาฉันกลับไปดีกว่า
settings-delete-monitor-account-confirmation-toast-label-2 = บัญชี { -brand-monitor } ของคุณถูกลบแล้ว
settings-delete-monitor-account-confirmation-toast-dismiss-label = ปิด

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = รายงาน { -brand-monitor } รายเดือน
settings-alert-preferences-allow-monthly-monitor-report-subtitle = ข้อมูลอัปเดตรายเดือนซึ่งประกอบด้วยการเปิดเผยใหม่ที่พบ สิ่งที่แก้ไขไปแล้ว และสิ่งที่ต้องการความสนใจจากคุณ

## Settings page redesign

settings-tab-label-edit-info = แก้ไขข้อมูลของคุณ
settings-tab-label-notifications = ตั้งค่าการแจ้งเตือน
settings-tab-label-manage-account = จัดการบัญชี
settings-tab-subtitle-manage-account = จัดการบัญชี { -product-name } ของคุณ
settings-tab-notifications-marketing-title = การสื่อสารทางการตลาด
settings-tab-notifications-marketing-text = การอัปเดตเป็นระยะเกี่ยวกับ { -brand-monitor }, { -brand-mozilla } และผลิตภัณฑ์ด้านความปลอดภัยอื่นๆ ของเรา
settings-tab-notifications-marketing-link-label = ไปที่การตั้งค่าอีเมล { -brand-mozilla }
