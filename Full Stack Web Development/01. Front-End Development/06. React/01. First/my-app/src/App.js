import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Counter } from "./components/Counter";
import { Sign } from "./components/Sign";
import { Userlist } from "./components/Userlist";
// import { Navbar } from "./components/Navbar";

function App() {
   return (
      <>
         <BrowserRouter>
           <Nav></Nav>
           <Routes>
            <Route path="/" exact element={ <Counter ></Counter>} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/usersData" element={<Userlist></Userlist>}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App;
