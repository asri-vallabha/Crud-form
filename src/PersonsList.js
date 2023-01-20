import React from 'react'
import Details from './Details'

function PersonsList(props) {
    const{persons,removeItem,editItem}=props
  return (
    <div>
      {
        persons.length === 0 ?(
            <div>
                <h3>Please do Register for Login credentials </h3>
            </div>
        ):(
            <div>
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