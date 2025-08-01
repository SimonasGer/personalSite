import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Header from "../header/Header";
import Fun from "../fun/Fun";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import "./style.scss"
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Fun/>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
        </Routes>
        <Footer/>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
