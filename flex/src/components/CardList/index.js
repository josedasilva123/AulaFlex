import React from 'react'
import CardExample from './CardExample'
import './styles.css'

const CardList = () => {
  return (
    <ul className='cardList'>
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
    </ul>
  )
}

export default CardList