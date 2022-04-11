import React,{useEffect, useContext} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignupPage from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import Post from './store/PostContext'

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    //console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
    <Post>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/signup' element={<SignupPage/>}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/create' element={<Create />}></Route>
      <Route exact path='/view' element={<View />}></Route>
      </Routes>
      </BrowserRouter>
    </Post>
    </div>
  );
}

export default App;

//created context component, created state, globally provided, in app called firebase - onAuthstatechanged
// to check if user is logged in or out