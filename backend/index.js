// index.js
const app = require('./login');
const port = 3001;
const cors = require('cors'); // CORS modülünü dahil et

// CORS middleware'ini uygulamaya ekle
// Bu, tüm origin'lerden gelen isteklere izin verir.
// İhtiyaca göre daha spesifik ayarlar yapılabilir.
app.use(cors());

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

