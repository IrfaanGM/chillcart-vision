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
      
      {/* Hero Section with AI Chat Integration */}
      <div className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet iCanna, Your Personal Cannabis Shopping Assistant
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get personalized product recommendations, expert advice, and instant answers
                to all your cannabis-related questions.
              </p>
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Start Shopping
              </button>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <h2 className="text-xl font-semibold">iCanna Assistant</h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Hi! I'm iCanna, your personal cannabis shopping assistant. I can help you:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    • Find the perfect products for your needs
                  </li>
                  <li className="flex items-center gap-2">
                    • Learn about different strains and effects
                  </li>
                  <li className="flex items-center gap-2">
                    • Get dosage recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    • Understand THC & CBD content
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  Chat with iCanna
                </button>
              </div>
            </div>
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
                title: "AI-Powered Shopping",
                description: "Get personalized recommendations and instant support from iCanna AI."
              },
              {
                title: "Premium Quality",
                description: "All products are lab-tested and certified for quality and purity."
              },
              {
                title: "Expert Guidance",
                description: "Access professional advice and educational resources 24/7."
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