import './App.css';
import { router } from './routes/router';
import { RouterProvider } from 'react-router-dom';
// require('dotenv').config()

function App() {
  return (
    <RouterProvider router={router}  />
  );
}

export default App;
