
import InputField from "./InputField";
import { useState, useCallback } from "react";

export default function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(name, email, password);
    };

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangeEmail = useCallback((value: string) => {
        setEmail(value);
    }, []);

    const onChangePassword = useCallback((value: string) => {
        setPassword(value);
    }, []);


    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Name" value={name} onChange={onChangeName} />
            <InputField label="Email" value={email} onChange={onChangeEmail} />
            <InputField label="Password" value={password} onChange={onChangePassword} />
            <button type="submit">Sign up</button>
        </form>
    );
}