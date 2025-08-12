import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ringImage from '@/assets/ring-luxury.jpg';
import earringsImage from '@/assets/earrings-luxury.jpg';
import watchImage from '@/assets/watch-luxury.jpg';

const featuredProducts = [
  {
    id: 1,
    name: 'انگشتر الماس سلطنتی',
    brand: 'تیفانی اند کو',
    price: '۲۵,۰۰۰,۰۰۰',
    originalPrice: '۳۰,۰۰۰,۰۰۰',
    image: ringImage,
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    name: 'گوشواره طلا و الماس',
    brand: 'کارتیه',
    price: '۱۸,۵۰۰,۰۰۰',
    originalPrice: null,
    image: earringsImage,
    rating: 5,
    isNew: false,
  },
  {
    id: 3,
    name: 'ساعت لوکس برقابی',
    brand: 'رولکس',
    price: '۴۵,۰۰۰,۰۰۰',
    originalPrice: null,
    image: watchImage,
    rating: 5,
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-iranSans font-bold mb-6">
            <span className="text-gradient">محصولات ویژه</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-iranSans">
            برترین و لوکس‌ترین جواهرات از معتبرترین برندهای جهان
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="card-luxury hover-lift group overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      جدید
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      تخفیف
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 space-x-reverse">
                  <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-primary hover:text-primary-foreground">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-primary hover:text-primary-foreground">
                    <Eye className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Brand */}
                <p className="text-sm text-primary font-medium mb-2">{product.brand}</p>
                
                {/* Name */}
                <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Price */}
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
                
                {/* CTA Button */}
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full btn-luxury">
                    مشاهده جزئیات
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" className="btn-elegant text-lg px-8 py-4">
              مشاهده همه محصولات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;