import React from 'react'
import Form from './Form'

function AddPerson(props) {
    const {addItem}=props
    const formSubmit=(formData)=>{
        addItem(formData)
    }
  return (
    <div>
      <Form formSubmit={formSubmit}/>
    </div>
  )
}
export default AddPerson
