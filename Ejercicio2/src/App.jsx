import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cartap from './components/Carta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cartap
    Imagen = {"../img/papa.jpg"}
    Nombre= "Misael Alexander Rivas López"
    Especialidad= "Estudiante de software"
    Fecha="2008/07/23"
    Ciudad="San Salvador"
    Descripcion=" Hola soy Misael Rivas, estudiante de tercer año de software."
    />
    </>
  )
}

export default App
