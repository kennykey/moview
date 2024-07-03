
type Option ={
    label:string;
    value: string;
}

type propsType ={
    name:string;
    label?:string;
    defaultValue?:string;
    disabled?:boolean;
    options:Option[];
    className?:string;
}

export default function Select(props:propsType) {
    const {name, label, defaultValue, disabled, options, className} = props;
    return(
        <div className="mb-3 text-start">
            <label htmlFor={name} className="mx-2 fw-bold">{label}</label>
            <select name={name} id={name} defaultValue={defaultValue} disabled={disabled} className={className}>
                {options.map((option)=>(
                    <option value={option.value} key={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}