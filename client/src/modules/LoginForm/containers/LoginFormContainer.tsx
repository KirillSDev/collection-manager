import { FC, useEffect, useState } from 'react';
import { LoginFormValues } from '../interfaces/LoginForm.interface';
import { FormControls } from '../components/FormControls/FormControls';
import { useForm } from 'antd/es/form/Form';

export const LoginFormContainer: FC = (): JSX.Element => {
    const [form] = useForm();
    const [disabled, setDisabled] = useState<boolean>(false);
    const [values, setValues] = useState<LoginFormValues>({
        username: '',
        password: '',
    });
    const handleChange = (values: LoginFormValues) => {
        setValues(values);
        console.log(values);
        form.resetFields();
        setValues({ username: '', password: '' });
    };

    return (
        <FormControls
            disabled={disabled}
            form={form}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
        ></FormControls>
    );
};
