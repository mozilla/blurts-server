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
        [one] <nr>{ $nr }</nr><label>q'alajisanem</label>
       *[other] <nr>{ $nr }</nr><label>taq q'alajisanem</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr><label>xsuk'matajik</label>
exposure-chart-legend-heading-type = Q'alajisab'al
exposure-chart-legend-heading-nr = Ajilab'al
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }
exposure-chart-caption = We k'utb'al kuk'utu janipa' mul k'o le aq'alajisanem pa k'axk'olil
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = We k'utb'al kuk'utu' janipa' mul suk'uman le k'axk'olil { $total_fixed_exposures_num } man pa { $total_exposures_num } taj
exposure-chart-returning-user-upgrade-prompt = K'a maja' kya' rajilab'alil ochochib'al, ajupaja chi'l e nik'aj chik.
exposure-chart-returning-user-upgrade-prompt-cta = Chamajij uq'atuxik
exposure-chart-scan-in-progress-prompt = <b>Ktajin uq'atuxik:</b>K'a maja kya' rajilab'alil ochochib'al, ajupaja, chi'l e nik'aj chik.
modal-active-number-of-exposures-title = Chi rij le rajilab'alil k'axk'olil k'olik
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] We k'utb'al kuk'ut ronojel mul xqariq jalajoj uwach juq'attzij le k'o chi uwach ronojel retztaqan rech { $limit } taqoqxa'nib'al  le ktajin kawilawachij.
       *[other] We k'utb'al kuk'ut ronojel mul xqariq jalajoj uwach juq'attzij le k'o chi uwach ronojel retztaqan le kopan pa { $limit } taqoqxa'nib'al  le ktajin kawilawachij.
    }
