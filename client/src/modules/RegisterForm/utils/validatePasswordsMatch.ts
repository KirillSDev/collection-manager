import { useFormikContext } from 'formik';

export const validatePasswordMatch = (value: string, passwordFieldValue?: string): Promise<any> => {
    if (!value.length) {
        return Promise.reject('Please confirm your password!');
    }
    if (value !== passwordFieldValue) {
        return Promise.reject('Passwords do not match.');
    } else {
        return Promise.resolve();
    }
};
