import React from 'react';
import { useState } from 'react';
import Child from './Child.jsx';
function Parent(){
   
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <div>
           <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </div>
    )
};

export default Parent;