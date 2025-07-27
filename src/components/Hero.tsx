import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-jewelry.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Jewelry Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-luxury-float">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">برترین کلکسیون جواهرات لوکس</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="text-gradient">جواهرات</span>
              <br />
              <span className="text-foreground">بی‌نظیر</span>
              <br />
              <span className="text-gradient">و لوکس</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              مجموعه‌ای منحصر به فرد از زیباترین جواهرات و برندهای معتبر جهان. 
              کیفیت بی‌نظیر، طراحی استثنایی و خدمات حرفه‌ای.
            </p>

            {/* CTA Buttons */}
            <div className="flex space-x-4 space-x-reverse">
              <Button className="btn-luxury text-lg px-8 py-6">
                مشاهده کلکسیون
              </Button>
              <Button variant="outline" className="btn-elegant text-lg px-8 py-6">
                درباره ما
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">محصول لوکس</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">برند معتبر</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-muted-foreground">مشتری راضی</div>
              </div>
            </div>
          </div>

          {/* Right side can have additional content or remain for image showcase */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-luxury-float">
        <div className="w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-luxury-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;