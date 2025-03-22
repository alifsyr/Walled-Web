import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AmountInput({ 
    label, 
    icon, 
    prefix, 
    value, 
    onChange, 
    placeholder = "0",
    type = "text" 
}) {
    return (
        <div className="bg-[#FAFBFD] rounded-3xl p-4 ">
            <div className="flex items-center mb-1">
                <FontAwesomeIcon 
                    icon={icon} 
                    className="text-gray-400 mr-2"
                />
                <label className="text-sm text-gray-600 font-medium">{label}</label>
            </div>
            <div className="flex items-center mt-2">
                <div className="flex items-center border-b border-black w-full">
                    {prefix && (
                        <span className="text-gray-900 font-semibold text-xl">{prefix}</span>
                    )}
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        className="ml-2 w-full bg-transparent focus:outline-none text-xl font-semibold"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    );
}

export default AmountInput;