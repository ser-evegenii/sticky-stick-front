import React, { Component } from 'react';

class SignInForm extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="login" style={{display: this.props.showSignUpElement ? 'none' : 'block' }}>
                <h1>Welcome Back!</h1>

                <form action="/" method="post">

                    <div className="field-wrap">
                        <label>
                            Email Address<span className="req">*</span>
                        </label>
                        <input type="email" required autoComplete="off"/>
                    </div>

                    <div className="field-wrap">
                        <label>
                            Password<span className="req">*</span>
                        </label>
                        <input type="password" required autoComplete="off"/>
                    </div>

                    <p className="forgot"><a href="#">Forgot Password?</a></p>

                    <button className="button button-block">Log In</button>

                </form>

            </div>
        )
    }
}

export default SignInForm;