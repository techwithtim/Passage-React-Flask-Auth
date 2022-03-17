import { Route, Routes, BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
