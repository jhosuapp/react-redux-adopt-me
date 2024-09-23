"use client"

import { Button, TextField } from "@/app/shared/components";
import styles from './login.module.scss';
import { Controller, useForm } from "react-hook-form";

const LoginView = ():JSX.Element => {

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<{identification_number: string, password: string}>({
        mode: "onChange",
        defaultValues: {
            identification_number: "",
            password: "",
        },
    });

    return (
        <section className="container py-5">
            <form className="w-full max-w-[550px]">
                <h1 className="text-title text-center font-bold mb-8 text-white">Iniciar sesión</h1>
                <fieldset className="w-full flex flex-col gap-6">
                    <Controller
                        name="identification_number"
                        control={ control }
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Número de identificación"
                                placeholder="Ej 12345678"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                type="text"
                                isRequired
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={ control }
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Contraseña"
                                placeholder="***********"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                type="password"
                                isRequired
                            />
                        )}
                    />
                    <Button>
                        Login
                    </Button>
                </fieldset>
            </form>
        </section>
    )
}

export { LoginView }