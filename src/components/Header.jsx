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

// Header bileşeni, sayfanın üst kısmını içerir.
const Header = ({ title, breadcrumbs }) => {
    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between transition-all duration-300 ease-in-out">
            {/* Sol taraf */}
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <div className="flex items-center ml-4">
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <span className={`text-sm ${index === breadcrumbs.length - 1 ? 'text-gray-800' : 'text-gray-500'}`}>
                                {crumb}
                            </span>
                            {index < breadcrumbs.length - 1 && <span className="text-gray-400 mx-2">/</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Orta kısım (Arama çubuğu) */}
            <div className="flex items-center mx-4 flex-grow">
                <div className="relative w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Müşteri Adı, Soyadı, telefon, şirket adı, #fid, plaka"
                        className="w-full p-2 pl-10 pr-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Sağ taraf (Kullanıcı bilgileri) */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">TR</span>
                    <img src="https://placehold.co/24x16/000000/FFFFFF?text=TR" alt="Türk Bayrağı" className="rounded" />
                    <ChevronRight size={16} className="text-gray-500" />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-gray-200 p-1">
                        <Bell size={20} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="https://placehold.co/40x40/E2E8F0/FFFFFF?text=A" alt="Profil Resmi" className="rounded-full" />
                        <span className="text-sm font-semibold text-gray-800">Ahmet Doğan</span>
                        <ChevronRight size={16} className="text-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;