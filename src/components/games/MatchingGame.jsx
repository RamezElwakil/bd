import React, { useState, useEffect } from 'react';

const allImagePaths = [
  '/jbd/lose.png',
  '/jbd/win.png',
  '/jbd/Screenshot 2025-08-01 155736.png',
  '/jbd/Screenshot 2025-08-01 155345.png',
  '/jbd/Screenshot 2025-08-01 155339.png',
  '/jbd/Screenshot 2025-08-01 153252.png',
  '/jbd/Screenshot 2025-08-01 153128.png',
  '/jbd/Screenshot 2025-08-01 153118.png',
  '/jbd/Screenshot 2025-08-01 153015.png',
  '/jbd/Screenshot 2025-08-01 152925.png',
  '/jbd/Screenshot 2025-08-01 152828.png',
  '/jbd/Screenshot 2025-08-01 151929.png',
  '/jbd/Screenshot 2025-08-01 151750.png',
  '/jbd/Screenshot 2025-08-01 151648.png',
  '/jbd/Screenshot 2025-08-01 151508.png',
  '/jbd/Screenshot 2025-08-01 151433.png',
  '/jbd/Screenshot 2025-08-01 151416.png',
  '/jbd/Screenshot 2025-08-01 151400.png',
  '/jbd/Screenshot 2025-08-01 151103.png',
  '/jbd/Screenshot 2025-08-01 150919.png',
  '/jbd/Screenshot 2025-08-01 150152.png',
  '/jbd/Screenshot 2025-08-01 145713.png',
  '/jbd/Screenshot 2025-08-01 145703.png',
  '/jbd/Screenshot 2025-08-01 145640.png',
  '/jbd/٢٠١٥٠٣٠٧_١٩٣٨٢٣.jpg',
  '/public/picccc/Screenshot 2025-08-03 074213.png',
  '/public/picccc/Screenshot 2025-08-03 074126.png',
  '/public/picccc/Screenshot 2025-08-03 074101.png',
  '/public/picccc/Screenshot 2025-08-03 073730.png',
  '/public/picccc/Screenshot 2025-08-03 073645.png',
  '/public/picccc/Screenshot 2025-08-03 073541.png',
  '/public/picccc/Screenshot 2025-08-03 073524.png',
  '/public/picccc/Screenshot 2025-08-03 073516.png',
  '/public/picccc/Screenshot 2025-08-03 073445.png',
  '/public/picccc/Screenshot 2025-08-03 073249.png',
  '/public/picccc/Screenshot 2025-08-03 073210.png',
  '/public/picccc/Screenshot 2025-08-03 072923.png',
  '/public/picccc/Screenshot 2025-08-03 072913.png',
  '/public/picccc/Screenshot 2025-08-03 072852.png',
  '/public/picccc/Screenshot 2025-08-03 072808.png',
  '/public/picccc/Screenshot 2025-08-03 072759.png',
  '/public/picccc/Screenshot 2025-08-03 072747.png',
  '/public/picccc/Screenshot 2025-08-03 072724.png',
  '/public/picccc/Screenshot 2025-08-03 072716.png',
  '/public/picccc/Screenshot 2025-08-03 072703.png',
  '/public/picccc/Screenshot 2025-08-03 072646.png',
  '/public/picccc/Screenshot 2025-08-03 072547.png',
  '/public/picccc/Screenshot 2025-08-03 072204.png',
  '/public/picccc/Screenshot 2025-08-03 072100.png',
  '/public/picccc/Screenshot 2025-08-03 072024.png',
  '/public/picccc/Screenshot 2025-08-03 072016.png',
  '/public/picccc/Screenshot 2025-08-03 072012.png',
  '/public/picccc/Screenshot 2025-08-03 072001.png',
  '/public/picccc/Screenshot 2025-08-03 071952.png'
];

const cardBack = 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Card'; // Placeholder for card back image

const MatchingGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledImages = allImagePaths.sort(() => 0.5 - Math.random());
    const selectedImages = shuffledImages.slice(0, 8);
    const gameImages = [...selectedImages, ...selectedImages];
    const shuffledGameImages = gameImages.sort(() => 0.5 - Math.random());

    setCards(
      shuffledGameImages.map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setFlippedCards([]);
    setMatchedCards([]);
    setCanFlip(true);
  };

  const handleCardClick = (clickedCard) => {
    if (!canFlip || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards((prev) => [...prev, clickedCard]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [card1, card2] = flippedCards;

      if (card1.image === card2.image) {
        // Match found
        setMatchedCards((prev) => [...prev, card1.image]);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === card1.image ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
        setCanFlip(true);
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          const newCards = cards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isFlipped: false } : card
          );
          setCards(newCards);
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Match the Pictures!</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative w-32 h-32 bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-300 transform ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}
            onClick={() => handleCardClick(card)}
            style={{ perspective: '1000px' }}
          >
            <div className={`absolute inset-0 backface-hidden rounded-lg flex items-center justify-center ${card.isFlipped || card.isMatched ? 'hidden' : ''}`}>
              <img src={cardBack} alt="Card Back" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className={`absolute inset-0 backface-hidden rounded-lg ${card.isFlipped || card.isMatched ? '' : 'rotate-y-180'}`}>
              <img src={card.image} alt="Card Front" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        ))}
      </div>
      {matchedCards.length === 8 && (
        <div className="mt-8 text-2xl font-semibold text-green-600">
          Congratulations! You matched all the pictures!
        </div>
      )}
      <button
        onClick={initializeGame}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Restart Game
      </button>
    </div>
  );
};

export default MatchingGame; 