import React from 'react'
import CardList from '../CardList'
import './styles.css';

const Main = () => {
  return (
    <div className='Main'>
        <div className="container small">
            <h2>Posts em Destaque</h2>
            <CardList />
        </div>   
    </div>
  )
}

export default Main