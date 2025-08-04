import { Card } from '@/components/ui/card';
import { Wifi, Car, Coffee, Utensils, Waves, Dumbbell, Crown, Shield } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'واي فاي مجاني',
    description: 'إنترنت عالي السرعة في جميع أنحاء الفندق'
  },
  {
    icon: Car,
    title: 'خدمة صف السيارات',
    description: 'خدمة صف السيارات المجانية'
  },
  {
    icon: Coffee,
    title: 'خدمة الغرف ٢٤/٧',
    description: 'خدمة الطعام والمرطبات على مدار الساعة'
  },
  {
    icon: Utensils,
    title: 'مطاعم فاخرة',
    description: 'مطاعم وبارات حائزة على جوائز'
  },
  {
    icon: Waves,
    title: 'سبا فاخر',
    description: 'مركز سبا وعافية متكامل الخدمات'
  },
  {
    icon: Dumbbell,
    title: 'مركز اللياقة البدنية',
    description: 'معدات رياضية حديثة ومتطورة'
  },
  {
    icon: Crown,
    title: 'خدمة الكونسيرج',
    description: 'مساعدة شخصية لجميع احتياجاتك'
  },
  {
    icon: Shield,
    title: 'الأمن والحراسة',
    description: 'أمن ومراقبة على مدار الساعة'
  }
];

export function AmenitiesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            وسائل راحة عالمية المستوى
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استمتع بمرافق وخدمات استثنائية مصممة لجعل إقامتك 
            مريحة ومناسبة ولا تُنسى.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <amenity.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}