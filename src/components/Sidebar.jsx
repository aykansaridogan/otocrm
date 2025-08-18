import React, { useState } from 'react';
import {
    Bell,
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
    ChevronDown,
    ChevronUp,
    ChevronFirst,
    ChevronLast,
    UserCog,
    ChartLine,
    Handshake,
    Book,
    CreditCard,
    Settings,
    TrendingUp,
    Wallet ,
    BookOpen ,
    List ,
    Store ,
    Award,
    User,
    LogOut
} from 'lucide-react';

const Sidebar = ({ isCollapsed, activeMenu, onMenuClick, onCollapseToggle }) => {
    const [isRemindersOpen, setIsRemindersOpen] = useState(false);
    const [isReportsOpen, setIsReportsOpen] = useState(false);
    const [isStockOpen, setIsStockOpen] = useState(false);

    const toggleReminders = (e) => {
        e.preventDefault();
        setIsRemindersOpen(!isRemindersOpen);
    };

    const toggleReports = (e) => {
        e.preventDefault();
        setIsReportsOpen(!isReportsOpen);
    };
    
    const toggleStock = (e) => {
        e.preventDefault();
        setIsStockOpen(!isStockOpen);
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
       { 
            name: 'Raporlar', 
            icon: <FileText size={20} />, 
            key: 'raporlar', 
            hasSubMenu: true,
            isOpen: isReportsOpen,
            onClick: toggleReports,
            subMenu: [
                { name: 'Alacaklar Raporu', icon: <DollarSign size={20} />, key: 'gelirgiderraporlari' },
                { name: 'Tüm Müşteriler', icon: <Users size={20} />, key: 'tum_musteriler' },
                { name: 'Tamirat Raporları', icon: <Car size={20} />, key: 'tamirat_raporlari' },
                { name: 'Satış Raporları', icon: <ChartLine size={20} />, key: 'satis_raporlari' },
                { name: 'Tamirat İstatistikleri', icon: <TrendingUp size={20} />, key: 'tamirat_istatistikleri' },
                { name: 'Ürün Raporları', icon: <Package size={20} />, key: 'urun_raporlari' },
                { name: 'Nakit Hareketleri', icon: <Wallet size={20} />, key: 'nakit_hareketleri' },
                { name: 'Kasa Raporları', icon: <BookOpen size={20} />, key: 'kasa_raporlari' },
                { name: 'Tamirat Maliyet Raporları', icon: <DollarSign size={20} />, key: 'tamirat_maliyet_raporlari' },
            ]
        },
        { 
            name: 'Stoktaki Ürünler', 
            icon: <Store size={20} />, 
            key: 'stoktakiurunler', 
            hasSubMenu: true,
            isOpen: isStockOpen,
            onClick: toggleStock,
            subMenu: [
                { name: 'Yeni Ürünler', icon: <Plus size={20} />, key: 'yeni_urunler' },
                { name: 'Ürünler', icon: <Package size={20} />, key: 'urunler' },
                { name: 'Ürünler Raporu', icon: <FileText size={20} />, key: 'urunler_raporu' },
                { name: 'Alış Faturaları', icon: <Clipboard size={20} />, key: 'alis_faturalari' },
                { name: 'Ürün Ayarları', icon: <Settings size={20} />, key: 'urun_ayarlari' },
                { name: 'Stok Sayımı', icon: <List size={20} />, key: 'stok_sayimi' },
            ]
        },
        { name: 'Teknisyenler', icon: <UserCog size={20} />, key: 'teknisyenler' },
        { name: 'İş Ortakları', icon: <Handshake size={20} />, key: 'isortaklari' },
        { name: 'Hesap Defteri', icon: <Book size={20} />, key: 'hesapdefteri' },
        { name: 'Tahsilatlar', icon: <CreditCard size={20} />, key: 'tahsilatlar' },
        { name: 'Ayarlar', icon: <Settings size={20} />, key: 'ayarlar' },
    ];

    // Support section menu items
    const supportItems = [
        { name: 'Lisans', icon: <Award size={20} />, key: 'lisans' },
        { name: 'Profilim', icon: <User size={20} />, key: 'profilim' },
        { name: 'Dökümanlar', icon: <FileText size={20} />, key: 'dokumanlar' },
        { name: 'Çıkış Yap', icon: <LogOut size={20} />, key: 'cikis' },
    ];

    return (
        <aside className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col p-4 h-full`}>
            {/* Logo ve Daraltma Butonu */}
            <div className={`flex items-center mb-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && <span className="text-2xl font-bold">SDN OTO CRM</span>}
                <button onClick={onCollapseToggle} className="p-2 rounded-full hover:bg-gray-700 transition">
                    {isCollapsed ? <ChevronLast size={24} /> : <ChevronFirst size={24} />}
                </button>
            </div>

            {/* Menü Öğeleri */}
            <nav className="flex-1 overflow-y-auto">
                <ul>
                    {menuItems.map((item) => (
                        <React.Fragment key={item.key}>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className={`flex items-center py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                                        activeMenu === item.key ? 'bg-purple-700' : 'hover:bg-gray-700'
                                    }`}
                                    onClick={(e) => {
                                        if (item.hasSubMenu) {
                                            item.onClick(e);
                                        } else {
                                            e.preventDefault();
                                            onMenuClick(item.key);
                                        }
                                    }}
                                >
                                    <div className="flex-shrink-0">
                                        {item.icon}
                                    </div>
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
                            </li>
                            {item.hasSubMenu && item.isOpen && !isCollapsed && (
                                <ul className="pl-8 mt-1 space-y-1">
                                    {item.subMenu.map((subItem) => (
                                        <li key={subItem.key}>
                                            <a
                                                href="#"
                                                className={`flex items-center py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                                                    activeMenu === subItem.key ? 'bg-purple-700' : 'hover:bg-gray-700'
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    onMenuClick(subItem.key);
                                                }}
                                            >
                                                <div className="flex-shrink-0">
                                                    {subItem.icon}
                                                </div>
                                                <span className="ml-3">{subItem.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>

                {/* Destek Bölümü */}
                <div className={`mt-4 pt-4 border-t border-gray-700 ${isCollapsed ? 'text-center' : 'pl-4'}`}>
                    <span className="text-xs font-semibold uppercase text-gray-500">
                        {isCollapsed ? '---' : '--- Destek ---'}
                    </span>
                </div>
                <ul className="mt-4">
                    {supportItems.map((item) => (
                        <li key={item.key} className="mb-2">
                            <a
                                href="#"
                                className={`flex items-center py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                                    activeMenu === item.key ? 'bg-purple-700' : 'hover:bg-gray-700'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onMenuClick(item.key);
                                }}
                            >
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                {!isCollapsed && (
                                    <span className="ml-3">{item.name}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
