import React,{useState,useContext} from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { useNavigate } from 'react-router-dom';


const CreatePage =() => {
  const navigate = useNavigate()
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [image,setImage] = useState(null);

  const handleName = e =>{
    setName(e.target.value);
  }
  const handleCategory = e =>{
    setCategory(e.target.value);
  }
  const handlePrice = e =>{
    setPrice(e.target.value);
  }
  const handleImage = e =>{
    setImage(e.target.files[0]);
  }

  return (
    <React.Fragment>
      <Header />
      <Create 
      name={name}
      category={category}
      price={price}
      image={image}
      handleCategory={handleCategory} 
      handleImage={handleImage} 
      handleName={handleName}
      handlePrice={handlePrice}/>
    </React.Fragment>
  );
};

export default CreatePage;
