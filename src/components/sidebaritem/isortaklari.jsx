import React, { useState } from 'react';
import { User, Search, Plus, Trash2, Edit, Save, X } from 'lucide-react';

/**
 * Renders the 'İş Ortakları' (Business Partners) management page.
 * Displays a list of business partners and a form to add a new one.
 */
const IsOrtaklari = () => {
    // State to manage the current view: 'list' or 'form'.
    const [view, setView] = useState('list');
    
    // State to manage the list of business partners.
    const [isOrtaklari, setIsOrtaklari] = useState([
        { id: 1, firmaAdi: 'Yıldız Otomotiv', firmaYetkilisi: 'Can Yılmaz', bakiye: 1500, tamirler: 25 },
        { id: 2, firmaAdi: 'Güneş Servis', firmaYetkilisi: 'Aylin Güneş', bakiye: 0, tamirler: 18 },
        { id: 3, firmaAdi: 'Çelik Parça', firmaYetkilisi: 'Efe Çelik', bakiye: -500, tamirler: 10 },
    ]);

    // State for the new business partner form data.
    const [formData, setFormData] = useState({
        firmaYetkilisiAd: '',
        firmaYetkilisiSoyad: '',
        firmaAdi: '',
        isTanimi: '',
        telefon: '',
        adres: '',
    });

    const handleYeniOlustur = () => {
        setView('form');
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form verileri kaydedildi:', formData);
        // Add logic to save the new partner to the list or database.
        // For demonstration, we'll just log and switch back to list view.
        setView('list');
        // Reset form data after submission
        setFormData({
            firmaYetkilisiAd: '',
            firmaYetkilisiSoyad: '',
            firmaAdi: '',
            isTanimi: '',
            telefon: '',
            adres: '',
        });
    };

    const handleCancel = () => {
        setView('list');
    };

    const handleEdit = (id) => {
        console.log(`İş ortağını düzenle: ${id}`);
    };

    const handleDelete = (id) => {
        setIsOrtaklari(isOrtaklari.filter(partner => partner.id !== id));
        console.log(`İş ortağını sil: ${id}`);
    };

    // Render the list view
    if (view === 'list') {
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                {/* Header and top navigation */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <User size={24} />
                        <span className="text-xl font-semibold">İş Ortakları</span>
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
    
                {/* Business Partners Table */}
                <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firma Adı</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Firma Yetkilisi</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bakiye</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamirler</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isOrtaklari.map(partner => (
                                <tr key={partner.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{partner.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.firmaAdi}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.firmaYetkilisi}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {partner.bakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.tamirler}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(partner.id)}
                                                className="text-blue-600 hover:text-blue-900 transition"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(partner.id)}
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
    }

    // Render the form view
    if (view === 'form') {
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex items-center mb-6">
                    <span className="text-xl font-semibold">Yeni İş Ortağı</span>
                </div>
                <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Firma Yetkilisi */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 border-b pb-2">Firma Yetkilisi</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="text-gray-700">Ad</span>
                                    <input
                                        type="text"
                                        name="firmaYetkilisiAd"
                                        value={formData.firmaYetkilisiAd}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Soyad</span>
                                    <input
                                        type="text"
                                        name="firmaYetkilisiSoyad"
                                        value={formData.firmaYetkilisiSoyad}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Firma Bilgisi */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 border-b pb-2">Firma Bilgisi</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="text-gray-700">Firma Adı</span>
                                    <input
                                        type="text"
                                        name="firmaAdi"
                                        value={formData.firmaAdi}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">İş Tanımı</span>
                                    <select
                                        name="isTanimi"
                                        value={formData.isTanimi}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Seç</option>
                                        <option value="Tedarikçi">Tedarikçi</option>
                                        <option value="Müşteri">Müşteri</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Telefon</span>
                                    <input
                                        type="text"
                                        name="telefon"
                                        value={formData.telefon}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block col-span-2">
                                    <span className="text-gray-700">Adres</span>
                                    <input
                                        type="text"
                                        name="adres"
                                        value={formData.adres}
                                        onChange={handleFormChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            <Save size={18} />
                            <span>Kaydet</span>
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                            <X size={18} />
                            <span>Vazgeç</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default IsOrtaklari;
