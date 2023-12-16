"use client"
// components/SelectField.tsx
import React, { SelectHTMLAttributes } from 'react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, ...selectProps }) => {
    const { value } = selectProps;



    return (
        <div>
            <label>{label}</label>
            <select {...selectProps} value={value} >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
