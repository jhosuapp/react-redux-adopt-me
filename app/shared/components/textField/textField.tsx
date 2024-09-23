import { Input, InputProps } from "@nextui-org/input";


interface ITextField extends InputProps, Omit<InputProps, "errorMessage"> {
    ClassNameWrapper?: string;
    errorMessage?: string;
    errorClass?: string;
    type?: string;
    placeholder?: string;
    isLight?: boolean;
    isLocked?: boolean;
}

const TextField = ({ children, type, placeholder, label, isRequired, description }: ITextField):JSX.Element => {
    return (
        <Input
            labelPlacement="outside"
            variant="bordered"
            errorMessage={""}
            description={""}
            autoComplete="off"
            placeholder={ placeholder }
            className="text-white"
            classNames={{
                errorMessage: "text-primary",
            }}
            size="lg"
            type={ type }
            label={
                <>
                    <span className="font-semibold text-white text-sm">
                        {label}
                        {isRequired && "*"}
                    </span>
                    {description && (
                        <span>{description}</span>
                    )}
                </>
              }
        >
            { children }
        </Input>
    )
}

export { TextField }