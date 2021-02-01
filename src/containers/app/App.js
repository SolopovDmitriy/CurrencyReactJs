import './App.css';
import Clock from "../../components/clock/Clock";
import Button from "../../components/Button/Button";
import CountdownContainer from "../../components/CountdownContainer/CountdownContainer";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";

import CurrencyConverter2 from "../../components/CurrencyConverter2/CurrencyConverter2";
import ConverterButton from "../../components/ConverterButton/ConverterButton";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*    <Clock title={"Разные типы часов"}/>*/}
      {/*</header>*/}
      {/*  <Button buttonValue="Нажми на мну"/>*/}
      {/*  <CountdownContainer />*/}

          <ConverterButton buttonValue="Нажми на мну"/>
    </div>
  );
}

export default App;





