

export default function Footer() {
    return (
        <footer className="bg-pink-500 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
               <p className="text-lg font-semibold">FlowerShop{new Date().getFullYear()}</p>
               <p className="text-sm mt-1">Beautiful flowers, delivered with love.</p>
               <div className="mt-3 flex justify-center space-x-4">
                    <a href="#" className="hover: underline">Privacy Policy</a>
                    <a href="#" className="hover: underline">Terms of Service</a>
                    <a href="/contact" className="hover: underline">Contact Us</a>
                </div> 
            </div>
        </footer>
    )
}