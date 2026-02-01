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
        [one] <nr>{ $nr }</nr> <label> ihlal</label>
       *[other] <nr>{ $nr }</nr> <label> ihlal</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Düzeltildi</label>
exposure-chart-legend-heading-type = İhlal
exposure-chart-legend-heading-nr = Sayı
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Bu grafik, bilgilerinizin kaç kez ele geçirildiğini gösterir.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Bu grafik, düzelttiğiniz veri ihlallerini gösterir ({ $total_fixed_exposures_num } / { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Ev adresi, aile üyeleri ve diğer bilgiler henüz dahil edilmemiştir.
exposure-chart-returning-user-upgrade-prompt-cta = Ücretsiz tarama başlatın
exposure-chart-scan-in-progress-prompt = <b>Tarama devam ediyor:</b> Adres, aile üyeleri ve diğer bilgiler henüz dahil edilmedi.
modal-active-number-of-exposures-title = Aktif veri ihlali sayınız hakkında
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Bu grafik, izlemekte olduğunuz { $limit } e-posta adresi için tüm veri ihlallerinde ele geçirildiğini tespit ettiğimiz veri türlerinin toplam sayısını içerir.
       *[other] Bu grafik, izlemekte olduğunuz en fazla { $limit } e-posta adresi için tüm veri ihlallerinde ele geçirildiğini tespit ettiğimiz veri türlerinin toplam sayısını içerir.
    }
modal-active-number-of-exposures-part-two = Örneğin, telefon numaranız 10 kez ele geçirildiyse 10 farklı sitede aynı telefon numaranız ele geçirilmiş olabilir veya 5 farklı sitede 2 farklı telefon numaranız ele geçirilmiş olabilir.
modal-active-number-of-exposures-part-three-all = Çözülen ihlaller, Düzeltildi sayfasındaki toplam düzeltilen ihlal sayısına eklenecektir.
modal-fixed-number-of-exposures-title = Düzeltilmiş veri ihlali sayınız hakkında
modal-fixed-number-of-exposures-all = Bu grafik, şu anda izlemekte olduğunuz tüm e-posta adresleri için düzeltilen toplam veri ihlali sayısını içerir. İhlaller düzeltildi olarak işaretlendiğinde buradaki toplam sayıya eklenecektir.
modal-cta-ok = Tamam
modal-cta-got-it = Anladım
open-modal-alt = Kutuyu aç
close-modal-alt = Kutuyu kapat
progress-card-heres-what-we-fixed-headline-all = Düzelttikleriniz
progress-card-manually-fixed-headline = Elle düzeltildi
dashboard-tab-label-action-needed = İşlem gerekli
dashboard-tab-label-fixed = Düzeltildi
dashboard-exposures-all-fixed-label = Hepsi düzeltildi!
dashboard-exposures-area-headline = Bilgilerinizin ele geçirildiği tüm siteleri görün
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] { $exposures_unresolved_num } verinizin ele geçirildiğini bulduk.
       *[other] { $exposures_unresolved_num } verinizin ele geçirildiğini bulduk.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Verileriniz { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı.
       *[other] Verileriniz { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı.
    }
dashboard-fixed-area-headline-all = Tüm düzeltilmiş veri ihlallerini göster
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrele
dashboard-exposures-filter-company = Şirket
dashboard-exposures-filter-date-found = Bulunduğu tarih
dashboard-exposures-filter-date-found-last-seven-days = Son 7 gün
dashboard-exposures-filter-date-found-last-thirty-days = Son 30 gün
dashboard-exposures-filter-date-found-last-year = Geçen yıl
dashboard-exposures-filter-status = Durum
popover-open-filter-settings-alt = Filtreleri seçin
dashboard-exposures-filter-show-all = Tümünü göster
dashboard-exposures-filter-show-results = Sonuçları göster
dashboard-exposures-filter-reset = Sıfırla

## Top banner on the dashboard

dashboard-top-banner-section-label = Kontrol paneli özeti
dashboard-top-banner-your-data-is-protected-title = Verileriniz korunuyor
dashboard-top-banner-your-data-is-protected-cta = Nelerin düzeltildiğini görün
dashboard-top-banner-protect-your-data-title = Verilerinizi koruyalım
dashboard-top-banner-protect-your-data-cta = Hadi düzeltelim
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] { $exposures_unresolved_num } verinizin ele geçirildiğini bulduk.
       *[other] { $exposures_unresolved_num } verinizin ele geçirildiğini bulduk.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Verileriniz { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı. Sorunu nasıl çözeceğinizi adım adım anlatacağız.
       *[other] Verileriniz { $data_breach_unresolved_num } veri ihlalinde karşımıza çıktı. Sorunu nasıl çözeceğinizi adım adım anlatacağız.
    }
dashboard-top-banner-no-exposures-found-title = Hiç veri ihlali bulunamadı
dashboard-top-banner-non-us-no-exposures-found-description = Haberler güzel! Bilinen tüm veri ihlallerini araştırdık ve hiçbir ihlal bulamadık. E-posta adresinizi izlemeye devam edeceğiz ve yeni bir ihlal olursa sizi uyaracağız.
dashboard-no-exposures-label = Hiç veri ihlali bulunamadı
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] İyi iş çıkardınız! Veri ihlaliniz düzeltildi. İhalleri izlemeye devam edeceğiz ve yeni bir ihlal yaşanırsa sizi uyaracağız.
       *[other] İyi iş çıkardınız! { $exposures_resolved_num } veri ihlalinizin hepsi düzeltildi. İhalleri izlemeye devam edeceğiz ve yeni bir ihlal yaşanırsa sizi uyaracağız.
    }
dashboard-top-banner-monitor-more-cta = Daha fazla e-postayı izleyin

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Bilinen tüm veri ihlallerindeki riskleri araştırıyoruz.
    Riskleriniz aşağıdaki durumlardan birine sahip olacaktır:
modal-exposure-indicator-title = İhlal durumları
modal-exposure-indicator-action-needed = Bir eylemi tamamlamak için gelişmiş veya manuel işlem yapmanız gerekiyor.
modal-exposure-indicator-fixed = İhlal çözüldüğü için herhangi bir işlem yapmanız gerekmiyor.
