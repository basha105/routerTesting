import App from './App.jsx';
import ErrorPage from './notFound.jsx';
import Profile from './Profile.jsx';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />
    },
];

export default routes;