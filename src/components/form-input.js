import React from 'react';

const FormInput = ({label,name,id, onChange,type}) => {
    return (
        <div className='form-input'>
            <label className='label'>{label}</label>
            <input className='input' type={type} id={id} name={name} onChange={onChange}/>
        </div>
    );
};

export default FormInput;