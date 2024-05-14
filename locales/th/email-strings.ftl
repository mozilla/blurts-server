# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = ข้อกฎหมาย

# Unsubscribe link in email.
email-unsub-link = เลิกบอกรับ

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    คุณได้รับอีเมลนี้เนื่องจากคุณสมัครรับการแจ้งเตือนเกี่ยวกับ { -product-name }
    ไม่ต้องการอีเมลเหล่านี้อีกต่อไปใช่หรือไม่? { $unsubLink } นี่คืออีเมลอัตโนมัติ หากต้องการความช่วยเหลือ โปรดไปที่ { $faqLink }

# Button text
verify-email-cta = ตรวจสอบอีเมล

# Headline of verification email
email-link-expires = ลิงก์นี้จะหมดอายุใน 24 ชั่วโมง

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } พบข้อมูลของคุณในการรั่วไหลเหล่านี้

# Subject line of email
email-subject-no-breaches = { -product-name } ไม่พบการรั่วไหลที่ทราบ

# Subject line of email
email-subject-verify = ยืนยันอีเมลของคุณสำหรับ { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } จะเตือนคุณเกี่ยวกับการรั่วไหลของข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    ตอนนี้ไม่พบข้อมูลใด ๆ ที่รั่วไหล เราจะแจ้งเตือนคุณหากอีเมลของคุณปรากฏอยู่ในข้อมูลที่รั่วไหลใหม่

email-breach-alert-blurb =
    { -product-name } จะเตือนคุณเกี่ยวกับการรั่วไหลของข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    เราเพิ่งได้รับรายละเอียดเกี่ยวกับการรั่วไหลของข้อมูลของบริษัทอื่น

## 2022 email template. HTML tags should not be translated, e.g. `<a>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email


## Breach report


## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

