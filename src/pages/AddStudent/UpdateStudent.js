import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState }  from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateStudent = () => {


  const navigate = useNavigate()
    const studentInfo = useLoaderData()
    const { fullName, classDevision,rollNumber,addressLine1,addressLine2,landmark,city,pincode} = studentInfo;


    const [firstName, setFirstName] = useState(fullName.split(" ")[0] || '');
    const [middleName, setMiddleName] = useState(fullName.split(" ")[1] || '');
    const [lastName, setLastName] = useState(fullName.split(" ")[2] || '');
    const [className, setClassName] = useState(classDevision.split("-")[0] || '');
    const [division, setDivision] = useState(classDevision.split("-")[1] || '');
    const [roll, setRoll] = useState(rollNumber || 0);
    const [add1, setAdd1] = useState(addressLine1 || '');
    const [add2, setAdd2] = useState(addressLine2 || '');
    const [lndMrk, setLndMrk] = useState(landmark || '');
    const [cty, setCty] = useState(city || '');
    const [pin, setPin] = useState(pincode || 0);
  
  
    function handleSubmit(event) {
      event.preventDefault();

const fullName = `${firstName} ${middleName} ${lastName}`;
const classDivision = `${className}-${division}`;

const studentData = {
  fullName,
  classDivision,
  roll,
  add1,
  add2,
  lndMrk,
  cty,
  pin,
};
console.log(studentData);

//https://stu-store-server.vercel.app/updated-data
      fetch(
        `http://localhost:5000/updated-data/${studentInfo._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(studentData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {

            alert('Data Updated Successfully')
            navigate('/manage-student')
          }
        })
        .catch((err) => console.error(err));
      }   
    return (
        <div>
       <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            defaultValue={firstName}
            fullWidth
            onChange={event => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            defaultValue={middleName}
            onChange={event => setMiddleName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            defaultValue={lastName}
            name="lName"
            onChange={event => setLastName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="class-label">Class</InputLabel>
            <Select
              labelId="class-label"
              onChange={event => setClassName(event.target.value)}

              value={className}
              
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
          onChange={event => setDivision(event.target.value)}
          value={division}
          
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
        defaultValue={rollNumber}
        type='number'
      fullWidth
      onChange={event => setRoll(event.target.value)}
      inputProps={{
        min: '1',
        max: '99',
        pattern: '[0-9]{2}',
      }}
     
      />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
        label="Address Line 1"
        rowsMin={3}
        placeholder="Address Line 1"
        fullWidth
        name="ad1"
        onChange={event => setAdd1(event.target.value)}
        defaultValue={addressLine1}
     
      />
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
        label="Address Line 2"
        rowsMin={3}
        placeholder="Address Line 2"
        name="ad2"
        fullWidth
        defaultValue={addressLine2}
        onChange={event => setAdd2(event.target.value)}
 
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      
               <TextField
        label="Landmark"
        fullWidth
        name="lm"
        defaultValue={landmark}
        onChange={event => setLndMrk(event.target.value)}
        
      />
     </Grid>
     <Grid item xs={12} sm={4}>
      <TextField
        label="City"
        fullWidth
        name="ct"
        defaultValue={city}
        onChange={event => setCty(event.target.value)}

        
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
        label="Pincode"
        fullWidth
        type="number"
        defaultValue={pin}
        onChange={event =>
          event.target.value.length <= 6 && setPin(event.target.value)
        }
        inputProps={{
          maxLength: 6
        }}
        
        
      />
      </Grid>
   
      <Grid>
    <Button style={{marginLeft:"15px", backgroundColor:"#f62f76"}}  onClick={handleSubmit} variant="contained" >Update</Button>
    </Grid>
      </Grid>
      </form>
        </div>
    );
};

export default UpdateStudent;