import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";
import EventPractice from "./component/EventPractice";
import ValidationSample from "./component/ValidationSample";
import ScrollBox from "./component/ScrollBox";

const App = () => {
  return (
    <>
      <MyComponent name="React" favoriteNumber={2}>
        리액트
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
      <ValidationSample />
      <ScrollBox />
    </>
  );
};

export default App;
