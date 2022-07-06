import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            <Link to="https://github.com/hasibulislam999" style={{ color: '#ffad4b' }}>
                Travel Guru
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const ResetBox = () => {
    const [remember, setRemember] = React.useState(true);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');

        await sendPasswordResetEmail(email);
        event.target.reset();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: '.5rem 1rem',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px 0px rgba(64,59,59,0.75)'
                    }}
                >
                    <Avatar sx={{
                        m: 1,
                        bgcolor: '#ffad4b',
                        boxShadow: '0px 0px 10px 0px rgba(64,59,59,0.55)',
                        color: 'black'
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'black' }}>
                        Reset Password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <FormControlLabel style={{ color: 'gray' }}
                            control={<Checkbox
                                value="remember"
                                color="primary"
                                onClick={() => setRemember(!remember)}
                            />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                backgroundColor: '#ffa939',
                                color: 'black'
                            }}
                            disabled={remember}
                        >
                            Reset
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default ResetBox;
