import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const ProjectSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      name: 'Modern Villa in Lagos',
      description:
        'A luxurious modern design with spacious interiors and smart layout.',
      image: '/images/projects/villa-lagos.jpg',
      link: '/projects/modern-villa-lagos',
    },
    {
      name: 'Urban Townhouse',
      description: 'Efficient use of space for a stylish, compact home.',
      image: '/images/projects/urban-townhouse.jpg',
      link: '/projects/urban-townhouse',
    },
    {
      name: 'Beachfront Residence',
      description: 'Elegant 3D design capturing natural light and ocean views.',
      image: '/images/projects/beachfront-residence.jpg',
      link: '/projects/beachfront-residence',
    },
  ];

  return (
    // <section className="min-h-screen relative bg-gray-50 py-20 px-8 md:px-20 text-center">
    //   <motion.div
    //     initial={{ opacity: 0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //     className="flex flex-col gap-10 items-center my-20"
    //   >
    //     <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
    //       Track Your Package in Real Time
    //     </h2>
    //     <p className="text-gray-600 text-2xl max-w-2xl mx-auto mb-8">
    //       Stay updated on your delivery progress. Know exactly where your
    //       package is — from dispatch to doorstep.
    //     </p>

    //     <Button
    //       onClick={() => navigate('/track-package')}
    //       className="px-8 py-4 text-lg cursor-pointer active:text-sm bg-primary-blue hover:bg-orange-700 text-white rounded-lg shadow-lg transition"
    //     >
    //       Go to Tracking Page
    //     </Button>
    //   </motion.div>

    //   {/* Decorative background or image (optional) */}
    //   <div className="absolute inset-0 bg-[url('/images/tracking-bg.jpg')] bg-cover bg-center opacity-10 -z-10"></div>
    // </section>

    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Our Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore some of our past designs and see what we can create for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="relative group block rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {project.name}
              </h3>
              <p className="text-white text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={() => navigate('/projects')}
          className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-2xl cursor-pointer"
        >
          View More Projects
        </Button>
      </div>
    </section>
  );
};

export default ProjectSection;
