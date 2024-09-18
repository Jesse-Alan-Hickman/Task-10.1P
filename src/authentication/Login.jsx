import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import './Login.css';
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase'
    
const Login = (props) => {
    const navigate = useNavigate();
    const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
    navigate('/');
    };

        const [contact, setContact] = useState({
            username: '',
            password: ''
        })
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }})
    }

    const handleClick = async() =>{
        await fetch ('http://localhost:3000/')
        .then (response => response.json())
        .then(data=> console.log(data))
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(contact.username, contact.password);
            console.log('User logged in:', user);
            await createUserDocFromAuth(user);
            navigate('/');
        } catch (error) {
            console.log('Error logging in:', error.message);
            window.alert('Incorrect email or password. Please try again')
        }
    };

    return (

       <div className='login-container'>
            <div className='login-box'>
                <h2 className='login-title'>Login</h2>
                
                <form onSubmit={handleSubmit}>
                    <Input 
                    name= 'username'
                    type= 'text'
                    placeholder ='Email Address'
                    onChange = {handleChange}
                    value = {contact.username}
                    />

                    <Input 
                    name='password'
                    type= 'password'
                    placeholder ='Password'
                    onChange = {handleChange}
                    value = {contact.password}
                    />
                
                    <Button 
                    type = 'submit'
                    text='Login'
                    className='login-button'
                    onClick = {handleClick}
                    />
                </form>

                <button onClick={logGoogleUser} className='google-login-button'>
                    Login with Google
                </button>

                <p className='or-text'>OR</p>

                <button onClick={() => navigate('/SignUp')} className='signup-button'>
                    Sign Up
                </button>
            </div>
        </div>
    );
}
export default Login