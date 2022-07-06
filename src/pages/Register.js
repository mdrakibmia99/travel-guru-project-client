import { Container } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import SignupBox from '../components/SignupBox';

const Register = () => {
    return (
        <div className='bg-image-overlay'>
            <Container maxWidth="lg">
                <Header />
                <SignupBox />
            </Container>
        </div>
    );
};

export default Register;
