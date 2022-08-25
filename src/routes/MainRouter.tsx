import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const MainRouter = () => {
    return useRoutes([
        {path: '/', element: <Home />}
    ]);
}