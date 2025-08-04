import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'سندس عبدالملك',
    location: 'الرياض، السعودية',
    rating: 5,
    text: 'تجربة رائعة بكل معنى الكلمة! تجاوز الموظفون كل التوقعات لجعل احتفالنا بذكرى الزواج مثالياً. الغرفة كانت خلابة والخدمة لا تشوبها شائبة.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'محمد العلي',
    location: 'بغداد، العراق',
    rating: 5,
    text: 'فندق القصر الكبير فاق كل التوقعات. منذ لحظة وصولنا، شعرنا وكأننا ملوك. الوسائل عالمية المستوى والموقع مثالي.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'فاطمة الزهراني',
    location: 'العقبة، الأردن',
    rating: 5,
    text: 'هذا الفندق جوهرة حقيقية. الاهتمام بالتفاصيل مذهل، وخدمات السبا متميزة. لا أطيق الانتظار للعودة مرة أخرى لعطلة مريحة.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-amiri">
            ماذا يقول ضيوفنا
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            اقرأ شهادات ضيوفنا الكرام الذين اختبروا 
            الضيافة الاستثنائية في فندق العندليب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                width={48}
                height={48}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}