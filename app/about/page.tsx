import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            عن فندق العندليب
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تأسس فندق العندليب عام ١٩٥٢، وكان منارة للفخامة والضيافة، 
            يقدم خدمة عالمية المستوى وتجارب لا تُنسى لأكثر من سبعة عقود.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              width={400}
              height={384}
              src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hotel lobby"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-amiri">قصتنا</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تأسس فندق العندليب على يد عائلة الأشراف المرموقة، وبدأ كرؤية 
                لإنشاء أفضل تجربة ضيافة في المنطقة. ما بدأ كمؤسسة متواضعة من ٥٠ غرفة 
                نما ليصبح وجهة فاخرة تضم ٢٠٠ غرفة وجناح أنيق.
              </p>
              <p className="text-gray-600 leading-relaxed">
                اليوم، نواصل تكريم إرثنا من التميز بينما نتبنى وسائل الراحة الحديثة 
                والممارسات المستدامة. التزامنا بالخدمة الاستثنائية يبقى ثابتاً، 
                مما يضمن أن كل ضيف يشعر وكأنه ملك.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">+٧٠</div>
            <div className="text-gray-600">عاماً من التميز</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">٢٠٠</div>
            <div className="text-gray-600">غرفة فاخرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">+٥٠٠</div>
            <div className="text-gray-600">موظف</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">+٥٠ ألف</div>
            <div className="text-gray-600">ضيف سعيد</div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 font-amiri">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold">العنوان</div>
                  <div className="text-gray-600">شارع السعادة ، وسط السوق القديم، الزرقاء </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold">الهاتف</div>
                  <div className="text-gray-600">+٩٦٦ ١١ ١٢٣ ٤٥٦٧</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold">البريد الإلكتروني</div>
                  <div className="text-gray-600">info@alandalib.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold">الاستقبال</div>
                  <div className="text-gray-600">متاح ٢٤/٧</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 font-amiri">الجوائز والتقدير</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 text-amber-800">٢٠٢٣</Badge>
                <span>فندق فوربس خمس نجوم</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 text-amber-800">٢٠٢٢</Badge>
                <span>الفائز بجوائز السفر العالمية</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 text-amber-800">٢٠٢١</Badge>
                <span>اختيار المسافرين من تريب أدفايزر</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 text-amber-800">٢٠٢٠</Badge>
                <span>جائزة AAA خمس ماسات</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}