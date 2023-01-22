import React from 'react'
import EditPerson from './EditPerson'
function Details(props) {
    const{id,firstName,lastName,email,loca,removeItem,editItem}=props
    const [toggle,setToggle]=React.useState(false)
    //console.log(persons)
    const handleRemove=(id)=>{
      const confirmRemove=window.confirm("Are You Sure ?")
      if(confirmRemove){
        removeItem(id)
      }
    }

    const handleToggle=()=>{
      setToggle(!toggle)

    }
    // const ele=0 
  return (
    <div>
      { 
      toggle ?(
        <div>
          <EditPerson id={id} 
          firstName={firstName} 
          lastName={lastName} 
          email={email} 
          loca={loca} 
          editItem={editItem}
          handleToggle={handleToggle}/>
          <center>
          <button onClick={handleToggle} className="btn btn-warning">Cancel</button>
          </center>
          
        </div>
      ):(
        <div className='details'>
          <table class=" table table-danger">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              {/* <th>Gender</th>
              <th>Date of Birth</th> */}
              <th>Location</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
                <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            {/* <td>{}</td>
            <td>{}</td> */}
            <td>{loca}</td>
            <td><button onClick={handleToggle} class="btn btn-warning">Edit</button></td>
            <td><button onClick={()=>{
              handleRemove(id)
            }} class="btn btn-danger">Delete</button></td>
            </tr>
            
          </tbody>
          </table>
          </div>
      )
    }
    </div>
    
  )
}

export default Details