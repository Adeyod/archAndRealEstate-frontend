import { motion } from 'framer-motion';
import { FileText, MapPin, Phone, Receipt, User, Video } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const steps = [
  {
    title: 'Consultation',
    description:
      'We understand your needs, budget, and vision from anywhere in the world.',
  },
  {
    title: 'Design & Planning',
    description:
      'We create detailed plans and realistic 3D designs tailored to you.',
  },
  {
    title: 'Approval',
    description:
      'You review, request changes, and approve before execution begins.',
  },
  {
    title: 'Build / Purchase',
    description:
      'We handle construction or help you secure verified properties.',
  },
  {
    title: 'Delivery',
    description:
      'Your project is completed to standard with full transparency.',
  },
];

const trustFeatures = [
  {
    icon: Video,
    title: 'Real-Time Video Updates',
    description: 'Monitor your project progress from anywhere in the world.',
  },
  {
    icon: MapPin,
    title: 'On-Site Tracking',
    description: 'Stay updated on every stage of your project.',
  },
  {
    icon: FileText,
    title: 'Verified Documentation',
    description: 'All properties and processes are secure and legitimate.',
  },
  {
    icon: User,
    title: 'Dedicated Manager',
    description: 'A single point of contact you can always rely on.',
  },
  {
    icon: Phone,
    title: 'Regular Communication',
    description: 'Frequent updates via calls, messages, and reports.',
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    description: 'No hidden costs, no surprises at any stage.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We help you build and invest in property in Nigeria — no matter where
          you are in the world. With real-time video updates, transparent
          processes, and verified documentation, you stay in control every step
          of the way.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white hover:shadow-lg transition"
            >
              <Card key={index} className="rounded-2xl shadow-sm">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-primary mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="rounded-2xl shadow-sm">
                <CardContent className="p-6 text-left">
                  <Icon className="w-6 h-6 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
