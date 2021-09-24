import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route path="/about/:name" component={AboutComponent} />
          <Route path="/" component={ChildComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const ChildComponent = () => {
  const history = useHistory();

  console.log(history);

  const handleClick = (name) => {
    history.push(`/about/${name}`);
  };

  const rich = "Rich Dad Poor Dad";
  const richest = "The richest man in Babylon";

  return (
    <div>
      <h1>Some Page</h1>
      <p>Some text</p>
      <button onClick={() => handleClick(rich)}>To {rich}</button>
      <button onClick={() => handleClick(richest)}>To {richest}</button>
    </div>
  );
};

const HeaderComponent = () => {
  const location = useLocation();
  const history = useHistory();
  
  console.log("location:");
  console.log(location);

  console.log("history:");
  console.log(history);

  const handleBackClick = () => {
    history.goBack();
  };

  const atAboutPage = location.pathname.includes("/about");

  return atAboutPage && <button onClick={handleBackClick}>Back</button>;
};

const AboutComponent = () => {
  const { name } = useParams();
  console.log("params");
  console.log(useParams());

  const match = useRouteMatch("/about/The richest man in Babylon");
  console.log("match");
  console.log(match);

  const showBuyButton = match && match.isExact;

  return (
    <div>
      <h1>About {name}</h1>
      {showBuyButton && <button>Buy Now</button>}
    </div>
  );
};

export default App;
