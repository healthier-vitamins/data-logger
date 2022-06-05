import MonthlyView from "./pages/MonthlyView";
import SingleView from "./pages/SingleView";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monthly-view" element={<MonthlyView />} />
            <Route path="/monthly-view/:id" element={<SingleView />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
