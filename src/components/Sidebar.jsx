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
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const Sidebar = ({ isCollapsed, activeMenu, onMenuClick, onCollapseToggle }) => {
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
        // Hatırlatıcılar başlığı
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
        <aside className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col p-4 h-full`}>
            <div className={`flex items-center mb-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && <span className="text-2xl font-bold">SDN OTO CRM</span>}
                <button onClick={onCollapseToggle} className="p-2 rounded-full hover:bg-gray-700 transition">
                    {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                </button>
            </div>

            <nav className="flex-grow">
                <ul>
                    {menuItems.map((item) => (
                        <React.Fragment key={item.key}>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className={`flex items-center py-2 px-4 rounded-lg transition-colors ${
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
                                                className={`flex items-center py-2 px-4 rounded-lg transition-colors ${
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
            </nav>
        </aside>
    );
};

export default Sidebar;
