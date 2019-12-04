import React from 'react';

const InputField = props =>{
    return(
    <input type="text" name={props.name} onChange={props.onChange}/>
    );
}

export default InputField;