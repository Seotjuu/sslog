interface InputPropsType {
  label?: React.ReactNode;
  type: string;
  value?: any;
  defaultValue?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  value,
  defaultValue,
  placeholder,
  onChange,
}: InputPropsType) => {
  return (
    <div className="w-full flex gap-3 p-2 border rounded-md overflow-hidden text-sm">
      {label && <label className="w-[15%]">{label}</label>}

      <input
        className="w-full"
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
