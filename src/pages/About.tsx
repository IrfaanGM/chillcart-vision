import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">About iCanna</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                iCanna is your premier destination for high-quality cannabis products and accessories. 
                Founded with a vision to provide safe, reliable access to premium cannabis products, 
                we've grown to become a trusted name in the industry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We're committed to promoting wellness through carefully curated cannabis products. 
                Our mission is to educate, serve, and support our community while providing the 
                highest quality products available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Quality Assurance</h2>
              <p className="text-gray-600 leading-relaxed">
                Every product in our inventory undergoes rigorous quality testing. We partner with 
                trusted suppliers and manufacturers to ensure you receive only the best cannabis 
                products that meet our strict standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Community Focus</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in building a strong, informed cannabis community. Through education 
                and exceptional service, we're helping to normalize and destigmatize cannabis use 
                while promoting responsible consumption.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;