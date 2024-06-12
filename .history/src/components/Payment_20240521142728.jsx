import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Payment = () => {
  return (
    <div className='mt-20 px-14'>
      <h1>Checkout</h1>
      <div className='flex'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '40%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="name"
              id="outlined-size-small"
              size="small"
            />
          </div>
          <div>
            <TextField
              label="email"
              id="outlined-size-small"
              size="small"
            />
          </div>
          <div>
            <TextField
              label="phone"
              id="outlined-size-small"
              size="small"
            />
          </div>
          <div>
            <TextField
              label="address"
              id="outlined-size-small"
              size="small"
            />
          </div>
        </Box>
      </div>
      <div>dơn hàng</div>
    </div>
  )
}
