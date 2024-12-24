# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = เพิ่มที่อยู่อีเมลอื่น
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] บัญชีของคุณมีการเฝ้าสังเกตที่อยู่อีเมล { $total } ที่อยู่ เพิ่มที่อยู่อีเมลใหม่เพื่อดูว่ามีส่วนเกี่ยวข้องกับการละเมิดหรือไม่
       *[other] บัญชีของคุณมีการเฝ้าสังเกตที่อยู่อีเมลสูงสุด { $total } ที่อยู่ เพิ่มที่อยู่อีเมลใหม่เพื่อดูว่ามีส่วนเกี่ยวข้องกับการละเมิดหรือไม่
    }
add-email-address-input-label = ที่อยู่อีเมล
add-email-send-verification-button = ส่งลิงก์ยืนยัน
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = ยืนยันลิงก์ที่ส่งไปทาง { $email } เพื่อเพิ่มลงใน { -brand-fx-monitor } จัดการที่อยู่อีเมลทั้งหมดได้ใน <a { $settings-href }>การตั้งค่า</a>
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = ยืนยันลิงก์ที่ส่งไปทาง <b>{ $email }</b> เพื่อเพิ่มลงใน { -brand-mozilla-monitor }
