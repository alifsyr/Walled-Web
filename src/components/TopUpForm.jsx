import { useState } from 'react';
import {faWallet} from '@fortawesome/free-solid-svg-icons';

import AmountInput from './AmountInput';
import CustomDropdown from './CustomDropdown';
import NotesInput from './NotesInput';

function TopUpForm() {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [notes, setNotes] = useState('');

    const paymentOptions = [
        { value: 'Credit Card', label: 'Credit Card' },
        { value: 'Debit Card', label: 'Debit Card' },
        { value: 'Bank Transfer', label: 'Bank Transfer' }
    ];

    const handlePaymentSelect = (option) => {
        setPaymentMethod(option.value);
    };

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

                {/* Payment Method Dropdown */}
                <CustomDropdown
                    label="From"
                    value={paymentMethod}
                    options={paymentOptions}
                    onChange={handlePaymentSelect}
                />

                {/* Notes Input */}
                <NotesInput
                    label="Notes:"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />

                {/* Transfer Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                    <span>Transfer</span>
                </button>
            </form>
        </div>
    );
}

export default TopUpForm;