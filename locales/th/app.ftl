# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = ที่อยู่อีเมลนี้ไม่ได้บอกรับ { -product-name }
user-add-invalid-email = อีเมลไม่ถูกต้อง
user-add-too-many-emails = คุณกำลังตรวจสอบจำนวนสูงสุดของอีเมล
user-add-duplicate-email = อีเมลนี้ได้ถูกเพิ่มไปยัง { -product-name } แล้ว
user-add-verification-email-just-sent = ไม่สามารถส่งอีเมลยืนยันอื่นได้อย่างรวดเร็ว โปรดลองอีกครั้ง
user-add-unknown-error = มีบางอย่างผิดปกติกับการเพิ่มที่อยู่อีเมลอื่น โปรดลองอีกครั้ง
user-delete-unknown-error = มีบางอย่างผิดปกติกับการลบที่อยู่อีเมล โปรดลองอีกครั้ง
user-verify-token-error = จำเป็นต้องใช้โทเค็นการยืนยัน
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = ข้อมูลที่ถูกบุกรุก:
# Link title
more-about-this-breach = เพิ่มเติมเกี่ยวกับการละเมิดนี้
what-data = ชนิดข้อมูลที่ถูกบุกรุก:
delayed-reporting-headline = ทำไมจึงใช้เวลานานในการรายงานการละเมิดนี้?
delayed-reporting-copy =
    บางครั้งอาจใช้เวลาหลายเดือนหรือหลายปีกว่าข้อมูลประจำตัวที่ถูกเปิดเผย
    ในการละเมิดของข้อมูลจะปรากฏบนเว็บมืด การละเมิดจะถูกเพิ่มในฐานข้อมูลของเรา
    ทันทีที่ถูกค้นพบและยืนยัน

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = ภาพรวม
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = เมื่อ { $breachDate } { $breachTitle } ได้เกิดการละเมิด เมื่อค้นพบและยืนยันการละเมิดแล้ว การละเมิดดังกล่าวได้ถูกเพิ่มในฐานข้อมูลของเราเมื่อ { $addedDate }

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = เพิ่มการละเมิดเมื่อ:
# Section headline
rec-section-headline = สิ่งที่ควรทำสำหรับการละเมิดข้อมูลนี้​​​​​​​​​​​​​​​​
rec-section-subhead = เราขอแนะนำให้คุณทำตามขั้นตอนเหล่านี้เพื่อรักษาข้อมูลส่วนบุคคลของคุณให้ปลอดภัยและปกป้องข้อมูลประจำตัวดิจิทัลของคุณ
# Section headline
rec-section-headline-no-pw = วิธีปกป้องข้อมูลส่วนตัวของคุณ​​​​​​​​​​​​​​​​
rec-section-subhead-no-pw = แม้ว่ารหัสผ่านจะไม่ได้ถูกเปิดเผยในการละเมิดข้อมูลครั้งนี้ แต่ยังมีขั้นตอนที่คุณสามารถทำได้เพื่อปกป้องข้อมูลส่วนตัวของคุณให้ดียิ่งขึ้น​​​​​​​​​​​​​​​​

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = บัญชี Mozilla
open-in-new-tab-alt = เปิดลิงก์ในแท็บใหม่

## Search Engine Optimization

meta-desc-2 = ค้นพบว่าคุณเป็นส่วนหนึ่งในการละเมิดข้อมูลหรือไม่โดยใช้ { -brand-fx-monitor } เราจะช่วยให้คุณเข้าใจว่าต้องทำอย่างไรต่อ และจะคอยเฝ้าสังเกตการละเมิดครั้งใหม่ๆ อย่างต่อเนื่อง

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = ลงชื่อเข้า
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = เมนูหลัก
main-nav-button-collapse-label = ยุบเมนู
main-nav-button-collapse-tooltip = ยุบเมนู
main-nav-button-expand-label = ขยายเมนู
main-nav-button-expand-tooltip = ขยายเมนู
main-nav-label = การนำทาง
main-nav-link-home-label = หน้าแรก
main-nav-link-dashboard-label = หน้าปัด
main-nav-link-settings-label = การตั้งค่า
main-nav-link-faq-label = คำถามที่พบบ่อย
main-nav-link-faq-tooltip = คำถามที่พบบ่อย

## User menu

user-menu-trigger-label = เปิดเมนูผู้ใช้
user-menu-trigger-tooltip = โปรไฟล์
user-menu-manage-fxa-label = จัดการ{ -brand-mozilla-account } ของคุณ
user-menu-settings-label = การตั้งค่า
user-menu-settings-tooltip = กำหนดค่า { -brand-mozilla-monitor }
user-menu-help-label = ความช่วยเหลือและการสนับสนุน
user-menu-help-tooltip = รับความช่วยเหลือในการใช้ { -brand-mozilla-monitor }
user-menu-signout-label = ลงชื่อออก
user-menu-signout-tooltip = ลงชื่อออกจาก { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = เงื่อนไขการให้บริการ
privacy-notice = ประกาศความเป็นส่วนตัว
github = { -brand-github }
footer-nav-recent-breaches = การละเมิดข้อมูลล่าสุด
footer-external-link-faq-label = คำถามที่พบบ่อย
footer-external-link-faq-tooltip = คำถามที่พบบ่อย

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } ไม่พบหน้า
error-page-error-404-copy = ขออภัย หน้าที่คุณกำลังค้นหานั้นไม่มีอยู่อีกต่อไปแล้ว
error-page-error-404-cta-button = ย้อนกลับ

## Breach overview page

all-breaches-headline-3 = ฐานข้อมูลการละเมิดข้อมูล
all-breaches-lead = เราเฝ้าสังเกตการละเมิดของข้อมูลที่ทราบทั้งหมดเพื่อค้นพบว่าข้อมูลส่วนตัวของคุณถูกบุกรุกหรือไม่ นี่คือรายการการละเมิดทั้งหมดที่มีการรายงานไว้ตั้งแต่ปี 2007
search-breaches = ค้นหาการละเมิด
# the kind of user data exposed to hackers in data breach.
exposed-data = ข้อมูลที่ถูกเปิดเผย:

## Public breach detail page

find-out-if-2 = ค้นพบว่าคุณมีส่วนเกี่ยวข้องกับการละเมิดในครั้งนี้หรือไม่
find-out-if-description = เราจะช่วยให้คุณทราบได้อย่างรวดเร็วว่าที่อยู่อีเมลของคุณถูกเปิดเผยจากการละเมิดในครั้งนี้หรือไม่ และทำความเข้าใจว่าต้องทำอย่างไรต่อ
breach-detail-cta-signup = ตรวจสอบการละเมิด
loading-accessibility = กำลังโหลด
