import React,{useEffect} from 'react'
import AddPerson from './AddPerson'
import PersonsList from './PersonsList'
import './Container.css'


function Container(props) {
    const[persons, setpersons]=React.useState([])
    const addItem=(person)=>{
        setpersons([person,...persons])
    }
    const EditItem=(person)=>{
      const result=persons.map((p)=>{
        if(p.id === person.id){
          return {...p, ...person}
        }else{
          return {...p}
        }
      })
      setpersons(result)
    }

    const removeItem=(id)=>{
      const result=persons.filter((person)=>{
        return person.id !== id
      })
      setpersons(result)
    }
    useEffect(()=>{
      const result =JSON.parse(localStorage.getItem('persons'))
      setpersons(result)
  },[])
    useEffect(()=>{
      localStorage.setItem('persons',JSON.stringify(persons))
  },[persons])
  console.log(persons)
  return (
    <div className='container'>
      
      <div className='right-item'>
      <AddPerson addItem={addItem}/>
      </div>
      <div className='left-item'>
        <div className='h1'>
        <center><h1>Peoples DashBoard</h1></center>
        </div>
      
      <PersonsList persons={persons} removeItem={removeItem} EditItem={EditItem}/>
      </div>
      
      
    </div>
  )
}
export default Container
