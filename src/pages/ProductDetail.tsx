import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Share2, 
  Shield, 
  Truck, 
  RotateCcw,
  ChevronLeft,
  Minus,
  Plus
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ringImage from '@/assets/ring-luxury.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'انگشتر الماس سلطنتی',
    brand: 'تیفانی اند کو',
    price: '۲۵,۰۰۰,۰۰۰',
    originalPrice: '۳۰,۰۰۰,۰۰۰',
    images: [ringImage, ringImage, ringImage],
    rating: 5,
    reviewCount: 24,
    category: 'انگشتر',
    material: 'طلای ۱۸ عیار',
    gemstone: 'الماس ۲ قیراط',
    size: '۱۷',
    isNew: true,
    inStock: true,
    description: 'این انگشتر لوکس با طراحی بی‌نظیر و الماس‌های درخشان، نماد زیبایی و اصالت است. ساخته شده از بهترین مواد و با دقت فراوان توسط استادکاران ماهر.',
    features: [
      'الماس طبیعی با کیفیت VVS1',
      'طلای ۱۸ عیار اصل',
      'گارانتی مادام‌العمر',
      'گواهینامه بین‌المللی',
      'طراحی منحصر به فرد'
    ],
    specifications: {
      'وزن کل': '۵.۲ گرم',
      'وزن الماس': '۲ قیراط',
      'رنگ الماس': 'D (بی‌رنگ)',
      'خلوص الماس': 'VVS1',
      'نوع برش': 'برش گرد',
      'اندازه': '۱۷ (قابل تغییر)'
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'انگشتر طلای کلاسیک',
      price: '۱۲,۰۰۰,۰۰۰',
      image: ringImage
    },
    {
      id: 3,
      name: 'انگشتر نگینی',
      price: '۱۸,۰۰۰,۰۰۰',
      image: ringImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">خانه</Link>
          <ChevronLeft className="h-4 w-4 rotate-180" />
          <Link to="/products" className="hover:text-primary">محصولات</Link>
          <ChevronLeft className="h-4 w-4 rotate-180" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4 space-x-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Category */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge variant="outline" className="text-primary border-primary">
                {product.brand}
              </Badge>
              <Badge variant="secondary">
                {product.category}
              </Badge>
              {product.isNew && (
                <Badge className="bg-primary text-primary-foreground">
                  جدید
                </Badge>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-iranSans font-bold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.reviewCount} نظر)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-4xl font-bold text-gradient">
                {product.price}
              </span>
              <span className="text-lg text-muted-foreground">تومان</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice} تومان
                </span>
              )}
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
              <div>
                <span className="text-sm text-muted-foreground">جنس:</span>
                <p className="font-medium">{product.material}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">نگین:</span>
                <p className="font-medium">{product.gemstone}</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-sm font-medium">تعداد:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <Button className="flex-1 btn-luxury text-lg py-6">
                  <ShoppingBag className="h-5 w-5 ml-2" />
                  افزودن به سبد خرید
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">گارانتی اصالت</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">ارسال رایگان</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">۷ روز ضمانت بازگشت</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <Card className="card-luxury p-6">
              <h3 className="text-xl font-iranSans font-semibold mb-4">توضیحات</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              <Separator className="my-4" />
              <h4 className="font-semibold mb-3">ویژگی‌ها:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Specifications */}
            <Card className="card-luxury p-6">
              <h3 className="text-xl font-iranSans font-semibold mb-4">مشخصات فنی</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Care Instructions */}
            <Card className="card-luxury p-6">
              <h3 className="text-xl font-iranSans font-semibold mb-4">نگهداری</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• از تماس با مواد شیمیایی خودداری کنید</p>
                <p>• قبل از شنا و ورزش، جواهر را خارج کنید</p>
                <p>• در جای خشک و امن نگهداری کنید</p>
                <p>• برای تمیزکاری از پارچه نرم استفاده کنید</p>
                <p>• سالی یکبار آن را توسط متخصص بررسی کنید</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-iranSans font-bold mb-8 text-center">
            <span className="text-gradient">محصولات مرتبط</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="card-luxury hover-lift group overflow-hidden">
                <div className="flex">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-iranSans font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-gradient">
                      {item.price} تومان
                    </p>
                    <Link to={`/product/${item.id}`}>
                      <Button className="mt-4 btn-luxury">
                        مشاهده جزئیات
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;