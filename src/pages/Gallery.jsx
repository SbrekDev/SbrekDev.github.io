

import React, { useState } from 'react';
import '../stylesheets/Home.css';
import '../stylesheets/Gallery.css';



const images = [

  "src/assets/images/gallery/wallpaperflare.com_wallpaper (4).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (5).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (6).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (7).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (8).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (10).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (11).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (12).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (13).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (14).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (15).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (16).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (17).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (18).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (19).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (20).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (21).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (22).jpg",
"src/assets/images/gallery/wallpaperflare.com_wallpaper (23).jpg"

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <>
      <div className="galeria-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="selectedImg"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div>
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content">
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className="modal-image"
                />
              </div>
                <div className='gallery-buttons'>
                  <button className='modal-btn'>atras</button>
                  <button className='modal-btn' onClick={() => openModal(image)}>siguiente</button>
                </div>
            </div>

        </div>
      )}

    </>
  );
};

export default Gallery;