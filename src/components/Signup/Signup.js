import React from 'react';
import './signup.css';

const emailRegex = RegExp(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/)
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });
 return valid;
}



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            fullName: '',
            email: '',
            userName: '',
            password: '',
            cpassword: '',
            formErrors: {
                fullName: '',
                email: '',
                userName: '',
                password: '',
                cpassword: '',
            }
           
        };
        
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(`
            --SUBMITTING--
            Full Name: ${this.state.fullName}
            Email: ${this.state.email}
            Username: ${this.state.userName}
            Password: ${this.state.password}
            Confirm Password: ${this.state.cpassword}
            `)
        } else{
            console.error('Form Invalid')
        }
    }
   
handleChange = e =>{
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;


    switch(name){
        case 'fullName':
        formErrors.fullName = value.length <3 && value.length > 0? 
        'minimum of 3 characters is required':
        '';
        break;
        case 'email':
        formErrors.email = emailRegex.test(value) && value.length >0? 
        '':
        'invalid email address';
        break;
        case 'userName':
        formErrors.userName = value.length <4 && value.length > 0? 
        'minimum of 4 characters is required':
        '';
        break;
        case 'password':
        formErrors.password = value.length < 6 && value.length > 0? 
        'minimum of 6 characters is required':
        '';
        break;
        case 'cpassword':
        formErrors.cpassword = value.length <6 && value.length > 0? 
        'minimum of 6 characters is required':
        '';
        break;
    }

    this.setState({
        formErrors, [name]:value},() => console.log(this.state))

}


    render() {
        const {formErrors} = this.state;
        return (
            <div className='container-fluid'>
                <div className='row signuprow signupbg'>
                    <div className='signupoverlay'>
                        <nav class="nav navv">
                            <a class="nav-link" href="#">Home</a>
                            <a class="nav-link" href="#">About</a>

                        </nav>
                        <div className='signup'>
                            <div className='icondiv'><i class="fa fa-fw fa-user-plus fa-5x"></i></div>
                            <div className='row inputdiv'>
                                <form onSubmit={this.handleSubmit} noValidate>

                                    <div className='form-group fullName'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Full Name e.g John Doe'
                                            name='fullName'
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.fullName.length >0 &&(
                                            <span class="errorMessage" >{formErrors.fullName}</span>
                                        )}
                                    </div>
                                    <div className='form-group email'>
                                        <input
                                            className='form-control'
                                            type='email'
                                            placeholder='Email'
                                            name='email'
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.email.length > 0 && (
                                            <span className='errorMessage'>{formErrors.email}</span>
                                        )}
                                    </div>
                                    <div className='form-group userName'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='Username'
                                            name='userName'
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.userName.length >0 && (
                                            <span className='errorMessage'>{formErrors.userName}</span>
                                        )}
                                    </div>
                                    <div className='form-group Password'>
                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='Password'
                                            name='password'
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.password.length >0 && (
                                            <span className='errorMessage'>{formErrors.password}</span>
                                        )}
                                    </div>
                                    <div className='form-group cPassword'>
                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='Confirm Password'
                                            name='cpassword'
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.cpassword.length >0 && (
                                            <span className='errorMessage'>{formErrors.cpassword}</span>
                                        )}
                                    </div>

                                    <div className='form-group submit'>
                                        <button type="submit" class="btn btn-primary" >Create Account</button>

                                    </div>


                                </form>

                                <div><span>Already have an account?{''} Log in</span></div>


                            </div>

                        </div>
                    </div>

                </div>

            </div >
        )
    }
}