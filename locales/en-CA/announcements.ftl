# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = New
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = All
# To go back to the list of announcements
announcement-dialog-back = Back
announcement-dialog-clear-all = Mark all as read
announcement-dialog-empty-state-title = No updates
announcement-dialog-empty-state-description = Check back regularly for updates and information on our latest features.
announcement-dialog-trigger-alt = Open announcements
announcement-dialog-alt = List of announcements
announcement-small-img-alt = Announcement icon
announcement-big-img-alt = Announcement image

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Get free data breach monitoring for up to { $emailAddressesCount } email address.
       *[other] Get free data breach monitoring for up to { $emailAddressesCount } email addresses.
    }
announcement-free-data-breach-monitoring-description = Help keep your info safe with data breach monitoring. { -brand-monitor } will alert you if your info appears in a data breach.
announcement-free-data-breach-monitoring-cta-label = Learn more
