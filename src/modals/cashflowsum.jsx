import {
    Bell,
    Search,
    ChevronLeft,
    ChevronRight,
    Plus,
    Edit,
    Clipboard,
    Laptop,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Nakit akışı ve hesap özeti bileşeni
const CashFlowSummary = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Nakit Girişleri</h3>
                    <span className="text-purple-700 text-lg font-bold">0 ₺</span>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 text-left text-sm font-medium text-gray-500">
                                <div className="p-1 rounded-lg bg-gray-200 inline-block">
                                    <Clipboard size={16} />
                                </div>
                            </th>
                            <th className="py-2 text-left text-sm font-medium text-gray-500">Başlık</th>
                            <th className="py-2 text-right text-sm font-medium text-gray-500">Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Örnek satırlar eklenebilir */}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Nakit Çıkışları</h3>
                    <span className="text-red-500 text-lg font-bold">0 ₺</span>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 text-left text-sm font-medium text-gray-500">
                                <div className="p-1 rounded-lg bg-gray-200 inline-block">
                                    <Clipboard size={16} />
                                </div>
                            </th>
                            <th className="py-2 text-left text-sm font-medium text-gray-500">Başlık</th>
                            <th className="py-2 text-right text-sm font-medium text-gray-500">Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Örnek satırlar eklenebilir */}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Son hesap etkinlikleri</h3>
            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 text-left text-sm font-medium text-gray-500">Tarih</th>
                        <th className="py-2 text-left text-sm font-medium text-gray-500">Platform</th>
                        <th className="py-2 text-left text-sm font-medium text-gray-500">Browser</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 text-sm">14.08.2025 14:59</td>
                        <td className="py-2 text-sm flex items-center">
                            <Laptop size={16} className="mr-1" />
                            <span>Desktop</span>
                        </td>
                        <td className="py-2 text-sm">
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full bg-green-500 mr-1"></span>
                                <span>Chrome</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 text-sm">14.08.2025 13:07</td>
                        <td className="py-2 text-sm flex items-center">
                            <Laptop size={16} className="mr-1" />
                            <span>Desktop</span>
                        </td>
                        <td className="py-2 text-sm">
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full bg-green-500 mr-1"></span>
                                <span>Chrome</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default CashFlowSummary;