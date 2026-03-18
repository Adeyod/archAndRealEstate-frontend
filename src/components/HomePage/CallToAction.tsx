import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { UserState } from '../../constants/types';
import { Button } from '../ui/button';

const CallToAction = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state: { user: UserState }) => state.user,
  );

  const handleClick = () => {
    if (!currentUser) {
      navigate('/register');
    } else {
      navigate('/dashboard'); // or wherever logged-in users go
    }
  };

  return (
    <section className="relative bg-orange-600 text-white text-center py-24 px-8 md:px-20 overflow-hidden">
      {/* <section className="py-20 px-4 md:px-10 bg-primary text-white"> */}
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('/images/delivery-bg.jpg')] bg-cover bg-center opacity-10 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Dream Home in Nigeria?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          No matter where you are in the world, we make it easy to design,
          build, and invest in property in Nigeria with complete transparency
          and trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleClick}
            className="cursor-pointer px-3 py-4 text-md bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            {currentUser ? 'Go to Dashboard' : 'Get Started'}
          </Button>
          <Button className="cursor-pointer px-3 py-4 text-md bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform">
            Schedule Consultation
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">
          Get real-time updates, verified documentation, and expert guidance
          every step of the way.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
