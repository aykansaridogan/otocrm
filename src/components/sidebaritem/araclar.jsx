import React, { useState } from 'react';
import { Search, Plus, ArrowDownUp, Edit, Trash2, Eye } from 'lucide-react';

/**
 * Renders the 'Araclar' (Vehicles) page with a responsive, searchable,
 * and sortable table. It also includes an "Add New Vehicle" button.
 */
const Araclar = () => {
    // Mock data for vehicle records. In a real app, this would come from an API.
    const mockVehicleData = [
        { id: 1, plaka: '34 ABC 123', marka: 'Ford', musteri: 'Ahmet Yılmaz', bakiye: 500, tamirat: 'Tamamlandı' },
        { id: 2, plaka: '06 XYZ 456', marka: 'Volkswagen', musteri: 'Ayşe Kaya', bakiye: 0, tamirat: 'Bekliyor' },
        { id: 3, plaka: '59 DEF 789', marka: 'BMW', musteri: 'Mehmet Demir', bakiye: 2500, tamirat: 'Tamamlandı' },
        { id: 4, plaka: '34 GHI 012', marka: 'Mercedes', musteri: 'Fatma Şahin', bakiye: 0, tamirat: 'Tamamlandı' },
        { id: 5, plaka: '16 JKL 345', marka: 'Renault', musteri: 'Ali Güneş', bakiye: -120, tamirat: 'İptal Edildi' },
        { id: 6, plaka: '41 MNO 678', marka: 'Audi', musteri: 'Zeynep Ak', bakiye: 150, tamirat: 'Tamamlandı' },
        { id: 7, plaka: '35 PQR 901', marka: 'Toyota', musteri: 'Murat Erdem', bakiye: 0, tamirat: 'Bekliyor' },
        { id: 8, plaka: '01 STU 234', marka: 'Opel', musteri: 'Ebru Yıldız', bakiye: 0, tamirat: 'Tamamlandı' },
        { id: 9, plaka: '34 VWX 567', marka: 'Peugeot', musteri: 'Can Sönmez', bakiye: 75, tamirat: 'Tamamlandı' },
        { id: 10, plaka: '07 YZA 890', marka: 'Honda', musteri: 'Deniz Aydoğan', bakiye: 0, tamirat: 'Tamamlandı' },
    ];
    
    // State for search query and sorting configuration
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    // Handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter data based on search query
    const filteredData = mockVehicleData.filter(vehicle =>
        Object.values(vehicle).some(value =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Sort data based on sortConfig
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // Handle sorting when a column header is clicked
    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Araçlar</h1>
            
            {/* Action bar with search and add button */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-2/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Ara"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                </div>
                <div className="flex space-x-2">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <Plus size={18} />
                        <span>Yeni Oluştur</span>
                    </button>
                </div>
            </div>

            {/* Vehicles Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            {['plaka', 'marka', 'musteri', 'bakiye', 'tamirat'].map(key => (
                                <th
                                    key={key}
                                    onClick={() => handleSort(key)}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                >
                                    <div className="flex items-center">
                                        {key === 'plaka' && 'Plaka'}
                                        {key === 'marka' && 'Marka'}
                                        {key === 'musteri' && 'Müşteri'}
                                        {key === 'bakiye' && 'Bakiye'}
                                        {key === 'tamirat' && 'Tamirat'}
                                        <ArrowDownUp size={14} className="ml-2" />
                                    </div>
                                </th>
                            ))}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedData.map(vehicle => (
                            <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vehicle.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.plaka}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.marka}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.musteri}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {vehicle.bakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.tamirat}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-indigo-600 hover:text-indigo-900" title="Görüntüle"><Eye size={18} /></button>
                                        <button className="text-purple-600 hover:text-purple-900" title="Düzenle"><Edit size={18} /></button>
                                        <button className="text-red-600 hover:text-red-900" title="Sil"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Araclar;
