import React, { useState } from 'react';
import {
    Search,
    ChevronLeft,
    ChevronRight,
    ListFilter,
    ArrowDownUp,
    ChevronsLeft,
    ChevronsRight,
    Edit,
    Trash2,
    Eye
} from 'lucide-react';

const Satislar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Placeholder sales data for demonstration
    const dummySales = [
        { id: 1, customer: 'Ahmet Yılmaz', date: '2023-10-26', payment: 'Kredi Kartı', repair: 'Tamir #123', actions: '' },
        { id: 2, customer: 'Ayşe Demir', date: '2023-10-25', payment: 'Nakit', repair: 'Tamir #124', actions: '' },
        { id: 3, customer: 'Mehmet Kaya', date: '2023-10-24', payment: 'Havale', repair: 'Tamir #125', actions: '' },
        { id: 4, customer: 'Zeynep Çelik', date: '2023-10-23', payment: 'Kredi Kartı', repair: 'Tamir #126', actions: '' },
        { id: 5, customer: 'Murat Erdem', date: '2023-10-22', payment: 'Nakit', repair: 'Tamir #127', actions: '' },
        { id: 6, customer: 'Seda Korkmaz', date: '2023-10-21', payment: 'Havale', repair: 'Tamir #128', actions: '' },
        { id: 7, customer: 'Can Kara', date: '2023-10-20', payment: 'Kredi Kartı', repair: 'Tamir #129', actions: '' },
        { id: 8, customer: 'Elif Şahin', date: '2023-10-19', payment: 'Nakit', repair: 'Tamir #130', actions: '' },
        { id: 9, customer: 'Deniz Aslan', date: '2023-10-18', payment: 'Havale', repair: 'Tamir #131', actions: '' },
        { id: 10, customer: 'Fatih Koç', date: '2023-10-17', payment: 'Kredi Kartı', repair: 'Tamir #132', actions: '' },
        { id: 11, customer: 'Gizem Öztürk', date: '2023-10-16', payment: 'Nakit', repair: 'Tamir #133', actions: '' },
        { id: 12, customer: 'Hakan Polat', date: '2023-10-15', payment: 'Havale', repair: 'Tamir #134', actions: '' },
    ];

    // Functions to handle pagination
    const totalPages = Math.ceil(dummySales.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSales = dummySales.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full">
            {/* Header with title and search */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Satışlar</h1>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    {/* Filter dropdown, as per the image */}
                    <div className="relative inline-block text-left">
                        <select
                            value={filterBy}
                            onChange={(e) => setFilterBy(e.target.value)}
                            className="appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        >
                            <option value="all">Filtre</option>
                            <option value="today">Bugün</option>
                            <option value="this_week">Bu Hafta</option>
                            <option value="this_month">Bu Ay</option>
                        </select>
                        <ListFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            {/* Sales table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg">
                    <thead className="bg-gray-50 rounded-lg">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                                #
                                <button className="ml-2 inline-flex items-center text-gray-400 hover:text-gray-600">
                                    <ArrowDownUp size={16} />
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Müşteri
                                <button className="ml-2 inline-flex items-center text-gray-400 hover:text-gray-600">
                                    <ArrowDownUp size={16} />
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tarih
                                <button className="ml-2 inline-flex items-center text-gray-400 hover:text-gray-600">
                                    <ArrowDownUp size={16} />
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ödeme
                                <button className="ml-2 inline-flex items-center text-gray-400 hover:text-gray-600">
                                    <ArrowDownUp size={16} />
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tamir
                                <button className="ml-2 inline-flex items-center text-gray-400 hover:text-gray-600">
                                    <ArrowDownUp size={16} />
                                </button>
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                                İşlem
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentSales.map((sale, index) => (
                            <tr key={sale.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {indexOfFirstItem + index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {sale.customer}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {sale.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {sale.payment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {sale.repair}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900">
                                            <Edit size={18} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <Trash2 size={18} />
                                        </button>
                                        <button className="text-green-600 hover:text-green-900">
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination and record count */}
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                    Toplam {dummySales.length} kayıt
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <ChevronsLeft size={16} />
                    </button>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <div className="flex space-x-1">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`px-3 py-1 text-sm rounded-md ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <ChevronRight size={16} />
                    </button>
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        <ChevronsRight size={16} />
                    </button>
                    <div className="flex space-x-1 ml-4">
                        {[10, 25, 50].map(size => (
                            <button
                                key={size}
                                onClick={() => setItemsPerPage(size)}
                                className={`px-3 py-1 text-sm rounded-md ${itemsPerPage === size ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Satislar;
