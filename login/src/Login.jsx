import React from 'react'

export default function Login({encabezado,images,form}) {
return (
<div>{encabezado}
<div>{images}</div>
<div>{form} </div>
</div>
)
}
Login.defaultProps = {
encabezado: "Login con react+vite",
images: <img src="https://pics.filmaffinity.com/Mr_Robot_Serie_de_TV-978107021-large.jpg" alt="Imagen"  />,
form:<form>
<input type='text' placeholder='nombre'></input> <br></br>
<input type='password' placeholder='Contraseña'></input><br />
<button>Login</button>
</form>
}
