
// Tahsilatlar ve Tamiratlar bileşeni
const CollectionsAndRepairs = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
                <h3 className="text-lg font-semibold mb-2">Tahsilatlar</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span>Nakit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span>Kredi Kartı</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                        <span>Çek/Senet</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                        <span>Havale</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-lg font-semibold mb-2">Tamiratlar</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span>Ödemesi Alınan Tamirat</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                        <span>Ödemesi bekleyen Tamirat</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-500">
            {/* Takvim yer tutucusu */}
            <h4 className="text-md font-semibold mb-2">Takvim</h4>
            <div className="text-center">Herhangi bir etkinlik bulunmuyor</div>
        </div>
    </div>
);

export default CollectionsAndRepairs;
