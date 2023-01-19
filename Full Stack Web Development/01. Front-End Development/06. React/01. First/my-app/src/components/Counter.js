import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state = {score:0}
    }
     handlePlusClick = ()=>{
       this.setState({score:this.state.score+4});
    }
    handleMinusClick = ()=>{
        this.setState({score:this.state.score-1});
    }
    render(){
        return(
            <>
                <h1>{this.state.score}</h1>
                <input type="button" value="+" onClick={this.handlePlusClick}></input>
                <input type="button" value="-" onClick={this.handleMinusClick}></input>
            </>
        );
    }
}
// import { useState } from 'react';

// export function Counter(){
//     const [count,setCount]= useState(0);
//     function handlePlusClick (){
//         setCount(prevCount => prevCount + 4);
//         // setCount(prevCount => prevCount + 4);
//     }
//     const handleMinusClick = ()=>{
//         setCount(count-1);
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <input type="button" value="+" onClick={handlePlusClick}></input>
//             <input type="button" value="-" onClick={handleMinusClick}></input>
//         </>
//     );
// }