import { createBrowserRouter } from "react-router-dom";
import AddStudentForm from "../AddStudent/AddStudent";
import Main from "../layout/Main";
import StudentTable from "../StudentTable/StudentTable";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<StudentTable/>
            },
            {
                path:'/addstudent',
                element:<AddStudentForm/>
            }
        ]
    }
])