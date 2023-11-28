import "./App.css";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
