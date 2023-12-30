// components/CheckBox.tsx
import React, { InputHTMLAttributes } from 'react';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    checked: boolean;
    onChange: (checked: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e)}
                className="form-checkbox h-5 w-5"
            />
            <label className="ml-2">{label}</label>
        </div>
    );
};

export default CheckBox;
