import React, { useEffect, useState } from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { toast } from 'react-hot-toast';



const useStyles = makeStyles({
    table: {
      width: '100%',
      '& th': {
        width: '25%'
      },
      '& td': {
        width: '25%'
      },
      icon:{
     
  }
}
  });


const StudentTable = () => {
  const classes = useStyles();
  const [students, setStudents] = useState([])

useEffect(()=>{
    fetch('https://stu-store-server.vercel.app/all-student-data')
   .then(res=>res.json())
   .then(data=>setStudents(data))
    },[students])

    // handle delete 
const handleDelete = (_id) => {
  const process = window.confirm(
    "Are you confirm to delete?"
  );
  if (process) {
    fetch(`https://stu-store-server.vercel.app/student-data/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("This information is deleted");
          
        }
      })
      .catch((err) => console.error(err.message));
  }
};


    return (
        <div>
            <TableContainer component={Paper} >
     <Table aria-label="simple table" className={classes.table} >
       <TableHead >
         <TableRow >
           <TableCell align="right">Student Name</TableCell>
           <TableCell align="right">Class Name</TableCell>
           <TableCell align="right">Roll Number</TableCell>
           <TableCell align="right">View / Edit / Delete</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
            {
                 students.map((student) => (
                    <TableRow key={student._id}>
                      <TableCell align="right" component="th" scope="row">
                        {student.fullName}
                      </TableCell>
                      <TableCell align="right">{student.classDevision}</TableCell>
                      <TableCell align="right">{student.rollNumber}</TableCell>
                      <TableCell  className={classes.icon} align="right">

                            <Link to={`/view-data/${student._id}`}>
                               <RemoveRedEyeIcon  style={{ color: '#F62F76',padding:"0px 5px" }} /> 
                            </Link>

                            <Link to={`/update-student/${student._id}`}> 
                               <EditIcon style={{ color: '#F62F76',padding:"0px 5px" }}/>
                            </Link>
                            
                               <DeleteIcon onClick={()=>handleDelete(student._id)} style={{ color: '#F62F76',padding:"0px 5px" }}/>
                        </TableCell>
                    </TableRow>)
                 )
            }
            </TableBody>
            </Table>
   </TableContainer>
        </div>
    );
};

export default StudentTable;