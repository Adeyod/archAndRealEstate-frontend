import { FaTruck } from 'react-icons/fa';

const Features = () => {
  return (
    <div>
      <section className="min-h-screen bg-gray-50 py-16 px-8 md:px-20 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-20">
          Why Choose NaijaCourier?
        </h2>
        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div className="p-6 shadow-lg h-75 gap-8 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-[18px]">
              Speedy delivery across states with real-time tracking.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-8 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Trusted Riders</h3>
            <p className="text-[18px]">
              Verified and professional riders handle your packages.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-8 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Secure Payments</h3>
            <p className="text-[18px]">
              Multiple payment options with full transaction security.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
