import React from 'react';
import { X, Copy, Edit2, Trash2, Star } from 'lucide-react';

export default function PromptDetail({ prompt, isOpen, onClose, onCopy, onEdit, onDelete, onToggleFavorite }) {
  if (!isOpen || !prompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-y-auto max-h-[90vh] relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Chiudi dettaglio"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
              {prompt.category}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
              {prompt.type}
            </span>
            <button
              onClick={() => onToggleFavorite(prompt.id, prompt.is_favorite)}
              className="ml-auto text-slate-300 hover:text-yellow-500 transition-colors p-2 rounded-lg hover:bg-slate-50"
              title={prompt.is_favorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
              aria-label={prompt.is_favorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            >
              <Star className={`w-5 h-5 ${prompt.is_favorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
            </button>
          </div>
          <h2 className="font-bold text-2xl text-slate-800 mb-2 leading-tight">{prompt.title}</h2>
          <pre className="whitespace-pre-wrap text-slate-700 text-base mb-4 bg-slate-50 rounded-lg p-3 overflow-x-auto">
            {prompt.content}
          </pre>
        </div>
        <div className="flex gap-2 px-6 pb-6">
          <button
            onClick={() => onCopy(prompt.title)}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Copy className="w-5 h-5" />
            Copia
          </button>
          <button
            onClick={() => onEdit(prompt)}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            <Edit2 className="w-5 h-5" />
            Modifica
          </button>
          <button
            onClick={() => onDelete(prompt.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            <Trash2 className="w-5 h-5" />
            Elimina
          </button>
        </div>
      </div>
    </div>
  );
}
