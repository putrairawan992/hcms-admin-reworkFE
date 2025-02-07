'use client';

import { useState } from 'react';

const Talent = ({ talents, onSelectionChange }) => {
  const [localSelectedTalents, setLocalSelectedTalents] = useState([]);

  const handleSelectionChange = (event, talent) => {
    const isChecked = event.target.checked;
    const updatedSelection = isChecked
      ? [...localSelectedTalents, talent]
      : localSelectedTalents.filter((t) => t.id !== talent.id);

    setLocalSelectedTalents(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('id-ID').format(number);
  };

  return (
    <div className="max-h-[500px] overflow-y-auto rounded-md">
      {talents.map((talent) => (
        <div
          key={talent.id}
          className="bg-white rounded-xl border border-red-500 p-4 flex items-center justify-between mb-4 transition-shadow hover:shadow-md">
          <div className="flex items-center">
            <input
              id={`talent-${talent.id}`}
              type="checkbox"
              checked={localSelectedTalents.some((t) => t.id === talent.id)}
              onChange={(e) => handleSelectionChange(e, talent)}
              className="w-4 h-4 mr-4 cursor-pointer"
            />
            <img
              src={talent.image}
              alt={talent.name}
              className="w-16 h-16 rounded-md object-cover mr-4"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-black text-lg">{talent.name}</h3>
              <span className="text-sm text-gray-600">{talent.education}</span>
              <span className="text-sm text-gray-600">
                Rp. {formatNumber(talent.salary)}
              </span>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>{talent.experience}</span>
                <span>Skor: {talent.score}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {talent.date} | {talent.time} WIB
            </span>
            <button className="bg-black text-white p-2 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Talent;
