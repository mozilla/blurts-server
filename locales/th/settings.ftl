# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - การตั้งค่า
settings-page-title = การตั้งค่า { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = การกำหนดลักษณะการแจ้งเตือนการรั่วไหล
settings-alert-preferences-option-one = ส่งการแจ้งเตือนการรั่วไหลไปยังที่อยู่อีเมลที่ได้รับผลกระทบ
settings-alert-preferences-option-two = ส่งการแจ้งเตือนการรั่วไหลทั้งหมดไปยังที่อยู่อีเมลหลัก

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (หลัก)
settings-email-list-title = ที่อยู่อีเมลที่ตรวจสอบ
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info = บัญชีของคุณตรวจสอบอีเมลได้สูงสุด { $limit } อีเมล
settings-email-verification-callout = ต้องมีการยืนยันอีเมล
settings-resend-email-verification-link = ส่งอีเมลยืนยันใหม่
settings-add-email-button = เพิ่มที่อยู่อีเมล
# Deprecated
settings-delete-email-button = ลบที่อยู่อีเมล
settings-remove-email-button-label = เอาออก
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = หยุดตรวจสอบ { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info = ปรากฏใน { $breachCount } การรั่วไหลที่ทราบ

## Cancel Premium subscription

settings-cancel-premium-subscription-title = ยกเลิกการสมัครสมาชิก { -brand-premium }
settings-cancel-premium-subscription-info = การสมัครสมาชิกของคุณจะเปลี่ยนกลับไปเป็นบัญชีฟรีหลังจากรอบการเรียกเก็บเงินปัจจุบันสิ้นสุดลง ผลการสแกนการปกป้องความเป็นส่วนตัวของคุณจะถูกลบอย่างถาวร และคุณจะตรวจสอบการรั่วไหลของข้อมูลสำหรับที่อยู่อีเมลได้เพียง 1 รายการเท่านั้น

## Deactivate account

settings-deactivate-account-title = ปิดการใช้งานบัญชี
settings-deactivate-account-info-2 = คุณสามารถปิดการใช้งาน { -product-short-name } ได้โดยการลบ { -brand-mozilla-account } ของคุณ
settings-fxa-link-label-3 = ไปที่การตั้งค่า { -brand-mozilla-account }

## Add email dialog

settings-email-dialog-title = เพิ่มที่อยู่อีเมลอื่น
settings-add-email-text = เพิ่มที่อยู่อีเมลใหม่เพื่อดูว่ามีส่วนเกี่ยวข้องกับการรั่วไหลหรือไม่
settings-email-input-label = ที่อยู่อีเมล
settings-send-email-verification-button = ส่งลิงก์ยืนยัน

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = เราเสียใจที่เห็นคุณจากไป <br /> คุณช่วยบอกเราหน่อยได้ไหมว่าทำไมคุณถึงปิดการใช้งาน?
settings-unsubscribe-dialog-info = ประสบการณ์การใช้งานของคุณเป็นสิ่งสำคัญสำหรับเรา เราอ่านทุกคำตอบและนำคำตอบเหล่านั้นไปพิจารณา
settings-unsubscribe-dialog-message-placeholder = มีอะไรไหมที่ควรจะปรับปรุงให้ดีกว่านี้?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = โปรดทราบว่าบริการ { -brand-monitor-premium } ทั้งหมดของคุณจะถูก<a { $faq_href }>ลบอย่างถาวร</a> หลังจากรอบการเรียกเก็บเงินปัจจุบันของคุณสิ้นสุดลง
settings-unsubscribe-dialog-continue = ดำเนินการยกเลิกต่อไป
settings-unsubscribe-dialog-cancel = ไม่เป็นไร พาฉันกลับไปดีกว่า
