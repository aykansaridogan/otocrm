import React, { useState } from 'react';
import {
  FileText,
  Printer,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react';
import { format } from 'date-fns';

function Tamiratistatistikleri() {
  const [data] = useState([]);
  const [activeTab, setActiveTab] = useState('tumu'); // 'tumu', 'stok', 'tadilat'
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
    <div className="min-h-screen bg-gray-100 flex font-inter">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md rounded-tr-xl rounded-br-xl">
        <h2 className="text-lg font-bold mb-4">Dönem</h2>
        <nav className="space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">
            Bu Ay
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Geçen Ay
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Son 3 Ay
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Son 6 Ay
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Son 9 Ay
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Son 12 Ay
          </button>
        </nav>
        <h2 className="text-lg font-bold mt-8 mb-4">Aylık</h2>
        <nav className="space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">
            Ağustos 2025
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Temmuz 2025
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Haziran 2025
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Mayıs 2025
          </button>
          {/* Diğer aylar... */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 bg-gray-200 rounded-full p-1">
            <button className="px-4 py-2 bg-white rounded-full text-gray-800 font-medium shadow-sm flex items-center">
              <FileText size={16} className="mr-2" /> Basit Görünüm
            </button>
            <button className="px-4 py-2 rounded-full text-gray-500 font-medium flex items-center">
              <FileText size={16} className="mr-2" /> Rapor Görünümü
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium flex items-center">
              <FileText size={16} className="mr-2" /> Excel
            </button>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium flex items-center">
              <Printer size={16} className="mr-2" /> Yazdır
            </button>
          </div>
        </div>

        {/* Report Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-2">Ağustos 2025</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p>
                Rapor Adı:
                <span className="font-semibold text-gray-800 ml-2">Tamirat İstatistikleri Raporu</span>
              </p>
              <p>
                Tarih:
                <span className="font-semibold text-gray-800 ml-2">{format(new Date(), 'dd.MM.yyyy')}</span>
              </p>
              <p>
                Tarih Aralığı:
                <span className="font-semibold text-gray-800 ml-2">Ağustos 2025</span>
              </p>
              <p>
                Satış Sayısı:
                <span className="font-semibold text-gray-800 ml-2">0</span>
              </p>
              <p>
                Tamirat Sayısı:
                <span className="font-semibold text-gray-800 ml-2">0</span>
              </p>
            </div>
            <div>
              <p>
                Tamirat Toplamı:
                <span className="font-semibold text-gray-800 ml-2">0 TL</span>
              </p>
              <p>
                Stok Toplamı:
                <span className="font-semibold text-gray-800 ml-2">0 TL</span>
              </p>
              <p>
                Tadilat Toplamı:
                <span className="font-semibold text-gray-800 ml-2">0 TL</span>
              </p>
              <p>
                Genel Toplam:
                <span className="font-semibold text-gray-800 ml-2">0 TL</span>
              </p>
            </div>
          </div>
        </div>

        {/* Table Controls */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ara..."
                className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-1">
              <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'tumu' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('tumu')}>Tümü</button>
              <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'stok' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('stok')}>Stok Ürünler</button>
              <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'tadilat' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('tadilat')}>Tadilatlar</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">En Yüksek Toplam</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('item')}
                >
                  <div className="flex items-center">
                    Başlık
                    {getSortIcon('item')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('sales')}
                >
                  <div className="flex items-center">
                    Satış
                    {getSortIcon('sales')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('repair')}
                >
                  <div className="flex items-center">
                    Tamirat
                    {getSortIcon('repair')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('amount')}
                >
                  <div className="flex items-center">
                    Miktar
                    {getSortIcon('amount')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('total')}
                >
                  <div className="flex items-center">
                    Toplam
                    {getSortIcon('total')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedData.length > 0 ? (
                sortedData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.sales}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.repair}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    0 kayıt
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tamiratistatistikleri;
