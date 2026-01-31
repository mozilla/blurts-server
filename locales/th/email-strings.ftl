# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = เข้าสู่ระบบ

## Email footers

email-footer-support-heading = มีคำถามเกี่ยวกับ { -brand-mozilla-monitor }
email-footer-support-content = เข้าดู<support-link>ศูนย์สนับสนุน</support-link>ของเราเพื่อขอความช่วยเหลือ
email-footer-trigger-transactional = คุณได้รับอีเมลนี้ในฐานะสมาชิกของ { -brand-mozilla-monitor }
email-footer-source-hibp = ข้อมูลการละเมิดจัดทำโดย <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = ความเป็นส่วนตัว
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = ตรวจสอบอีเมล
# Headline of verification email
email-link-expires = ลิงก์นี้จะหมดอายุใน 24 ชั่วโมง

##

# Subject line of email
email-subject-found-breaches = { -product-name } พบข้อมูลของคุณในการละเมิดเหล่านี้
# Subject line of email
email-subject-no-breaches = { -product-name } ไม่พบการละเมิดที่ทราบ
# Subject line of email
email-subject-verify = ยืนยันอีเมลของคุณสำหรับ { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } จะเตือนคุณเกี่ยวกับการละเมิดข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    ตอนนี้ยังไม่พบการละเมิดใด เราจะแจ้งเตือนคุณหากอีเมลของคุณปรากฏอยู่ในการละเมิดใหม่

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = ข้อมูลการละเมิดจัดทำโดย <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = ปกป้องข้อมูลของคุณตั้งแต่ตอนนี้
email-verify-simply-click = เพียงคลิกลิงก์ด้านล่างเพื่อเสร็จสิ้นการตรวจสอบบัญชีของคุณ

## Breach report

email-breach-summary = นี่คือสรุปการละเมิดข้อมูลของคุณ
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = ผลลัพธ์การค้นหาสำหรับบัญชี { $email-address } ของคุณตรวจพบว่าอีเมลของคุณอาจถูกเปิดเผย เราแนะนำให้คุณดำเนินการทันทีเพื่อแก้ไขการละเมิดนี้
email-dashboard-cta = ไปที่แดชบอร์ด

## Breach alert email

email-breach-alert-all-subject = ตรวจพบการละเมิดข้อมูลใหม่
email-breach-alert-all-preview = เราจะแนะนำคุณผ่านขั้นตอนต่างๆ เพื่อแก้ไขปัญหา
email-breach-alert-all-hero-heading = คุณถูกละเมิดข้อมูลครั้งใหม่
email-breach-alert-all-hero-subheading = ไม่ต้องกังวล เราช่วยคุณแก้ไขปัญหานี้ได้
email-breach-alert-all-lead = { -brand-mozilla-monitor } ค้นพบการละเมิดข้อมูลต่อไปนี้ซึ่งมีข้อมูลส่วนบุคคลของคุณ:
email-breach-alert-all-source-title = แหล่งที่มาของการละเมิด:
email-breach-alert-all-data-points-title = ข้อมูลของคุณที่ถูกเปิดเผย:
email-breach-alert-all-next-steps-lead = เราจะแนะนำคุณทีละขั้นตอนเกี่ยวกับวิธีแก้ไขการละเมิดข้อมูลนี้
email-breach-alert-all-next-steps-cta-label = มาเริ่มกันเลย
email-breach-alert-all-next-steps-button-dashboard = ไปที่แดชบอร์ด
