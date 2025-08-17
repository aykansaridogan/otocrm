import React from "react";
import {
    Bell,
    Search,
    ChevronLeft,
    ChevronRight,
    Menu, // Mobil menü ikonu için eklendi
    Laptop,
} from 'lucide-react';
// Recharts importları kullanılmadığı için kaldırıldı, gerekiyorsa eklenebilir.

/**
 * Responsive bir başlık bileşeni.
 * Masaüstü ve mobil ekranlara uyum sağlar.
 *
 * @param {object} props Bileşenin özellikleri.
 * @param {string} props.title Sayfa başlığı.
 * @param {string[]} props.breadcrumbs Sayfanın navigasyon yolu.
 * @param {function} props.onMobileToggle Mobil menüyü açıp kapatmak için kullanılan fonksiyon.
 */
const Header = ({ title, breadcrumbs, onMobileToggle }) => {
    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between flex-wrap transition-all duration-300 ease-in-out">
            
            {/* Sol taraf: Mobil menü butonu, başlık ve breadcrumbs */}
            <div className="flex items-center w-full lg:w-auto">
                {/* Sadece lg (1024px) altındaki ekranlarda görünen mobil menü butonu */}
                <button
                    onClick={onMobileToggle}
                    className="lg:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100 mr-2"
                >
                    <Menu size={24} />
                </button>
                
                {/* Başlık, sadece büyük ekranlarda görünür */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 hidden lg:block">{title}</h1>
                
                {/* Breadcrumbs, her zaman görünür, küçük ekranlarda daha basit */}
                <div className="text-sm md:text-base text-gray-500 flex-grow lg:flex-grow-0 min-w-0">
                    <div className="flex items-center space-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <span className={`flex-shrink-0 ${index === breadcrumbs.length - 1 ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
                                    {crumb}
                                </span>
                                {index < breadcrumbs.length - 1 && <span className="text-gray-400 mx-1">/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Orta kısım: Arama çubuğu */}
            {/* Mobil görünümde tam genişlik, büyük ekranlarda sabit genişlik */}
            <div className="order-last w-full mt-4 lg:order-none lg:w-auto lg:mt-0 lg:mx-4 flex-grow">
                <div className="relative w-full max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Müşteri Adı, Soyadı, telefon, şirket adı, #fid, plaka"
                        className="w-full p-2 pl-10 pr-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    />
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Sağ taraf: Kullanıcı bilgileri */}
            {/* Küçük ekranlarda gizli, büyük ekranlarda görünür */}
            <div className="hidden lg:flex items-center space-x-4">
                {/* Dil seçimi */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">TR</span>
                    <img src="https://placehold.co/24x16/000000/FFFFFF?text=TR" alt="Türk Bayrağı" className="rounded" />
                    <ChevronRight size={16} className="text-gray-500" />
                </div>
                
                {/* Bildirim ve profil */}
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
