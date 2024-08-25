import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import CreateStory from './pages/CreateStory/CreateStory';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import StoryDetails from './pages/StoryDetails/StoryDetails';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/createStory",
                element: <PrivateRoute><CreateStory></CreateStory></PrivateRoute>
            },
            {
                path: "/storyDetails/:id",
                element: <PrivateRoute><StoryDetails></StoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://story-loom-server.vercel.app/stories/${params.id}`)
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
