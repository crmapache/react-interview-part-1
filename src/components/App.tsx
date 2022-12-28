import React from 'react';
import { Slider } from './Slider';

const slides = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
]

function App() {
  return (
    <div className="app">
      <Slider slides={slides} />
    </div>
  );
}

export default App;
