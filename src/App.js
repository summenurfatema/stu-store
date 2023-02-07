import logo from './logo.svg';
import './App.css';
import AddStudentForm from './AddStudent/AddStudent';
import { router } from './route/Root';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
