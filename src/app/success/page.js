export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-28">
            <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800">Order Successful</h1>
                <p className="text-gray-700 mt-4">
                    Your order has been successfully placed. We will send you a confirmation email shortly.
                </p>

                <a href="/products">
                    <button className="block bg-pink-500 text-white px-4 py-2 rounded-lg mt-7 hover:bg-pink-700 transition">
                        Continue Shopping
                    </button>
                </a>
            </div>
        </main>
    )
}