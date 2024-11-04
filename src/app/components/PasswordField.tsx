"use client";

import React, { useState } from 'react';
import style from '../../css/password.module.css';

interface PasswordFieldProps {
  placeholder: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.passwordField}>
      <input
        className={style.inputSenhaRegister}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <i
        className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
        onClick={() => setShowPassword(!showPassword)}
      ></i>
    </div>
  );
};

export default PasswordField;