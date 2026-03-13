import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boton from './components/Boton.jsx'
import Alert from './components/Alert.jsx'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [Texto, setTexto] = useState('');
  const [Texto1, setTexto1] = useState('');
  const Alerta = () => {
    setMostrarAlerta(!mostrarAlerta);
  };
  return (
    <>
    <Input valor={Texto} onChange={setTexto} />
    <Input valor={Texto1} onChange={setTexto1} />
     <Boton
         texto="Accion"
         accion = {Alerta}
       />
       {mostrarAlerta && (<Alert mensaje={`¡Aca va la answer!: ${Texto}  y ${Texto1}`}  />)}
    </>
  )
}

export default App
