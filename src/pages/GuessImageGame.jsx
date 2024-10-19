import React, { useState, useEffect } from "react";

const imageSet = [
  { id: 1, image: "🐔", name: "ayam" },
  { id: 2, image: "🦆", name: "bebek" },
  { id: 3, image: "🐔", name: "ayam" },
  { id: 4, image: "🦆", name: "bebek" },
];

const shuffleImages = () => {
  return imageSet.sort(() => 0.5 - Math.random());
};

const GuessImageGame = () => {
  const [images, setImages] = useState(shuffleImages());
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const handleClick = (index) => {
    if (flippedIndexes.length === 1 && flippedIndexes[0] === index) return;

    setFlippedIndexes((prev) => [...prev, index]);

    if (flippedIndexes.length === 1) {
      const firstImage = images[flippedIndexes[0]];
      const secondImage = images[index];

      if (firstImage.name === secondImage.name) {
        setMatchedIndexes((prev) => [...prev, flippedIndexes[0], index]);
      }

      setTimeout(() => {
        setFlippedIndexes([]);
      }, 1000);
    }
  };

  const isFlipped = (index) =>
    flippedIndexes.includes(index) || matchedIndexes.includes(index);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Guess the Matching Images</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-32 h-32 flex items-center justify-center border rounded-md bg-white shadow-lg cursor-pointer transition-all 
              ${isFlipped(index) ? "bg-green-100" : "bg-blue-500"}
            `}
          >
            {isFlipped(index) ? (
              <span className="text-4xl">{img.image}</span>
            ) : (
              <span className="text-4xl">❓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessImageGame;
