# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa = บัญชี Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-could-not-add-email = ไม่สามารถเพิ่มที่อยู่อีเมลไปยังฐานข้อมูล
error-not-subscribed = ที่อยู่อีเมลนี้ไม่ได้บอกรับ { -product-name }
error-hibp-throttled = มีการเชื่อมต่อกับ { -brand-HIBP } มากเกินไป
error-hibp-connect = เกิดข้อผิดพลาดในการเชื่อมต่อกับ { -brand-HIBP }
user-add-invalid-email = อีเมลไม่ถูกต้อง
user-add-too-many-emails = คุณกำลังตรวจสอบจำนวนสูงสุดของอีเมล
user-add-duplicate-email = อีเมลนี้ได้ถูกเพิ่มไปยัง { -product-name } แล้ว
user-add-verification-email-just-sent = ไม่สามารถส่งอีเมลยืนยันอื่นได้อย่างรวดเร็ว โปรดลองอีกครั้ง
user-add-unknown-error = มีบางอย่างผิดปกติกับการเพิ่มที่อยู่อีเมลอื่น โปรดลองอีกครั้ง
user-delete-unknown-error = มีบางอย่างผิดปกติกับการลบที่อยู่อีเมล โปรดลองอีกครั้ง
user-verify-token-error = จำเป็นต้องใช้โทเค็นการยืนยัน
user-unsubscribe-token-error = การเลิกบอกรับต้องใช้โทเค็น
user-unsubscribe-token-email-error = การเลิกบอกรับต้องใช้โทเค็นและ emailHash
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = ข้อมูลที่ถูกบุกรุก:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = ให้บริการข้อมูลการรั่วไหลโดย { $hibp-link }
show-all = แสดงทั้งหมด
sign-out = ลงชื่อออก
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = จัดการ { -brand-fxa }
# Link title
frequently-asked-questions = คำถามที่พบบ่อย
# Link title
preferences = การกำหนดลักษณะ
# Link title
home = หน้าแรก
# Link title
security-tips = เคล็ดลับความปลอดภัย
# Link title
more-about-this-breach = เพิ่มเติมเกี่ยวกับการรั่วไหลนี้
monitor-several-emails = ตรวจสอบหลายอีเมล
website-breach = การรั่วไหลของเว็บไซต์
sensitive-breach = การรั่วไหลของเว็บไซต์ที่ละเอียดอ่อน
data-aggregator-breach = การรั่วไหลของตัวรวบรวมข้อมูล
what-data = ชนิดข้อมูลที่ถูกบุกรุก:
sensitive-sites = { -product-name } จัดการกับไซต์ที่ละเอียดอ่อนอย่างไร?
sensitive-sites-copy =
    { -product-name } จะเปิดเผยเฉพาะบัญชีที่เกี่ยวข้องกับการรั่วไหลชนิดเหล่านี้
    หลังจากที่ได้ยืนยันที่อยู่อีเมลแล้วเท่านั้น ซึ่งหมายความว่าคุณจะเป็นเพียงคนเดียวเท่านั้น
    ที่สามารถดูได้ว่าข้อมูลของคุณอยู่ในการรั่วไหลนี้หรือเปล่า (นอกจากว่าจะมีใครอื่น
    สามารถเข้าถึงบัญชีอีเมลของคุณได้)
delayed-reporting-headline = ทำไมจึงใช้เวลานานในการรายงานการละเมิดนี้?
delayed-reporting-copy =
    บางครั้งอาจใช้เวลาหลายเดือนหรือหลายปีกว่าข้อมูลประจำตัวที่ถูกเปิดเผย
    ในการรั่วไหลของข้อมูลจะปรากฏบนเว็บมืด การรั่วไหลจะถูกเพิ่มในฐานข้อมูลของเรา
    ทันทีที่ถูกค้นพบและยืนยัน
fxm-warns-you =
    { -product-name } จะเตือนคุณเมื่อที่อยู่อีเมลถูกเปิดเผยในการรั่วไหลของข้อมูลทางออนไลน์
    ดูว่าข้อมูลถูกเปิดเผยไปหรือเปล่า เรียนรู้วิธีปกป้องบัญชีออนไลน์ของคุณให้ดีขึ้น และรับการแจ้งเตือน
    หากที่อยู่อีเมลของคุณปรากฏในการรั่วไหลใหม่
what-is-data-agg = ตัวรวบรวมข้อมูลคืออะไร?
what-is-data-agg-blurb =
    นักรวบรวมข้อมูล หรือนายหน้าซื้อขายข้อมูล จะรวบรวมข้อมูลจากระเบียนสาธารณะและซื้อข้อมูลนั้น
    จากบริษัทอื่นๆ แล้วนำข้อมูลนี้มาเรียบเรียงเพื่อขายต่อให้บริษัทต่างๆ เพื่อจุดประสงค์ทางด้านการตลาด
    เหยื่อของการรั่วไหลเหล่านี้มักไม่ค่อยถูกหลอกหลวงเงิน แต่พวกแฮกเกอร์สามารถนำข้อมูลนี้ไปใช้
    ปลอมแปลงข้อมูลหรือประวัติส่วนตัวของตัวเองได้
avoid-personal-info = หลีกเลี่ยงการใช้ข้อมูลส่วนตัวในรหัสผ่าน
send-verification = ส่งลิงก์ยืนยัน
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = สรุปการรั่วไหล

##

breach-alert-subject = { -product-name } พบอีเมลของคุณในการรั่วไหลของข้อมูลใหม่
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed = รหัสผ่านที่ถูกเปิดเผยในการรั่วไหลทั้งหมด
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed = การรั่วไหลของข้อมูลที่ทราบได้เปิดเผยข้อมูลของคุณ
what-is-a-website-breach = การรั่วไหลของเว็บไซต์คืออะไร?
website-breach-blurb = การรั่วไหลของข้อมูลบนเว็บไซต์เกิดขึ้นเมื่ออาชญากรไซเบอร์ขโมย คัดลอก หรือเปิดเผยข้อมูลส่วนตัวจากบัญชีออนไลน์ต่างๆ ซึ่งมักเป็นผลจากการที่แฮกเกอร์พบจุดอ่อนในความปลอดภัยของเว็บไซต์ การรั่วไหลยังสามารถเกิดขึ้นได้เมื่อข้อมูลบัญชีรั่วไหลโดยไม่ได้ตั้งใจ
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = ภาพรวม
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = เมื่อ { $breachDate } { $breachTitle } ได้เกิดการรั่วไหล เมื่อค้นพบและยืนยันการรั่วไหลแล้ว การรั่วไหลดังกล่าวได้ถูกเพิ่มในฐานข้อมูลของเราเมื่อ { $addedDate }
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = เมนู
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = ตรวจสอบลิงก์ที่ส่งไปยัง { $userEmail } เพื่อเพิ่มลงใน { -product-name }

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = เพิ่มการรั่วไหลเมื่อ:
# Section headline
rec-section-headline = สิ่งที่ควรทำสำหรับการรั่วไหลของข้อมูลนี้​​​​​​​​​​​​​​​​
rec-section-subhead = เราขอแนะนำให้คุณทำตามขั้นตอนเหล่านี้เพื่อรักษาข้อมูลส่วนบุคคลของคุณให้ปลอดภัยและปกป้องข้อมูลประจำตัวดิจิทัลของคุณ
# Section headline
rec-section-headline-no-pw = วิธีปกป้องข้อมูลส่วนตัวของคุณ​​​​​​​​​​​​​​​​
rec-section-subhead-no-pw = แม้ว่ารหัสผ่านจะไม่ได้ถูกเปิดเผยในการรั่วไหลของข้อมูลครั้งนี้ แต่ยังมีขั้นตอนที่คุณสามารถทำได้เพื่อปกป้องข้อมูลส่วนตัวของคุณให้ดียิ่งขึ้น​​​​​​​​​​​​​​​​

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = ใหม่

##


## Search Engine Optimization


## Header

sign-in = ลงชื่อเข้า

## Site navigation


## User menu


## Footer

privacy-notice = ประกาศความเป็นส่วนตัว
github = { -brand-github }
footer-nav-all-breaches = การรั่วไหลทั้งหมด
footer-external-link-faq-label = คำถามที่พบบ่อย

## Error page


## Breach overview page

search-breaches = ค้นหาการรั่วไหล

## Public breach detail page

breach-detail-cta-signup = ตรวจสอบการรั่วไหล

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = ตกลง
banner-monitor-rebrand-dismiss-button-tooltip = ปิด
loading-accessibility = กำลังโหลด
