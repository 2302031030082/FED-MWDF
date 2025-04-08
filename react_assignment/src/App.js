import logo from "./logo.svg";
import "./App.css";
import JSXIntro from "./JSXIntro";
import Greeting from "./Greeting";
import WelcomeMessage from './WelcomeMessage';
import UserCard from './UserCard';
import Counter from './Counter';
import ClickToggle from './ClickToggle';
import LiveInput from './LiveInput';






function App() {
  return (
    <div className="App">
      <br></br>
      <p>
        {" "}
        <u>Simple Display "Hello React!"</u>
      </p>
      <h1>Hello React!</h1>
      <hr></hr>
      <br></br>
      <p>
        {" "}
        <u>JSX (JavaScript XML) </u>
      </p>
      <JSXIntro />
      <hr></hr>
      <br></br>
      <p>
        <u>Components (Functional & Class Components) </u>{" "}
      </p>
      <p>Task_1:</p>
      <Greeting name="Sapna" />
      <Greeting name="Kishori" />
      <p>Task_2:</p>
      <WelcomeMessage />
<hr></hr>
<br></br>
<p><u>Props and State</u></p>
<p>Task_1:</p>

      <UserCard name="Sapna" age={23} location="Ahmdabad" />
      <UserCard name="Kishori" age={7} location="Ahmdabad" />
      <p>Task_2:</p>
      <Counter />

<hr></hr>
<br></br>
<p><u>Handling Events in React </u></p>
<p>Task_1:</p>
      <ClickToggle />
      <p>Task_2:</p>
      <LiveInput />



    </div>
  );
}

export default App;
