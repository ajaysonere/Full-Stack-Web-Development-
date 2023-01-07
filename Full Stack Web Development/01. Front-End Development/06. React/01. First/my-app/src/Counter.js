import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state = {score:0}
    }
    render(){
        return(
            <>
                <h1>{this.state.score}</h1>
                <input type="button" value="+" ></input>
                <input type="button" value="-"></input>
            </>
        );
    }
}