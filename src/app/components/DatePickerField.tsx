import React from 'react';
import styles from '../../css/datepicker.module.css';

interface DatePickerFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ value, onChange }) => {
  return (
    <input
      type="date"
      className={styles.dateInput}
      value={value}
      onChange={onChange}
    />
  );
};

export default DatePickerField;
