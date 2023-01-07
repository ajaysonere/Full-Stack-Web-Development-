import { Header } from "./Header";
import { Navbar } from "./Navbar";

function App() {
    const navbar = <Navbar></Navbar>
   return (
             <> 
                <Navbar></Navbar>
                <h1>Hello World </h1>
                <Header heading = "This content from heading props " text = "this data form text props " navbar = {navbar}></Header>
             </>
         );
}

export default App;
