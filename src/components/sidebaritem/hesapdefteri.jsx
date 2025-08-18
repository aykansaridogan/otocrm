import React, { useState } from 'react';
import { ChevronDown, CalendarDays, BarChart, List } from 'lucide-react';

/**
 * Renders the 'Hesap Defteri' (Ledger) page.
 * Displays cash-in and cash-out transactions in two separate tables.
 */
const HesapDefteri = () => {
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
    
    // Mock data for transactions.
    const [kasayaGirenler,] = useState([
        { id: 1, baslik: 'Araç Tamir', aciklama: 'Müşteri ödemesi', tutar: 500 },
        { id: 2, baslik: 'Yedek Parça', aciklama: 'Parça satışı', tutar: 250 },
    ]);

    const [kasadanCikanlar, ] = useState([
        { id: 1, baslik: 'Kira', aciklama: 'Ağustos ayı kira ödemesi', tutar: 1000 },
        { id: 2, baslik: 'Malzeme Gideri', aciklama: 'Yeni malzeme alımı', tutar: 300 },
    ]);

    // Calculate total sums for each category.
    const toplamGiren = kasayaGirenler.reduce((acc, item) => acc + item.tutar, 0);
    const toplamCikan = kasadanCikanlar.reduce((acc, item) => acc + item.tutar, 0);
    const kasaBakiye = toplamGiren - toplamCikan;

    // Handlers for top menu buttons.
    const handleGirisYap = () => {
        console.log('Giriş Yap butonuna tıklandı.');
    };

    const handleCikisYap = () => {
        console.log('Çıkış Yap butonuna tıklandı.');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Top header with navigation and date */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-gray-700">
                    <span className="text-xl font-semibold">Hesap Defteri</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <CalendarDays size={18} className="text-gray-500" />
                        <input
                            type="date"
                            value={currentDate}
                            onChange={(e) => setCurrentDate(e.target.value)}
                            className="bg-white p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Kasa Bakiye: {kasaBakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>
            </div>

            {/* Main content with tabs and transaction totals */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex space-x-4 mb-6 border-b border-gray-200">
                    <button className="flex items-center px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-bold transition">Günlük Kasa</button>
                    <button onClick={handleGirisYap} className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition">
                        <span className="mr-2">Giriş Yap</span>
                        <ChevronDown size={18} className="rotate-180" />
                    </button>
                    <button onClick={handleCikisYap} className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition">
                        <span className="mr-2">Çıkış Yap</span>
                        <ChevronDown size={18} />
                    </button>
                </div>
                
                {/* Total boxes for cash-in and cash-out */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Kasadaki Para</p>
                        <p className="text-xl font-bold text-green-700">{toplamGiren.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Kasadan Çıkan</p>
                        <p className="text-xl font-bold text-red-700">{toplamCikan.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Kasa Bakiye</p>
                        <p className="text-xl font-bold text-blue-700">{kasaBakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                    </div>
                </div>

                {/* Tables for cash-in and cash-out transactions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Kasaya Girenler Table */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold">Kasaya Giren</span>
                            <span className="font-semibold">{toplamGiren.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                        </div>
                        <div className="overflow-x-auto rounded-lg shadow-sm">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutar</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {kasayaGirenler.map(item => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.baslik}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.aciklama}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.tutar.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Kasadan Çıkanlar Table */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold">Kasadan Çıkan</span>
                            <span className="font-semibold">{toplamCikan.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                        </div>
                        <div className="overflow-x-auto rounded-lg shadow-sm">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutar</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {kasadanCikanlar.map(item => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.baslik}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.aciklama}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.tutar.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HesapDefteri;
