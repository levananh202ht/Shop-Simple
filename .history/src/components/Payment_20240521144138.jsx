import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Payment = () => {
  return (
    <div className='mt-20 px-14'>
      <h1>Checkout</h1>
      <div className='flex'>
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
                size="name"
              />
            </div>
            <div>
              <TextField
                label="email"
                id="outlined-size-small"
                name="email"
              />
            </div>
            <div>
              <TextField
                label="phone"
                id="outlined-size-small"
                size="phone"
              />
            </div>
            <div>
              <TextField
                id="standard-multiline-flexible"
                label="address"
                multiline
                maxRows={4}
              />
            </div>
          </Box>
        </div>
        <div>dơn hàng</div>
      </div>
    </div>
  )
}
