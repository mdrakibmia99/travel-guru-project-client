import { Container } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import ResetBox from '../components/ResetBox';

const Reset = () => {
    return (
        <div className='bg-image-overlay'>
            <Container maxWidth="lg">
                <Header />
                <ResetBox />
            </Container>
        </div>
    );
};

export default Reset;
