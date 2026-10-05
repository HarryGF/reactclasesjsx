import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './Components/Contador';
import DibujosComplejosArray from './Components/DibujosComplejosArray';
import DibujosComplejosRender from './Components/DibujosComplejosRender';
import PadreDeporte from './Components/ComunicacionDeporte/PadreDeporte';
import Padre from './Components/PracticaComunicacion/Padre';
import PadreComics from './Components/Comics/PadreComics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Contador inicio="5"/>
    <Contador inicio="15"/>
    <DibujosComplejosArray/>
    <DibujosComplejosRender/>
    <PadreDeporte/>
    <Padre/>*/}
    <PadreComics/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
