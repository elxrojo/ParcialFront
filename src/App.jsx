import { useState } from 'react'
import './App.css'
import Form from './Components/form'
import Card from './Components/Card'

function App() {
  const [elemento, setElemento] = useState([])


  const handleData = (valores) => {
    setElemento(valores)
  }

  return (
    <>
        <Form titulo={"Cual es tu animal preferido?"} onSubmit={handleData}/>

        {elemento ? <Card elemento={elemento}/> : undefined}
        


        
    </>
  )
}

export default App
