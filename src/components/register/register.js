import React, {Component} from 'react';

class Register extends Component
{

constructor(props)
{
  super(props);
  this.state={
    email:'',
    password:'',
    name:''
  };
}

onEmailChange=(event)=>{
  this.setState({email:event.target.value});
}

onPasswordChange=(event)=>{
  this.setState({password:event.target.value});
}

onNameChange=(event)=>{
  this.setState({name:event.target.value});
}

onRegisterSubmit=()=>{
  if(this.state.email.length>0&&this.state.password.length>0&&this.state.name.length>0)
  {
    fetch('http://localhost:3006/register',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        name:this.state.name,
        entries:0,
        time:new Date(),
        id:''
      })
    })
    .then(response=>response.json())
    .then((data)=>{
      if(data==='success')
      this.props.changeState("signin");
      else {
        console.log("error registering");
      }
    })
  }


}

render()
{
  return (

  	<div className="center">
  		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 h9 shadow-4">

	  		<main className="pa4 black-80 ">
			  <div className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Registration</legend>
			      <div className="ma2 mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
			        <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              onChange={this.onNameChange}
              />
			      </div>
			      <div className="ma2 mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
                onChange={this.onEmailChange}
                />
			      </div>
			      <div className="ma2 mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
                onChange={this.onPasswordChange}
              />
			      </div>

			     </fieldset>

			    <div className="mt2 center">
			      <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="button"
            value="confirm"
            onClick={this.onRegisterSubmit}
            />
			    </div>
			  </div>
			</main>
		</article>
  	</div>

  );
}
}

export default Register;
