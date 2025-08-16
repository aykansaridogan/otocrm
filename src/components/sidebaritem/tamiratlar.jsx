import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight   } from 'lucide-react';

// This component is used to display and manage repair records.
const Tamiratlar = () => {
  const [data] = useState([]); // Repair data will be stored here
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Function to sort table data
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

  // Change sort settings
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Display sort icon
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
        <h2 className="text-2xl font-bold">Tamiratlar</h2>
        {/* Search input and filter */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              id="filter-type"
              className="w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="id">#id</option>
              <option value="arac">Araç</option>
              <option value="musteri">Müşteri</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              id="search-term"
              placeholder="Ara..."
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('arac')}
              >
                <div className="flex items-center">
                  Araç
                  {getSortIcon('arac')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('musteri')}
              >
                <div className="flex items-center">
                  Müşteri
                  {getSortIcon('musteri')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('tarih')}
              >
                <div className="flex items-center">
                  Tarih
                  {getSortIcon('tarih')}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kilometre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ödeme</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamir</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teknisyen</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.arac}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.musteri}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.tarih}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.kilometre}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.odeme}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.tamir}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.teknisyen}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.islem}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
                  0 records
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination section */}
        <div className="flex items-center justify-end px-6 py-3 bg-gray-50">
            <span className="text-sm text-gray-700 mr-4">0 records</span>
            <div className="flex items-center space-x-2">
                <button className="p-1 rounded-md text-gray-500 hover:bg-gray-200">
                    <ChevronLeft size={16} />
                </button>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 rounded-md bg-blue-500 text-white">1</button>
                    {/* Placeholder for other page numbers */}
                </div>
                <button className="p-1 rounded-md text-gray-500 hover:bg-gray-200">
                    <ChevronRight size={16} />
                </button>
            </div>
            <div className="ml-4 flex space-x-1">
                <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">10</button>
                <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">25</button>
                <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">50</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tamiratlar;
