// components/CardSection.tsx
import React from 'react';

const CardSection = () => {
  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
