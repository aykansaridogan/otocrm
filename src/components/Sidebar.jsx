import React, { useState } from 'react';
import {
    Bell,
    ChevronLeft,
    ChevronRight,
    Plus,
    Briefcase,
    Users,
    Car,
    FileText,
    Calendar,
    BarChart2,
    DollarSign,
    Package,
    Sparkles,
    Menu, // Mobil menü ikonu için eklendi
    X, // Kapatma ikonu için eklendi
    ChevronFirst,
    ChevronLast
} from 'lucide-react';

/**
 * Uygulamanın duyarlı kenar çubuğu bileşeni.
 *
 * @param {object} props Bileşenin özellikleri.
 * @param {boolean} props.isCollapsed Kenar çubuğunun daraltılmış durumda olup olmadığı.
 * @param {string} props.activeMenu Aktif menü öğesinin anahtarı.
 * @param {function} props.onMenuClick Menü öğesine tıklandığında çağrılan fonksiyon.
 * @param {function} props.onCollapseToggle Daraltma düğmesine tıklandığında çağrılan fonksiyon.
 * @param {boolean} props.isMobile Mobil görünümde olup olmadığı.
 * @param {function} props.onMobileClose Mobil menüyü kapatmak için çağrılan fonksiyon.
 */
const Sidebar = ({ isCollapsed, activeMenu, onMenuClick, onCollapseToggle, isMobile, onMobileClose }) => {
    const [isRemindersOpen, setIsRemindersOpen] = useState(false);

    const toggleReminders = (e) => {
        e.preventDefault();
        setIsRemindersOpen(!isRemindersOpen);
    };

    const menuItems = [
        { name: 'Ana Sayfa', icon: <Briefcase size={20} />, key: 'anasayfa' },
        { name: 'Yeni Tamirat', icon: <Plus size={20} />, key: 'yenitamirat' },
        { name: 'Hızlı Satış', icon: <DollarSign size={20} />, key: 'hizlisatis' },
        { name: 'Takvim & Randevu', icon: <Calendar size={20} />, key: 'takvim' },
        { name: 'Servistekiler', icon: <Briefcase size={20} />, key: 'servistekiler' },
        { name: 'Alacaklar', icon: <Users size={20} />, key: 'alacaklar' },
        { name: 'Tamirat İstatistikleri', icon: <BarChart2 size={20} />, key: 'tamiratistatistikleri' },
        { 
            name: 'Hatırlatıcılar', 
            icon: <Bell size={20} />, 
            key: 'hatirlaticilar', 
            hasSubMenu: true,
            isOpen: isRemindersOpen,
            onClick: toggleReminders,
            subMenu: [
                { name: 'Araç Bakım Hatırlatıcıları', icon: <Car size={20} />, key: 'aracbakimhatirlaticilari' },
                { name: 'Araç Yenilemeleri', icon: <Sparkles size={20} />, key: 'aracyenilemeleri' },
                { name: 'Personel Yenilemeleri', icon: <Users size={20} />, key: 'personelyenilemeleri' },
            ]
        },
        { name: 'Tamiratlar', icon: <FileText size={20} />, key: 'tamiratlar' },
        { name: 'Satışlar', icon: <DollarSign size={20} />, key: 'satislar' },
        { name: 'Müşteriler', icon: <Users size={20} />, key: 'musteriler' },
        { name: 'Araçlar', icon: <Car size={20} />, key: 'araclar' },
        { name: 'Raporlar', icon: <FileText size={20} />, key: 'raporlar' },
        { name: 'Stoktaki Ürünler', icon: <Package size={20} />, key: 'stok' },
    ];
    
    return (
        <>
            {/* Mobil için tam ekran overlay */}
            {isMobile && !isCollapsed && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
                    onClick={onMobileClose}
                ></div>
            )}

            {/* Kenar Çubuğu */}
            <aside className={`fixed inset-y-0 left-0 bg-white transition-all duration-300 z-50 shadow-md
                ${isCollapsed ? "w-20" : "w-64"}
                ${isMobile ? (isCollapsed ? "-translate-x-full" : "translate-x-0") : "translate-x-0"}
                lg:static lg:h-auto lg:translate-x-0`}>
                <nav className="h-full flex flex-col bg-gray-800 text-white border-r shadow-sm">
                    {/* Logo ve Daraltma/Kapatma butonu */}
                    <div className={`p-4 pb-2 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                        {!isCollapsed && <span className="text-2xl font-bold">SDN OTO CRM</span>}
                        {isMobile ? (
                            <button
                                onClick={onMobileClose}
                                className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600"
                            >
                                <X size={24} />
                            </button>
                        ) : (
                            <button
                                onClick={onCollapseToggle}
                                className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                            >
                                {isCollapsed ? <ChevronLast size={24} /> : <ChevronFirst size={24} />}
                            </button>
                        )}
                    </div>

                    {/* Menü Öğeleri */}
                    <ul className="flex-1 px-3 mt-4">
                        {menuItems.map((item) => (
                            <li key={item.key} className="mb-2">
                                <a
                                    href="#"
                                    className={`relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors
                                        ${activeMenu === item.key ? 'bg-purple-700' : 'hover:bg-gray-700'}
                                        ${isCollapsed && 'tooltip-on-hover'}`}
                                    onClick={(e) => {
                                        if (item.hasSubMenu) {
                                            item.onClick(e);
                                        } else {
                                            e.preventDefault();
                                            onMenuClick(item.key);
                                        }
                                    }}
                                >
                                    {item.icon}
                                    {!isCollapsed && (
                                        <span className="ml-3 flex-grow">{item.name}</span>
                                    )}
                                    {isCollapsed && (
                                        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-purple-700 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                                            {item.name}
                                        </div>
                                    )}
                                    {item.hasSubMenu && !isCollapsed && (
                                        <div className="ml-auto">
                                            {item.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </div>
                                    )}
                                </a>
                                {item.hasSubMenu && item.isOpen && !isCollapsed && (
                                    <ul className="pl-8 mt-1 space-y-1">
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.key}>
                                                <a
                                                    href="#"
                                                    className={`flex items-center py-2 px-4 rounded-lg transition-colors ${
                                                        activeMenu === subItem.key ? 'bg-purple-700' : 'hover:bg-gray-700'
                                                    }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        onMenuClick(subItem.key);
                                                    }}
                                                >
                                                    {subItem.icon}
                                                    <span className="ml-3">{subItem.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
