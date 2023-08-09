import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='NavDiv'>

        <ul className='UlDiv'>
           <Link to="/">Task-2</Link>
           {/* <Link to="task2">Task-2</Link> */}
           <Link to="task3">Task-3</Link>
           <Link to="task4">Task-4</Link>  
        </ul>

    </div>
  )
}

export default Navbar