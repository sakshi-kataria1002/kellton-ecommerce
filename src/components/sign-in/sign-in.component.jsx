import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
 //to update the value
    handleChange = (event) => {
        const {name, value} = event.target
        //console.log(`${name} => ${value}`)
        this.setState({[name]:value}) //name->email, value->password
        //console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return(
            <>
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>
                        Sign in with your email and password
                    </span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='email' 
                            placeholder='Email' 
                            type='email' 
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            name='password' 
                            placeholder='Password' 
                            type='password' 
                            handleChange={this.handleChange}
                        />
                        <CustomButton 
                            type='submit'
                        >
                            Sign In
                        </CustomButton>
                    </form>
                </div>
            </>
        )
    }
}

export default SignIn