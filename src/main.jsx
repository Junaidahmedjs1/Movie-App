import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import MovieDetail from './pages/MovieDetail.jsx';
import Search from './pages/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",      
    element: <Layout />,
    children: [
      {
        path: "/",   
        element: <Home />
      },
      {
        path: "/movie/:id", 
        element: <MovieDetail />
      },
      {
        path: "search",   
        element: <Search />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

