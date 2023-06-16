import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Button } from '@mui/material';
import { Main } from './Main/Main';
import { useNavigate } from 'react-router-dom';
export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div>
            <Header title='XCollection'>
                <Button
                    onClick={() => {
                        navigate('login');
                    }}
                    color={'error'}
                    variant={'contained'}
                    size={'small'}
                >
                    Log in
                </Button>
                <Button
                    onClick={() => {
                        navigate('register');
                    }}
                    color={'error'}
                    variant={'outlined'}
                    size={'small'}
                >
                    Sign up
                </Button>
            </Header>
            <Main>{children}</Main>
        </div>
    );
};
