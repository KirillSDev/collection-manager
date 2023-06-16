import { FormInstance } from 'antd';
import { LoginFormValues } from '../../interfaces/LoginForm.interface';

export interface FormControlsProps {
    values: LoginFormValues;
    form: FormInstance<any> | undefined;
    disabled: boolean;
    handleChange: (values: LoginFormValues) => void;
    setValues: React.Dispatch<React.SetStateAction<LoginFormValues>>;
}
