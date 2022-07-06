import React, { useState } from 'react';
import '../App.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Button from '@mui/material/Button'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();

const BookingSection = ({ id, travels }) => {
    const [selected, setSelected] = React.useState(new Date());
    const [showCalender, setShowCalender] = useState(true);

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <section>
            <div id='booking-section'>
                <div>
                    {
                        travels.map(travel =>
                            travel._id === id
                            &&
                            <div key={travel._id}>
                                <h2 className='tour-title'>{travel.travelName}</h2>
                                <p className='tour-desc'>{travel.travelDescription}</p>
                            </div>)
                    }
                </div>
                <div
                >
                    <ThemeProvider theme={theme}>
                        <Container component={'main'} maxWidth='xs'>
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    padding: '.5rem 1rem',
                                    borderRadius: '5px',
                                    boxShadow: '0px 0px 10px 0px rgba(64,59,59,0.75)'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => setShowCalender(!showCalender)}
                                    style={{
                                        color: 'black',
                                        backgroundColor: '#ffa939',
                                        marginBottom: '.5rem'
                                    }}
                                >
                                    {showCalender ? 'Hide Calender ⬆️' : 'Show Calender ⬇️' }
                                </Button>
                                {
                                    showCalender
                                    &&
                                    <div
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                                            width: 'fit-content',
                                            padding: '1rem',
                                            borderRadius: "5px"
                                        }}
                                    >
                                        <DayPicker
                                            mode="single"
                                            selected={selected}
                                            onSelect={setSelected}
                                            footer={footer}
                                        />
                                    </div>
                                }
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
