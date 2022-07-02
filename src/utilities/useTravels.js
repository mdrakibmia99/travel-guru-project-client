import { useEffect, useState } from 'react';

const useTravels = () => {
    const [travels, setTravels] = useState([]);
    useEffect(() => {
        const url = `/travel.json`;
        const getTravels = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setTravels(response);
        };
        getTravels();
    }, []);

    return [travels];
};

export default useTravels;
