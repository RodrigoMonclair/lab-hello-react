import './App.css';
import Nav from './components/Nav';
import Header from './components/Header'
import Button from './components/Button'
import Topics from './components/Topics'
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {


  return (
    <div className="App">
      <Nav />
      <Header />
      <Button />
      <Topics src={icon1} title = "Declarative" text="React makes it painless to create interactive UIs"/>
      <Topics src={icon2} title = "Components" text="Build encapsulated components that manage their state"/>
      <Topics src={icon3} title = "Single-Way" text="A set of immutable values are passed to the component's"/>
      <Topics src={icon4} title = "JSX" text="Statically-typed, designed to run on modern browsers."/>
    </div>
  );
}

export default App;
