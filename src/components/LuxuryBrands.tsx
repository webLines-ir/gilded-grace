import { Card } from '@/components/ui/card';

const brands = [
  { name: 'تیفانی اند کو', description: 'نماد لوکس و زیبایی' },
  { name: 'کارتیه', description: 'هنر جواهرسازی فرانسوی' },
  { name: 'بولگاری', description: 'طراحی ایتالیایی منحصر به فرد' },
  { name: 'ون کلیف آرپلز', description: 'شاهکارهای جواهرسازی' },
  { name: 'هری وینستون', description: 'پادشاه الماس' },
  { name: 'شوپارد', description: 'سنت سوئیسی لوکس' },
];

const LuxuryBrands = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="text-gradient">برندهای معتبر</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            همکاری با برترین و معتبرترین برندهای جواهرسازی جهان
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="card-luxury hover-lift group p-8 text-center cursor-pointer"
            >
              {/* Brand Initial Circle */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:animate-luxury-glow transition-all duration-300">
                <span className="text-2xl font-playfair font-bold text-primary-foreground">
                  {brand.name.charAt(0)}
                </span>
              </div>
              
              {/* Brand Name */}
              <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              
              {/* Brand Description */}
              <p className="text-muted-foreground">
                {brand.description}
              </p>
              
              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-gradient-primary mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-12 bg-gradient-elegant rounded-2xl">
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            عضویت در خانواده VIP
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            برای دریافت جدیدترین کلکسیون‌ها، تخفیفات ویژه و دعوتنامه‌های رویدادهای خصوصی عضو شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ایمیل شما"
              className="flex-1 px-6 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-8 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-medium transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryBrands;