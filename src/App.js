import "./App.css";
import IronhackLogo from "./ironhack-logo.svg";
import MenuTop from "./menu-top.svg";
import ReactLogo from "./react-logo.svg";
import Icon1 from "./icon1.png";
import Icon2 from "./icon2.png";
import Icon3 from "./icon3.png";
import Icon4 from "./icon4.png";

function App() {
  return (
    <div>
      <div className="hero-bcg">
        <header>
          <img src={IronhackLogo} alt="ironhack-logo" />
          <img src={MenuTop} alt="menu-icon" />
        </header>
        <img src={ReactLogo} className="logo" />
        <div className="white">
          <h1>
            Say hello to <br />
            ReactJs
          </h1>
          <span>
            You will learn how to use <br /> the most popular frontend library,{" "}
            <br />
            and become a super Ninja developer.
          </span>
        </div>
        <button>Awesome!</button>
      </div>
      <section class="features">
        <div class="row">
          <div class="column">
            <img src={Icon1} />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>

          <div class="column">
            <img src={Icon2} />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div class="column">
            <img src={Icon3} />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
          </div>

          <div class="column">
            <img src={Icon4} />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
