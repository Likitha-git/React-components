import { useState } from "react";
import Button from "./Button/Button";
import InputForm from "./Input/InputForm";
import Loading from "./Loading/Loading/Loading";
import Toggle from "./Toggle/Toggle";
import "./App.css";


function App() {
   const [isLoading, setIsLoading] = useState(false);
   const [isDark, setIsDark] = useState(false);

  function handleToggle() {
    setIsDark(!isDark);
  }
  function startLoading() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <h1>React Components Practice</h1>

      <Toggle isOn={isDark} onToggle={handleToggle} />

       <Button text="Show Loading" onClick={startLoading} />

      {isLoading && <Loading />}

      <InputForm />
    </div>
  );
}

export default App;
