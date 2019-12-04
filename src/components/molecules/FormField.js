import React, {Component} from 'react';
import FormLabel from '../atoms/FormLabel'
import InputField from '../atoms/InputField'

const FormField = ({name, label, ...props}) => {
  return (
        <div className="form-field">
            <FormLabel name={name}>{label}</FormLabel>
            <InputField name={name} onChange={props.onChange}/>
        </div>
    );
}

export default FormField;