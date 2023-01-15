// export function Navbar(){
//     return (
//         <>
//               <ul>
//                 <li><a href="/">Score Board</a></li>
//                 <li><a href="/signup">Sign Up</a></li>
//                 <li><a href="/users-data">Users Data On Click</a></li>
//                 <li><a href="/users-list">User List</a></li>
//               </ul>
//         </>
//     );
// }

import { Component } from "react";

export class Navbar extends Component{
   render(){
      return(
            <>
                <ul>
                  <li><a href="/">Score Board</a></li>
                  <li><a href="/signup">Sign Up</a></li>
                  <li><a href="/users-data">Users Data On Click</a></li>
                  <li><a href="/users-list">User List</a></li>
                </ul>  
            </>
      );   
   };
}