import {
    Box,
    Card,
    CardContent,
    Typography,
    Checkbox,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Link,
    Button,
} from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function LoginPage() {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Box>
                        <Dashboard />
                    </Box>
                    <Box>
                        <Typography variant="h2">Sign In</Typography>
                        <Typography variant="p">Login with your Credentials.</Typography>
                    </Box>
                    <form action="">
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel htmlFor="auth-login-email" required>
                                Email
                            </InputLabel>
                            <OutlinedInput label="Email" id="auth-login-email" autoFocus />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="auth-login-password" required>
                                Password
                            </InputLabel>
                            <OutlinedInput
                                label="Password"
                                // value={value.password}
                                id="auth-login-password"
                                name="password"
                                // onChange={handleChange}
                                // type={value.showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            aria-label="toggle password visibility"
                                        >
                                            <VisibilityIcon />
                                            {/* <VisibilityOffIcon /> */}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={rememberMe}
                                    // onChange={handleRememberMeChange}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        <Button fullWidth size="large" variant="contained" sx={{ marginBottom: 3 }}>
                            Sign in
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}

export default LoginPage;
