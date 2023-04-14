import React from 'react'
import './index.css'
export const Button = ({ text, onClick }) => {
    
    return (
        <button className='create-button' onClick={onClick} >{text}</button>
    )
}
