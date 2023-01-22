import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './formInput.css'

function Form(props) {
    const{formSubmit,handleToggle,id:slNo,firstName:fName,lastName:lName,email:eMail,loca:lOca}=props
    const[id,setId]=React.useState(slNo ? slNo : uuidv4())
    const[firstName, setFirstName]=React.useState(fName ? fName : '')
    const[lastName, setLastName]=React.useState(lName ? lName :'')
    const[email, setEmail]=React.useState(eMail ? eMail : '')
    const[loca, setLoca]=React.useState( lOca ? lOca : '')
    // const[male, setMale]=React.useState(male ? male : '')
    // const[feMale, setFemale]=React.useState(feMale ? feMale : '')
    // const[trans, setTrans]=React.useState(trans ? trans : '')
    // const[date, setDate]=React.useState(date ?date : '')


    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            firstName:firstName,
            lastName:lastName,
            email:email,
            // male:male,
            // feMale:feMale,
            // trans:trans,
            // date:date,
            loca:loca
        }
        formSubmit(formData)
        if(handleToggle){
            handleToggle()
        }

        //Reset form
        setId(uuidv4())
        setFirstName('')
        setLastName('')
        setEmail('')
        setLoca('')
        // setMale('')
        // setFemale('')
        // setTrans('')
        // setDate('')
    }

    const handleChangeFname=(e)=>{
        setFirstName(e.target.value)
    }
    const handleChangeLname=(e)=>{
        setLastName(e.target.value)
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    // const handleChangeMale=(e)=>{
    //     setMale(e.target.value)
    // }
    // const handleChangeFemale=(e)=>{
    //     setFemale(e.target.value)
    // }
    // const handleChangeTrans=(e)=>{
    //     setTrans(e.target.value)
    // }
    // const handleChangeDate=(e)=>{
    //     setDate(e.target.value)
    // }
    const handleChangeLoca=(e)=>{
        setLoca(e.target.value)
    }
    
  return (
    <div class='formInput'>
        <form onSubmit={handleSubmit} className='form'>
            <h1>Register</h1>
            <input  type='text' value={firstName}
             name='firstName' placeholder='First Name' onChange={handleChangeFname}/>

            <input  type='text' value={lastName} 
            name='lastName' placeholder='Last Name' onChange={handleChangeLname}/>

            <input type='email' value={email} 
            name='email' placeholder='abcd@gmail.com' onChange={handleChangeEmail}/>

            <input  type='text' value={loca}
             placeholder='ex:Tirupati' onChange={handleChangeLoca}/>
             
            <input  class="btn btn-primary" type='submit' value='Register'/> 
        </form>
      
    </div>
  )
}

export default Form


/*
 <label>Gender</label><br/>
            <input type='radio'/>Male 
            <input type='radio'/>Female
            <input type='radio'/>Transgender<br/>
            <label>Date of Birth</label><br/>
            <input type='date'/><br/>

*/
{/*<label>Gender</label><br/>
             <input type='radio' value='Male' onChange={handleChangeMale}/>Male 
            <input type='radio' value='Female' onChange={handleChangeFemale}/>Female
            <input type='radio' value='Transgender' onChange={handleChangeTrans}/>Transgender<br/>
            <label>Date of Birth</label><br/>
            <input type='date' name='date' onChange={handleChangeDate}/><br/>
            */}
