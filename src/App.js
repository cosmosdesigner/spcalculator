
import './App.css';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import './style/main.css'
import { useEffect } from 'react';

function App() {
  const percentageWeight = 0.33;
  const [value, setValue] = useState({ 'tempo': 0, 'complexidade': 0, 'risco': 0 });
  const [sp, setSp] = useState(0);
  var sumOfAllFactors = 0;

  function valuetext(value) {
    return `${value}`;
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.ariaLabel]: e.target.ariaValueText })
  }
  useEffect(() => {
    sumOfAllFactors = (value.tempo * percentageWeight + value.complexidade * percentageWeight + value.risco * percentageWeight) * 10;
    switch (true) {
      case sumOfAllFactors > 0 && sumOfAllFactors < 15: setSp(1); break;
      case sumOfAllFactors > 15 && sumOfAllFactors < 30: setSp(2); break;
      case sumOfAllFactors > 30 && sumOfAllFactors < 45: setSp(3); break;
      case sumOfAllFactors > 45 && sumOfAllFactors < 60: setSp(5); break;
      case sumOfAllFactors > 60 && sumOfAllFactors < 75: setSp(8); break;
      case sumOfAllFactors > 75 && sumOfAllFactors < 90: setSp(13); break;
      case sumOfAllFactors > 90 && sumOfAllFactors < 100: setSp(21); break;
      default: return 0
    }
  },[value]);


  return (
    <div className='container'>
      <h1>Story points Calculator</h1>
      <p>Os story points são medidas de esforço, baseadas em 3 pilares,<br /> <b>Tempo</b>, <b>Complexidade</b> e <b>Risco/Incerteza</b></p>
      <p>Cada pilar esta dividido de 0 a 10, desliza até ao valor que achas que será a tua User Story, e terás a estimativa da tua US</p>
      <br />
      <Typography gutterBottom>
        Tempo
      </Typography>
      <Slider
        aria-label='tempo'
        defaultValue={0}
        getAriaValueText={valuetext}
        onChange={handleChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      <Typography gutterBottom>
        Complexidade
      </Typography>
      <Slider
        aria-label='complexidade'
        defaultValue={0}
        getAriaValueText={valuetext}
        onChange={handleChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      <Typography gutterBottom>
        Risco / Incerteza
      </Typography>
      <Slider
        aria-label='risco'
        defaultValue={0}
        getAriaValueText={valuetext}
        onChange={handleChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      <br />
      <p>Story Points: <b className="spValue">{sp}</b></p>
      <small>Cada pilar tem o mesmo valor e estamos a limitar as estimativas até 21, com a regra de Fibonacci</small>
    </div>
  );
}

export default App;
