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

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = บัญชี Mozilla
open-in-new-tab-alt = เปิดลิงก์ในแท็บใหม่

## Search Engine Optimization

meta-desc-2 = ค้นพบว่าคุณเป็นส่วนหนึ่งในการรั่วไหลของข้อมูลหรือไม่โดยใช้ { -brand-fx-monitor } เราจะช่วยให้คุณเข้าใจว่าต้องทำอย่างไรต่อ และจะคอยเฝ้าสังเกตการรั่วไหลครั้งใหม่ๆ อย่างต่อเนื่อง

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
footer-nav-all-breaches = การรั่วไหลทั้งหมด
footer-external-link-faq-label = คำถามที่พบบ่อย
footer-external-link-faq-tooltip = คำถามที่พบบ่อย

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } ไม่พบหน้า
error-page-error-404-copy = ขออภัย หน้าที่คุณกำลังค้นหานั้นไม่มีอยู่อีกต่อไปแล้ว
error-page-error-404-cta-button = ย้อนกลับ
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } มีบางอย่างผิดพลาด

## Breach overview page

all-breaches-headline-2 = การรั่วไหลทั้งหมดที่ { -brand-fx-monitor } ตรวจพบ
all-breaches-lead = เราเฝ้าสังเกตการรั่วไหลของข้อมูลที่ทราบทั้งหมดเพื่อค้นพบว่าข้อมูลส่วนตัวของคุณถูกบุกรุกหรือไม่ นี่คือรายการการรั่วไหลทั้งหมดที่มีการรายงานไว้ตั้งแต่ปี 2007
search-breaches = ค้นหาการรั่วไหล
# the kind of user data exposed to hackers in data breach.
exposed-data = ข้อมูลที่ถูกเปิดเผย:

## Public breach detail page

find-out-if-2 = ค้นพบว่าคุณมีส่วนเกี่ยวข้องกับการรั่วไหลในครั้งนี้หรือไม่
find-out-if-description = เราจะช่วยให้คุณทราบได้อย่างรวดเร็วว่าที่อยู่อีเมลของคุณถูกเปิดเผยจากการรั่วไหลในครั้งนี้หรือไม่ และทำความเข้าใจว่าต้องทำอย่างไรต่อ
breach-detail-cta-signup = ตรวจสอบการรั่วไหล

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: ชื่อใหม่ รูปลักษณ์ใหม่ และวิธีอื่นๆ อีกมากมายในการ<b>ทวงคืนความเป็นส่วนตัวของคุณ</b>
banner-monitor-rebrand-dismiss-button-label = ตกลง
banner-monitor-rebrand-dismiss-button-tooltip = ปิด
loading-accessibility = กำลังโหลด
