import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Chinedu Okafor',
    location: 'London, UK',
    text: 'I was skeptical about building in Nigeria while abroad, but the constant video updates and transparency gave me peace of mind. My house was delivered exactly as promised.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 2,
    name: 'Aisha Bello',
    location: 'Toronto, Canada',
    text: 'The process was smooth from start to finish. I could monitor everything remotely, and the team handled everything professionally.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    name: 'Tunde Adeyemi',
    location: 'Houston, USA',
    text: 'Finding trusted professionals back home was always a challenge until I found this team. Their communication and honesty stood out.',
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
        What Our Clients Say
      </motion.h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We’ve helped clients across the world build and invest in Nigeria with
        confidence. Here’s what they have to say about working with us.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white hover:shadow-xl transition"
          >
            <Card
              key={index}
              className="h-[350px] rounded-2xl shadow-sm text-left"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 md:h-[180px] mb-6">
                  “{testimonial.text}”
                </p>

                {/* User */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Optional decorative element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 -z-10"></div>
    </section>
  );
};

export default Testimonials;
