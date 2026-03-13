import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import CuadroInformacion from './components/CuadroInformacion'
import Body from './components/Body'
import Boton from './components/Boton'
import Alert from './components/Alert'
import Checkbox from './components/Checkbox'
import Linea from './components/Linea'
import TablaDinamica from './components/Tabla';
import Formulario from './components/Formulario';
import Combobox from './components/Combobox'
import Acordeon from './components/Acordeon';
import Titulo from './components/Titulo';
import ButtonGroup from './components/MultipleBoton'; 
import Card from './components/Card';
import Tarjetatabla from './components/TTA';
import Collapse from './components/Collapse';
import ListaG from './components/Listagrupo';
function App() {
  const [count, setCount] = useState(0)
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const Alerta = () => {
    setMostrarAlerta(!mostrarAlerta);
  };
const misDatos = [
  { id: 1, nombre: 'Mark', apellido: 'Otto', usuario: '@mdo' },
  { id: 2, nombre: 'Jacob', apellido: 'Thornton', usuario: '@fat' },
  { id: 3, nombre: 'John', apellido: 'Doe', usuario: '@social' }
];

const handleClick = (texto, index) => {
    alert(`Botón "${texto}" (índice ${index}) clickeado`);
  };

  const itemsAccordion = [
    {
      titulo: ' Tacos al pastor',
      contenido: 'Deliciosos tacos con carne de chucho adobada, piña, cebolla y cilantro. Servidos con salsa verde y limón.'
    },
    {
      titulo: ' Pizza Margherita',
      contenido: 'Clásica pizza italiana con salsa de tomate mexicana, mozzarella fresca, albahaca y un toque de aceite de oliva.'
    },
    {
      titulo: ' Ensalada César',
      contenido: 'Lechuga romana, crutones griegos, queso parmesano peruano y aderezo César. Puedes agregar pollo a la parrilla.'
    }
  ];

  return (
     <>
     <Navbar
     textoactual="Inicio"
     texto1="Nosotros"
     texto2="Servicios"
     texto3="Contacto"
     />

     <Body>
       <CuadroInformacion
         titulo="Titulo"
         descripcion="Si"
       />
       <Boton
         texto="Accion"
         accion = {Alerta}
       />
       {mostrarAlerta && (<Alert mensaje="¡Alerta activada yay asksauajisd!" />)}
       <Checkbox
         titulo1="Opcion 1"
         titulo2="Opcion 2"
       />
       <Linea
         texto="Ejemplo de rango"
         accion={Alerta}
       />
     </Body>
     <TablaDinamica datos={misDatos} />
     <Formulario
       titulo1="Correo electrónico"
       titulo2="Mensaje"
     />
     <Combobox
       Titulo="Selecciona una opción"
       Texto1="Opción 1"
       Texto2="Opción 2"
       Texto3="Opción 3"
     />
     <Acordeon items={itemsAccordion} />
     <Titulo titulo="aaaaaaaaaaaaaaaa" descripcion="Descripción de la página" />
     <ButtonGroup
        buttons={['Izquierda', 'Centro', 'Derecha']}
        onButtonClick={handleClick}
      />
      <Card texto="2"/>

      <Tarjetatabla texto1="Texto 1" texto2="Texto 2" texto3="Texto 3" />
      <Collapse
        botonTexto="Ver detalles del producto"
        contenido="Este producto incluye garantía de 2 años, envío gratis y soporte técnico 24/7."
        width={400}
      />
         <ListaG 
      Titulo="A"
      texto1="2"
      texto2="3"
      texto3="4"
      texto4="5"/>
    </>
  )
}

export default App
