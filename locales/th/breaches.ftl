# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = ฐานข้อมูลการละเมิดข้อมูล — { -brand-fx-monitor }
breach-all-meta-social-title = การละเมิดทั้งหมดที่ { -brand-fx-monitor } ตรวจพบ
breach-all-meta-social-description = เรียกดูรายการทั้งหมดของการละเมิดที่ทราบซึ่งถูกตรวจพบโดย { -brand-fx-monitor } จากนั้นตรวจสอบว่าข้อมูลของคุณถูกเปิดเผยหรือไม่
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = การละเมิดข้อมูลของ { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = คุณได้รับผลกระทบจากการถูกละเมิดข้อมูลของ { $company } หรือไม่?
breach-detail-meta-social-description = ใช้ { -brand-fx-monitor } เพื่อตรวจสอบว่าข้อมูลส่วนบุคคลของคุณถูกเปิดเผยจากการถูกละเมิดครั้งนี้หรือไม่ และทำความเข้าใจว่าจะต้องทำอย่างไรต่อไป

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = ตัวจัดการรหัสผ่านของ { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = เปลี่ยนรหัสผ่านของคุณและเปิดใช้งานการยืนยันตัวตนแบบสองขั้นตอน (2FA)
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = ในกรณีส่วนใหญ่ เราขอแนะนำให้คุณเปลี่ยนรหัสผ่านบนเว็บไซต์ของบริษัท แต่<b>เว็บไซต์ของบริษัทอาจล่มหรือมีเนื้อหาที่เป็นอันตราย</b> ดังนั้นโปรดระมัดระวังหากคุณ<breached-company-link>เยี่ยมชมเว็บไซต์</breached-company-link> เพื่อความปลอดภัยยิ่งขึ้น โปรดใช้รหัสผ่านที่ไม่ซ้ำกันสำหรับบัญชีทั้งหมด เพื่อป้องกันไม่ให้รหัสผ่านที่รั่วไหลไปใช้ในการเข้าถึงบัญชีอื่นได้ { $passwordManagerLink } สามารถช่วยให้คุณติดตามรหัสผ่านทั้งหมดของคุณได้อย่างปลอดภัย

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = ปกป้องอีเมลของคุณด้วยบริการปกปิดอีเมลอย่าง { $firefoxRelayLink }
breach-checklist-email-body = วิธีนี้สามารถซ่อนที่อยู่อีเมลที่แท้จริงของคุณแล้วส่งต่ออีเมลไปยังกล่องจดหมายจริงของคุณได้

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = ตรวจสอบรายงานเครดิตของคุณสำหรับบัญชี เงินกู้ หรือบัตรเครดิตที่คุณไม่รู้จัก
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = คุณสามารถพิจารณาอายัดเครดิตของคุณบน { $equifaxLink }, { $experianLink } และ { $transUnionLink } เพื่อหยุดมิจฉาชีพไม่ให้เปิดบัญชีใหม่ในชื่อของคุณ วิธีนี้ฟรีและจะไม่ส่งผลต่อคะแนนเครดิตของคุณ

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = รายงานการถูกละเมิดนี้ไปยังผู้ให้บริการบัตรเครดิตของคุณและขอรับบัตรใหม่ที่มีหมายเลขใหม่
breach-checklist-cc-body = คุณควรตรวจสอบใบแจ้งยอดบัตรเครดิตของคุณเพื่อดูค่าใช้จ่ายที่ไม่รู้จักด้วย

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = แจ้งธนาคารของคุณทันทีว่าหมายเลขบัญชีของคุณถูกรุกล้ำ
breach-checklist-bank-body = การดำเนินการดังกล่าวให้เร็วขึ้นอาจช่วยให้คุณได้รับการคุ้มครองทางกฎหมายมากขึ้นเพื่อช่วยให้คุณกู้คืนการสูญเสียใดๆได้ นอกจากนี้ คุณยังต้องการตรวจสอบบัญชีของคุณว่ามีการเรียกเก็บเงินที่ไม่รู้จักหรือไม่

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = แจ้งผู้ให้บริการบัตรของคุณและเปลี่ยน PIN ของคุณทันที
breach-checklist-pin-body = ตรวจสอบให้แน่ใจว่า PIN ใหม่ของคุณหรือ PIN อื่นๆ ไม่มีตัวเลขที่เดาง่าย เช่น วันเกิดหรือที่อยู่ของคุณ

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = ใช้งานอินเตอร์เน็ตแบบส่วนตัวด้วย VPN เช่น { $mozillaVpnLink }
breach-checklist-ip-body = ที่อยู่ IP ของคุณ (ที่อยู่ Internet Protocol) ระบุตำแหน่งของคุณและผู้ให้บริการอินเทอร์เน็ต VPN สามารถซ่อนที่อยู่ IP จริงของคุณเพื่อให้คุณใช้อินเทอร์เน็ตได้อย่างเป็นส่วนตัว

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = เปลี่ยนรหัสผ่านหรือ PIN ที่รวมถึงส่วนใด ๆ ของแอดเดรสของคุณ
breach-checklist-address-body = แอดเดรสสามารถค้นหาได้ง่ายในบันทึกสาธารณะ และสามารถทำให้รหัสผ่านและ PIN เหล่านั้นเดาได้ง่าย

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = เปลี่ยนรหัสผ่านหรือ PIN ที่มีวันเกิดของคุณ
breach-checklist-dob-body = วันเกิดง่ายต่อการค้นหาในบันทึกสาธารณะ และผู้ที่ค้นพบก็สามารถเดา PIN ของคุณได้อย่างง่ายดาย

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = ปกป้องหมายเลขโทรศัพท์ของคุณด้วยบริการปกปิด เช่น { $firefoxRelayLink } ซึ่งจะซ่อนหมายเลขโทรศัพท์จริงของคุณ

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = อัปเดตคำถามด้านความปลอดภัยของคุณ
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = ในกรณีส่วนใหญ่ เราขอแนะนำให้คุณอัปเดตคำถามด้านความปลอดภัยบนเว็บไซต์ของบริษัท แต่<b>เว็บไซต์ของบริษัทอาจล่มหรือมีเนื้อหาที่เป็นอันตราย</b> ดังนั้นโปรดระมัดระวังหากคุณ<breached-company-link>เยี่ยมชมเว็บไซต์</breached-company-link> เพื่อความปลอดภัยยิ่งขึ้น โปรดอัปเดตคำถามด้านความปลอดภัยเหล่านี้ในบัญชีสำคัญใดๆ ที่คุณใช้ และสร้างรหัสผ่านที่ไม่ซ้ำกันสำหรับบัญชีทั้งหมด

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = สร้างรหัสผ่านที่ไม่ซ้ำและแข็งแกร่งสำหรับบัญชีใดๆ ที่คุณใช้รหัสผ่านซ้ำ
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = ตัวจัดการรหัสผ่าน เช่น { $passwordManagerLink } (ซึ่งฟรีและถูกสร้างไว้ในเบราว์เซอร์ { -brand-firefox }) สามารถช่วยให้คุณติดตามรหัสผ่านทั้งหมดของคุณและเข้าถึงได้อย่างปลอดภัยจากอุปกรณ์ทั้งหมดของคุณ

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = ติดต่อ { $companyName } เพื่อแจ้งให้ทราบเกี่ยวกับการละเมิดนี้และสอบถามขั้นตอนที่คุณสามารถทำได้
