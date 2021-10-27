import { InputHTMLAttributes } from "react";
import "./style.css";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
}

const Input = ({ label, placeholder, ...rest }: IInputProps) => {
  return (
    <div className="Form">
      <div>
        {label && <label>{label}</label>}
        <input placeholder={placeholder} {...rest} />
      </div>
    </div>
  );
};
export default Input;
