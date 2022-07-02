import React from 'react';
import logo from '../logo.png';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '370px !important',
        height: '44px !important',
        border: '1px solid #FFFFFF',
        borderRadius: "5px",
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '6ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <section>
            <div className='header'>
                <div>
                    <Link to={'/home'}>
                        <img
                            src={logo}
                            alt="header-logo"
                            style={{
                                width: "120.26px",
                                height: "56px",
                                objectFit: "cover"
                            }}
                        />
                    </Link>
                </div>
                <div className='start-destination'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search your destination…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#F9A51A",
                            color: "black"
                    }}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Header;
