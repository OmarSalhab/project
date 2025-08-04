import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { rooms } from '@/lib/data/rooms';
import Image from 'next/image';

export function FeaturedRooms() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            الغرف المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف أشهر أماكن الإقامة لدينا، كل منها مصمم لتوفير 
            أقصى درجات الراحة والفخامة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  width={400}
                  height={256}
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                  {room.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-amiri">{room.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">
                    {room.price} دينار
                    <span className="text-sm text-gray-500 font-normal">/ليلة</span>
                  </div>
                  <Link href={`/rooms/${room.id}`}>
                    <Button variant="outline" size="sm">
                      عرض التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/rooms">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              عرض جميع الغرف
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}