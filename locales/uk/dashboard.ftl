# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
        [one] <nr>{ $nr }</nr> <label>розкриття</label>
        [few] <nr>{ $nr }</nr> <label>розкриття</label>
        [many] <nr>{ $nr }</nr> <label>розкриттів</label>
       *[other] <nr>{ $nr }</nr> <label>розкриттів</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>усунуто</label>
exposure-chart-legend-heading-type = Розкриття

## Top banner on the dashboard


# About Exposure Statuses Modal

