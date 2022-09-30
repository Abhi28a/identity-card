import React, {useState}from 'react'
import A from './ima/abhi.jpg';
import './Card.css';


function Card() {
    const [name, setName] = useState("Abhishek S");
    const [branch, setBranch] = useState("CSE Department, KL University");
    const [pos, setPos] = useState("UnderGrad Student");
    const [id, setId] = useState("2100032180");
    const [year, setYear] = useState("2021-2025");

  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src={A} alt="" height="100px"/>
            </div>
        </div>
        <div className='lower-container'>
            <h3>{ name }</h3>
            <h4>{ id }</h4>
           <h5>{pos}</h5>
            <h6>{ branch }</h6>
            <p>{year}</p>
           
        </div>
    </div>
  )
}

export default Card;