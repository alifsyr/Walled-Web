import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CustomDropdown({ 
    label, 
    value, 
    options, 
    onChange 
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="bg-[#FAFBFD] rounded-2xl">
            <div className="relative">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center">
                        <div className='flex items-center bg-[#EDEDED] rounded-2xl p-3'>
                            <label className="text-xl text-gray-600 font-extrabold">
                                {label}
                            </label>
                        </div>
                        <span className="font-medium p-3">{value}</span>
                    </div>
                    <div className='p-4'>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-gray-400 transition-transform duration-200 
                                ${isOpen ? 'transform rotate-180' : ''}`}
                        />
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden z-10">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center
                                    ${value === option.value ? 'bg-gray-50' : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                <span className="font-medium">{option.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomDropdown;