import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



function AddStudentForm() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [className, setClassName] = useState('');
  const [division, setDivision] = useState('');
  const [rollNumber, setRollNumber] = useState(0);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState(0)
 

  function handleSubmit(event) {
    event.preventDefault();
    const fullName =`${firstName} ${middleName} ${lastName} `;
    const classDevision =`${className}-${division}`

    const studentData = {
          fullName,
          classDevision,
            rollNumber,
            addressLine1,
            addressLine2,
            landmark,
            city,
            pincode
    }

    // post 

    fetch("https://stu-store-server.vercel.app/add-student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
        toast.success(`You have added ${studentData?.fullName} successfully`);
          navigate('/manage-student')
        
        } else {
         alert("Error");
        }
      })
      .catch((err) => toast.error(err));

}

  return (
    <div>
     <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            value={middleName}
            onChange={event => setMiddleName(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="class-label">Class</InputLabel>
            <Select
              labelId="class-label"
              value={className}
              onChange={event => setClassName(event.target.value)}
            >
              {
              
              ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].map(classNum =>(
                <MenuItem key={classNum} value={classNum} >
                  {classNum}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
      <FormControl fullWidth>
        <InputLabel id="division-label">Division</InputLabel>
        <Select
          labelId="division-label"
          value={division}
          onChange={event => setDivision(event.target.value)}
        >
          {['A', 'B', 'C', 'D', 'E'].map(div => (
            <MenuItem key={div} value={div}>
              {div}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      
      <Grid item xs={12} sm={4}>
      <TextField
        label="Roll Number"
        value={rollNumber}
        type='number'
        onChange={event =>
          event.target.value.length <= 2 && setRollNumber(event.target.value)
        }
        inputProps={{
          maxLength: 2
        }}
      />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
        label="Address Line 1"
        rowsMin={3}
        placeholder="Address Line 1"
        fullWidth
        value={addressLine1}
        onChange={event => setAddressLine1(event.target.value)}
      />
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
        label="Address Line 2"
        rowsMin={3}
        placeholder="Address Line 2"
        fullWidth
        value={addressLine2}
        onChange={event => setAddressLine2(event.target.value)}
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      
               <TextField
        label="Landmark"
        fullWidth
        value={landmark}
        onChange={event => setLandmark(event.target.value)}
        
      />
     </Grid>

     <Grid item xs={12} sm={4}>
      <TextField
        label="City"
        fullWidth
        value={city}
        onChange={event => setCity(event.target.value)}
        
      />
      </Grid>

      <Grid item xs={12} sm={4}>
      <TextField
        label="Pincode"
        fullWidth
        type="number"
        value={pincode}
        onChange={event =>
          event.target.value.length <= 6 && setPincode(event.target.value)
        }
        inputProps={{
          maxLength: 6
        }}
        
      />
      </Grid>
   <Grid>
      <Button style={{marginLeft:"15px", backgroundColor:"#f62f76"}}  onClick={handleSubmit} variant="contained" >Send</Button>
    </Grid>
      </Grid>
      </form>
      </div>
  )
}
export default AddStudentForm;