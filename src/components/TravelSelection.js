import React, { useEffect, useState } from 'react';
import useTravels from '../utilities/useTravels';
import '../App.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';


const TravelSelection = () => {
    const [current, setCurrent] = useState(0);
    const [travels] = useTravels();

    return (
        <section>
            <div className='travel-selection'>
                <div>
                    <h2 id=''>Cox's Bazar</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id odio. Perspiciatis laudantium voluptatum consequatur, autem iste possimus libero similique voluptatibus itaque eaque ullam doloribus ipsum eius inventore, odit quis?

                    </p>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#F9A51A",
                            color: "black",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Booking <ArrowRight />
                    </Button>
                </div>
                <div
                    style={{ textAlign: "right" }}
                    id="slider"
                >
                    <div id='slider1'>
                        {
                            travels.map((travel, index) => !(current === index) && <img
                                src={travel.travelImage}
                                alt={travel.travelName}
                                style={{
                                    width: "250px",
                                    height: "350px",
                                    border: `${current === index && `5px solid #F9A51A`}`,
                                    borderRadius: "25px"
                                }}
                            />)
                        }
                    </div>
                    <div id='slider2'>
                        {
                            travels.map((travel, index) => current === index && <img
                                src={travel.travelImage}
                                alt={travel.travelName}
                                style={{
                                    width: "270px",
                                    height: "416px",
                                    border: `${current === index && `5px solid #F9A51A`}`,
                                    borderRadius: "25px"
                                }}
                            />)
                        }
                    </div>
                </div>
            </div>
            <div
                style={{ textAlign: "center" }}
            >
                <Button variant="text" style={{
                    color: "white",
                    height: "47px",
                    width: "47px"
                }}
                    onClick={() => setCurrent(!(current === 0) ? current - 1 : travels.length - 1)}
                >
                    <ArrowCircleLeftOutlinedIcon
                        style={{
                            height: "47px",
                            width: "47px"
                        }}
                    />
                </Button>
                <Button variant="text" style={{
                    color: "white",
                    height: "47px",
                    width: "47px"
                }}
                    onClick={() => setCurrent(current === travels.length - 1 ? 0 : current + 1)}
                >
                    <ArrowCircleRightOutlinedIcon
                        style={{
                            height: "47px",
                            width: "47px"
                        }}
                    />
                </Button>
            </div>
        </section>
    );
};

export default TravelSelection;
