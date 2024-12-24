import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Cannabis Products for Your Wellness Journey
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated selection of high-quality cannabis products,
              designed to enhance your well-being and elevate your lifestyle.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose iCannabis?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "All products are lab-tested and certified for quality and purity."
              },
              {
                title: "Expert Support",
                description: "Our knowledgeable team is here to guide you through your cannabis journey."
              },
              {
                title: "Fast Delivery",
                description: "Quick and discreet shipping right to your doorstep."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;