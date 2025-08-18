import React from 'react';
import { User, DollarSign, Calendar, RefreshCw, BarChart2, Briefcase, FileText, Settings } from 'lucide-react';

/**
 * Renders the 'Lisans' (License) page.
 * Displays user and license information, and a license purchase/renewal package.
 */
const Lisans = () => {
    // Mock user and license data to display.
    const userData = {
        kullanici: 'Aykan Sarıdoğan',
        paketTarihi: 'Standart',
        gecerlilikTarihi: '10.06.2025',
    };

    const firmaData = {
        firmaAdi: 'Firma Adı',
        adres: 'Adres',
        telefon: 'Telefon',
        vergiDairesi: 'Vergi Dairesi',
        vergiNo: 'Vergi No',
    };

    const lisansPaketi = {
        isim: '1 Yıllık Lisans Paketi',
        fiyat: '2400',
        ozellikler: [
            { icon: <User size={18} />, text: 'Sınırsız Müşteri' },
            { icon: <FileText size={18} />, text: 'Sınırsız İş Emir Kaydı' },
            { icon: <Briefcase size={18} />, text: 'Sınırsız Araç Kaydı' },
            { icon: <RefreshCw size={18} />, text: 'Günlük yedekleme' },
            { icon: <DollarSign size={18} />, text: 'Ücretsiz Düzeltme Güncellemeleri' },
            { icon: <BarChart2 size={18} />, text: 'Müşteri Hizmetleri' },
        ]
    };

    const handleLisansAl = () => {
        // Functionality for purchasing or renewing the license.
        console.log('Lisans satın alma/yenileme işlemi başlatıldı.');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            <div className="flex items-center space-x-2 text-gray-700 mb-6">
                <Settings size={24} />
                <span className="text-xl font-semibold">Lisans</span>
            </div>

            {/* Top info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* User Info Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Kullanıcı Bilgileri</h2>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <span>Kullanıcı:</span>
                            <span className="font-semibold">{userData.kullanici}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Paket:</span>
                            <span className="font-semibold">{userData.paketTarihi}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Geçerlilik Tarihi:</span>
                            <span className="font-semibold">{userData.gecerlilikTarihi}</span>
                        </div>
                    </div>
                </div>

                {/* Firma Info Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Firma Bilgileri</h2>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <span>Firma Adı:</span>
                            <span className="font-semibold">{firmaData.firmaAdi}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Adres:</span>
                            <span className="font-semibold">{firmaData.adres}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Telefon:</span>
                            <span className="font-semibold">{firmaData.telefon}</span>
                        </div>
                    </div>
                </div>
                
                {/* Vergi Info Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Vergi Bilgileri</h2>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <span>Vergi Dairesi:</span>
                            <span className="font-semibold">{firmaData.vergiDairesi}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Vergi No:</span>
                            <span className="font-semibold">{firmaData.vergiNo}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lisans Paketi Section */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-bold mb-4">Paket Satın Al</h2>
                <div className="border border-yellow-500 rounded-lg p-6 max-w-sm mx-auto shadow-lg">
                    <h3 className="text-yellow-600 font-bold mb-2">Uygun</h3>
                    <h4 className="text-2xl font-semibold mb-4">{lisansPaketi.isim}</h4>
                    <div className="flex justify-center items-end text-5xl font-extrabold text-gray-800 mb-6">
                        <span>{lisansPaketi.fiyat}</span>
                        <span className="text-xl font-normal ml-1">TL</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                        {lisansPaketi.ozellikler.map((ozellik, index) => (
                            <li key={index} className="flex items-center justify-center space-x-2 text-gray-600">
                                {ozellik.icon}
                                <span>{ozellik.text}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleLisansAl} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        LİSANS SATIN AL / YENİLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Lisans;
