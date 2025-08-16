import React, { useState } from 'react';
import { Plus, Edit, X } from 'lucide-react';

// Main application component
function HizliSatis() {
  const [items, setItems] = useState([
    {
      id: 1,
      description: '',
      unit: 'Adet',
      quantity: 1,
      unitPrice: 0,
      vatRate: 20,
      total: 0
    },
    {
      id: 2,
      description: 'MEKANİK İŞÇİLİK',
      unit: 'İşçilik',
      quantity: 1,
      unitPrice: 0,
      vatRate: 20,
      total: 0
    }
  ]);

  // State for different UI and data elements
  const [vatIncluded, setVatIncluded] = useState(true);
  const [discountApplied, setDiscountApplied] = useState(true);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [paymentIncludeVat, setPaymentIncludeVat] = useState(true);
  const [paymentType, setPaymentType] = useState('cash');
  const [salesNote, setSalesNote] = useState('');
  // State for the custom success modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a new 'maintenance' item row to the sales list
  const addMaintenanceRow = () => {
    const newItem = {
      id: Date.now(),
      description: '',
      unit: 'Adet',
      quantity: 1,
      unitPrice: 0,
      vatRate: 20,
      total: 0
    };
    setItems([...items, newItem]);
  };

  // Function to add a new 'labor' item row
  const addLaborRow = () => {
    const newItem = {
      id: Date.now(),
      description: '',
      unit: 'İşçilik',
      quantity: 1,
      unitPrice: 0,
      vatRate: 20,
      total: 0
    };
    setItems([...items, newItem]);
  };

  // Function to remove an item row by its ID
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to update an item's field (e.g., quantity, price, description)
  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        // Recalculate total if quantity, unitPrice, or vatRate changes
        if (field === 'quantity' || field === 'unitPrice' || field === 'vatRate') {
          updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  // Function to update customer information
  const updateCustomerInfo = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  // Calculate the subtotal of all items
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  // Calculate the total VAT amount
  const calculateVat = () => {
    return items.reduce((sum, item) => sum + (item.total * item.vatRate / 100), 0);
  };

  // Calculate the grand total including VAT
  const calculateGrandTotal = () => {
    const subtotal = calculateSubtotal();
    const vat = calculateVat();
    return subtotal + vat;
  };

  // Handle the "complete sale" action, showing a modal instead of an alert
  const handleCompleteSale = () => {
    setIsModalOpen(true);
  };

  // Component for the custom modal
  const SalesSuccessModal = () => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative p-8 bg-white w-96 max-w-md mx-auto rounded-xl shadow-lg transform transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Satış Tamamlandı!</h3>
        <p className="text-sm text-gray-600 mb-6">İşleminiz başarıyla tamamlanmıştır. Fatura ve ödeme bilgileri kayıt altına alındı.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kapat
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-inter">
      {/* Sales Item and Labor Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <h1 className="text-xl font-medium text-gray-900 mb-2">Stoktaki Ürünler ve Yapılan Tadilatlar</h1>
          <p className="text-sm text-blue-600 mb-4">Stoktaki Ürünü Ekle</p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ürün ismi, barkodu ya da stok kodu giriniz"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <p className="text-xs text-gray-500">
            Stokta ürün bulunamıyor. Lütfen ürün eklemek için <span className="text-blue-600 cursor-pointer">tıklayınız</span>
          </p>
        </div>

        <div className="p-6">
          {/* VAT Settings */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">KDV ve Alış fiyatlarını düzenle</span>
              <label className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={vatIncluded}
                    onChange={(e) => setVatIncluded(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${vatIncluded ? 'bg-green-500' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${vatIncluded ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                  </div>
                </div>
                <span className="ml-3 text-sm text-gray-700">Birim Fiyatlara KDV dahil girilsin</span>
              </label>
            </div>
            <div className="text-sm text-gray-600">
              Birim Fiyatların Gösterimi: <span className="font-medium">KDV Dahil</span>
            </div>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-r border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700 w-12">#</th>
                  <th className="border-r border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Açıklama</th>
                  <th className="border-r border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700 w-32">Birim</th>
                  <th className="border-r border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700 w-32">Miktar</th>
                  <th className="border-r border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-700 w-40">
                    Birim Fiyatı<br />
                    <span className="text-xs text-gray-500">(KDV Dahil)</span>
                  </th>
                  <th className="border-r border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-700 w-40">
                    Toplam Fiyat<br />
                    <span className="text-xs text-gray-500">(KDV Dahil)</span>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 w-16"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                    <td className="border-r border-gray-300 px-4 py-3 text-sm text-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium ${item.unit === 'İşçilik' ? 'bg-blue-500' : 'bg-green-500'}`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full border-none focus:outline-none text-sm bg-transparent"
                      />
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3">
                      <select
                        value={item.unit}
                        onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                        className={`w-full border-none focus:outline-none text-sm bg-transparent ${item.unit === 'İşçilik' ? 'text-blue-600' : ''}`}
                      >
                        <option value="Adet">Adet</option>
                        <option value="İşçilik">İşçilik</option>
                        <option value="kg">kg</option>
                        <option value="m">m</option>
                        <option value="m²">m²</option>
                      </select>
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                          step="0.01"
                        />
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">{item.vatRate}%</span>
                      </div>
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                          className="w-20 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                          step="0.01"
                        />
                        <span className="ml-1 text-sm text-gray-500">TL</span>
                      </div>
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-medium">{calculateVatIncludedTotal(item.total, item.vatRate).toFixed(2)}</span>
                        <span className="ml-1 text-sm text-gray-500">TL</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 rounded-lg p-1"
                      >
                        <X size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Item Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={addMaintenanceRow}
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <Plus size={18} className="mr-2" />
              Tadilat Satırı Ekle
            </button>
            <button
              onClick={addLaborRow}
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              <Edit size={18} className="mr-2" />
              İşçilik Ücreti Satırı Ekle
            </button>
          </div>

          {/* Summary and Discount */}
          <div className="mt-8 flex flex-col items-end">
            {/* Summary Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-w-80">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Toplam:</span>
                  <span className="text-sm font-medium">{calculateSubtotal().toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Toplam KDV Tutarı:</span>
                  <span className="text-sm font-medium">{calculateVat().toFixed(2)} TL</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Kdv Dahil Toplam:</span>
                  <span className="text-lg font-bold text-gray-900">{calculateGrandTotal().toFixed(2)} TL</span>
                </div>
              </div>
            </div>

            {/* Discount Options */}
            <div className="mt-6 flex items-center justify-end space-x-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="discount"
                  checked={!discountApplied}
                  onChange={() => setDiscountApplied(false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-blue-600 font-medium">Satışta indirim Yok</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="discount"
                  checked={discountApplied}
                  onChange={() => setDiscountApplied(true)}
                  className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-600">Evet, satışta indirim Var</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info and Payment Form */}
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Kapı Müşterisi - Peşin Satış</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors">
              Cari Müşterisi Seç
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
              <input
                type="text"
                value={customerInfo.name}
                onChange={(e) => updateCustomerInfo('name', e.target.value)}
                placeholder="İsimsiz Müşteri"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
              <input
                type="text"
                value={customerInfo.address}
                onChange={(e) => updateCustomerInfo('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                  📞
                </span>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => updateCustomerInfo('phone', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-2">
              <strong>Not:</strong> Müşteri Kartı ve Cari Hesap Açılmayacak
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Ödeme ve Tahsilat</h2>

          {/* Grand Total Display */}
          <div className="bg-green-500 text-white p-4 rounded-lg mb-6 flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{calculateGrandTotal().toFixed(2)} TL</div>
              <div className="text-sm opacity-90">( KDV Dahil )</div>
            </div>
          </div>

          {/* Payment VAT Toggle */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-700">Ödeme KDV Dahil mi Olsun?</span>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={paymentIncludeVat}
                  onChange={(e) => setPaymentIncludeVat(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${paymentIncludeVat ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${paymentIncludeVat ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                </div>
              </div>
            </label>
          </div>

          {/* Payment Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ödeme Tipi</label>
            <select
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="cash">Nakit</option>
              <option value="creditCard">Kredi Kartı</option>
              <option value="eft">EFT / Havale</option>
            </select>
          </div>

          {/* Sales Note */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Satış Notu</label>
            <textarea
              value={salesNote}
              onChange={(e) => setSalesNote(e.target.value)}
              placeholder="Özel notlarınızı buraya ekleyebilirsiniz."
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Complete Sale Button */}
      <div className="max-w-7xl mx-auto mt-6">
        <button
          onClick={handleCompleteSale}
          className="w-full px-6 py-4 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors font-bold text-lg"
        >
          Satışı Tamamla
        </button>
      </div>

      {isModalOpen && <SalesSuccessModal />}
    </div>
  );
}

// Helper function to calculate total with VAT included, as per the table headers
const calculateVatIncludedTotal = (subtotal, vatRate) => {
  return subtotal * (1 + vatRate / 100);
};

export default HizliSatis;
