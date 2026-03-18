import { TypeAnimation } from 'react-type-animation';
import HeroCarousel from './HeroCarousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
  return (
    <div className="mt-16.5">
      <header className="relative w-full h-screen overflow-hidden">
        {' '}
        <HeroCarousel />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fast & Reliable Logistics You Can Trust
          </h1>
          <TypeAnimation
            sequence={[
              'Delivering speed, safety, and satisfaction — every single time.',
              2000,
              'Connecting people, businesses, and packages — seamlessly.',
              2000,
              'From pickup to delivery — we handle it all with precision.',
              2000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            className="text-xl md:text-2xl font-medium text-primary-blue"
          />
        </div>
        <div className="bg-black/50 p-6 rounded-2xl shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Reliable Logistics You Can Trust
          </h1>

          <TypeAnimation
            sequence={[
              'Delivering speed, safety, and satisfaction — every single time.',
              2000,
              'Connecting people, businesses, and packages — seamlessly.',
              2000,
              'From pickup to delivery — we handle it all with precision.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl font-medium text-yellow-300"
          />
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
