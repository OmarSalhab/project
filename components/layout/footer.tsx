import Link from 'next/link';
import { Crown, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold font-amiri">فندق العندليب</span>
            </div>
            <p className="text-gray-400">
              استمتع بالفخامة والراحة في فندق العندليب. عطلتك المثالية في انتظارك.
            </p>
            <div className="flex gap-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-amber-600">الرئيسية</Link></li>
              <li><Link href="/rooms" className="text-gray-400 hover:text-amber-600">الغرف</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-amber-600">عن الفندق</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-amber-600">احجز الآن</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">الخدمات</h3>
            <ul className="space-y-2 text-gray-400">
              <li>خدمة الغرف</li>
              <li>السبا والعافية</li>
              <li>المطاعم الفاخرة</li>
              <li>قاعات المناسبات</li>
              <li>خدمة الكونسيرج</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">السوق المجمع القديم , شارع السعاده</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">+٩٦٦ ١١ ١٢٣ ٤٥٦٧</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">info@alandalib.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; ٢٠٢٤ فندق العندليب. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}