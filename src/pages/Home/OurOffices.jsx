import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Printer } from 'lucide-react';

const offices = [
  {
    name: 'Livonia',
    address: '17177 North Laurel Park Drive, Suite 335, Livonia MI-48152, USA',
    phone: '+1(734)-259-2361',
    fax: '248.692.0392',
  },
  {
    name: 'Atlanta',
    address: '1165 Lawrenceville Suwanee RD, Lawrenceville, GA 30043, USA',
    phone: '+1(734)-377-6001',
    fax: '248.692.0392',
  },
  {
    name: 'Austin',
    address: '3000 Polar Lane #303, Cedar Park, Texas 78613, USA',
    phone: '+1(734)-259-2361',
    fax: '248.692.0392',
  },
  {
    name: 'Hyderabad',
    address: '17177 North Laurel Park Drive, Suite 335, Livonia MI-48152, USA',
    phone: '+1(734)-259-2361',
    fax: '248.692.0392',
  },
  {
    name: 'Chennai',
    address: '17177 North Laurel Park Drive, Suite 335, Livonia MI-48152, USA',
    phone: '+1(734)-259-2361',
    fax: '248.692.0392',
  },
];

const OurOffices = () => {
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
 <div className="sticky top-0 z-0 ">
    <section className="bg-black min-h-screen flex items-center justify-center text-white py-16 px-4">
      <div className="w-full max-w-8xl min-h-96">
        <h2 className="mx-auto text-center text-4xl sm:text-5xl md:text-6xl font-extralight mb-10 sm:mb-16 md:mb-20">Our Offices</h2>
        <div className={`${isMobile ? 'flex flex-col space-y-6' : 'flex flex-wrap justify-center items-start gap-6'}`}>
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              className={`relative text-left ${isMobile ? 'w-full' : 'w-64'}`}
              onMouseEnter={() => !isMobile && setHoveredOffice(office.name)}
              onMouseLeave={() => !isMobile && setHoveredOffice(null)}
            >
              <motion.div
                className={`flex flex-col p-5 rounded-lg h-full ${
                  isMobile
                    ? 'bg-[#222]'  // Solid dark background for mobile
                    : hoveredOffice === office.name
                    ? 'bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2]' // Gradient for desktop hover
                    : 'bg-transparent'   // Default background color for desktop
                }`}
                initial={{ backgroundColor: 'transparent' }}
                animate={{
                  backgroundColor: isMobile ? '#222' : hoveredOffice === office.name ? 'rgb(128, 0, 128)' : 'transparent',
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4"
                  layout
                >
                  {office.name}
                </motion.span>
                <AnimatePresence>
                  {(isMobile || hoveredOffice === office.name) && (
                    <motion.div
                      initial={isMobile ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={isMobile ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <motion.div
                        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <p className="text-sm sm:text-base mt-2">{office.address}</p>
                        <div className="flex items-center mt-1">
                          <Phone size={16} className="mr-2" />
                          <p className="text-sm sm:text-base">{office.phone}</p>
                        </div>
                        <div className="flex items-center mt-1">
                          <Printer size={16} className="mr-2" />
                          <p className="text-sm sm:text-base">{office.fax}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isMobile && (
                  <motion.span
                    className={`absolute right-4 bottom-8  transform text-2xl sm:text-3xl ${
                      hoveredOffice === office.name ? 'rotate-0' : '-rotate-45'
                    }`}
                    animate={{ rotate: hoveredOffice === office.name ? 0 : -45 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    &#8594;
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default OurOffices;
