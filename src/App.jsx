import { useState } from 'react'
import './App.css'
import Form from './Components/form'
import Card from './Components/Card'

function App() {
  const [elemento, setElemento] = useState({})
  const [mostrar, setMostrar] = useState(false)


  const handleData = (valores) => {
    if(valores.name && valores.animal){
        setElemento(valores)
        setMostrar(true)
    }else{
        setElemento({})
        setMostrar(false)
    }
  }

  return (
    <>
        <Form titulo={"Cual es tu animal preferido?"} onSubmit={handleData}/>

        
        {mostrar ? <Card elemento={elemento}/> : undefined}
        
    </>
  )
}

export default App
