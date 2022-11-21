import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Prof = (props) => {
    return (
        <div>
            
            <h1  style={{ color: "#270082", fontSize: 40  }}>My Profile</h1>
            {props.children}
            <h3 style={{color:'white'}}>Hello, my name is {props.myFullName} and i'm {props.myProf}</h3>
            <p style={{fontSize:'25px'}}> {props.myBio}</p>
            <Button variant="danger" onClick={props.alert}>Click me</Button>
          
            
        </div>
    )
}
Prof.defaultProps={
    myFullName:"user"
}
Prof.propTypes = {
    myFullName: PropTypes.string,
}

export default Prof