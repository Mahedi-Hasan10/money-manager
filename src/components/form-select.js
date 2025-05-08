import React from 'react';

const FormSelect = ({label,name, onChange,options,id}) => {
    return (
        <div className='form-input'>
            <label className='label'>{label}</label>
            <select onChange={onChange} name={name} id={id}>
                {
                    options?.map((item, index)=>(
                        <option key={index} value={item?.value}>{item?.label}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default FormSelect;