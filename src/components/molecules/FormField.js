import React, {Component} from 'react';
import FormLabel from '../atoms/FormLabel'
import InputField from '../atoms/InputField'

const FormField = ({name, label, ...props}) => {
  return (
        <div>
            <FormLabel name={name}>{label}</FormLabel>
            <InputField name={name} />
        </div>
    );
}

export default FormField;