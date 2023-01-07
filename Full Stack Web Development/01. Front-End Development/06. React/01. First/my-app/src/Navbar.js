// export function Navbar(){
//     return (
//         <div>
//             <ul>
//                 <li><a href="asdj" >Home</a></li>
//                 <li><a href="skaj" >About</a></li>
//                 <li><a href="ajdjd" >Service</a></li>
//                 <li><a href="ajaj" >Contect</a></li>
//             </ul>
//         </div>
//     );
// }

import { Component } from "react";

export class Navbar extends Component{
   render(){
      return(
            <>
              <ul>
                <li><a href="aja"> Home </a></li>
                <li><a href="ajay"> About </a></li>
                <li><a href="ajatt"> Contect </a></li>
                <li><a href="ajaddf"> Service </a></li>

              </ul>
            </>
      );   
   };
}