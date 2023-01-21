import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { EmployeeList } from "./components/EmployeeList";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavigationBar></NavigationBar>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/employees-list" element={<EmployeeList />}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
