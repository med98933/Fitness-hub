import React from 'react'
import './Exercices.css'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from 'react';



const Exercices = () => {

  const fetchMe = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '18ae0e2113msh01cc2661266f795p197bcejsncd82426174aa',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
      .then(response => response.json())
      .then(data => {
        setContainer(data)
      })
      .catch(err => console.error(err));
  }
  const [search, setSearch] = useState('');
  const [container, setContainer] = useState([]);
  useEffect(() => {
    fetchMe()
  }, [search])
  
  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const submitHandler = (e) => {
    e.preventDeafault()
  }

  return (
    <section className='exercices-section'>
        <div className='exercices-container'>
            <h2>Awesome Exercices You</h2><br/>
            <h2>Should Know</h2>
            <form onSubmit={submitHandler} className='search-bar'>
              <input 
              type='text' 
              placeholder='search'
              value={search}
              onChange={onChangeHandler}/>
              <button onClick={fetchMe} type='submit'><BsSearch className='search-icon'/></button>
            </form>
        </div>
    </section>
  )
}

export default Exercices
