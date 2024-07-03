import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useTranslation } from "react-i18next";
import PocketBase from 'pocketbase';
import ErrorMessageField from "../components/ErrorMessageField";

const url = 'https://react-auth.pockethost.io/'
const client = new PocketBase(url)

function RegisterPage() {

    const { t } = useTranslation();

    const [response, setResponse] = useState('');

    const { register, control, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
    });

    const onSubmit = async (formValues) => {

        try {
            await client.collection('users').create({
                ...formValues,
                passwordConfirm: formValues.password
            });

            setResponse('Registrazione avvenuta con successo. Clicca sul bottone per accedere');
        }
        catch (e) {
            let message = '';
            switch(e.data.data.email?.code) {
                case "validation_invalid_email":
                    message = 'Email già presente';
                break;
            }

            setError('email', {
                type: 'server',
                message,
            });

        }

        // const authData = await client.collection('users')
        //     .authWithPassword('a@a.a', 'Pippo1234!');
    }


    return (
        <>
            <h1>{ t('register.title') }</h1>
            <form method="post" onSubmit={ handleSubmit(onSubmit) } noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        { ...register('username') }
                        type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        { ...register('email', {
                            required: 'Campo email obbligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Campo email non corretto",
                            },
                        }) }
                        type="email" className="form-control" id="email" />
                    <ErrorMessageField message={ errors.email?.message } />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        { ...register('password', {
                            required: 'Campo password obbligatorio',
                            minLength: {
                                value: 8,
                                message: 'Campo password troppo corto'
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'La password deve contenere almeno una lettera maiuscola, una lettera minuscola, un numero e un carattere speciale'
                              }
                        }) }
                        type="password" className="form-control" id="password" />
                    <ErrorMessageField message={ errors.password?.message } />
                </div>
                
                <button type="submit" className="btn btn-primary">Registrati</button>
            </form>

            <div>
                {
                    response && 
                    <>
                        <p>{response}</p>
                        <Link to="/login" className="btn btn-primary">Accedi</Link>
                    </>
                }
            </div>

            <DevTool control={control} />

            <Link to="/login">Login</Link>
        </>
    )
}

export default RegisterPage;