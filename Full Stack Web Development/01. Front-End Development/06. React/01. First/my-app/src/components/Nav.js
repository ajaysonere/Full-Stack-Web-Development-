import { Link } from "react-router-dom";

export function Nav (){
    return (
        <>
            <ul>
                <li><Link to="/">Score Board</Link></li>
                <li><Link to="/sign">Sign Up</Link></li>
                <li><Link to="/users-data">Users Data On Click</Link></li>
                <li><Link to="/users-list">User List</Link></li>
            </ul>
        </>
    )
}