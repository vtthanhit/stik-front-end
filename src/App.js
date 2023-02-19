import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import { publicRoutes, privateRoutes } from './routes';
import theme from './themes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout ? route.layout : DefaultLayout;
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

                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout ? route.layout : DefaultLayout;
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
