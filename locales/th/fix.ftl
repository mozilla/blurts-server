# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = การละเมิดข้อมูลที่มีความเสี่ยงสูง
fix-flow-nav-leaked-passwords = รหัสผ่านที่รั่วไหล
fix-flow-nav-security-recommendations = คำแนะนำด้านความปลอดภัย
guided-resolution-flow-exit = กลับไปยังแดชบอร์ด
guided-resolution-flow-next-arrow = ไปยังขั้นตอนถัดไป
guided-resolution-flow-next-arrow-sub-step = ไปที่ผลลัพธ์ถัดไป
guided-resolution-flow-step-navigation-label = ขั้นตอนแนะนำ

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = มาจัดการกันต่อเลย
fix-flow-celebration-next-recommendations-label = ดูคำแนะนำ
fix-flow-celebration-next-dashboard-label = ไปยังแดชบอร์ดของคุณ

## High-risk flow

fix-flow-celebration-high-risk-title = คุณได้แก้ไขการเปิดเผยที่มีความเสี่ยงสูงของคุณแล้ว!
fix-flow-celebration-high-risk-description-in-progress = การทำงานนี้อาจดูเป็นงานหนัก แต่เป็นสิ่งสำคัญที่ต้องดำเนินการเพื่อความปลอดภัยของตัวคุณเอง จงทำงานดีๆ ต่อไป
fix-flow-celebration-high-risk-description-done = การทำงานนี้อาจดูเป็นงานหนัก แต่เป็นสิ่งสำคัญที่ต้องดำเนินการเพื่อความปลอดภัยของตัวคุณเอง
fix-flow-celebration-high-risk-description-next-passwords = ทีนี้มาแก้ไขรหัสผ่านที่ถูกเปิดเผยของคุณกัน
fix-flow-celebration-high-risk-description-next-security-questions = ทีนี้มาแก้ไขคำถามความปลอดภัยที่ถูกเปิดเผยของคุณกัน
fix-flow-celebration-high-risk-description-next-security-recommendations = ต่อไป เราจะให้คำแนะนำด้านความปลอดภัยส่วนบุคคลแก่คุณโดยพิจารณาจากข้อมูลของคุณที่ถูกเปิดเผย
fix-flow-celebration-high-risk-description-next-dashboard = คุณมาถึงขั้นตอนสุดท้ายแล้ว คุณสามารถดูรายการสิ่งที่ต้องทำและติดตามความคืบหน้าของคุณได้บนแดชบอร์ด

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = รหัสผ่านของคุณได้รับการปกป้องแล้ว!
fix-flow-celebration-security-questions-title = คำถามความปลอดภัยของคุณได้รับการปกป้องแล้ว!
fix-flow-celebration-leaked-passwords-description-next-security-questions = ทีนี้มาตรวจดูและอัปเดตคำถามความปลอดภัยที่ถูกเปิดเผยของคุณกัน
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = ต่อไป เราจะให้คำแนะนำด้านความปลอดภัยส่วนบุคคลแก่คุณโดยพิจารณาจากข้อมูลของคุณที่ถูกเปิดเผย
fix-flow-celebration-leaked-passwords-description-next-dashboard = เยี่ยมเลย! คุณมาถึงขั้นตอนสุดท้ายแล้ว คุณสามารถดูรายการสิ่งที่ต้องทำและติดตามความคืบหน้าของคุณได้บนแดชบอร์ด

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = คุณได้ทำตามคำแนะนำเสร็จเรียบร้อยแล้ว!
fix-flow-celebration-security-recommendations-description-next-dashboard = เยี่ยมเลย! คุณมาถึงขั้นตอนสุดท้ายแล้ว คุณสามารถดูรายการสิ่งที่ต้องทำและติดตามความคืบหน้าของคุณได้บนแดชบอร์ด

# High Risk Data Breaches

high-risk-breach-heading = นี่คือสิ่งที่ต้องทำ
high-risk-breach-subheading = การกระทำนี้จำเป็นต้องเข้าถึงข้อมูลละเอียดอ่อนของคุณ ดังนั้นคุณจะต้องแก้ไขด้วยตนเอง
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary = ปรากฏในการรั่วไหลของข้อมูล { $num_breaches } จุด:
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name }<breach_date>เมื่อ { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = ทำเครื่องหมายว่าแก้ไขแล้ว
high-risk-breach-skip = ข้ามไปก่อนตอนนี้
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time = เวลาโดยประมาณ: { $estimated_time }+ นาที

# Credit Card Breaches

high-risk-breach-credit-card-title = หมายเลขบัตรเครดิตของคุณถูกเปิดเผย
high-risk-breach-credit-card-description = ใครก็ตามที่ได้รับข้อมูลดังกล่าวอาจทำการซื้อโดยไม่ได้รับอนุญาตซึ่งคุณอาจต้องรับผิดชอบ ดำเนินการทันทีเพื่อป้องกันความเสียหายทางการเงิน
high-risk-breach-credit-card-step-one = หากคุณยังมีบัตรนี้อยู่ โปรดติดต่อผู้ให้บริการบัตรเพื่อรายงานว่าบัตรถูกขโมย
high-risk-breach-credit-card-step-two = ขอทำบัตรใหม่พร้อมเลขบัตรใหม่
high-risk-breach-credit-card-step-three = ตรวจสอบบัญชีของคุณเพื่อดูว่ามีการเรียกเก็บเงินที่ไม่ได้รับอนุญาตหรือไม่

# Bank Account Breaches

high-risk-breach-bank-account-title = บัญชีธนาคารของคุณถูกเปิดเผย
high-risk-breach-bank-account-description = การดำเนินการโดยเร็วที่สุดอาจทำให้คุณได้รับความคุ้มครองทางกฎหมายเพิ่มมากขึ้น เพื่อช่วยให้คุณฟื้นตัวจากความสูญเสียใดๆได้
high-risk-breach-bank-account-step-one = แจ้งธนาคารของคุณทันทีว่าหมายเลขบัญชีของคุณถูกรุกล้ำ
high-risk-breach-bank-account-step-two = เปลี่ยนหมายเลขบัญชีของคุณ
high-risk-breach-bank-account-step-three = ตรวจสอบบัญชีของคุณเพื่อดูว่ามีการเรียกเก็บเงินที่ไม่ได้รับอนุญาตหรือไม่

# Social Security Number Breaches

high-risk-breach-social-security-title = หมายเลขประกันสังคมของคุณถูกเปิดเผย
high-risk-breach-social-security-description = ผู้หลอกลวงสามารถเปิดสินเชื่อใหม่หรือบัตรเครดิตโดยใช้หมายเลขประกันสังคมของคุณ รีบดำเนินการเพื่อป้องกันความเสียหายทางการเงิน
high-risk-breach-social-security-step-one = ปกป้องตัวคุณเองโดย<link_to_info>ตั้งค่าการแจ้งเตือนการฉ้อโกงหรืออายัดเครดิตของคุณ</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>ตรวจสอบรายงานเครดิตของคุณ</link_to_info> เพื่อหาบัญชีที่ไม่รู้จัก

# Social Security Number Modal

ssn-modal-title = เกี่ยวกับการแจ้งเตือนการฉ้อโกงและการอายัดเครดิต
ssn-modal-description-fraud-part-one = <b>การแจ้งเตือนการฉ้อโกง</b> ต้องการให้ธุรกิจตรวจสอบตัวตนของคุณก่อนที่จะออกเครดิตใหม่ในนามของคุณ การแจ้งเตือนนี้ไม่มีค่าใช้จ่าย ใช้งานได้ 1 ปี และจะไม่ส่งผลกระทบต่อคะแนนเครดิตของคุณ
ssn-modal-description-fraud-part-two = หากต้องการตั้งค่า โปรดติดต่อสำนักงานเครดิตแห่งใดก็ได้จากสามแห่ง คุณไม่จำเป็นต้องติดต่อสามแห่งทั้งหมด
ssn-modal-description-freeze-credit-part-one = <b>การอายัดเครดิตของคุณ</b> จะป้องกันไม่ให้ใครก็ตามเปิดบัญชีใหม่ในนามของคุณ การดำเนินการนี้ไม่มีค่าใช้จ่ายและไม่ส่งผลเสียต่อคะแนนเครดิตของคุณ แต่คุณจะต้องทำการปลดการอายัดก่อนเปิดบัญชีใหม่
ssn-modal-description-freeze-credit-part-two = หากต้องการอายัดเครดิตของคุณ โปรดติดต่อสำนักงานเครดิตทั้งสามแห่ง ได้แก่ <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> และ <transunion_link>TransUnion</transunion_link>
ssn-modal-learn-more = เรียนรู้เพิ่มเติมเกี่ยวกับการแจ้งเตือนการฉ้อโกงและการอายัดเครดิต
ssn-modal-ok = ตกลง

# PIN Breaches

high-risk-breach-pin-title = PIN ของคุณถูกเปิดเผย
high-risk-breach-pin-description = การดำเนินการโดยเร็วที่สุดอาจทำให้คุณได้รับความคุ้มครองทางกฎหมายเพิ่มมากขึ้น เพื่อช่วยให้คุณฟื้นตัวจากความสูญเสียใดๆได้
high-risk-breach-pin-step-one = แจ้งธนาคารของคุณทันทีว่ารหัส PIN ของคุณถูกรุกล้ำ
high-risk-breach-pin-step-two = เปลี่ยน PIN ของคุณในทุกที่ที่คุณใช้รหัสเดียวกัน
high-risk-breach-pin-step-three = ตรวจสอบบัญชีของคุณเพื่อดูว่ามีการเรียกเก็บเงินที่ไม่ได้รับอนุญาตหรือไม่

# No high risk breaches found

high-risk-breach-none-title = ข่าวดี เราไม่พบการรั่วไหลของข้อมูลที่มีความเสี่ยงสูง
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = เราตรวจพบการรั่วไหลของข้อมูลโดยอิงจากที่อยู่อีเมลของคุณ และเราไม่พบการรั่วไหลของข้อมูลที่มีความเสี่ยงสูงสำหรับ { $email_list }
high-risk-breach-none-sub-description-part-one = การละเมิดข้อมูลที่มีความเสี่ยงสูงประกอบด้วย:
high-risk-breach-none-sub-description-ssn = หมายเลขประกันสังคม
high-risk-breach-none-sub-description-bank-account = ข้อมูลบัญชีธนาคาร
high-risk-breach-none-sub-description-cc-number = หมายเลขบัตรเครดิต
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = ดำเนินการต่อ

# Security recommendations

security-recommendation-steps-label = คำแนะนำด้านความปลอดภัย
security-recommendation-steps-title = นี่คือคำแนะนำของเรา:
security-recommendation-steps-cta-label = เข้าใจแล้ว!

# Phone security recommendation

security-recommendation-phone-title = ปกป้องหมายเลขโทรศัพท์ของคุณ
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary = หมายเลขโทรศัพท์ของคุณถูกเปิดเผยในการรั่วไหลของข้อมูล { $num_breaches } ครั้ง:
security-recommendation-phone-description = เสียใจด้วยที่คุณไม่สามารถดึงข้อมูลกลับได้ แต่เรามีขั้นตอนที่คุณปฏิบัติตามได้เพื่อให้คุณปลอดภัย
security-recommendation-phone-step-one = ปิดกั้นหมายเลขสแปมเพื่อป้องกันการโทรขยะ
security-recommendation-phone-step-two = ไม่คลิกลิงก์ในข้อความที่ส่งมาจากผู้ส่งที่ไม่รู้จัก หากข้อความนั้นดูเหมือนมาจากแหล่งที่น่าเชื่อถือ ให้โทรติดต่อเพื่อยืนยันก่อน

# Email security recommendation

security-recommendation-email-title = ปกป้องที่อยู่อีเมลของคุณ
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary = ที่อยู่อีเมลของคุณถูกเปิดเผยในการรั่วไหลของข้อมูล { $num_breaches } ครั้ง:
security-recommendation-email-description = เสียใจด้วยที่คุณไม่สามารถแก้ไขได้ แต่มีขั้นตอนที่คุณสามารถปฏิบัติตามได้เพื่อปกป้องตนเอง
security-recommendation-email-step-one = ไม่คลิกลิงก์ในอีเมลที่ส่งมาจากผู้ส่งที่ไม่รู้จัก หากข้อความนั้นดูเหมือนมาจากแหล่งที่น่าเชื่อถือ ให้โทรติดต่อเพื่อยืนยันก่อน
security-recommendation-email-step-two = โปรดระวัง<link_to_info>การหลอกลวงฟิชชิ่ง</link_to_info>
security-recommendation-email-step-three = ทำเครื่องหมายอีเมลที่น่าสงสัยว่าเป็นสแปมและปิดกั้นผู้ส่ง
security-recommendation-email-step-four = ใช้<link_to_info>ตัวปกปิดอีเมลของ { -brand-relay }</link_to_info> เพื่อป้องกันอีเมลของคุณในอนาคต

# IP security recommendation

security-recommendation-ip-title = ใช้ VPN เพื่อความเป็นส่วนตัวที่มากขึ้น
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary = ที่อยู่ IP ของคุณถูกเปิดเผยในการรั่วไหลของข้อมูล { $num_breaches } ครั้ง:
security-recommendation-ip-description = ที่อยู่ IP ของคุณระบุตำแหน่งที่ตั้งและผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งแฮกเกอร์อาจใช้ข้อมูลเหล่านี้ในการหาตำแหน่งของคุณหรือเชื่อมต่อกับอุปกรณ์ของคุณ
security-recommendation-ip-step-one = ใช้ VPN (เช่น <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) เพื่อซ่อนที่อยู่ IP ที่แท้จริงของคุณและใช้อินเทอร์เน็ตอย่างเป็นส่วนตัว

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = รหัสผ่านของคุณบน { $breach_name } ถูกเปิดเผย
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = มันถูกพบในการรั่วไหลของข้อมูลเมื่อวันที่ { $breach_date }
leaked-passwords-description = มิจฉาชีพสามารถเข้าถึงบัญชีของคุณและอาจใช้รหัสผ่านนี้กับบัญชีอื่นเพื่อตรวจสอบว่าคุณใช้รหัสผ่านเดียวกันหรือไม่ ดังนั้นควรเปลี่ยนรหัสผ่านในทุกบัญชีที่ใช้รหัสผ่านนี้เพื่อป้องกันตัวเอง
leaked-passwords-steps-title = นี่คือสิ่งที่ต้องทำ
leaked-passwords-steps-subtitle = การกระทำนี้จำเป็นต้องเข้าถึงบัญชีของคุณ ดังนั้นคุณจะต้องแก้ไขด้วยตนเอง
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = เปลี่ยนรหัสผ่านของคุณสำหรับ <b>{ $emails_affected }</b> บน <link_to_breach_site>{ $breach_name }</link_to_breach_site>
leaked-passwords-step-two = รวมถึงบัญชีอื่นที่ใช้รหัสผ่านเดียวกัน
leaked-passwords-mark-as-fixed = ทำเครื่องหมายว่าแก้ไขแล้ว
leaked-passwords-skip = ข้ามไปก่อนตอนนี้
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time = ระยะเวลาโดยประมาณในการดำเนินการ: { $estimated_time } นาทีต่อไซต์

# Leaked Security Questions

leaked-security-questions-title = คำถามความปลอดภัยของคุณถูกเปิดเผยแล้ว
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = คำถามเหล่านั้นถูกพบในการรั่วไหลของข้อมูลบน { $breach_name } เมื่อวันที่ { $breach_date }
leaked-security-questions-description = มิจฉาชีพสามารถใช้ข้อมูลพวกนี้เพื่อเข้าถึงบัญชีของคุณและเว็บไซต์อื่นใดที่คุณใช้คำถามความปลอดภัยเดียวกันนี้ ดังนั้นควรเปลี่ยนคำถามความปลอดภัยตอนนี้เพื่อปกป้องบัญชีของคุณ
leaked-security-questions-steps-title = นี่คือสิ่งที่ต้องทำ
leaked-security-questions-steps-subtitle = การกระทำนี้จำเป็นต้องเข้าถึงบัญชีของคุณ ดังนั้นคุณจะต้องแก้ไขด้วยตนเอง
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = อัปเดตคำถามด้านความปลอดภัยของคุณสำหรับ <b>{ $email_affected }</b> บน <link_to_breach_site>{ $breach_name }</link_to_breach_site>
leaked-security-questions-step-two = อัปเดตข้อมูลดังกล่าวในเว็บไซต์อื่นที่คุณใช้คำถามด้านความปลอดภัยเดียวกัน โปรดใช้คำถามด้านความปลอดภัยที่แตกต่างกันสำหรับแต่ละบัญชี
