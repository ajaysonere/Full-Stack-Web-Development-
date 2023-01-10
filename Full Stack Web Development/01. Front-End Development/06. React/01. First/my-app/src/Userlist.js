import { Component } from "react";
import  axios  from "axios";

export class Userlist extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
   async componentDidMount(){
       const response = await axios.get('https://jsonplaceholder.typicode/users');
    
    }
    render() {
        return (
             <>
               <h1>List Of Users </h1>
               <table border="1" cellspacing = "5">
                 <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>Phone</td>
                 </tr>
               </table>
             </>
        );
    }
}