import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.setState({ email: '', password: '' })
        console.log(this.state.email);
        console.log(this.state.password);
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <input type="submit" value='Submit form' />
                </form>
            </div>
        )
    }
}

export default SignIn