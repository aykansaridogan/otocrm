import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MoreHorizontal } from 'lucide-react';
// `date-fns` bu tabloda kullanılmıyor ancak ileride tarih formatı gerekirse diye tutulabilir.
// import { format } from 'date-fns';

function Alacaklar() {
  const [data] = useState([
    // Örnek veriler, tasarımdaki "Alacaklar" tablosuna uygun
    {
      id: 1,
      customer: 'Ahmet Yılmaz',
      phone: '+90 555 123 45 67',
      car: 'Ford Focus',
      balance: '1.500 TL',
      repairs: 'Fren değişimi',
      notes: 'Acil durum',
    },
    {
      id: 2,
      customer: 'Ayşe Demir',
      phone: '+90 555 987 65 43',
      car: 'Honda Civic',
      balance: '2.300 TL',
      repairs: 'Yağ değişimi',
      notes: 'Normal servis',
    },
    {
      id: 3,
      customer: 'Can Özkan',
      phone: '+90 555 111 22 33',
      car: 'BMW 320i',
      balance: '500 TL',
      repairs: 'Motor arızası',
      notes: 'Takip edilecek',
    },
  ]);

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
      {/* Alacaklar Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Alacaklar</h2>
          <div className="flex items-center space-x-2">
            <select className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="#">#ID</option>
            </select>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ara..."
                className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('id')}
                >
                  <div className="flex items-center">
                    #
                    {getSortIcon('id')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('customer')}
                >
                  <div className="flex items-center">
                    Müşteri
                    {getSortIcon('customer')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('phone')}
                >
                  <div className="flex items-center">
                    Telefon
                    {getSortIcon('phone')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('car')}
                >
                  <div className="flex items-center">
                    Araç
                    {getSortIcon('car')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('balance')}
                >
                  <div className="flex items-center">
                    Bakiye
                    {getSortIcon('balance')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('repairs')}
                >
                  <div className="flex items-center">
                    Tamirler
                    {getSortIcon('repairs')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('notes')}
                >
                  <div className="flex items-center">
                    Notlar
                    {getSortIcon('notes')}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedData.length > 0 ? (
                sortedData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.car}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.balance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.repairs}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.notes}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                    0 kayıt
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>{data.length} kayıt</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">1</span>
            <span className="text-gray-500">...</span>
            <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg">10</button>
            <button className="px-2 py-1 hover:bg-gray-200 text-gray-700 rounded-lg">25</button>
            <button className="px-2 py-1 hover:bg-gray-200 text-gray-700 rounded-lg">50</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alacaklar;
