// components/UserFormInput.tsx
import React, { InputHTMLAttributes } from 'react';

interface UserFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
}

const UserFormInput: React.FC<UserFormInputProps> = ({
    label,
    value,
    onChange,
    type,
    placeholder, ...props
}) => {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input input-bordered w-full max-w-xs input-sm"
                {...props}
            />
        </div>
    );
};

export default UserFormInput;
