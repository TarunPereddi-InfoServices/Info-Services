
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { MapPin, Phone } from 'lucide-react';
import Atlanta from '../../assets/images/JPEG/Locations/infoservices-atlanta.jpg';
import Austin from '../../assets/images/JPEG/Locations/infoservices-austin.jpg';
import Chennai from '../../assets/images/JPEG/Locations/infoservices-chennai.jpg';
import Hyderabad from '../../assets/images/JPEG/Locations/infoservices-hyderabad.jpg';
import Livonia from '../../assets/images/JPEG/Locations/infoservices-livonia.jpg';

const cities = [
  {
    name: "Livonia",
    country: "US (HQ)",
    timezone: "America/Detroit",
    address: "12345 Headquarters Blvd, Livonia, MI 48150",
    phone: "+1 (555) 123-4567",
    image: Livonia
  },
  {
    name: "Austin",
    country: "US",
    timezone: "America/Chicago",
    address: "789 Tech Avenue, Austin, TX 78701",
    phone: "+1 (555) 987-6543",
    image: Austin
  },
  {
    name: "Atlanta",
    country: "US",
    timezone: "America/New_York",
    address: "456 Peachtree Street, Atlanta, GA 30308",
    phone: "+1 (555) 456-7890",
    image: Atlanta
  },
  {
    name: "Hyderabad",
    country: "India",
    timezone: "Asia/Kolkata",
    address: "Plot No. 123, HITEC City, Hyderabad 500081",
    phone: "+91 40 6789 0123",
    image: Hyderabad
  },
  {
    name: "Chennai",
    country: "India",
    timezone: "Asia/Kolkata",
    address: "1 Anna Salai, Chennai 600002",
    phone: "+91 44 1234 5678",
    image: Chennai
  }
];

function CityPanel({ city }) {
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date().toLocaleString("en-US", { timeZone: city.timezone });
      setTime(new Date(date).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, [city.timezone]);

  return (
    <Card 
      className="relative overflow-hidden w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.75rem)] xl:w-[calc(20%-0.8rem)] h-48 cursor-pointer border-0 border-b-2 border-white rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
        style={{ backgroundImage: `url(${city.image})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <motion.div
        className="absolute inset-x-0 bottom-0 p-3 text-white"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -200 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-normal mb-1" style={{ color: '#e879f9' }}>{city.name}</h2>
        <div className='flex justify-between items-baseline'>
          <p className="text-lg font-light">{city.country}</p>
          <p className="text-xl font-light">{time}</p>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-x-0 bottom-0 p-3 bg-primary bg-opacity-80 backdrop-filter backdrop-blur-sm text-white"
        initial={{ y: '100%' }}
        animate={{ y: isHovered ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start mb-2">
          <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
          <p className="text-base font-light">{city.address}</p>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
          <p className="text-base font-light" style={{ color: '#e879f9' }}>{city.phone}</p>
        </div>
      </motion.div>
    </Card>
  );
}

export default function CityDashboard() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full bg-black">
      {cities.map((city, index) => (
        <CityPanel key={index} city={city} />
      ))}
    </div>
  );
}