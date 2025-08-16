import React, { useState } from "react";





// Tamiratlar tablosunu içeren ana bileşen
const RepairsTable = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedMessage, setGeneratedMessage] = useState(null);

    const data = [
        { id: 41905, car: '48YJ510', model: 'Mazda', date: '13.03.2023', km: '75.000 km', payment: '785 ₺', customer: 'Kenan Demirci', customerPhone: '5421112233', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 12090, car: '48YJ588', model: 'Citroen', date: '12.02.2022', km: '45.000 km', payment: '400 ₺', customer: 'MUSTAFA DEMİR', customerPhone: '5465552456', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 11739, car: '48YJ588', model: 'Citroen', date: '05.02.2022', km: '45.000 km', payment: '255 ₺', customer: 'MUSTAFA DEMİR', customerPhone: '5465552456', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 11706, car: '48YJ501', model: 'Peugeot', date: '05.02.2022', km: '150.000 km', payment: '200 ₺', customer: 'Yılmaz Koç', customerPhone: '8522367863', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 1091, car: '48YJ510', model: 'Mazda', date: '03.05.2020', km: '10.000 km', payment: '840 ₺', customer: 'Kenan Demirci', customerPhone: '5421112233', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 1090, car: '48YJ501', model: 'Peugeot', date: '03.05.2020', km: '20.000 km', payment: '275 ₺', customer: 'Yılmaz Koç', customerPhone: '8522367863', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 1023, car: '48YJ048', model: 'Citroen', date: '06.04.2020', km: '25.000 km', payment: '330 ₺', customer: 'ATA ŞEHİRLİ', customerPhone: '5422212456', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
        { id: 1021, car: '48YJ588', model: 'Citroen', date: '08.04.2020', km: '20.000 km', payment: '485 ₺', customer: 'MUSTAFA DEMİR', customerPhone: '5465552456', repairs: '1 Bakim-yag', repairsStatus: 'Beklemede' },
    ];

    // Gemini API'sini kullanarak mesaj oluşturma işlevi
    const handleGenerateMessage = async (item) => {
        setIsGenerating(true);
        setGeneratedMessage(null);
        let retryCount = 0;
        const maxRetries = 5;

        while (retryCount < maxRetries) {
            try {
                const prompt = `Tamir servisi olarak bir müşteriye kibar ve profesyonel bir mesaj taslağı oluştur. Müşteri adı: ${item.customer}, araç modeli: ${item.model}, tamir durumu: ${item.repairsStatus}. Araç plakası: ${item.car}. Tamir işi: ${item.repairs}. Mesajda, aracın şu anda serviste olduğunu ve durumunun "${item.repairsStatus}" olduğunu belirt. Ek olarak, "İletişim için telefon numaranızdan bize ulaşabilirsiniz." gibi bir cümle ekle. Mesajı kısa, öz ve anlaşılır bir dille Türkçe yaz.`;

                const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
                const payload = { contents: chatHistory };
                const apiKey = "";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`API hatası: ${response.statusText}`);
                }

                const result = await response.json();
                const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

                if (text) {
                    setGeneratedMessage(text);
                    break;
                } else {
                    throw new Error("Geçersiz API yanıtı formatı");
                }
            } catch (error) {
                console.error("Mesaj oluşturma başarısız oldu, tekrar deneniyor...", error);
                retryCount++;
                await new Promise(res => setTimeout(res, Math.pow(2, retryCount) * 1000));
                if (retryCount === maxRetries) {
                    setGeneratedMessage("Mesaj oluşturulamadı. Lütfen tekrar deneyin.");
                }
            } finally {
                setIsGenerating(false);
            }
        }
    };

    const closeModal = () => {
        setGeneratedMessage(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">Tamiratlar</h3>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="#id"
                        className="w-full md:w-24 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button className="flex items-center justify-center w-full md:w-auto p-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition">
                        <Search size={16} className="mr-1" />
                        <span>Ara</span>
                    </button>
                    <button className="flex items-center justify-center w-full md:w-auto p-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition">
                        <Plus size={16} className="mr-1" />
                        <span>Yeni Oluştur</span>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Araç</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Müşteri</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kilometre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ödeme</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamir</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tekleyen</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İletişim</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src="https://placehold.co/40x40/E2E8F0/FFFFFF?text=A" alt="Araç Resmi" className="w-10 h-10 rounded-lg mr-4" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">{item.car}</div>
                                            <div className="text-xs text-gray-500">{item.model}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mr-4">
                                            {item.customer.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">{item.customer}</div>
                                            <div className="text-xs text-gray-500">{item.customerPhone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.km}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.payment}
                                    <div className="flex items-center mt-1 text-xs text-red-500">
                                        <Briefcase size={12} className="mr-1" />
                                        <span>Beklemede</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <Clipboard size={16} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <Clipboard size={16} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition">
                                        Detay
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button
                                        onClick={() => handleGenerateMessage(item)}
                                        className="flex items-center px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition disabled:bg-gray-400"
                                        disabled={isGenerating}
                                    >
                                        {isGenerating ? (
                                            <span className="animate-spin mr-2">⚙️</span>
                                        ) : (
                                            <Sparkles size={16} className="mr-2" />
                                        )}
                                        <span>İletişim Oluştur</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <MessageModal message={generatedMessage} onClose={closeModal} />
        </div>
    );
};

export default RepairsTable;
