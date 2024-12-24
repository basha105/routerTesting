import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Profile.jsx';
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
