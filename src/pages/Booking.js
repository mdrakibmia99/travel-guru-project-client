import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import BookingSection from '../components/BookingSection';
import Header from '../components/Header';
import useTravels from '../utilities/useTravels';

const Booking = () => {
    const {id} = useParams();
    const [travels] = useTravels();
    return (
        <div className='bg-image-overlay'>
            <Container maxWidth="lg">
                <Header />
                <BookingSection id={id} travels={travels} />
            </Container>
        </div>
    );
};

export default Booking;