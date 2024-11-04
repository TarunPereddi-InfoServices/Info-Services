import React from 'react';
import logo1 from '../../assets/images/logo/logo1.png';
import logo2 from '../../assets/images/logo/logo2.png';
import logo3 from '../../assets/images/logo/logo3.png';
import logo4 from '../../assets/images/logo/logo4.png';
import logo5 from '../../assets/images/logo/logo5.png';
import logo6 from '../../assets/images/logo/logo6.svg';
import logo7 from '../../assets/images/logo/logo7.png';
import logo8 from '../../assets/images/logo/logo8.png';

const TrustedPartner = () => {
  const partners = [
    { name: 'Partner 1', logo: logo1 },
    { name: 'Partner 2', logo: logo2 },
    { name: 'Partner 3', logo: logo3 },
    { name: 'Partner 4', logo: logo4 },
    { name: 'Partner 5', logo: logo5 },
    { name: 'Partner 6', logo: logo6 },
    { name: 'Partner 7', logo: logo7 },
    { name: 'Partner 8', logo: logo8 },
  ];

  return (
    <section className="py-16 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-12">Trusted By</h2>
        
        <div className="flex flex-wrap justify-center items-center">
          {partners.map((partner, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center p-5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-12 object-contain"
                />
              </div>
              {index < partners.length - 1 && (
                <div className="h-20 w-px bg-gray-300 mx-2 hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
