// login.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// dotenv paketini kullanarak .env dosyasındaki değişkenleri yüklüyoruz
require('dotenv').config();

const app = express();

// CORS ve body-parser ayarları
app.use(cors());
app.use(bodyParser.json());

// MySQL veritabanı bağlantısı için ayarlar, .env dosyasından çekiliyor
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Veritabanına bağlanma
db.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanma hatası:', err);
    return;
  }
  console.log('MySQL veritabanına başarıyla bağlandı.');
});

// Yeni kullanıcı oluşturma (kayıt olma) endpoint'i
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  // Temel doğrulama
  if (!email || !password) {
    return res.status(400).json({ message: 'E-posta ve şifre zorunludur.' });
  }

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Bu e-posta adresi zaten kullanılıyor.' });
      }
      console.error('Kayıt oluşturma hatası:', err);
      return res.status(500).json({ message: 'Kullanıcı oluşturulurken bir hata oluştu.' });
    }
    console.log('Kayıt başarılı, yeni kullanıcı ID:', result.insertId);
    res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu.' });
  });
});

// Giriş endpoint'i
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'E-posta ve şifre zorunludur.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Giriş sorgulama hatası:', err);
      return res.status(500).json({ message: 'Giriş yapılırken bir hata oluştu.' });
    }

    if (results.length > 0) {
      // Kullanıcı bulunduysa
      res.status(200).json({ message: 'Giriş başarılı!', user: results[0] });
    } else {
      // Kullanıcı bulunamadıysa
      res.status(401).json({ message: 'Geçersiz e-posta veya şifre.' });
    }
  });
});

module.exports = app;
