import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CountryType } from "../../type";

type Country = {
  label?: string;
  options: any;
  onChange: (selectedValue: any) => void;
  error?: boolean;
  helperText?: string;
};

export default function SelectInput({
  label,
  options,
  onChange,
  error,
  helperText,
}: Country) {
  const handleOnChange = (_: any, selectedOption: any) => {
    onChange(selectedOption);
  };
  return (
    <div className="mt-4">
      <Autocomplete
        id={label}
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option: any) => `+${option.phone || option.label}`}
        onChange={handleOnChange}
        renderInput={(params) => <TextField {...params} label={label} />}
        renderOption={(props, option) => (
          <li {...props}>{option.phone ? `+${option.phone}` : option.label}</li>
        )}
        sx={{
          bgcolor: "#F5F5F5",
        }}
      />
    </div>
  );
}
