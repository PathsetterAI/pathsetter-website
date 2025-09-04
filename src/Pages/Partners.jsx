import { motion } from "framer-motion";
import partner1 from "../../src/assets/Images/Partners/partner1.png";
import partner2 from "../../src/assets/Images/Partners/partner2.png";
import partner3 from "../../src/assets/Images/Partners/partner3.png";
import partner4 from "../../src/assets/Images/Partners/partner4.png";
import partner5 from "../../src/assets/Images/Partners/partner5.png";
import partner6 from "../../src/assets/Images/Partners/partner6.png";

const partners = [
  { name: "Partner 1", logo: partner1 },
  { name: "Partner 2", logo: partner2 },
  { name: "Partner 3", logo: partner3 },
  { name: "Partner 4", logo: partner4 },
  { name: "Partner 5", logo: partner5 },
  { name: "Partner 6", logo: partner6 },
];

const Partners = () => {
  return (
    <div className=" py-16 ">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <h2 className="uppercase text-[#B5C0C9] text-lg  mb-10 tracking-wide">
          Alfred Power Partners
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-18 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
