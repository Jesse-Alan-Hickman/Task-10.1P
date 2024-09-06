import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, createUserDocFromAuth } from '../utils/firebase'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = (props) => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword:''
    })

    const [passwordMatchError, setPasswordMatchError] = useState ('')

    const {displayName, email, password, confirmPassword} = contact;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!displayName || !email || !password || !confirmPassword) {
            window.alert('Please fill in all fields.')
            return;
        }

        if (password !== confirmPassword){
            setPasswordMatchError('Password and confirm password must match.');
            window.alert('Password and confirm password must match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            await createUserDocFromAuth({ ...user, displayName});

            navigate('/Login');

        } catch (error) {
            console.error('Registration error:', error.message)
           
            if (error.code === 'auth/email-already-in-use') {
                window.alert('This email is already registered within our system.')
            } else {
                window.alert('An error occured. Please try again.')
            }
        }
    };

    const handleBack = () => {
        window.history.back();
    }

    return(
        <div className='sign-up-container'>
            <div className='sign-up-box'>
                <h2 className='sign-up-title'>Sign Up</h2>
                <input
                    type='text'
                    name='displayName'
                    placeholder='Name'
                    required
                    value={displayName}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <button className='create-button' onClick={handleSignUp}>
                    Create
                </button>
                <p className='or-text'> OR </p>
                <button className='return-button' onClick={handleBack}>
                    Return
                </button>
            </div>
        </div>
    );
}
 export default SignUp;