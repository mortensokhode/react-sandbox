// import './varDefinitions.css';
import './App.css';

// eslint-disable-next-line
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header"
import Skills from "./components/skills"

function App() {
  return (
    <Router>
      <Header></Header>
      <Skills></Skills>
    </Router>
  );
}

export default App;
