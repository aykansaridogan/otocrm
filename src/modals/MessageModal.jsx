

// Oluşturulan mesajı göstermek için kullanılan modal bileşeni
const MessageModal = ({ message, onClose }) => {
    if (!message) return null;

    // Mesajı panoya kopyalama işlevi
    const copyToClipboard = () => {
        const textArea = document.createElement("textarea");
        textArea.value = message;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Kopyalama başarısız oldu:', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Oluşturulan Mesaj</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                </div>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <p className="whitespace-pre-wrap">{message}</p>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                    >
                        <Clipboard size={16} className="mr-2" />
                        Kopyala
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    >
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;