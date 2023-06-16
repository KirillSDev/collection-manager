import { FC, useEffect } from 'react';
import cn from 'classnames';
import { Form, Button, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, SmileOutlined } from '@ant-design/icons';
import { FormControlsProps } from './FormControls.props';
import styles from './FormControls.module.scss';

export const FormControls: FC<FormControlsProps> = ({
    disabled,
    form,
    password,
    handlePasswordChange,
    setPassword,
    handleChange,
    setValues,
    validator,
    values,
}): JSX.Element => {
    return (
        <div className={cn(styles.container, 'col-md-7 col-xl-4')}>
            <div className={styles['auth-header']}>
                <h6 className={styles['auth-header__title']}>Sign up</h6>
            </div>

            <Form form={form} onFinish={handleChange}>
                <Form.Item
                    className={styles.input}
                    name={'fullName'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                    ]}
                    hasFeedback
                    initialValue={values.fullName}
                >
                    <Input allowClear={true} placeholder='Full Name' prefix={<SmileOutlined />}></Input>
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name={'email'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'Not a valid email address!',
                        },
                    ]}
                    hasFeedback
                    initialValue={values.email}
                >
                    <Input allowClear={true} placeholder='Email' prefix={<MailOutlined />}></Input>
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name={'username'}
                    rules={[
                        {
                            validator: validator!('username'),
                        },
                    ]}
                    hasFeedback
                    initialValue={values.username}
                >
                    <Input allowClear={true} placeholder='Username' prefix={<UserOutlined />}></Input>
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name={'password'}
                    rules={[
                        {
                            validator: validator!('password'),
                        },
                    ]}
                    hasFeedback
                    initialValue={values.password}
                >
                    <Input.Password
                        onChange={handlePasswordChange}
                        placeholder='Password'
                        prefix={<LockOutlined />}
                    ></Input.Password>
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name={'confirmedPassword'}
                    rules={[
                        {
                            validator: validator!('confirmedPassword', password),
                        },
                    ]}
                    hasFeedback
                    initialValue={values.confirmedPassword}
                >
                    <Input.Password placeholder='Confirm password' prefix={<LockOutlined />}></Input.Password>
                </Form.Item>
                <Form.Item>
                    <Button disabled={disabled} type='primary' htmlType='submit' className='col-12'>
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
