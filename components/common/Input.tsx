interface InputPropsType {
  label?: React.ReactNode;
  type: string;
  value?: any;
  placeholder?: string;
  name?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  value,
  name,
  placeholder,
  maxLength,
  onChange,
}: InputPropsType) => {
  return (
    <div className="w-full flex items-center gap-3 p-2 border rounded-md overflow-hidden text-sm">
      {label && <label className="w-[10%] flex justify-center">{label}</label>}

      <input
        className="w-full focus:outline-none"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
