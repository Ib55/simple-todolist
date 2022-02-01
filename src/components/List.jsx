import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function List (props) {
  return (
    <div>
      <ul class='list-group mt-5'>

          {
             props.ib.map((a)=>(
                <li class='list-group-item d-flex justify-content-between'><span className='fw-bold h4'>{a.title}</span><button className='btn btn-danger' onClick={()=>{
                    const del = props.ib.filter((me)=>me.id !== a.id)
                    props.ek(del)
                }}><FontAwesomeIcon icon={faTrash} /></button></li>

             ))
          }
      </ul>
    </div>
  )
}

export default List
