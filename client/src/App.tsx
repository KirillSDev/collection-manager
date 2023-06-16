import { Layout } from '@layout/Layout';
import { FC } from 'react';
import { LoginForm, RegisterForm } from './modules';
import { Route, Routes } from 'react-router-dom';

const App: FC = (): JSX.Element => {
    return (
        <Layout>
            <Routes>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegisterForm />} />
            </Routes>
        </Layout>
    );
};

export default App;
