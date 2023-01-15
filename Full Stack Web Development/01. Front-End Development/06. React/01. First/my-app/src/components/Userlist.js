import { Component } from "react";
import  axios from "axios";

export class Userlist extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    async componentDidMount(){
       const responce =  await axios.get("https://jsonplaceholder.typicode.com/users");
       console.log(responce);
       this.setState({users:responce.data})
    }
    render() {
        return (
             <>
               <h1>List Of Users </h1>
               <table border="1" cellSpacing = "0" cellPadding= "10">
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((u)=> {
                            return(
                                <tr>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
                 
               </table>
             </>
        );
    }
}