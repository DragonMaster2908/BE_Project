import './login.scss';
import React from 'react';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        };
        console.log(this.props.mode);
    }
    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }
    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Login' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={
                        console.log( this.state.mode )
                    } />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
        
        state = {
            fullname: "",
            username: "",
            email: "",
            password: "",
            repeatpassword: "",
            mode: ""
        };


        handleChange = event => { 
            this.setState({
                [event.target.id]: event.target.value,
                mode: this.props.mode
            });
        };

        handleSubmit = event => {
            event.preventDefault();
            console.log(this.state);
        };
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <input 
                        className="form-group__input"
                        type= "text"
                        id="username" 
                        placeholder= "USER NAME" 
                        disabled= {this.props.mode === 'signup'} 
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                    <input 
                        className="form-group__input"
                        type= "password"
                        id="password" 
                        placeholder= "PASSWORD" 
                        disabled= {this.props.mode === 'signup'} 
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                </div>
                <div className="form-group form-group--signup">
                    <input 
                        className="form-group__input"
                        type= "text"
                        id="fullname" 
                        placeholder= "FULL NAME" 
                        disabled= {this.props.mode === 'login'} 
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                    <input 
                        className="form-group__input"
                        type= "email"
                        id="email" 
                        placeholder= "EMAIL" 
                        disabled= {this.props.mode === 'login'} 
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                    <input 
                        className="form-group__input"
                        type= "text"
                        id="username" 
                        placeholder= "USER NAME" 
                        disabled= {this.props.mode === 'login'} 
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                    <input 
                        className="form-group__input"
                        type= "password"
                        id="password" 
                        placeholder= "PASSWORD" 
                        disabled= {this.props.mode === 'login'} 
                        mode= "signup"
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />

                    <input 
                        className="form-group__input"
                        type= "password"
                        id="repeatpassword" 
                        placeholder= "REPEAT PASSWORD" 
                        disabled= {this.props.mode === 'login'} 
                        mode= "signup"
                        value= {this.state.name}
                        onChange= {this.handleChange}    
                    />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}
