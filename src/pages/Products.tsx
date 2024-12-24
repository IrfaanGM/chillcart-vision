import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium CBD Oil",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Oils"
  },
  {
    id: 2,
    name: "Relaxing Gummies",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Edibles"
  },
  {
    id: 3,
    name: "Sleep Tincture",
    price: 39.99,
    image: "/placeholder.svg",
    category: "Tinctures"
  },
  {
    id: 4,
    name: "Pain Relief Balm",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Topicals"
  },
  {
    id: 5,
    name: "CBD Vape Pen",
    price: 44.99,
    image: "/placeholder.svg",
    category: "Vapes"
  },
  {
    id: 6,
    name: "Hemp Protein Powder",
    price: 39.99,
    image: "/placeholder.svg",
    category: "Supplements"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;