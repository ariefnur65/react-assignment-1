import React from 'react';

const UserOutput= (props) =>{
   

    return(
        <div>
            <p>This is my username: {props.name}</p>
            <p>My Zodiac is: {props.zodiac}</p>
        </div>
    )
}
export default UserOutput;