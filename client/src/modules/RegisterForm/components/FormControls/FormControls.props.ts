import { FormInstance } from 'antd';
import { RegisterFormValues } from '../../interfaces/RegisterForm.interface';
import { RuleObject } from 'antd/es/form';

export interface FormControlsProps {
    values: RegisterFormValues;
    form: FormInstance<any> | undefined;
    disabled: boolean;
    password: string;
    handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleChange: (values: RegisterFormValues) => void;
    validator?: (
        field: string,
        fieldValue?: string
    ) => (rule: RuleObject, value: string, callback: (error?: string | undefined) => void) => Promise<any>;
    setValues: React.Dispatch<React.SetStateAction<RegisterFormValues>>;
}
