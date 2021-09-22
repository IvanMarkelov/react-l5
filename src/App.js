import React from "react";
import "./App.css";
import FormComp from "./components/FormComp";

const API_KEY = "cb7c781523c1cff1ad725c39ecdde92b";

function App() {

  const gettingWeather = async (e, city) => {
    e.preventDefault();
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    console.log(data);
  }

  return (
    <div className="App">
      <FormComp weatherMethod={gettingWeather}/>
    </div>
  );
}

export default App;
