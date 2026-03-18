import { FaTruck } from 'react-icons/fa';

const Features = () => {
  return (
    <div>
      <section className="min-h-screen bg-gray-50 py-16 px-8 md:px-20 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-20">
          Why Choose Kaybrooks?
        </h2>
        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Expert 3D Visualization
            </h3>
            <p className="text-[15px]">
              See your building before construction starts with realistic 3D
              designs and walkthroughs.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Tailored to Your Needs
            </h3>
            <p className="text-[15px]">
              Every design is customized to fit your lifestyle, budget, and land
              specifications.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">End-to-End Support</h3>
            <p className="text-[15px]">
              We guide you from design to construction, ensuring a smooth and
              stress-free process.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Trusted Property Solutions
            </h3>
            <p className="text-[15px]">
              We offer verified properties and help you make safe, smart
              investment decisions.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Cost-Effective Planning
            </h3>
            <p className="text-[15px]">
              Our designs help you save money by reducing errors and unnecessary
              expenses.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Fast & Reliable Delivery
            </h3>
            <p className="text-[15px]">
              We deliver high-quality work on time, without compromising
              standards.
            </p>
          </div>

          <div className="p-6 shadow-lg h-75 gap-2 items-center justify-center flex flex-col bg-white rounded-lg text-center hover:-translate-y-2 transition">
            <div className="">
              <FaTruck className="font-bold text-4xl" />
            </div>
            <h3 className="text-[18px] font-bold mb-3">
              Client-Focused Approach
            </h3>
            <p className="text-[15px]">
              We work closely with you to ensure your vision becomes reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
