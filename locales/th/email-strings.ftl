# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = เข้าสู่ระบบ

## Email footers

email-footer-support-heading = มีคำถามเกี่ยวกับ { -brand-mozilla-monitor }
email-footer-support-content = เข้าดู<support-link>ศูนย์สนับสนุน</support-link>ของเราเพื่อขอความช่วยเหลือ
email-footer-trigger-transactional = คุณได้รับอีเมลนี้ในฐานะสมาชิกของ { -brand-mozilla-monitor }
email-footer-reason-subscriber = คุณได้รับอีเมลอัตโนมัตินี้เพราะคุณเป็นสมาชิกของ { -brand-mozilla-monitor } หากคุณได้รับอีเมลนี้โดยข้อผิดพลาด คุณไม่จำเป็นต้องดำเนินการใดๆ สำหรับข้อมูลเพิ่มเติม โปรดไปที่<support-link>ฝ่ายสนับสนุน { -brand-mozilla }</support-link>
email-footer-reason-subscriber-one-time = คุณได้รับอีเมลอัตโนมัติครั้งเดียวนี้เพราะคุณเป็นสมาชิกของ { -brand-monitor-plus } คุณจะไม่ได้รับอีเมลแบบนี้เพิ่มอีก สำหรับข้อมูลเพิ่มเติม โปรดไปที่<support-link>ฝ่ายสนับสนุน { -brand-mozilla }</support-link>
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    ไปที่ศูนย์สนับสนุนของเราเพื่อขอความช่วยเหลือ:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = ข้อมูลการรั่วไหลจัดทำโดย { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = ข้อมูลการละเมิดจัดทำโดย <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = ความเป็นส่วนตัว
email-unsubscribe-link = <link_to_unsub>ยกเลิกการบอกรับ</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = ยกเลิกการบอกรับ: { $unsub_link }
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

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = รายละเอียการรั่วไหลของข้อมูลบน { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } พบข้อมูลของคุณในการรั่วไหลของข้อมูลบน { $company-name } เมื่อวันที่ { $breach-date } และคุณได้รับการแจ้งเตือนนี้เพราะคุณได้ลงทะเบียนสำหรับ<link_to_settings>การแจ้งเตือนการรั่วไหล</link_to_settings>
email-breach-alert-all-source-title-1 = รายละเอียดการรั่วไหล
email-breach-alert-company = บริษัท:
email-breach-alert-date-of-breach = วันที่เกิดการรั่วไหล:
email-breach-alert-info-exposed = ข้อมูลของคุณที่ถูกเปิดเผย:
email-breach-alert-next-steps = ขั้นต่อไป
email-breach-alert-next-steps-description = <sign_in_link>ลงชื่อเข้า</sign_in_link>ไปยังแดชบอร์ด { -brand-mozilla-monitor } ของคุณ เราจะแนะนำขั้นตอนต่าง ๆ ที่จำเป็นในการแก้ไข
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = แก้ไขปัญหาการรั่วไหลบนแดชบอร์ด
email-breach-alert-faqs-title = คำถามที่พบบ่อย
email-breach-alert-faq-qn-1 = ทำไมฉันจึงได้รับสิ่งนี้?
email-breach-alert-faq-ans-1 = คุณได้ลงทะเบียนรับการแจ้งเตือนการรั่วไหลของข้อมูล <link_to_settings>อัปเดตค่าปรับแต่งของคุณ</link_to_settings> ได้ทุกเมื่อที่เมนูการตั้งค่า
email-breach-alert-faq-qn-2 = ทำไมฉันถึงไม่รู้จักบริษัทหรือเว็บไซต์นี้?
email-breach-alert-faq-ans-2 = อาจเพราะมีการเปลี่ยนเจ้าของหรือชื่อ, เกี่ยวกับบัญชีเก่าหรือบัญชีที่ถูกสร้างให้คุณ หรือมาจากการซื้อขายข้อมูลส่วนบุคคลที่ถูกเปิดเผย
email-breach-alert-faq-qn-3 = การแจ้งเตือนการรั่วไหลของข้อมูลคืออะไร?
email-breach-alert-faq-ans-3 = มันคือการแจ้งเตือนที่ { -brand-mozilla-monitor } ส่งให้เมื่อข้อมูลส่วนบุคคลที่เฝ้าระวังอยู่ถูกเปิดเผย ขโมย หรือคัดลอกโดยไม่ได้รับอนุญาต
email-breach-alert-faq-qn-4 = { -brand-mozilla-monitor } คืออะไร?
email-breach-alert-faq-ans-4 = มันคือบริการแจ้งเตือนการรั่วไหลของข้อมูลฟรีที่จะเตือนคุณเมื่อบัญชีออนไลน์ของคุณถูกพบในการรั่วไหลของข้อมูล
