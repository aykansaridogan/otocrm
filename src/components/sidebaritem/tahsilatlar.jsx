import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

/**
 * Renders the 'Tahsilatlar' (Collections) page.
 * Displays a list of collections with filtering options.
 */
const Tahsilatlar = () => {
    // Mock data for collections.
    const [tahsilatlar] = useState([
        { id: 1, tarih: '15.08.2025', tahsilat: '1.500 TL', musteri: 'Ahmet Yılmaz', aciklama: 'Araç tamiri' },
        { id: 2, tarih: '14.08.2025', tahsilat: '750 TL', musteri: 'Ayşe Kaya', aciklama: 'Yedek parça satışı' },
        { id: 3, tarih: '13.08.2025', tahsilat: '2.200 TL', musteri: 'Mehmet Demir', aciklama: 'Bakım hizmeti' },
    ]);
    
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);

    // Filtered data based on search and other criteria
    const filteredData = tahsilatlar; // Add filtering logic here if needed

    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filteredData.length / recordsPerPage);

    const handleSearch = (e) => {
        // Handle search input logic here
        console.log('Arama yapılıyor:', e.target.value);
    };

    const handleRecordsPerPageChange = (e) => {
        setRecordsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Header with search and pagination controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-gray-700">
                    <span className="text-xl font-semibold">Tahsilatlar</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative flex items-center">
                        <select
                            onChange={handleRecordsPerPageChange}
                            value={recordsPerPage}
                            className="bg-white pl-3 pr-8 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-2 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ara..."
                            onChange={handleSearch}
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Collections Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tahsilat</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Müşteri</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentRecords.length > 0 ? (
                            currentRecords.map((tahsilat, index) => (
                                <tr key={tahsilat.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{indexOfFirstRecord + index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tahsilat.tarih}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tahsilat.tahsilat}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tahsilat.musteri}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tahsilat.aciklama}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">0 results</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end items-center mt-4 space-x-2">
                <button
                    onClick={() => handlePagination(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-lg border border-gray-300 bg-white disabled:opacity-50"
                >
                    &lt;
                </button>
                {[...Array(nPages).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => handlePagination(number + 1)}
                        className={`px-3 py-1 rounded-lg ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePagination(currentPage + 1)}
                    disabled={currentPage === nPages}
                    className="px-3 py-1 rounded-lg border border-gray-300 bg-white disabled:opacity-50"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Tahsilatlar;
