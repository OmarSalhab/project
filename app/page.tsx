import { HeroSection } from '@/components/home/hero-section';
import { FeaturedRooms } from '@/components/home/featured-rooms';
import { AmenitiesSection } from '@/components/home/amenities-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedRooms />
      <AmenitiesSection />
      <TestimonialsSection />
    </div>
  );
}