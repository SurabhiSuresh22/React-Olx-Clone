import React,{useState,useContext} from 'react';
import Signup from '../Components/Signup/Signup';
import {FirebaseContext} from '../store/Context';
import {useNavigate} from 'react-router-dom'

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);

  const handleUsername = e =>{
    setUsername(e.target.value);
  };
  const handleEmail = e =>{
    setEmail(e.target.value);
  };
  const handlePassword = e =>{
    setPassword(e.target.value);
  };

  const handlePhone = e =>{
    setPhone(e.target.value);
  };

  const handleSubmit = e =>{
  console.log(firebase);
  e.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(email, password).then((res)=>{
    res.user.updateProfile({displayName: username}).then(()=>{
      firebase.firestore().collection('users').add({
        id: res.user.uid,
        username: username,
        phone: phone,
      }).then(()=>{
        navigate('/login')
      })
    })
  })
  }

  return (
    <>
      <main>
      <Signup  
      username={username} 
      email={email}
      Phone={phone} 
      password={password}
      handleSubmit={handleSubmit} 
      handlePassword={handlePassword} 
      handlePhone={handlePhone} 
      handleEmail={handleEmail}
      handleUsername={handleUsername}/>
      </main>
    </>
  );
}

export default SignupPage;
