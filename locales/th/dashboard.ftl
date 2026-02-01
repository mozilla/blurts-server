# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading = <label>มีการเปิดเผย</label> <nr>{ $nr } จุด</nr>
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <label>แก้ไขแล้ว</label> <nr>{ $nr } จุด</nr>
exposure-chart-legend-heading-type = การเปิดเผย
exposure-chart-legend-heading-nr = ตัวเลข
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = แผนภูมินี้แสดงจำนวนครั้งที่ข้อมูลของคุณถูกเปิดเผยอย่างเป็นปัจจุบัน
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = แผนภูมินี้แสดงจำนวนการเปิดเผยที่ได้รับการแก้ไขแล้ว ({ $total_fixed_exposures_num } จุดจากทั้งหมด { $total_exposures_num } จุด)
exposure-chart-returning-user-upgrade-prompt = ไม่รวมที่อยู่บ้าน สมาชิกในครอบครัว และอื่นๆ
exposure-chart-returning-user-upgrade-prompt-cta = เริ่มการสแกนฟรี
exposure-chart-scan-in-progress-prompt = <b>กำลังสแกนอยู่</b>: ยังไม่รวมที่อยู่ สมาชิกในครอบครัว และอื่นๆ
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all = แผนภูมินี้แสดงจำนวนครั้งทั้งหมดที่เราพบข้อมูลแต่ละประเภทที่ถูกเปิดเผยในทุกการละเมิดข้อมูลสำหรับที่อยู่อีเมล { $limit } ที่อยู่ที่คุณกำลังดูแลอยู่
modal-active-number-of-exposures-part-two = เช่น หากคุณมีการเปิดเผยหมายเลขโทรศัพท์ของคุณ 10 ครั้ง อาจหมายความว่าหมายเลขโทรศัพท์หนึ่งถูกเปิดเผยใน 10 เว็บไซต์ที่แตกต่างกัน หรืออาจหมายความว่าหมายเลขโทรศัพท์ 2 หมายเลขที่ต่างกันถูกเปิดเผยใน 5 เว็บไซต์ที่แตกต่างกัน
modal-cta-ok = ตกลง
modal-cta-got-it = เข้าใจแล้ว
open-modal-alt = เปิดโมดอล
close-modal-alt = ปิดโมดอล
progress-card-heres-what-we-fixed-headline-all = คุณได้แก้ไขสิ่งต่อไปนี้
progress-card-manually-fixed-headline = แก้ไขด้วยตนเอง
dashboard-tab-label-action-needed = ต้องดำเนินการบางอย่าง
dashboard-tab-label-fixed = แก้ไขแล้ว
dashboard-exposures-all-fixed-label = แก้ไขหมดเรียบร้อยแล้ว!
dashboard-exposures-area-headline = ดูเว็บไซต์ทั้งหมดที่ข้อมูลของคุณถูกเปิดเผย
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = เราพบการเปิดเผย { $exposures_unresolved_num } จุดสำหรับข้อมูลของคุณ
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 = มันปรากฏอยู่ในการละเมิดข้อมูล { $data_breach_unresolved_num } ครั้ง
dashboard-fixed-area-headline-all = ดูการเปิดเผยทั้งหมดที่ได้รับการแก้ไขแล้ว
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = ตัวกรอง
dashboard-exposures-filter-company = บริษัท
dashboard-exposures-filter-date-found = วันที่พบ
dashboard-exposures-filter-date-found-last-seven-days = 7 วันที่ผ่านมา
dashboard-exposures-filter-date-found-last-thirty-days = 30 วันที่ผ่านมา
dashboard-exposures-filter-date-found-last-year = เมื่อปีที่แล้ว
dashboard-exposures-filter-status = สถานะ
popover-open-filter-settings-alt = เลือกตัวกรอง
dashboard-exposures-filter-show-all = แสดงทั้งหมด
dashboard-exposures-filter-show-results = แสดงผล
dashboard-exposures-filter-reset = ตั้งค่าใหม่

## Top banner on the dashboard

dashboard-top-banner-section-label = สรุปแดชบอร์ด
dashboard-top-banner-your-data-is-protected-title = ข้อมูลของคุณได้รับการปกป้องแล้ว
dashboard-top-banner-your-data-is-protected-cta = ดูสิ่งที่ได้รับการแก้ไขแล้ว
dashboard-top-banner-protect-your-data-title = มาปกป้องข้อมูลของคุณกันเลย
dashboard-top-banner-protect-your-data-cta = มาแก้ไขกันเลย
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = เราพบการเปิดเผย { $exposures_unresolved_num } จุดสำหรับข้อมูลของคุณ
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 = พบการปรากฏในการละเมิดข้อมูล { $data_breach_unresolved_num } ครั้ง เราจะแนะนำวิธีการแก้ไขให้คุณทีละขั้นตอน
dashboard-top-banner-no-exposures-found-title = ไม่พบการเปิดเผย
dashboard-top-banner-non-us-no-exposures-found-description = ยินดีด้วย! เราค้นหาการละเมิดข้อมูลที่ทราบทั้งหมดและไม่พบการเปิดเผยใด เราจะคอยเฝ้าดูที่อยู่อีเมลของคุณและจะเตือนคุณหากมีการละเมิดเกิดขึ้น
dashboard-no-exposures-label = ไม่พบการเปิดเผย
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description = ยอดเยี่ยมเลย การเปิดเผยทั้งหมด { $exposures_resolved_num } จุดสำหรับข้อมูลของคุณได้รับการแก้ไขแล้ว! เราจะคอยเฝ้าดูและจะเตือนคุณหากมีการเปิดเผยใหม่
dashboard-top-banner-monitor-more-cta = เฝ้าดูอีเมลเพิ่มเติม

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    เราค้นหาการเปิดเผยในการละเมิดข้อมูลที่ทราบทั้งหมดแล้ว
    การเปิดเผยของคุณจะมีสถานะใดสถานะหนึ่งต่อไปนี้:
modal-exposure-indicator-title = สถานะการเปิดเผย
modal-exposure-indicator-action-needed = คุณต้องดำเนินการแบบขั้นสูงหรือด้วยตนเองเพื่อเสร็จสิ้นการกระทำ
modal-exposure-indicator-fixed = การเปิดเผยได้รับการแก้ไขแล้วและคุณไม่จำเป็นต้องดำเนินการใด
