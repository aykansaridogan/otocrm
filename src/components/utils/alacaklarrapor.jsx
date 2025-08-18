import React from 'react';
import { FileText, Printer, ChevronLeft } from 'lucide-react';

/**
 * Renders the 'Alacaklar Raporu' (Receivables Report) page.
 * Displays report details and a table of customers with outstanding balances.
 */
const AlacaklarRaporu = () => {
    // Mock data for the report.
    const mockReportData = {
        raporAdi: 'Tüm Alacaklar Raporu',
        tarih: new Date().toLocaleDateString('tr-TR'),
        saat: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        toplamAlacak: 12500, // Example total amount
        customers: [
            { id: 1, adSoyad: 'Ahmet Yılmaz', telefon: '532 123 45 67', araclar: 'Ford Focus', adres: 'İstanbul', borcMiktari: 500 },
            { id: 2, adSoyad: 'Ayşe Kaya', telefon: '542 987 65 43', araclar: 'VW Golf', adres: 'Ankara', borcMiktari: 1500 },
            { id: 3, adSoyad: 'Mehmet Demir', telefon: '554 234 56 78', araclar: 'BMW 3 Serisi', adres: 'İzmir', borcMiktari: 7500 },
            { id: 4, adSoyad: 'Fatma Şahin', telefon: '505 345 67 89', araclar: 'Mercedes C-Class', adres: 'Bursa', borcMiktari: 3000 },
        ]
    };

    const handleBack = () => {
        // You would implement navigation logic here, e.g., using React Router
        console.log('Vazgeç butonuna tıklandı.');
    };

    const handlePrint = () => {
        // Logic to trigger the print functionality
        window.print();
    };
    
    const handleExportExcel = () => {
        // Logic to export the data to an Excel file
        console.log('Excel\'e aktar butonuna tıklandı.');
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <button 
                    onClick={handleBack}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                    <ChevronLeft size={18} />
                    <span>Vazgeç</span>
                </button>
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
                <p className="text-gray-700"><span className="font-semibold">Rapor Adı:</span> {mockReportData.raporAdi}</p>
                <p className="text-gray-700"><span className="font-semibold">Tarih:</span> {mockReportData.tarih} {mockReportData.saat}</p>
                <p className="text-gray-700"><span className="font-semibold">Toplam Alacak:</span> {mockReportData.toplamAlacak.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
            </div>

            {/* Customers with Receivables Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad ve Soyad</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Araçlar</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adres</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borç Miktarı</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockReportData.customers.map(customer => (
                            <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.adSoyad}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.telefon}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.araclar}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.adres}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.borcMiktari.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlacaklarRaporu;
