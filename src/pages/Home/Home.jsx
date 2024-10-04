import React from 'react';
import Landing from './Landing';
import TrustedPartner from './TrustedPartner';
import CaseStudies from './CaseStudies';
import Capabilities from './Capabilities.jsx';
import Industry from './Industry';
import Testimonial from './Testimonial';
import OurOffices from './OurOffices';
const Home = () => {
  return (
    <div>
        <Landing/>
        <TrustedPartner/>
        <CaseStudies/>
        <Capabilities/>
        <Industry/>
        <Testimonial/>
        <OurOffices/>
    </div>    
  )
}
export default Home;
