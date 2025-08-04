import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Bed, Square } from 'lucide-react';
import Image from 'next/image';

interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size: string;
  occupancy: string;
  bedType: string;
}

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          width={400}
          height={257}
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
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{room.occupancy}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{room.bedType}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-600">
            {room.price} دينار
            <span className="text-sm text-gray-500 font-normal">/ليلة</span>
          </div>
          <div className="flex gap-2">
            <Link href={`/rooms/${room.id}`}>
              <Button variant="outline" size="sm">
                عرض التفاصيل
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                احجز الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}