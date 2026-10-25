# Zorunlu Test Notları

Testler yerel HTML dosyaları açılarak tarayıcıda uygulanmıştır. Mobil görünüm testi 390 px genişlikte kontrol edilmiştir.

| No | Test/İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Durum (GEÇTİ) |
|---:|---|---|---|---|
| 1 | Etkinlik arama alanına `Python` yazma | Python etkinliği görünür, sayaç 1 etkinlik gösterildiğini belirtir. | 1 kart göründü; sayaç “1 etkinlik gösteriliyor” oldu. | GEÇTİ |
| 2 | Arama alanında önce `ATÖLYE`, sonra `atölye` arama | Büyük/küçük harf farkı olmadan aynı kartlar ve sayaç gösterilir. | Her iki aramada da 3 kart göründü; sayaç “3 etkinlik gösteriliyor” oldu. | GEÇTİ |
| 3 | Arama alanına `xyz123` yazma | Hiç kart görünmez, sayaç 0 olur ve bulunamadı mesajı görünür. | 0 kart göründü; sayaç “0 etkinlik gösteriliyor” oldu ve bulunamadı mesajı görüntülendi. | GEÇTİ |
| 4 | Arama alanına yalnızca boşluk yazma; ardından bir arama yapıp **Temizle** düğmesine basma | Boşluk girdisi boş arama gibi değerlendirilir; Temizle aramayı sıfırlayıp 6 kartı geri getirir. | Her iki durumda da arama boş kabul edildi; 6 kart göründü ve sayaç “6 etkinlik gösteriliyor” oldu. Temizle sonrasında arama alanı boşaldı. | GEÇTİ |
| 5 | Üç sayfanın üst menü bağlantılarını kontrol etme | Ana Sayfa, Etkinlikler ve Hakkımızda bağlantıları doğru dosyalara gider. | Menüde `index.html`, `etkinlikler.html` ve `hakkimizda.html` bağlantıları bulundu; üç sayfa da ilgili başlıkla açıldı. | GEÇTİ |
| 6 | Etkinlikler sayfasını 390 px genişlikte kontrol etme ve arama alanından Tab tuşuna basma | Yatay taşma olmaz; Tab ile arama temizleme düğmesine erişilebilir. | Görünüm genişliği 390 px, belge ve gövde genişliği 375 px ölçüldü (yatay taşma yok). Arama alanından Tab ile `Temizle` düğmesine odaklanıldı. | GEÇTİ |
