import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Register } from "./components/Register";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavigationBar></NavigationBar>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
