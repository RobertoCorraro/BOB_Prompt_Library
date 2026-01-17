import React from "react";

export default function MobileMenu({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="w-full max-w-md mx-auto bg-white rounded-t-2xl shadow-2xl p-4 animate-in slide-in-from-bottom-4 fade-in">
        {children}
      </div>
    </div>
  );
}
