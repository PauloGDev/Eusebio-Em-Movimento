import { useState, useEffect } from "react";

const PrivacyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-3 z-50 border-t border-gray-200">
      <p className="text-xs md:text-sm text-gray-700 max-w-[500px] text-center md:text-left">
        Este site utiliza cookies para melhorar sua experiência e está de acordo
        com nossas diretrizes de privacidade e uso.
      </p>
      <button
        onClick={acceptCookies}
        className="px-4 py-2 bg-[#1E1E1E] text-white text-xs md:text-sm rounded-lg hover:bg-gray-800 transition"
      >
        Aceitar
      </button>
    </div>
  );
};

export default PrivacyBanner;
