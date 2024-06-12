import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Payment = () => {
  const [fromData,setFromData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleChange = (e) => {
    const {name,value } = e.target;
    setFromData({
      ...fromData,
      [name]: value,
    })
  }
  console.log(fromData,"fromDatafromData");
  return (
    <div className='mt-20 px-14'>
      <h1>Checkout</h1>
      <div className='flex'>
        <form  onSubmit={handleSubmit}>
          <div className=''>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="name"
                  id="outlined-size-small"
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div>
                <TextField
                  label="email"
                  id="outlined-size-small"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div>
                <TextField
                  label="phone"
                  id="outlined-size-small"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="address"
                  name="address"
                  onChange={handleChange}
                  multiline
                  maxRows={4}
                />
              </div>
            </Box>
          </div>
        </form>
        <div className=''> 
          <div>dơn hàng</div>
        </div>
      </div>
    </div>
  )
}
