import { Component } from "react";
export class Sign extends Component {
    constructor() {
        super();
        this.state = { formData: {} };
    }
    handleInputChange = (event) => {
        this.setState({ formData: { ...this.state.formData, [event.target.name]: event.target.value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
    }
    render() {
        return (
            <>
                <h1>SIGN UP </h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Name " name="name" onChange={this.handleInputChange}></input> <br></br><br></br>
                    <input type="password" placeholder="********" name="password" onChange={this.handleInputChange}></input> <br></br><br></br>
                    <input type="number" placeholder="+91 9977457455"
                        name="phone" onChange={this.handleInputChange}></input> <br></br><br></br>
                    <input type="email" placeholder="name@gmail.com"
                        name="email" onChange={this.handleInputChange}></input> <br></br><br></br>
                    <input type="submit" value="register"></input>
                </form>
            </>
        );
    }
}