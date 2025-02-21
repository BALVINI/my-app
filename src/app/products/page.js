"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";


export default function ProductsPage() { 
    const [searchQuery, setSearchQuery] = useState("");
    
    const products = [
        { id: 1, name: "Rose Bouquet", price: 29.99, image: "flowers/rose.jpeg" },
        { id: 2, name: "Tulip Delight", price: 24.99, image: "flowers/tulip.jpg" },
        { id: 3, name: "Sunflower Bliss", price: 19.99, image: "flowers/sunflower.jpg" },
        { id: 4, name: "Orchid Elegance", price: 39.99, image: "flowers/orchid.jpg" },
      ];

      const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Flowers</h1>

                <input type="text"
                placeholder="Search for flowers..."
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 mb-4 border text-black rounded-lg focus:outline-none focus:ring-pink-400"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-gray-600 col-span-full text-center">No flowers found.</p>
                    )}
                    
                </div>
            </div>
        </main>
    ) 
}