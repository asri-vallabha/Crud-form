import React from 'react'
import Details from './Details'
import './PersonsList.css'

function PersonsList(props) {
    const{persons,removeItem,editItem}=props
  return (
    <div className='container'>
      {
        persons.length === 0 ?(
                <h3>Please do Register for Login credentials </h3>
        ):(
            <div className='box'>
                <h3>Total Persons:{persons.length}</h3>
                  
                  {
                    persons.map((person)=>{
                        return <Details key={person.id} {...person} removeItem={removeItem} editItem={editItem}/>
                    })
                }
                
            </div>
        )
      }
    </div>
  )
}

export default PersonsList