import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const ViewOnly = () => {
    const studentInfo =useLoaderData()
    const { fullName, classDevision,rollNumber,addressLine1,addressLine2,landmark,city,pincode} = studentInfo;

   
    const [firstName, middleName, lastName] = fullName.split(" ");
    const [className, division] = classDevision.split("-")  
    return (
        <div>
  <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            defaultValue={firstName}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            defaultValue={middleName}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            defaultValue={lastName}
            
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
        label="Class Name"
              labelId="class-label"
              defaultValue={className}
              InputProps={{
                readOnly: true,
              }}
           />
        </Grid>

        <Grid item xs={12} sm={4}>
     
        <TextField
        label="Division"
          labelId="division-label"
          
          defaultValue={division}
          InputProps={{
            readOnly: true,
          }}
/>
    
      </Grid> 
      <Grid item xs={12} sm={4}>
      <TextField
        label="Roll Number"
        defaultValue={rollNumber}
        type='number'
      fullWidth
        inputProps={{
          min: "1",
          max: "99",
          maxLength: 2
        }}
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
        label="Address Line 1"
        rowsMin={3}
        placeholder="Address Line 1"
        fullWidth
        defaultValue={addressLine1}
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid>

      <Grid item xs={12} sm={6}>
      <TextField
        label="Address Line 2"
        rowsMin={3}
        placeholder="Address Line 2"
        fullWidth
        defaultValue={addressLine2}
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      
               <TextField
        label="Landmark"
        fullWidth
        defaultValue={landmark}
        InputProps={{
          readOnly: true,
        }}
        
      />
     </Grid>
     <Grid item xs={12} sm={4}>
      <TextField
        label="City"
        fullWidth
        defaultValue={city}
        InputProps={{
          readOnly: true,
        }}
        
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
        label="Pincode"
        fullWidth
        type="number"
        defaultValue={pincode}
        inputProps={{
          maxLength: 6
        }}
          InputProps={{
            readOnly: true,
          }}
             
      />
    </Grid>
    </Grid>
      </form>
        </div>
    );
};

export default ViewOnly;