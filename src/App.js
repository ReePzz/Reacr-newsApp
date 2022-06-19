import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
          <Route path="/" element={<News pagesize={9} country="in" category="business"></News>}/>
              <Route path="/Business" element={<News pagesize={9} country="in" category="business"></News>}/>
              <Route path="/General" element={<News pagesize={9} country="in" category="general"></News>}/>
              <Route path="/Entertainment" element={<News pagesize={9} country="in" category="entertainment"></News>}/>
              <Route path="/Health" element={<News pagesize={9} country="in" category="health"></News>}/>
              <Route path="/Science" element={<News pagesize={9} country="in" category="science"></News>}/>
              <Route path="/Sports" element={<News pagesize={9} country="in" category="sports"></News>}/>
              <Route path="/Technology" element={<News pagesize={9} country="in" category="technology"></News>}/>
          </Routes>
        </div>
      </Router>
      </div>
  );
}

export default App;
