import React from 'react';
import Container from '@mui/material/Container'
import Header from '../components/Header';
import TravelSelection from '../components/TravelSelection';

const Home = () => {
    return (
        <div className='bg-image-overlay'>
            <Container maxWidth="lg">
                <Header />
                <TravelSelection />
            </Container>
        </div>
    );
};

export default Home;
