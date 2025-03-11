'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const CustomDropdown = ({
  placeholder = 'Select options',
  options = [],
  value = [],
  setValue = () => {},
  onChange = () => {},
  isMulti = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    Array.isArray(value) ? value : [value].filter(Boolean)
  );
  const dropdownRef = useRef(null);

  // Update internal state when external value changes
  useEffect(() => {
    if (Array.isArray(value)) {
      setSelectedItems(value);
    } else if (value) {
      setSelectedItems([value]);
    } else {
      setSelectedItems([]);
    }
  }, [value]);

  // Handle clicks outside of dropdown
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
    let updatedSelection;

    if (isMulti) {
      // For multi-select: toggle selection
      updatedSelection = selectedItems.includes(selectedValue)
        ? selectedItems.filter((item) => item !== selectedValue)
        : [...selectedItems, selectedValue];
    } else {
      // For single-select: replace selection
      updatedSelection = [selectedValue];
      // Close dropdown after single selection
      setTimeout(() => setIsOpen(false), 150);
    }

    setSelectedItems(updatedSelection);

    // Call both callback functions for compatibility
    if (onChange) onChange(isMulti ? updatedSelection : selectedValue);
    if (setValue) setValue(isMulti ? updatedSelection : selectedValue);
  };

  const applySelection = () => {
    if (onChange) onChange(isMulti ? selectedItems : selectedItems[0] || '');
    if (setValue) setValue(isMulti ? selectedItems : selectedItems[0] || '');
    setIsOpen(false);
  };

  const resetSelection = () => {
    setSelectedItems([]);
    if (onChange) onChange(isMulti ? [] : '');
    if (setValue) setValue(isMulti ? [] : '');
  };

  // Get display text for the dropdown button
  const getDisplayText = () => {
    if (selectedItems.length === 0) return placeholder;

    if (!isMulti) {
      // For single select, show the label of the selected item
      const selectedOption = options.find(
        (option) => option.value === selectedItems[0]
      );
      return selectedOption ? selectedOption.label : placeholder;
    }

    // For multi-select, show count
    return `${selectedItems.length} selected`;
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center px-3 py-2 border border-[#AE445A] rounded-md text-sm text-gray-700 bg-white focus:outline-none">
        <span
          className={`truncate ${selectedItems.length === 0 ? 'text-gray-400' : 'text-gray-700'}`}>
          {getDisplayText()}
        </span>
        <span className="ml-2">
          <ChevronDownIcon color={'#AE445A'} />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-20 border border-gray-200">
          {options.length > 0 ? (
            <>
              <div className="flex flex-col max-h-48 overflow-y-auto">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
                    <input
                      type={isMulti ? 'checkbox' : 'radio'}
                      name="dropdown-selection"
                      value={option.value}
                      checked={selectedItems.includes(option.value)}
                      onChange={() => handleSelectionChange(option.value)}
                      className={
                        isMulti
                          ? 'form-checkbox text-[#AE445A]'
                          : 'form-radio text-[#AE445A]'
                      }
                    />
                    <span className="ml-2 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>

              {isMulti && (
                <div className="flex justify-between items-center p-2 border-t">
                  <button
                    onClick={resetSelection}
                    className="px-3 py-1 text-sm text-[#AE445A] hover:underline">
                    Reset
                  </button>
                  <button
                    onClick={applySelection}
                    className="px-4 py-1 text-sm rounded bg-gradient-to-r from-[#f39f5a] to-[#ae445a] text-white font-medium">
                    Apply
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-3 text-center text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
