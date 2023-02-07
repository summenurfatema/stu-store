import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Button,
  Grid,
  alertClasses
//   Input,
//   Typography
} from '@mui/material';

function AddStudentForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [className, setClassName] = useState('');
  const [division, setDivision] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  



  function handleSubmit(event) {
    event.preventDefault();
    // You can add code here
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
    fetch("http://localhost:5000/add-student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(`You have added a post successfully`);
        
        } else {
         alert("Error");
        }
      })
      .catch((err) => alert(err));
 


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
                <MenuItem key={classNum} value={classNum}>
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
        onChange={event => setRollNumber(event.target.value)}
      fullWidth
        inputProps={{
          min: "1",
          max: "99",
    
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
      {/* <input
        type="file"
        value={profilePicture}
        accept="image/*"
        onChange={event => setProfilePicture(event.target.files[0])}
      
        
      /> */}
      <Grid>
    <Button  onClick={handleSubmit} variant="contained" >Send</Button>
    </Grid>
      </Grid>
      </form>
      </div>
  )
          }
          export default AddStudentForm;