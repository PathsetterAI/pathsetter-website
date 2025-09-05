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
  // Duplicate array so scrolling looks continuous
  const logos = [...partners, ...partners];

  return (
    <div className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="uppercase text-[#B5C0C9] text-lg mb-10 tracking-wide">
          Alfred Power Partners
        </h2>

        {/* Auto-scroll carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20, // speed (higher = slower)
              repeat: Infinity,
            }}
          >
            {logos.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-40 flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
