# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = บัญชี Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = คุณพยายามสแกนที่อยู่อีเมลมากเกินไปในช่วงเวลาสั้น ๆ เพื่อเหตุผลด้านความปลอดภัย เราได้บล็อกคุณจากการค้นหาใหม่ชั่วคราว คุณจะสามารถลองอีกครั้งในภายหลัง
error-could-not-add-email = ไม่สามารถเพิ่มที่อยู่อีเมลไปยังฐานข้อมูล
error-not-subscribed = ที่อยู่อีเมลนี้ไม่ได้บอกรับ { -product-name }
error-hibp-throttled = มีการเชื่อมต่อกับ { -brand-HIBP } มากเกินไป
error-hibp-connect = เกิดข้อผิดพลาดในการเชื่อมต่อกับ { -brand-HIBP }
error-hibp-load-breaches = ไม่สามารถโหลดการรั่วไหล
error-must-be-signed-in = คุณต้องลงชื่อเข้าใช้ { -brand-fxa } ของคุณ
error-to-finish-verifying = หากต้องการยืนยันอีเมลนี้สำหรับ { -product-name } ให้เรียบร้อย คุณจะต้องลงชื่อเข้าโดยใช้อีเมลบัญชีหลักของคุณ
home-title = { -product-name }
home-not-found = ไม่พบหน้า
oauth-invalid-session = วาระไม่ถูกต้อง
scan-title = { -product-name }: ผลลัพธ์การสแกน
user-add-invalid-email = อีเมลไม่ถูกต้อง
user-add-too-many-emails = คุณกำลังตรวจสอบจำนวนสูงสุดของอีเมล
user-add-email-verify-subject = ยืนยันการบอกรับ { -product-name } ของคุณ
user-add-duplicate-email = อีเมลนี้ได้ถูกเพิ่มไปยัง { -product-name } แล้ว
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = เยี่ยมชม { $preferencesLink } ของคุณเพื่อตรวจสอบสถานะของ { $userEmail }
error-headline = ข้อผิดพลาด
user-verify-token-error = จำเป็นต้องใช้โทเค็นการยืนยัน
user-verify-email-report-subject = รายงาน { -product-name } ของคุณ
user-unsubscribe-token-error = การเลิกบอกรับต้องใช้โทเค็น
user-unsubscribe-token-email-error = การเลิกบอกรับต้องใช้โทเค็นและ emailHash
user-unsubscribe-title = { -product-name } : เลิกบอกรับ
pwt-section-headline = รหัสผ่านที่เดายาก = การปกป้องที่ดีกว่า
landing-headline = สิทธิ์ของคุณที่จะปลอดภัยจากเหล่าแฮกเกอร์เริ่มต้นที่นี่
scan-placeholder = ป้อนที่อยู่อีเมล
scan-submit = ค้นหาอีเมลของคุณ
scan-error = ต้องเป็นอีเมลที่ถูกต้อง
download-firefox-banner-button = ดาวน์โหลด { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = ส่งแล้ว!
sign-up = ลงทะเบียน
form-signup-error = ต้องเป็นอีเมลที่ถูกต้อง
# breach-date = the calendar date a particular data theft occurred.
breach-date = วันที่รั่วไหล:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = บัญชีที่ถูกบุกรุก:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = ข้อมูลที่ถูกบุกรุก:
unsub-headline = เลิกบอกรับ { -product-name-nowrap }
unsub-blurb = การดำเนินการนี้จะลบอีเมลของคุณออกจากรายการ { -product-name-nowrap } และคุณจะไม่ได้รับการแจ้งเตือนเมื่อมีการประกาศการละเมิดใหม่
unsub-button = เลิกบอกรับ
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = ให้บริการข้อมูลการรั่วไหลโดย { $hibp-link }
share-twitter = คนส่วนใหญ่มีบัญชีออนไลน์ประมาณ 100 บัญชี ค้นหาว่าคุณเป็นส่วนหนึ่งของข้อมูลที่รั่วหรือไม่
share-facebook-headline = ค้นหาว่าคุณเป็นส่วนหนึ่งของข้อมูลที่รั่วหรือไม่
share-facebook-blurb = บัญชีออนไลน์ของคุณเป็นส่วนหนึ่งของข้อมูลที่รั่วหรือไม่?
og-site-description = ดูว่าคุณเป็นส่วนหนึ่งของข้อมูลที่รั่วไหลหรือไม่ด้วย { -product-name } ลงทะเบียนเพื่อรับการแจ้งเตือนเกี่ยวกับข้อมูลที่รั่วไหลในอนาคตและรับเคล็ดลับในการทำให้บัญชีของคุณปลอดภัย
show-all = แสดงทั้งหมด
fxa-scan-another-email = ต้องการตรวจสอบอีเมลอื่นหรือไม่?
sign-out = ลงชื่อออก
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = จัดการ { -brand-fxa }
have-an-account = มีบัญชี?
fxa-pwt-summary-2 =
    การใช้รหัสผ่านสั้น ๆ หรือคำเดียวอาจทำให้แฮกเกอร์คาดเดาได้ง่าย 
    ควรใช้อย่างน้อยสองคำและใช้ตัวอักษร ตัวเลข และอักขระพิเศษผสมกัน
fxa-pwt-summary-4 =
    ตัวจัดการรหัสผ่าน เช่น 1Password, LastPass, Dashlane และ Bitwarden จัดเก็บรหัสผ่าน 
    ของคุณและกรอกลงในเว็บไซต์ให้คุณ นอกจากนี้ยังช่วยให้คุณสร้างรหัสผ่านที่คาดเดาได้ยากอีกด้วย
fxa-pwt-summary-6 =
    ข้อมูลที่รั่วไหลกำลังเพิ่มสูงขึ้น หากข้อมูลส่วนตัวของคุณปรากฏในข้อมูลที่รั่วไหลใหม่ 
    { -product-name } จะส่งการแจ้งเตือนถึงคุณเพื่อให้คุณสามารถดำเนินการและปกป้องบัญชีของคุณได้
fxa-what-to-do-blurb-1 = หากคุณไม่สามารถเข้าสู่ระบบได้ ให้ติดต่อเว็บไซต์เพื่อสอบถามวิธีการอัปเดต หากคุณเห็นบัญชีที่คุณจำไม่ได้ ข้อมูลของคุณอาจถูกขายหรือแจกจ่ายใหม่ นี่อาจเป็นบัญชีที่คุณลืมว่าเคยสร้าง หรือบริษัทอาจเปลี่ยนชื่อไปแล้ว
fxa-what-to-do-subhead-2 = หยุดใช้รหัสผ่านที่เปิดเผย และเปลี่ยนรหัสผ่านนั้นในทุกที่ที่คุณเคยใช้
fxa-wtd-blurb-2 =
    แฮกเกอร์อาจพยายามใช้รหัสผ่านและอีเมลเดียวกันของคุณเพื่อเข้าสู่บัญชีอื่น  
    สร้างรหัสผ่านที่แตกต่างและไม่ซ้ำกันสำหรับทุกบัญชีโดยเฉพาะสำหรับบัญชีธนาคาร 
    อีเมล และเว็บไซต์อื่น ๆ ของคุณที่คุณบันทึกข้อมูลส่วนตัว
fxa-what-to-do-blurb-3 =
    ข้อมูลที่รั่วไหลส่วนใหญ่จะเปิดเผยเฉพาะอีเมลและรหัสผ่าน แต่บางส่วนมีข้อมูลทางการเงินที่ละเอียดอ่อน 
    หากบัญชีธนาคารของคุณหรือหมายเลขบัตรเครดิตถูกเปิดเผย ให้เตือนธนาคารของคุณถึงการทุจริตที่อาจเกิดขึ้น 
    ตรวจสอบการเรียกเก็บเงินที่คุณไม่แน่ใจในใบแจ้งยอด
fxa-what-to-do-subhead-4 = รับความช่วยเหลือในการจดจำรหัสผ่านทั้งหมดของคุณและทำให้รหัสผ่านเหล่านั้นปลอดภัย
fxa-what-to-do-blurb-4 =
    ตัวจัดการรหัสผ่าน เช่น 1Password, LastPass, Dashlane และ Bitwarden จัดเก็บรหัสผ่าน 
    ของคุณและกรอกลงในเว็บไซต์ให้คุณ ใช้ตัวจัดการรหัสผ่านบนโทรศัพท์และคอมพิวเตอร์ 
    ของคุณเพื่อที่คุณจะได้ไม่ต้องจำรหัสผ่านทั้งหมด
# Alerts is a noun
sign-up-for-alerts = ลงทะเบียนเพื่อรับการเตือน
# Link title
frequently-asked-questions = คำถามที่พบบ่อย
about-firefox-monitor = เกี่ยวกับ { -product-name }
# Link title
preferences = การกำหนดลักษณะ
# Link title
home = หน้าแรก
# Link title
security-tips = เคล็ดลับความปลอดภัย
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = เปิดการนำทาง { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = การรั่วไหลที่เพิ่มล่าสุด
# Link title
more-about-this-breach = เพิ่มเติมเกี่ยวกับการรั่วไหลนี้
take-control = นำการควบคุมข้อมูลส่วนตัวของคุณกลับมา
cant-stop-hackers = คุณไม่สามารถหยุดเหล่าแฮกเกอร์ได้ แต่คุณสามารถหลีกเลี่ยงนิสัยที่ไม่ดีที่ช่วยให้เหล่าแฮกเกอร์ทำงานง่ายขึ้นได้
read-more-tips = อ่านเคล็ดลับความปลอดภัยเพิ่มเติม
how-hackers-work = ทำความเข้าใจเกี่ยวกับวิธีที่เหล่าแฮกเกอร์ทำงาน
monitor-your-online-accounts = ลงทะเบียนเพื่อเฝ้าสังเกตการรั่วไหลด้วย { -brand-fxa }
stay-alert = ไม่พลาดข่าวสารการละเมิดใหม่ ๆ
if-your-info = หากข้อมูลของคุณปรากฏในการละเมิดข้อมูลใหม่ เราจะส่งการเตือนถึงคุณ
search-all-emails = ค้นหาที่อยู่อีเมลทั้งหมดของคุณเพื่อค้นหาการละเมิดและรับการเตือนเกี่ยวกับภัยคุกคามใหม่ ๆ
monitor-several-emails = ตรวจสอบหลายอีเมล
take-action = ดำเนินการเพื่อปกป้องบัญชีของคุณ
keep-your-data-safe = ค้นหาสิ่งที่คุณต้องทำเพื่อปกป้องข้อมูลของคุณให้ปลอดภัยจากอาชญากรไซเบอร์
website-breach = การรั่วไหลของเว็บไซต์
sensitive-breach = การรั่วไหลของเว็บไซต์ที่ละเอียดอ่อน
data-aggregator-breach = การรั่วไหลของตัวรวบรวมข้อมูล
unverified-breach = การรั่วไหลที่ไม่ได้รับการตรวจสอบความถูกต้อง
spam-list-breach = การรั่วไหลของรายการสแปม
website-breach-plural = การรั่วไหลของเว็บไซต์
sensitive-breach-plural = การรั่วไหลที่ละเอียดอ่อน
data-aggregator-breach-plural = การรั่วไหลของตัวรวบรวมข้อมูล
unverified-breach-plural = การรั่วไหลที่ไม่ได้รับการตรวจสอบความถูกต้อง
spam-list-breach-plural = การรั่วไหลของรายการสแปม
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
about-fxm-headline = เกี่ยวกับ { -product-name }
about-fxm-blurb =
    { -product-name } จะเตือนเมื่อบัญชีออนไลน์ของคุณเกี่ยวข้องในข้อมูลที่รั่วไหล 
    ค้นหาว่าคุณอยู่ในข้อมูลที่รั่วไหลหรือไม่ รับการแจ้งเตือนเกี่ยวกับการรั่วไหลใหม่ 
    และดำเนินการเพื่อปกป้องบัญชีออนไลน์ของคุณ { -product-name } จัดเตรียมโดย { -brand-Mozilla }
fxm-warns-you =
    { -product-name } จะเตือนคุณเมื่อที่อยู่อีเมลถูกเปิดเผยในการรั่วไหลของข้อมูลทางออนไลน์
    ดูว่าข้อมูลถูกเปิดเผยไปหรือเปล่า เรียนรู้วิธีปกป้องบัญชีออนไลน์ของคุณให้ดีขึ้น และรับการแจ้งเตือน
    หากที่อยู่อีเมลของคุณปรากฏในการรั่วไหลใหม่
# How Firefox Monitor works
how-fxm-works = วิธีที่ { -product-name } ทำงาน
how-fxm-1-headline = ทำการค้นหาพื้นฐาน
how-fxm-1-blurb =
    ค้นหาที่อยู่อีเมลของคุณในการรั่วไหลของข้อมูลสาธารณะโดยย้อนกลับไป
    ถึงปี 2007 การค้นหาแบบพื้นฐานนี้จะสามารถพบการรั่วไหลของข้อมูลส่วนใหญ่ได้
    แต่จะไม่พบการรั่วไหลที่มีข้อมูลส่วนตัวที่ละเอียดอ่อน
how-fxm-2-headline = ลงทะเบียนเพื่อเฝ้าสังเกตการรั่วไหล
how-fxm-2-blurb =
    สร้าง{ -brand-fxa } เพื่อเฝ้าสังเกตการรั่วไหลที่กำลังเกิดขึ้นในอีเมลของคุณ 
    เมื่อคุณยืนยันอีเมลของคุณแล้ว คุณก็จะได้รับการรายงานการรั่วไหลที่ผ่านมาแบบเต็ม
    รวมถึงการรั่วไหลที่ละเอียดอ่อนด้วย
how-fxm-3-headline = รับการแจ้งเตือนในเบราว์เซอร์ของคุณ
how-fxm-3-blurb =
    ถ้าคุณใช้ { -brand-name } คุณจะได้รับการแจ้งเตือนเมื่อคุณเยี่ยมชมไซต์ที่มีการรั่วไหล
    ค้นพบทันทีว่าคุณเป็นส่วนหนึ่งของการรั่วไหลนั้นหรือเปล่าและคุณสามารถทำอะไรได้บ้าง
wtd-after-website = สิ่งที่ควรทำหลังจากที่ข้อมูลในเว็บไซต์ถูกรั่วไหล:
wtd-after-data-agg = สิ่งที่ควรทำหลังจากที่ข้อมูลในตัวรวบรวมข้อมูลถูกรั่วไหล:
what-is-data-agg = ตัวรวบรวมข้อมูลคืออะไร?
what-is-data-agg-blurb =
    นักรวบรวมข้อมูล หรือนายหน้าซื้อขายข้อมูล จะรวบรวมข้อมูลจากระเบียนสาธารณะและซื้อข้อมูลนั้น
    จากบริษัทอื่นๆ แล้วนำข้อมูลนี้มาเรียบเรียงเพื่อขายต่อให้บริษัทต่างๆ เพื่อจุดประสงค์ทางด้านการตลาด
    เหยื่อของการรั่วไหลเหล่านี้มักไม่ค่อยถูกหลอกหลวงเงิน แต่พวกแฮกเกอร์สามารถนำข้อมูลนี้ไปใช้
    ปลอมแปลงข้อมูลหรือประวัติส่วนตัวของตัวเองได้
protect-your-privacy = ปกป้องความเป็นส่วนตัวออนไลน์ของคุณ
no-pw-to-change = ที่ต่างจากการรั่วไหลบนเว็บไซต์คือไม่มีรหัสผ่านที่สามารถเปลี่ยนได้
avoid-personal-info = หลีกเลี่ยงการใช้ข้อมูลส่วนตัวในรหัสผ่าน
avoid-personal-info-blurb = การค้นหาวันเกิด ที่อยู่ และชื่อสมาชิกครอบครัวทางออนไลน์สามารถทำได้ง่าย จึงไม่ควรใช้คำเหล่านี้ในรหัสผ่านของคุณ

## What to do after data breach tips

change-pw = เปลี่ยนรหัสผ่านของคุณ
change-pw-site = เปลี่ยนรหัสผ่านสำหรับไซต์นี้
even-for-old = การอัปเดตรหัสผ่านของคุณนั้นสำคัญแม้แต่สำหรับบัญชีเก่า
make-new-pw-unique = ตั้งรหัสผ่านใหม่ไม่ให้ซ้ำกับรหัสผ่านเดิม
strength-of-your-pw = ความปลอดภัยของรหัสผ่านของคุณส่งผลโดยตรงต่อความปลอดภัยออนไลน์ของคุณ
create-strong-passwords = วิธีสร้างรหัสผ่านที่เดายาก
stop-reusing-pw = หยุดนำรหัสผ่านเดิมมาใช้ซ้ำ
create-unique-pw = สร้างรหัสผ่านที่ไม่ซ้ำกันและเก็บไว้ในตำแหน่งที่ปลอดภัย เช่น ตัวจัดการรหัสผ่าน
five-myths = ตำนาน 5 เรื่องเกี่ยวกับตัวจัดการรหัสผ่าน
create-a-fxa = สร้าง{ -brand-fxa } เพื่อรับรายงานการละเมิดอย่างสมบูรณ์และรับการแจ้งเตือน
feat-security-tips = เคล็ดลับความปลอดภัยเพื่อปกป้องบัญชีของคุณ
feat-sensitive = ค้นหาขั้นสูงในการรั่วไหลที่ละเอียดอ่อน
feat-enroll-multiple = ลงทะเบียนหลายอีเมลในการเฝ้าดูการรั่วไหล
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] ปรากฏใน { $breachCount } การรั่วไหลที่ทราบ
    }
check-for-breaches = ตรวจสอบการรั่วไหล
find-out-what-hackers-know = ค้นหาว่าแฮกเกอร์รู้อะไรเกี่ยวกับคุณแล้วบ้าง เรียนรู้วิธีการหลีกเลี่ยง
get-email-alerts = รักษาความปลอดภัย: รับการแจ้งเตือนทางอีเมลเมื่อข้อมูลของคุณปรากฏในการรั่วไหลที่ทราบ
search-for-your-email = ค้นหาที่อยู่อีเมลของคุณในข้อมูลสาธารณะที่รั่วไหลย้อนกลับไปถึงปี 2007
back-to-top = กลับขึ้นด้านบน
comm-opt-0 = ส่งอีเมลถึงฉันหากที่อยู่อีเมลใด ๆ ของฉันที่อยู่ด้านล่างปรากฏขึ้นในการละเมิดข้อมูล
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = ส่งการแจ้งเตือนการรั่วไหลทั้งหมดไปยัง { $primaryEmail }
stop-monitoring-this = หยุดการตรวจสอบอีเมลนี้
resend-verification = ส่งอีเมลยืนยันใหม่
add-new-email = เพิ่มที่อยู่อีเมลใหม่
send-verification = ส่งลิงก์ยืนยัน
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = สรุปการรั่วไหล
show-breaches-for-this-email = แสดงการรั่วไหลทั้งหมดสำหรับอีเมลนี้
link-change-primary = เปลี่ยนแปลงที่อยู่อีเมลหลัก
remove-fxm = เอา { -product-name } ออก
remove-fxm-blurb = ปิดการแจ้งเตือน { -product-name } { -brand-fxa } ของคุณจะยังคงใช้งานได้และคุณอาจได้รับการแจ้งเตือนที่เกี่ยวข้องกับบัญชีอื่น ๆ
# Button title
manage-email-addresses = จัดการที่อยู่อีเมล
# Link title
latest-breach-link = ดูว่าคุณอยู่ในการรั่วไหลนี้หรือไม่

## Variables:
##   $userName (String) - Username

welcome-back = ยินดีต้อนรับกลับมา { $userName }!
welcome-user = ยินดีต้อนรับ { $userName }!

##

breach-alert-subject = { -product-name } พบอีเมลของคุณในการรั่วไหลของข้อมูลใหม่
your-info-was-discovered-headline = ข้อมูลของคุณถูกค้นพบในการรั่วไหลของข้อมูลใหม่
your-info-was-discovered-blurb =
    คุณได้สมัครใช้งานเพื่อรับการแจ้งเตือนจาก { -product-name }
    เมื่ออีเมลของคุณปรากฏในการรั่วไหลของข้อมูลแล้ว สิ่งที่เรารู้เกี่ยวกับการรั่วไหลนี้มีดังนี้
what-to-do-after-breach = สิ่งที่ควรทำหลังจากที่ข้อมูลถูกรั่วไหล
ba-next-step-1 = เปลี่ยนรหัสผ่านของคุณเป็นรหัสผ่านที่เดายากและไม่ซ้ำใคร
ba-next-step-blurb-1 =
    รหัสผ่านที่แข็งแกร่งจะประกอบด้วยตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก อักขระพิเศษ และตัวเลขผสมกัน
    โดยไม่มีข้อมูลส่วนตัวอย่างเช่นที่อยู่ วันเกิด หรือนามสกุลของคุณ
ba-next-step-2 = หยุดใช้รหัสผ่านที่ถูกเปิดเผยนั้นอย่างสิ้นเชิง
ba-next-step-blurb-2 =
    อาชญากรไซเบอร์อาจพบรหัสผ่านของคุณบนเว็บมืดและนำไปใช้เพื่อเข้าสู่ระบบบัญชีอื่นๆ
    ของคุณได้ หนทางปกป้องบัญชีของคุณดีที่สุดคือให้ใช้รหัสผ่านที่ไม่ซ้ำกันสำหรับแต่ละบัญชี
ba-next-step-3 = รับความช่วยเหลือในการสร้างรหัสผ่านที่ดีขึ้นและทำให้รหัสผ่านเหล่านั้นปลอดภัย
ba-next-step-blurb-3 =
    ใช้ตัวจัดการรหัสผ่านเพื่อสร้างรหัสผ่านที่แข็งแกร่งและไม่ซ้ำใคร ตัวจัดการรหัสผ่านจะจัดเก็บการเข้าสู่ระบบทั้งหมดของคุณ
    อย่างปลอดภัยเพื่อให้คุณสามารถเข้าถึงได้ในทุกอุปกรณ์ของคุณ
faq1 = ฉันไม่รู้จักบริษัทหรือเว็บไซต์นี้ ทำไมฉันถึงอยู่ในการรั่วไหลนี้?
faq2 = ทำไมจึงใช้เวลานานในการแจ้งให้ฉันทราบถึงการรั่วไหลนี้?
faq3 = ฉันจะรู้ได้อย่างไรว่าเป็นอีเมลจริงจาก { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] พบ { $breachCount } การรั่วไหลใหม่
    }
sign-up-headline-1 = รับการแจ้งเตือนแบบต่อเนื่องด้วย { -brand-fxa }
account-not-required = ไม่จำเป็นต้องใช้เบราว์เซอร์ { -brand-name } สำหรับ { -brand-fxa } คุณอาจได้รับข้อมูลเกี่ยวกับบริการของ { -brand-Mozilla }

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = ข้อมูลของคุณถูกเปิดเผยในการรั่วไหลของข้อมูล { $breachName } หรือไม่
fb-not-comp = อีเมลนี้ไม่ปรากฏในการรั่วไหล { $breachName }
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] อย่างไรก็ตาม อีเมลดังกล่าวยังคงปรากฏใน { $breachCount } การรั่วไหลอื่น ๆ
    }
fb-comp-only = อีเมลนปรากฏในการรั่วไหล { $breachName }
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] อีเมลนี้ปรากฏใน { $breachCount } การรั่วไหลของข้อมูลที่ทราบ รวมถึง { $breachName }
    }

##

no-other-breaches-found = ไม่พบการรั่วไหลอื่น ๆ จากการค้นหาแบบพื้นฐาน
no-results-blurb = ขออภัย การรั่วไหลดังกล่าวไม่ได้อยู่ในฐานข้อมูลของเรา
# "Appears in-page as: Showing: All Breaches"
currently-showing = กำลังแสดง:

## Updated error messages

error-bot-headline = การค้นหาถูกระงับชั่วคราว
error-bot-blurb =
    เรากังวลว่าคุณอาจเป็นบอตเพราะคุณค้นหาที่อยู่อีเมลหลายอันในช่วงเวลาสั้นๆ
    ตอนนี้คุณถูกปิดกั้นไม่ให้ทำการค้นหาใหม่ คุณสามารถลองอีกครั้งได้ในภายหลัง
error-csrf-headline = วาระหมดเวลา
error-csrf-blurb = เลือกปุ่มย้อนกลับของเบราว์เซอร์ของคุณ โหลดหน้าเว็บใหม่ แล้วลองอีกครั้ง
error-invalid-unsub = วิธีเลิกสมัครรับการแจ้งเตือนจาก { -product-name }
error-invalid-unsub-blurb =
    คุณจะต้องเลิกสมัครรับจากอีเมลฉบับใดฉบับหนึ่งที่ { -product-name } ส่งให้คุณ
    ตรวจสอบข้อความจาก { -brand-team-email } ในกล่องขาเข้าของคุณ 
    แล้วเลือกลิงก์เลิกสมัครรับที่อยู่ด้านล่างของอีเมล
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored = ที่อยู่อีเมลที่ถูกเฝ้าดู
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed = รหัสผ่านที่ถูกเปิดเผยในการรั่วไหลทั้งหมด
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed = การรั่วไหลของข้อมูลที่ทราบได้เปิดเผยข้อมูลของคุณ
# Button
see-additional-breaches = ดูการรั่วไหลเพิ่มเติม
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches = อีเมลนี้ปรากฏในการรั่วไหลของข้อมูลที่ทราบ { $breachCount } จุด
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = ผลลัพธ์สำหรับ: { $userEmail }
other-monitored-emails = อีเมลอื่น ๆ ที่ถูกตรวจสอบ
email-verification-required = ต้องมีการยืนยันอีเมล
fxa-primary-email = อีเมล { -brand-fxa } - หลัก
what-is-a-website-breach = การรั่วไหลของเว็บไซต์คืออะไร?
website-breach-blurb = การรั่วไหลของข้อมูลบนเว็บไซต์เกิดขึ้นเมื่ออาชญากรไซเบอร์ขโมย คัดลอก หรือเปิดเผยข้อมูลส่วนตัวจากบัญชีออนไลน์ต่างๆ ซึ่งมักเป็นผลจากการที่แฮกเกอร์พบจุดอ่อนในความปลอดภัยของเว็บไซต์ การรั่วไหลยังสามารถเกิดขึ้นได้เมื่อข้อมูลบัญชีรั่วไหลโดยไม่ได้ตั้งใจ
security-tips-headline = เคล็ดลับความปลอดภัยเพื่อป้องกันตัวคุณเองจากเหล่าแฮกเกอร์
steps-to-protect = ขั้นตอนในการปกป้องข้อมูลประจำตัวออนไลน์ของคุณ
take-further-steps = ทำตามขั้นตอนต่อไปนี้เพื่อปกป้องข้อมูลประจำตัวของคุณ
alert-about-new-breaches = เตือนฉันเกี่ยวกับการรั่วไหลใหม่
see-if-youve-been-part = ดูว่าคุณเป็นส่วนหนึ่งของการรั่วไหลของข้อมูลออนไลน์หรือไม่
get-ongoing-breach-monitoring = รับการเฝ้าสังเกตการรั่วไหลอย่างต่อเนื่องสำหรับหลายที่อยู่อีเมล
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = ค้นหา
new-unsub-error = คุณจะต้องเลิกบอกรับหนึ่งในอีเมลที่ { -product-name } ส่ง
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] อย่างไรก็ตาม อีเมลดังกล่าวยังคงปรากฏใน { $breachCount } การละเมิดอื่น ๆ ที่ทราบ
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = ข้อมูลเพิ่มเติม รวมถึง:
# Title
email-addresses-title = ที่อยู่อีเมล
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = ภาพรวม
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = เมื่อ { $breachDate } { $breachTitle } ได้เกิดการรั่วไหล เมื่อค้นพบและยืนยันการรั่วไหลแล้ว การรั่วไหลดังกล่าวได้ถูกเพิ่มในฐานข้อมูลของเราเมื่อ { $addedDate }
# Title appearing on the Preferences dashboard.
monitor-preferences = การกำหนดลักษณะ { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = ลงชื่อเข้าในชื่อ: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = กรองตามหมวดหมู่:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = เมนู
to-affected-email = ส่งการแจ้งเตือนการรั่วไหลไปยังที่อยู่อีเมลที่ได้รับผลกระทบ
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = มีวิธีปกป้องความเป็นส่วนตัวของคุณ เข้าร่วม { -brand-name }
# Link title
learn-more-link = เรียนรู้เพิ่มเติม
email-sent = ส่งอีเมลแล้ว!
# Form title
want-to-add = ต้องการเพิ่มอีเมลอื่นหรือไม่?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = ตรวจสอบลิงก์ที่ส่งไปยัง { $userEmail } เพื่อเพิ่มลงใน { -product-name }

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = ยืนยันอีเมลสำเร็จ!
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = ลงชื่อเข้า

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = จัดการที่อยู่อีเมลทั้งหมดใน { $preferencesLink }
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = การแจ้งเตือนการรั่วไหล
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = เพิ่มการรั่วไหลเมื่อ:
# This message appears after a user has successfully updated their communication settings.
changes-saved = บันทึกการเปลี่ยนแปลงแล้ว!

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##

mark-as-resolve-button = ทําเครื่องหมายว่าได้รับการแก้ไขแล้ว
marked-as-resolved-label = ทําเครื่องหมายว่าได้รับการแก้ไขแล้ว
undo-button = เลิกทำ
go-to-dashboard-link = ไปที่แดชบอร์ด
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% เสร็จสมบูรณ์

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = ทําเครื่องหมายว่าแก้ไขแล้ว:
hide-resolved-button = ซ่อนแก้ไขแล้ว
show-resolved-button = แสดงการแก้ไขแล้ว
# A status indicator that appears in the top right corner of new breach cards
new-breach = ใหม่
promo-fpn-cta = รับ { -brand-fpn }
promo-ecosystem-cta = ดูผลิตภัณฑ์ทั้งหมด

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`


## Relay and VPN educational/ad units


# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##


## Search Engine Optimization


## Header

sign-in = ลงชื่อเข้า

## Site navigation


## User menu


## Footer


## Error page


## Breach overview page

search-breaches = ค้นหาการรั่วไหล

## Public breach detail page


## Floating banner


## Firefox Monitor -> Mozilla Monitor rebrand banner

