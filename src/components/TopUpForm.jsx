import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faChevronDown,
    faArrowRight,
    faWallet
} from '@fortawesome/free-solid-svg-icons';
import AmountInput from '..//components/AmountInput';

function TopUpForm() {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="w-full max-w-md p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                {/* Amount Input */}
                <AmountInput
                    label="Amount"
                    icon={faWallet}
                    prefix="IDR"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                />

                {/* Payment Method Selector */}
                <div className="space-y-2">
                    <label className="text-xl text-gray-600 font-bold">From</label>
                    <div className="relative">
                        <div className="flex items-center bg-gray-50 rounded-3xl p-4 shadow-sm">
                            <div>
                            <label className="text-xl text-gray-600 font-bold">From</label>
                            </div>
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-full bg-transparent appearance-none focus:outline-none cursor-pointer pr-8"
                            >
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-black"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notes Input */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-600 font-medium">Notes:</label>
                    <div className="bg-gray-50 rounded-lg shadow-sm">
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full bg-transparent p-4 focus:outline-none resize-none min-h-[100px]"
                            placeholder="Add notes here..."
                        />
                    </div>
                </div>

                {/* Transfer Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                    <span>Transfer</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>
        </div>
    );
}

export default TopUpForm;