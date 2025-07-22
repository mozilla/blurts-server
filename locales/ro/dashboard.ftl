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
        [one] <nr>{ $nr }</nr> <label>expunere</label>
        [few] <nr>{ $nr }</nr> <label>expuneri</label>
       *[other] <nr>{ $nr }</nr> <label>de expuneri</label>
    }
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit o { $exposures_unresolved_num } expunere ale datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor.
    }

## Top banner on the dashboard

# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Mai ai încă { $exposures_unresolved_num } expunere de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
        [few] Mai ai încă { $exposures_unresolved_num } expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
       *[other] Mai ai încă { $exposures_unresolved_num } de expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
    }
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit { $exposures_unresolved_num } expunere ale datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor. Te vom ghida pas cu pas despre cum să o remediezi.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
    }

# About Exposure Indicators Modal

