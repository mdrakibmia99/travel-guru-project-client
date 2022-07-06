import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import styled from '@emotion/styled';
import facebook from '../assets/icons/fb.png';
import google from '../assets/icons/google.png';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const theme = createTheme();

const SigninBox = () => {
    const [remember, setRemember] = React.useState(true);
    const [signInWithFacebook, fbUser] = useSignInWithFacebook(auth);
    const [signInWithGoogle, gglUser] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        signInWithEmailAndPassword(email, password);
    };

    if (fbUser || gglUser || user) {
        navigate('/', { replace: true });
    }

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
                        Sign in
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/reset" style={{
                                    color: '#ffad4b',
                                    fontSize: '15px'
                                }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register" style={{
                                    color: '#ffad4b',
                                    fontSize: '15px'
                                }}>
                                    {"Don't have an account?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Stack spacing={2} sx={{ mt: 1, mb: 1, width: '100%' }}>
                        <span style={{
                            color: 'black',
                            textAlign: "center"
                        }}
                            id='alternative-divider'
                        >or</span>
                        <Item
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'space-between',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => signInWithFacebook()}
                        >
                            <img
                                src={facebook}
                                alt="fb"
                                style={{
                                    height: '37px',
                                    width: '37px'
                                }}
                            />
                            Continue with Facebook
                        </Item>
                        <Item
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'space-between',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => signInWithGoogle()}
                        >
                            <img
                                src={google}
                                alt="ggl"
                                style={{
                                    height: '37px',
                                    width: '37px'
                                }}
                            />
                            Continue with Google
                        </Item>
                    </Stack>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default SigninBox;