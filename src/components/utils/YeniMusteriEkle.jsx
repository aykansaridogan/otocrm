import React, { useState } from 'react';
import { Search, Plus, ArrowDownUp, Edit, Trash2, Eye, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Check, X } from 'lucide-react';

/**
 * Renders the form for adding a new customer, with options for
 * individual and corporate customer types.
 */
const YeniMusteriEkle = ({ onCancel }) => {
    // State to manage form data
    const [customerType, setCustomerType] = useState('Bireysel');
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        telefon: '',
        email: '',
        adres: '',
        firmaAd: '',
        vergiDairesi: '',
        vergiNo: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log('Form verileri:', formData);
        // Navigate back to the list view using the prop
        onCancel(); 
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Yeni Müşteri</h1>
            <div className="bg-gray-50 p-6 rounded-lg">
                {/* Customer type selection */}
                <div className="flex items-center space-x-4 mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Müşteri Bilgisi</h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="bireysel"
                            name="customerType"
                            value="Bireysel"
                            checked={customerType === 'Bireysel'}
                            onChange={() => setCustomerType('Bireysel')}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <label htmlFor="bireysel" className="text-gray-700">Bireysel</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="kurumsal"
                            name="customerType"
                            value="Kurumsal"
                            checked={customerType === 'Kurumsal'}
                            onChange={() => setCustomerType('Kurumsal')}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <label htmlFor="kurumsal" className="text-gray-700">Kurumsal</label>
                    </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Fields for both types */}
                        <div>
                            <label htmlFor="ad" className="block text-sm font-medium text-gray-700">Ad <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="ad"
                                name="ad"
                                value={formData.ad}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="soyad" className="block text-sm font-medium text-gray-700">Soyad</label>
                            <input
                                type="text"
                                id="soyad"
                                name="soyad"
                                value={formData.soyad}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">Telefon</label>
                            <input
                                type="tel"
                                id="telefon"
                                name="telefon"
                                value={formData.telefon}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="adres" className="block text-sm font-medium text-gray-700">Adres</label>
                            <input
                                type="text"
                                id="adres"
                                name="adres"
                                value={formData.adres}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        
                        {/* Corporate specific fields */}
                        {customerType === 'Kurumsal' && (
                            <>
                                <div>
                                    <label htmlFor="firmaAd" className="block text-sm font-medium text-gray-700">Firma Adı</label>
                                    <input
                                        type="text"
                                        id="firmaAd"
                                        name="firmaAd"
                                        value={formData.firmaAd}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vergiDairesi" className="block text-sm font-medium text-gray-700">Vergi Dairesi</label>
                                    <input
                                        type="text"
                                        id="vergiDairesi"
                                        name="vergiDairesi"
                                        value={formData.vergiDairesi}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vergiNo" className="block text-sm font-medium text-gray-700">Vergi no</label>
                                    <input
                                        type="text"
                                        id="vergiNo"
                                        name="vergiNo"
                                        value={formData.vergiNo}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* Form action buttons */}
                    <div className="flex justify-start space-x-4 pt-6">
                        <button
                            type="submit"
                            className="flex items-center space-x-2 px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                        >
                            <Check size={20} />
                            <span>Kaydet</span>
                        </button>
                        <button
                            type="button"
                            onClick={onCancel} // Call the onCancel function passed as prop
                            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
                        >
                            <X size={20} />
                            <span>Vazgeç</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default YeniMusteriEkle;
