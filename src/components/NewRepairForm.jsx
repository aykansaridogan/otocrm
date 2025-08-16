import { useState } from "react";
import {
    Bell,
    Search,
    ChevronLeft,
    ChevronRight,
    Plus,
    Edit,
    Clipboard,
    Settings,

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

const NewRepairForm = () => {
    // State for form fields
    const [plate, setPlate] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [chassisNo, setChassisNo] = useState('');
    const [engineNo, setEngineNo] = useState('');
    const [engineCapacity, setEngineCapacity] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [notes, setNotes] = useState('');
    const [fuelType, setFuelType] = useState('petrol');
    const [mileageType, setMileageType] = useState('km');
    const [mileage, setMileage] = useState('');

    // Check if the plate input is empty to disable other fields
    const isPlateEmpty = plate.trim() === '';

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Submitted!', { plate, model, color, chassisNo, engineNo, engineCapacity, registrationDate, notes, fuelType, mileageType, mileage });
    };

    return (
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl w-full max-w-4xl mx-auto font-inter">
            {/* Tabs for form sections */}
            <div className="flex border-b border-gray-300 mb-6 space-x-4 text-lg font-semibold text-gray-600">
                <button className="p-2 border-b-2 border-blue-600 text-blue-600">
                    <Car className="inline mr-2" />
                    Araç
                </button>
                {/* Disable other tabs until plate is entered */}
                <button className={`p-2 border-b-2 border-transparent hover:border-gray-400 transition-colors ${isPlateEmpty ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isPlateEmpty}>
                    <Users className="inline mr-2" />
                    Müşteri
                </button>
                <button className={`p-2 border-b-2 border-transparent hover:border-gray-400 transition-colors ${isPlateEmpty ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isPlateEmpty}>
                    <Clipboard className="inline mr-2" />
                    Tadilatlar
                </button>
                <button className={`p-2 border-b-2 border-transparent hover:border-gray-400 transition-colors ${isPlateEmpty ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isPlateEmpty}>
                    <Eye className="inline mr-2" />
                    Onayla
                </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Plaka arama bölümü */}
                <div className="flex items-end space-x-4">
                    <div className="flex-1 relative">
                        <label htmlFor="plate" className="block text-sm font-medium text-gray-700 mb-1">Plaka</label>
                        <input
                            type="text"
                            id="plate"
                            name="plate"
                            value={plate}
                            onChange={(e) => setPlate(e.target.value)}
                            placeholder="Plaka"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                        <p className="mt-2 text-xs text-gray-500">Yeni tamirat kaydı açmak için, araç plakasını yazıp arama tuşuna basınız.</p>
                    </div>
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg transition-colors duration-200 transform hover:scale-105">
                        <Search />
                    </button>
                </div>

                {/* Diğer araç bilgileri */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Renk</label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="chassisNo" className="block text-sm font-medium text-gray-700 mb-1">Şasi No</label>
                        <input
                            type="text"
                            id="chassisNo"
                            name="chassisNo"
                            value={chassisNo}
                            onChange={(e) => setChassisNo(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="engineNo" className="block text-sm font-medium text-gray-700 mb-1">Motor No</label>
                        <input
                            type="text"
                            id="engineNo"
                            name="engineNo"
                            value={engineNo}
                            onChange={(e) => setEngineNo(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="engineCapacity" className="block text-sm font-medium text-gray-700 mb-1">Motor Hacmi</label>
                        <input
                            type="text"
                            id="engineCapacity"
                            name="engineCapacity"
                            value={engineCapacity}
                            onChange={(e) => setEngineCapacity(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">Tescil Tarihi</label>
                        <input
                            type="date"
                            id="registrationDate"
                            name="registrationDate"
                            value={registrationDate}
                            onChange={(e) => setRegistrationDate(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notlar</label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows="1"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                            disabled={isPlateEmpty}
                        />
                    </div>
                </div>

                {/* Yakıt Tipi ve Kilometre Sayacı */}
                <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Yakıt Tipi</label>
                        <div className={`flex space-x-4 ${isPlateEmpty ? 'opacity-50' : ''}`}>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="fuelType"
                                    value="petrol"
                                    checked={fuelType === 'petrol'}
                                    onChange={(e) => setFuelType(e.target.value)}
                                    className="form-radio text-blue-600 h-4 w-4"
                                    disabled={isPlateEmpty}
                                />
                                <span className="ml-2 text-gray-700">Benzin</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="fuelType"
                                    value="diesel"
                                    checked={fuelType === 'diesel'}
                                    onChange={(e) => setFuelType(e.target.value)}
                                    className="form-radio text-blue-600 h-4 w-4"
                                    disabled={isPlateEmpty}
                                />
                                <span className="ml-2 text-gray-700">Dizel</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="fuelType"
                                    value="electric"
                                    checked={fuelType === 'electric'}
                                    onChange={(e) => setFuelType(e.target.value)}
                                    className="form-radio text-blue-600 h-4 w-4"
                                    disabled={isPlateEmpty}
                                />
                                <span className="ml-2 text-gray-700">Elektrik</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">Kilometre sayacı</label>
                        <div className={`flex items-center space-x-2 ${isPlateEmpty ? 'opacity-50' : ''}`}>
                            <input
                                type="number"
                                id="mileage"
                                name="mileage"
                                value={mileage}
                                onChange={(e) => setMileage(e.target.value)}
                                className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${isPlateEmpty ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'border-gray-300'}`}
                                disabled={isPlateEmpty}
                            />
                            <div className="flex bg-gray-200 rounded-lg p-1">
                                <button
                                    type="button"
                                    onClick={() => setMileageType('km')}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${mileageType === 'km' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-300'} ${isPlateEmpty ? 'cursor-not-allowed' : ''}`}
                                    disabled={isPlateEmpty}
                                >
                                    Kilometre
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMileageType('mile')}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${mileageType === 'mile' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-300'} ${isPlateEmpty ? 'cursor-not-allowed' : ''}`}
                                    disabled={isPlateEmpty}
                                >
                                    Mil
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMileageType('hour')}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${mileageType === 'hour' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-300'} ${isPlateEmpty ? 'cursor-not-allowed' : ''}`}
                                    disabled={isPlateEmpty}
                                >
                                    Saat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kaydet butonu */}
                <div className="pt-4 flex justify-end">
                    <button type="submit"
                        className={`font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 transform hover:scale-105 ${isPlateEmpty ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-2'} text-white`}
                        disabled={isPlateEmpty}
                    >
                        Kaydet
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewRepairForm;
