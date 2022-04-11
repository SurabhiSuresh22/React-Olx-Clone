import React,{useState,useContext} from 'react';
import Login from '../Components/Login/Login';
import {FirebaseContext} from '../store/Context'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);

  const handleEmail = e =>{
    setEmail(e.target.value);
  }
  const handlePassword = e =>{
    setPassword(e.target.value);
  }
  const handleLogin = e =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
      })
  }

  return (
    <div>
      <Login 
      email={email}
      password={password} 
      handleLogin={handleLogin}
      handleEmail={handleEmail}
      handlePassword={handlePassword}/>
    </div>
  );
}

export default LoginPage;
