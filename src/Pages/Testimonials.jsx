import { motion } from "framer-motion";
import leena from "../../src/assets/Images/Speakers/leena.png";
import manjunath from "../../src/assets/Images/Speakers/manjunath.png";
import rajesh from "../../src/assets/Images/Speakers/rajesh.png";
import srinivasan from "../../src/assets/Images/Speakers/srinivasan.png";
import vivan from "../../src/assets/Images/Speakers/vivan.png";

// Testimonials data with images
const testimonials = [
  {
    name: "Rajesh",
    role: "Project Manager",
    company: "Renewable Energy Company",
    image: rajesh,
    testimonial:
      "Managing our solar farm project across three states used to mean juggling 15 different tools and endless email chains. Alfred’s Communication Hub automatically caught a critical foundation conflict between our WhatsApp updates and MS Project timeline that could have cost us $2M. Now everything flows into one intelligent system that actually understands our work.",
  },
  {
    name: "Manjunath",
    role: "Project Manager",
    company: "Renewable Energy Company",
    image: manjunath,
    testimonial:
      "I was skeptical about AI in project management until Alfred saved our pilot team. The Smart Setup turned a 200-page EPC contract into organized work packages in 3 minutes. When the client requested scope changes mid-project, we had change orders approved and tracked in hours, not weeks. Game changer for complex builds.",
  },
  {
    name: "Vivian",
    role: "Project Head",
    company: "Global Infrastructure Company",
    image: vivan,
    testimonial:
      "Running simultaneous construction projects in four countries was a nightmare before Alfred. The Command Center gives me real-time visibility from high-level portfolio down to individual task status. My teams love how it automatically generates compliance reports for different regulatory bodies. We’ve cut project setup time by 75%.",
  },
  {
    name: "Srinivasan",
    role: "COO",
    company: "Premier EPC Services",
    image: srinivasan,
    testimonial:
      "Alfred transformed how we operate across our $500M project portfolio. The single source of truth eliminated the data conflicts that were killing our margins. Our project managers now spend time managing, not hunting for information. ROI was evident within the first quarter—we’re delivering projects 20% faster with better visibility than ever.",
  },
  {
    name: "Leena",
    role: "Project Sponsor",
    company: "Energy Infrastructure Developer",
    image: leena,
    testimonial:
      "As someone funding these massive EPC projects, Alfred gives me the transparency I need without overwhelming detail. The automated reports show exactly where my investment stands, with every number linked back to its source. No more waiting weeks for status updates or questioning data accuracy during board meetings.",
  },
];

const Testimonials = () => {
  return (
    <div className=" text-white px-2py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="uppercase text-[#B5C0C9] text-lg mb-2 tracking-wide">
            Our Power Users Speak
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="bg-[#1A1C1F] p-6 rounded-2xl shadow-md border border-[#2C2E33] hover:shadow-xl transition-all"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-[#2C2E33] object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-[#EDF5FC]">
                    {item.name}
                    <span className="text-[#AEB4BA] font-normal">
                      , {item.role}
                    </span>
                  </h3>
                  <p className="text-sm text-[#B5C0C9]">{item.company}</p>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-[#D3D7DB] text-sm leading-relaxed">
                "{item.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
