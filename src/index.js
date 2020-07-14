import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cars = [
  {sn:'12345',model:'Civic',manuf:'Honda',year:2019},
  {sn:'23456',model:'Accord',manuf:'Honda',year:2019},
  {sn:'45678',model:'Corola',manuf:'Toyota',year:2020},
  {sn:'434564',model:'Camry',manuf:'Toyota',year:2019},
  {sn:'232123',model:'370z',manuf:'Nissan',year:2017},
];

const containerStyles = {
  width:'1000px',
  margin:'100px auto'
};


function car(props){
  return (
    <div>
      <h2>{props.model}</h2>
      <h3>{props.manuf}</h3>
      <h3>{props.year}</h3>
      <small>{props.sn}</small>
    </div>
  );
}

function Car({car}){
  return (
    <div>
      <h2>{car.model}</h2>
      <h3>{car.manuf}</h3>
      <h3>{car.year}</h3>
      <small>{car.sn}</small>
    </div>
  );
}

ReactDOM.render(
  <div className='cars' style={containerStyles}>
    <ul>
      {cars.map(c => <li key={c.sn}><Car car={c}/></li>)}
    </ul>
  </div>
  ,
  document.getElementById('root')
);

// ReactDOM.render(
//   <div className='cars' style={containerStyles}>
//     <ul>
//       {cars.map(c => <li key={c.sn}><Car model={c.model} manuf={c.manuf} year={c.year} sn={c.sn}/></li>)}
//     </ul>
//   </div>
//   ,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div className='cars' style={containerStyles}>
//     <ul>
//       {cars.map(c => <li key={c.sn}>{car(c)}</li>)}
//     </ul>
//   </div>
//   ,
//   document.getElementById('root')
// );
