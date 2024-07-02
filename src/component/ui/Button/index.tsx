type propsType = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: any | string;
    className?: string;
    onClick?: () => void;
}

export default function Button(props:propsType) {
    const {type, children, className, onClick} = props;
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
}