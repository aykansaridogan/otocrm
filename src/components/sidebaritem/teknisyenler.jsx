import React, { useState } from 'react';
import { User, Search, Plus, Trash2, Edit } from 'lucide-react';

/**
 * Renders the 'Teknisyenler' (Technicians) management page.
 * Displays a list of technicians with their details and provides options to manage them.
 */
const Teknisyenler = () => {
    // Mock data for the technicians.
    const [teknisyenler, setTeknisyenler] = useState([
        { id: 1, adSoyad: 'Ali Veli', gorevi: 'Baş Teknisyen', telefon: '532 123 45 67', bakiye: 500, tamirler: 12 },
        { id: 2, adSoyad: 'Mehmet Kaya', gorevi: 'Teknisyen', telefon: '542 987 65 43', bakiye: 0, tamirler: 20 },
        { id: 3, adSoyad: 'Can Demir', gorevi: 'Stajyer', telefon: '554 234 56 78', bakiye: -250, tamirler: 5 },
    ]);

    const handleYeniOlustur = () => {
        console.log('Yeni Oluştur butonuna tıklandı.');
    };

    const handleEdit = (id) => {
        console.log(`Teknisyen düzenle: ${id}`);
    };

    const handleDelete = (id) => {
        // Filter out the technician to be deleted
        setTeknisyenler(teknisyenler.filter(teknisyen => teknisyen.id !== id));
        console.log(`Teknisyen sil: ${id}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Header and top navigation */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-gray-700">
                    <User size={24} />
                    <span className="text-xl font-semibold">Teknisyenler</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ara..."
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button
                        onClick={handleYeniOlustur}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <Plus size={18} />
                        <span>Yeni Oluştur</span>
                    </button>
                </div>
            </div>

            {/* Technicians Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Görev</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bakiye</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamirler</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {teknisyenler.map(teknisyen => (
                            <tr key={teknisyen.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teknisyen.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teknisyen.gorevi}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teknisyen.telefon}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {teknisyen.bakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teknisyen.tamirler}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(teknisyen.id)}
                                            className="text-blue-600 hover:text-blue-900 transition"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(teknisyen.id)}
                                            className="text-red-600 hover:text-red-900 transition"
                                        >
                                            <Trash2 size={18} />
                                        </button>
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

export default Teknisyenler;
