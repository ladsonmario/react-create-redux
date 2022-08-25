import { useRoutes } from 'react-router-dom';
import { Feed } from '../pages/Feed';
import { Home } from '../pages/Home';

export const MainRouter = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/feed', element: <Feed />}
    ]);
}