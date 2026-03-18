import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const TrackingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative bg-gray-50 py-20 px-8 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 items-center my-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Track Your Package in Real Time
        </h2>
        <p className="text-gray-600 text-2xl max-w-2xl mx-auto mb-8">
          Stay updated on your delivery progress. Know exactly where your
          package is — from dispatch to doorstep.
        </p>

        <Button
          onClick={() => navigate('/track-package')}
          className="px-8 py-4 text-lg cursor-pointer active:text-sm bg-primary-blue hover:bg-orange-700 text-white rounded-lg shadow-lg transition"
        >
          Go to Tracking Page
        </Button>
      </motion.div>

      {/* Decorative background or image (optional) */}
      <div className="absolute inset-0 bg-[url('/images/tracking-bg.jpg')] bg-cover bg-center opacity-10 -z-10"></div>
    </section>
  );
};

export default TrackingSection;
