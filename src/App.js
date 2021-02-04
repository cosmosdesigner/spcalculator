
import './App.css';
import { useState } from 'react';

function App() {
  const percentageWeight = 0.33;
  const [value, setValue] = useState({ 'tempo': 0, 'complexidade': 0, 'risco': 0 });
  var sumOfAllFactors = 0;


  function handleSum() {
    sumOfAllFactors = (value.tempo * percentageWeight + value.complexidade * percentageWeight + value.risco * percentageWeight) * 10
    switch (true) {
      case sumOfAllFactors > 0 && sumOfAllFactors < 15: return 1
      case sumOfAllFactors > 15 && sumOfAllFactors < 30: return 2
      case sumOfAllFactors > 30 && sumOfAllFactors < 45: return 3
      case sumOfAllFactors > 45 && sumOfAllFactors < 60: return 5
      case sumOfAllFactors > 60 && sumOfAllFactors < 75: return 8
      case sumOfAllFactors > 75 && sumOfAllFactors < 90: return 13
      case sumOfAllFactors > 90 && sumOfAllFactors < 100: return 21
      default: return 0
    }
  };


  return (
    <div>
      <h1>Story points Calculator</h1>
      <p>Os story points são medidas de esforço, baseadas em 3 pilares,<br /> <b>Tempo</b>, <b>Complexidade</b> e <b>Risco/Incerteza</b></p>
      <br />
      <form>
        <label>
          Tempo
          <input name='tempo' type="text" value={value.tempo.toString()} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value !== '' ? parseInt(e.target.value) : parseInt(0) })} />
        </label><br /> <br />
        <label>
          Complexidade
          <input name='complexidade' type="text" value={value.complexidade.toString()} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value !== '' ? parseInt(e.target.value) : parseInt(0) })} />
        </label>
        <br /> <br />
        <label>
          Risco / Incerteza
          <input name='risco' type="text" value={value.risco.toString()} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value !== '' ? parseInt(e.target.value) : parseInt(0) })} />
        </label>
      </form>
      <p>{handleSum()}</p>
    </div>
  );
}

export default App;
