import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import LuxuryBrands from '@/components/LuxuryBrands';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <LuxuryBrands />
    </div>
  );
};

export default Index;
