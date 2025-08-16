// index.js
const app = require('./login');
const port = 3001;

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
