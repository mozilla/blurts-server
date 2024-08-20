# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Variables:
# $discount_percentage_num is the amount discounted in percentage per month
# $discount_duration is the number of month(s) that users will pay the discounted price
limitations-apply-title =
    { $discount_duration ->
        [one] { $discount_percentage_num } off { $discount_duration } month promotion
       *[other] { $discount_percentage_num } off { $discount_duration } months promotion
}
limitations-pill = Rules & Restrictions
limitations-apply-description-one = Discount available for a limited time only.
limitations-apply-description-two = Redeemable 1 time only.
# Variables:
# $discount_percentage_num is the amount discounted in percentage per month
# $discount_duration is the number of month(s) that users will pay the discounted price
limitations-apply-description-three =
    { $discount_duration ->
        [one] { -brand-mozilla-monitor } monthly subscribers will receive { $discount_percentage_num } off their next { $discount_duration } consecutive month billing.
       *[other] { -brand-mozilla-monitor } monthly subscribers will receive { $discount_percentage_num } off their next { $discount_duration } consecutive months billing.
}
