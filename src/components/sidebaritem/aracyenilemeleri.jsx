import React, { useState } from 'react';
import { Plus, Search, ChevronDown, ChevronUp } from 'lucide-react';

// Bu bileşen, araç yenileme hatırlatıcılarını yönetmek için kullanılır.
const AracYenilemeleri = () => {
  const [data] = useState([]); // Yenileme verileri burada saklanacak
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Tablo verilerini sıralama fonksiyonu
  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  // Sıralama ayarlarını değiştirme
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sıralama ikonunu gösterme
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return null;
    }
    if (sortConfig.direction === 'ascending') {
      return <ChevronUp size={14} className="ml-1" />;
    }
    return <ChevronDown size={14} className="ml-1" />;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-inter">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Yaklaşan Araç Yenilemeleri</h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:bg-blue-600 transition">
          <Plus size={16} className="mr-2" /> Yeni Oluştur
        </button>
      </div>

      {/* Filtreleme ve arama alanı */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* #İd Arama */}
          <div className="relative">
            <label htmlFor="id-search" className="block text-sm font-medium text-gray-700 mb-1">#İd</label>
            <div className="relative">
              <input
                type="text"
                id="id-search"
                placeholder="#id"
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Yenileme Türü Filtresi */}
          <div>
            <label htmlFor="renewal-type" className="block text-sm font-medium text-gray-700 mb-1">Yenileme Türü</label>
            <select
              id="renewal-type"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tüm Türler</option>
              <option value="sigorta">Sigorta</option>
              <option value="kasko">Kasko</option>
              <option value="muayene">Muayene</option>
              <option value="egzoz-muayenesi">Egzoz Muayenesi</option>
            </select>
          </div>
          {/* Plaka Arama */}
          <div>
            <label htmlFor="plaka-search" className="block text-sm font-medium text-gray-700 mb-1">Plaka</label>
            <input
              type="text"
              id="plaka-search"
              placeholder="Plaka"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Boş filtre alanı veya başka bir seçenek eklenebilir */}
          <div></div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex items-center">
            <input type="checkbox" id="show-owners" className="mr-2" />
            <label htmlFor="show-owners" className="text-sm text-gray-600">Araç Sahiplerini Göster</label>
          </div>
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Araç</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('tarih')}
              >
                <div className="flex items-center">
                  Tarih
                  {getSortIcon('tarih')}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yenileme Türü</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.arac}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.durum}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.tarih}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.yenileme_turu}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                  Hatırlatıcı bulunmuyor
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AracYenilemeleri;
