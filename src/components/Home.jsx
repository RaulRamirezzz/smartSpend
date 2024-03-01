import React from 'react'
import appFirebase from '../credenciales'
import {getAuth,signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div>
      <h2 className='text-center mt-5'>Bienvenido usuario: {correoUsuario} <button onClick={()=>signOut(auth)} className='btn btn-primary'>Logout</button></h2>
      
    </div>
  )
}

export default Home