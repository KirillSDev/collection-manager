import { RuleObject } from 'antd/es/form';

import { validatePassword } from './validatePassword';
import { validatePasswordMatch } from './validatePasswordsMatch';
import { validateUsername } from './validateUsername';

export const validateFields =
    (field: string, fieldValue?: string) =>
    (rule: RuleObject, value: string, callback: (error?: string | undefined) => void) => {
        const rules: Record<string, (value: string, fieldValue?: string) => Promise<any>> = {
            username: validateUsername,
            password: validatePassword,
            confirmedPassword: validatePasswordMatch,
        };
        console.log(fieldValue);
        const validate = rules[field];
        return fieldValue ? validate(value, fieldValue) : validate(value);
    };
