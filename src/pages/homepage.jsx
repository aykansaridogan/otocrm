import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MonthlyReportChart from "../modals/MonthlyReportChart";
import CollectionsAndRepairs from "../modals/collectionsandrepairs";
import ProfitStatus from "../modals/profitStatus";
import CashFlowSummary from "../modals/cashflowsum";
import NewRepairForm from "../components/NewRepairForm";
import Calendars from "../modals/calendar";
import Services from "../components/services";
import Alacaklar from "../components/sidebaritem/alacaklar";
import Tamiratistatistikleri from "../components/sidebaritem/tamiratistatistikleri";
import AracBakimHatirlaticisi from "../components/sidebaritem/aracbakimhatirlatici";
import AracYenilemeleri from "../components/sidebaritem/aracyenilemeleri";
import PersonelYenilemeleri from "../components/sidebaritem/personelyenilemeleri";


import HizliSatis from "../components/sidebaritem/hizlisatis";
import Tamiratlar from "../components/sidebaritem/tamiratlar";

// Yeni tamirat ekleme sayfası için örnek bir bileşen
// Yeni tamirat ekleme sayfası için örnek bir bileşen
const NewRepairPage = () => <NewRepairForm />;

// Hızlı satış sayfası için örnek bir bileşen
const QuickSalePage = () => <HizliSatis/>;

// Takvim ve randevu sayfası için örnek bir bileşen
const CalendarPage = () => <Calendars/>;

// Ana sayfa bileşeni (dashboard)
const DashboardPage = () => (
    <div className="flex flex-col space-y-6">
        <MonthlyReportChart />
        <CollectionsAndRepairs />
        <ProfitStatus />
        <CashFlowSummary />
    </div>
);

// İçerik gösterimini yöneten bileşen
const Content = ({ activeMenu }) => {
    switch (activeMenu) {
        case 'anasayfa':
            return <DashboardPage />;
        case 'yenitamirat':
            return <NewRepairPage />;
        case 'hizlisatis':
            return <QuickSalePage />;
        case 'takvim':
            return <CalendarPage />;
        
        case 'servistekiler':
            return <Services/>;

        case 'alacaklar':
            return <Alacaklar/>;
        case 'tamiratistatistikleri':
            return <Tamiratistatistikleri/>

        case 'aracbakimhatirlaticilari': // Yeni durum eklendi
            return <AracBakimHatirlaticisi/>;

        case 'aracyenilemeleri':
            return <AracYenilemeleri/>;

        case 'personelyenilemeleri':
            return <PersonelYenilemeleri/>;
            
        case 'tamiratlar':
            return <Tamiratlar/>;
        
        default:
            return <DashboardPage />;
    }
};

// Ana uygulama bileşeni
export default function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('anasayfa');

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    // Breadcrumb (navigasyon yolu) oluşturma işlevi
    const getBreadcrumbs = () => {
        const menuItems = {
            'anasayfa': ['Ana Sayfa'],
            'yenitamirat': ['Ana Sayfa', 'Yeni Tamirat'],
            'hizlisatis': ['Ana Sayfa', 'Hızlı Satış'],
            'takvim': ['Ana Sayfa', 'Takvim & Randevu'],
            'servistekiler': ['Ana Sayfa', 'Servistekiler'],
            'alacaklar': ['Ana Sayfa', 'Alacaklar'],
            'tamiratistatistikleri': ['Ana Sayfa', 'Tamirat İstatistikleri'],
            'hatirlaticilar': ['Ana Sayfa', 'Hatırlatıcılar'],
            'tamiratlar': ['Ana Sayfa', 'Tamiratlar'],
            'satislar': ['Ana Sayfa', 'Satışlar'],
            'musteriler': ['Ana Sayfa', 'Müşteriler'],
            'araclar': ['Ana Sayfa', 'Araçlar'],
            'raporlar': ['Ana Sayfa', 'Raporlar'],
            'stok': ['Ana Sayfa', 'Stoktaki Ürünler'],
            'aracbakimhatirlaticilari': ['Ana Sayfa', 'Hatırlatıcılar', 'Araç Bakım Hatırlatıcıları'],
             'aracyenilemeleri': ['Ana Sayfa', 'Hatırlatıcılar', 'Araç Yenileme Hatırlatıcıları'],
             'personelyenilemeleri': ['Ana Sayfa', 'Hatırlatıcılar', 'Araç Yenileme Hatırlatıcıları'],
        };
        return menuItems[activeMenu] || ['Ana Sayfa'];
    };

    const getTitle = () => {
        const menuItems = {
            'anasayfa': 'Ana Sayfa',
            'yenitamirat': 'Yeni Tamirat',
            'hizlisatis': 'Hızlı Satış',
            'takvim': 'Takvim & Randevu',
            'servistekiler': 'Servistekiler',
            'alacaklar': 'Alacaklar',
            'tamiratistatistikleri': 'Tamirat İstatistikleri',
            'hatirlaticilar': 'Hatırlatıcılar',
            'tamiratlar': 'Tamiratlar',
            'satislar': 'Satışlar',
            'musteriler': 'Müşteriler',
            'araclar': 'Araçlar',
            'raporlar': 'Raporlar',
            'stok': 'Stoktaki Ürünler',
        };
        return menuItems[activeMenu] || 'Ana Sayfa';
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                activeMenu={activeMenu}
                onMenuClick={setActiveMenu}
                onCollapseToggle={toggleSidebar}
            />
            <div className="flex-1 flex flex-col overflow-y-auto">
                <Header title={getTitle()} breadcrumbs={getBreadcrumbs()} />
                <main className="p-6">
                    <Content activeMenu={activeMenu} />
                </main>
            </div>
        </div>
    );
}
