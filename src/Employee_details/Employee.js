import React,{useState} from 'react';
import Modal from './Modal';
import Data from './Data';
import details from './details.json'

function Employee(){
    const [empData,setEmpData]=useState(details)
    
    const onDelete =(user)=>{
        console.log("delete")
        setEmpData( empData.filter(items=>items.id!==user.id))
        
    }
    
    return(
        <div>
            <div>
            <span>Resource one It Solution Employee Data</span>
              <button >Add Emplyee</button>
            </div>
            <Modal/>
            <Data onDelete={onDelete} Data={empData}/>
            
             
        </div>
    )
}
export default Employee;