import React from 'react'
import'./Login.css';
import background from "./assets/images/fondo-login.jpg";

export default function Login({encabezado,images,form}) {
return (
<div>{encabezado}
<div className='form'>{form} </div>
</div>
)
}
Login.defaultProps = {
encabezado: <h1>react + vite +nodejs</h1>,
form:<form>
    
<input type='text' placeholder='nombre'></input> <br></br><br></br>
<input type='password' placeholder='Contraseña'></input><br /><br />
<button>Login</button>
</form>
}
