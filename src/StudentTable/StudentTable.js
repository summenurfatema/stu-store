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



const useStyles = makeStyles({
    table: {
      width: '100%',
      '& th': {
        width: '25%'
      },
      '& td': {
        width: '25%'
      },
    },
  });

const StudentTable = () => {
    const classes = useStyles();
    const [students, setStudents] = useState([])
    useEffect(()=>{
fetch('datas.json')
.then(res=>res.json())
.then(data=>setStudents(data))
    },[students])
    return (
        <div>
            <TableContainer component={Paper}>
     <Table aria-label="simple table" className={classes.table} >
       <TableHead >
         <TableRow >
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Class</TableCell>
           <TableCell align="right">Roll</TableCell>
           <TableCell align="right">View / Edit / Delete</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
            {
                 students.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="right" component="th" scope="row">
                        {row.fullName}
                      </TableCell>
                      <TableCell align="right">{row.className}</TableCell>
                      <TableCell align="right">{row.rollNumber}</TableCell>
                      <TableCell align="right">
                             <RemoveRedEyeIcon/> 
                               <Link to='/add-student'><EditIcon/></Link>
                               <DeleteIcon/>
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