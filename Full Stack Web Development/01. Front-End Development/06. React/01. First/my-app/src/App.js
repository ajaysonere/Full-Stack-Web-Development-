import { Counter } from "./components/Counter";
// import { Header } from "./Header";
import { Navbar } from "./components/Navbar";
// import { SignupForm } from "./SignupForm";
// import { Userlist } from "./Userlist";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import { Counter } from "./components/Counter";
import { SignupForm } from "./components/SignupForm";

// import { UserTable } from "./components/UserTable";
// import { UsersData } from "./components/UsersData";



function App() {
   return (
             <> 
                <BrowserRouter>
                   <Navbar> </Navbar>
                   <Routes>
                      <Route path="/" element={<Counter />}></Route>
                      <Route path="/signup" element = {<SignupForm></SignupForm>}></Route>
                   </Routes>
                </BrowserRouter>
             </>
         );
}

export default App;
