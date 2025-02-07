'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const CustomDropdown = ({
  title,
  placeholder = 'Select options',
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(value || []);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedItems(value || []);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectionChange = (selectedValue) => {
    const updatedSelection = selectedItems.includes(selectedValue)
      ? selectedItems.filter((item) => item !== selectedValue)
      : [...selectedItems, selectedValue];
    setSelectedItems(updatedSelection);
    onChange(updatedSelection);
  };

  const applySelection = () => {
    onChange(selectedItems);
    setIsOpen(false);
  };

  const resetSelection = () => {
    setSelectedItems([]);
    onChange([]);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center px-3 py-2 border border-[#AE445A] rounded-md text-sm text-[#AE445A] focus:outline-none">
        {selectedItems.length
          ? `${selectedItems.length} selected`
          : placeholder}
        <span className="ml-2">
          <ChevronDownIcon color={'#AE445A'} />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-10 p-4">
          <div className="flex flex-col space-y-2 max-h-40 overflow-y-auto">
            {options.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedItems.includes(option.value)}
                  onChange={() => handleSelectionChange(option.value)}
                  className="form-checkbox text-[#AE445A]"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={applySelection}
              className="px-5 py-1 rounded-[10px] bg-gradient-to-r from-[#f39f5a] to-[#ae445a] shadow-[5px_0px_5px_0px_#b3b9c5] text-[14px] font-bold leading-[18px] text-white">
              Apply
            </button>
            <button
              onClick={resetSelection}
              className="px-5 py-1 border border-[#AE445A] text-[#AE445A] rounded-[10px] font-bold ml-2">
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
