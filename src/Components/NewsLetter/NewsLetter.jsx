import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>NUESTRAS OFERTAS EXCLUSIVAS A TU MAIL</h1>
        <p>Suscribete a nuestras noticias y mantenete actualizado</p>
        <div>
            <input type="email" placeholder='Ingresá tu email'/>
            <button>Suscribir</button>
        </div>
    </div>
  )
}

export default NewsLetter