import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, name: "Rose Bouquet", price: 29.99, image: "flowers/rose.jpeg" },
    { id: 2, name: "Tulip Delight", price: 24.99, image: "flowers/tulip.jpg" },
    { id: 3, name: "Sunflower Bliss", price: 19.99, image: "flowers/sunflower.jpg" },
    { id: 4, name: "Orchid Elegance", price: 39.99, image: "flowers/orchid.jpg" },
  ];


export default function ProductPage() {
    return (
        <main className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Flowers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product = {product}/>
                    ))}
                    
                </div>
            </div>
        </main>
    ) 
}