# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = รายงาน { -product-name }
report-date = วันที่รายงาน:
email-address = ที่อยู่อีเมล:

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

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    คุณได้รับอีเมลนี้เนื่องจากคุณสมัครรับการแจ้งเตือนเกี่ยวกับ { -product-name }
    นี่คืออีเมลอัตโนมัติ หากต้องการความช่วยเหลือ โปรดไปที่ { $faqLink }

# Button text
verify-email-cta = ตรวจสอบอีเมล

# Button text
see-all-breaches = ดูการรั่วไหลทั้งหมด

# Headline of verification email
email-link-expires = ลิงก์นี้จะหมดอายุใน 24 ชั่วโมง
email-verify-blurb = ยืนยันอีเมลของคุณเพื่อเพิ่มใน { -product-name } และสมัครรับการแจ้งเตือนการรั่วไหล

# Email headline
email-found-breaches-hl = นี่คือข้อมูลสรุปเกี่ยวกับข้อมูลที่รั่วไหลที่ผ่านมาของคุณ

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = สรุปการรั่วไหลสำหรับ { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } ปรากฏในการรั่วไหลของข้อมูล 0 ครั้ง

# Email headline
email-alert-hl = { $userEmail } ปรากฏในการรั่วไหลของข้อมูลครั้งใหม่

##

# Subject line of email
email-subject-found-breaches = { -product-name } พบข้อมูลของคุณในการรั่วไหลเหล่านี้

# Subject line of email
email-subject-no-breaches = { -product-name } ไม่พบการรั่วไหลที่ทราบ

# Subject line of email
email-subject-verify = ยืนยันอีเมลของคุณสำหรับ { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = เรียนรู้เพิ่มเติมเกี่ยวกับ { $fxmLink }

email-sensitive-disclaimer =
    เนื่องด้วยลักษณะธรรมชาติที่ละเอียดอ่อนของข้อมูลที่รั่วไหลนี้ ทำให้ไม่สามารถค้นพบอีเมลที่เกี่ยวข้องได้อย่างเปิดเผยได้ 
    คุณได้รับการแจ้งเตือนนี้เนื่องจากคุณเป็นเจ้าของอีเมลนี้ที่ผ่านการตรวจสอบแล้ว

fxm-warns-you-no-breaches =
    { -product-name } จะเตือนคุณเกี่ยวกับการรั่วไหลของข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    ตอนนี้ไม่พบข้อมูลใด ๆ ที่รั่วไหล เราจะแจ้งเตือนคุณหากอีเมลของคุณปรากฏอยู่ในข้อมูลที่รั่วไหลใหม่

fxm-warns-you-found-breaches =
    { -product-name } จะเตือนคุณเกี่ยวกับการรั่วไหลของข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    คุณได้ลงทะเบียนรับการแจ้งเตือนคุณหากอีเมลของคุณปรากฏอยู่ในข้อมูลที่รั่วไหลใหม่ไว้แล้ว

email-breach-alert-blurb =
    { -product-name } จะเตือนคุณเกี่ยวกับการรั่วไหลของข้อมูลที่เกี่ยวข้องกับข้อมูลส่วนตัวของคุณ 
    เราเพิ่งได้รับรายละเอียดเกี่ยวกับการรั่วไหลของข้อมูลของบริษัทอื่น

# Section headline
monitor-another-email = ต้องการตรวจสอบอีเมลอื่นอีกหรือไม่?

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

