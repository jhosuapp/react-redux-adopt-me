import { Input, InputProps } from "@nextui-org/input";
import { ButtonProps, Button as ButtonUi } from "@nextui-org/button";
import styles from './login.module.scss';

const LoginView = ():JSX.Element => {
    return (
        <section className="container py-5">
            <form className="w-full max-w-[550px]">
                <h1 className="text-title text-center font-bold mb-4 text-white">Iniciar sesión</h1>
                <fieldset className="w-full flex flex-col gap-4">
                    <Input
                        labelPlacement="outside"
                        variant="bordered"
                        placeholder="Username"
                        type="text"
                        classNames={{
                            errorMessage: "text-primary",
                        }}
                        size="lg"
                        color="secondary"
                    >
                    </Input>
                    <Input
                        labelPlacement="outside"
                        variant="bordered"
                        placeholder="Password"
                        type="password"
                        classNames={{
                            errorMessage: "text-primary",
                        }}
                        size="lg"
                    >
                    </Input>
                    <ButtonUi 
                        radius="sm"
                        color="primary"
                        type="button"
                        className="font-bold"
                        size="lg"
                    >
                        Login
                    </ButtonUi>
                </fieldset>
            </form>
        </section>
    )
}

export { LoginView }