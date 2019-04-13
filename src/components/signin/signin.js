import React from 'react';

const SignIn=({changeState})=>{
  return (
  	
  	<div className="center">
  		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 h9 shadow-4">

	  		<main className="pa4 black-80 ">
			  <div className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="ma2 mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="ma2 mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			     </fieldset>

			     <div className="mb2 center">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>changeState("home")}/>
			    </div>
			    <div className="mt2 center">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="register" onClick={()=>changeState("register")}/>
			    </div>
			  </div>
			</main>
		</article>
  	</div>

  );
}

export default SignIn;
