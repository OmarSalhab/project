'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, MapPin } from 'lucide-react';
import { rooms } from '@/lib/data/rooms';
import Image from 'next/image';

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('تم إرسال طلب الحجز! سنتواصل معك قريباً.');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-amiri">
            احجز إقامتك
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            احجز غرفتك المثالية واستمتع بالفخامة في أبهى صورها. 
            فريقنا سيضمن أن تكون إقامتك لا تُنسى.
          </p>
        </div>


      



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div>
            <Card className="p-6 sticky top-32">
              <h3 className="text-xl font-bold mb-4 font-amiri">ملخص الحجز</h3>
              
              {selectedRoom && (
                <div className="mb-4">
                  {(() => {
                    const room = rooms.find(r => r.id.toString() === selectedRoom);
                    return room ? (
                      <div>
                        <Image
                          width={300}
                          height={128}
                          src={room.image}
                          alt={room.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-semibold">{room.title}</h4>
                        <p className="text-2xl font-bold text-amber-600">{room.price} ريال/ليلة</p>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-amber-600" />
                  <span>
                    {checkIn && checkOut 
                      ? `${checkIn} - ${checkOut}`
                      : 'اختر التواريخ'
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-amber-600" />
                  <span>{guests === '1' ? 'ضيف واحد' : `${guests} ضيوف`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span>فندق العندليب</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="text-sm text-gray-600 mb-2">
                  * سيتم تأكيد السعر النهائي عبر البريد الإلكتروني
                </div>
                <div className="text-sm text-gray-600">
                  * تطبق سياسة الإلغاء
                </div>
              </div>
            </Card>
          </div>


          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 font-amiri">تفاصيل الحجز</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="room">نوع الغرفة</Label>
                  <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="اختر نوع الغرفة" />
                    </SelectTrigger>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.id.toString()}>
                          {room.title} - {room.price} دينار/ليلة
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="checkIn">تاريخ الوصول</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">تاريخ المغادرة</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">عدد الضيوف</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">ضيف واحد</SelectItem>
                        <SelectItem value="2">ضيفان</SelectItem>
                        <SelectItem value="3">٣ ضيوف</SelectItem>
                        <SelectItem value="4">٤ ضيوف</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests">طلبات خاصة</Label>
                  <textarea
                    id="requests"
                    rows={4}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="أي طلبات أو متطلبات خاصة..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                >
                  إرسال طلب الحجز
                </Button>
              </form>
            </Card>
          </div>

          {/* Booking Summary */}
          
        </div>
      </div>
    </div>
  );
}