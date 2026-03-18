import { motion } from 'framer-motion';
import { Bike, CheckCircle, MapPin, Package } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create Shipment',
    icon: Package,
    description:
      'Easily schedule your delivery by providing package details, pickup, and destination addresses — all in a few clicks.',
  },
  {
    id: 2,
    title: 'Assign Rider',
    icon: Bike,
    description:
      'We assign rider to your delivery for faster and more efficient service.',
  },
  {
    id: 3,
    title: 'Track Package',
    icon: MapPin,
    description:
      'Stay updated every step of the way. Track your package in real time and receive instant notifications.',
  },
  {
    id: 4,
    title: 'Delivered Safely',
    icon: CheckCircle,
    description:
      'Your package is delivered securely and promptly to its destination — satisfaction guaranteed.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-8 md:px-20 bg-gray-50 text-gray-900">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        How It Works
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We make deliveries effortless — from booking to doorstep delivery.
        Here’s how our process ensures fast and reliable service every time.
      </p>

      <div className="grid gap-10 md:grid-cols-4 mt-10 text-center">
        {steps.map(({ id, title, icon: Icon, description }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-blue text-white text-3xl mb-4">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
