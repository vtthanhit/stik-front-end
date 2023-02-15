import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <StyledEngineProvider injectFirst>
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
            </StyledEngineProvider>
        </Router>
    );
}

export default App;
