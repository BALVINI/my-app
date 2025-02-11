

export default function ProductCard({ product }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <a href={`/products/${product.id}`} className="block bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-pink-700 transition">View Product</a>
            </div>
        </div>
    )
}