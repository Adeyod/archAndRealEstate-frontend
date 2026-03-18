import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { UserState } from '../../constants/types';
import { Button } from '../ui/button';

const CallToAction = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state: { user: UserState }) => state.user
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
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('/images/delivery-bg.jpg')] bg-cover bg-center opacity-10 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Send Your Package?
        </h2>
        <p className="text-lg text-orange-100 mb-8">
          Join thousands of users who trust NaijaCourier to deliver swiftly and
          safely across Nigeria.
        </p>

        <Button
          onClick={handleClick}
          className="px-8 py-4 text-lg bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          {currentUser ? 'Go to Dashboard' : 'Get Started'}
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
