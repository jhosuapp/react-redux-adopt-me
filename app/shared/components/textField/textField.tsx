import { Input, InputProps } from "@nextui-org/input";
import styles from './textField.module.scss';

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
            radius="sm"
            variant="bordered"
            autoComplete="off"
            placeholder={ placeholder }
            className={`${styles.input}  text-primary`}
            classNames={{
                errorMessage: "text-primary",
            }}
            size="lg"
            type={ type }
            label={
                <>
                    <span className="font-semibold text-primary text-sm">
                        {label}
                        {isRequired && "*"}
                    </span>
                    {description && (
                        <span className="text-primary">{description}</span>
                    )}
                </>
              }
        >
            { children }
        </Input>
    )
}

export { TextField }