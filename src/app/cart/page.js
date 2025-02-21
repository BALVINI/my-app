"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const { cart, setCart, clearCart, checkout } = useCart();

    const handleCheckout = () => {
        checkout();
        router.push("/success");
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, amount) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount ) } : item
            ));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <main className="min-h-screen bg-gray-100 py-28">
            <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                <div className="mt-8">
                    {cart.length === 0 ? (
                        <p className="text-gray-700">
                            Your cart is empty.{" "}
                             <a href="/products" className="text-pink-500">
                                 Shop Now
                             </a>
                        </p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-700">${item.price} x {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-700 hover:text-pink-600 mx-3">-</button>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-700 hover:text-pink-600 mx-4">+</button>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold text-gray-800">Total:</p>
                                <p className="text-lg font-semibold text-gray-800">${totalPrice}</p>
                            </div>
                            <Link href="/success">
                            <button onClick={handleCheckout} className="block bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-pink-700 transition">
                                Checkout
                            </button>
                            </Link>
                            <div className="-my-6 text-right">
                                <button onClick={clearCart} className="text-red-600 hover:text-red-800">Clear Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}