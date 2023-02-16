import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import { publicRoutes } from './routes';
import theme from './themes';

function App() {
    return (
        <Router>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout;
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                </ThemeProvider>
            </StyledEngineProvider>
        </Router>
    );
}

export default App;
