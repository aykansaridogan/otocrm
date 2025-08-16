
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

// Kar Durumu bileşeni
const ProfitStatus = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex space-x-4">
            <div className="flex-1 p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="text-2xl font-bold">0 ₺</h4>
                <span className="text-sm text-gray-500">(KDV Hariç) Kar Miktarı</span>
            </div>
            <div className="flex-1 p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="text-2xl font-bold">0 %</h4>
                <span className="text-sm text-gray-500">Kar Oranı</span>
            </div>
            <div className="flex-1 p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="text-2xl font-bold">0 %</h4>
                <span className="text-sm text-gray-500">Kar Marjı</span>
            </div>
        </div>
        <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Nakit Hareketleri</h3>
                <button className="flex items-center p-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition text-sm">
                    <BarChart2 size={16} className="mr-1" />
                    <span>Nakit Hareketleri</span>
                </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={[]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
);


export default ProfitStatus;