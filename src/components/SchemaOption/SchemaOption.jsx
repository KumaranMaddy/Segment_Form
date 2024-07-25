import React,{useRef} from 'react';
import useClickOutside from '../../Common/useClickOutside';
import {schemas} from '../../Common/Schemas';
import './SchemaOption.css';
const SchemaOption = (props) =>  {
    const closeDropdown = props.closeDropdown;
    const setOpenDropdown = props.setOpenDropdown;
    const array = props.array;
    const addObject = props.addObject;
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, closeDropdown);
   
  return (
    <div className='dropdown-options-container' ref = {dropdownRef}>
        {schemas.map((schema, index) => (
        <div key = {index} 
     
        className='dropdown-option-wrapper' 
        onClick={()=>{
            setOpenDropdown(false);
            if(array.length === 0){
                addObject(schema)   
            }
            else{
                for(let i=0; i<array.length;i++){
                    if(Object.values(array[i])[0]===Object.values(schema)[0]){
                        return;
                    }
                }
                addObject(schema);
            }
        }}>
            <span className='dropdown-option-bullet' style={{backgroundColor:`${Object.values(schema)[1]}`}}></span>
            <span className='dropdown-option-text' >{Object.values(schema)[0]}</span>
        </div>))}
    </div>
  )
}
export default SchemaOption;