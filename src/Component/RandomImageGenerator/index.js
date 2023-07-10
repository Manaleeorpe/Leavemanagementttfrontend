import React, { useState, useEffect } from 'react';

const RandomImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=MO3p6QiYS_SUSD3cB8YGVD2YXoRMxLPmbguzBFb7VSM');
        const data = await response.json();
        setImageUrl(data.urls.regular);
      } catch (error) {
        console.log('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Random Image" />
      )}
    </div>
  );
};

export default RandomImageGenerator;
