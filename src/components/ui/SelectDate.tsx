"use client"

import { ReactNode, useState } from 'react';
import { DateInput, DateValue } from '@mantine/dates';


interface props{
    label?: ReactNode;
    placeholder?: string;
    value?: DateValue |  Date;
    onChange?: (value: Date | null) => void;
    minDate?: DateValue | Date;
}

const SelectDate = ({label , placeholder, value , onChange , minDate}: props) => {

  return (
    <DateInput
      
      clearable
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      minDate={minDate}
      width={"100%"}
    />
  );
}

export default SelectDate;