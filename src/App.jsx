import { useState } from 'react';
import clothing from './data';
import './App.css'

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [outfit, setOutfit] = useState({ top: null, bottom: null, shoes: null });


  const generateOutfit = (dressCode) => {
    const tops = clothing.filter((item) => item.type === 'top' && item.dressCode === dressCode);
    const bottoms = clothing.filter((item) => item.type === 'bottom' && item.dressCode === dressCode);
    const shoes = clothing.filter((item) => item.type === 'shoes' && item.dressCode === dressCode);

    setOutfit({
      top: getRandomItem(tops),
      bottom: getRandomItem(bottoms),
      shoes: getRandomItem(shoes),
    });
  };
  return (
    <>
      <div className="App">
      <h1>Outfit Planner</h1>
      <button onClick={() => generateOutfit('casual')}>Casual</button>
      <button onClick={() => generateOutfit('sport')}>Sport</button>
      <button onClick={() => generateOutfit('formal')}>Formal</button>
      {outfit.top && outfit.bottom && outfit.shoes && (
  <div className="outfit">
    <img src={outfit.top.imageUrl} alt={outfit.top.description} />
    <img src={outfit.bottom.imageUrl} alt={outfit.bottom.description} />
    <img src={outfit.shoes.imageUrl} alt={outfit.shoes.description} />
  </div>
)}
    </div>
    </>
  )
}

export default App
