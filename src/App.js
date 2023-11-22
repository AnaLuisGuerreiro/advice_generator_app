import IdAdvice from "./components/IdAdvice/IdAdvice.jsx";
import Advice from "./components/Advice/Advice.jsx";
import ButtonGenerate from "./components/ButtonGenerate/ButtonGenerate.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <IdAdvice />
        <Advice />
        <ButtonGenerate />
      </div>
    </div>
  );
}

export default App;
