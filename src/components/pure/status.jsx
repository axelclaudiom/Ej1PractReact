import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Status = (estado) => {

    const [IsOnline, setstatus] = useState(estado);

    const changeStatus = () =>  {
       
        IsOnline ? setstatus(!IsOnline) : setstatus(!IsOnline)
    }


    return (
        <div>
            <h5> Is Signed? : {IsOnline ? 'Conect' : 'desc'}</h5>
            <button onClick={changeStatus}>Change State</button>
        </div>
    );
};


Status.propTypes = {
    estado: PropTypes.bool,
};


export default Status;
