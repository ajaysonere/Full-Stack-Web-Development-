// import { Counter } from "./Counter";
// import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { SignupForm } from "./SignupForm";


function App() {
    // const navbar = <Navbar></Navbar>
   return (
             <> 
                <Navbar></Navbar>
                <h1>Hello World </h1>
                {/* <Header heading = "Welcome to home " text = "this data form text props " navbar = {navbar}></Header>
                <Counter></Counter> */}
                <SignupForm></SignupForm>
             </>
         );
}

export default App;
