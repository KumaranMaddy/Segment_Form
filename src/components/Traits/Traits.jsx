import React from 'react';
import './Traits.css';

 const Traits = () => {
  return (
    <div className='traits-wrapper'>
        <div className='user-traits-wrapper'>
            <span className='user-traits-bullet'></span>
            <span>- User Traits</span>
        </div>
        <div className='group-traits-wrapper'> 
            <span className='group-traits-bullet'></span>
            <span> - Group Traits</span>
        </div>
    </div>
  )
}
export default Traits;