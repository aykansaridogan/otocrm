import React, { useState } from 'react';
import {
    User,
    Phone,
    Mail,
    Globe,
    Briefcase,
    DollarSign,
    RefreshCw,
    Lock,
    Home,
    FileText,
    Settings,
    CreditCard,
    ChevronDown,
    Check,
    Calendar
} from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

/**
 * Renders the user profile page with various sections and settings.
 * This component displays user information, company details, and license status
 * using a tabbed interface. It also includes a modal for entering a license key.
 */
const Profil = () => {
    // State to manage the active tab in the profile page
    const [activeTab, setActiveTab] = useState('genel');
    // State to control the visibility of the license modal
    const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

    // Mock data for the user profile sections.
    // In a real application, this data would be fetched from an API.
    const userInfo = {
        name: 'Aykan Sarıdoğan',
        profileImage: 'https://placehold.co/150x150/E5E7EB/9CA3AF?text=Profil',
        phone: '5459595245',
        email: 'info@firmaadi.com',
        language: 'Türkçe',
        currency: 'Türk Lirası',
        title: 'Unvan',
        userType: 'Oto Servis Kullanıcısı',
    };

    const generalInfo = {
        firmaAdi: 'Aykan Oto Servis',
        telefon: '0212 123 45 67',
        adres: 'Örnek Mahallesi, Deneme Caddesi, No: 1, İstanbul',
        vergiDairesi: 'Beyoğlu',
        vergiNo: '1234567890',
        operasyonEmail: 'destek@firmaadi.com',
        lisansKodu: 'DEMO-1234-ABCD',
        lisansPaketi: 'Premium',
        gecerlilikTarihi: '14.09.2025',
        lisansOzellikleri: [
            { icon: <User size={18} />, text: 'Sınırsız Müşteri' },
            { icon: <Briefcase size={18} />, text: 'Sınırsız araç kaydı' },
            { icon: <FileText size={18} />, text: 'Çoklu cihaz' },
            { icon: <RefreshCw size={18} />, text: 'Günlük yedekleme' },
        ],
    };

    /**
     * Renders the content based on the active tab.
     */
    const renderContent = () => {
        switch (activeTab) {
            case 'genel':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Company Information Inputs */}
                            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <label className="block">
                                    <span className="text-gray-700">Firma Adı</span>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.firmaAdi} />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Telefon</span>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.telefon} />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Operasyon Email</span>
                                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.operasyonEmail} />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Adres</span>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.adres} />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Vergi Dairesi</span>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.vergiDairesi} />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Vergi No</span>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={generalInfo.vergiNo} />
                                </label>
                            </div>

                            {/* License Code Section */}
                            <div className="col-span-1 md:col-span-3 flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-inner">
                                <div className="text-center w-full mb-4">
                                    <button onClick={() => setIsLicenseModalOpen(true)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                                        Lisans Kodu Gir
                                    </button>
                                </div>
                                <div className="w-full">
                                    <input type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Lisans Kodu Gir" />
                                </div>
                            </div>

                            {/* License Package Display */}
                            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-800">Lisans</h3>
                                    <span className="text-sm text-gray-500">Lisanslı</span>
                                    <div className="mt-4">
                                        <h4 className="text-xl font-bold text-blue-600">{generalInfo.lisansPaketi}</h4>
                                        <div className="flex items-center text-gray-600 mt-2">
                                            <Calendar size={16} className="mr-2" />
                                            <span>Geçerlilik Tarihi: {generalInfo.gecerlilikTarihi}</span>
                                        </div>
                                    </div>
                                    <ul className="mt-4 space-y-2">
                                        {generalInfo.lisansOzellikleri.map((ozellik, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                {ozellik.icon}
                                                <span className="ml-2">{ozellik.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'profil':
                return <div className="p-6 text-gray-700">Profil bilgileri sayfası. Bu sekme altında kullanıcı adınızı, parolanızı ve diğer kişisel bilgilerinizi düzenleyebilirsiniz.</div>;
            case 'firma':
                return <div className="p-6 text-gray-700">Firma ayarları sayfası. Firmanızın detaylarını, logolarını ve diğer kurumsal bilgileri buradan yönetebilirsiniz.</div>;
            case 'email':
                return <div className="p-6 text-gray-700">Email ayarları sayfası. Otomatik bildirimler, fatura gönderimi ve diğer e-posta ile ilgili ayarları burada yapılandırabilirsiniz.</div>;
            case 'ayarlar':
                return <div className="p-6 text-gray-700">Diğer ayarlar sayfası. Uygulamanın genel ayarları, bildirim tercihleri ve kullanıcı erişim hakları gibi konuları içerir.</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-sans">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/4 bg-white p-6 shadow-lg md:rounded-lg md:m-4">
                <div className="flex flex-col items-center text-center">
                    <img src={userInfo.profileImage} alt="Profil Resmi" className="w-24 h-24 rounded-full mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800">{userInfo.name}</h2>
                    <div className="flex space-x-2 mt-2">
                        <button className="text-gray-500 hover:text-gray-700"><Check size={18} /></button>
                        <button className="text-gray-500 hover:text-gray-700"><Lock size={18} /></button>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center p-3 rounded-lg bg-gray-100 shadow-sm">
                        <Phone size={20} className="text-gray-500 mr-3" />
                        <span className="text-gray-700">{userInfo.phone}</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg bg-gray-100 shadow-sm">
                        <Mail size={20} className="text-gray-500 mr-3" />
                        <span className="text-gray-700">{userInfo.email}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                            <span className="text-sm text-gray-500">Kullanılan Dil</span>
                            <div className="flex items-center text-gray-700 font-semibold mt-1">
                                <Globe size={16} className="mr-2" />
                                <span>{userInfo.language}</span>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                            <span className="text-sm text-gray-500">Para Birimi</span>
                            <div className="flex items-center text-gray-700 font-semibold mt-1">
                                <DollarSign size={16} className="mr-2" />
                                <span>{userInfo.currency}</span>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                            <span className="text-sm text-gray-500">Unvan</span>
                            <div className="flex items-center text-gray-700 font-semibold mt-1">
                                <User size={16} className="mr-2" />
                                <span>{userInfo.title}</span>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                            <span className="text-sm text-gray-500">Kullanıcı Türü</span>
                            <div className="flex items-center text-gray-700 font-semibold mt-1">
                                <User size={16} className="mr-2" />
                                <span>{userInfo.userType}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                <div className="bg-white rounded-lg shadow-md">
                    {/* Tabs for navigation */}
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8 px-6 pt-4" aria-label="Tabs">
                            <button
                                onClick={() => setActiveTab('genel')}
                                className={`${activeTab === 'genel' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Genel
                            </button>
                            <button
                                onClick={() => setActiveTab('profil')}
                                className={`${activeTab === 'profil' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Profil
                            </button>
                            <button
                                onClick={() => setActiveTab('firma')}
                                className={`${activeTab === 'firma' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Firma
                            </button>
                            <button
                                onClick={() => setActiveTab('email')}
                                className={`${activeTab === 'email' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Email
                            </button>
                            <button
                                onClick={() => setActiveTab('ayarlar')}
                                className={`${activeTab === 'ayarlar' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Ayarlar
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* License Code Modal */}
            <Transition appear show={isLicenseModalOpen} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsLicenseModalOpen(false)}>
                    {/* The modal overlay */}
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-30" />
                    </Transition.Child>

                    {/* The modal panel container */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                                        Lisans Kodu Gir
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Lisans kodunuzu buraya girin" />
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsLicenseModalOpen(false)}
                                        >
                                            Gönder
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Profil;
