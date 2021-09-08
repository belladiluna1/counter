import React, { useState } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

const initialCounters = [
  {value: 0,
    id: 1,
    name: "Ложка"},
  {value: 1,
    id: 2,
    name: "Вилка"},
  {value: 0,
    id: 3,
    name: "Нож"}
];

function App() {
  const [counters, setCounters] = useState(initialCounters);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter(c => c.id != counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map(c => {
      if (c.id == counterId) return {...c, value: c.value + 1};
      return c;
    });
    setCounters(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map(c => {
      if (c.id == counterId) {
        return (c.value > 1)?{...c, value: c.value - 1}:{...c, value: 0};
      };
      return c;
    });
    setCounters(updatedCounters);
  };

  const handleReset = () => {
    setCounters(initialCounters);
  }

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a,c) => a + c.value, 0)} />
        <Counters
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        counters={counters} />
      </main>
    </div>
  );
}

export default App;
