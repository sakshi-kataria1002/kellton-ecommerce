import React from 'react'
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
                        <input 
                            name='email' 
                            placeholder='email' 
                            type='email' 
                            onChange={this.handleChange}
                        />
                        <input
                            name='password'
                            placeholder='password'
                            type='password' 
                            onChange={this.handleChange}
                        />
                        <input
                            type='submit'
                            value='Submit Form' />
                    </form>
                </div>
            </>
        )
    }
}

export default SignIn