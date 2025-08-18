import React, { useState } from 'react';
import { Search, Plus, ArrowDownUp, Edit, Trash2, Eye, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import YeniMusteriEkle from '../utils/YeniMusteriEkle'; // Yeni müşteri ekleme bileşenini içe aktarın

/**
 * Renders the 'Musteriler' (Customers) page with a responsive, searchable,
 * and paginated table. It also includes an "Add New Customer" button.
 */
const Musteriler = () => {
    // State to manage which component is displayed
    const [view, setView] = useState('list'); // 'list' or 'add'

    // Mock data for customer records
    const mockCustomerData = [
        { id: 1, ad: 'Ahmet Yılmaz', telefon: '532 123 45 67', arac: 'Ford Focus', bakiye: 500, tamirat: 'Tamamlandı', notlar: 'Düzenli müşteri' },
        { id: 2, ad: 'Ayşe Kaya', telefon: '542 987 65 43', arac: 'Volkswagen Golf', bakiye: 0, tamirat: 'Bekliyor', notlar: 'Aksesuar talebi' },
        { id: 3, ad: 'Mehmet Demir', telefon: '554 234 56 78', arac: 'BMW 3 Serisi', bakiye: 2500, tamirat: 'Tamamlandı', notlar: 'Ödeme bekliyor' },
        { id: 4, ad: 'Fatma Şahin', telefon: '505 345 67 89', arac: 'Mercedes C-Class', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Kasko ile anlaşmalı' },
        { id: 5, ad: 'Ali Güneş', telefon: '530 456 78 90', arac: 'Renault Clio', bakiye: -120, tamirat: 'İptal Edildi', notlar: 'Acil servis' },
        { id: 6, ad: 'Zeynep Ak', telefon: '533 567 89 01', arac: 'Audi A4', bakiye: 150, tamirat: 'Tamamlandı', notlar: 'Fatura e-posta ile gönderildi' },
        { id: 7, ad: 'Murat Erdem', telefon: '544 678 90 12', arac: 'Toyota Corolla', bakiye: 0, tamirat: 'Bekliyor', notlar: 'Parça bekleniyor' },
        { id: 8, ad: 'Ebru Yıldız', telefon: '535 789 01 23', arac: 'Opel Astra', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Garanti kapsamında' },
        { id: 9, ad: 'Can Sönmez', telefon: '536 890 12 34', arac: 'Peugeot 308', bakiye: 75, tamirat: 'Tamamlandı', notlar: '' },
        { id: 10, ad: 'Deniz Aydoğan', telefon: '537 901 23 45', arac: 'Honda Civic', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Memnuniyet anketi yapıldı' },
        { id: 11, ad: 'Fatih Gürbüz', telefon: '538 012 34 56', arac: 'Hyundai i20', bakiye: 450, tamirat: 'Bekliyor', notlar: '' },
        { id: 12, ad: 'Selin Polat', telefon: '539 123 45 67', arac: 'Seat Leon', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Fatura teslim edildi' },
        { id: 13, ad: 'Gökhan Efe', telefon: '540 234 56 78', arac: 'Skoda Octavia', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Özel indirim yapıldı' },
        { id: 14, ad: 'Ceren Kılıç', telefon: '541 345 67 89', arac: 'Volvo S60', bakiye: -300, tamirat: 'İptal Edildi', notlar: 'Acil servis' },
        { id: 15, ad: 'Emre Öztürk', telefon: '543 456 78 90', arac: 'Ford Fiesta', bakiye: 0, tamirat: 'Tamamlandı', notlar: '' },
        { id: 16, ad: 'Nazlı Aksoy', telefon: '545 567 89 01', arac: 'Renault Megane', bakiye: 110, tamirat: 'Bekliyor', notlar: 'Aksesuar montajı' },
        { id: 17, ad: 'Cemil Taş', telefon: '546 678 90 12', arac: 'Audi A3', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Yedek parça değişimi' },
        { id: 18, ad: 'Burcu Yılmaz', telefon: '547 789 01 23', arac: 'Fiat Egea', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Periyodik bakım' },
        { id: 19, ad: 'Hakan Çelik', telefon: '548 890 12 34', arac: 'Nissan Qashqai', bakiye: 0, tamirat: 'Tamamlandı', notlar: 'Uzun vadeli müşteri' },
        { id: 20, ad: 'Sibel Can', telefon: '549 901 23 45', arac: 'Honda CRV', bakiye: 1800, tamirat: 'Bekliyor', notlar: '' },
    ];
    
    // State for search query, current page, and sorting
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const itemsPerPage = 10;

    // Handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page on a new search
    };

    // Filter data based on search query
    const filteredData = mockCustomerData.filter(customer =>
        Object.values(customer).some(value =>
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

    // Calculate pagination variables
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page changes
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Pagination controls
    const renderPagination = () => (
        <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-700">
                Sayfa {currentPage} / {totalPages}
            </span>
            <div className="flex space-x-2">
                <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronsLeft size={16} />
                </button>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={16} />
                </button>
                <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronsRight size={16} />
                </button>
            </div>
        </div>
    );

    // Conditional rendering based on the current view state
    if (view === 'add') {
        return <YeniMusteriEkle onCancel={() => setView('list')} />;
    }

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Cari Müşteri Arama</h1>
            
            {/* Action bar with search and add button */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-2/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Müşteri Adı, Soyadı, telefon, şirket adı, #id, plaka"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setView('add')} // Set view to 'add' on button click
                        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <Plus size={18} />
                        <span>Yeni Müşteri Ekle</span>
                    </button>
                </div>
            </div>

            {/* Customers Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            {['ad', 'telefon', 'arac', 'bakiye', 'tamirat', 'notlar'].map(key => (
                                <th
                                    key={key}
                                    onClick={() => handleSort(key)}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                >
                                    <div className="flex items-center">
                                        {key === 'ad' && 'Müşteri'}
                                        {key === 'telefon' && 'Telefon'}
                                        {key === 'arac' && 'Araç'}
                                        {key === 'bakiye' && 'Bakiye'}
                                        {key === 'tamirat' && 'Tamirat'}
                                        {key === 'notlar' && 'Notlar'}
                                        <ArrowDownUp size={14} className="ml-2" />
                                    </div>
                                </th>
                            ))}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedData.map(customer => (
                            <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.ad}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.telefon}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.arac}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.bakiye.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.tamirat}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.notlar}</td>
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

            {/* Pagination controls */}
            {renderPagination()}
        </div>
    );
};

export default Musteriler;
