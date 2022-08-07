import MonthlyView from "./pages/MonthlyView";
import SingleView from "./pages/SingleView";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

  
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz2zap1qrdVU_17TD04s3XXlylDQAnMhA",
  authDomain: "test-a49c4.firebaseapp.com",
  projectId: "test-a49c4",
  storageBucket: "test-a49c4.appspot.com",
  messagingSenderId: "983316650946",
  appId: "1:983316650946:web:a170c419cfd27470af945b",
  measurementId: "G-RJMHEHSJRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monthly-view" element={<MonthlyView />} />
            <Route path="/monthly-view/:date" element={<SingleView />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
