import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import "./style.scss"
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;