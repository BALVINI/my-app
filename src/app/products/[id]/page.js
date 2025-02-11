"use client";
import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";

const products = [
    { id: 1, name: "Rose Bouquet", price: 29.99, image: "/flowers/rose.jpeg", description: "A beautiful bouquet of fresh red roses." },
    { id: 2, name: "Tulip Delight", price: 24.99, image: "/flowers/tulip.jpg", description: "Elegant tulips perfect for any occasion." },
    { id: 3, name: "Sunflower Bliss", price: 19.99, image: "/flowers/sunflower.jpg", description: "Bright sunflowers to light up your day." },
    { id: 4, name: "Orchid Elegance", price: 39.99, image: "/flowers/orchid.jpg", description: "Exotic orchids for a special touch." },
  ];


export default function ProductDetails({ params }) {
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(params.id));

    if (!product) return notFound();

    return (
        <main className="min-h-screen bg-gray-100 py-28">
            <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
                <h1 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h1>
                <p className="text-pink-600 text-xl font-semibold mt-2">{product.price}</p>
                <p className="text-gray-700 mt-4">{product.description}</p>
                
                <div className="mt-6 flex flex-col gap-4">
                <button onClick={() => addToCart(product)} className="block bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-pink-700 transition">
                    Add to Cart
                </button>
                
                <button>
                    <a href="/products" className="block bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-400 transition">
                        Return to Shop
                    </a>
                </button>
                </div>
            </div>
        </main>
    )
}