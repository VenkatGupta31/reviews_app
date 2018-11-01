import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.OnSubmit = this.OnSubmit.bind(this);
        this.OnChange = this.OnChange.bind(this);
    };

    OnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    OnSubmit = (e) => {
      e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }
        console.log('newUser', newUser);
    }
  render() {
    return (
        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your DevConnector account</p>
              <form onSubmit={this.OnSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email"  value={this.state.name}
                  onChange={ this.OnChange }/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password}
                  onChange={ this.OnChange }/>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
