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
import Satislar from "../components/sidebaritem/satislar";
import Musteriler from "../components/sidebaritem/müsteriler";
import Araclar from "../components/sidebaritem/araclar";
import AlacaklarRaporu from "../components/utils/alacaklarrapor";
import TumMusteriler from "../components/utils/tummusteriler";
import TamiratlarRaporu2 from "../components/utils/tamiratlarraporr";
import SatislarRaporu2 from "../components/utils/satislarrapor";
import Teknisyenler from "../components/sidebaritem/teknisyenler";
import IsOrtaklari from "../components/sidebaritem/isortaklari";
import HesapDefteri from "../components/sidebaritem/hesapdefteri";
import Tahsilatlar from "../components/sidebaritem/tahsilatlar";
import Ayarlar from "../components/sidebaritem/ayarlar";
import Lisans from "../components/sidebaritem/lisans";
import Login from "./login";

import Profile from "./profil";

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

        case 'satislar':
            return <Satislar/>;

        case 'musteriler':
            return <Musteriler/>;

        case 'araclar':
            return <Araclar/>;
        
        case 'gelirgiderraporlari':
            return <AlacaklarRaporu/>;
        
        case 'tum_musteriler':
            return <TumMusteriler/>;
        
        case 'tamirat_raporlari':
            return <TamiratlarRaporu2/>;

        case 'satis_raporlari':
            return <SatislarRaporu2/>;

        case 'teknisyenler':
            return <Teknisyenler/>;

        case 'isortaklari':
            return <IsOrtaklari/>;

        case 'hesapdefteri':
            return <HesapDefteri/>;

        case 'tahsilatlar':
            return <Tahsilatlar/>;
        
        case 'ayarlar':
            return <Ayarlar/>;

        
        case 'profilim':
            return <Profile/>;
        case 'lisans':
            return <Lisans/>;

        case 'dokumanlar':
    window.open("https://myndos.net/docs/tr/index.html", "_blank");
    return null;
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
