import React from 'react'
import ImageProfile from '../assets/user.png'
import Imagen from '../assets/derecha.png'

import appFirebase from '../credenciales'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { async } from '@firebase/util'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth,correo, contraseña)
            } catch (error) {
                alert('Asegurese que la contraseña tenga mas de 8 caracteres')
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,correo,contraseña)    
            } catch (error) {
                alert('El correo o la contraseña son incorrectos')
            }
            
        }
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow">
              <img src={ImageProfile} alt="" className="estilo-profile" />
              <form className="" onSubmit={functAutenticacion}>
                <input
                  type="text"
                  placeholder="Ingresar email"
                  className="cajatexto"
                  id='email'
                  required
                />

                <input
                  type="password"
                  id="password"
                  placeholder="Ingresar contraseña"
                  className="cajatexto"
                  required
                />

                <button className="btnform form-control">
                  {registrando ? "Registrate" : "Inicia Sesion"}
                </button>
              </form>
              <h4 className="texto">
                {registrando ? "Si ya tienes cuenta" : "No tienes cuenta?"}{" "}
                <button
                  className="btnswitch"
                  onClick={() => setRegistrando(!registrando)}
                >
                  {registrando ? "Inicia Sesion" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <img src={Imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
}

export default Login 