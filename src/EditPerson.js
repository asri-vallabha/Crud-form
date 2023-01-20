import React from 'react'
import Form from './Form'

function EditPerson(props) {
    const{id,firstName,lastName,email,loca,editItem,handleToggle}=props
    const formSubmit=(formData)=>{
        editItem(formData)
    }
  return (
    <div>
        <Form id={id} firstName={firstName} 
        lastName={lastName} 
        email={email} 
        loca={loca}
        formSubmit={formSubmit} 
        handleToggle={handleToggle}/>
    </div>
  )
}

export default EditPerson
