# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Yeni
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Tümü
# To go back to the list of announcements
announcement-dialog-back = Geri
announcement-dialog-clear-all = Tümünü okundu olarak işaretle
announcement-dialog-empty-state-title = Güncelleme yok
announcement-dialog-empty-state-description = Duyurular ve en yeni özelliklerle ilgili bilgiler için burayı takip etmeyi unutmayın.
announcement-dialog-trigger-alt = Duyuruları aç
announcement-dialog-alt = Duyuru listesi
announcement-small-img-alt = Duyuru simgesi
announcement-big-img-alt = Duyuru resmi

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] { $emailAddressesCount } e-posta adresi için veri ihlallerini ücretsiz takip edin.
       *[other] { $emailAddressesCount } e-posta adresi için veri ihlallerini ücretsiz takip edin.
    }
announcement-free-data-breach-monitoring-description = Veri ihlali izleme özelliğiyle bilgilerinizi güvende tutabilirsiniz. Bilgileriniz bir veri ihlalinde yer alırsa { -brand-monitor } sizi uyarır.
announcement-free-data-breach-monitoring-cta-label = Daha fazla bilgi al
