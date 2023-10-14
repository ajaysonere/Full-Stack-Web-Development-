import axios from "axios";
import { useEffect, useState } from "react";

export function UserTable (){
   const [users , setUsers] =  useState([]);
   const fetchUsers = async ()=>{
       const responce = await axios.get("https://jsonplaceholder.typicode.com/users/");
       setUsers(responce.data);
   }
   useEffect(()=>{
    fetchUsers();
   },[]);
   return(
      <>
        <h1>List Of Users </h1>
        <table border="1" cellPadding="10" cellSpacing="0">
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
                    users.map((user)=>{
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
      </>
   );
}