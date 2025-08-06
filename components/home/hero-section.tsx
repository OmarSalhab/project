import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.sheridan.com.au/media/catalog/product/cache/1a5f5d73a92ee4b99248fb53f4969f03/1/0/1000tc-hotel-luxury-sheet-set-white-97723.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-amiri">
          أهلاً وسهلاً بكم في
          <span className="block text-amber-400">فندق ______</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
          استمتع بفخامة لا مثيل لها وخدمة استثنائية ولحظات لا تُنسى 
          في قلب أرقى مواقع المدينة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              احجز إقامتك
              <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
            </Button>
          </Link>
          <Link href="/rooms">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-amber-500 hover:bg-transparent hover:text-white px-8 py-4 text-lg"
            >
              استكشف الغرف
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}