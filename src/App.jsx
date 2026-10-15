import { useState } from 'react'

// a) Componente funcional simple
function Titulo() {
  return <h1>Mi primera app en React</h1>
}

// b) Componente con props
function TarjetaPerfil({ nombre, carrera, semestre }) {
  return (
    <div style={{ border: '1px solid #888', borderRadius: 8, padding: 16, margin: 16 }}>
      <h2>{nombre}</h2>
      <p>Carrera: {carrera}</p>
      <p>Semestre: {semestre}</p>
    </div>
  )
}

// c) Componente con estado
function Contador() {
  const [cuenta, setCuenta] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  return (
    <div style={{ margin: 16 }}>
      <h3>Contador: {cuenta}</h3>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>{' '}
      <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>{' '}
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
      <p>
        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? 'Ocultar' : 'Mostrar'} mensaje
        </button>
      </p>
      {mostrar && <p>¡Hola desde React!</p>}
    </div>
  )
}

// d) Lista dinámica con .map() y keys
function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Ver el curso de React' },
    { id: 2, texto: 'Subir proyecto a GitHub' },
  ])
  const [nueva, setNueva] = useState('')

  const agregar = () => {
    if (nueva.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: nueva }])
    setNueva('')
  }
  const eliminar = (id) => setTareas(tareas.filter((t) => t.id !== id))

  return (
    <div style={{ margin: 16 }}>
      <h3>Lista de tareas</h3>
      <input value={nueva} onChange={(e) => setNueva(e.target.value)} placeholder="Nueva tarea" />{' '}
      <button onClick={agregar}>Agregar</button>
      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            {t.texto} <button onClick={() => eliminar(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <Titulo />
      <TarjetaPerfil nombre="Tu Nombre" carrera="Ing. en Sistemas Computacionales" semestre="5°" />
      <Contador />
      <ListaTareas />
    </div>
  )
}