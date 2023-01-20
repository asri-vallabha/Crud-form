import React from 'react'
import data from './mock-data.json'
import {nanoid} from 'nanoid'

function Main() {

    const[contacts, setContacts]=React.useState(data)

    const[addFormData, setAddFormData]=React.useState({
        fullName:'',
        address:'',
        phoneNumber:'',
        email:''
    })

    const handleAddFormChange=(e)=>{
        e.preventDefault()

        const fieldName =e.target.getAttribute('name')
        const fieldValue=e.target.fieldValue

        const newFormData ={...addFormData}
        newFormData[fieldName]=fieldValue

        setAddFormData(newFormData)
    }

    const handleAddFormSubmit=(e)=>{
        e.preventDefault()
        const newContacts={
            id:nanoid(),
            fullName:addFormData.fullName,
            address:addFormData.address,
            phoneNumber:addFormData.phoneNumber,
            email:addFormData.email
        }
        const newContact=[...contacts, newContacts]
        setContacts(newContact)
    }
  return (
    <div className='app-container'>
        <table border='1'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=>(
                    <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                </tr>

                ))}
                
            </tbody>
        </table>
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
            <input type='text' name='name' required='required' placeholder='Full Name' onChange={handleAddFormChange}/>
            <input type='textarea' name='name' required='required' placeholder='Address' onChange={handleAddFormChange} />
            <input type='number' name='name' required='required' placeholder='Phone NUmber' onChange={handleAddFormChange}/>
            <input type='text' name='name' required='required' placeholder='Email Id' onChange={handleAddFormChange}/>
            <input type='submit' name='Add'/>
        </form>
      
    </div>
  )
}

export default Main
