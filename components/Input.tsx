interface InputPropsType {
    label?: React.ReactNode
    type: string;
    defaultValue?: any;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({label, type, defaultValue, placeholder, onChange}: InputPropsType ) => {
    return (
        <div className="w-full flex gap-3 p-2 border rounded-md overflow-hidden">
            {
                label && <label className="w-[15%]">{label}</label>
            }

            <input className="w-full" type={type} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Input;