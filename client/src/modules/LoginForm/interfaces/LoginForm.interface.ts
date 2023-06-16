import { FormValues } from '@interfaces/AuthForm.interface';

export interface LoginFormValues extends Pick<FormValues, 'username' | 'password'> {}
