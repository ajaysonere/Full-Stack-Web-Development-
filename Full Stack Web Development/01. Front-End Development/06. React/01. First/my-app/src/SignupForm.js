import { Component } from "react";

export class SignupForm extends Component{
    constructor(){
        super();
        this.state= {formData : {}};
    }
    // handleNameChange=(event)=>{
    //    console.log(event.target.value);
    //    this.setState({formData:{...this.state.formData,name:event.target.value}})
    // }
    // handlePasswordChange = (event)=>{
    //     this.setState({formData:{...this.state.formData , password:event.target.value}})
    // }
    // handlePhoneChange = (event)=>{
    //     this.setState({formData:{...this.state.formData ,phone:event.target.value}})
    // }
    // handleEmailChange = (event) => {
    //     this.setState({  formData: {...this.state.formData ,email: event.target.value } })
    // }

    handleInputChange = (event)=>{
        this.setState({formData:{...this.state.formData, [event.target.name]:event.target.value}})
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state.formData);
    }
    render(){
        return(
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