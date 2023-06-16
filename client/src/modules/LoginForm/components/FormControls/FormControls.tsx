import { FC } from 'react';
import cn from 'classnames';
import Input from 'antd/es/input/Input';
import { Form, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormControlsProps } from './FormControls.props';
import styles from './FormControls.module.scss';

export const FormControls: FC<FormControlsProps> = ({
    disabled,
    form,
    handleChange,
    setValues,
    values,
}): JSX.Element => {
    return (
        <div className={cn(styles.container, 'col-md-7 col-xl-4')}>
            <div className={styles['auth-header']}>
                <h6 className={styles['auth-header__title']}>Log in</h6>
            </div>
            <Form form={form} onFinish={handleChange}>
                <Form.Item
                    name={'username'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    initialValue={values.username}
                >
                    <Input allowClear={true} placeholder='Username' prefix={<UserOutlined />}></Input>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    initialValue={values.password}
                >
                    <Input type='password' placeholder='Password' prefix={<LockOutlined />}></Input>
                </Form.Item>
                <Form.Item>
                    <Button disabled={disabled} type='primary' htmlType='submit' className='col-12'>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
