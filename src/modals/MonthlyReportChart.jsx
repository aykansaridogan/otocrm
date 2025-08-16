import React from "react";

import {
    Bell,
    Search,
    ChevronLeft,
    ChevronRight,
    Plus,
    Edit,
    Clipboard,
    Settings,
    Briefcase,
    Users,
    Car,
    FileText,
    Calendar,
    BarChart2,
    DollarSign,
    Package,
    Sparkles,
    Eye,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,
    Laptop,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Aylık Rapor Grafiği bileşeni
const MonthlyReportChart = () => {
    const data = [
        { name: '1', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '2', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '3', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '4', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '5', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '6', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '7', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '8', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '9', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '10', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '11', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '12', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '13', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '14', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '15', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '16', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '17', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '18', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '19', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '20', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '21', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '22', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '23', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '24', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '25', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '26', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '27', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '28', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '29', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '30', tamirat: 0, tahsilat: 0, satış: 0 },
        { name: '31', tamirat: 0, tahsilat: 0, satış: 0 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Aylık Rapor</h2>
                    <span className="text-sm text-gray-500">Ağustos 2025</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="text-sm">Tamiratlar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                        <span className="text-sm">Tahsilatlar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-sm">Satışlar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-purple-700" />
                        <span className="text-sm">Rakamların Gösterimi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="p-1 rounded-lg hover:bg-gray-200">
                            <ArrowLeft size={16} />
                        </button>
                        <button className="p-1 rounded-lg hover:bg-gray-200">
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tamirat" stroke="#3B82F6" />
                    <Line type="monotone" dataKey="tahsilat" stroke="#8B5CF6" />
                    <Line type="monotone" dataKey="satış" stroke="#10B981" />
                </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between mt-4 text-center">
                <div className="flex-1">
                    <h4 className="text-2xl font-bold">0 ₺</h4>
                    <span className="text-sm text-gray-500">Toplam Tamirat: 0</span>
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-bold">0 ₺</h4>
                    <span className="text-sm text-gray-500">Toplam Satış: 0</span>
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-bold">0 ₺</h4>
                    <span className="text-sm text-gray-500">Toplam Tahsilat: 0</span>
                </div>
            </div>
        </div>
    );
};

export default MonthlyReportChart;