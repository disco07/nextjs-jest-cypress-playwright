import React from 'react';

interface IFields {
    type?: string;
    name?: string;
    value?: number;
    placeholder?: string;
    handleChange?: (e: any) => void;
}

const Fields = ({type, name, value, placeholder, handleChange}: IFields) => {
    return (
        <>
            <input type={type} name={name} value={value} placeholder={placeholder}
                   onChange={handleChange}/>
        </>
    );
}

export default Fields;