type propsType = {
    name:string;
    type: string;
    id?: string;
    placeholder?: string;
    className?: string;
    label?: string;
    onChange?: (e:any) => void;
    defaultValue?: string;
}

export default function Input(props:propsType) {
    const {name, type, placeholder, className, label, id, defaultValue, onChange} = props;
    return (
        <div>
            {label && <label htmlFor={label}>{label}</label>}
            <input name={name} id={id} type={type} placeholder={placeholder} className={className} onChange={onChange} defaultValue={defaultValue}/>
        </div>
    );
}