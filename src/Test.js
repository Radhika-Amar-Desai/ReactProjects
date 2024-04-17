import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Child(props){
    return(
        <p>
            {props.name}
        </p>
    )
}

Child.propTypes = {
    name : PropTypes.string.isRequired
}

function Test(){
    return(
        <>        
        <p>
            Radhika
        </p>
        <Child>

        </Child>
        </>
    )
}

export default Test;