"use client";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-7">
                <a href="/" className="text-xl font-bold text-pink-600">FlowerShop</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-700 hover:text-pink-500">Home</a></li>
                    <li><a href="/products"  className="text-gray-700 hover:text-pink-500">Shop</a></li>
                    <li><a href="/about"  className="text-gray-700 hover:text-pink-500">About</a></li>
                    <li><a href="/contact"  className="text-gray-700 hover:text-pink-500">Contact</a></li>
                    <li>
                        <a href="/cart" className="relative text-gray-700 hover:text-pink-500">
                        🛒Cart
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-semibold px-2 rounded-full">
                                {cart.length}
                            </span>
                        )}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}