
interface IButton {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'dark' | 'light';
}

const Button = ({children, className, onClick, variant }: IButton) => {
    let buttonStyle = ""
    switch (variant) {
        case 'dark':
            buttonStyle = "bg-black text-white"
            break;
        case 'light':
            buttonStyle = "bg-white text-black"
            break;
        default:
            buttonStyle = "bg-blue-500"
            break;
    }
        

    return (
        <button className={`border rounded-md p-1 ${buttonStyle}`}>{children}</button>
    )
}

export default Button;