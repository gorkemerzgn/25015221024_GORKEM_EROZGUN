# Kampüs Yazılım ve İnovasyon Kulübü Web Sitesi

Üniversite öğrencilerini yazılım, tasarım ve teknoloji etrafında bir araya getiren kulüp için hazırlanmış tanıtım ve etkinlik web sitesidir. Ziyaretçiler kulübü ve yönetim ekibini tanıyabilir, etkinlikleri inceleyebilir ve iletişim/üyelik başvurusu gönderebilir.

## Öğrenci Bilgileri

| Bilgi | Detay |
| --- | --- |
| Ad Soyad | Görkem Erözgün |
| Öğrenci Numarası | 25015221024 |

## Ders Bilgisi

| Bilgi | Detay |
| --- | --- |
| Ders | BPR201 İnternet Tabanlı Programlama |
| Öğretim Elemanı | Serkan Aksu |

## Kullanılan Teknolojiler

- **HTML5:** Sayfaların semantik yapısı ve içerikleri
- **CSS3:** Görsel tasarım, düzen ve duyarlı (responsive) görünüm
- **JavaScript:** Etkinlik listesinin anlık filtrelenmesi ve sonuç durumlarının güncellenmesi
- **Git:** Sürüm kontrolü
- **GitHub:** Kod deposu ve proje paylaşımı

Proje statik dosyalardan oluşur; paket kurulumu veya sunucu tarafı uygulama gerektirmez.

## Sayfalar

### `index.html` — Ana Sayfa

Kulüp tanıtımını, ana mesajı ve etkinlikler sayfasına yönlendiren bağlantıları içerir. Ayrıca kulübün çalışma değerlerini, öne çıkan etkinlikleri ve duyuruları sunar.

### `etkinlikler.html` — Etkinlikler

Kulüp atölyeleri, seminerleri, buluşmaları ve hackathonlarından örnekleri etkinlik kartlarıyla listeler. Arama alanı, kartları etkinlik adı, açıklaması, kategorisi ve konumu dahil kart metinlerine göre anlık filtreler. Sonuç sayacı eşleşen etkinlik sayısını gösterir; eşleşme olmadığında bilgilendirme mesajı görünür. **Temizle** düğmesi aramayı sıfırlar ve tüm kartları yeniden gösterir.

### `hakkimizda.html` — Hakkımızda

Kulübün vizyon ve misyonunu, yönetim ekibini ve kulübe katılmak ya da bilgi almak isteyenler için iletişim/başvuru formunu içerir. Form, gönderim sırasında ziyaretçinin varsayılan e-posta uygulamasını `yazilimkulubu@kampus.edu.tr` adresine yönlendirir; sunucuya kayıt yapmaz.

## Copilot ile Çalışma / Prompt Günlüğü

Proje geliştirme sürecinde Copilot'tan aşağıdaki işler için yardım alınmıştır:

1. “Kampüs Yazılım Kulübü için etkinlikler.html sayfasını oluştur. Sayfada navbar, arama kutusu (input), arama temizle butonu, gösterilen etkinlik sayısını yazan sayaç alanı, bulunamadı uyarısı ve en az 5 adet semantic article içeren etkinlik kartı olsun. style.css ve script.js dosyaları da bağlı olsun.”
2. “index.html dosyasını style.css tasarımıyla ve etkinlikler.html menü yapısıyla tam uyumlu olacak şekilde güncelle. Hero alanı, kulüp tanıtımı, öne çıkan etkinlikler/duyurular kartları ve footer içersin.”
3. “hakkimizda.html dosyasını oluştur. Mevcut navbar ve footer yapısıyla, style.css tasarımıyla tam uyumlu olsun. İçinde kulüp vizyonu, misyonu, en az 3 kişilik yönetim ekibi kartları ve kulübe katılmak isteyenler için bir iletişim/başvuru formu yer alsın. Gerekli stilleri style.css'e ekle.”
4. “Proje için eksiksiz ve profesyonel bir README.md dosyası oluştur. İçinde: Proje Başlığı (Kampüs Yazılım ve İnovasyon Kulübü Web Sitesi), Öğrenci Bilgileri (Görkem Erözgün - 25015221024), Ders Bilgisi (BPR201 İnternet Tabanlı Programlama - Serkan Aksu), Kullanılan Teknolojiler (HTML5, CSS3, JavaScript, Git, GitHub), Sayfa Tanıtımları (index.html, etkinlikler.html dinamik filtreleme, hakkimizda.html formu), Copilot ile Çalışma / Prompt Günlüğü ve Yerel Çalıştırma Rehberi yer alsın.”

İstekler doğrultusunda sayfa yapıları ve ortak tasarım tutarlılığı oluşturulmuş, etkinlik filtreleme tarayıcıda denenmiş ve değişiklikler Git kontrolleriyle doğrulanmıştır.

## Yerel Çalıştırma Rehberi

1. Depoyu bilgisayarınıza alın veya proje dosyalarını indirin:

   ```bash
   git clone <depo-adresi>
   ```

2. Depo klasörüne geçin:

   ```bash
   cd <proje-klasoru>
   ```

3. `index.html` dosyasını bir web tarayıcısında açın. VS Code kullanıyorsanız dosyayı açıp **Open with Live Server** seçeneğiyle yerel sunucuda da görüntüleyebilirsiniz.
4. Üst menüden **Etkinlikler** veya **Hakkımızda** sayfalarına gidin. Etkinlikler sayfasındaki arama ve temizleme işlevlerini deneyin.

Herhangi bir bağımlılık yüklemeye gerek yoktur. Yazı tipleri internet bağlantısı olduğunda Google Fonts üzerinden yüklenir; bağlantı yoksa sistem yazı tipi kullanılır.

## Proje Dosyaları

```text
.
├── index.html
├── etkinlikler.html
├── hakkimizda.html
├── style.css
├── script.js
└── README.md
```
