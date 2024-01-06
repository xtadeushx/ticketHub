import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: ComponentProps<"input">["type"];
  onChange: ComponentProps<"input">["onChange"];
  onBlur: ComponentProps<"input">["onBlur"];
  value?: ComponentProps<"input">["value"];
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type, error, ...inputProps }, ref) => {
    const formGroupClasses = clsx("form-group", {
      "has-error": error,
    });

    return (
      <div className={formGroupClasses}>
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          ref={ref}
          name={name}
          type={type}
          {...inputProps}
        />
        <span className="help-block">{error}</span>
      </div>
    );
  },
);
