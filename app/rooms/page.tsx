import { RoomCard } from '@/components/rooms/room-card';
import { Button } from '@/components/ui/button';
import { rooms } from '@/lib/data/rooms';

export default function RoomsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            غرفنا وأجنحتنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اختر من مجموعة أماكن الإقامة الفاخرة لدينا، كل منها مصمم لتوفير 
            المزيج المثالي من الراحة والأناقة ووسائل الراحة الحديثة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}