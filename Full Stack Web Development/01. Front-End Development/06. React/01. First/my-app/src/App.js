import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Sign } from "./components/Sign";
import { UserTable } from "./components/UserTable";
import { UsersData } from "./components/UsersData";
import { NavigationBar } from "./components/NavigationBar";
// import { Navbar } from "./components/Navbar";

function App() {
   return (
      <>
         <BrowserRouter>
         <NavigationBar></NavigationBar>
           <Routes>
            <Route path="/" exact element={ <Counter ></Counter>} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/usersData" element={<UsersData></UsersData>}></Route>
            <Route path="/UserTable" element={<UserTable></UserTable>}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App;
