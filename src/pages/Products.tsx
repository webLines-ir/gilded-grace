import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ringImage from '@/assets/ring-luxury.jpg';
import earringsImage from '@/assets/earrings-luxury.jpg';
import watchImage from '@/assets/watch-luxury.jpg';

const products = [
  {
    id: 1,
    name: 'انگشتر الماس سلطنتی',
    brand: 'تیفانی اند کو',
    price: '۲۵,۰۰۰,۰۰۰',
    originalPrice: '۳۰,۰۰۰,۰۰۰',
    image: ringImage,
    rating: 5,
    category: 'انگشتر',
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: 'گوشواره طلا و الماس',
    brand: 'کارتیه',
    price: '۱۸,۵۰۰,۰۰۰',
    originalPrice: null,
    image: earringsImage,
    rating: 5,
    category: 'گوشواره',
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: 'ساعت لوکس برقابی',
    brand: 'رولکس',
    price: '۴۵,۰۰۰,۰۰۰',
    originalPrice: null,
    image: watchImage,
    rating: 5,
    category: 'ساعت',
    isNew: true,
    isSale: false,
  },
  // Duplicate products for demonstration
  {
    id: 4,
    name: 'انگشتر طلای ظریف',
    brand: 'بولگاری',
    price: '۱۲,۰۰۰,۰۰۰',
    originalPrice: '۱۵,۰۰۰,۰۰۰',
    image: ringImage,
    rating: 4,
    category: 'انگشتر',
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: 'گوشواره نگینی',
    brand: 'ون کلیف آرپلز',
    price: '۲۲,۰۰۰,۰۰۰',
    originalPrice: null,
    image: earringsImage,
    rating: 5,
    category: 'گوشواره',
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: 'ساعت کلاسیک',
    brand: 'پاتک فیلیپ',
    price: '۸۵,۰۰۰,۰۰۰',
    originalPrice: null,
    image: watchImage,
    rating: 5,
    category: 'ساعت',
    isNew: false,
    isSale: false,
  },
];

const categories = ['همه', 'انگشتر', 'گوشواره', 'ساعت', 'گردنبند'];
const brands = ['همه', 'تیفانی اند کو', 'کارتیه', 'رولکس', 'بولگاری', 'ون کلیف آرپلز'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [selectedBrand, setSelectedBrand] = useState('همه');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'همه' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'همه' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">مجموعه محصولات</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            کاوش در بهترین و لوکس‌ترین جواهرات از برترین برندهای جهان
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-playfair font-semibold">
              {filteredProducts.length} محصول یافت شد
            </h2>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 ml-2" />
              فیلتر
            </Button>
          </div>

          <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-medium mb-3">دسته‌بندی</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-lg font-medium mb-3">برند</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <Badge
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedBrand === brand 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="card-luxury hover-lift group overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <Badge className="bg-primary text-primary-foreground">
                      جدید
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      تخفیف
                    </Badge>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 space-x-reverse">
                  <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-primary hover:text-primary-foreground">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Link to={`/product/${product.id}`}>
                    <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-primary hover:text-primary-foreground">
                      <Eye className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{product.brand}</p>
                <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-2xl font-bold text-gradient">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">تومان</span>
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice} تومان
                    </span>
                  )}
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full btn-luxury">
                    مشاهده جزئیات
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-elegant px-8 py-4">
            نمایش محصولات بیشتر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;