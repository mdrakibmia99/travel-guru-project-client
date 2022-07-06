import { Container } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import SigninBox from '../components/SigninBox';

const Login = () => {
    return (
        <div className='bg-image-overlay'>
            <Container maxWidth="lg">
                <Header />
                <SigninBox />
            </Container>
        </div>
    );
};

export default Login;
