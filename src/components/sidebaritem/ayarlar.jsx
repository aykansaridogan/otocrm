import React, { useState } from 'react';
import { Settings, Save, X, Plus, Trash2 } from 'lucide-react';

/**
 * Renders the 'Ayarlar' (Settings) page.
 * Provides various settings forms for business information, car brands, payment points, and VAT rates.
 */
const Ayarlar = () => {
    // State for different form sections.
    const [firmaBilgi, setFirmaBilgi] = useState({
        firmaAdi: '',
        adres: '',
        telefon: '',
        vergiDairesi: '',
        vergiNo: '',
        logo: null,
    });
    
    const [aracMarkalari, setAracMarkalari] = useState({
        ekliMarkalar: ['Mercedes', 'BMW', 'Audi'],
        seciliMarka: '',
        tumMarkalar: ['Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Bugatti', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroen', 'Dodge', 'Fiat', 'Ford', 'Honda', 'Hyundai'],
    });

    const [odemeNoktalari, setOdemeNoktalari] = useState({
        nakit: true,
        cekSenet: false,
        havale: false,
    });
    
    const [kdvOranlari, setKdvOranlari] = useState([
        { id: 1, oran: '8%', birim: 'Adet', kod: '1', fiyat: '' },
        { id: 2, oran: '18%', birim: 'Saat', kod: '2', fiyat: '' },
    ]);
    
    const [yeniKdvOrani, setYeniKdvOrani] = useState({
        oran: '',
        birim: '',
        kod: '',
        fiyat: '',
    });
    
    const [hizmetler, setHizmetler] = useState([
        { id: 1, birim: 'Adet', aciklama: 'Parça', fiyat: '100' },
        { id: 2, birim: 'Saat', aciklama: 'İşçilik', fiyat: '50' },
    ]);

    const handleFirmaBilgiChange = (e) => {
        const { name, value } = e.target;
        setFirmaBilgi({ ...firmaBilgi, [name]: value });
    };

    const handleAracMarkasiChange = (e) => {
        setAracMarkalari({ ...aracMarkalari, seciliMarka: e.target.value });
    };

    const handleAracMarkasiEkle = () => {
        if (aracMarkalari.seciliMarka && !aracMarkalari.ekliMarkalar.includes(aracMarkalari.seciliMarka)) {
            setAracMarkalari({
                ...aracMarkalari,
                ekliMarkalar: [...aracMarkalari.ekliMarkalar, aracMarkalari.seciliMarka],
                seciliMarka: '',
            });
        }
    };
    
    const handleAracMarkasiSil = (marka) => {
        setAracMarkalari({
            ...aracMarkalari,
            ekliMarkalar: aracMarkalari.ekliMarkalar.filter(m => m !== marka),
        });
    };

    const handleOdemeNoktasiChange = (e) => {
        const { name, checked } = e.target;
        setOdemeNoktalari({ ...odemeNoktalari, [name]: checked });
    };

    const handleKdvOraniChange = (e, id) => {
        const { name, value } = e.target;
        setKdvOranlari(kdvOranlari.map(item =>
            item.id === id ? { ...item, [name]: value } : item
        ));
    };

    const handleYeniKdvOraniChange = (e) => {
        const { name, value } = e.target;
        setYeniKdvOrani({ ...yeniKdvOrani, [name]: value });
    };

    const handleKdvOraniEkle = () => {
        // Simple validation for new entry
        if (yeniKdvOrani.oran && yeniKdvOrani.birim) {
            setKdvOranlari([
                ...kdvOranlari,
                { ...yeniKdvOrani, id: kdvOranlari.length + 1 }
            ]);
            setYeniKdvOrani({ oran: '', birim: '', kod: '', fiyat: '' });
        }
    };
    
    const handleKdvOraniSil = (id) => {
        setKdvOranlari(kdvOranlari.filter(item => item.id !== id));
    };
    
    const handleHizmetSil = (id) => {
        setHizmetler(hizmetler.filter(item => item.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            <div className="flex items-center space-x-2 text-gray-700 mb-6">
                <Settings size={24} />
                <span className="text-xl font-semibold">Ayarlar</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. İş Yeri Firma Bilgi */}
                <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">İş Yeri Firma Bilgi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="block">
                            <span className="text-gray-700">Firma Adı</span>
                            <input type="text" name="firmaAdi" value={firmaBilgi.firmaAdi} onChange={handleFirmaBilgiChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Firma adını giriniz" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Adres</span>
                            <input type="text" name="adres" value={firmaBilgi.adres} onChange={handleFirmaBilgiChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Adresi giriniz" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Telefon</span>
                            <input type="text" name="telefon" value={firmaBilgi.telefon} onChange={handleFirmaBilgiChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Telefon numarasını giriniz" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Vergi Dairesi</span>
                            <input type="text" name="vergiDairesi" value={firmaBilgi.vergiDairesi} onChange={handleFirmaBilgiChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Vergi dairesini giriniz" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Vergi No</span>
                            <input type="text" name="vergiNo" value={firmaBilgi.vergiNo} onChange={handleFirmaBilgiChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Vergi numarasını giriniz" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Logo</span>
                            <input type="file" name="logo" onChange={handleFirmaBilgiChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </label>
                    </div>
                </div>

                {/* 2. Araç Markaları */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Araç Markaları</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <select
                            name="seciliMarka"
                            value={aracMarkalari.seciliMarka}
                            onChange={handleAracMarkasiChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm"
                        >
                            <option value="">Marka Seç</option>
                            {aracMarkalari.tumMarkalar.map(marka => (
                                <option key={marka} value={marka}>{marka}</option>
                            ))}
                        </select>
                        <button onClick={handleAracMarkasiEkle} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"><Plus size={18} /></button>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="p-2 border rounded-md">
                            <h3 className="font-bold">Seçili Markalar</h3>
                            <ul className="space-y-2 mt-2">
                                {aracMarkalari.ekliMarkalar.map((marka, index) => (
                                    <li key={index} className="bg-gray-100 p-2 rounded-lg flex justify-between items-center">
                                        <span>{marka}</span>
                                        <button onClick={() => handleAracMarkasiSil(marka)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Ödeme Noktası */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Ödeme Noktası</h2>
                    <div className="space-y-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="nakit"
                                checked={odemeNoktalari.nakit}
                                onChange={handleOdemeNoktasiChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span>Nakit</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="cekSenet"
                                checked={odemeNoktalari.cekSenet}
                                onChange={handleOdemeNoktasiChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span>Çek/Senet</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="havale"
                                checked={odemeNoktalari.havale}
                                onChange={handleOdemeNoktasiChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span>Havale</span>
                        </label>
                    </div>
                </div>

                {/* 4. KDV Oranları */}
                <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">KDV Oranları</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oran</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birim</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kod</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiyat</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {kdvOranlari.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.oran}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.birim}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.kod}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <input type="text" name="fiyat" value={item.fiyat} onChange={(e) => handleKdvOraniChange(e, item.id)} className="w-24 rounded-md border-gray-300 shadow-sm" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <button onClick={() => handleKdvOraniSil(item.id)} className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                                        </td>
                                    </tr>
                                ))}
                                {/* New row for adding new KDV rate */}
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <input type="text" name="oran" value={yeniKdvOrani.oran} onChange={handleYeniKdvOraniChange} className="w-20 rounded-md border-gray-300 shadow-sm" placeholder="Oran" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <input type="text" name="birim" value={yeniKdvOrani.birim} onChange={handleYeniKdvOraniChange} className="w-20 rounded-md border-gray-300 shadow-sm" placeholder="Birim" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <input type="text" name="kod" value={yeniKdvOrani.kod} onChange={handleYeniKdvOraniChange} className="w-20 rounded-md border-gray-300 shadow-sm" placeholder="Kod" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <input type="text" name="fiyat" value={yeniKdvOrani.fiyat} onChange={handleYeniKdvOraniChange} className="w-24 rounded-md border-gray-300 shadow-sm" placeholder="Fiyat" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <button onClick={handleKdvOraniEkle} className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700">Ekle</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5. Hizmetler */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 border-b pb-2">Hizmetler</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birim</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiyat</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {hizmetler.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.birim}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.aciklama}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.fiyat}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <button onClick={() => handleHizmetSil(item.id)} className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="flex items-center space-x-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        <Plus size={18} />
                        <span>Yeni</span>
                    </button>
                </div>
            </div>

            {/* Save and Cancel buttons for the entire form */}
            <div className="col-span-full flex justify-end space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    <Save size={18} />
                    <span>Kaydet</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                    <X size={18} />
                    <span>Vazgeç</span>
                </button>
            </div>
        </div>
    );
};

export default Ayarlar;
