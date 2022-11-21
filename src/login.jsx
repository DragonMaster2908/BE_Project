import './login.scss';
import React from 'react';

const mode = 'login';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        }
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
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="USER NAME" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="PASSWORD" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="FULL NAME" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="EMAIL" disabled={this.props.mode === 'login'} />
                    <Input type="text" id="username" label="USER NAME" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="PASSWORD" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="REPEAT PASSWORD" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

const login = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
);


export default login;