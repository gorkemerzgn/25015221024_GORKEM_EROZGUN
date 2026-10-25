# Yapay Zekâ Kullanım Notları

## Öğrenci ve Ders Bilgileri

| Bilgi | Detay |
| --- | --- |
| Öğrenci | Görkem Erözgün |
| Öğrenci numarası | 25015221024 |
| Ders | BPR201 İnternet Tabanlı Programlama |
| Öğretim elemanı | Dr. Öğr. Üyesi Serkan AKSU |

## Kullanılan Temel Promptlar ve Amaçları

### 1. `etkinlikler.html` sayfasının iskeleti

**Prompt:** “Kampüs Yazılım Kulübü için etkinlikler.html sayfasını oluştur. Sayfada navbar, arama kutusu (input), arama temizle butonu, gösterilen etkinlik sayısını yazan sayaç alanı, bulunamadı uyarısı ve en az 5 adet semantic article içeren etkinlik kartı olsun. style.css ve script.js dosyaları da bağlı olsun.”

**Amaç:** Etkinlikleri gösterecek temel sayfa yapısını kurmak; gezinme menüsü, etkinlik kartları, arama kontrolleri ve filtreleme için gereken alanları belirlemek.

### 2. `index.html` sayfasını ortak tasarıma uyarlama

**Prompt:** “index.html dosyasını style.css tasarımıyla ve etkinlikler.html menü yapısıyla tam uyumlu olacak şekilde güncelle. Hero alanı, kulüp tanıtımı, öne çıkan etkinlikler/duyurular kartları ve footer içersin.”

**Amaç:** Ana sayfayı diğer sayfalarla ortak navbar, footer ve görsel tasarım dilini kullanacak biçimde düzenlemek; kulüp tanıtımıyla öne çıkan içerikleri sunmak.

### 3. `hakkimizda.html` sayfasının yapısı

**Prompt:** “hakkimizda.html dosyasını oluştur. Mevcut navbar ve footer yapısıyla, style.css tasarımıyla tam uyumlu olsun. İçinde kulüp vizyonu, misyonu, en az 3 kişilik yönetim ekibi kartları ve kulübe katılmak isteyenler için bir iletişim/başvuru formu yer alsın. Gerekli stilleri style.css'e ekle.”

**Amaç:** Kulübün amaçlarını ve ekibini tanıtan, başvuru ve iletişim için form içeren bir sayfa oluşturup ortak stillerle uyumlu hale getirmek.

## Değerlendirilen ve Uygulanan Öneri

Arama davranışını yalnızca etkinlik kartlarının `h3` başlıklarında eşleşme arayacak şekilde sınırlamak yerine, tüm kart içeriğinde arama yapacak biçimde genişlettik. Böylece kullanıcı etkinlik adı dışında açıklama, kategori veya konum metnini aradığında da ilgili karta ulaşabiliyor. Bu nedenle eşleşme kontrolünde `card.textContent` kullanılıyor.

## Kod Hakkında Kendi Açıklamalarım

### `eventSearch` input dinleyicisi

Arama kutusuna her yazı yazıldığında `input` olayı tetiklenir ve etkinlikleri güncelleyen fonksiyon çalışır. Bu sayede arama sonucunu görmek için ayrıca bir arama düğmesine basmaya gerek kalmaz; liste ve sonuç sayısı yazarken güncellenir.

### Türkçe küçük harfe çevirme ve `card.hidden` koşulu

Arama metnini ve kartın metnini `toLocaleLowerCase('tr-TR')` ile Türkçe kurallarına göre küçük harfe çeviriyorum. Böylece büyük-küçük harf farkı aramayı etkilemez ve Türkçe `I/İ` harfleri yerel kurallara göre işlenir. Kart metni arama ifadesini içeriyorsa kart görünür kalır; içermiyorsa `card.hidden` değerini `true` yaparak kartı gizlerim. Eşleşen kart sayısını da aynı kontrolde sayaca yansıtırım.
