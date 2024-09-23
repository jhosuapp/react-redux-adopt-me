
import { ButtonProps, Button as ButtonUi } from "@nextui-org/button";


interface IButton extends ButtonProps {
    classNameWrapper?: string;
}

const Button = ({ children }:IButton):JSX.Element => {
    return (
        <ButtonUi 
            radius="sm"
            color="primary"
            type="button"
            className="font-bold"
            size="lg"
        >
            { children }
        </ButtonUi>
    )
}

export { Button }