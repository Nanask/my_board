import "./App.css";
import Main from "./comp/Main";
import Modal from "./comp/Modal";
import BoardContext from "./context/BoardContext";

const App = () => {
  return (
    <div className="App">
      <BoardContext>
        <Modal />
        <Main />
      </BoardContext>
    </div>
  );
};

export default App;
