import Navbar from "../components/Navbar"
import TopUpForm from "../components/TopUpForm"

function TopUp() {
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Top Up</h1>
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6">
                    <TopUpForm />
                </div>
            </div>
        </div>
    );
}

export default TopUp;