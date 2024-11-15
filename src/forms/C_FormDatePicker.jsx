import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

export const C_FormDatePicker = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      // selected={(field.value && new Date(field.value)) || null}
      selected={(field.value) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};