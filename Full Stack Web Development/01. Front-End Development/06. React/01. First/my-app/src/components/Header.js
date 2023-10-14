// export function Header(props){
//     return (
//         <>
//            <h1>WelCome</h1>
//            <p>This is Our Application </p>
//            <h3>{props.heading}</h3>
//            <h4>{props.text}</h4>
//            <p>{props.navbar}</p>
//         </>
//     );
// }

import { Component } from "react";

export class Header extends Component{
    render(){
        return(
            <>
               <h1>{this.props.heading}</h1>
               <p>{this.props.navbar}</p>
            </>
        );
    }
}