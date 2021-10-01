import React, { useState } from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/Icon";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const MyTextField = ({
  control,
  name,
  label,
  standardVariant,
  errors,
  autoFocus,
  required,
  value,
  type,
}) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(isPassword ? true : false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const inputType = type ? type : "text";
  let inputTypeHandlingPassword = null;
  if (isPassword) {
    inputTypeHandlingPassword = showPassword ? "password" : "text";
  } else {
    inputTypeHandlingPassword = inputType;
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value ? value : ""}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          onChange={onChange}
          variant={standardVariant ? "standard" : "outlined"}
          required={required ? true : false}
          fullWidth
          label={label}
          autoComplete={name}
          type={inputTypeHandlingPassword}
          error={errors && errors[name] ? true : false}
          helperText={errors && errors[name] ? errors[name].message : ""}
          autoFocus={autoFocus ? true : false}
          InputProps={
            isPassword
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      )}
    />
  );
};

export default MyTextField;
