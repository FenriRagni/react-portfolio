import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',

    element: <App />,

    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/About',
        element: <About/>
      },
      {
        path: '/Projects',
        element: <Projects/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)