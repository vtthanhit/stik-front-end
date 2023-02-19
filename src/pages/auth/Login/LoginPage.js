import { useState } from 'react';
import {
    Box,
    Typography,
    Checkbox,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Link,
    Button,
    Container,
    Paper,
    Grid,
    TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Dashboard } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const FlexCenterBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
});

function LoginPage() {
    const [value, setValue] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [errors, setErrors] = useState({});
    
    const handleChange = (prop) => (event) => { 
        setValue({
            ...value,
            [prop]: event.target.value,
        });
    };
    
    const handleClickShowPassword = () => setValue({
        ...value,
        showPassword: !value.showPassword,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (value.email === "") {
            newErrors.email = "Email is required";
        }
        if (value.password === "") {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
    }

    return (
        <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Paper elevation={6} sx={{ width: '500px', padding: '32px' }}>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction='column'>
                    <Grid item xs={12} sx={{ padding: '12px' }}>
                        <FlexCenterBox>
                            <Dashboard color='primary' sx={{ width: '100px', height: '100px' }} />
                        </FlexCenterBox>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '12px' }}>
                        <FlexCenterBox>
                            <Typography variant="h2">Sign In</Typography>
                        </FlexCenterBox>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '12px' }}>
                        <FlexCenterBox>
                            <Typography variant="p">Login with your Credentials.</Typography>
                        </FlexCenterBox>
                    </Grid>
                        <Grid item xs={12} sx={{ padding: '12px' }}>
                            <TextField 
                                fullWidth 
                                value={value.email} 
                                label="Email" 
                                autoFocus 
                                onChange={handleChange("email")} 
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ padding: '12px' }}>
                            <TextField
                                fullWidth
                                label="Password"
                                value={value.password}
                                onChange={handleChange("password")}
                                type={value.showPassword ? 'text' : 'password'}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={handleClickShowPassword}
                                                aria-label="toggle password visibility"
                                            >
                                            {
                                                value.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> 
                                            }
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Link href="#" variant="body2" sx={{ fontSize: '1rem', textDecoration: 'none' }}>
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item xs={12} sx={{ padding: '12px' }}>
                        <Button type="submit" fullWidth size="large" variant="contained">
                            Sign in
                        </Button>
                        </Grid>
                </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default LoginPage;
