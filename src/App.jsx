import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='df'>

<div className='card'>

    <div className={"cardd " + props.info.title.toLowerCase()}>
    
            <div className='dex'>
                <p className='title'>{props.info.title}  </p>
                <img className='punt' src={punt} alt="" />
            </div>
            <div className='tecard'>
                <h1 className='current'>{props.current} hrs </h1>
                <p className='previous'> {text} - {props.previous} hrs  </p>
            </div>

    </div>
</div>

</div>
    </>
  )
}

export default App
