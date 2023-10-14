import axios from "axios";
import { Component } from "react";

export class UsersData extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isFetched: false
        }
    }
    handleUserData = async () => {
        const responce = await axios.get("https://jsonplaceholder.typicode.com/users/");
        this.setState({ users: responce.data, isFetched: true })
    }

    render() {
        return (
            <>
                <h1> List Of The Data </h1>
                <button onClick={this.handleUserData}>Fetch Data </button>
                {this.state.isFetched ? <table border="1" cellSpacing="0" cellPadding="10">
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
                            this.state.users.map((u) => {
                                return (
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

                </table> : null}
            </>
        )
    }
}