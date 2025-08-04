import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { rooms } from '@/lib/data/rooms';
import { Wifi, Car, Coffee, Tv, Bath, Bed } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface RoomPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id.toString(),
  }));
}

export default function RoomPage({ params }: RoomPageProps) {
  const room = rooms.find((r) => r.id === parseInt(params.id));

  if (!room) {
    notFound();
  }

  const amenityIcons = {
    'واي فاي مجاني': Wifi,
    'موقف سيارات': Car,
    'خدمة الغرف': Coffee,
    'تلفزيون ذكي': Tv,
    'حمام فاخر': Bath,
    'سرير كينغ': Bed,
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Image
              width={400}
              height={500}
              src={room.image}
              alt={room.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image
              width={400}
              height={128}
                src={room.gallery[0]}
                alt="Room view 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <Image
              width={400}
              height={128}
                src={room.gallery[1]}
                alt="Room view 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <Badge className="mb-4">{room.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-amiri">
              {room.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{room.description}</p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">تفاصيل الغرفة</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>المساحة: {room.size}</div>
                <div>السعة: {room.occupancy}</div>
                <div>نوع السرير: {room.bedType}</div>
                <div>الإطلالة: {room.view}</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">وسائل الراحة</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-amber-600">
                    {room.price} دينار
                  </div>
                  <div className="text-sm text-gray-500">في الليلة</div>
                </div>
              </div>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  احجز الآن
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}