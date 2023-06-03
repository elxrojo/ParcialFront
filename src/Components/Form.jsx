import { useState } from 'react'

function Form({titulo, onSubmit}){
    const [name, setName] = useState("");
    const [animal, setAnimal] = useState("");
    const [Error, setError] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || name.trim('').length <= 2){
            setError('Ingresar un nombre válido')
        } else if (!animal || animal.trim('').length <= 6){
            setError('Ingresar un animal válido')
        } else {
            onSubmit({ name:name, animal:animal })
            setName('')
            setAnimal('')
            setError('')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{titulo}</h1>
                <label htmlFor="name">Tu nombre</label>
                <input type="text" value={name} onChange={ ()=>setName(event.target.value)} />

                <label htmlFor="animal">Animal favorito</label>
                <input type="text" value={animal} onChange={()=>setAnimal(event.target.value)} />
                <button>Enviar</button>
                {Error && <div>{Error}</div>}
            </form>
        </div>
    )
}

export default Form