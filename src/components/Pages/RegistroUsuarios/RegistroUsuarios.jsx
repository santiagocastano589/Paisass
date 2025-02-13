import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import './RegistroUsuarios.css';


export const RegistroUsuarios = () => {
  return (
    <div className='bodyRegistro'>
        <Header/>
        <div className="container">
            <div className="form-box">
                <form action="registro.php" method="post" className="input-group" id="form">
                    <center>
                         <img class="loguito2" src="imagenes/logo.png" alt="" />
                    </center>

                        <label for="Codigo">Identificación</label>
                        <input type="text" class="input-field" placeholder="Identificación" name="identificacion"/>

                        <label for="nombre">Nombre</label>
                        <input type="text" class="input-field" placeholder="Nombre" name="nombre"/>

                        <label for="fecha_nacimiento">Fecha Nacimiento</label>
                        <input type="date" class="input-field" name="fecha_nacimiento"/>

                        <label for="correo">Correo</label>
                        <input type="text" class="input-field" placeholder="Correo" name="correo"/>

                        <label for="contrasena">Contraseña</label>
                        <input type="password" class="input-field" placeholder="Contraseña" name="contrasena"/>

                        <label for="sexo">Sexo</label>
                            <select class="input-field" name="sexo">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro Género</option>
                        </select>

                        <label for="deporte">Deporte</label>
                        <select class="input-field" name="deporte">
                            <option value="Baloncesto">Baloncesto</option>
                            <option value="Voleibol">Voleibol</option>
                            <option value="Futbol">Futbol</option>
                        </select>

                        <label for="telefono">Teléfono</label>
                        <input type="text" class="input-field" placeholder="Teléfono" name="telefono"/>
                    
                        <button type="submit" class="submit-btn">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
  )
}
