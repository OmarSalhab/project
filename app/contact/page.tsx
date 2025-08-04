import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            اتصل بنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تواصل مع فريقنا للحجوزات أو الاستفسارات أو أي مساعدة قد تحتاجها. 
            نحن هنا لجعل إقامتك لا تُنسى.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 font-amiri">أرسل لنا رسالة</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">الاسم الأول</Label>
                  <Input id="firstName" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">اسم العائلة</Label>
                  <Input id="lastName" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input id="phone" type="tel" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message">الرسالة</Label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="كيف يمكننا مساعدتك؟"
                />
              </div>
              
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                إرسال الرسالة
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 font-amiri">معلومات الاتصال</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">العنوان</h4>
                    <p className="text-gray-600">
                      شارع السعادة <br />
                      وسط السوق القديم، الزرقاء <br />
                      المملكة الأردنيه الهاشميه
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">الهاتف</h4>
                    <p className="text-gray-600">
                      الحجوزات: +٩٦٦ ١١ ١٢٣ ٤٥٦٧<br />
                      الكونسيرج: +٩٦٦ ١١ ١٢٣ ٤٥٦٨<br />
                      الرئيسي: +٩٦٦ ١١ ١٢٣ ٤٥٦٩
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">البريد الإلكتروني</h4>
                    <p className="text-gray-600">
                      info@alandalib.com<br />
                      reservations@alandalib.com<br />
                      events@alandalib.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">ساعات العمل</h4>
                    <p className="text-gray-600">
                      مكتب الاستقبال: ٢٤/٧<br />
                      الكونسيرج: ٦:٠٠ ص - ١٠:٠٠ م<br />
                      المطعم: ٦:٠٠ ص - ١١:٠٠ م
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-amiri">خريطة الموقع</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">سيتم دمج الخريطة التفاعلية هنا</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}