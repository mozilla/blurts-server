# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = บัญชี Firefox
terms-and-privacy = ข้อกำหนดและความเป็นส่วนตัว
GitHub-link-title = GitHub
error-could-not-add-email = ไม่สามารถเพิ่มที่อยู่อีเมลไปยังฐานข้อมูล
error-not-subscribed = ที่อยู่อีเมลนี้ไม่ได้บอกรับ { -product-name }
error-hibp-throttled = มีการเชื่อมต่อกับ { -brand-HIBP } มากเกินไป
error-hibp-connect = เกิดข้อผิดพลาดในการเชื่อมต่อกับ { -brand-HIBP }
error-hibp-load-breaches = ไม่สามารถโหลดการละเมิด
error-must-be-signed-in = คุณต้องลงชื่อเข้าใช้ { -brand-fxa } ของคุณ
home-title = { -product-name }
home-not-found = ไม่พบหน้า
oauth-invalid-session = วาระไม่ถูกต้อง
scan-title = { -product-name }: ผลลัพธ์การสแกน
user-add-invalid-email = อีเมลไม่ถูกต้อง
user-add-email-verify-subject = ยืนยันการบอกรับ { -product-name } ของคุณ
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
breach-date = วันที่ละเมิด:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = บัญชีที่ถูกบุกรุก:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = ข้อมูลที่ถูกบุกรุก:
unsub-headline = เลิกบอกรับ { -product-name-nowrap }
unsub-blurb = การดำเนินการนี้จะลบอีเมลของคุณออกจากรายการ { -product-name-nowrap } และคุณจะไม่ได้รับการแจ้งเตือนเมื่อมีการประกาศการละเมิดใหม่
unsub-button = เลิกบอกรับ
# Breach data provided by Have I Been Pwned.
hibp-attribution = ข้อมูลการละเมิดจัดเตรียมโดย { $hibp-link }
show-all = แสดงทั้งหมด
fxa-scan-another-email = ต้องการตรวจสอบอีเมลอื่นหรือไม่?
sign-in = ลงชื่อเข้า
sign-out = ลงชื่อออก
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = จัดการ { -brand-fxa }
have-an-account = มีบัญชี?
# Alerts is a noun
sign-up-for-alerts = ลงทะเบียนเพื่อรับการเตือน
# Link title
frequently-asked-questions = คำถามที่พบบ่อย
about-firefox-monitor = เกี่ยวกับ { -product-name }
# Link title
preferences = ค่ากำหนด
# Link title
home = หน้าแรก

## What to do after data breach tips

feat-security-tips = เคล็ดลับความปลอดภัยเพื่อปกป้องบัญชีของคุณ
check-for-breaches = ตรวจสอบการละเมิด
back-to-top = กลับขึ้นด้านบน
comm-opt-0 = ส่งอีเมลถึงฉันหากที่อยู่อีเมลใด ๆ ของฉันที่อยู่ด้านล่างปรากฏขึ้นในการละเมิดข้อมูล
comm-opt-1 = ส่งการแจ้งเตือนการละเมิดทั้งหมดไปที่ { $primaryEmail }
stop-monitoring-this = หยุดการตรวจสอบอีเมลนี้
resend-verification = ส่งอีเมลยืนยันใหม่
add-new-email = เพิ่มที่อยู่อีเมลใหม่
send-verification = ส่งลิงก์ยืนยัน
link-change-primary = เปลี่ยนแปลงที่อยู่อีเมลหลัก
remove-fxm = เอา { -product-name } ออก
# Button title
manage-email-addresses = จัดการที่อยู่อีเมล
welcome-back = ยินดีต้อนรับกลับมา { $userName }!
welcome-user = ยินดีต้อนรับ { $userName }!
# "Appears in-page as: Showing: All Breaches"
currently-showing = กำลังแสดง:

## Updated error messages

error-bot-headline = การค้นหาถูกระงับชั่วคราว
error-csrf-headline = วาระหมดเวลา
error-csrf-blurb = เลือกปุ่มย้อนกลับของเบราว์เซอร์ของคุณ โหลดหน้าเว็บใหม่ แล้วลองอีกครั้ง
login-link = เข้าสู่ระบบ
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = ผลลัพธ์สำหรับ: { $userEmail }
email-verification-required = ต้องมีการยืนยันอีเมล
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = ข้อมูลเพิ่มเติม รวมถึง:
# Title
email-addresses-title = ที่อยู่อีเมล
# Title appearing on the Preferences dashboard. 
monitor-preferences = ค่ากำหนด { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = ลงชื่อเข้าในชื่อ: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = กรองตามหมวดหมู่:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = เมนู
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = มีวิธีปกป้องความเป็นส่วนตัวของคุณ เข้าร่วม { -brand-name }
# Link title
learn-more-link = เรียนรู้เพิ่มเติม
email-sent = ส่งอีเมลแล้ว!
# Form title
want-to-add = ต้องการเพิ่มอีเมลอื่นหรือไม่?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = ตรวจสอบลิงก์ที่ส่งไปยัง { $userEmail } เพื่อเพิ่มลงใน { -product-name }
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = จัดการที่อยู่อีเมลทั้งหมดใน { $preferencesLink }
