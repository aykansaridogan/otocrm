import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için ekleme

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate(); // Hook tanımı

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    setLoading(true);

    try {
      const response = await fetch('https://88ca5b2767c4.ngrok-free.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageType('success');
        console.log('Giriş başarılı, kullanıcı:', data.user);

        // 1 saniye sonra yönlendirme
        setTimeout(() => {
          navigate('/homepage');
        }, 1000);

      } else {
        setMessage(data.message);
        setMessageType('error');
      }
    } catch (error) {
      console.error('API isteği sırasında hata oluştu:', error);
      setMessage('Sunucuya bağlanırken bir hata oluştu.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Sol Tarafta Welcome Kısmı */}
        <div className="flex-1 p-12 flex flex-col justify-center items-center bg-purple-700 text-white rounded-3xl m-4">
          <h2 className="text-4xl font-bold mb-4">Hoşgeldiniz</h2>
          <p className="text-center mb-8">
            ARAÇ TAKİP SİSTEMİ
          </p>
        </div>

        {/* Sağ Tarafta Login Formu */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Giriş Yap</h2>
          {message && (
            <div
              className={`p-4 mb-4 text-sm rounded-lg ${
                messageType === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
              role="alert"
            >
              {message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-500">
                  Beni Hatırla
                </label>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-3 mt-6 text-white rounded-lg font-bold transition shadow-md ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'
              }`}
              disabled={loading}
            >
              {loading ? 'Giriş Yapılıyor...' : 'Giriş'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
