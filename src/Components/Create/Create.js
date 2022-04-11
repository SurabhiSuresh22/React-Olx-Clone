import React, {useState,useContext} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import {useNavigate} from 'react-router-dom'

const Create = ({name,category,price,image,handleName,handleCategory,handlePrice,handleImage}) => {
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const date = new Date()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,category,price,url,userId: user.uid,createdAt: date.toDateString()
        })
        navigate('/')
      })
    })
  }
  return (
    <React.Fragment>
      <Header />
        <div className="centerDiv">
          <form  onSubmit={handleSubmit}>
            <label htmlFor="fname">Name</label><br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={handleName}
            /><br />

            <label htmlFor="category">Category</label><br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={handleCategory}
            /><br />

            <label htmlFor="price">Price</label><br />
            <input 
            className="input" 
            type="number" 
            id="price" 
            name="price" 
            value={price}
            onChange={handlePrice}
            /><br /><br />

          <img 
          alt="Posts" 
          width="200px" 
          height="200px" 
          src={image ? URL.createObjectURL(image):''}></img><br />

            <input 
            onChange={handleImage}
            type="file" /><br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      
    </React.Fragment>
  );
};

export default Create;
