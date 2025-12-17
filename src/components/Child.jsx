import React from 'react';

function Child({isLoggedIn,setIsLoggedIn}){

    return(
        <div>
          {
           !isLoggedIn?
          
            <form onSubmit={(e)=>{
                e.preventDefault();
                setIsLoggedIn(true);
            }}>
                <div>
                    <label htmlFor='Username'>Username:</label>
                    <input type="text" id="Username" />
                </div>

                <div>
                    <label htmlFor="Password">Password:</label>
                    <input type="text" id="Password" />
                </div>

                <button type="submit">Login</button>
            </form>
            
            : <p>You are logged in!</p>
}
        </div>
          
    )
}

export default Child;