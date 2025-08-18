import React, { useState } from 'react';
import { FileText, Printer, ChevronLeft, CalendarDays, BarChart, List } from 'lucide-react';

/**
 * Renders the 'Satışlar Raporu' (Sales Report) page with filtering and viewing options.
 * Displays report details and a table of all sales.
 */
const SatislarRaporu2 = () => {
    // Mock data for the report and the side menu.
    const mockReportData = {
        raporAdi: 'Satışlar Raporu',
        tarih: new Date().toLocaleDateString('tr-TR'),
        tarihAraligi: 'Ağustos 2025',
        satisSayisi: 8,
        toplam: 5500,
        sales: [
            { id: 1, tarih: '15.08.2025', musteri: 'Ahmet Yılmaz', toplam: 500 },
            { id: 2, tarih: '14.08.2025', musteri: 'Ayşe Kaya', toplam: 1500 },
            { id: 3, tarih: '13.08.2025', musteri: 'Mehmet Demir', toplam: 750 },
            { id: 4, tarih: '12.08.2025', musteri: 'Fatma Şahin', toplam: 3000 },
        ]
    };

    const mockAylarData = [
        'Ağustos 2025', 'Temmuz 2025', 'Haziran 2025', 'Mayıs 2025', 'Nisan 2025', 'Mart 2025', 'Şubat 2025', 'Ocak 2025',
        'Aralık 2024', 'Kasım 2024', 'Ekim 2024', 'Eylül 2024'
    ];
    
    const [selectedAy, setSelectedAy] = useState('Ağustos 2025');

    const handleGeriDon = () => {
        console.log('Geri Dön butonuna tıklandı.');
    };

    const handleBasitGorunum = () => {
        console.log('Basit Görünüm butonuna tıklandı.');
    };

    const handleRaporGorunumu = () => {
        console.log('Rapor Görünümü butonuna tıklandı.');
    };

    const handleExportExcel = () => {
        console.log('Excel\'e aktar butonuna tıklandı.');
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left side menu for filtering */}
            <div className="w-full md:w-64 bg-gray-100 p-6 rounded-2xl shadow-md md:mr-6 mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-4">Dönem</h2>
                <ul className="space-y-2 mb-6">
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg bg-blue-500 text-white font-semibold">Bu Ay</a></li>
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200">Geçen Ay</a></li>
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200">Son 3 Ay</a></li>
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200">Son 6 Ay</a></li>
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200">Son 9 Ay</a></li>
                    <li><a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200">Son 12 Ay</a></li>
                </ul>
                <h2 className="text-xl font-bold mb-4">Aylık</h2>
                <ul className="space-y-2">
                    {mockAylarData.map(ay => (
                        <li key={ay}>
                            <a
                                href="#"
                                onClick={() => setSelectedAy(ay)}
                                className={`flex items-center space-x-2 p-2 rounded-lg ${selectedAy === ay ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-200'}`}
                            >
                                {ay}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main report content */}
            <div className="flex-1 p-6 bg-white rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        <button
                            onClick={handleGeriDon}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                            <ChevronLeft size={18} />
                            <span>Geri Dön</span>
                        </button>
                        <button
                            onClick={handleBasitGorunum}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                            <List size={18} />
                            <span>Basit Görünüm</span>
                        </button>
                        <button
                            onClick={handleRaporGorunumu}
                            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                        >
                            <BarChart size={18} />
                            <span>Rapor Görünümü</span>
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleExportExcel}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            <FileText size={18} />
                            <span>Excel</span>
                        </button>
                        <button
                            onClick={handlePrint}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            <Printer size={18} />
                            <span>Yazdır</span>
                        </button>
                    </div>
                </div>

                {/* Report Header */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-bold mb-2">{selectedAy}</h2>
                    <p className="text-gray-700"><span className="font-semibold">Rapor Adı:</span> {mockReportData.raporAdi}</p>
                    <p className="text-gray-700"><span className="font-semibold">Tarih:</span> {mockReportData.tarih}</p>
                    <p className="text-gray-700"><span className="font-semibold">Tarih Aralığı:</span> {mockReportData.tarihAraligi}</p>
                    <p className="text-gray-700"><span className="font-semibold">Satış Sayısı:</span> {mockReportData.satisSayisi}</p>
                    <p className="text-gray-700"><span className="font-semibold">Toplam:</span> {mockReportData.toplam.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                </div>

                {/* Sales Table */}
                <div className="overflow-x-auto rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr className="bg-blue-600 text-white">
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tarih</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Müşteri</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Toplam</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockReportData.sales.map(sale => (
                                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sale.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.tarih}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.musteri}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {sale.toplam.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SatislarRaporu2;
