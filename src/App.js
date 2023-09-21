import { Component } from "react";
import "./App.css";

import Header from "./component/Header";
import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";
import EventPractice from "./component/EventPractice";
import ValidationSample from "./component/ValidationSample";
import ScrollBox from "./component/ScrollBox";
import IterationSample from "./component/IterationSample";
import LifeCycleSample from "./component/LifeCycleSample";
import Counter2 from "./component/Counter2";
import Info from "./component/Info";
import Counter3 from "./component/Counter3";
import Average from "./component/Average";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MyComponent name="React" favoriteNumber={2}>
          리액트
        </MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <br />
        <IterationSample />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
        <Counter2 />
        <Info />
        <Counter3 />
        <Average />
      </div>
    );
  }
}

export default App;
