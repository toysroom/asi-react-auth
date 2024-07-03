import { useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import ErrorMessageField from "../components/ErrorMessageField";
import { saveToken } from "../slices/authSlice";
import { login } from "../services/httpService";

function LoginPage() {

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState('')

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (formValues) => {
        setLoginError('');
        try {

            const payload = {
                'identity': formValues.email,
                'password': formValues.password,
            }

            const response = await login(payload, false);
            const authData = response.data;
            dispatch( saveToken( {token: authData.token,} ) );
        }
        catch(e) {
            setLoginError('Username e/o password non valide');
        }
    }

    return (
        <>
            <h1>{ t('login.title') }</h1>
            <form method="post" onSubmit={ handleSubmit(onSubmit) } noValidate>
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
                        }) }
                        type="password" className="form-control" id="password" />
                    <ErrorMessageField message={ errors.password?.message } />
                </div>
                
                <button type="submit" className="btn btn-primary">Accedi</button>
            </form>
            <ErrorMessageField message={loginError} />
            <DevTool control={control} />

            <Link to="/register">Registrati</Link>
        </>
    )
}

export default LoginPage;