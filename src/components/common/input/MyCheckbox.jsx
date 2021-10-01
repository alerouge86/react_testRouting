import { Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const MyCheckbox = ({ control, name, label, errors }) => {
  const isError = errors && errors[name];
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field: { onChange, value } }) => (
        <>
          <FormControl error={isError ? true : false} component="fieldset">
            <FormControlLabel
              control={
                <Checkbox value={value} onChange={onChange} color="secondary" />
              }
              label={label}
            />
            {isError && (
              <FormHelperText>{errors[name]?.message}</FormHelperText>
            )}
          </FormControl>
        </>
      )}
    />
  );
};

export default MyCheckbox;
