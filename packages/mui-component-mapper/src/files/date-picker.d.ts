import { DatePickerProps as MuiDatePickerProps } from "material-ui-pickers/DatePicker";
import { UseFieldApiComponentConfig } from "@data-driven-forms/react-form-renderer";
import { GridProps } from "@material-ui/core";
import { MuiPickersUtilsProviderProps } from "material-ui-pickers/MuiPickersUtilsProvider";

export interface DatePickerProps extends MuiDatePickerProps {
  FormFieldGridProps: GridProps;
  MuiPickersUtilsProviderProps: MuiPickersUtilsProviderProps;
  DatePickerProps: MuiDatePickerProps;
}

declare const DatePicker: React.ComponentType<DatePickerProps & UseFieldApiComponentConfig>;

export default DatePicker;
