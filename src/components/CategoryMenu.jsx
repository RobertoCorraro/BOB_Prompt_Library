import React from 'react';
import { clsx } from 'clsx';

export default function CategoryMenu({ categories, activeCategory, onSelectCategory }) {
    return (
        <div className="overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 min-w-max">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        className={clsx(
                            "px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 min-w-11 min-h-11",
                            activeCategory === cat
                                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105 border-2 border-indigo-700"
                                : "bg-white text-slate-700 border border-slate-300 hover:border-indigo-400 hover:text-indigo-700"
                        )}
                        style={{ touchAction: 'manipulation' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
