import React, { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  { alt: "AWS logo and conference hall", width: 600, height: 400, className: "col-span-2 row-span-2" },
  { alt: "Group photo at AWS event", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "AWS logo on stage", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Team working on whiteboard", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Group photo in office", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Team photo at event", width: 600, height: 200, className: "col-span-2 row-span-1" },
  { alt: "Office discussion", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Large group photo", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Office building exterior", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Small team photo", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Individual portrait", width: 300, height: 200, className: "col-span-1 row-span-1" },
  { alt: "Team photo outdoors", width: 300, height: 200, className: "col-span-1 row-span-1" },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="bg-[#151515] relative rounded-t-[50px] text-white min-h-screen p-4 sm:p-6 md:p-8 flex flex-col items-center justify-start">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-center mb-2">Gallery</h1>
      <p className="text-center mb-8 text-xs sm:text-sm md:text-base font-extralight max-w-2xl">
        Illuminating instances of achievement illuminating instances of achievement.
      </p>
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 sm:gap-1">
          {galleryImages.map((img, index) => (
            <div key={index} className={`${img.className} overflow-hidden`}>
              <img 
                src={`https://via.placeholder.com/${img.width}x${img.height}?text=${encodeURIComponent(img.alt)}`}
                alt={img.alt} 
                width={img.width} 
                height={img.height} 
                className="w-full h-full object-cover cursor-pointer transition-all duration-300 grayscale"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full">
            <img
              src={`https://via.placeholder.com/${selectedImage.width}x${selectedImage.height}?text=${encodeURIComponent(selectedImage.alt)}`}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery