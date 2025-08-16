import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';

function Services() {
  const [data] = useState([
    {
      id: 1,
      serviceStatus: 'Tamamlandı',
      car: 'Ford Focus',
      customer: 'Ahmet Yılmaz',
      date: new Date(2025, 7, 10),
      deliveryDate: new Date(2025, 7, 12),
      mileage: 50000,
      repair: 'Fren değişimi',
      technician: 'Mehmet Kara'
    },
    {
      id: 2,
      serviceStatus: 'Devam Ediyor',
      car: 'Honda Civic',
      customer: 'Ayşe Demir',
      date: new Date(2025, 7, 11),
      deliveryDate: new Date(2025, 7, 15),
      mileage: 85000,
      repair: 'Yağ değişimi',
      technician: 'Fatma Tekin'
    },
    {
      id: 3,
      serviceStatus: 'Beklemede',
      car: 'BMW 320i',
      customer: 'Can Özkan',
      date: new Date(2025, 7, 12),
      deliveryDate: new Date(2025, 7, 18),
      mileage: 30000,
      repair: 'Motor arızası',
      technician: 'Ali Veli'
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
      {/* Services Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Servis Teklifleri</h2>
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
                  onClick={() => requestSort('serviceStatus')}
                >
                  <div className="flex items-center">
                    Servis Durumu
                    {getSortIcon('serviceStatus')}
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
                  onClick={() => requestSort('customer')}
                >
                  <div className="flex items-center">
                    Müşteri
                    {getSortIcon('customer')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('date')}
                >
                  <div className="flex items-center">
                    Tarih
                    {getSortIcon('date')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('deliveryDate')}
                >
                  <div className="flex items-center">
                    Teslim Tarihi
                    {getSortIcon('deliveryDate')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('mileage')}
                >
                  <div className="flex items-center">
                    Kilometre
                    {getSortIcon('mileage')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('repair')}
                >
                  <div className="flex items-center">
                    Tamir
                    {getSortIcon('repair')}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('technician')}
                >
                  <div className="flex items-center">
                    Teknisyen
                    {getSortIcon('technician')}
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.serviceStatus}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.car}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(item.date, 'dd/MM/yyyy')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(item.deliveryDate, 'dd/MM/yyyy')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.mileage}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.repair}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.technician}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="px-6 py-4 text-center text-sm text-gray-500">
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

export default Services;
