import { createBrowserRouter } from "react-router-dom";
import AddStudentForm from "../pages/AddStudent/AddStudent";
import Main from "../layout/Main";
import StudentTable from "../pages/StudentTable/StudentTable";
import SignUp from "../pages/SignUp/SignUp";
import Login  from "../pages/Login/Login";
import UpdateStudent from "../pages/AddStudent/UpdateStudent";
import ViewOnly from "../pages/ViewOnly/ViewOnly";
import PrivateRoute from "./PrivateRoute";
//import { Login } from "@mui/icons-material";

export const router = createBrowserRouter([


    {
        path:'/',
        element:<PrivateRoute> <Main/> </PrivateRoute>,
        children:[
           
            
            {
                path:'/manage-student',
                element:<StudentTable/>
            },
            {
                path:'/add-student',
                element:<AddStudentForm/>
            },
            {
                path:'/update-student/:id',
                element:<UpdateStudent />,
                loader: ({params}) => fetch(`https://stu-store-server.vercel.app/student/${params.id}`)
            },
            
            {
                path:'/view-data/:id',
                element:<ViewOnly />,
                loader: ({params}) => fetch(`https://stu-store-server.vercel.app/student/${params.id}`)
            }
            
        ]
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>,
    },
   
   
])