import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James O.',
    role: 'Small Business Owner',
    text: 'NaijaCourier delivered my goods in record time! Their riders are professional, and I could track every step of the way. It’s a service I can trust anytime.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 2,
    name: 'Amina K.',
    role: 'Online Store Manager',
    text: 'Reliable and easy to use! Scheduling deliveries has never been simpler, and my customers always get their packages on time. Highly recommend NaijaCourier!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    name: 'Chinedu M.',
    role: 'Corporate Client',
    text: 'Customer support is top-notch! They handled my issue in minutes and ensured my parcels were rerouted seamlessly. Definitely a service built for Nigerians.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?img=7',
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-linear-to-b from-gray-50 to-gray-100 py-24 px-8 md:px-20 text-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-6"
      >
        What Our Users Say
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Hear from some of our satisfied customers who trust us with their
        deliveries every day.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map(({ id, name, role, text, rating, image }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <div className="flex justify-center mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{text}”</p>
              <h4 className="font-semibold text-lg">{name}</h4>
              <span className="text-sm text-gray-500">{role}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional decorative element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 -z-10"></div>
    </section>
  );
};

export default Testimonials;
