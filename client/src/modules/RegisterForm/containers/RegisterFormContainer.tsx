import { FC, useState } from 'react';
import { RegisterFormValues } from '../interfaces/RegisterForm.interface';
import { FormControls } from '../components/FormControls/FormControls';
import { useForm } from 'antd/es/form/Form';
import { validateFields } from '../utils/validateFields';

export const RegisterFormContainer: FC = (): JSX.Element => {
    const [form] = useForm();
    const [password, setPassword] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(false);
    const [values, setValues] = useState<RegisterFormValues>({
        fullName: '',
        username: '',
        password: '',
        email: '',
        confirmedPassword: '',
    });
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleChange = (values: RegisterFormValues) => {
        setValues(values);
        form.resetFields();
        setValues({ username: '', password: '', confirmedPassword: '', fullName: '', email: '' });
    };

    return (
        <FormControls
            handlePasswordChange={handlePasswordChange}
            password={password}
            setPassword={setPassword}
            validator={validateFields}
            disabled={disabled}
            form={form}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
        ></FormControls>
    );
};
