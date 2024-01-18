# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Düzeltildi</label>
exposure-chart-legend-heading-nr = Sayı
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-returning-user-upgrade-prompt = Ev adresi, aile üyeleri ve diğer bilgiler henüz dahil edilmemiştir.
exposure-chart-returning-user-upgrade-prompt-cta = Ücretsiz tarama başlatın
exposure-chart-scan-in-progress-prompt = <b>Tarama devam ediyor:</b> Adres, aile üyeleri ve diğer bilgiler henüz dahil edilmedi.
modal-cta-ok = Tamam
modal-open-alt = Aç
modal-close-alt = Kapat
progress-card-heres-what-we-fixed-headline-all = Düzelttikleriniz
progress-card-manually-fixed-headline = Elle düzeltildi
dashboard-tab-label-action-needed = İşlem gerekli
dashboard-tab-label-fixed = Düzeltildi
dashboard-exposures-all-fixed-label = Hepsi düzeltildi!
dashboard-exposures-area-headline = Bilgilerinizin ele geçirildiği tüm siteleri görün
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı.
       *[other] { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı.
    }
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrele
dashboard-exposures-filter-company = Şirket
dashboard-exposures-filter-date-found = Bulunduğu tarih
dashboard-exposures-filter-date-found-last-seven-days = Son 7 gün
dashboard-exposures-filter-date-found-last-thirty-days = Son 30 gün
dashboard-exposures-filter-date-found-last-year = Geçen yıl
dashboard-exposures-filter-status = Durum
dashboard-exposures-filter-status-action-needed = İşlem gerekli
dashboard-exposures-filter-status-in-progress = Devam ediyor
dashboard-exposures-filter-status-fixed = Düzeltildi
popover-open-filter-settings-alt = Filtreleri seçin
dashboard-exposures-filter-show-all = Tümünü göster
dashboard-exposures-filter-show-results = Sonuçları göster
dashboard-exposures-filter-reset = Sıfırla

## Top banner on the dashboard

dashboard-top-banner-section-label = Kontrol paneli özeti
dashboard-top-banner-scan-in-progress-title = Taramanız hâlâ devam ediyor
dashboard-top-banner-your-data-is-protected-title = Verileriniz korunuyor
dashboard-top-banner-your-data-is-protected-cta = Nelerin düzeltildiğini görün
dashboard-top-banner-lets-keep-protecting-title = Verilerinizi korumaya devam edelim
dashboard-top-banner-lets-keep-protecting-cta = Devam edelim
dashboard-top-banner-protect-your-data-title = Verilerinizi koruyalım
dashboard-top-banner-protect-your-data-cta = Hadi düzeltelim
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı. Sorunu nasıl çözeceğinizi adım adım anlatacağız.
       *[other] { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı. Sorunu nasıl çözeceğinizi adım adım anlatacağız.
    }
dashboard-top-banner-monitor-more-cta = Daha fazla e-postayı izleyin

# About Exposure Statuses Modal

