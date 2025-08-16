import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Search, Calendar as CalendarIcon, Download } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameDay, getDay, isSaturday, isSunday, isSameMonth } from 'date-fns';
import { tr } from 'date-fns/locale';

// App componentini sarmalayacak ana bileşen
function Calendars() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 14)); // Başlangıç tarihi olarak 14 Ağustos 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 7, 14));

  // Takvimde gösterilecek günleri hesaplama
  const startDay = startOfMonth(currentDate);
  const endDay = endOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({ start: startDay, end: endDay });

  // Haftanın ilk gününe kadar boş hücre ekleme
  const firstDayIndex = getDay(startDay);
  const emptyCells = Array(firstDayIndex === 0 ? 6 : firstDayIndex - 1).fill(null); // Pazartesi ilk gün

  // Örnek etkinlik verileri
  const events = [
    { id: 1, date: new Date(2025, 7, 14), time: '09:00', title: 'Müşteri Toplantısı', type: 'Randevu', owner: 'Zaman Çizelgesi' },
    { id: 2, date: new Date(2025, 7, 15), time: '11:00', title: 'Proje Sunumu', type: 'Randevu', owner: 'Zaman Çizelgesi' },
    { id: 3, date: new Date(2025, 7, 20), time: '14:30', title: 'Ekip Yemeği', type: 'Randevu', owner: 'Zaman Çizelgesi' }
  ];

  // Bir önceki aya gitme
  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonth;
    });
  };

  // Bir sonraki aya gitme
  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  // Bugün'e dönme
  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Günlük ajanda için saat aralıkları
  const timeSlots = [];
  for (let hour = 8; hour <= 17; hour++) {
    timeSlots.push(
      <div key={hour} className="py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-500">{`${String(hour).padStart(2, '0')}:00`}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-inter flex flex-col space-y-6">
      {/* Main Header */}
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 w-36 text-center">{format(currentDate, 'MMMM yyyy', { locale: tr })}</h2>
            <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          <button onClick={goToToday} className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
            Bugün
          </button>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap">
            <Plus size={18} className="mr-2" />
            Randevu Oluştur
          </button>
        </div>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
              Günlük Ajanda
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Aylık Ajanda
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-colors whitespace-nowrap">
            <Download size={18} className="mr-2" />
            Takvimi Dışarı Aktar
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Section: Calendar Grid */}
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-7 gap-1 text-center font-semibold text-gray-600 mb-4">
            <span className="text-red-500">Pzt</span>
            <span>Sal</span>
            <span>Çar</span>
            <span>Per</span>
            <span>Cum</span>
            <span className="text-red-500">Cmt</span>
            <span className="text-red-500">Paz</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {emptyCells.map((_, index) => (
              <div key={`empty-${index}`} className="p-3"></div>
            ))}
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`p-3 rounded-full hover:bg-blue-100 transition-colors relative
                  ${isSameMonth(day, currentDate) ? 'text-gray-800' : 'text-gray-400'}
                  ${isSaturday(day) || isSunday(day) ? 'text-red-500' : ''}
                  ${isToday(day) ? 'font-bold bg-blue-100' : ''}
                  ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white font-bold shadow-lg' : ''}
                `}
              >
                {format(day, 'd', { locale: tr })}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Daily Agenda */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">
              {format(selectedDate, 'd MMMM yyyy, EEEE', { locale: tr })}
            </h3>
            <button className="flex items-center px-3 py-1 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm">
              <Plus size={14} className="mr-1" />
              Yeni Oluştur
            </button>
          </div>
          <div className="border-t border-gray-200">
            {timeSlots.map((slot, index) => (
              <div key={index} className="flex items-center space-x-2 py-2">
                <span className="text-sm text-gray-500">{slot.props.children.props.children}</span>
                <div className="flex-1">
                  {/* Display events for the selected day */}
                  {events
                    .filter(event => isSameDay(event.date, selectedDate) && event.time.startsWith(slot.props.children.props.children.substring(0, 2)))
                    .map(event => (
                      <div key={event.id} className="bg-blue-100 text-blue-800 rounded-md p-2 text-xs font-medium">
                        {event.time} - {event.title}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Upcoming Events */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Takvimde Yaklaşan Etkinlikler</h2>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus size={18} className="mr-2" />
            Yeni Oluştur
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ara..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Müşteri</option>
            <option>Randevu</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hatırlatıcı Sahibi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                  Tarih
                  <CalendarIcon size={14} className="ml-1" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Türü</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.length > 0 ? (
                events.map((event, index) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.owner}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Beklemede
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(event.date, 'dd/MM/yyyy HH:mm')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.title}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    Henüz yaklaşan etkinlik bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendars;
